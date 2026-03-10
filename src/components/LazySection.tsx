import { useRef, useState, useEffect, ReactNode } from 'react'

interface LazySectionProps {
  children: ReactNode
  /** Estimated height to prevent layout shift when placeholder is shown */
  height?: string
  /** How far before the viewport to start loading (default: 300px) */
  rootMargin?: string
}

/**
 * Wraps a section so it only renders when near the viewport.
 * On the server (SSR), renders nothing — the section HTML is excluded
 * from the initial response, reducing document size.
 * On the client, uses IntersectionObserver to render when scrolled near.
 */
export default function LazySection({ children, height = '500px', rootMargin = '300px' }: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <div ref={ref} style={{ minHeight: isVisible ? undefined : height }}>
      {isVisible ? children : null}
    </div>
  )
}
