import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'
import { uploadToS3, deleteFromS3, getKeyFromUrl } from '@/lib/s3'
import { parseFilename } from '@/lib/filename-parser'
import { v4 as uuidv4 } from 'uuid'

async function isAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

// POST - Upload photos to a gallery
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id: galleryId } = await params

    // Verify gallery exists
    const gallery = await prisma.gallery.findUnique({ where: { id: galleryId } })
    if (!gallery) {
      return NextResponse.json({ error: 'Gallery not found' }, { status: 404 })
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
      const { personName, cropType, photoNumber } = parseFilename(filename)

      // Generate unique S3 key
      const fileExtension = filename.split('.').pop() || 'jpg'
      const s3Key = `galleries/${galleryId}/${uuidv4()}.${fileExtension}`

      // Upload to S3
      const blobUrl = await uploadToS3(buffer, s3Key, contentType)

      // Create photo record in database
      const photo = await prisma.photo.create({
        data: {
          galleryId,
          blobUrl,
          originalFilename: filename,
          personName,
          cropType,
          photoNumber,
          fileSize: BigInt(buffer.length),
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

// DELETE - Delete photos from a gallery
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id: galleryId } = await params
    const body = await request.json()
    const { photoIds } = body

    if (!photoIds || !Array.isArray(photoIds)) {
      return NextResponse.json({ error: 'Invalid photo IDs' }, { status: 400 })
    }

    // Get photos to delete
    const photos = await prisma.photo.findMany({
      where: {
        id: { in: photoIds },
        galleryId,
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

    // Delete from database
    await prisma.photo.deleteMany({
      where: {
        id: { in: photoIds },
        galleryId,
      },
    })

    return NextResponse.json({ success: true, deletedCount: photos.length })
  } catch (error) {
    console.error('Error deleting photos:', error)
    return NextResponse.json({ error: 'Failed to delete photos' }, { status: 500 })
  }
}
