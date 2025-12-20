import { NextResponse } from 'next/server'

// TEMPORARY DEBUG ENDPOINT - DELETE AFTER FIXING
export async function GET() {
  const adminPassword = process.env.ADMIN_PASSWORD

  return NextResponse.json({
    hasAdminPassword: !!adminPassword,
    passwordLength: adminPassword?.length || 0,
    // Show first and last char to verify it's the right password (safe enough for debugging)
    passwordHint: adminPassword
      ? `${adminPassword[0]}...${adminPassword[adminPassword.length - 1]}`
      : 'NOT SET',
    nodeEnv: process.env.NODE_ENV,
    // Check if other env vars are loading
    hasDbUrl: !!process.env.DATABASE_URL,
    hasS3Bucket: !!process.env.S3_BUCKET,
    s3Bucket: process.env.S3_BUCKET || 'NOT SET',
  })
}
