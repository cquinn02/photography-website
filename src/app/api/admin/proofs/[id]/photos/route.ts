import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'
import { uploadToS3, deleteFromS3, getKeyFromUrl } from '@/lib/s3'
import { parseFilename } from '@/lib/filename-parser'
import { addWatermark } from '@/lib/watermark'
import { v4 as uuidv4 } from 'uuid'

async function isAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

// POST - Upload photos to a proof gallery
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const startTime = Date.now()
  console.log('[PROOF UPLOAD] === Starting proof photo upload ===')

  if (!(await isAuthenticated())) {
    console.log('[PROOF UPLOAD] Auth failed')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  console.log('[PROOF UPLOAD] Auth passed, time:', Date.now() - startTime, 'ms')

  try {
    const { id: proofGalleryId } = await params
    console.log('[PROOF UPLOAD] Gallery ID:', proofGalleryId)

    // Verify proof gallery exists
    const proofGallery = await prisma.proofGallery.findUnique({ where: { id: proofGalleryId } })
    if (!proofGallery) {
      console.log('[PROOF UPLOAD] Gallery not found')
      return NextResponse.json({ error: 'Proof gallery not found' }, { status: 404 })
    }
    console.log('[PROOF UPLOAD] Gallery found, time:', Date.now() - startTime, 'ms')

    const formData = await request.formData()
    const files = formData.getAll('photos') as File[]
    console.log('[PROOF UPLOAD] Files received:', files.length, 'time:', Date.now() - startTime, 'ms')

    if (files.length === 0) {
      console.log('[PROOF UPLOAD] No files in request')
      return NextResponse.json({ error: 'No files uploaded' }, { status: 400 })
    }

    const uploadedPhotos = []
    const diagnostics: { filename: string; steps: Record<string, number>; error?: string }[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const fileStartTime = Date.now()
      const fileDiagnostics: Record<string, number> = {}

      console.log(`[PROOF UPLOAD] Processing file ${i + 1}/${files.length}: ${file.name} (${file.size} bytes)`)

      try {
        // Read file buffer
        const bufferStartTime = Date.now()
        const buffer = Buffer.from(await file.arrayBuffer())
        fileDiagnostics.bufferRead = Date.now() - bufferStartTime
        console.log(`[PROOF UPLOAD] File ${i + 1} buffer read: ${fileDiagnostics.bufferRead}ms`)

        const filename = file.name
        const contentType = file.type || 'image/jpeg'

        // Parse filename to extract metadata
        const { personName, photoNumber } = parseFilename(filename)

        // Apply watermark to the image
        const watermarkStartTime = Date.now()
        console.log(`[PROOF UPLOAD] File ${i + 1} starting watermark...`)
        const watermarkedBuffer = await addWatermark(buffer)
        fileDiagnostics.watermark = Date.now() - watermarkStartTime
        console.log(`[PROOF UPLOAD] File ${i + 1} watermark done: ${fileDiagnostics.watermark}ms, output size: ${watermarkedBuffer.length} bytes`)

        // Generate unique S3 key
        const fileExtension = filename.split('.').pop() || 'jpg'
        const s3Key = `proofs/${proofGalleryId}/${uuidv4()}.${fileExtension}`

        // Upload watermarked image to S3
        const s3StartTime = Date.now()
        console.log(`[PROOF UPLOAD] File ${i + 1} starting S3 upload to ${s3Key}...`)
        const blobUrl = await uploadToS3(watermarkedBuffer, s3Key, contentType)
        fileDiagnostics.s3Upload = Date.now() - s3StartTime
        console.log(`[PROOF UPLOAD] File ${i + 1} S3 upload done: ${fileDiagnostics.s3Upload}ms`)

        // Create photo record in database
        const dbStartTime = Date.now()
        const photo = await prisma.proofPhoto.create({
          data: {
            proofGalleryId,
            blobUrl,
            originalFilename: filename,
            personName,
            photoNumber,
            fileSize: BigInt(watermarkedBuffer.length),
          },
        })
        fileDiagnostics.dbInsert = Date.now() - dbStartTime
        console.log(`[PROOF UPLOAD] File ${i + 1} DB insert done: ${fileDiagnostics.dbInsert}ms`)

        fileDiagnostics.total = Date.now() - fileStartTime
        diagnostics.push({ filename, steps: fileDiagnostics })
        console.log(`[PROOF UPLOAD] File ${i + 1} complete, total: ${fileDiagnostics.total}ms`)

        uploadedPhotos.push({
          ...photo,
          fileSize: photo.fileSize.toString(),
        })
      } catch (fileError) {
        const errorMessage = fileError instanceof Error ? fileError.message : 'Unknown error'
        console.error(`[PROOF UPLOAD] File ${i + 1} ERROR:`, fileError)
        diagnostics.push({ filename: file.name, steps: fileDiagnostics, error: errorMessage })
        // Continue with other files instead of failing completely
      }
    }

    const totalTime = Date.now() - startTime
    console.log(`[PROOF UPLOAD] === Complete === Total time: ${totalTime}ms, Uploaded: ${uploadedPhotos.length}/${files.length}`)
    console.log('[PROOF UPLOAD] Diagnostics:', JSON.stringify(diagnostics, null, 2))

    return NextResponse.json({
      photos: uploadedPhotos,
      diagnostics,
      totalTime,
      successCount: uploadedPhotos.length,
      totalCount: files.length
    }, { status: 201 })
  } catch (error) {
    const totalTime = Date.now() - startTime
    console.error('[PROOF UPLOAD] FATAL ERROR after', totalTime, 'ms:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({
      error: 'Failed to upload photos',
      details: errorMessage,
      totalTime
    }, { status: 500 })
  }
}

// DELETE - Delete photos from a proof gallery
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id: proofGalleryId } = await params
    const body = await request.json()
    const { photoIds } = body

    if (!photoIds || !Array.isArray(photoIds)) {
      return NextResponse.json({ error: 'Invalid photo IDs' }, { status: 400 })
    }

    // Get photos to delete
    const photos = await prisma.proofPhoto.findMany({
      where: {
        id: { in: photoIds },
        proofGalleryId,
      },
    })

    // Delete from S3
    for (const photo of photos) {
      try {
        const key = getKeyFromUrl(photo.blobUrl)
        await deleteFromS3(key)
      } catch (error) {
        console.error(`Failed to delete photo ${photo.id} from S3:`, error)
      }
    }

    // Delete any selections for these photos first
    await prisma.proofSelection.deleteMany({
      where: {
        proofPhotoId: { in: photoIds },
      },
    })

    // Delete from database
    await prisma.proofPhoto.deleteMany({
      where: {
        id: { in: photoIds },
        proofGalleryId,
      },
    })

    return NextResponse.json({ success: true, deletedCount: photos.length })
  } catch (error) {
    console.error('Error deleting photos:', error)
    return NextResponse.json({ error: 'Failed to delete photos' }, { status: 500 })
  }
}
