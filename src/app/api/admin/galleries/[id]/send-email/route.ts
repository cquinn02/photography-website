import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'
import { sendGalleryReadyEmail } from '@/lib/email'
import { logger } from '@/lib/logger'

async function isAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

// POST - Send "gallery ready" email to client
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params
    const body = await request.json().catch(() => ({}))
    const templateType = body.templateType || 'business'

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    // Safety check: prevent sending emails with localhost links
    if (appUrl.includes('localhost')) {
      return NextResponse.json({
        error: 'Cannot send emails from localhost',
        details: 'The gallery link would point to localhost which won\'t work for clients. Please deploy to production first or update NEXT_PUBLIC_APP_URL to your production domain.'
      }, { status: 400 })
    }

    const gallery = await prisma.gallery.findUnique({
      where: { id },
    })

    if (!gallery) {
      return NextResponse.json({ error: 'Gallery not found' }, { status: 404 })
    }

    const galleryLink = `${appUrl}/gallery/${gallery.magicLinkToken}`

    await sendGalleryReadyEmail({
      firstName: gallery.firstName,
      clientEmail: gallery.clientEmail,
      sessionName: gallery.sessionName,
      galleryLink,
      expiresAt: gallery.expiresAt,
      templateType,
    })

    return NextResponse.json({
      success: true,
      message: `Email sent to ${gallery.clientEmail}`,
    })
  } catch (error) {
    console.error('Error sending gallery ready email:', error)
    // Return detailed error for debugging
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorStack = error instanceof Error ? error.stack : undefined
    console.error('Email error details:', { message: errorMessage, stack: errorStack })
    return NextResponse.json({
      error: 'Failed to send email',
      details: errorMessage
    }, { status: 500 })
  }
}
