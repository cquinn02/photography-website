import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()
    const serverPassword = process.env.ADMIN_PASSWORD || ''

    // TEMPORARY DEBUG - Remove after fixing
    const debug = {
      receivedLength: password?.length || 0,
      serverLength: serverPassword.length,
      receivedFirst: password?.[0] || 'EMPTY',
      receivedLast: password?.[password?.length - 1] || 'EMPTY',
      serverFirst: serverPassword[0] || 'EMPTY',
      serverLast: serverPassword[serverPassword.length - 1] || 'EMPTY',
      exactMatch: password === serverPassword,
      trimmedMatch: password?.trim() === serverPassword.trim(),
      receivedCharCodes: password ? password.split('').map((c: string) => c.charCodeAt(0)).join(',') : 'EMPTY',
      serverCharCodes: serverPassword.split('').map((c: string) => c.charCodeAt(0)).join(','),
    }

    if (password === serverPassword) {
      // Set a session cookie
      const cookieStore = await cookies()
      cookieStore.set('admin_session', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      })

      return NextResponse.json({ success: true })
    }

    // Return debug info with the error (TEMPORARY)
    return NextResponse.json({ error: 'Invalid password', debug }, { status: 401 })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
