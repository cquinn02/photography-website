import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendProofSelectionsNotification } from '@/lib/email'

// POST - Submit final selections
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params

    const proofGallery = await prisma.proofGallery.findUnique({
      where: { magicLinkToken: token },
      include: {
        selections: {
          include: {
            proofPhoto: true,
          },
        },
      },
    })

    if (!proofGallery) {
      return NextResponse.json({ error: 'Proof gallery not found' }, { status: 404 })
    }

    if (!proofGallery.isActive) {
      return NextResponse.json({ error: 'This proof gallery is no longer active' }, { status: 403 })
    }

    const isUpdate = !!proofGallery.selectionsSubmittedAt

    if (proofGallery.selections.length === 0) {
      return NextResponse.json({ error: 'Please select at least one photo' }, { status: 400 })
    }

    // Mark selections as submitted
    await prisma.proofGallery.update({
      where: { id: proofGallery.id },
      data: {
        selectionsSubmittedAt: new Date(),
      },
    })

    // Send email notification to admin
    try {
      await sendProofSelectionsNotification({
        firstName: proofGallery.firstName,
        lastName: proofGallery.lastName,
        clientEmail: proofGallery.clientEmail,
        sessionName: proofGallery.sessionName,
        selectedCount: proofGallery.selections.length,
        selectedPhotos: proofGallery.selections.map(s => s.proofPhoto.originalFilename),
        proofGalleryId: proofGallery.id,
      })
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      message: isUpdate ? 'Your selections have been updated!' : 'Your selections have been submitted!',
      selectionCount: proofGallery.selections.length,
      isUpdate,
    })
  } catch (error) {
    console.error('Error submitting selections:', error)
    return NextResponse.json({ error: 'Failed to submit selections' }, { status: 500 })
  }
}
