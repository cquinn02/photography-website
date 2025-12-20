import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'
import { s3Client, BUCKET_NAME, getKeyFromUrl } from '@/lib/s3'
import { HeadObjectCommand } from '@aws-sdk/client-s3'

async function isAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

// GET - Debug gallery S3 files
export async function GET(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const galleryId = request.nextUrl.searchParams.get('galleryId')
  if (!galleryId) {
    return NextResponse.json({ error: 'galleryId required' }, { status: 400 })
  }

  try {
    const gallery = await prisma.gallery.findUnique({
      where: { id: galleryId },
      include: { photos: true },
    })

    if (!gallery) {
      return NextResponse.json({ error: 'Gallery not found' }, { status: 404 })
    }

    // Check each photo exists in S3
    const photoChecks = await Promise.all(
      gallery.photos.map(async (photo) => {
        const s3Key = getKeyFromUrl(photo.blobUrl)
        try {
          const command = new HeadObjectCommand({
            Bucket: BUCKET_NAME,
            Key: s3Key,
          })
          const response = await s3Client.send(command)
          return {
            id: photo.id,
            filename: photo.originalFilename,
            s3Key,
            existsInS3: true,
            contentType: response.ContentType,
            contentLength: response.ContentLength,
          }
        } catch (error: unknown) {
          const errorName = error && typeof error === 'object' && 'name' in error ? (error as { name: string }).name : 'Unknown'
          return {
            id: photo.id,
            filename: photo.originalFilename,
            s3Key,
            existsInS3: false,
            error: errorName,
          }
        }
      })
    )

    const existingPhotos = photoChecks.filter((p) => p.existsInS3)
    const missingPhotos = photoChecks.filter((p) => !p.existsInS3)

    return NextResponse.json({
      galleryId: gallery.id,
      sessionName: gallery.sessionName,
      clientName: `${gallery.firstName} ${gallery.lastName}`,
      totalPhotos: gallery.photos.length,
      existingInS3: existingPhotos.length,
      missingFromS3: missingPhotos.length,
      bucketName: BUCKET_NAME,
      region: process.env.S3_REGION,
      photos: photoChecks,
    })
  } catch (error) {
    console.error('Error debugging gallery:', error)
    return NextResponse.json({ error: 'Failed to debug gallery' }, { status: 500 })
  }
}
