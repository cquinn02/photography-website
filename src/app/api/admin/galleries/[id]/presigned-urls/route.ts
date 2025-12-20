import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'
import { getPresignedUploadUrl } from '@/lib/s3'
import { v4 as uuidv4 } from 'uuid'

async function isAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

// POST - Generate presigned URLs for uploading photos directly to S3
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
    const { files } = body // Array of { filename, contentType }

    if (!files || !Array.isArray(files) || files.length === 0) {
      return NextResponse.json({ error: 'No files specified' }, { status: 400 })
    }

    const presignedUrls = await Promise.all(
      files.map(async (file: { filename: string; contentType: string }) => {
        const fileExtension = file.filename.split('.').pop() || 'jpg'
        const s3Key = `galleries/${galleryId}/${uuidv4()}.${fileExtension}`

        const uploadUrl = await getPresignedUploadUrl(s3Key, file.contentType)

        return {
          filename: file.filename,
          s3Key,
          uploadUrl,
          contentType: file.contentType,
        }
      })
    )

    return NextResponse.json({ presignedUrls })
  } catch (error) {
    console.error('Error generating presigned URLs:', error)
    return NextResponse.json({ error: 'Failed to generate presigned URLs' }, { status: 500 })
  }
}
