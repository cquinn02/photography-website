import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { logger } from '@/lib/logger'

async function isAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

// GET - Test logging to S3
export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // Check if S3 credentials are available
    const hasCredentials = !!(
      process.env.S3_ACCESS_KEY_ID &&
      process.env.S3_SECRET_ACCESS_KEY &&
      process.env.S3_BUCKET
    )

    if (!hasCredentials) {
      return NextResponse.json({
        success: false,
        error: 'S3 credentials not available',
        details: {
          hasAccessKey: !!process.env.S3_ACCESS_KEY_ID,
          hasSecretKey: !!process.env.S3_SECRET_ACCESS_KEY,
          hasBucket: !!process.env.S3_BUCKET,
          bucket: process.env.S3_BUCKET || 'NOT SET',
        }
      })
    }

    // Try to write a test log
    await logger.info('Test log entry', {
      message: 'This is a test log to verify S3 logging is working',
      timestamp: new Date().toISOString(),
      testId: Math.random().toString(36).substring(7),
    })

    return NextResponse.json({
      success: true,
      message: 'Test log written successfully! Check S3 logs/ folder for today\'s date.',
      bucket: process.env.S3_BUCKET,
      logFile: `logs/${new Date().toISOString().split('T')[0]}.json`,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}
