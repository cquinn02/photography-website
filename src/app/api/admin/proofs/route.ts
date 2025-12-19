import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'

// Check admin auth
async function isAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

// GET - List all proof galleries
export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const proofGalleries = await prisma.proofGallery.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: {
            photos: true,
            selections: true,
          },
        },
      },
    })

    return NextResponse.json(
      proofGalleries.map((pg) => ({
        id: pg.id,
        firstName: pg.firstName,
        lastName: pg.lastName,
        clientEmail: pg.clientEmail,
        sessionName: pg.sessionName,
        magicLinkToken: pg.magicLinkToken,
        isActive: pg.isActive,
        expiresAt: pg.expiresAt,
        createdAt: pg.createdAt,
        viewCount: pg.viewCount,
        firstViewedAt: pg.firstViewedAt,
        selectionsSubmittedAt: pg.selectionsSubmittedAt,
        photoCount: pg._count.photos,
        selectionCount: pg._count.selections,
      }))
    )
  } catch (error) {
    console.error('Error fetching proof galleries:', error)
    return NextResponse.json({ error: 'Failed to fetch proof galleries' }, { status: 500 })
  }
}

// POST - Create new proof gallery
export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { firstName, lastName, clientEmail, sessionName, expirationDays } = await request.json()

    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + (expirationDays || 30))

    const proofGallery = await prisma.proofGallery.create({
      data: {
        firstName,
        lastName,
        clientEmail,
        sessionName,
        expiresAt,
      },
    })

    return NextResponse.json(proofGallery)
  } catch (error) {
    console.error('Error creating proof gallery:', error)
    return NextResponse.json({ error: 'Failed to create proof gallery' }, { status: 500 })
  }
}
