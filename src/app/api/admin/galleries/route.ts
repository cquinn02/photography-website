import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'

// Check authentication
async function isAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

// GET - List all galleries
export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const galleries = await prisma.gallery.findMany({
      include: {
        photos: {
          select: {
            id: true,
            fileSize: true,
          },
        },
        _count: {
          select: {
            downloads: true,
            accessLogs: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    // Calculate stats for each gallery and convert BigInt to number
    const galleriesWithStats = galleries.map((gallery) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { photos, _count, ...rest } = gallery
      return {
        ...rest,
        photoCount: photos.length,
        totalStorage: photos.reduce((sum, p) => sum + Number(p.fileSize), 0),
        downloadCount: _count.downloads,
        accessCount: _count.accessLogs,
      }
    })

    return NextResponse.json(galleriesWithStats)
  } catch (error) {
    console.error('Error fetching galleries:', error)
    return NextResponse.json({ error: 'Failed to fetch galleries' }, { status: 500 })
  }
}

// POST - Create a new gallery
export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { firstName, lastName, clientEmail, sessionName, expirationDays = 30 } = body

    if (!firstName || !lastName || !clientEmail || !sessionName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + expirationDays)

    const gallery = await prisma.gallery.create({
      data: {
        firstName,
        lastName,
        clientEmail,
        sessionName,
        accessCode: clientEmail, // Use email as access code for 17hats integration
        expiresAt,
      },
    })

    return NextResponse.json(gallery, { status: 201 })
  } catch (error) {
    console.error('Error creating gallery:', error)
    let errorMessage = 'Unknown error'
    if (error instanceof Error) {
      errorMessage = error.message
    } else if (typeof error === 'string') {
      errorMessage = error
    } else {
      errorMessage = JSON.stringify(error)
    }
    return NextResponse.json({ error: `Failed to create gallery: ${errorMessage}` }, { status: 500 })
  }
}
