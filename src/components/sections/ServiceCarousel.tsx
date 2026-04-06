import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  { image: 'https://images.cmqheadshots.com/images/website%20media/4x5%20images/CMQHeadshots-Denova2743-craig-8x10.webp', alt: 'Business headshots Phoenix', title: 'BUSINESS HEADSHOTS', href: '/phoenix-business-headshots' },
  { image: 'https://images.cmqheadshots.com/images/website%20media/CMQ-HEADSHOTS-pro-headshots-41301-jpmini-leg-sq.webp', alt: 'Corporate headshots Phoenix', title: 'CORPORATE HEADSHOTS', href: '/corporate-staff-headshots' },
  { image: 'https://images.cmqheadshots.com/images/website%20media/4x5%20images/Sophia4482-vert1.webp', alt: 'Actor headshots Phoenix', title: 'ACTOR HEADSHOTS', href: '/actor-headshots-phoenix' },
  { image: 'https://images.cmqheadshots.com/images/website%20media/4x5%20images/CMQHEADSHOTS-Britany%20Howell1600.webp', alt: 'LinkedIn headshots Phoenix', title: 'LINKEDIN HEADSHOTS', href: '/linkedin-headshots' },
  { image: 'https://images.cmqheadshots.com/images/Guillermo%20Ocampo16095-c.webp', alt: 'Realtor headshots Phoenix', title: 'REALTOR HEADSHOTS', href: '/realtor-headshots-phoenix' },
  { image: 'https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-card.webp', alt: 'Lawyer headshots Phoenix', title: 'LAWYER HEADSHOTS', href: '/lawyer-headshots-phoenix' },
  { image: 'https://images.cmqheadshots.com/images/Denison_Valerie_627-0595-4x5.webp', alt: 'ERAS medical headshots Phoenix', title: 'ERAS MEDICAL HEADSHOTS', href: '/eras-medical-headshots' },
  { image: 'https://images.cmqheadshots.com/images/ims%20csuite.webp', alt: 'Team composite headshots Phoenix', title: 'TEAM COMPOSITE', href: '/team-composite-headshots' },
]

export default function ServiceCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const dragOffset = useRef(0)
  const isDragging = useRef(false)
  const didDrag = useRef(false)
  const ANIMATION_DURATION = 25
  const doubledServices = [...services, ...services]

  const handleDragStart = useCallback((clientX: number) => {
    const track = trackRef.current
    if (!track) return
    isDragging.current = true
    didDrag.current = false
    startX.current = clientX
    const style = window.getComputedStyle(track)
    const matrix = new DOMMatrix(style.transform)
    dragOffset.current = matrix.m41
    track.style.animation = 'none'
    track.style.transform = `translateX(${dragOffset.current}px)`
    setIsPaused(true)
  }, [])

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging.current || !trackRef.current) return
    const diff = clientX - startX.current
    if (Math.abs(diff) > 5) didDrag.current = true
    trackRef.current.style.transform = `translateX(${dragOffset.current + diff}px)`
  }, [])

  const handleDragEnd = useCallback(() => {
    if (!isDragging.current || !trackRef.current) return
    isDragging.current = false
    const track = trackRef.current
    const style = window.getComputedStyle(track)
    const matrix = new DOMMatrix(style.transform)
    const currentPos = matrix.m41
    const trackWidth = track.scrollWidth / 2
    let normalizedPos = currentPos % trackWidth
    if (normalizedPos > 0) normalizedPos -= trackWidth
    track.style.transform = ''
    track.style.animation = ''
    const progress = Math.abs(normalizedPos) / trackWidth
    track.style.animationDelay = `-${progress * ANIMATION_DURATION}s`
    setIsPaused(false)
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => { handleDragStart(e.touches[0].clientX) }, [handleDragStart])
  const handleTouchMove = useCallback((e: React.TouchEvent) => { handleDragMove(e.touches[0].clientX) }, [handleDragMove])
  const handleMouseDown = useCallback((e: React.MouseEvent) => { e.preventDefault(); handleDragStart(e.clientX) }, [handleDragStart])
  const handleMouseMove = useCallback((e: React.MouseEvent) => { handleDragMove(e.clientX) }, [handleDragMove])
  const handleMouseUp = useCallback(() => { handleDragEnd() }, [handleDragEnd])
  const handleMouseLeave = useCallback(() => { if (isDragging.current) { handleDragEnd() } else { setIsPaused(false) } }, [handleDragEnd])

  const handleArrow = useCallback((direction: 'left' | 'right') => {
    const track = trackRef.current
    if (!track) return
    const style = window.getComputedStyle(track)
    const matrix = new DOMMatrix(style.transform)
    const currentPos = matrix.m41
    const slideWidth = track.scrollWidth / doubledServices.length
    const shift = direction === 'left' ? slideWidth : -slideWidth
    const newPos = currentPos + shift
    const trackWidth = track.scrollWidth / 2
    let normalizedPos = newPos % trackWidth
    if (normalizedPos > 0) normalizedPos -= trackWidth
    track.style.animation = 'none'
    track.style.transform = `translateX(${newPos}px)`
    track.style.transition = 'transform 0.4s ease'
    setTimeout(() => {
      if (!track) return
      track.style.transition = ''
      track.style.transform = ''
      track.style.animation = ''
      const progress = Math.abs(normalizedPos) / trackWidth
      track.style.animationDelay = `-${progress * ANIMATION_DURATION}s`
    }, 400)
  }, [doubledServices.length])

  const handleLinkClick = useCallback((e: React.MouseEvent) => { if (didDrag.current) { e.preventDefault() } }, [])

  return (
    <section id="services" className="pt-8 pb-12 lg:pt-10 lg:pb-16 overflow-hidden" style={{
      backgroundColor: '#575757',
      backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
      backgroundRepeat: 'repeat',
      backgroundSize: 'auto'
    }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="font-raleway text-3xl lg:text-4xl whitespace-nowrap" style={{ color: '#ffffff' }}>
            <span className="font-medium">HEADSHOT</span>{' '}
            <span className="font-normal">SERVICES</span>
          </p>
          <div className="breathing-glow-wrapper mt-3">
            <p className="font-raleway text-3xl lg:text-4xl font-normal relative z-10 px-8 py-4" style={{ color: '#D0D0D0', letterSpacing: '0.05em' }}>
              Click on your session type to see pricing and book
            </p>
            <style jsx>{`
              .breathing-glow-wrapper { position: relative; display: inline-block; border-radius: 8px; border: 2px solid #5577a5; animation: breathe 2.5s ease-in-out infinite; }
              @keyframes breathe {
                0%, 100% { border-color: rgba(85, 119, 165, 0.3); box-shadow: 0 0 8px rgba(85, 119, 165, 0.1), inset 0 0 8px rgba(85, 119, 165, 0.05); }
                50% { border-color: rgba(85, 119, 165, 1); box-shadow: 0 0 20px rgba(85, 119, 165, 0.5), inset 0 0 12px rgba(85, 119, 165, 0.1); }
              }
            `}</style>
          </div>
        </div>
      </div>
      <div className="relative">
        <button onClick={() => handleArrow('left')} className="lg:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.85)' }} aria-label="Previous service">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#575757" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button onClick={() => handleArrow('right')} className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.85)' }} aria-label="Next service">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#575757" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
        </button>
        <div className="carousel-track-wrapper" style={{ cursor: isDragging.current ? 'grabbing' : 'grab' }} onMouseEnter={() => setIsPaused(true)} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleDragEnd}>
          <div ref={trackRef} className="carousel-track" style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
            {doubledServices.map((service, i) => (
              <Link key={`${service.href}-${i}`} href={service.href} className="group block rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 carousel-slide select-none" draggable={false} onClick={handleLinkClick}>
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/5' }}>
                  <Image src={service.image} alt={service.alt} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 288px, (max-width: 1024px) 30vw, 22vw" draggable={false} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                    <h3 className="font-raleway text-xl lg:text-2xl" style={{ color: '#ffffff', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)' }}>
                      <span className="font-medium">{service.title}</span>
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
