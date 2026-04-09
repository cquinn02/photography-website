import { useState, useRef, useCallback, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const headshotTypes = ['BUSINESS', 'CORPORATE', 'ACTOR', 'LINKEDIN', 'REALTOR', 'LAWYER', 'MEDICAL']

function AnimatedHeading() {
  const fullText = 'WHAT KIND OF HEADSHOT DO YOU NEED?'
  const [typedText, setTypedText] = useState('')
  const [typingDone, setTypingDone] = useState(false)
  const [started, setStarted] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [animClass, setAnimClass] = useState('heading-fade-in')
  const headingRef = useRef<HTMLDivElement>(null)

  // Start animation when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (headingRef.current) observer.observe(headingRef.current)
    return () => observer.disconnect()
  }, [])

  // Typewriter effect
  useEffect(() => {
    if (!started) return
    if (typedText.length < fullText.length) {
      const delay = 100 + Math.random() * 80
      const timer = setTimeout(() => setTypedText(fullText.slice(0, typedText.length + 1)), delay)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => setTypingDone(true), 800)
      return () => clearTimeout(timer)
    }
  }, [typedText, started])

  // Rotating words after typewriter finishes
  useEffect(() => {
    if (!typingDone) return
    const timer = setInterval(() => {
      setAnimClass('heading-fade-out')
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % headshotTypes.length)
        setAnimClass('heading-fade-in')
      }, 400)
    }, 2500)
    return () => clearInterval(timer)
  }, [typingDone])

  return (
    <div ref={headingRef} className="font-raleway text-center" style={{ color: '#ffffff' }}>
      <p className="text-4xl lg:text-6xl font-bold" style={{ minHeight: '80px' }}>
        {typedText}
        {!typingDone && <span className="heading-blink">|</span>}
      </p>
      {typingDone && (
        <p className="text-3xl lg:text-5xl font-normal mt-3" style={{ color: '#ffffff' }}>
          <span className={`inline-block ${animClass}`}>{headshotTypes[wordIndex]}</span>
        </p>
      )}
      <style jsx>{`
        .heading-blink {
          font-weight: 300;
          animation: hBlink 0.8s infinite;
        }
        @keyframes hBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .heading-fade-in {
          animation: hFadeIn 0.4s ease forwards;
        }
        .heading-fade-out {
          animation: hFadeOut 0.4s ease forwards;
        }
        @keyframes hFadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hFadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-15px); }
        }
      `}</style>
    </div>
  )
}

const services = [
  { image: 'https://images.cmqheadshots.com/images/carousel/craig-business-carousel.webp', alt: 'Business headshots Phoenix', title: 'BUSINESS HEADSHOTS', href: '/phoenix-business-headshots' },
  { image: 'https://images.cmqheadshots.com/images/website%20media/CMQ-HEADSHOTS-pro-headshots-41301-jpmini-leg-sq.webp', alt: 'Corporate headshots Phoenix', title: 'CORPORATE HEADSHOTS', href: '/corporate-staff-headshots' },
  { image: 'https://images.cmqheadshots.com/images/carousel/sophia-actor-carousel.webp', alt: 'Actor headshots Phoenix', title: 'ACTOR HEADSHOTS', href: '/actor-headshots-phoenix' },
  { image: 'https://images.cmqheadshots.com/images/carousel/britany-linkedin-carousel.webp', alt: 'LinkedIn headshots Phoenix', title: 'LINKEDIN HEADSHOTS', href: '/linkedin-headshots' },
  { image: 'https://images.cmqheadshots.com/images/carousel/guillermo-realtor-carousel.webp', alt: 'Realtor headshots Phoenix', title: 'REALTOR HEADSHOTS', href: '/realtor-headshots-phoenix' },
  { image: 'https://images.cmqheadshots.com/images/carousel/lawyer-carousel.webp', alt: 'Lawyer headshots Phoenix', title: 'LAWYER HEADSHOTS', href: '/lawyer-headshots-phoenix' },
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
    <section id="services" className="pt-8 pb-16 lg:pt-10 lg:pb-20 min-h-screen flex flex-col justify-center" style={{
      backgroundColor: '#575757',
      backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
      backgroundRepeat: 'repeat',
      backgroundSize: 'auto'
    }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 lg:mb-[50px]">
          <AnimatedHeading />
          <div className="cta-glow-wrapper mt-3">
            <p className="font-raleway text-2xl lg:text-3xl font-normal relative z-10 px-8 pt-4 pb-2" style={{ color: '#ffffff', letterSpacing: '0.05em' }}>
              Click on the headshot session type to see pricing and book your session
            </p>
            <div className="bounce-arrow flex justify-center gap-4 lg:gap-6 pb-2">
              <svg className="w-6 h-6 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              <svg className="w-6 h-6 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              <svg className="w-6 h-6 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              <svg className="hidden lg:block w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              <svg className="hidden lg:block w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
            </div>
            <style jsx>{`
              .cta-glow-wrapper { position: relative; display: inline-block; border-radius: 8px; border: 4px solid #ffffff; }
              .cta-glow-wrapper::before { content: ''; position: absolute; inset: -4px; border-radius: 10px; box-shadow: 0 0 25px rgba(255, 255, 255, 0.6), 0 0 50px rgba(85, 119, 165, 0.5); animation: glow-pulse 2s ease-in-out infinite; pointer-events: none; }
              @keyframes glow-pulse {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 1; }
              }
              .bounce-arrow {
                animation: bounce-down 1.5s ease-in-out infinite;
              }
              @keyframes bounce-down {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(8px); }
              }
            `}</style>
          </div>
        </div>
      </div>
      <div className="relative">
        <button onClick={() => handleArrow('left')} className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200" style={{ backgroundColor: 'rgba(255,255,255,0.85)' }} aria-label="Previous service">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#575757" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button onClick={() => handleArrow('right')} className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200" style={{ backgroundColor: 'rgba(255,255,255,0.85)' }} aria-label="Next service">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#575757" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
        </button>
        <div className="carousel-track-wrapper" style={{ cursor: isDragging.current ? 'grabbing' : 'grab' }} onMouseEnter={() => setIsPaused(true)} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleDragEnd}>
          <div ref={trackRef} className="carousel-track" style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
            {doubledServices.map((service, i) => (
              <Link key={`${service.href}-${i}`} href={service.href} prefetch={false} className="group block rounded-lg overflow-hidden transition-all duration-300 carousel-slide select-none" draggable={false} onClick={handleLinkClick} style={{ border: '3px solid transparent' }} onMouseEnter={(e) => { e.currentTarget.style.border = '4px solid #ffffff'; e.currentTarget.style.boxShadow = '0 0 25px rgba(255,255,255,0.6), 0 0 50px rgba(85,119,165,0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.border = '3px solid transparent'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/5' }}>
                  <Image src={service.image} alt={service.alt} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 288px, (max-width: 1024px) 30vw, 22vw" draggable={false} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/40 group-hover:via-transparent transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                    <h3 className="font-raleway text-xl lg:text-2xl" style={{ color: '#ffffff', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)' }}>
                      <span className="font-medium">{service.title}</span>
                    </h3>
                    <p className="font-raleway text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: '#D0D0D0' }}>View Pricing →</p>
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
