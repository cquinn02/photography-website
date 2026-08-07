import { NextRequest, NextResponse } from 'next/server'

// Password gate for internal demo pages only (/demo-corporate-*).
// Colleagues reviewing the hero demos sign in with the shared credentials below.
const DEMO_USER = 'cmq'
const DEMO_PASS = 'demo2026'

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/demo-corporate-')) {
    return NextResponse.next()
  }

  const auth = request.headers.get('authorization')

  if (auth?.startsWith('Basic ')) {
    const [user, pass] = atob(auth.slice(6)).split(':')
    if (user === DEMO_USER && pass === DEMO_PASS) {
      return NextResponse.next()
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="CMQ Demo Pages"' }
  })
}

export const config = {
  // Exclude Next internals and static assets; the demo-path check happens in code
  matcher: ['/((?!_next/|api/|favicon).*)']
}
