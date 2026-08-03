import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import GetPricingButton from '@/components/GetPricingButton'
import ImageRightTextLeftSection from '@/components/sections/ImageRightTextLeftSection'

const ThreeReviewSection = dynamic(() => import('@/components/sections/ThreeReviewSection'), { ssr: true })
const AccordionFAQSection = dynamic(() => import('@/components/sections/AccordionFAQSection'), { ssr: true })
const AcuityBookingFacade = dynamic(() => import('@/components/AcuityBookingFacade'), { ssr: true })

export default function ModelingHeadshotsPhoenix() {
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

  const modelingFAQs = [
    {
      id: 1,
      question: "What should I bring to my modeling portfolio session?",
      answer: "Bring 5-6 outfits that show your range. Casual to dressy, solid colors to simple patterns. I will help you choose what works best for your body type, skin tone, and the agencies you are targeting."
    },
    {
      id: 2,
      question: "How many images will I get from my session?",
      answer: "You only buy the images you want. There is no minimum purchase. Every image you buy is professionally retouched and delivered in sizes for print and web. We discuss your goals before the session so you know exactly what to expect."
    },
    {
      id: 3,
      question: "Do I need professional hair and makeup?",
      answer: "You can arrive camera-ready or do your hair and makeup at the studio. Keep it natural. Agencies want to see the real you, not heavy makeup. I will guide you on what works best for your look."
    },
    {
      id: 4,
      question: "What types of modeling do you photograph?",
      answer: "I work with commercial, fashion, fitness, lifestyle, and print models. Clean headshots for agency submissions, creative portfolio images, comp cards, and digitals. We cover it all in one session."
    },
    {
      id: 5,
      question: "How often should I update my modeling portfolio?",
      answer: "Every 6-12 months, or anytime your look changes significantly. New haircut, weight change, or a shift in the types of work you are going after. Agencies want current images."
    },
    {
      id: 6,
      question: "Can you help me build a portfolio from scratch?",
      answer: "Yes. I have helped many aspiring models build their first portfolios. I guide you through posing, expressions, and outfit selection so you walk out with images agencies want to see."
    }
  ]

  return (
    <Layout
      title="Modeling Portfolio Photography Phoenix | CMQ Headshots"
      description="Professional modeling headshots and portfolio photography in Phoenix, Arizona. Comp cards, agency submissions, and portfolio images for commercial, fashion, and fitness models."
      canonical="https://www.cmqheadshots.com/modeling-headshots-phoenix"
      ogUrl="https://www.cmqheadshots.com/modeling-headshots-phoenix"
      noindex={true}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Modeling Portfolio Photography Phoenix",
            "description": "Professional modeling headshots and portfolio photography in Phoenix, Arizona. Comp cards, agency submissions, and creative portfolio images.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "CMQ Headshots",
              "url": "https://www.cmqheadshots.com",
              "telephone": "+1-480-440-1782",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Phoenix"
            },
            "serviceType": "Modeling Portfolio Photography"
          }) }}
        />
      </Head>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#5577a5' }}>
        {/* Image */}
        <div className="pt-4 lg:pt-6 px-4">
          <div className="max-w-3xl mx-auto">
            <Image
              src="https://images.cmqheadshots.com/images/website%20media/CMQHeadshots-Modelling%20Photography-ashley.webp"
              alt="Professional modeling portfolio photography in Phoenix"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
          </div>
        </div>

        {/* Title below image */}
        <div className="py-6 lg:py-8 px-4 text-center">
          <h1 className="font-raleway text-3xl md:text-5xl lg:text-6xl leading-tight mb-6" style={{
            color: '#ffffff'
          }}>
            <span className="font-medium" style={{ fontWeight: '500' }}>MODELING PORTFOLIO</span> <span className="hidden lg:inline font-light" style={{ fontWeight: '300' }}>PHOTOGRAPHY</span><br className="lg:hidden" /><span className="lg:hidden font-light" style={{ fontWeight: '300' }}>PHOTOGRAPHY</span>
          </h1>
          <p className="font-raleway text-lg lg:text-xl max-w-2xl mx-auto mb-8" style={{
            color: '#ffffff',
            fontWeight: '400',
            lineHeight: '1.6'
          }}>
            Modeling portfolio photography in Phoenix, AZ. Up to 4 hours of studio time every Saturday. Comp cards, digitals, and agency submissions all in one session.
          </p>
          <a
            href="#pricing"
            className="font-raleway inline-block text-[#5577a5] px-8 py-4 text-lg font-normal transition-colors rounded-lg uppercase"
            style={{ backgroundColor: '#ffffff' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#575757'; e.currentTarget.style.color = '#ffffff' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#5577a5' }}
          >
            GET PRICING
          </a>
        </div>
      </section>

      {/* Pricing and Calendar Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">

            {/* Left Side - Pricing Information */}
            <div className="w-full">
              <div className="bg-white border-2 border-gray-300 rounded-lg p-8 h-[800px] flex items-center justify-center shadow-lg w-full">
                <div ref={pricingRef} className="text-center max-w-md">
                  <div className="font-raleway mb-10" style={{ color: '#383838', lineHeight: '1.1' }}>
                    <div className="text-4xl sm:text-5xl md:text-7xl mb-1">
                      <span className="inline-block" style={{
                        fontWeight: '700',
                        color: '#5577a5',
                        opacity: pricingVisible ? 1 : 0,
                        animation: pricingVisible ? 'bounce-in 0.6s ease-out forwards' : 'none',
                      }}>MODELING</span>
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-7xl mb-6">
                      <span className="inline-block" style={{
                        fontWeight: '300',
                        opacity: pricingVisible ? 1 : 0,
                        animation: pricingVisible ? 'bounce-in 0.6s ease-out 0.2s forwards' : 'none',
                      }}>HEADSHOTS</span>
                    </div>
                    <div className="text-2xl md:text-3xl" style={{ color: '#5577a5', fontWeight: '500', lineHeight: '1.3' }}>
                      Professional Portfolio<br />Photography for Models
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
              title="Schedule Modeling Headshot Session"
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

      {/* Intro Section */}
      <section className="py-12 lg:py-16" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-6" style={{ color: '#5577a5' }}>
              <span className="font-medium">PHOENIX</span>{' '}
              <span className="font-normal">MODELING HEADSHOTS</span>
            </h2>
            <p className="font-raleway text-xl font-normal" style={{
              color: '#ffffff',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7'
            }}>
              Your agent will advise you to hire a professional photographer for your Phoenix modeling headshots. I can help answer any questions about what your agent is looking for. Building your first portfolio or updating your comp card, I shoot commercial, fashion, fitness, and lifestyle looks all in one session.
            </p>
          </div>
        </div>
      </section>

      {/* Model Portfolio Image + Text */}
      <ImageRightTextLeftSection
        title={
          <>
            <span className="font-medium">MODELING HEADSHOTS</span>{' '}
            <span className="font-normal">PHOENIX, AZ</span>
          </>
        }
        description="I dedicate every Saturday to actors and models. You get up to 4 hours of studio time so we can try different lighting, experiment with poses, and work through all your wardrobe changes. 14+ years of experience and 139+ five-star Google reviews. You only buy the images you love."
        ctaText="GET PRICING"
        ctaLink="#pricing"
        imageUrl="https://images.cmqheadshots.com/images/Caroline%20West%20Portraits10220.jpg"
        imageAlt="Modeling headshots Phoenix AZ - professional model portfolio session"
        backgroundColor="#ffffff"
        objectFit="contain"
        objectPosition="center"
        mobileStackOrder="image-first"
      />

      {/* Every Session Includes Section */}
      <section className="py-16" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="font-raleway text-4xl font-medium mb-8" style={{ color: '#5577a5' }}>
              EVERY MODELING SESSION INCLUDES
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                PRE-SESSION CONSULTATION
              </h3>
              <p className="font-raleway text-black leading-relaxed">
                We plan your looks, wardrobe, and shot list before you walk into the studio. No guesswork on session day.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                STUDIO &amp; NATURAL LIGHT
              </h3>
              <p className="font-raleway text-black leading-relaxed">
                Professional studio lighting plus natural light options during cooler months. Two different looks in one session.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                POSING &amp; EXPRESSION COACHING
              </h3>
              <p className="font-raleway text-black leading-relaxed">
                I direct you through every pose and expression. You see the images on screen as we shoot so we can adjust in real time.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                UNLIMITED OUTFIT CHANGES
              </h3>
              <p className="font-raleway text-black leading-relaxed">
                Bring as many outfits as you want. Commercial, fashion, fitness, casual. We will cover every look your agency needs.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                YOU PICK YOUR IMAGES
              </h3>
              <p className="font-raleway text-black leading-relaxed">
                After the session, you review a private online gallery and choose the images you want. No minimum purchase. No pressure.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                AGENCY-READY FILES
              </h3>
              <p className="font-raleway text-black leading-relaxed">
                Every purchased image is hand-retouched and delivered in sizes formatted for comp cards, agency submissions, and online casting profiles.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Types of Modeling */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#5577a5' }}>
              <span className="font-medium">TYPES OF MODELING</span>{' '}
              <span className="font-normal">PHOTOGRAPHY</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-raleway text-xl font-medium mb-3" style={{ color: '#5577a5' }}>Commercial Modeling</h3>
                <p className="font-raleway text-lg font-normal" style={{ color: '#000000', fontWeight: '400', lineHeight: '1.6' }}>
                  Clean, approachable images for advertising, catalog, and print work. These images sell products and services. They need to be relatable and professional.
                </p>
              </div>
              <div>
                <h3 className="font-raleway text-xl font-medium mb-3" style={{ color: '#5577a5' }}>Fashion Modeling</h3>
                <p className="font-raleway text-lg font-normal" style={{ color: '#000000', fontWeight: '400', lineHeight: '1.6' }}>
                  Editorial and high-fashion looks for runway, lookbooks, and agency portfolios. Bold lighting and creative direction to show your range.
                </p>
              </div>
              <div>
                <h3 className="font-raleway text-xl font-medium mb-3" style={{ color: '#5577a5' }}>Fitness Modeling</h3>
                <p className="font-raleway text-lg font-normal" style={{ color: '#000000', fontWeight: '400', lineHeight: '1.6' }}>
                  Athletic and fitness-focused images that highlight your physique and energy. Perfect for fitness brands, supplements, and athletic wear campaigns.
                </p>
              </div>
              <div>
                <h3 className="font-raleway text-xl font-medium mb-3" style={{ color: '#5577a5' }}>Comp Cards &amp; Digitals</h3>
                <p className="font-raleway text-lg font-normal" style={{ color: '#000000', fontWeight: '400', lineHeight: '1.6' }}>
                  Your comp card is your calling card. It includes your headshot, full body (front, side, back), 3/4 length, and styled shots along with your stats and contact information. Digitals are the clean, unedited version. Agencies use them to evaluate your features, proportions, and skin texture. Minimal makeup, natural hair, form-fitting neutrals. I shoot everything your agency needs in one session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CMQ Section */}
      <section className="py-12 lg:py-16" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#ffffff' }}>
              <span className="font-medium">WHY MODELS CHOOSE</span>{' '}
              <span className="font-normal">CMQ HEADSHOTS</span>
            </h2>
            <p className="font-raleway text-xl font-normal mb-8" style={{
              color: '#ffffff',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7'
            }}>
              I have been photographing models in Phoenix for 14+ years and I know what agencies want to see. I coach you through every pose and expression. My studio has multiple backdrop options and professional lighting setups, plus natural light during cooler months. Every Saturday is reserved for actors and models with up to 4 hours of studio time. You leave with images ready for agency submissions, casting calls, and online profiles.
            </p>
            <GetPricingButton href="#pricing" size="large" trackingLabel="modeling_why_choose_cta">
              GET PRICING
            </GetPricingButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <ThreeReviewSection
        title="WHAT CLIENTS SAY"
        reviews={[
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-2806-1x1-optimized.webp",
            imageAlt: "Modeling headshot client Gabrielle Brennan",
            name: "GABRIELLE BRENNAN",
            review: "5 stars just isn't a high enough rating for Cindy! Cindy's services exceeded my expectations! She provided a clothes rack to hang your items and helped go through what would and wouldn't work with the lighting and my skin tone. She took her time and didn't make me feel rushed, allowing us to shoot multiple clothing options to make sure I loved my photos.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-LisaS0258-optimized.webp",
            imageAlt: "Modeling headshot client Corrine Noele",
            name: "CORRINE NOELE",
            review: "Cindy at CMQ is amazing! I only wanted to get a couple different pictures but I ended up with 8 instead because there were so many great photos at the end of the shoot. She helped me relax, pick the best outfits, and took away my worries about getting my headshot taken. I would highly recommend!",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/cmq-headshots-Anna-scottsdale-headshots-H0622-jp-leg-sqo-optimized.webp",
            imageAlt: "Modeling headshot client Jacob Alvarado Garcia",
            name: "JACOB ALVARADO GARCIA",
            review: "Great price! Would highly recommend CMQ Headshots for model book photography, headshot photography, portrait photography, and individual photography.",
            stars: 5
          }
        ]}
        backgroundColor="#ffffff"
        textColor="dark"
      />

      {/* FAQ Section */}
      <AccordionFAQSection
        title="MODELING PORTFOLIO FAQs"
        faqs={modelingFAQs}
        backgroundColor="#ffffff"
      />

      {/* CTA Section */}
      <section className="bg-cmq-blue text-white" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl lg:text-4xl font-medium mb-4 uppercase" style={{ fontWeight: '500', color: '#ffffff' }}>
            MODELING HEADSHOTS NEAR ME
          </h2>
          <p className="font-raleway text-xl font-normal mb-8 text-white max-w-3xl mx-auto" style={{
            fontWeight: '400',
            letterSpacing: '0.03em',
            lineHeight: '1.6'
          }}>
            My studio is in North Phoenix with easy access from Scottsdale, Tempe, Paradise Valley, and the East Valley. Free parking and a relaxed space to change outfits. If you are looking for modeling headshots near me in the Phoenix area, book your session above or <Link href="/contact-us" className="underline hover:no-underline" style={{ color: '#ffffff' }}>contact me</Link> with any questions.
          </p>
          <GetPricingButton href="#pricing" size="xl" className="border-2 border-white">
            BOOK YOUR SESSION TODAY
          </GetPricingButton>
        </div>
      </section>

    </Layout>
  )
}
