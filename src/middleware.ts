import { NextRequest, NextResponse } from 'next/server'

// Password gate for internal demo pages only (/demo-corporate-*).
// Colleagues reviewing the hero demos sign in with the shared credentials below.
const DEMO_USER = 'cmq'
const DEMO_PASS = 'demo2026'
// Cookie lets embedded iframes (compare page previews) load without re-prompting,
// since Safari won't surface a Basic Auth prompt for framed subrequests.
const COOKIE_NAME = 'cmq_demo_auth'
const COOKIE_VALUE = 'granted-2026'

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/demo-corporate-')) {
    return NextResponse.next()
  }

  if (request.cookies.get(COOKIE_NAME)?.value === COOKIE_VALUE) {
    return NextResponse.next()
  }

  const auth = request.headers.get('authorization')

  if (auth?.startsWith('Basic ')) {
    const [user, pass] = atob(auth.slice(6)).split(':')
    if (user === DEMO_USER && pass === DEMO_PASS) {
      const response = NextResponse.next()
      response.cookies.set(COOKIE_NAME, COOKIE_VALUE, {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 14
      })
      return response
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
