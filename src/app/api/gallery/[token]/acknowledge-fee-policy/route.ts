import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// POST - Acknowledge fee policy for a gallery
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params

    const gallery = await prisma.gallery.findUnique({
      where: { magicLinkToken: token },
    })

    if (!gallery) {
      return NextResponse.json({ error: 'Gallery not found' }, { status: 404 })
    }

    // Check if gallery is active
    if (!gallery.isActive) {
      return NextResponse.json({ error: 'This gallery is no longer active' }, { status: 403 })
    }

    // Check if gallery has expired
    if (new Date() > gallery.expiresAt) {
      return NextResponse.json({ error: 'This gallery has expired' }, { status: 403 })
    }

    // Update the fee policy acknowledgment timestamp
    await prisma.gallery.update({
      where: { id: gallery.id },
      data: {
        feePolicyAcknowledgedAt: new Date(),
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error acknowledging fee policy:', error)
    return NextResponse.json({ error: 'Failed to acknowledge fee policy' }, { status: 500 })
  }
}
