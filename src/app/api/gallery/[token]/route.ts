import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getKeyFromUrl, getPresignedDownloadUrl } from '@/lib/s3'

// GET - Get gallery by magic link token (public endpoint)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params

    const gallery = await prisma.gallery.findUnique({
      where: { magicLinkToken: token },
      include: {
        photos: {
          orderBy: [
            { personName: 'asc' },
            { cropType: 'asc' },
            { uploadedAt: 'asc' },
          ],
        },
      },
    })

    if (!gallery) {
      return NextResponse.json({ error: 'Gallery not found' }, { status: 404 })
    }

    // Check if gallery is active
    if (!gallery.isActive) {
      return NextResponse.json({ error: 'This gallery is no longer active' }, { status: 403 })
    }

    // Check if gallery has expired
    if (new Date() > gallery.expiresAt) {
      return NextResponse.json({ error: 'This gallery has expired' }, { status: 403 })
    }

    // Log the access
    await prisma.accessLog.create({
      data: {
        galleryId: gallery.id,
        ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || null,
        userAgent: request.headers.get('user-agent') || null,
      },
    })

    // Update view count and first viewed timestamp
    await prisma.gallery.update({
      where: { id: gallery.id },
      data: {
        viewCount: { increment: 1 },
        firstViewedAt: gallery.firstViewedAt || new Date(),
      },
    })

    // Generate presigned URLs for photos
    const photosWithPresignedUrls = await Promise.all(
      gallery.photos.map(async (photo) => {
        const key = getKeyFromUrl(photo.blobUrl)
        const presignedUrl = await getPresignedDownloadUrl(key, 3600)
        return {
          id: photo.id,
          url: presignedUrl,
          originalFilename: photo.originalFilename,
          personName: photo.personName,
          cropType: photo.cropType,
          fileSize: photo.fileSize.toString(),
        }
      })
    )

    // Return sanitized gallery data (no sensitive info)
    return NextResponse.json({
      id: gallery.id,
      firstName: gallery.firstName,
      sessionName: gallery.sessionName,
      expiresAt: gallery.expiresAt,
      feePolicyAcknowledgedAt: gallery.feePolicyAcknowledgedAt,
      photos: photosWithPresignedUrls,
    })
  } catch (error) {
    console.error('Error fetching gallery:', error)
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 })
  }
}
