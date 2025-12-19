import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'

async function isAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

// GET - Get tab engagement statistics
export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // Get all tab interactions with gallery info
    const interactions = await prisma.tabInteraction.findMany({
      where: {
        galleryId: { not: null },
      },
      include: {
        gallery: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            sessionName: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    // Calculate totals by tab type
    const totals: Record<string, { opened: number; converted: number }> = {
      review: { opened: 0, converted: 0 },
      referral: { opened: 0, converted: 0 },
      inspiration: { opened: 0, converted: 0 },
    }

    // Calculate per-client stats
    const clientStats: Record<string, {
      firstName: string
      lastName: string
      sessionName: string
      galleryId: string
      tabs: Record<string, { opened: number; converted: number }>
    }> = {}

    for (const interaction of interactions) {
      if (!interaction.gallery) continue

      const { tabName, eventType } = interaction
      const galleryId = interaction.gallery.id

      // Update totals
      if (totals[tabName]) {
        if (eventType === 'opened') {
          totals[tabName].opened++
        } else if (eventType === 'converted') {
          totals[tabName].converted++
        }
      }

      // Update per-client stats
      if (!clientStats[galleryId]) {
        clientStats[galleryId] = {
          firstName: interaction.gallery.firstName,
          lastName: interaction.gallery.lastName,
          sessionName: interaction.gallery.sessionName,
          galleryId,
          tabs: {
            review: { opened: 0, converted: 0 },
            referral: { opened: 0, converted: 0 },
            inspiration: { opened: 0, converted: 0 },
          },
        }
      }

      if (clientStats[galleryId].tabs[tabName]) {
        if (eventType === 'opened') {
          clientStats[galleryId].tabs[tabName].opened++
        } else if (eventType === 'converted') {
          clientStats[galleryId].tabs[tabName].converted++
        }
      }
    }

    // Calculate conversion rates
    const conversionRates: Record<string, number> = {}
    for (const [tabName, stats] of Object.entries(totals)) {
      conversionRates[tabName] = stats.opened > 0
        ? Math.round((stats.converted / stats.opened) * 100)
        : 0
    }

    // Convert clientStats to array and sort by most recent activity
    const clientStatsArray = Object.values(clientStats)

    // Get recent interactions for the activity feed (last 20)
    const recentActivity = interactions.slice(0, 20).map((i) => ({
      id: i.id,
      firstName: i.gallery?.firstName || 'Unknown',
      lastName: i.gallery?.lastName || '',
      tabName: i.tabName,
      eventType: i.eventType,
      createdAt: i.createdAt,
    }))

    return NextResponse.json({
      totals,
      conversionRates,
      clientStats: clientStatsArray,
      recentActivity,
      totalInteractions: interactions.length,
    })
  } catch (error) {
    console.error('Error fetching tab stats:', error)
    return NextResponse.json({ error: 'Failed to fetch tab stats' }, { status: 500 })
  }
}
