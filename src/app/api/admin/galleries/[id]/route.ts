import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'
import { deleteFromS3, getKeyFromUrl, getPresignedDownloadUrl } from '@/lib/s3'
import { logger } from '@/lib/logger'
import type { Photo } from '@prisma/client'

async function isAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

// GET - Get single gallery with all details
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params
    const gallery = await prisma.gallery.findUnique({
      where: { id },
      include: {
        photos: true,
        downloads: {
          orderBy: { downloadedAt: 'desc' },
          take: 50,
        },
        accessLogs: {
          orderBy: { createdAt: 'desc' },
          take: 50,
        },
        portal: true,
      },
    })

    if (!gallery) {
      return NextResponse.json({ error: 'Gallery not found' }, { status: 404 })
    }

    // Sort photos by filename using natural/numeric sorting
    // This ensures "photo2" comes before "photo10"
    gallery.photos.sort((a, b) =>
      a.originalFilename.localeCompare(b.originalFilename, undefined, {
        numeric: true,
        sensitivity: 'base'
      })
    )

    // Convert BigInt fileSize to string and generate presigned URLs for photos
    const photosWithPresignedUrls = await Promise.all(
      gallery.photos.map(async (photo: Photo) => {
        const key = getKeyFromUrl(photo.blobUrl)
        const presignedUrl = await getPresignedDownloadUrl(key, 3600) // 1 hour expiry
        return {
          ...photo,
          fileSize: photo.fileSize.toString(),
          blobUrl: presignedUrl, // Replace S3 URL with presigned URL
        }
      })
    )

    const galleryWithPresignedUrls = {
      ...gallery,
      photos: photosWithPresignedUrls,
    }

    return NextResponse.json(galleryWithPresignedUrls)
  } catch (error) {
    console.error('Error fetching gallery:', error)
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 })
  }
}

// PATCH - Update gallery
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params
    const body = await request.json()
    const { firstName, lastName, clientEmail, sessionName, expiresAt, isActive } = body

    const gallery = await prisma.gallery.update({
      where: { id },
      data: {
        ...(firstName && { firstName }),
        ...(lastName && { lastName }),
        ...(clientEmail && { clientEmail, accessCode: clientEmail }),
        ...(sessionName && { sessionName }),
        ...(expiresAt && { expiresAt: new Date(expiresAt) }),
        ...(typeof isActive === 'boolean' && { isActive }),
      },
    })

    // Log gallery update
    await logger.info('Gallery updated', {
      changes: { firstName, lastName, clientEmail, sessionName, expiresAt, isActive },
    }, { galleryId: id })

    return NextResponse.json(gallery)
  } catch (error) {
    console.error('Error updating gallery:', error)
    return NextResponse.json({ error: 'Failed to update gallery' }, { status: 500 })
  }
}

// DELETE - Delete gallery and all associated data
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
    const gallery = await prisma.gallery.findUnique({
      where: { id },
      include: { photos: true },
    })

    if (!gallery) {
      return NextResponse.json({ error: 'Gallery not found' }, { status: 404 })
    }

    // Delete photos from S3
    for (const photo of gallery.photos) {
      try {
        const key = getKeyFromUrl(photo.blobUrl)
        await deleteFromS3(key)
      } catch (error) {
        console.error(`Failed to delete photo ${photo.id} from S3:`, error)
      }
    }

    // Delete gallery (cascades to photos, invoices, etc.)
    await prisma.gallery.delete({ where: { id } })

    // Log gallery deletion
    await logger.warn('Gallery deleted', {
      clientName: `${gallery.firstName} ${gallery.lastName}`,
      clientEmail: gallery.clientEmail,
      sessionName: gallery.sessionName,
      photoCount: gallery.photos.length,
    }, { galleryId: id })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting gallery:', error)
    return NextResponse.json({ error: 'Failed to delete gallery' }, { status: 500 })
  }
}
