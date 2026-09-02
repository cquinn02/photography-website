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

export default function LawyerHeadshots() {
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

  const lawyerFAQs = [
    {
      id: 1,
      question: "What should a lawyer wear for a headshot?",
      answer: "Most attorneys go with a classic look. A well-fitted suit or blazer in navy, charcoal, or black with a solid-colored shirt or blouse. Avoid busy patterns, logos, and bright colors that distract from your face. Dress the way you would for a client meeting or courtroom appearance. I send you a full wardrobe guide when you book."
    },
    {
      id: 2,
      question: "How long does a lawyer headshot session take?",
      answer: "Sessions are never rushed. Most attorney headshot sessions run 45 minutes to an hour, which gives us time to try different expressions, outfits, and backgrounds. I take the time needed to get you comfortable and capture headshots that work for your practice."
    },
    {
      id: 3,
      question: "Can I use my headshot on my law firm website and directories?",
      answer: "Absolutely. Every image you purchase comes in multiple sizes optimized for your law firm website, Avvo, Martindale-Hubbell, LinkedIn, Super Lawyers, FindLaw, your email signature, business cards, and print materials. You get the full resolution file plus web-optimized versions for every platform."
    },
    {
      id: 4,
      question: "How often should attorneys update their headshot?",
      answer: "Every 2-3 years at minimum, or sooner if your appearance has changed significantly. Clients and colleagues who meet you in person should recognize you from your photo immediately. An outdated headshot undermines the trust and credibility you've worked hard to build."
    },
    {
      id: 5,
      question: "Do you photograph entire law firms?",
      answer: "Yes! I photograph individual attorneys, small practices, and large law firms. For firm-wide headshots, I can come to your office or photograph everyone at my studio. Consistent headshots across your firm's website and marketing materials project professionalism and unity. Contact me for a custom group quote."
    },
    {
      id: 6,
      question: "What background works best for attorney headshots?",
      answer: "Most attorneys go with a clean, neutral background. White, light gray, or dark gray all convey professionalism without distraction. I also offer textured and environmental options. I'll help you choose the best backdrop based on your practice area and where your headshot will be used."
    },
    {
      id: 7,
      question: "When will I receive my final images?",
      answer: "Your final images will be delivered within 7 business days from the time you select your favorites.\n\nSame day retouching is available at an additional fee of $50.00 if you have an urgent deadline like a new firm website launch, a conference bio, or a court directory update."
    },
    {
      id: 8,
      question: "Will you retouch my headshot?",
      answer: "Every image is professionally retouched by hand. No filters, no plug-ins. I clean up temporary blemishes, even out skin tone, and make subtle adjustments so you look polished and professional while still looking like yourself. The goal is natural, not airbrushed."
    }
  ]

  return (
    <>
      <Layout
        title="Lawyer Headshots Phoenix | CMQ Headshots"
        description="Clients judge credibility before they make contact. Get lawyer and attorney headshots in Phoenix that project confidence and professionalism."
        canonical="https://www.cmqheadshots.com/lawyer-headshots-phoenix"
        ogUrl="https://www.cmqheadshots.com/lawyer-headshots-phoenix"
        showHeaderContact={true}
      >
      {/* Service Schema + BreadcrumbList for Lawyer Headshots */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Lawyer Headshots Phoenix AZ",
            "image": "https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-1.webp",
            "description": "Professional lawyer and attorney headshot photography in Phoenix, Arizona. Polished, confident headshots for law firm websites, legal directories, LinkedIn, and marketing materials.",
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
            "serviceType": "Lawyer Headshot Photography",
            "offers": {
              "@type": "Offer",
              "price": "250",
              "priceCurrency": "USD",
              "description": "Lawyer headshot session: $250 session fee plus $100 per edited image. Billboard-ready resolution available.",
              "url": "https://www.cmqheadshots.com/lawyer-headshots-phoenix"
            },
            "url": "https://www.cmqheadshots.com/lawyer-headshots-phoenix"
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
                "name": "Lawyer Headshots Phoenix",
                "item": "https://www.cmqheadshots.com/lawyer-headshots-phoenix"
              }
            ]
          }) }}
        />
      </Head>

      {/* Hero Section - Grasso Law Firm headshots */}
      <section className="relative" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        {/* Four Headshots Row */}
        <div className="relative">
          <div className="grid grid-cols-4 w-full gap-1 bg-white">
            <div className="relative aspect-square">
              <Image
                src="https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-12.webp"
                alt="Lawyer headshots Phoenix, AZ - professional attorney portrait"
                fill
                priority
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-9.webp"
                alt="Lawyer headshots Phoenix, AZ - professional legal portrait"
                fill
                priority
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-11.webp"
                alt="Lawyer headshots Phoenix, AZ - female attorney portrait"
                fill
                priority
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-10.webp"
                alt="Lawyer headshots Phoenix, AZ - attorney in beige jacket"
                fill
                priority
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
              <span className="font-medium" style={{ color: 'white', fontWeight: '500' }}>LAWYER HEADSHOTS</span> <span className="font-light" style={{ color: 'white', fontWeight: '300' }}>PHOENIX, AZ</span>
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
              Looking for lawyer headshots in Phoenix, AZ? I photograph attorneys and law firms across Phoenix, Scottsdale, Chandler, Mesa, Gilbert, Tempe, and Paradise Valley. Solo practitioners and entire firm teams. Every image works for your firm website, Avvo, LinkedIn, Super Lawyers, and legal directories.
            </p>
          </div>
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
                      }}>LAWYER</span>
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-7xl mb-6">
                      <span className="inline-block" style={{
                        fontWeight: '300',
                        opacity: pricingVisible ? 1 : 0,
                        animation: pricingVisible ? 'bounce-in 0.6s ease-out 0.2s forwards' : 'none',
                      }}>HEADSHOTS</span>
                    </div>
                    <div className="text-2xl md:text-3xl" style={{ color: '#5577a5', fontWeight: '500', lineHeight: '1.3' }}>
                      Polished, Professional<br />Headshots for Legal Professionals
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
              src="https://app.acuityscheduling.com/schedule.php?owner=16156099&appointmentType=94542807"
              title="Schedule Lawyer Headshot Session"
            />

          </div>

          {/* Appointment Notice */}
          <div className="text-center pt-16 pb-2">
            <p className="font-raleway text-black" style={{ fontSize: '20px' }}>
              All sessions by appointment only. Book now to secure your preferred date.
            </p>
            <p className="font-raleway text-black mt-4" style={{ fontSize: '18px' }}>
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
              EVERY ATTORNEY SESSION INCLUDES
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
                Your session is never rushed. I take the time needed to get you comfortable and capture headshots that work for your practice.
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
                Bring as many outfits as you want. Many attorneys shoot one formal look for the firm website and a more approachable look for LinkedIn and social media.
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
                Choose from solid color backdrops, textured options, or environmental settings. I&apos;ll help you pick the background that matches your firm&apos;s brand and website.
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
                Every image is hand-retouched for a polished, natural look. No filters, no plug-ins. You look like yourself, just on your best day.
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
                Each purchased image comes in sizes optimized for your firm&apos;s website, Avvo, LinkedIn, legal directories, email signatures, business cards, and print.
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
                I coach you through every pose and expression. You don&apos;t need to know what to do in front of the camera. That&apos;s my job. Most attorneys are surprised how comfortable the process is.
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
              I shoot tethered to my laptop, so you see each image in real time. If a tie is crooked or a smile looks forced, we fix it on the spot. I direct your poses and expressions so you look natural and confident, not stiff.
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

      {/* 5 Star Reviews Section */}
      <ThreeReviewSection
        title="5 STAR REVIEWS"
        reviews={[
          {
            image: "https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-1.webp",
            imageAlt: "Law firm headshot client Sarah Neves",
            name: "SARAH NEVES",
            review: "Cindy did an amazing job for our law firm. We have had photographs taken with others before \u2013 and there was no comparison. Cindy is a true professional and took the time necessary to deliver an exceptional product.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/ken-crane-0570-sm.webp",
            imageAlt: "Professional headshot client Ken Crane",
            name: "KEN CRANE",
            review: "I was in need of updated headshots for professional purposes and located CMQ Headshots online. Cindy was a consummate professional. Her in-home studio makes for a comfortable relaxing environment. Through her expert direction and advice, combined with her use of top of the line digital equipment, Cindy is able to work efficiently to bring out the best in her clients while producing top notch results. Highly recommend!",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/erin-tisland-12476.webp",
            imageAlt: "Professional headshot client Erin Tisland",
            name: "ERIN TISLAND",
            review: "CMQ Headshots offers a well-organized process for reservations and preparing for your headshots. The session time is custom for your needs and Cindy does an outstanding job coaching you to your best headshot outcomes. A worthwhile investment for any professional. You won't be disappointed.",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        textColor="white"
      />

      {/* Female Lawyer Headshots — TwoColumnSection, image left, text right */}
      <TwoColumnSection
        title={<><span className="font-medium">FEMALE LAWYER</span> <span className="font-normal">HEADSHOTS</span></>}
        description="Female lawyer headshots in Phoenix should feel like you on your best day, not a stranger. I light, pose, and retouch so the portrait reads as confident and current on Avvo, FindLaw, LinkedIn, and your firm's bio page. You pick the final selects before you leave."
        imageUrl="https://images.cmqheadshots.com/images/lawyer-headshots/female-lawyer-headshots-clean.webp"
        imageAlt="Female lawyer headshots Phoenix - professional female attorney portrait by CMQ Headshots"
        imageWidth={1000}
        imageHeight={800}
        backgroundColor="#a3a3a3"
        textColor="dark"
        textColorHex="#383838"
        titleColor="blue"
        reverseColumns={false}
        mobileStackOrder="image-first"
        objectFit="contain"
        minHeight="650"
      />

      {/* Law Firm Headshots — staff collage */}
      <TwoColumnSection
        title={<><span className="font-medium">LAW FIRM</span> <span className="font-normal">HEADSHOTS</span></>}
        description="Your legal staff are just as much a part of the firm as the partners, and their headshots should reflect that. I photograph the whole team in one session with matching lighting and backdrops, so everyone looks polished and consistent across your bios and website."
        imageUrl="https://images.cmqheadshots.com/images/law-firm-headshots-collage.webp"
        imageAlt="Law firm headshots Phoenix - unified legal staff team portraits by CMQ Headshots"
        imageWidth={1600}
        imageHeight={1066}
        backgroundColor="#3d3d3d"
        textColor="white"
        titleColor="white"
        reverseColumns={true}
        mobileStackOrder="image-first"
        objectFit="contain"
        minHeight="480"
      />

      {/* Where Your Headshot Will Be Used Section */}
      <section className="py-16" style={{ backgroundColor: '#575757' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#ffffff' }}>
              <span className="font-medium">WHERE ATTORNEYS USE</span> <span className="font-normal">THEIR HEADSHOTS</span>
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                'Law Firm Website',
                'Avvo Profile',
                'Martindale-Hubbell',
                'Super Lawyers',
                'FindLaw Directory',
                'LinkedIn Profile',
                'Google Business Profile',
                'Email Signature',
                'Business Cards',
                'Conference Bios',
                'Publication Bylines',
                'Print Advertising'
              ].map((item, index) => (
                <div key={index} className="py-4 px-6 rounded-lg bg-white">
                  <p className="font-raleway text-lg font-normal" style={{ color: '#000000' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-raleway text-xl font-normal mt-12" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#ffffff'
            }}>
              One session. Multiple sizes. Every platform covered.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AccordionFAQSection
        title="FREQUENTLY ASKED QUESTIONS ABOUT LAWYER HEADSHOTS"
        subtitle="Get answers to common questions about attorney headshot sessions in Phoenix"
        faqs={lawyerFAQs}
        backgroundColor="white"
        textColor="#5577a5"
      />

      {/* Helpful Tips */}
      <section className="py-8" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-2">
            <p className="font-raleway text-lg" style={{ color: '#000000' }}>
              Not sure what to wear? Read our guides:{' '}
              <Link
                href="/blog/dress-to-impress-mens-headshot-fashion-tips-for-business-success"
                className="underline hover:no-underline transition-all"
                style={{ color: '#5577a5' }}
              >
                men&apos;s headshot fashion tips
              </Link>
              {' '}and{' '}
              <Link
                href="/blog/womens-headshot-clothing-guide"
                className="underline hover:no-underline transition-all"
                style={{ color: '#5577a5' }}
              >
                women&apos;s clothing guide
              </Link>
              .
            </p>
            <p className="font-raleway text-lg" style={{ color: '#000000' }}>
              Learn{' '}
              <Link
                href="/blog/how-to-prep-for-your-best-professional-headshot"
                className="underline hover:no-underline transition-all"
                style={{ color: '#5577a5' }}
              >
                how to prepare for your headshot session
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      </Layout>
    </>
  )
}
