import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getKeyFromUrl, getPresignedDownloadUrl } from '@/lib/s3'

// GET - Fetch proof gallery by token
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params

    const proofGallery = await prisma.proofGallery.findUnique({
      where: { magicLinkToken: token },
      include: {
        photos: {
          orderBy: { originalFilename: 'asc' },
        },
        selections: {
          select: {
            proofPhotoId: true,
          },
        },
      },
    })

    if (!proofGallery) {
      return NextResponse.json({ error: 'Proof gallery not found' }, { status: 404 })
    }

    if (!proofGallery.isActive) {
      return NextResponse.json({ error: 'This proof gallery is no longer active' }, { status: 403 })
    }

    if (new Date() > proofGallery.expiresAt) {
      return NextResponse.json({ error: 'This proof gallery has expired' }, { status: 403 })
    }

    // Update view count and first viewed
    await prisma.proofGallery.update({
      where: { id: proofGallery.id },
      data: {
        viewCount: { increment: 1 },
        firstViewedAt: proofGallery.firstViewedAt || new Date(),
      },
    })

    // Transform the data for the client
    const selectedPhotoIds = new Set(proofGallery.selections.map(s => s.proofPhotoId))

    // Generate presigned URLs for photos
    const photosWithPresignedUrls = await Promise.all(
      proofGallery.photos.map(async (photo) => {
        const key = getKeyFromUrl(photo.blobUrl)
        const presignedUrl = await getPresignedDownloadUrl(key, 3600)
        return {
          id: photo.id,
          url: presignedUrl,
          originalFilename: photo.originalFilename,
          personName: photo.personName,
          photoNumber: photo.photoNumber,
          isSelected: selectedPhotoIds.has(photo.id),
        }
      })
    )

    return NextResponse.json({
      id: proofGallery.id,
      firstName: proofGallery.firstName,
      sessionName: proofGallery.sessionName,
      expiresAt: proofGallery.expiresAt,
      selectionsSubmittedAt: proofGallery.selectionsSubmittedAt,
      photos: photosWithPresignedUrls,
    })
  } catch (error) {
    console.error('Error fetching proof gallery:', error)
    return NextResponse.json({ error: 'Failed to fetch proof gallery' }, { status: 500 })
  }
}
