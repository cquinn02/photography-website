import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getPresignedUploadUrl } from '@/lib/s3'
import { v4 as uuidv4 } from 'uuid'

async function isAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

// POST - Get presigned URLs for direct S3 upload
// Optimized: Skip database lookup to avoid cold start timeouts
// Gallery validation happens in the finalize step
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id: proofGalleryId } = await params

    const body = await request.json()
    const { files } = body // Array of { filename, contentType, size }

    if (!files || !Array.isArray(files) || files.length === 0) {
      return NextResponse.json({ error: 'No files specified' }, { status: 400 })
    }

    const presignedUrls = await Promise.all(
      files.map(async (file: { filename: string; contentType: string }) => {
        const fileExtension = file.filename.split('.').pop() || 'jpg'
        const tempKey = `proofs-temp/${proofGalleryId}/${uuidv4()}.${fileExtension}`

        const presignedUrl = await getPresignedUploadUrl(tempKey, file.contentType)

        return {
          filename: file.filename,
          contentType: file.contentType,
          tempKey,
          presignedUrl,
        }
      })
    )

    return NextResponse.json({ presignedUrls })
  } catch (error) {
    console.error('Error generating presigned URLs:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: 'Failed to generate presigned URLs', details: errorMessage }, { status: 500 })
  }
}
