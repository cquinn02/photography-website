import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'

// Simple in-memory rate limiter (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 20 // max 20 requests per minute per IP

// Deduplication: track recent interactions to avoid duplicates
const recentInteractions = new Map<string, number>()
const DEDUP_WINDOW = 5 * 60 * 1000 // 5 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return false
  }

  record.count++
  return record.count > RATE_LIMIT_MAX
}

function isDuplicate(key: string): boolean {
  const now = Date.now()
  const lastTime = recentInteractions.get(key)

  if (lastTime && now - lastTime < DEDUP_WINDOW) {
    return true
  }

  recentInteractions.set(key, now)

  // Clean up old entries periodically
  if (recentInteractions.size > 1000) {
    for (const [k, v] of recentInteractions.entries()) {
      if (now - v > DEDUP_WINDOW) {
        recentInteractions.delete(k)
      }
    }
  }

  return false
}

// POST - Track tab interaction (opened/converted)
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    // Skip admin interactions
    const cookieStore = await cookies()
    const adminSession = cookieStore.get('admin_session')
    if (adminSession?.value === 'authenticated') {
      return NextResponse.json({ success: true, skipped: 'admin' })
    }

    const { token } = await params
    const body = await request.json()
    const { tabName, eventType } = body

    // Validate inputs
    if (!tabName || !['referral', 'review', 'inspiration'].includes(tabName)) {
      return NextResponse.json({ error: 'Invalid tab name' }, { status: 400 })
    }

    if (!eventType || !['opened', 'converted'].includes(eventType)) {
      return NextResponse.json({ error: 'Invalid event type' }, { status: 400 })
    }

    // Get IP for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ipAddress = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown'

    // Rate limiting
    if (isRateLimited(ipAddress)) {
      return NextResponse.json({ error: 'Rate limited' }, { status: 429 })
    }

    const gallery = await prisma.gallery.findUnique({
      where: { magicLinkToken: token },
    })

    if (!gallery) {
      return NextResponse.json({ error: 'Gallery not found' }, { status: 404 })
    }

    // Deduplication - create unique key for this interaction
    const dedupKey = `${gallery.id}:${tabName}:${eventType}:${ipAddress}`
    if (isDuplicate(dedupKey)) {
      return NextResponse.json({ success: true, skipped: 'duplicate' })
    }

    // Get user agent
    const userAgent = request.headers.get('user-agent') || undefined

    // Create the tab interaction record
    await prisma.tabInteraction.create({
      data: {
        galleryId: gallery.id,
        tabName,
        eventType,
        userAgent,
        ipAddress: ipAddress !== 'unknown' ? ipAddress : undefined,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error tracking tab interaction:', error)
    return NextResponse.json({ error: 'Failed to track interaction' }, { status: 500 })
  }
}
