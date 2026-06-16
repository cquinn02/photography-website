import Layout from '@/components/Layout'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import GetPricingButton from '@/components/GetPricingButton'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
const AccordionFAQSection = dynamic(() => import('@/components/sections/AccordionFAQSection'), { ssr: true })
const ThreeReviewSection = dynamic(() => import('@/components/sections/ThreeReviewSection'), { ssr: true })
const AcuityBookingFacade = dynamic(() => import('@/components/AcuityBookingFacade'), { ssr: true })

export default function RealtorHeadshots() {
  const realtorFAQs = [
    {
      id: 1,
      question: "What should I wear to my real estate headshot session?",
      answer: "Dress the way you would for a client meeting. Polished and professional, but still approachable. Solid colors work best on camera. Navy, charcoal, black, and jewel tones photograph well. Avoid busy patterns, logos, and loud prints that can distract from your face."
    },
    {
      id: 2,
      question: "How long does a realtor headshot session take?",
      answer: "Sessions are not rushed. I take the time needed to get you comfortable and capture headshots you're proud of. Most realtor sessions run 45 minutes to an hour, which gives us time to try different expressions, outfits, and backgrounds."
    },
    {
      id: 3,
      question: "Can I use my headshot on the MLS and Zillow?",
      answer: "Absolutely. Every image you purchase comes in multiple sizes optimized for MLS, Zillow, Realtor.com, your brokerage website, social media profiles, email signatures, business cards, and print materials. You get the full resolution file plus web-optimized versions."
    },
    {
      id: 4,
      question: "How often should I update my realtor headshot?",
      answer: "Every 2-3 years at minimum, or sooner if your appearance has changed significantly. Your headshot needs to look like you, not who you were five years ago. Clients who meet you in person should recognize you immediately from your photo. An outdated headshot undermines trust before you even shake hands."
    },
    {
      id: 5,
      question: "Do you offer team photos for brokerages?",
      answer: "Yes! I photograph entire brokerage teams and offices. For team headshots, I can come to your office or photograph everyone at my Scottsdale studio. Check out my Corporate/Staff Headshots page for group session details, or contact me directly for a custom quote."
    },
    {
      id: 6,
      question: "What background options are available?",
      answer: "I offer solid color backdrops (white, gray, dark gray, navy, and more) as well as textured and environmental options. Most realtors go with a clean, neutral background that works across all platforms. I will help you choose the best option during the session."
    },
    {
      id: 7,
      question: "When will I get my final images back?",
      answer: "Your final images will be done within 7 business days from the time you select your favorites.\n\nSame day retouching is available at an additional fee of $50.00 if you need images urgently for a listing or marketing deadline."
    },
    {
      id: 8,
      question: "Will you retouch my headshot?",
      answer: "Every image is professionally retouched by hand. No filters, no plug-ins. I clean up temporary blemishes, even out skin tone, and make subtle adjustments so you look like the best version of yourself. Natural, not airbrushed."
    }
  ]

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

  return (
    <>
      <Layout
        title="Realtor Headshots Phoenix, AZ | CMQ Headshots"
        description="Professional real estate agent headshots in Phoenix, AZ. Stand out on MLS, Zillow, and your brokerage website. Book your session today."
        canonical="https://www.cmqheadshots.com/realtor-headshots-phoenix"
        ogUrl="https://www.cmqheadshots.com/realtor-headshots-phoenix"
        ogImage="https://images.cmqheadshots.com/images/realtor-headshot-phoenix-1.webp"
        showHeaderContact={false}
      >
      {/* Service Schema + BreadcrumbList for Realtor Headshots */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Realtor Headshots Phoenix & Scottsdale AZ",
            "image": "https://images.cmqheadshots.com/images/realtor-headshot-phoenix-1.webp",
            "description": "Professional realtor headshots and real estate agent headshot photography in Phoenix and Scottsdale, Arizona. Headshots that help agents and brokers stand out on MLS listings, Zillow, brokerage websites, and marketing materials.",
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
            "areaServed": [
              {
                "@type": "City",
                "name": "Phoenix",
                "sameAs": "https://en.wikipedia.org/wiki/Phoenix,_Arizona"
              },
              {
                "@type": "City",
                "name": "Scottsdale",
                "sameAs": "https://en.wikipedia.org/wiki/Scottsdale,_Arizona"
              }
            ],
            "serviceType": "Real Estate Agent Headshot Photography",
            "offers": {
              "@type": "Offer",
              "price": "250",
              "priceCurrency": "USD",
              "description": "Realtor headshot session: $250 session fee plus $100 per edited image. Background replacement available.",
              "url": "https://www.cmqheadshots.com/realtor-headshots-phoenix"
            },
            "url": "https://www.cmqheadshots.com/realtor-headshots-phoenix"
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
                "name": "Realtor Headshots Phoenix",
                "item": "https://www.cmqheadshots.com/realtor-headshots-phoenix"
              }
            ]
          }) }}
        />
      </Head>

      {/* Hero Section with Placeholder Images */}
      <section className="relative" style={{ backgroundColor: '#5577a5' }}>
        {/* Four Headshots Row - TODO: Replace with real realtor headshot images */}
        <div className="relative">
          <div className="grid grid-cols-4 w-full gap-1 bg-white">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.cmqheadshots.com/images/realtor-headshot-phoenix-1.webp"
                alt="Realtor headshot Phoenix - outdoor professional photo"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.cmqheadshots.com/images/realtor-headshot-phoenix-2.webp"
                alt="Realtor headshot Phoenix - professional business portrait"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.cmqheadshots.com/images/realtor-headshot-phoenix-3.webp"
                alt="Realtor headshot Scottsdale - confident agent portrait"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.cmqheadshots.com/images/realtor-headshot-phoenix-4.webp"
                alt="Realtor headshot Phoenix AZ - approachable agent portrait"
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
            <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl leading-tight" style={{ color: 'white' }}>
              <span className="font-medium" style={{ color: 'white', fontWeight: '500' }}>REALTOR HEADSHOTS</span> <span className="font-light" style={{ color: 'white', fontWeight: '300' }}>PHOENIX, AZ</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-raleway text-xl font-normal mb-8" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#000000'
            }}>
              Looking for realtor headshots in Phoenix, AZ? I photograph real estate agents and brokers across Phoenix, Scottsdale, Chandler, Mesa, Gilbert, Tempe, and Paradise Valley. Solo agents and brokerage teams. Every image works for the MLS, Zillow, yard signs, and LinkedIn.
            </p>

            <GetPricingButton href="#pricing" size="large" shimmer={true}>
              BOOK YOUR SESSION
            </GetPricingButton>
          </div>
        </div>
      </section>

      {/* Billboard Image - Full Width */}
      <section className="relative w-full" style={{ lineHeight: 0 }}>
        <Image
          src="https://images.cmqheadshots.com/images/Nikki-billboard_7058.webp"
          alt="CMQ Headshots client Nikki on a billboard - realtor headshot used in outdoor advertising"
          width={1920}
          height={1080}
          className="w-full h-auto"
          sizes="100vw"
        />
      </section>

      {/* Nikki - Real Estate Agent Headshots */}
      <TwoColumnSection
        title={<><span className="font-bold">REAL ESTATE</span> <span className="font-normal">AGENT HEADSHOTS</span></>}
        description="Nikki came to me for real estate agent headshots because she had worked with me in the past and knew I would deliver quality images. She needed updated marketing materials and an eye-catching image for a billboard. From her session, we created a number of images including full-length portraits, and she used one of them for her billboard in Wickenburg. I have worked with countless realtors across Phoenix and the East Valley who needed professional real estate agent headshots to update their marketing, and I can help you too."
        imageUrl="https://images.cmqheadshots.com/images/optimized/CMQHEADSHOTS-Nikkie-Miller-006-optimized.webp"
        imageAlt="Real estate agent headshots Phoenix - polished business portrait"
        imageWidth={512}
        imageHeight={640}
        backgroundColor="#999ea2"
        textColor="white"
        titleColor="blue"
        ctaText="BOOK YOUR SESSION"
        ctaLink="#pricing"
        reverseColumns={true}
      />

      {/* Pricing and Calendar Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <p className="font-raleway text-3xl lg:text-4xl" style={{ color: '#5577a5' }}>
              <span className="font-medium">REALTOR HEADSHOT</span> <span className="font-normal">PRICING</span>
            </p>
            <p className="font-raleway text-lg mt-4 max-w-3xl mx-auto" style={{ color: '#000000', fontWeight: '400', lineHeight: '1.6' }}>
              Simple, straightforward realtor headshot pricing. $250 session fee plus $100 per image you choose.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">

            {/* Left Side - Pricing Information */}
            <div className="w-full">
              <div className="bg-white border-2 border-gray-300 rounded-lg p-8 h-[800px] flex items-center justify-center shadow-lg w-full">
                <div ref={pricingRef} className="text-center max-w-md">
                  <div className="font-raleway mb-10" style={{ color: '#383838', lineHeight: '1.1' }}>
                    <div className="text-5xl md:text-7xl mb-1">
                      <span className="inline-block" style={{
                        fontWeight: '700',
                        color: '#5577a5',
                        opacity: pricingVisible ? 1 : 0,
                        animation: pricingVisible ? 'bounce-in 0.6s ease-out forwards' : 'none',
                      }}>REALTOR</span>
                    </div>
                    <div className="text-5xl md:text-7xl mb-6">
                      <span className="inline-block" style={{
                        fontWeight: '300',
                        opacity: pricingVisible ? 1 : 0,
                        animation: pricingVisible ? 'bounce-in 0.6s ease-out 0.2s forwards' : 'none',
                      }}>HEADSHOTS</span>
                    </div>
                    <div className="text-2xl md:text-3xl" style={{ color: '#5577a5', fontWeight: '500', lineHeight: '1.3' }}>
                      Professional, Polished<br />Headshots for Real Estate Agents
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

                  <p className="font-raleway text-base italic" style={{ color: '#575757', fontWeight: '400' }}>
                    Need it faster? Same-day rush retouching available for $50.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Acuity Scheduling (facade: loads on click only) */}
            <AcuityBookingFacade
              src="https://app.acuityscheduling.com/schedule.php?owner=16156099&appointmentType=94554820"
              title="Schedule Realtor Headshot Session"
            />

          </div>

          {/* Appointment Notice */}
          <div className="text-center pt-16 pb-2">
            <p className="font-raleway text-black" style={{ fontSize: '20px' }}>
              All sessions by appointment only. Book now to secure your preferred date.
            </p>
            <p className="font-raleway text-black mt-4" style={{ fontSize: '20px' }}>
              If you don&apos;t see a date or time that works for you, please <Link href="/contact-us" className="underline hover:no-underline" style={{ color: '#5577a5' }}>contact me</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Every Session Includes Section */}
      <section className="py-16" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-raleway text-4xl font-medium mb-8" style={{ color: '#5577a5' }}>
              EVERY REALTOR SESSION INCLUDES
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Card 1 - Unlimited Shooting Time */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                UNLIMITED SHOOTING TIME
              </p>
              <p className="font-raleway text-black leading-relaxed">
                Your session is never rushed. I take the time to get you comfortable and confident so we capture headshots you&apos;re genuinely proud to put on a yard sign.
              </p>
            </div>

            {/* Card 2 - Unlimited Outfits */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                UNLIMITED OUTFITS
              </p>
              <p className="font-raleway text-black leading-relaxed">
                Bring as many outfits as you want. Many realtors shoot one professional look for the MLS and a more casual look for social media.
              </p>
            </div>

            {/* Card 3 - Multiple Backgrounds */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                MULTIPLE BACKGROUNDS
              </p>
              <p className="font-raleway text-black leading-relaxed">
                Choose from solid color backdrops, textured options, or environmental settings. I&apos;ll help you pick the background that fits your brand.
              </p>
            </div>

            {/* Card 4 - Professional Retouching */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                PROFESSIONAL RETOUCHING
              </p>
              <p className="font-raleway text-black leading-relaxed">
                Every image is hand-retouched for a natural, polished look. No filters, no plug-ins. Just you looking like the best version of yourself.
              </p>
            </div>

            {/* Card 5 - Multiple File Sizes */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                MULTIPLE FILE SIZES
              </p>
              <p className="font-raleway text-black leading-relaxed">
                Each purchased image comes in sizes optimized for MLS, Zillow, social media profiles, email signatures, business cards, and print.
              </p>
            </div>

            {/* Card 6 - Expert Direction */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                EXPERT DIRECTION
              </p>
              <p className="font-raleway text-black leading-relaxed">
                I coach you through every pose and expression. You do not need to know what to do in front of the camera. That is my job.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* What to Expect at Your Session */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#5577a5' }}>
              <span className="font-medium">WHAT TO EXPECT</span> <span className="font-normal">AT YOUR SESSION</span>
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#000000'
            }}>
              I shoot tethered to my laptop, so you see each image in real time. If a collar is out of place or a smile looks forced, we fix it on the spot. I direct your poses and expressions so you don&apos;t have to think about what to do with your hands.
            </p>

            <p className="font-raleway text-xl font-normal" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#000000'
            }}>
              You pick your favorites after the session and I retouch each one by hand. No filters, no plug-ins.
            </p>
          </div>
        </div>
      </section>

      {/* Real Estate Agent Photos */}
      <TwoColumnSection
        title={<><span className="font-medium">REAL ESTATE</span> <span className="font-normal">AGENT PHOTOS</span></>}
        description="An outdated headshot quietly costs you listings. A dated photo signals you might be slowing down, and prospects read that fast. Update it, and your whole brand reads current again."
        imageUrl="https://images.cmqheadshots.com/images/elizabeth-barr-13590.webp"
        imageAlt="Real estate agent photos Phoenix: Elizabeth Barr, Phoenix real estate agent headshot"
        imageWidth={1000}
        imageHeight={1000}
        backgroundColor="#5c5c5c"
        textColor="white"
        titleColor="white"
        mobileStackOrder="image-first"
        objectFit="contain"
        objectPosition="center bottom"
        minHeight="650"
      />

      {/* Four Images Section - Placeholder Row on Gray Linen */}
      <section className="relative" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="relative">
          <div className="grid grid-cols-4 w-full">
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src="https://images.cmqheadshots.com/images/CMQHEADSHOTS-Manny-Paloma-1.webp"
                alt="Headshots for real estate agents Phoenix - indoor environmental background"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src="https://images.cmqheadshots.com/images/CMQHEADSHOTS-Manny-Paloma-2.webp"
                alt="Headshots for real estate agents Scottsdale - studio background replacement"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src="https://images.cmqheadshots.com/images/CMQHEADSHOTS-Manny-Paloma-3.webp"
                alt="Headshots for real estate agents Scottsdale - digital background swap"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src="https://images.cmqheadshots.com/images/CMQHEADSHOTS-Manny-Paloma-4.webp"
                alt="Headshots for real estate agents Phoenix AZ - multiple background options"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Background Replacement Text */}
      <section className="py-16" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#ffffff' }}>
              <span className="font-medium">HEADSHOTS FOR</span> <span className="font-normal">REAL ESTATE AGENTS</span>
            </h2>
            <p className="font-raleway text-xl font-normal mb-8" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#ffffff'
            }}>
              Notice the different backgrounds in Manny&apos;s headshots for real estate agents above? I can digitally replace your background in post-production, giving you multiple distinct looks from a single session. A warm environmental backdrop for social media, a clean studio look for your brokerage website. You walk away with a variety of images without the hassle of multiple setups.
            </p>
          </div>
        </div>
      </section>

      {/* Realtor Headshots Near Me */}
      <TwoColumnSection
        title={<><span className="font-medium">REALTOR HEADSHOTS</span> <span className="font-normal">NEAR ME</span></>}
        description="If you are searching for realtor headshots near me in the Phoenix area, my studio is in North Phoenix with easy access from the 101 and I-17. I also come to your office for on-location sessions. I photograph real estate agents from brokerages across the Valley including Coldwell Banker, Russ Lyon Sotheby's, Realty ONE Group, HomeSmart, and eXp Realty. I photographed all of Coldwell Banker's new realtors for three years. With 135+ five-star Google reviews and over 14 years of experience, I am the headshot photographer Phoenix realtors trust."
        ctaText="BOOK YOUR SESSION"
        ctaLink="#pricing"
        ctaSize="large"
        imageUrl="https://images.cmqheadshots.com/images/holly-jeppesen-11612.webp"
        imageAlt="Realtor headshots near me - Holly Jeppesen, Phoenix real estate agent portrait by CMQ Headshots"
        imageWidth={899}
        imageHeight={899}
        backgroundColor="#F1F1F1"
        reverseColumns={true}
        mobileStackOrder="image-first"
        objectFit="cover"
        columnRatio="2-3"
        minHeight="650"
      />

      {/* Testimonials Section */}
      <ThreeReviewSection
        title="WHAT CLIENTS SAY"
        reviews={[
          {
            image: "https://images.cmqheadshots.com/images/jennifer-marcellette-11803-400.webp",
            imageAlt: "Realtor headshot client Jennifer Marcellette",
            name: "JENNIFER MARCELLETTE",
            review: "Cindy set up a phone consultation before my session with tips on wardrobe, skincare, and makeup. She took the time to find the right angles and expressions. Very comfortable experience. I would absolutely use her again.",
            stars: 5,
            imageStyle: { transform: 'scale(1.15) translateX(8%)' }
          },
          {
            image: "https://images.cmqheadshots.com/images/holly-jeppesen-11612-400.webp",
            imageAlt: "Realtor headshot client Holly Jeppesen",
            name: "HOLLY JEPPESEN",
            review: "Cindy was amazing to work with! She ensured I felt comfortable with the process, and I was happy every step of the way. I HIGHLY recommend Cindy Quinn!!",
            stars: 5,
            imageStyle: { transform: 'scale(1.15) translateX(5%)' }
          },
          {
            image: "https://images.cmqheadshots.com/images/katherine-aragon-9928-400.webp",
            imageAlt: "Realtor headshot client Katherine Aragon",
            name: "KATHERINE ARAGON",
            review: "Cindy was extremely professional and accommodating and made me feel comfortable throughout the whole process. We had a really enjoyable time working on these photos together - she is great to work with!",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        textColor="white"
      />

      {/* FAQ Section */}
      <AccordionFAQSection
        title="FREQUENTLY ASKED QUESTIONS ABOUT REALTOR HEADSHOTS"
        subtitle="Get answers to the most common questions about realtor headshot sessions"
        faqs={realtorFAQs}
        backgroundColor="white"
        textColor="#5577a5"
      />

      </Layout>
    </>
  )
}