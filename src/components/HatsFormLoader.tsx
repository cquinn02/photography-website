import { useEffect, useState } from 'react'
import Script from 'next/script'

interface HatsFormLoaderProps {
  src: string
  title: string
  height?: number
}

/**
 * Deferred loader for the 17hats embedded form.
 *
 * The 17hats iframe pulls in ~1.5MB of JS plus Google reCAPTCHA the moment it is
 * in the DOM, which starved the rest of the page on slow mobile connections
 * (PageSpeed LCP 12s on /contact-us). This renders a lightweight placeholder and
 * mounts the real iframe on the first user interaction (touch, scroll, mouse,
 * key), on a tap of the button, or 8 seconds after the page has fully loaded
 * as a safety net. Lab tools never interact, so they measure the page itself.
 */
export default function HatsFormLoader({ src, title, height = 600 }: HatsFormLoaderProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (loaded) return
    const load = () => setLoaded(true)
    const events: (keyof WindowEventMap)[] = ['scroll', 'touchstart', 'pointerdown', 'keydown', 'mousemove']
    events.forEach((ev) => window.addEventListener(ev, load, { once: true, passive: true }))
    let timer: ReturnType<typeof setTimeout> | undefined
    const arm = () => { timer = setTimeout(load, 8000) }
    if (document.readyState === 'complete') arm()
    else window.addEventListener('load', arm, { once: true })
    return () => {
      events.forEach((ev) => window.removeEventListener(ev, load))
      window.removeEventListener('load', arm)
      if (timer) clearTimeout(timer)
    }
  }, [loaded])

  if (!loaded) {
    return (
      <div
        className="bg-white border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center text-center px-6 py-12"
        style={{ minHeight: `${height}px` }}
      >
        <p className="font-raleway text-xl lg:text-2xl mb-8 max-w-md" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.6' }}>
          The form is ready when you are.
        </p>
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="font-raleway text-lg lg:text-xl uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
          style={{ backgroundColor: '#5577a5', color: '#ffffff', fontWeight: '500' }}
        >
          Open the form
        </button>
      </div>
    )
  }

  return (
    <>
      <iframe
        name="lc_contact_form"
        frameBorder="0"
        width="100%"
        height={height}
        style={{ minHeight: `${height}px` }}
        src={src}
        title={title}
      />
      <Script src="https://537178.17hats.com/vendor/iframeSizer.min.js" strategy="lazyOnload" />
    </>
  )
}
