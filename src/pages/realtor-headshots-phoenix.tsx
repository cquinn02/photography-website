import Layout from '@/components/Layout'
import Link from 'next/link'
import Head from 'next/head'
import GetPricingButton from '@/components/GetPricingButton'
import AccordionFAQSection from '@/components/sections/AccordionFAQSection'
import ThreeReviewSection from '@/components/sections/ThreeReviewSection'
import FAQSchema from '@/components/FAQSchema'

export default function RealtorHeadshots() {
  const realtorFAQs = [
    {
      id: 1,
      question: "What should I wear to my real estate headshot session?",
      answer: "Dress the way you would for a client meeting — polished and professional, but still approachable. Solid colors work best on camera. Navy, charcoal, black, and jewel tones photograph beautifully. Avoid busy patterns, logos, and loud prints that can distract from your face. I send you a full wardrobe guide when you book."
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
      answer: "Every 2-3 years at minimum, or sooner if your appearance has changed significantly. Your headshot needs to look like you — not who you were five years ago. Clients who meet you in person should recognize you immediately from your photo. An outdated headshot undermines trust before you even shake hands."
    },
    {
      id: 5,
      question: "Do you offer team photos for brokerages?",
      answer: "Yes! I photograph entire brokerage teams and offices. For team headshots, I can come to your office or photograph everyone at my Scottsdale studio. Check out my Corporate/Staff Headshots page for group session details, or contact me directly for a custom quote."
    },
    {
      id: 6,
      question: "What background options are available?",
      answer: "I offer a range of solid color backdrops — white, gray, dark gray, navy, and more — as well as textured and environmental options. Most realtors go with a clean, neutral background that works across all platforms. I will help you choose the best option for your brand during the session."
    },
    {
      id: 7,
      question: "When will I get my final images back?",
      answer: "Your final images will be done within 7 business days from the time you select your favorites.\n\nSame day retouching is available at an additional fee of $50.00 if you need images urgently for a listing or marketing deadline."
    },
    {
      id: 8,
      question: "Will you retouch my headshot?",
      answer: "Every image is professionally retouched by hand — no filters, no plug-ins. I clean up temporary blemishes, even out skin tone, and make subtle adjustments so you look like the best version of yourself. The goal is natural and authentic, not airbrushed."
    }
  ]

  return (
    <>
      <Layout
        title="Realtor Headshots Phoenix | CMQ Headshots"
        description="Professional real estate agent headshots in Phoenix and Scottsdale, AZ. Stand out on MLS, Zillow, and your brokerage website. Book today."
        canonical="https://www.cmqheadshots.com/realtor-headshots-phoenix"
        ogUrl="https://www.cmqheadshots.com/realtor-headshots-phoenix"
        ogImage="https://images.cmqheadshots.com/images/realtor-headshot-phoenix-1.jpg"
        showHeaderContact={false}
      >
      {/* FAQ Schema for AI Visibility */}
      <FAQSchema faqs={realtorFAQs.map(faq => ({ question: faq.question, answer: faq.answer }))} />

      {/* Service Schema + BreadcrumbList for Realtor Headshots */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Realtor Headshots Phoenix & Scottsdale AZ",
            "image": "https://images.cmqheadshots.com/images/realtor-headshot-phoenix-1.jpg",
            "description": "Professional real estate agent photos and headshot photography in Phoenix and Scottsdale, Arizona. Real estate photography that helps agents stand out on MLS listings, Zillow, brokerage websites, and marketing materials.",
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
              "priceCurrency": "USD",
              "description": "Professional realtor headshot photography — see website for session details and pricing.",
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
          <div className="grid grid-cols-4 w-full">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://cmqheadshots-website-images.s3.us-east-1.amazonaws.com/images/realtor-headshot-phoenix-1.jpg"
                alt="Real estate agent headshot Phoenix - outdoor professional photo"
                width={640}
                height={800}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://cmqheadshots-website-images.s3.us-east-1.amazonaws.com/images/realtor-headshot-phoenix-2.jpg"
                alt="Real estate agent photos Phoenix - professional business portrait"
                width={640}
                height={800}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://cmqheadshots-website-images.s3.us-east-1.amazonaws.com/images/realtor-headshot-phoenix-3.webp"
                alt="Realtor headshots Scottsdale - confident real estate agent portrait"
                width={640}
                height={800}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://cmqheadshots-website-images.s3.us-east-1.amazonaws.com/images/realtor-headshot-phoenix-4.jpg"
                alt="Real estate headshots Phoenix AZ - approachable agent portrait"
                width={640}
                height={800}
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
            <h1 className="font-raleway text-3xl md:text-4xl lg:text-6xl" style={{ color: 'white' }}>
              <span className="font-medium" style={{ color: 'white' }}>REALTOR HEADSHOTS</span> <span className="font-normal" style={{ color: 'white' }}>PHOENIX, AZ</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Section - Why Professional Headshots Matter for Realtors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#5577a5' }}>
              <span className="font-medium">REAL ESTATE HEADSHOTS</span> <span className="font-normal">PHOENIX, AZ</span>
            </h2>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              Looking for realtor headshots in Phoenix, AZ? In real estate, people hire the agent — not the brokerage. Before a potential client ever meets you, they&apos;ve already seen your face. On a yard sign. On Zillow. On the MLS. On your business card. They&apos;re making a decision about whether they trust you before you even pick up the phone.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              That&apos;s why your headshot matters more than almost any other marketing investment you&apos;ll make. A strong, professional headshot tells clients you take your business seriously. It says you&apos;re confident, approachable, and someone worth trusting with the biggest financial decision of their life.
            </p>

            <p className="font-raleway text-xl font-normal mb-8" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              I photograph real estate agents and brokers across Phoenix, Scottsdale, Chandler, Mesa, Gilbert, Tempe, and Paradise Valley — from solo agents building their brand to entire brokerage teams that need consistent, professional real estate agent photos. My sessions are relaxed, efficient, and designed to deliver real estate photography that actually works across every platform you need it on.
            </p>

            <GetPricingButton href="#pricing" size="large">
              BOOK YOUR SESSION
            </GetPricingButton>
          </div>
        </div>
      </section>

      {/* Billboard Image - Full Width */}
      <section className="relative w-full" style={{ lineHeight: 0 }}>
        <img
          src="https://cmqheadshots-website-images.s3.us-east-1.amazonaws.com/images/Nikki+billboard_7058.webp"
          alt="CMQ Headshots client Nikki on a billboard - real estate agent headshot used in outdoor advertising"
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
      </section>

      {/* Billboard Story Text */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#5577a5' }}>
              <span className="font-medium">REAL ESTATE</span> <span className="font-normal">AGENT HEADSHOTS</span>
            </h2>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              Nikki came to me because she had worked with me in the past and knew I would deliver quality images. She needed updated marketing materials as well as an eye-catching image for a billboard. From her session, we created a number of images — including full-length portraits — and she used one of them for her billboard located in Wickenburg.
            </p>

            <p className="font-raleway text-xl font-normal mb-8" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              I have worked with countless realtors across Phoenix, Scottsdale, and the East Valley who needed professional real estate agent headshots to update their marketing materials, and I can help you too.
            </p>

            <GetPricingButton href="#pricing" size="large">
              BOOK YOUR SESSION
            </GetPricingButton>
          </div>
        </div>
      </section>

      {/* Four Images Section - Nikki Headshots */}
      <section className="relative" style={{ backgroundColor: '#5577a5' }}>
        <div className="relative">
          <div className="grid grid-cols-4 w-full">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://cmqheadshots-website-images.s3.us-east-1.amazonaws.com/images/CMQHEADSHOTS-Nikkie+Miller0023-a1.jpg"
                alt="Female real estate agent photos Phoenix - professional realtor portrait"
                width={640}
                height={800}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://cmqheadshots-website-images.s3.us-east-1.amazonaws.com/images/CMQHEADSHOTS-Nikkie+Miller0030-a_(2)2.jpg"
                alt="Real estate headshots Scottsdale AZ - confident professional woman"
                width={640}
                height={800}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://cmqheadshots-website-images.s3.us-east-1.amazonaws.com/images/CMQHEADSHOTS-Nikkie+Miller0038F3.jpg"
                alt="Real estate photography Phoenix AZ - approachable realtor headshot"
                width={640}
                height={800}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://cmqheadshots-website-images.s3.us-east-1.amazonaws.com/images/CMQHEADSHOTS-Nikkie+Miller0061flat-a4.jpg"
                alt="Professional female realtor headshot Phoenix - polished business portrait"
                width={640}
                height={800}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing and Calendar Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl lg:text-4xl" style={{ color: '#5577a5' }}>
              <span className="font-medium">REALTOR HEADSHOT</span> <span className="font-normal">PRICING</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">

            {/* Left Side - Pricing Information */}
            <div className="w-full">
              <div className="bg-white border-2 border-gray-300 rounded-lg p-8 h-[800px] flex items-center justify-center shadow-lg w-full">
                <div className="text-center max-w-md">
                  <h4 className="font-raleway mb-12" style={{ color: '#5577a5', lineHeight: '1.8' }}>
                    <div className="text-3xl md:text-4xl mb-4">
                      <span className="font-medium">PROFESSIONAL, POLISHED</span>
                    </div>
                    <div className="text-4xl md:text-5xl mb-4">
                      <span className="font-normal">HEADSHOTS</span>
                    </div>
                    <div className="text-2xl md:text-3xl">
                      <span className="font-normal">FOR</span> <span className="font-medium">REAL ESTATE AGENTS</span>
                    </div>
                  </h4>

                  <div className="mb-12">
                    <div className="text-6xl mb-12" style={{ color: '#5577a5', fontWeight: '400' }}>
                      $250
                    </div>

                    <div className="space-y-8">
                      <p className="font-raleway text-2xl italic" style={{ color: '#575757' }}>
                        plus
                      </p>
                      <p className="font-raleway text-xl font-bold" style={{ color: '#575757' }}>
                        IMAGE(S) you purchase<br />
                        $100 each
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Acuity Scheduling Widget */}
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://cmqheadshots.as.me/?appointmentType=7287856"
                title="Schedule Realtor Headshot Session"
                width="100%"
                height="1000"
                frameBorder="0"
                allow="payment"
                className="w-full"
              ></iframe>
            </div>

          </div>

          {/* Appointment Notice */}
          <div className="text-center pt-16 pb-2">
            <p className="font-raleway text-gray-600" style={{ fontSize: '20px' }}>
              All sessions by appointment only. Book now to secure your preferred date.
            </p>
            <p className="font-raleway text-gray-600 mt-4" style={{ fontSize: '20px' }}>
              If you don&apos;t see a date or time that works for you, please <Link href="/contact-us" className="underline hover:no-underline" style={{ color: '#5577a5' }}>contact me</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Every Session Includes Section */}
      <section className="py-16" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="font-raleway text-4xl font-medium mb-8" style={{ color: '#5577a5' }}>
              EVERY REALTOR SESSION INCLUDES
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Card 1 - Unlimited Shooting Time */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                UNLIMITED SHOOTING TIME
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
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
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                UNLIMITED OUTFITS
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
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
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                MULTIPLE BACKGROUNDS
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
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
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                PROFESSIONAL RETOUCHING
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Every image is hand-retouched for a natural, polished look. No filters, no plug-ins — just you looking like the best version of yourself.
              </p>
            </div>

            {/* Card 5 - Multiple File Sizes */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                MULTIPLE FILE SIZES
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
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
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
                EXPERT DIRECTION
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                I coach you through every pose and expression. You don&apos;t need to know what to do in front of the camera — that&apos;s my job.
              </p>
            </div>

          </div>
        </div>
      </section>

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
              <img
                src="https://cmqheadshots-website-images.s3.us-east-1.amazonaws.com/images/CMQHEADSHOTS-Manny+Paloma6214-inside.jpg"
                alt="Real estate agent headshot Phoenix - indoor environmental background"
                width={800}
                height={640}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[5/4] overflow-hidden">
              <img
                src="https://cmqheadshots-website-images.s3.us-east-1.amazonaws.com/images/CMQHEADSHOTS-Manny+Paloma6214-orig.jpg"
                alt="Realtor headshot Scottsdale - studio background replacement example"
                width={800}
                height={640}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[5/4] overflow-hidden">
              <img
                src="https://cmqheadshots-website-images.s3.us-east-1.amazonaws.com/images/CMQHEADSHOTS-Manny+Paloma6265-11.jpg"
                alt="Real estate agent photos Scottsdale - digital background swap"
                width={800}
                height={640}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[5/4] overflow-hidden">
              <img
                src="https://cmqheadshots-website-images.s3.us-east-1.amazonaws.com/images/CMQHEADSHOTS-Manny+Paloma62652.jpg"
                alt="Professional real estate photography Phoenix AZ - multiple background options"
                width={800}
                height={640}
                className="absolute inset-0 w-full h-full object-cover"
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
              Notice the different backgrounds in Manny&apos;s headshots? I can digitally replace your background in post-production, giving you multiple distinct looks from a single session. Whether you need a warm environmental backdrop for social media or a clean studio look for your brokerage website, you&apos;ll walk away with a variety of images — without the hassle of multiple setups.
            </p>
          </div>
        </div>
      </section>

      {/* Why Realtors Need Professional Headshots */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-medium">REALTOR HEADSHOT</span> <span className="font-normal">PHOTOGRAPHER PHOENIX</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  YOUR FACE IS EVERYWHERE
                </h3>
                <p className="font-raleway text-xl text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  Think about how many places your headshot appears: MLS listings, Zillow, Realtor.com, Redfin, your brokerage website, yard signs, bus benches, mailers, business cards, email signatures, LinkedIn, Instagram, and Facebook. That one image is working harder than any other piece of marketing you own. A smartphone selfie or an outdated photo from ten years ago isn&apos;t going to cut it. You need a headshot that looks polished, professional, and current — every single place it shows up.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  FIRST IMPRESSIONS WIN LISTINGS
                </h3>
                <p className="font-raleway text-xl text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  When a homeowner is deciding which agent to interview, they&apos;re scrolling through listing agents online. Your headshot is your handshake before the handshake. A confident, approachable headshot tells potential clients that you&apos;re serious about your career and that you invest in your professional image — which says a lot about how you&apos;ll handle their listing. Agents who look put-together get more callbacks. It&apos;s that simple.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  STAND OUT IN A CROWDED MARKET
                </h3>
                <p className="font-raleway text-xl text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  The Phoenix and Scottsdale real estate market is competitive. There are thousands of licensed agents in Maricopa County alone. When potential clients see your headshot next to ten other agents on Zillow, you have a fraction of a second to make an impression. Professional real estate agent photos with good lighting, clean composition, and a genuine expression give you an edge. It separates you from the agents using cropped vacation photos or decade-old glamour shots.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  CONSISTENCY BUILDS YOUR BRAND
                </h3>
                <p className="font-raleway text-xl text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  The best real estate agents treat themselves as a brand. Your headshot should be consistent across every platform — same quality, same energy, same professionalism. When someone sees your face on a For Sale sign and then finds you on LinkedIn, they should instantly recognize you. That consistency builds trust and recognition, which is everything in a relationship-driven business like real estate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect at Your Session */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#5577a5' }}>
              <span className="font-medium">WHAT TO EXPECT</span> <span className="font-normal">AT YOUR SESSION</span>
            </h2>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              When you arrive at my Phoenix studio, we&apos;ll start by talking about what you need your real estate agent photos for and where they&apos;ll be used. This helps me understand your brand and the look you&apos;re going for — whether that&apos;s classic and corporate or warm and approachable. Most realtors want something that feels both professional and personable, and that&apos;s exactly what we&apos;ll aim for.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              I shoot tethered to my laptop, so you&apos;ll see the images in real time as we go. No guessing, no waiting, no surprises. If something isn&apos;t working — a collar out of place, a squint, a forced smile — we fix it on the spot. I&apos;ll direct you through expressions and angles, coaching you into natural, confident poses that look like you on your best day.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              Bring multiple outfits so we can capture different looks for different platforms. A blazer for the MLS, something more relaxed for social media — it&apos;s your session and we&apos;ll make the most of it. After the session, you&apos;ll select your favorite images, and I&apos;ll professionally retouch each one by hand. No filters. No plug-ins. Just you, looking polished and natural.
            </p>

            <p className="font-raleway text-xl font-normal mb-8" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              With <Link href="/about" className="underline hover:no-underline" style={{ color: '#5577a5' }}>over 14 years of experience</Link> photographing professionals in the Phoenix area, I know how to make the process easy and the results exceptional. If you hate being in front of the camera, you&apos;re in good company — most of my clients feel the same way walking in. They don&apos;t feel that way walking out.
            </p>
          </div>
        </div>
      </section>

      {/* Where Your Headshot Will Be Used Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#5577a5' }}>
              <span className="font-medium">REAL ESTATE</span> <span className="font-normal">AGENT PHOTOS</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                'MLS Listings',
                'Zillow & Realtor.com',
                'Brokerage Website',
                'Yard Signs & Mailers',
                'Business Cards',
                'LinkedIn Profile',
                'Email Signature',
                'Social Media',
                'Print Advertising'
              ].map((item, index) => (
                <div key={index} className="py-4 px-6 rounded-lg" style={{ backgroundColor: '#F1F1F1' }}>
                  <p className="font-raleway text-xl font-normal" style={{ color: '#575757' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-raleway text-xl font-normal mt-12" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              One session. Multiple sizes. Every platform covered. That&apos;s why getting it right matters.
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
            imageAlt: "Realtor headshot client Holly Jeppesen",
            name: "HOLLY JEPPESEN",
            review: "Cindy was amazing to work with! She ensured I felt comfortable with the process, and I was happy every step of the way. I HIGHLY recommend Cindy Quinn!!",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-LisaS0258-optimized.webp",
            imageAlt: "On-location headshot client Alexa Clancy",
            name: "ALEXA CLANCY",
            review: "She was awesome and our pictures turned out amazing!! She was also very willing to make the drive to our office location even though it was a little farther for her. Very much appreciate her professionalism and overall positivity! Everyone was very happy!",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/CMQHeadshots-5855a-jpmini-leg-sqo%20copy.webp",
            imageAlt: "Team headshot client Dalton McBride",
            name: "DALTON MCBRIDE",
            review: "Did an amazing job with my team's photos! 10/10 would recommend!",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        textColor="white"
      />

      {/* FAQ Section */}
      <AccordionFAQSection
        title="REALTOR HEADSHOTS PHOENIX AZ"
        subtitle="Get answers to the most common questions about realtor headshot sessions"
        faqs={realtorFAQs}
        backgroundColor="white"
        textColor="#5577a5"
      />

      {/* Final CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl lg:text-4xl mb-6" style={{ color: '#5577a5' }}>
            <span className="font-medium">REALTOR HEADSHOTS</span> <span className="font-normal">NEAR ME</span>
          </h2>
          <p className="font-raleway text-xl font-normal mb-8 max-w-2xl mx-auto" style={{
            fontWeight: '400',
            letterSpacing: '0.03em',
            lineHeight: '1.7',
            color: '#575757'
          }}>
            Whether you&apos;re selling luxury homes in Scottsdale, new builds in Gilbert and Queen Creek, or condos in downtown Phoenix, your headshot is on every listing, every yard sign, and every Zillow profile. It&apos;s working 24/7 — make sure it&apos;s working for you. I photograph real estate agents from brokerages across the Valley including Russ Lyon Sotheby&apos;s, Realty ONE Group, HomeSmart, and eXp Realty. My studio is centrally located in North Phoenix with easy access from the 101 and I-17, or I can come to your office for a convenient on-location session. With 130+ five-star Google reviews and over 14 years of experience, I&apos;m the headshot photographer Phoenix realtors trust.
          </p>
          <GetPricingButton href="#pricing" size="large">
            BOOK YOUR SESSION
          </GetPricingButton>
        </div>
      </section>

      </Layout>
    </>
  )
}