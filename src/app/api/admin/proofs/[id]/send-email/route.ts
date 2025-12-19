import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'
import { sendProofsReadyEmail } from '@/lib/email'

async function isAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

// POST - Send "proofs ready" email to client
export async function POST(
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
    })

    if (!proofGallery) {
      return NextResponse.json({ error: 'Proof gallery not found' }, { status: 404 })
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
    const proofLink = `${appUrl}/proofs/${proofGallery.magicLinkToken}`

    await sendProofsReadyEmail({
      firstName: proofGallery.firstName,
      clientEmail: proofGallery.clientEmail,
      sessionName: proofGallery.sessionName,
      proofLink,
      expiresAt: proofGallery.expiresAt,
    })

    return NextResponse.json({
      success: true,
      message: `Email sent to ${proofGallery.clientEmail}`,
    })
  } catch (error) {
    console.error('Error sending proofs ready email:', error)
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
