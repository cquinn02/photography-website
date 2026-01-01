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
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id: proofGalleryId } = await params

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

    const uploadedPhotos = []

    for (const file of files) {
      try {
        // Download from temp location
        const buffer = await downloadFromS3(file.tempKey)

        // Parse filename to extract metadata
        const { personName, photoNumber } = parseFilename(file.filename)

        // Apply watermark
        const watermarkedBuffer = await addWatermark(buffer)

        // Upload watermarked image to final location
        const fileExtension = file.filename.split('.').pop() || 'jpg'
        const finalKey = `proofs/${proofGalleryId}/${uuidv4()}.${fileExtension}`
        const blobUrl = await uploadToS3(watermarkedBuffer, finalKey, file.contentType)

        // Delete temp file
        await deleteFromS3(file.tempKey)

        // Create photo record in database
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

        uploadedPhotos.push({
          ...photo,
          fileSize: photo.fileSize.toString(),
        })
      } catch (fileError) {
        console.error('Error processing file:', file.filename, fileError)
        // Try to clean up temp file on error
        try {
          await deleteFromS3(file.tempKey)
        } catch {
          // Ignore cleanup errors
        }
      }
    }

    return NextResponse.json({
      photos: uploadedPhotos,
      successCount: uploadedPhotos.length,
      totalCount: files.length
    }, { status: 201 })
  } catch (error) {
    console.error('Error finalizing photos:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({
      error: 'Failed to finalize photos',
      details: errorMessage
    }, { status: 500 })
  }
}
