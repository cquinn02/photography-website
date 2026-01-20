import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// POST - Toggle photo selection
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params
    const { photoId, selected } = await request.json()

    const proofGallery = await prisma.proofGallery.findUnique({
      where: { magicLinkToken: token },
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

    // Allow clients to update their selections even after initial submission
    // They can re-submit to notify the photographer of changes

    if (selected) {
      // Add selection
      await prisma.proofSelection.upsert({
        where: {
          proofGalleryId_proofPhotoId: {
            proofGalleryId: proofGallery.id,
            proofPhotoId: photoId,
          },
        },
        update: {},
        create: {
          proofGalleryId: proofGallery.id,
          proofPhotoId: photoId,
        },
      })
    } else {
      // Remove selection
      await prisma.proofSelection.deleteMany({
        where: {
          proofGalleryId: proofGallery.id,
          proofPhotoId: photoId,
        },
      })
    }

    return NextResponse.json({ success: true, selected })
  } catch (error) {
    console.error('Error toggling selection:', error)
    return NextResponse.json({ error: 'Failed to update selection' }, { status: 500 })
  }
}
