import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'
import { parseFilename } from '@/lib/filename-parser'
import { BUCKET_NAME } from '@/lib/s3'

async function isAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

// POST - Register photos in database after direct S3 upload
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

    const body = await request.json()
    const { photos } = body // Array of { s3Key, filename, fileSize }

    if (!photos || !Array.isArray(photos) || photos.length === 0) {
      return NextResponse.json({ error: 'No photos specified' }, { status: 400 })
    }

    const s3Region = process.env.S3_REGION || 'us-east-1'

    const createdPhotos = await Promise.all(
      photos.map(async (photo: { s3Key: string; filename: string; fileSize: number }) => {
        // Parse filename to extract metadata
        const { personName, cropType, photoNumber } = parseFilename(photo.filename)

        // Construct the S3 URL
        const blobUrl = `https://${BUCKET_NAME}.s3.${s3Region}.amazonaws.com/${photo.s3Key}`

        // Create photo record in database
        const dbPhoto = await prisma.photo.create({
          data: {
            galleryId,
            blobUrl,
            originalFilename: photo.filename,
            personName,
            cropType,
            photoNumber,
            fileSize: BigInt(photo.fileSize),
          },
        })

        return {
          ...dbPhoto,
          fileSize: dbPhoto.fileSize.toString(),
        }
      })
    )

    return NextResponse.json(createdPhotos, { status: 201 })
  } catch (error) {
    console.error('Error registering photos:', error)
    return NextResponse.json({ error: 'Failed to register photos' }, { status: 500 })
  }
}
