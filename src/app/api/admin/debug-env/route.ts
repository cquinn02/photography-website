import { NextResponse } from 'next/server'

// Temporary debug endpoint - DELETE AFTER FIXING
export async function GET() {
  const adminPassword = process.env.ADMIN_PASSWORD

  return NextResponse.json({
    hasAdminPassword: !!adminPassword,
    passwordLength: adminPassword?.length || 0,
    // Show first 2 chars only for verification (safe for debugging)
    passwordPreview: adminPassword ? adminPassword.substring(0, 2) + '***' : 'NOT SET',
    nodeEnv: process.env.NODE_ENV,
  })
}
