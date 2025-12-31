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

    const formData = await request.formData()
    const files = formData.getAll('photos') as File[]

    if (files.length === 0) {
      return NextResponse.json({ error: 'No files uploaded' }, { status: 400 })
    }

    const uploadedPhotos = []

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer())
      const filename = file.name
      const contentType = file.type || 'image/jpeg'

      // Parse filename to extract metadata
      const { personName, photoNumber } = parseFilename(filename)

      // Apply watermark to the image
      const watermarkedBuffer = await addWatermark(buffer)

      // Generate unique S3 key
      const fileExtension = filename.split('.').pop() || 'jpg'
      const s3Key = `proofs/${proofGalleryId}/${uuidv4()}.${fileExtension}`

      // Upload watermarked image to S3
      const blobUrl = await uploadToS3(watermarkedBuffer, s3Key, contentType)

      // Create photo record in database
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

      uploadedPhotos.push({
        ...photo,
        fileSize: photo.fileSize.toString(),
      })
    }

    return NextResponse.json(uploadedPhotos, { status: 201 })
  } catch (error) {
    console.error('Error uploading photos:', error)
    return NextResponse.json({ error: 'Failed to upload photos' }, { status: 500 })
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
