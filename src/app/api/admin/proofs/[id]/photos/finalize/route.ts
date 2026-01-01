import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'
import { uploadToS3, downloadFromS3, deleteFromS3 } from '@/lib/s3'
import { parseFilename } from '@/lib/filename-parser'
import { addWatermark } from '@/lib/watermark'
import { v4 as uuidv4 } from 'uuid'

async function isAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

// POST - Finalize uploaded photos (apply watermark, create DB record)
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const startTime = Date.now()
  console.log('[FINALIZE] === Starting finalize process ===')

  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id: proofGalleryId } = await params
    console.log('[FINALIZE] Gallery ID:', proofGalleryId)

    // Verify proof gallery exists
    const proofGallery = await prisma.proofGallery.findUnique({ where: { id: proofGalleryId } })
    if (!proofGallery) {
      return NextResponse.json({ error: 'Proof gallery not found' }, { status: 404 })
    }

    const body = await request.json()
    const { files } = body // Array of { tempKey, filename, contentType }

    if (!files || !Array.isArray(files) || files.length === 0) {
      return NextResponse.json({ error: 'No files to finalize' }, { status: 400 })
    }

    console.log('[FINALIZE] Processing', files.length, 'files')

    const uploadedPhotos = []
    const diagnostics: { filename: string; steps: Record<string, number>; error?: string }[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const fileStartTime = Date.now()
      const fileDiagnostics: Record<string, number> = {}

      console.log(`[FINALIZE] Processing file ${i + 1}/${files.length}: ${file.filename}`)

      try {
        // Download from temp location
        const downloadStartTime = Date.now()
        console.log(`[FINALIZE] File ${i + 1} downloading from temp: ${file.tempKey}`)
        const buffer = await downloadFromS3(file.tempKey)
        fileDiagnostics.download = Date.now() - downloadStartTime
        console.log(`[FINALIZE] File ${i + 1} downloaded: ${fileDiagnostics.download}ms, size: ${buffer.length} bytes`)

        // Parse filename to extract metadata
        const { personName, photoNumber } = parseFilename(file.filename)

        // Apply watermark
        const watermarkStartTime = Date.now()
        console.log(`[FINALIZE] File ${i + 1} applying watermark...`)
        const watermarkedBuffer = await addWatermark(buffer)
        fileDiagnostics.watermark = Date.now() - watermarkStartTime
        console.log(`[FINALIZE] File ${i + 1} watermark done: ${fileDiagnostics.watermark}ms, output size: ${watermarkedBuffer.length} bytes`)

        // Upload watermarked image to final location
        const fileExtension = file.filename.split('.').pop() || 'jpg'
        const finalKey = `proofs/${proofGalleryId}/${uuidv4()}.${fileExtension}`

        const s3StartTime = Date.now()
        console.log(`[FINALIZE] File ${i + 1} uploading to final location: ${finalKey}`)
        const blobUrl = await uploadToS3(watermarkedBuffer, finalKey, file.contentType)
        fileDiagnostics.upload = Date.now() - s3StartTime
        console.log(`[FINALIZE] File ${i + 1} uploaded: ${fileDiagnostics.upload}ms`)

        // Delete temp file
        const deleteStartTime = Date.now()
        await deleteFromS3(file.tempKey)
        fileDiagnostics.deleteTemp = Date.now() - deleteStartTime
        console.log(`[FINALIZE] File ${i + 1} temp deleted: ${fileDiagnostics.deleteTemp}ms`)

        // Create photo record in database
        const dbStartTime = Date.now()
        const photo = await prisma.proofPhoto.create({
          data: {
            proofGalleryId,
            blobUrl,
            originalFilename: file.filename,
            personName,
            photoNumber,
            fileSize: BigInt(watermarkedBuffer.length),
          },
        })
        fileDiagnostics.dbInsert = Date.now() - dbStartTime
        console.log(`[FINALIZE] File ${i + 1} DB insert done: ${fileDiagnostics.dbInsert}ms`)

        fileDiagnostics.total = Date.now() - fileStartTime
        diagnostics.push({ filename: file.filename, steps: fileDiagnostics })
        console.log(`[FINALIZE] File ${i + 1} complete, total: ${fileDiagnostics.total}ms`)

        uploadedPhotos.push({
          ...photo,
          fileSize: photo.fileSize.toString(),
        })
      } catch (fileError) {
        const errorMessage = fileError instanceof Error ? fileError.message : 'Unknown error'
        console.error(`[FINALIZE] File ${i + 1} ERROR:`, fileError)
        diagnostics.push({ filename: file.filename, steps: fileDiagnostics, error: errorMessage })

        // Try to clean up temp file on error
        try {
          await deleteFromS3(file.tempKey)
        } catch (deleteError) {
          console.error(`[FINALIZE] Failed to delete temp file ${file.tempKey}:`, deleteError)
        }
      }
    }

    const totalTime = Date.now() - startTime
    console.log(`[FINALIZE] === Complete === Total time: ${totalTime}ms, Processed: ${uploadedPhotos.length}/${files.length}`)

    return NextResponse.json({
      photos: uploadedPhotos,
      diagnostics,
      totalTime,
      successCount: uploadedPhotos.length,
      totalCount: files.length
    }, { status: 201 })
  } catch (error) {
    const totalTime = Date.now() - startTime
    console.error('[FINALIZE] FATAL ERROR after', totalTime, 'ms:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({
      error: 'Failed to finalize photos',
      details: errorMessage,
      totalTime
    }, { status: 500 })
  }
}
