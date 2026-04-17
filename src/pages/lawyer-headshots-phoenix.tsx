import Layout from '@/components/Layout'
import Link from 'next/link'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import GetPricingButton from '@/components/GetPricingButton'
import FAQSchema from '@/components/FAQSchema'

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
      answer: "Most attorneys go with a clean, neutral background — white, light gray, or dark gray — that conveys professionalism without distraction. I also offer textured and environmental options. I'll help you choose the best backdrop based on your practice area and where your headshot will be used."
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
        description="Professional lawyer and attorney headshots in Phoenix, AZ. Polished, confident headshots for law firm websites, Avvo, LinkedIn, and legal directories. Book today."
        canonical="https://www.cmqheadshots.com/lawyer-headshots-phoenix"
        ogUrl="https://www.cmqheadshots.com/lawyer-headshots-phoenix"
        showHeaderContact={true}
      >
      {/* FAQ Schema for AI Visibility */}
      <FAQSchema faqs={lawyerFAQs.map(faq => ({ question: faq.question, answer: faq.answer }))} />

      {/* Service Schema + BreadcrumbList for Lawyer Headshots */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Lawyer Headshots Phoenix AZ",
            "image": "https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-6636.webp",
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
          <div className="grid grid-cols-4 w-full">
            <div className="relative aspect-square">
              <img
                src="https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-7.webp"
                alt="Lawyer headshots Phoenix - female attorney professional portrait"
                width={640}
                height={640}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-square">
              <img
                src="https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-5.webp"
                alt="Lawyer headshots Phoenix - professional business portrait"
                width={640}
                height={640}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-square">
              <img
                src="https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-6.webp"
                alt="Lawyer headshots Phoenix AZ - professional attorney portrait"
                width={640}
                height={640}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-square">
              <img
                src="https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-2.webp"
                alt="Lawyer headshots Phoenix - attorney in professional attire"
                width={640}
                height={640}
                className="absolute inset-0 w-full h-full object-cover"
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
              <span className="font-medium" style={{ color: 'white' }}>LAWYER HEADSHOTS</span> <span className="font-normal" style={{ color: 'white' }}>PHOENIX, AZ</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#000000'
            }}>
              Your lawyer headshots in Phoenix, AZ are the first thing potential clients see when they search for an attorney online. Before they read your credentials or case results, they look at your photo and decide whether to call.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#000000'
            }}>
              I&apos;ve been photographing lawyers and legal professionals across Phoenix and the Valley for over 14 years. 130+ five-star Google reviews, all from real clients. From partner announcements to full firm team sessions, I coach you through every pose and expression so you walk away with headshots you&apos;re proud to put on your firm&apos;s website.
            </p>

            <p className="font-raleway text-xl font-normal mb-8" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#000000'
            }}>
              Clients are choosing between you and the attorney next to you on Google. A professional headshot builds trust before you ever meet.
            </p>

            <GetPricingButton href="#pricing" size="large">
              BOOK YOUR SESSION
            </GetPricingButton>
          </div>
        </div>
      </section>

      {/* TODO: Add 4 lawyer headshot images row here (similar to realtor page Nikki row) */}
      {/* <section className="relative" style={{ backgroundColor: '#5577a5' }}>
        <div className="relative">
          <div className="grid grid-cols-4 w-full">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src="LAWYER-IMAGE-1-URL" alt="Lawyer headshot Phoenix" width={640} height={800} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src="LAWYER-IMAGE-2-URL" alt="Attorney headshot Phoenix" width={640} height={800} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src="LAWYER-IMAGE-3-URL" alt="Female lawyer headshot Phoenix" width={640} height={800} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src="LAWYER-IMAGE-4-URL" alt="Law firm headshot Phoenix AZ" width={640} height={800} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Billboard and Large Format Section */}
      <section className="py-16" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8 text-center" style={{ color: '#ffffff' }}>
              <span className="font-medium">BILLBOARD-READY</span> <span className="font-normal">LAWYER HEADSHOTS</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-billboard.webp"
                  alt="Professional lawyer headshot Phoenix - billboard quality attorney portrait"
                  width={533}
                  height={800}
                  className="w-auto h-auto max-w-full rounded-lg"
                />
              </div>
              <div>
                <p className="font-raleway text-xl font-normal mb-6" style={{
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.7',
                  color: '#ffffff'
                }}>
                  Billboard-ready lawyer headshots matter more than you think. Drive through Phoenix or Scottsdale and you see attorney headshots everywhere. Billboards along the I-10 and Loop 101, bus benches, bus wraps, highway signs, and mailers in every mailbox. Lawyers use their headshot in large-format advertising more than almost any other profession. If your image is not shot at full resolution with professional lighting, it shows. Especially at 14 feet wide.
                </p>

                <p className="font-raleway text-xl font-normal mb-6" style={{
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.7',
                  color: '#ffffff'
                }}>
                  A headshot that looks fine at 200 pixels on LinkedIn can look soft or pixelated on a billboard or full-page ad. I shoot at full resolution so your images hold up at any size, from a tiny email signature to a 48-sheet billboard on the freeway. When your face is 10 feet tall, quality matters.
                </p>

                <p className="font-raleway text-xl font-normal mb-8" style={{
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.7',
                  color: '#ffffff'
                }}>
                  Personal injury attorneys on billboards, family law firms on bus benches, criminal defense lawyers on late-night TV. Your headshot needs to look sharp at every scale. Every image I deliver is full-resolution and print-ready.
                </p>
              </div>
            </div>
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

      {/* Attorney Images Row */}
      <section>
        <div className="grid grid-cols-4 w-full">
          <div className="relative aspect-square">
            <img
              src="https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-12.webp"
              alt="Attorney headshot Phoenix - professional legal portrait"
              width={640}
              height={640}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <img
              src="https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-9.webp"
              alt="Lawyer headshot Phoenix AZ - professional portrait"
              width={640}
              height={640}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <img
              src="https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-11.webp"
              alt="Female lawyer headshot Phoenix - attorney portrait"
              width={640}
              height={640}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <img
              src="https://images.cmqheadshots.com/images/lawyer-headshots/lawyer-headshot-phoenix-10.webp"
              alt="Professional attorney headshot Phoenix AZ - lawyer in beige jacket"
              width={640}
              height={640}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-2xl lg:text-3xl text-center mb-12" style={{ color: '#ffffff' }}>
              <span className="font-medium">ATTORNEY HEADSHOTS</span> <span className="font-normal">PHOENIX, AZ</span>
            </h2>

            <p className="font-raleway text-xl text-center font-normal mb-6" style={{
              color: '#ffffff',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7'
            }}>
              When someone needs a lawyer, they search online first. They scroll through Avvo, Google, and law firm websites looking at faces. They decide who to call based on who looks like someone they can trust. Attorney headshots in Phoenix, AZ matter because that photo does the work before your phone ever rings.
            </p>

            <p className="font-raleway text-xl text-center font-normal mb-6" style={{
              color: '#ffffff',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7'
            }}>
              Phoenix and Scottsdale have thousands of practicing attorneys. A professional headshot sets you apart from lawyers still using outdated photos or smartphone selfies. On directories like Avvo and FindLaw, profiles with professional photos consistently generate more client inquiries.
            </p>

            <p className="font-raleway text-xl text-center font-normal" style={{
              color: '#ffffff',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7'
            }}>
              If your firm&apos;s About page shows headshots from five different photographers with five different backgrounds, it looks disjointed. I photograph solo practitioners and entire firms so every headshot matches.
            </p>
          </div>
        </div>
      </section>

      {/* TODO: Add 4 attorney headshot images row here (5x4 aspect ratio like realtor page) */}
      {/* <section className="relative" style={{ backgroundColor: '#5577a5' }}>
        <div className="relative">
          <div className="grid grid-cols-4 w-full">
            <div className="relative aspect-[5/4] overflow-hidden">
              <img src="ATTORNEY-IMAGE-1-URL" alt="Professional attorney headshot Phoenix" width={800} height={640} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[5/4] overflow-hidden">
              <img src="ATTORNEY-IMAGE-2-URL" alt="Female attorney headshot Scottsdale" width={800} height={640} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[5/4] overflow-hidden">
              <img src="ATTORNEY-IMAGE-3-URL" alt="Law firm partner headshot Phoenix AZ" width={800} height={640} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[5/4] overflow-hidden">
              <img src="ATTORNEY-IMAGE-4-URL" alt="Lawyer professional portrait Phoenix" width={800} height={640} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section> */}

      {/* What to Expect at Your Session */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#5577a5' }}>
              <span className="font-medium">WHAT TO EXPECT</span> <span className="font-normal">AT YOUR LAWYER HEADSHOT SESSION</span>
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#000000'
            }}>
              When you arrive at my Phoenix studio, we start by talking about what you need your attorney headshots for. Your firm&apos;s website, a legal directory profile, a speaking engagement, a publication, or all of the above. Knowing where your images will be used helps me set the right lighting and background.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#000000'
            }}>
              I shoot tethered to my laptop, so you see the images in real time as we go. If a tie is crooked or a smile looks forced, we fix it on the spot. I direct you through poses and expressions so you look natural and confident, not stiff.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#000000'
            }}>
              Bring multiple outfits so we can capture different looks. A formal suit for your firm&apos;s website, something more relaxed for LinkedIn or social media. At the end of the session, we review images together and you choose your favorites. Each purchased image is retouched by hand and delivered in multiple sizes for every platform.
            </p>

            <p className="font-raleway text-xl font-normal mb-8" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#000000'
            }}>
              With <Link href="/about" className="underline hover:no-underline" style={{ color: '#5577a5' }}>over 14 years of experience</Link> photographing professionals in Phoenix, I know how to make the process comfortable. Most attorneys tell me they were dreading the session and ended up enjoying it. <Link href="/contact-us" className="underline hover:no-underline" style={{ color: '#5577a5' }}>Contact me</Link> if you have any questions before booking.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing and Calendar Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl lg:text-4xl" style={{ color: '#5577a5' }}>
              <span className="font-medium">LAWYER HEADSHOT</span> <span className="font-normal">PRICING</span>
            </h2>
            <p className="font-raleway text-lg mt-4 max-w-3xl mx-auto" style={{ color: '#000000', fontWeight: '400', lineHeight: '1.6' }}>
              Simple, straightforward lawyer headshot pricing. $250 session fee plus $100 per image you choose.
            </p>
          </div>

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
                      }}>LAWYER</span>
                    </div>
                    <div className="text-6xl md:text-7xl mb-6">
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
                </div>
              </div>
            </div>

            {/* Right Side - Acuity Scheduling (facade: loads on click only) */}
            <AcuityBookingFacade
              src="https://app.acuityscheduling.com/schedule.php?owner=16156099&appointmentType=7287856"
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

      {/* Where Your Headshot Will Be Used Section */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#5577a5' }}>
              <span className="font-medium">WHERE ATTORNEYS USE</span> <span className="font-normal">THEIR HEADSHOTS</span>
            </h2>

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
              color: '#000000'
            }}>
              One session. Multiple sizes. Every platform covered.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <ThreeReviewSection
        title="WHAT CLIENTS SAY"
        reviews={[
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-2806-1x1-optimized.webp",
            imageAlt: "Law firm headshot client Sarah Neves",
            name: "SARAH NEVES",
            review: "Cindy did an amazing job for our law firm. We have had photographs taken with others before \u2013 and there was no comparison. Cindy is a true professional and took the time necessary to deliver an exceptional product.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-LisaS0258-optimized.webp",
            imageAlt: "Professional headshot client Ken Crane",
            name: "KEN CRANE",
            review: "I was in need of updated headshots for professional purposes and located CMQ Headshots online. Cindy was a consummate professional. Her in-home studio makes for a comfortable relaxing environment. Through her expert direction and advice, combined with her use of top of the line digital equipment, Cindy is able to work efficiently to bring out the best in her clients while producing top notch results. Highly recommend!",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS1196-sq-optimized.webp",
            imageAlt: "Professional headshot client Erin Tisland",
            name: "ERIN TISLAND",
            review: "CMQ Headshots offers a well-organized process for reservations and preparing for your headshots. The session time is custom for your needs and Cindy does an outstanding job coaching you to your best headshot outcomes. A worthwhile investment for any professional. You won't be disappointed.",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        textColor="white"
      />

      {/* FAQ Section */}
      <AccordionFAQSection
        title="LAWYER HEADSHOTS PHOENIX AZ"
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

      {/* Final CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl lg:text-4xl mb-6" style={{ color: '#5577a5' }}>
            <span className="font-medium">ATTORNEY HEADSHOTS</span> <span className="font-normal">NEAR ME</span>
          </h2>
          <p className="font-raleway text-xl font-normal mb-8 max-w-2xl mx-auto" style={{
            fontWeight: '400',
            letterSpacing: '0.03em',
            lineHeight: '1.7',
            color: '#000000'
          }}>
            From downtown Phoenix law firms to the Camelback Corridor and Scottsdale, attorneys across the Valley trust me for headshots that project credibility and authority. Your headshot appears on your firm&apos;s website, Avvo, Justia, Super Lawyers, and LinkedIn — it needs to reflect the level of professionalism your clients expect. I work with solo practitioners, mid-size firms, and large practices alike. My studio is in North Phoenix with easy freeway access from the 101 and I-17, or I&apos;ll bring my full setup to your office. With 130+ five-star Google reviews and over 14 years of experience, I understand what makes a great attorney headshot.
          </p>
          <GetPricingButton href="#pricing" size="large">
            BOOK YOUR SESSION
          </GetPricingButton>
        </div>
      </section>

      {/* Group/Firm Headshots Section */}
      <section className="py-16" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-raleway text-4xl font-medium mb-8" style={{ color: '#5577a5' }}>
              LAW FIRM TEAM HEADSHOTS
            </h2>

            <p className="font-raleway text-xl mb-8" style={{ color: '#5577a5', fontWeight: '400' }}>
              Need law firm team headshots for your entire practice? I photograph solo practitioners and large firms alike, delivering consistent images across your website and marketing.
            </p>

            <Link
              href="/corporate-staff-headshots"
              className="inline-block text-white font-raleway text-lg font-medium px-8 py-3 rounded transition-colors duration-300"
              style={{ backgroundColor: '#5577a5' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#575757';
                e.currentTarget.style.backgroundImage = 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")';
                e.currentTarget.style.backgroundRepeat = 'repeat';
                e.currentTarget.style.backgroundSize = 'auto';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5577a5';
                e.currentTarget.style.backgroundImage = 'none';
              }}
            >
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </section>

      </Layout>
    </>
  )
}
