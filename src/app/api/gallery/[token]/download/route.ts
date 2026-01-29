import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getKeyFromUrl, getPresignedDownloadUrl, uploadToS3 } from '@/lib/s3'
import JSZip from 'jszip'

// POST - Download photos (single, multiple, or all)
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params
    const body = await request.json()
    const { photoIds, downloadAll, personName } = body

    const gallery = await prisma.gallery.findUnique({
      where: { magicLinkToken: token },
      include: {
        photos: true,
      },
    })

    if (!gallery) {
      return NextResponse.json({ error: 'Gallery not found' }, { status: 404 })
    }

    if (!gallery.isActive) {
      return NextResponse.json({ error: 'This gallery is no longer active' }, { status: 403 })
    }

    if (new Date() > gallery.expiresAt) {
      return NextResponse.json({ error: 'This gallery has expired' }, { status: 403 })
    }

    // Determine which photos to download
    let photosToDownload = gallery.photos

    if (photoIds && photoIds.length > 0) {
      photosToDownload = gallery.photos.filter(p => photoIds.includes(p.id))
    } else if (personName) {
      photosToDownload = gallery.photos.filter(p => p.personName === personName)
    } else if (!downloadAll) {
      return NextResponse.json({ error: 'No photos specified' }, { status: 400 })
    }

    if (photosToDownload.length === 0) {
      return NextResponse.json({ error: 'No photos found' }, { status: 404 })
    }

    // Determine download type
    let downloadType = 'all'
    let description = 'All photos'
    if (photoIds && photoIds.length > 0) {
      downloadType = photoIds.length === 1 ? 'single' : 'selected'
      description = photoIds.length === 1 ? photosToDownload[0]?.originalFilename || 'Single photo' : `${photoIds.length} selected photos`
    } else if (personName) {
      downloadType = 'person'
      description = `All photos for ${personName}`
    }

    // Log the download
    await prisma.download.create({
      data: {
        galleryId: gallery.id,
        downloadType,
        description,
        fileCount: photosToDownload.length,
      },
    })

    // Single photo - fetch from S3 and return directly with download headers
    if (photosToDownload.length === 1) {
      const photo = photosToDownload[0]
      const key = getKeyFromUrl(photo.blobUrl)
      const presignedUrl = await getPresignedDownloadUrl(key, 300)

      // Fetch the image from S3
      const imageResponse = await fetch(presignedUrl)
      const imageBuffer = await imageResponse.arrayBuffer()

      // Return the image with Content-Disposition to force download
      return new NextResponse(imageBuffer, {
        headers: {
          'Content-Type': imageResponse.headers.get('Content-Type') || 'image/jpeg',
          'Content-Disposition': `attachment; filename="${photo.originalFilename}"`,
        },
      })
    }

    // Multiple photos - create ZIP
    const zip = new JSZip()

    for (const photo of photosToDownload) {
      try {
        const key = getKeyFromUrl(photo.blobUrl)
        const presignedUrl = await getPresignedDownloadUrl(key, 300)

        // Fetch the image
        const response = await fetch(presignedUrl)
        if (response.ok) {
          const buffer = await response.arrayBuffer()

          // Create folder structure by person name
          const folderName = photo.personName || 'Photos'
          zip.file(`${folderName}/${photo.originalFilename}`, buffer)
        }
      } catch (error) {
        console.error(`Failed to add photo ${photo.id} to zip:`, error)
      }
    }

    // Generate ZIP
    const zipData = await zip.generateAsync({
      type: 'nodebuffer',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 },
    })

    // Create filename
    const zipFilename = personName
      ? `${gallery.sessionName}-${personName}.zip`
      : `${gallery.sessionName}-photos.zip`

    // Upload ZIP to S3 temporarily (in temp-downloads folder)
    const tempKey = `temp-downloads/${gallery.id}/${Date.now()}-${zipFilename}`
    await uploadToS3(zipData, tempKey, 'application/zip')

    // Get a presigned URL for downloading (valid for 1 hour)
    const downloadUrl = await getPresignedDownloadUrl(tempKey, 3600)

    // Return the download URL
    return NextResponse.json({ downloadUrl, filename: zipFilename })
  } catch (error) {
    console.error('Error processing download:', error)
    return NextResponse.json({ error: 'Failed to process download' }, { status: 500 })
  }
}
