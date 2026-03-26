import { useState, useRef, useCallback } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Award, Heart, Shield } from 'lucide-react'
import FourStepPolaroid from '@/components/sections/FourStepPolaroid'
import GetPricingButton from '@/components/GetPricingButton'
import FAQSchema from '@/components/FAQSchema'
import Head from 'next/head'

const ThreeReviewSection = dynamic(() => import('@/components/sections/ThreeReviewSection'))
const VideoSection = dynamic(() => import('@/components/sections/VideoSection'))
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'))

// Service card data — each links to its dedicated page
const services = [
  {
    image: 'https://images.cmqheadshots.com/images/website%20media/4x5%20images/CMQHeadshots-Denova2743-craig-8x10.webp',
    alt: 'Business headshots Phoenix',
    title: 'BUSINESS HEADSHOTS',
    description: 'Executive, entrepreneur & LinkedIn headshots',
    href: '/phoenix-business-headshots',
    cta: 'VIEW PRICING'
  },
  {
    image: 'https://images.cmqheadshots.com/images/website%20media/CMQ-HEADSHOTS-pro-headshots-41301-jpmini-leg-sq.webp',
    alt: 'Corporate headshots Phoenix',
    title: 'CORPORATE HEADSHOTS',
    description: 'On-site team photography — I bring my studio to your office',
    href: '/corporate-staff-headshots',
    cta: 'GET A QUOTE'
  },
  {
    image: 'https://images.cmqheadshots.com/images/website%20media/4x5%20images/Sophia4482-vert1.webp',
    alt: 'Actor headshots Phoenix',
    title: 'ACTOR HEADSHOTS',
    description: 'Theatrical, commercial & character looks for casting',
    href: '/actor-headshots-phoenix',
    cta: 'VIEW PRICING'
  },
  {
    image: 'https://images.cmqheadshots.com/images/website%20media/4x5%20images/CMQHEADSHOTS-Britany%20Howell1600.webp',
    alt: 'LinkedIn headshots Phoenix',
    title: 'LINKEDIN HEADSHOTS',
    description: 'Pro photos get 21x more profile views & 36x more messages',
    href: '/linkedin-headshots',
    cta: 'VIEW PRICING'
  },
  {
    image: 'https://images.cmqheadshots.com/images/Guillermo%20Ocampo16095-c.webp',
    alt: 'Realtor headshots Phoenix',
    title: 'REALTOR HEADSHOTS',
    description: 'Stand out on Zillow, Realtor.com & your brokerage site',
    href: '/realtor-headshots-phoenix',
    cta: 'VIEW PRICING'
  },
  {
    image: 'https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-card.webp',
    alt: 'Lawyer headshots Phoenix',
    title: 'LAWYER HEADSHOTS',
    description: 'Polished headshots for law firm websites, Avvo & legal directories',
    href: '/lawyer-headshots-phoenix',
    cta: 'VIEW PRICING'
  },
  {
    image: 'https://images.cmqheadshots.com/images/ims%20csuite.webp',
    alt: 'Team composite headshots Phoenix',
    title: 'TEAM COMPOSITE',
    description: 'Individual headshots combined into one polished group photo',
    href: '/team-composite-headshots',
    cta: 'LEARN MORE'
  }
]

function ServiceCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const dragOffset = useRef(0)
  const isDragging = useRef(false)
  const didDrag = useRef(false)

  const ANIMATION_DURATION = 25

  // Duplicate cards for seamless infinite loop
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

  // Touch events (mobile)
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX)
  }, [handleDragStart])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX)
  }, [handleDragMove])

  // Mouse events (desktop)
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    handleDragStart(e.clientX)
  }, [handleDragStart])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    handleDragMove(e.clientX)
  }, [handleDragMove])

  const handleMouseUp = useCallback(() => {
    handleDragEnd()
  }, [handleDragEnd])

  const handleMouseLeave = useCallback(() => {
    if (isDragging.current) {
      handleDragEnd()
    } else {
      setIsPaused(false)
    }
  }, [handleDragEnd])

  // Arrow button handler — shift by one slide width
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

  // Prevent link clicks after dragging
  const handleLinkClick = useCallback((e: React.MouseEvent) => {
    if (didDrag.current) {
      e.preventDefault()
    }
  }, [])

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
          <p className="font-raleway text-3xl lg:text-4xl font-normal mt-3" style={{ color: '#D0D0D0', letterSpacing: '0.05em' }}>
            Tap your session type to see pricing and book
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Left arrow - mobile only */}
        <button
          onClick={() => handleArrow('left')}
          className="lg:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'rgba(255,255,255,0.85)' }}
          aria-label="Previous service"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#575757" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Right arrow - mobile only */}
        <button
          onClick={() => handleArrow('right')}
          className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'rgba(255,255,255,0.85)' }}
          aria-label="Next service"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#575757" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>

        <div
          className="carousel-track-wrapper"
          style={{ cursor: isDragging.current ? 'grabbing' : 'grab' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
        >
          <div
            ref={trackRef}
            className="carousel-track"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {doubledServices.map((service, i) => (
              <Link
                key={`${service.href}-${i}`}
                href={service.href}
                className="group block rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 carousel-slide select-none"
                draggable={false}
                onClick={handleLinkClick}
              >
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/5' }}>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 70vw, (max-width: 1024px) 30vw, 22vw"
                    draggable={false}
                  />
                  {/* Dark gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                    <h3 className="font-raleway text-xl lg:text-2xl" style={{
                      color: '#ffffff',
                      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)'
                    }}>
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

export default function Home() {
  return (
    <Layout
      title="Headshots Phoenix | 5-Star Photographer | CMQ Headshots"
      description="Top-rated headshot photographer in Phoenix, AZ. 14 years experience. Business, corporate, LinkedIn & actor headshots. Book online today."
      canonical="https://www.cmqheadshots.com/"
      ogUrl="https://www.cmqheadshots.com/"
    >
      <Head>
        {/* Preload hero images for faster LCP */}
        <link
          rel="preload"
          as="image"
          href="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-mobile-640.webp"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-mobile-828.webp"
          media="(min-width: 768px) and (max-width: 1023px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-scaled-1.webp"
          media="(min-width: 1024px)"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Welcome to CMQ Headshots – Phoenix Headshot Photographer",
            "description": "Cindy Quinn, owner of CMQ Headshots, introduces her Phoenix headshot photography studio and explains how she makes clients feel comfortable during their professional headshot session.",
            "thumbnailUrl": "https://images.cmqheadshots.com/images/VideoScreenshot-small.jpg",
            "uploadDate": "2024-01-01T00:00:00-07:00",
            "duration": "PT1M20S",
            "contentUrl": "https://images.cmqheadshots.com/images/CMQ-HEADSHOT-WELCOME-MESSAGE-compressed.mp4",
            "creator": {
              "@type": "Organization",
              "name": "CMQ Headshots",
              "url": "https://www.cmqheadshots.com"
            }
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.cmqheadshots.com"
              }
            ]
          }) }}
        />
      </Head>

      {/* FAQ Schema */}
      <FAQSchema faqs={[
        { question: "How do I choose a headshot photographer in Phoenix?", answer: "Look for a specialist — not a generalist who also does weddings and events. Check their Google reviews and portfolio consistency. With 14 years and 130+ five-star reviews, I focus exclusively on headshots." },
        { question: "How much do headshots cost in Phoenix, AZ?", answer: "Professional headshot photography in Phoenix typically ranges from around $195 for a basic session to $500+ for a full experience with multiple looks. AI-generated headshots are cheaper, but they don't look like real people — and clients and colleagues can tell the difference. My packages include professional lighting, expert posing guidance, and retouched images delivered within 7 business days. Visit my service pages for current pricing or contact me for a custom quote." },
        { question: "What should I wear to my Phoenix headshot session?", answer: "I send a detailed style guide when you book. Generally, solid colors in business or business-casual attire work best — choose colors that bring out the color of your eyes without washing you out. Avoid busy patterns and large logos. Bring 2-3 outfit options so we can find what looks best on camera. I'll help you decide at the start of your session." },
        { question: "Do you offer on-location headshot photography in Phoenix?", answer: "Yes! I bring my full professional studio setup — lighting, backdrops, and all equipment — directly to your office anywhere in the Phoenix metro area, including Scottsdale, Tempe, Chandler, and Gilbert. On-location sessions are ideal for corporate teams because each person typically needs just 10-15 minutes, minimizing disruption to your workday." },
        { question: "How long does a professional headshot session take?", answer: "Full headshot sessions typically run about two hours — I never rush, and your session continues until you have images you love. For express LinkedIn or new hire headshots, sessions run about 30 minutes and include selecting your favorite image before you leave." },
        { question: "Will you help me pose during my headshot session?", answer: "Absolutely! I will help you look more confident and natural in front of the camera. When my clients leave the studio, they always say I made them feel comfortable and relaxed." },
        { question: "Do you offer discounts?", answer: "I offer a 20% discount to military personnel and active first responders, and 30% off the session fee for return clients." },
        { question: "What is the difference between a headshot and a professional portrait?", answer: "A headshot focuses on your face and shoulders, typically used for LinkedIn, company websites, and business cards. A professional portrait captures more of you — your posture, environment, and personal brand. Both are shot in my Phoenix studio with professional lighting. Many clients book a session that includes both." },
        { question: "When will I get my final images?", answer: "Final retouched images are delivered within 7 business days. Same-day retouching is also available." }
      ]} />

      {/* ===== HERO SECTION with H1 overlay ===== */}
      <section className="relative w-full">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-mobile-640.webp"
          />
          <source
            media="(max-width: 1023px)"
            srcSet="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-mobile-828.webp"
          />
          <img
            src="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-scaled-1.webp"
            alt="Headshots Phoenix — professional headshot photography by CMQ Headshots"
            className="w-full h-auto"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
        </picture>
        {/* H1 overlay with gradient band */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full py-6 lg:py-10" style={{
            background: 'linear-gradient(to bottom, transparent, rgba(87, 87, 87, 0.3) 30%, rgba(87, 87, 87, 0.3) 70%, transparent)'
          }}>
            <h1 className="font-raleway text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center" style={{
              color: 'rgba(255, 255, 255, 1)',
              fontWeight: '400',
              letterSpacing: '0.08em'
            }}>
              <span className="font-medium" style={{ fontWeight: '500' }}>HEADSHOTS</span>{' '}
              <span className="font-light" style={{ fontWeight: '300' }}>PHOENIX</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ===== SUPPORTING PARAGRAPH (directly supports H1) ===== */}
      <section className="pt-8 pb-4 lg:pt-12 lg:pb-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="font-raleway text-xl font-normal" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              CMQ Headshots is Phoenix&apos;s top-rated headshot photography studio.
              With 14 years of experience and 130+ five-star Google reviews, I photograph
              business professionals, corporate teams, actors, realtors, and attorneys —
              anyone who needs headshots in Phoenix that look polished, authentic, and
              professional. Every session is comfortable, never rushed, and tailored to your industry.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TAGLINE ===== */}
      <section className="pt-6 pb-12 lg:pt-8 lg:pb-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="font-raleway mb-8" style={{ lineHeight: '1.2' }}>
              <div className="mb-3">
                <span
                  className="inline-block mr-2 lg:mr-4 text-[30px] lg:text-[48px] font-bold"
                  style={{ color: '#5577a5' }}
                >
                  COMFORTABLE,
                </span>
                <span
                  className="inline-block mr-2 lg:mr-4 text-[30px] lg:text-[48px] font-bold"
                  style={{ color: '#5577a5' }}
                >
                  EASY
                </span>
                <span
                  className="inline-block text-[26px] lg:text-[42px] font-normal"
                  style={{ color: '#5577a5' }}
                >
                  HEADSHOTS
                </span>
              </div>
              <div>
                <span
                  className="inline-block mr-2 lg:mr-4 text-[24px] lg:text-[38px] font-normal"
                  style={{ color: '#5577a5' }}
                >
                  YOU&apos;RE
                </span>
                <span
                  className="inline-block mr-2 lg:mr-4 text-[30px] lg:text-[48px] font-bold"
                  style={{ color: '#5577a5' }}
                >
                  GOING TO
                </span>
                <span
                  className="inline-block text-[30px] lg:text-[48px] font-bold"
                  style={{ color: '#5577a5' }}
                >
                  LOVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE CARDS CAROUSEL ===== */}
      <ServiceCarousel />

      {/* ===== PHOENIX HEADSHOTS AUTHORITY SECTION ===== */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-2xl lg:text-[32px] text-center mb-8" style={{ color: '#5577a5' }}>
              <span className="font-medium">PROFESSIONAL HEADSHOTS</span>{' '}
              <span className="font-normal">PHOENIX</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <p className="font-raleway text-xl font-normal mb-5" style={{
                  color: '#383838',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.7'
                }}>
                  I&apos;ve been providing professional headshots in Phoenix for over a decade —
                  photographing executives, entrepreneurs, attorneys, realtors, actors, and job seekers
                  across the Valley. From the corporate offices in the Biltmore corridor to the law firms
                  along Camelback Road, I understand that a great headshot isn&apos;t just a photo.
                  It&apos;s the first impression you make before you ever shake someone&apos;s hand.
                </p>
                <p className="font-raleway text-xl font-normal mb-5" style={{
                  color: '#383838',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.7'
                }}>
                  My clients trust me to deliver professional headshots that capture their authentic
                  personality while projecting the confidence their career demands. Every session is
                  tailored to your industry — whether you&apos;re a CEO, a new hire, or an actor
                  building a casting portfolio.
                </p>
              </div>
              <div>
                <p className="font-raleway text-xl font-normal mb-5" style={{
                  color: '#383838',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.7'
                }}>
                  My Phoenix studio is equipped with professional lighting, multiple backdrop options,
                  and a relaxed atmosphere designed to bring out your best. I also offer on-location
                  headshot photography anywhere in the Phoenix metro area — I&apos;ll bring my full
                  studio setup to your office, coworking space, or preferred location.
                </p>
                <p className="font-raleway text-xl font-normal" style={{
                  color: '#383838',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.7'
                }}>
                  Whether you&apos;re updating your LinkedIn profile, refreshing your company website,
                  or building a portfolio for casting calls, I deliver professional headshot photography
                  in Phoenix that is polished and authentically you. No cookie-cutter poses. No rushed
                  sessions. Just headshots you&apos;ll be proud to put in front of the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VIDEO SECTION ===== */}
      <VideoSection
        videoUrl="https://images.cmqheadshots.com/images/CMQ-HEADSHOT-WELCOME-MESSAGE-compressed.mp4"
        posterImage="https://images.cmqheadshots.com/images/VideoScreenshot-small.jpg"
        title="HEADSHOT PHOTOGRAPHER"
        titleThinWord="PHOENIX"
        description="As a headshot photographer in Phoenix, headshot photography isn't just my job — it's my passion. I specialize in headshots because I love working with my clients to create an image that helps them reach their goals. Making people feel comfortable in front of my camera is a big part of my process, and it's the first step towards creating a headshot that you'll truly love."
        ownerName="Cindy Quinn - Owner"
        backgroundColor="#FFFFFF"
      />

      {/* ===== REVIEWS ===== */}
      <ThreeReviewSection
        reviews={[
          {
            image: 'https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS1196-sq-optimized.webp',
            imageAlt: "Chad's professional headshot",
            name: 'Chad Noonan',
            review: "Cindy is an expert professional photographer. She helped me prepare for my photoshoot and clearly outlined expectations, resolving any uncertainties I had. I found working with Cindy easy and fun!",
            stars: 5
          },
          {
            image: 'https://images.cmqheadshots.com/images/website%20media/CMQHeadshots-Adwoaj9579-web-jp-leg-sq.webp',
            imageAlt: 'Professional headshot review',
            name: 'Adwoa John',
            review: "Cindy made me feel very comfortable right away! She is professional, detailed, and cared so much about capturing the essence of my person! I will be recommending her to friends and family.",
            stars: 5
          },
          {
            image: 'https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-LisaS0258-optimized.webp',
            imageAlt: 'Professional headshot review',
            name: 'Lisa Sallee',
            review: "I really enjoyed working with Cindy! We had a phone consultation to give me tips on wardrobe colors, skincare, and makeup. It was a very comfortable experience, and I would absolutely use her again.",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        backgroundImage="url('https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp')"
        textColor="white"
      />

      {/* ===== 4-STEP PROCESS (Polaroid Cards) ===== */}
      <FourStepPolaroid />

      {/* ===== WHO I WORK WITH ===== */}
      <section className="py-12 lg:py-16" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-raleway text-3xl lg:text-4xl mb-4" style={{ color: '#ffffff' }}>
              <span className="font-medium">TRUSTED BY</span>{' '}
              <span className="font-normal">PHOENIX PROFESSIONALS</span>
            </p>
            <p className="font-raleway text-xl font-normal mb-8" style={{
              color: '#ffffff',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              I&apos;ve provided headshots for professionals across every
              industry in Phoenix — from Fortune 500 companies to solo entrepreneurs just getting
              started. My clients include:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                'Executives & C-Suite',
                'Entrepreneurs & Founders',
                'Attorneys & Law Firms',
                'Real Estate Agents',
                'Financial Advisors',
                'Healthcare Professionals',
                'Actors & Performers',
                'Job Seekers',
                'Corporate Teams'
              ].map((item) => (
                <div key={item} className="font-raleway text-xl py-3 px-4 rounded-lg" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  fontWeight: '400',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}>
                  {item}
                </div>
              ))}
            </div>
            <p className="font-raleway text-xl font-normal mt-8" style={{
              color: '#ffffff',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              No matter your industry, I understand how to light, pose, and direct you to create
              headshots that communicate professionalism, approachability, and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE CMQ ===== */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-raleway text-3xl lg:text-4xl" style={{ color: '#5577a5' }}>
              <span className="font-medium">WHY CHOOSE</span>{' '}
              <span className="font-normal">CMQ HEADSHOTS?</span>
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <Award className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <p className="font-raleway text-xl font-semibold mb-3" style={{ color: '#5577a5' }}>
                14 Years Experience
              </p>
              <p className="font-raleway text-xl font-normal" style={{
                color: '#575757',
                fontWeight: '400',
                lineHeight: '1.6'
              }}>
                Trusted by professionals across Phoenix for 14 years with 130+ five-star Google reviews.
              </p>
            </div>
            <div className="text-center p-6">
              <Heart className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <p className="font-raleway text-xl font-semibold mb-3" style={{ color: '#5577a5' }}>
                Comfortable Experience
              </p>
              <p className="font-raleway text-xl font-normal" style={{
                color: '#575757',
                fontWeight: '400',
                lineHeight: '1.6'
              }}>
                Nervous? That&apos;s normal. I walk you through the whole process so you feel relaxed and look your best.
              </p>
            </div>
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <p className="font-raleway text-xl font-semibold mb-3" style={{ color: '#5577a5' }}>
                No Rush Guarantee
              </p>
              <p className="font-raleway text-xl font-normal" style={{
                color: '#575757',
                fontWeight: '400',
                lineHeight: '1.6'
              }}>
                Sessions continue until you have the perfect shots — 20 minutes to 3 hours. I never rush.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MORE REVIEWS ===== */}
      <ThreeReviewSection
        reviews={[
          {
            image: 'https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTSCarolH3375.webp',
            imageAlt: 'Carol H professional headshot',
            name: 'Carol Herron',
            review: "From start to finish, the session was 2.5 hours. Before your session, you'll receive helpful information. I recommend CMQ HEADSHOTS to all of my friends and family.",
            stars: 5
          },
          {
            image: 'https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-Shawn%20Wilson10136-small-1x1-optimized.webp',
            imageAlt: 'Shawn Wilson professional headshot',
            name: 'Shawn Wilson',
            review: "Cindy helped me with posing, expression and clothing that made me more comfortable, which me look better, and ultimately resulted in amazing headshots. I highly recommend CMQ Headshots!",
            stars: 5
          },
          {
            image: 'https://images.cmqheadshots.com/images/website%20media/CMQheadshots-Ronlyn-Phoenix-headshots3414.webp',
            imageAlt: 'Ronlyn professional headshot',
            name: 'Ronlyn Griggs',
            review: "Cindy at CMQ Headshots did a fantastic job with my headshots. Very patient and willing to do whatever it took to get a great shot. She is a PRO and it shows! Highly recommend!!!",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        backgroundImage="url('https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp')"
        textColor="white"
      />

      {/* ===== PROFESSIONAL HEADSHOTS & PORTRAITS PHOENIX ===== */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-8" style={{ color: '#5577a5' }}>
              <span className="font-medium">PROFESSIONAL HEADSHOTS</span>{' '}
              <span className="font-normal">PHOENIX, AZ</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <p className="font-raleway text-xl font-normal mb-5" style={{
                  color: '#383838',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.7'
                }}>
                  Professional headshots in Phoenix, AZ are an investment in your career. LinkedIn profiles
                  with professional headshots get 21x more views and 36x more messages — and that&apos;s
                  just one platform. Whether you need headshots for your company website, a law firm directory,
                  or a real estate listing, the right image opens doors.
                </p>
                <p className="font-raleway text-xl font-normal mb-5" style={{
                  color: '#383838',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.7'
                }}>
                  As a Phoenix, AZ headshot photographer, I&apos;ve helped thousands of
                  professionals put their best face forward — from
                  executives in the Biltmore corridor to actors in the Phoenix valley and surrounding area. My clients
                  consistently rate me the <Link href="/blog/best-professional-headshot-photographers-near-me" className="underline hover:no-underline" style={{ color: '#5577a5' }}>best headshot photographer near me</Link> because
                  every session is comfortable, personalized, and never rushed.
                </p>
              </div>
              <div>
                <p className="font-raleway text-xl font-normal mb-5" style={{
                  color: '#383838',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.7'
                }}>
                  Phoenix, AZ professional headshots don&apos;t have to be stiff or corporate-looking.
                  I specialize in capturing authentic personality while maintaining the polish that
                  professionals need. From <Link href="/lawyer-headshots-phoenix" className="underline hover:no-underline" style={{ color: '#5577a5' }}>lawyer headshots</Link> to{' '}
                  <Link href="/realtor-headshots-phoenix" className="underline hover:no-underline" style={{ color: '#5577a5' }}>realtor headshots</Link> to creative headshots for entrepreneurs — every session is
                  tailored to your industry and goals.
                </p>
                <p className="font-raleway text-xl font-normal" style={{
                  color: '#383838',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.7'
                }}>
                  Ready for professional headshots in Phoenix, AZ that you&apos;ll actually love?{' '}
                  <Link href="/contact-us" className="underline hover:no-underline" style={{ color: '#5577a5' }}>Contact me</Link> to
                  schedule your session or book a free Zoom consultation to discuss your headshot needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HEADSHOTS FOR PROFESSIONALS ===== */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-10 text-center" style={{ color: '#5577a5' }}>
              <span className="font-medium">HEADSHOTS</span>{' '}
              <span className="font-normal">FOR PROFESSIONALS</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-raleway text-xl font-normal mb-5" style={{
                  color: '#383838',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.7'
                }}>
                  Headshots for professionals aren&apos;t just photos — they&apos;re career tools. LinkedIn
                  profiles with professional headshots receive 21x more views and 36x more messages.
                  Your headshot appears on company websites, email signatures, business cards, conference
                  bios, and legal directories. It&apos;s working for you around the clock, making first
                  impressions before you ever walk into the room.
                </p>
                <p className="font-raleway text-xl font-normal mb-5" style={{
                  color: '#383838',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.7'
                }}>
                  Whether you&apos;re an executive updating your corporate profile, a lawyer building
                  credibility with clients, a realtor standing out on Zillow, or an entrepreneur
                  launching a personal brand — the right headshot makes people want to work with you.
                  I photograph professionals across every industry and tailor each session to your
                  specific goals.
                </p>
                <div className="mt-8">
                  <Link
                    href="/#services"
                    className="font-raleway inline-block text-white px-8 py-4 text-lg font-normal transition-all duration-300 rounded-lg uppercase tracking-wide"
                    style={{ backgroundColor: '#5577a5' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#575757'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5577a5'}
                  >
                    VIEW HEADSHOT SERVICES
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full" style={{ maxWidth: '500px', aspectRatio: '4/5' }}>
                  <Image
                    src="https://images.cmqheadshots.com/images/denise%20Tedeschi128742.jpg"
                    alt="Professional headshot of a female executive photographed in Phoenix by CMQ Headshots"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 1024px) 80vw, 500px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <FAQSection
        backgroundColor="#FFFFFF"
        faqs={[
          {
            id: 1,
            question: "Do you offer discounts?",
            answer: "Yes! I offer 20% off for military and first responders, and 30% off the session fee for returning clients."
          },
          {
            id: 2,
            question: "Do you do outdoor headshots?",
            answer: "Absolutely! I love outdoor sessions. We can use natural light to create a relaxed, approachable look for your headshots."
          },
          {
            id: 3,
            question: "Do you offer gift cards?",
            answer: "Yes! Headshot gift cards are available and make a great gift for anyone starting a new job, graduating, or updating their professional image."
          }
        ]}
        showContactCTA={true}
      />

      {/* ===== FINAL CTA ===== */}
      <section className="bg-cmq-blue text-white" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl lg:text-4xl mb-4 uppercase" style={{ color: '#ffffff' }}>
            <span className="font-medium" style={{ fontWeight: '500' }}>PROFESSIONAL PHOTOGRAPHY</span>{' '}
            <span className="font-normal" style={{ fontWeight: '400' }}>PHOENIX</span>
          </h2>
          <p className="font-raleway text-xl font-normal mb-8 text-white" style={{
            fontWeight: '400',
            letterSpacing: '0.03em',
            lineHeight: '1.6'
          }}>
            Professional photography in Phoenix that you&apos;ll be proud to use everywhere — LinkedIn, your company website, business cards, and beyond. Book your session today.
          </p>
          <GetPricingButton href="#services" size="xl" className="border-2 border-white">
            Choose Your Headshot Session
          </GetPricingButton>
        </div>
      </section>

    </Layout>
  )
}
