import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'
import { deleteFromS3, getKeyFromUrl, getPresignedDownloadUrl } from '@/lib/s3'

// Check admin auth
async function isAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

// GET - Get single proof gallery with photos and selections
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params

    const proofGallery = await prisma.proofGallery.findUnique({
      where: { id },
      include: {
        photos: {
          orderBy: { originalFilename: 'asc' },
        },
        selections: {
          include: {
            proofPhoto: true,
          },
        },
      },
    })

    if (!proofGallery) {
      return NextResponse.json({ error: 'Proof gallery not found' }, { status: 404 })
    }

    // Create a set of selected photo IDs
    const selectedPhotoIds = new Set(proofGallery.selections.map(s => s.proofPhotoId))

    // Build response without the raw selections (which contain BigInt)
    const { selections, photos, ...galleryData } = proofGallery

    // Generate presigned URLs for photos
    const photosWithPresignedUrls = await Promise.all(
      photos.map(async (photo) => {
        const key = getKeyFromUrl(photo.blobUrl)
        const presignedUrl = await getPresignedDownloadUrl(key, 3600)
        return {
          ...photo,
          blobUrl: presignedUrl,
          fileSize: photo.fileSize.toString(),
          isSelected: selectedPhotoIds.has(photo.id),
        }
      })
    )

    return NextResponse.json({
      ...galleryData,
      photos: photosWithPresignedUrls,
    })
  } catch (error) {
    console.error('Error fetching proof gallery:', error)
    return NextResponse.json({ error: 'Failed to fetch proof gallery' }, { status: 500 })
  }
}

// PATCH - Update proof gallery
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params
    const { firstName, lastName, clientEmail, sessionName, expiresAt, isActive } = await request.json()

    const proofGallery = await prisma.proofGallery.update({
      where: { id },
      data: {
        firstName,
        lastName,
        clientEmail,
        sessionName,
        expiresAt: new Date(expiresAt),
        isActive,
      },
    })

    return NextResponse.json(proofGallery)
  } catch (error) {
    console.error('Error updating proof gallery:', error)
    return NextResponse.json({ error: 'Failed to update proof gallery' }, { status: 500 })
  }
}

// DELETE - Delete proof gallery and all photos
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params

    // Get all photos to delete from S3
    const proofGallery = await prisma.proofGallery.findUnique({
      where: { id },
      include: { photos: true },
    })

    if (!proofGallery) {
      return NextResponse.json({ error: 'Proof gallery not found' }, { status: 404 })
    }

    // Delete photos from S3
    for (const photo of proofGallery.photos) {
      try {
        const key = getKeyFromUrl(photo.blobUrl)
        if (key) {
          await deleteFromS3(key)
        }
      } catch (s3Error) {
        console.error('Error deleting from S3:', s3Error)
      }
    }

    // Delete proof gallery (cascades to photos and selections)
    await prisma.proofGallery.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting proof gallery:', error)
    return NextResponse.json({ error: 'Failed to delete proof gallery' }, { status: 500 })
  }
}
