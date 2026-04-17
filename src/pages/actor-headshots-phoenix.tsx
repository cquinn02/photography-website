import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import GetPricingButton from '@/components/GetPricingButton'
const FAQSchema = dynamic(() => import('@/components/FAQSchema'), { ssr: true })

const AccordionFAQSection = dynamic(() => import('@/components/sections/AccordionFAQSection'), { ssr: true })
const ThreeReviewSection = dynamic(() => import('@/components/sections/ThreeReviewSection'), { ssr: true })
const AcuityBookingFacade = dynamic(() => import('@/components/AcuityBookingFacade'), { ssr: true })

export default function ActorPricing() {
  const pricingRef = useRef<HTMLDivElement>(null)
  const [pricingVisible, setPricingVisible] = useState(false)

  useEffect(() => {
    const el = pricingRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setPricingVisible(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const actorFAQs = [
    {
      id: 1,
      question: "What's the difference between theatrical and commercial headshots?",
      answer: "Theatrical headshots are more serious and dramatic, showing your depth for film and theater roles. Commercial headshots are bright, friendly, and approachable for advertising work."
    },
    {
      id: 2,
      question: "How many outfit changes should I bring?",
      answer: "Bring 5-6 outfits to give us options. We'll select the best ones that work for your different character types and the lighting setup."
    },
    {
      id: 3,
      question: "Should I wear makeup to my session?",
      answer: "You don't need to wear it to the session. You can do it when you get here. Keep it minimal: a little mascara, lipstick or gloss, and minimal blush is all you need. The goal is to look like the best version of yourself. It's not about heavy makeup."
    },
    {
      id: 4,
      question: "How often should I update my headshots?",
      answer: "Every 1-2 years, or whenever your appearance changes significantly. Your headshot should look like you on your best day, right now."
    },
    {
      id: 5,
      question: "What format will my headshots be in?",
      answer: "High-resolution JPEGs suitable for 8x10 prints, plus web-optimized versions for Actors Access, LA Casting, and other online platforms."
    },
    {
      id: 6,
      question: "Can I see the images during the session?",
      answer: "Yes! We'll review images periodically during the shoot to ensure we're capturing the looks you need and make adjustments as necessary."
    },
    {
      id: 7,
      question: "What if I'm nervous in front of the camera?",
      answer: "Most of my clients are nervous at the start. I keep the session relaxed, coach you through every pose, and show you the images as we go. By the third outfit change, most people forget they were nervous."
    },
    {
      id: 8,
      question: "When will I get my final images back?",
      answer: "Your final images will be done within 7 business days from the time you selected your favorite images.\n\nSame day Retouching – is available at an additional fee of $50.00"
    }
  ]

  return (
    <>
      <Layout
        title="Actor Headshots Phoenix AZ | CMQ Headshots"
        description="Professional actor headshots in Phoenix, AZ. Theatrical, commercial, and character headshots. 14+ years experience, 130+ five-star reviews."
        canonical="https://www.cmqheadshots.com/actor-headshots-phoenix"
        ogUrl="https://www.cmqheadshots.com/actor-headshots-phoenix"
        ogImage="https://images.cmqheadshots.com/images/actor-headshots/ale-1.webp"
        showHeaderContact={true}
      >
      {/* FAQ Schema for AI Visibility */}
      <FAQSchema faqs={actorFAQs.map(faq => ({ question: faq.question, answer: faq.answer }))} />

      {/* Service Schema + BreadcrumbList for Actor Headshots */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Actor Headshots Phoenix AZ",
            "image": "https://images.cmqheadshots.com/images/actor-headshots/ale-1.webp",
            "description": "Professional actor headshot photography in Phoenix, Arizona. Theatrical, commercial, child actor, voiceover, modeling, and comedy performer headshots with expert direction.",
            "provider": {
              "@type": "ProfessionalService",
              "@id": "https://www.cmqheadshots.com",
              "name": "CMQ Headshots",
              "telephone": "+1-480-648-3429",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4405 W Phalen Dr",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "postalCode": "85087",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Phoenix",
              "sameAs": "https://en.wikipedia.org/wiki/Phoenix,_Arizona"
            },
            "serviceType": "Actor Headshot Photography",
            "offers": {
              "@type": "Offer",
              "price": "250",
              "priceCurrency": "USD",
              "description": "Actor headshot session: $250 session fee plus $100 per edited image. Up to 4 hours of studio time on Saturdays.",
              "url": "https://www.cmqheadshots.com/actor-headshots-phoenix"
            },
            "url": "https://www.cmqheadshots.com/actor-headshots-phoenix"
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
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Actor Headshots Phoenix",
                "item": "https://www.cmqheadshots.com/actor-headshots-phoenix"
              }
            ]
          }) }}
        />
      </Head>

      {/* Header with Headshots */}
      <section className="relative" style={{ backgroundColor: '#575757' }}>
        {/* Four Headshots Row */}
        <div className="relative" style={{ lineHeight: 0 }}>
          <div className="grid grid-cols-4 w-full">
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.cmqheadshots.com/images/actor-headshots/ale-1.webp"
                alt="Theatrical actor headshot Phoenix AZ - dramatic studio lighting by CMQ Headshots"
                fill
                className="object-cover"
                sizes="25vw"
                priority
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.cmqheadshots.com/images/actor-headshots/ale-2.webp"
                alt="Professional actress headshot Phoenix AZ - clean white background portrait"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.cmqheadshots.com/images/actor-headshots/ale-3.webp"
                alt="Actor headshot Phoenix AZ - blue backdrop professional portrait"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.cmqheadshots.com/images/actor-headshots/ale-4.webp"
                alt="Commercial actor headshot Phoenix Arizona - approachable expression for casting"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="relative py-6 lg:py-10" style={{
          backgroundColor: '#575757',
          backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto'
        }}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-raleway text-3xl md:text-5xl lg:text-6xl" style={{ color: 'white' }}>
              <span className="font-medium" style={{ color: 'white' }}>ACTOR HEADSHOTS</span><br />
              <span className="font-normal" style={{ color: 'white' }}>PHOENIX, AZ</span>
            </h1>
            <p className="font-raleway text-lg lg:text-xl font-normal mt-6 max-w-3xl lg:max-w-5xl mx-auto" style={{ color: 'white', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
              Actor headshots in Phoenix, AZ, shot every Saturday with up to 4 hours of studio time. Theatrical, commercial, character, and comedy, whatever you are looking for. 14+ years, 130+ five-star reviews, and you only buy the images you want/need to further your acting career.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing and Calendar Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">

            {/* Left Side - Pricing Information */}
            <div className="w-full">
              <div className="bg-white border-2 border-gray-300 rounded-lg p-8 h-[800px] flex items-center justify-center shadow-lg w-full">
                <div ref={pricingRef} className="text-center max-w-md">
                  <div className="font-raleway mb-10" style={{ color: '#383838', lineHeight: '1.1' }}>
                    <div className="text-6xl md:text-7xl mb-1">
                      <span className="inline-block" style={{
                        fontWeight: '700',
                        color: '#5577a5',
                        opacity: pricingVisible ? 1 : 0,
                        animation: pricingVisible ? 'bounce-in 0.6s ease-out forwards' : 'none',
                      }}>ACTOR</span>
                    </div>
                    <div className="text-6xl md:text-7xl mb-6">
                      <span className="inline-block" style={{
                        fontWeight: '300',
                        opacity: pricingVisible ? 1 : 0,
                        animation: pricingVisible ? 'bounce-in 0.6s ease-out 0.2s forwards' : 'none',
                      }}>HEADSHOTS</span>
                    </div>
                    <div className="text-2xl md:text-3xl" style={{ color: '#5577a5', fontWeight: '500', lineHeight: '1.3' }}>
                      Professional Headshots<br />for Actors &amp; Performers
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-7xl md:text-8xl mb-4" style={{ color: '#5577a5', fontWeight: '300' }}>
                      $250
                    </div>
                    <p className="font-raleway text-lg mb-6" style={{ color: '#575757', fontWeight: '400' }}>
                      session fee
                    </p>

                    <div className="space-y-3">
                      <p className="font-raleway text-xl italic" style={{ color: '#383838', fontWeight: '300' }}>
                        plus
                      </p>
                      <p className="font-raleway text-3xl" style={{ color: '#383838', fontWeight: '500' }}>
                        $100 <span className="text-2xl" style={{ fontWeight: '400' }}>per image</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Acuity Scheduling (facade: loads on click only) */}
            <AcuityBookingFacade
              src="https://app.acuityscheduling.com/schedule.php?owner=16156099&appointmentType=7287856"
              title="Schedule Actor Headshot Session"
            />

          </div>

          {/* Appointment Notice */}
          <div className="text-center pt-16 pb-2">
            <p className="font-raleway text-xl font-normal" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
              All sessions by appointment only. Book now to secure your preferred date.
            </p>
            <p className="font-raleway text-xl font-normal mt-4" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
              If you don&apos;t see a date or time that works for you, please <Link href="/contact-us" className="underline hover:no-underline" style={{ color: '#5577a5' }}>contact me</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Four Images Section - Mohamed Images */}
      <section className="relative" style={{ lineHeight: 0 }}>
        <div className="grid grid-cols-4 w-full">
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/actor-headshots/mohmad-1.webp"
              alt="Actor headshot Phoenix AZ - professional studio portrait by CMQ Headshots"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/actor-headshots/mohmad-2.webp"
              alt="Theatrical actor headshot Phoenix AZ - versatile casting portrait"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/actor-headshots/mohmad-3.webp"
              alt="Male actor headshot Phoenix Arizona - dramatic character look"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/actor-headshots/mohmad-4.webp"
              alt="Professional actor headshot Phoenix AZ - commercial and theatrical range"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        </div>
      </section>

      {/* Every Session Includes Section */}
      <section className="py-16" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="font-raleway text-4xl font-medium mb-8" style={{ color: '#5577a5' }}>
              EVERY ACTOR SESSION INCLUDES
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Card 1 - Multiple Looks */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                MULTIPLE CHARACTER LOOKS
              </h3>
              <p className="font-raleway text-black leading-relaxed">
Shoot theatrical, commercial, and character looks in one session. Bring 5-6 outfits and we will cover every casting category you need.
              </p>
            </div>

            {/* Card 2 - Professional Direction */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                PROFESSIONAL DIRECTION
              </h3>
              <p className="font-raleway text-black leading-relaxed">
I coach you through every expression and angle. You will see the images on screen during the shoot so we can adjust as we go.
              </p>
            </div>

            {/* Card 3 - Industry Standards */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                INDUSTRY STANDARDS
              </h3>
              <p className="font-raleway text-black leading-relaxed">
Every image is delivered in high-res for 8x10 prints plus web-sized files ready for Actors Access, LA Casting, and Backstage.
              </p>
            </div>

            {/* Card 4 - Natural Light Options */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                NATURAL LIGHT OPTIONS
              </h3>
              <p className="font-raleway text-black leading-relaxed">
Studio lighting for clean, controlled shots. Natural light available during cooler months for a different feel.
              </p>
            </div>

            {/* Card 5 - Wardrobe Consultation */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                WARDROBE CONSULTATION
              </h3>
              <p className="font-raleway text-black leading-relaxed">
We talk through your wardrobe before the session. I will tell you exactly what to bring based on the roles you are going after.
              </p>
            </div>

            {/* Card 6 - Fast Turnaround */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                FAST TURNAROUND
              </h3>
              <p className="font-raleway text-black leading-relaxed">
                Get your professionally retouched headshots within 7 business days. Need them sooner? Same-day rush retouching is available for $50.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Four Images Section - Sophia Images */}
      <section className="relative" style={{ lineHeight: 0 }}>
        <div className="grid grid-cols-5 w-full">
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/actor-headshots/sophia-1.webp"
              alt="Actress headshot Phoenix AZ - professional studio portrait by CMQ Headshots"
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/actor-headshots/sophia-2.webp"
              alt="Actor headshot Phoenix Arizona - natural expression for casting"
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/actor-headshots/sophia-3.webp"
              alt="Character actor headshot Phoenix AZ - versatile look for auditions"
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/actor-headshots/sophia-4.webp"
              alt="Professional actress headshot Phoenix AZ - theatrical portrait"
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/actor-headshots/sophia-5.webp"
              alt="Actress portfolio headshot Phoenix AZ - professional portrait for casting"
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
        </div>
      </section>

      {/* Types of Actor Headshots Section */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="font-raleway text-3xl md:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-medium">TYPES OF ACTOR HEADSHOTS</span> <span className="font-normal">I PHOTOGRAPH</span>
            </p>

            <div className="space-y-12">

              {/* Commercial Headshots */}
              <div>
                <h2 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  COMMERCIAL HEADSHOTS
                </h2>
                <p className="font-raleway text-xl text-center font-normal" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                  Commercial headshots are bright, warm, and full of personality. These are what you need for TV commercials, print ads, corporate training videos, and lifestyle campaigns. The lighting is even, the background is clean, and your expression is open and friendly. I coach you through a range of smiles and natural expressions so you look like the person brands want to hire. If you are pursuing commercial work in Phoenix, this is the headshot that gets you in the door.
                </p>
              </div>

              {/* Theatrical Headshots */}
              <div>
                <h2 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  THEATRICAL HEADSHOTS
                </h2>
                <p className="font-raleway text-xl text-center font-normal" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                  Theatrical headshots are darker, moodier, and more intense. These show the depth you bring to dramatic roles. Think Shakespeare, Arthur Miller, Tennessee Williams, or modern dramas like August: Osage County. The lighting is sculpted with deeper shadows, and your expression carries real weight. Casting directors for film, TV dramas, and stage need to see that you can hold a scene. I use dramatic lighting to bring out that intensity while keeping the image natural to who you are.
                </p>
              </div>

              {/* Kid/Child Actor Headshots */}
              <div>
                <h2 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  CHILD &amp; TEEN ACTOR HEADSHOTS
                </h2>
                <p className="font-raleway text-xl text-center font-normal" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                  Child and teen actor headshots require a different approach. Kids and teens need to feel comfortable and relaxed, not posed or stiff. I work at their pace and keep the session fun so their real personality comes through. Parents are welcome to stay in the studio. Casting directors want to see the real kid, not a miniature adult. I guide them through gentle direction that brings out natural reactions for commercials, film, or theater work in the Phoenix area.
                </p>
              </div>

              {/* Voice Actor / Voiceover Headshots */}
              <div>
                <h2 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  VOICEOVER &amp; VOICE ACTOR HEADSHOTS
                </h2>
                <p className="font-raleway text-xl text-center font-normal" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                  This is a <a href="https://www.backstage.com/magazine/article/truth-voiceover-headshots-1108/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: '#5577a5' }}>heated debate in the voiceover world</a>: do voice actors even need a headshot? Some argue that showing your face creates bias. Casting directors might make assumptions about your age, type, or vocal range based on how you look instead of how you sound. Others use a cartoon avatar instead of a real photo. Personally, I think that raises more questions than it answers. What are you hiding?
                </p>
                <p className="font-raleway text-xl text-center font-normal mt-4" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                  Here&apos;s the truth: it depends on your career path, and ultimately it&apos;s your decision. But I&apos;m a headshot photographer, so I&apos;m going to tell you that you need at least one professional headshot. Your photo shows up on casting platforms, agency websites, LinkedIn, and your own marketing materials. People want to put a face to the voice, and that builds connection and trust. A strong voiceover headshot conveys warmth, energy, and the personality behind the voice. Animation, audiobooks, commercials, narration, it does not matter. I will capture a look that makes a producer want to hear what you sound like.
                </p>
              </div>

              {/* Modeling / Commercial Print */}
              <div>
                <h2 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  MODELING &amp; COMMERCIAL PRINT HEADSHOTS
                </h2>
                <p className="font-raleway text-xl text-center font-normal" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                  If you are pursuing modeling and commercial print headshots alongside acting, you need images that show your range. We will shoot editorial looks, fashion-forward setups, and clean commercial shots that agencies and brands want to see. With wardrobe changes, different expressions, and multiple lighting setups, we cover it all in one session. Many Phoenix actors work across both acting and modeling. Headshots that serve both markets mean more auditions and more bookings.
                </p>
              </div>

              {/* Stand-Up / Comedy Headshots */}
              <div>
                <h2 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  COMEDY &amp; STAND-UP PERFORMER HEADSHOTS
                </h2>
                <p className="font-raleway text-xl text-center font-normal" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                  Comedy performers need a headshot that shows personality and humor without being goofy. The best comedy headshots capture a knowing look, a subtle smirk, or an expression that says &quot;I&apos;m about to make you laugh.&quot; Stand-up, improv, comedic film and TV roles, they all need different energy. I will help you find that spot between professional and personable that makes casting directors and bookers take notice.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Four Images Section - Nina Images */}
      <section className="relative" style={{ lineHeight: 0 }}>
        <div className="grid grid-cols-4 w-full">
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/website%20media/optimized/NinaE8039b-2-optimized.webp"
              alt="Theatrical actor headshot Phoenix AZ - dramatic studio lighting"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/website%20media/optimized/NinaE8168b-2-optimized.webp"
              alt="Commercial actor headshot Phoenix Arizona - approachable expression"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/website%20media/optimized/NinaE8136b-optimized.webp"
              alt="Character-driven actor headshot Phoenix AZ - confident expression"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/website%20media/optimized/NinaE8250-white-optimized.webp"
              alt="Professional actress headshot Phoenix AZ - white background portrait"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl md:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-medium">WHAT TO EXPECT</span> <span className="font-normal">AT YOUR ACTOR HEADSHOT SESSION</span>
            </h2>

            <div className="space-y-6">
              <p className="font-raleway text-xl text-center font-normal" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                Your actor headshot session starts before you walk into the studio. After you book, we schedule a phone consultation where I learn about your acting career, the roles you are going after, and what you need your headshots to do. We plan your wardrobe, talk about hair and grooming, and map out the looks we will shoot.
              </p>

              <p className="font-raleway text-xl text-center font-normal" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                I dedicate every Saturday to actors and models. You get up to 4 hours of studio time, which gives us room to really get creative. We can try different lighting setups, experiment with expressions, and work through all your wardrobe changes without watching the clock. Arrive a few minutes early so you can settle in. My Phoenix studio is a relaxed space where you can change outfits and touch up your hair or <Link href="/blog/what-kind-of-makeup-should-i-wear-to-my-headshot-session" className="underline hover:no-underline" style={{ color: '#5577a5' }}>makeup</Link> between looks.
              </p>

              <p className="font-raleway text-xl text-center font-normal" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                During the session, I direct you through expressions and subtle adjustments. A slight tilt of the head, a shift in where your eyes focus, the difference between a warm commercial smile and a grounded theatrical look. We review images together on the monitor throughout the shoot so you can see what is working. Most actors are surprised by how much variety we capture in a single session.
              </p>

              <p className="font-raleway text-xl text-center font-normal" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                After the session, I prepare a private online gallery where you can view all of your images. You choose the ones you want to purchase. No minimum, no pressure. Your selected images are <Link href="/blog/should-the-photographer-photoshop-you" className="underline hover:no-underline" style={{ color: '#5577a5' }}>professionally retouched</Link> and delivered within 7 business days, ready to upload to Actors Access, LA Casting, Backstage, and any other platforms you use. Need them faster? Same-day retouching is available for $50.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Images Section - Ethan Images */}
      <section className="relative" style={{ backgroundColor: '#5577a5', lineHeight: 0 }}>
        <div className="grid grid-cols-4 w-full">
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots-EthanD-Actor-Phoenix1-optimized.webp"
              alt="Male actor headshot Phoenix AZ - cinematic theatrical portrait by CMQ Headshots"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots-EthanD-Actor-Phoenix2-optimized.webp"
              alt="Actor commercial headshot Phoenix Arizona - friendly natural expression"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots-EthanD-Actor-Phoenix3-optimized.webp"
              alt="Phoenix actor headshot - dramatic character look with studio lighting"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots-EthanD-Actor-Phoenix4-optimized.webp"
              alt="Professional acting headshot Phoenix AZ - versatile look for casting submissions"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        </div>
      </section>

      {/* What Makes Actor Headshots Different Section */}
      <section className="py-16" style={{
        backgroundColor: '#F1F1F1'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl md:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-medium">ACTOR</span> <span className="font-normal">PROFESSIONAL HEADSHOTS</span>
            </h2>

            <div className="space-y-8">
              <div className="text-center">
                <p className="font-raleway text-xl text-center font-normal" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                  Actor professional headshots are different from corporate headshots. Casting directors need to see you, not just a polished photo. They need to see emotion, range, and the thing that makes them stop scrolling. A corporate headshot says &quot;I am professional.&quot; An actor headshot says &quot;I can become someone else.&quot; That is a completely different skill to photograph.
                </p>
              </div>

              <div className="text-center">
                <p className="font-raleway text-xl text-center font-normal" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                  I have been shooting actor professional headshots in Phoenix for over 14 years with 130+ five-star Google reviews. I know what casting directors and talent agents look for because I stay current with the industry. Before your session, we talk through the roles you are going after so I can direct you toward expressions and angles that match. No guesswork.
                </p>
              </div>

              <div className="text-center">
                <p className="font-raleway text-xl text-center font-normal" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                  You only buy the images you love. No minimum purchase and no pressure. Every image comes in high-res for 8x10 prints plus web-sized files for Actors Access, LA Casting, Backstage, and other platforms Phoenix actors use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Images Section - Kyldie Images */}
      <section className="relative" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        lineHeight: 0
      }}>
        <div className="grid grid-cols-4 w-full">
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/actor-headshots/kyldie-1.webp"
              alt="Actress theatrical headshot Phoenix AZ - expressive portrait for theater auditions"
              fill
              className="object-cover object-top"
              sizes="25vw"
            />
          </div>
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/actor-headshots/kyldie-2.webp"
              alt="Commercial actress headshot Phoenix Arizona - warm approachable casting photo"
              fill
              className="object-cover object-top"
              sizes="25vw"
            />
          </div>
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/actor-headshots/kyldie-3.webp"
              alt="Actor headshot with character range Phoenix AZ - multiple looks in one session"
              fill
              className="object-cover object-top"
              sizes="25vw"
            />
          </div>
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="https://images.cmqheadshots.com/images/actor-headshots/kyldie-4.webp"
              alt="Professional performer headshot Phoenix AZ - polished portrait for acting portfolio"
              fill
              className="object-cover object-top"
              sizes="25vw"
            />
          </div>
        </div>
      </section>

      {/* Why Phoenix Actors Choose CMQ Section */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl md:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-medium">ACTOR HEADSHOTS</span> <span className="font-normal">NEAR ME</span>
            </h2>

            <div className="space-y-6">
              <p className="font-raleway text-xl text-center font-normal" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                If you are searching for actors headshots near me in the Phoenix area, my studio is in North Phoenix with easy access from Scottsdale, Tempe, Paradise Valley, and the East Valley. Free parking, a private space to change outfits, and a relaxed studio where you can take your time.
              </p>

              <p className="font-raleway text-xl text-center font-normal" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                Every Saturday is reserved for actors and models. You get up to 4 hours of studio time so we can really dig into your characters and get creative. With <Link href="/about" className="underline hover:no-underline" style={{ color: '#5577a5' }}>14+ years of experience</Link> and 130+ five-star Google reviews, I know what casting directors want to see. My pricing is straightforward: $250 session fee, then $100 per image you choose. No minimum purchase, no packages, no pressure.
              </p>

              <p className="font-raleway text-xl text-center font-normal" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                Ready to get started? <Link href="/contact-us" className="underline hover:no-underline" style={{ color: '#5577a5' }}>Contact me</Link> to schedule your consultation call, or book your session directly above.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <ThreeReviewSection
        title="WHAT ACTORS SAY"
        reviews={[
          {
            image: "https://images.cmqheadshots.com/images/actor-headshots/kyldie-2.webp",
            imageAlt: "Actor headshot client Klydie Miller",
            name: "KLYDIE MILLER",
            review: "This was my first time taking acting headshots, and within 10 minutes of the session, I was already feeling comfortable and having fun. I was able to get the quality and type of headshots I wanted. It was an amazing experience, I recommend CMQ Headshots to anyone needing headshots!",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-mohmad12094-vert-c-fullres-scaled.webp",
            imageAlt: "Headshot client Michelle Kass",
            name: "MICHELLE KASS",
            review: "I brought my 17 year old son to Cindy to get some headshots for his college auditions. We were very happy with the outcome. It was the first time we had professional headshots taken and he was nervous. Cindy was very patient with him and we got several great shots. Definitely Recommend!",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/Phoenix-Actor-Headshots-CMQ-HEADSHOTS.webp",
            imageAlt: "Headshot client Nikki Demicelli",
            name: "NIKKI DEMICELLI",
            review: "The website says she takes pride in her ability to make people feel comfortable. Well, SHE SHOULD!! I wasn't just nervous, I was uncomfortable and feeling like a hot mess. Cindy was able to make me laugh, relax, feel confident and beautiful. She got great shots that were so hard to choose from. She's definitely the artist, and turned me into art!!",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        textColor="white"
      />

      {/* FAQ Section - Actor Specific with Accordion */}
      <AccordionFAQSection
        title="HOW MUCH ARE PROFESSIONAL HEADSHOTS"
        subtitle="Get answers to the most common questions about actor headshot sessions"
        faqs={actorFAQs}
        backgroundColor="white"
        textColor="#5577a5"
      />


      </Layout>
    </>
  )
}