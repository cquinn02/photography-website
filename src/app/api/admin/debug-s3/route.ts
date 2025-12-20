import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

async function isAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

// Temporary debug endpoint - DELETE AFTER FIXING
export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({
    hasS3AccessKey: !!process.env.S3_ACCESS_KEY_ID,
    hasS3SecretKey: !!process.env.S3_SECRET_ACCESS_KEY,
    hasS3Region: !!process.env.S3_REGION,
    hasS3Bucket: !!process.env.S3_BUCKET,
    s3Region: process.env.S3_REGION || 'NOT SET',
    s3Bucket: process.env.S3_BUCKET || 'NOT SET',
  })
}
