import Layout from '@/components/Layout'
import Image from 'next/image'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import GetPricingButton from '@/components/GetPricingButton'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
import FAQSchema from '@/components/FAQSchema'

const ThreeReviewSection = dynamic(() => import('@/components/sections/ThreeReviewSection'))
const AccordionFAQSection = dynamic(() => import('@/components/sections/AccordionFAQSection'))

export default function ModelingHeadshotsPhoenix() {
  const modelingFAQs = [
    {
      id: 1,
      question: "What should I bring to my modeling portfolio session?",
      answer: "Bring 5-6 outfits that show your range — from casual to dressy, solid colors to simple patterns. I'll help you choose what works best for your body type, skin tone, and the agencies you're targeting."
    },
    {
      id: 2,
      question: "How many images will I get from my session?",
      answer: "Your session includes professionally retouched images in both high-resolution for prints and web-optimized versions for online submissions. The exact number depends on your package — we'll discuss your goals beforehand."
    },
    {
      id: 3,
      question: "Do I need professional hair and makeup?",
      answer: "You're welcome to arrive camera-ready or do your hair and makeup at the studio. Keep it natural and polished — agencies want to see the real you, not heavy makeup. I'll guide you on what works best for your look."
    },
    {
      id: 4,
      question: "What types of modeling do you photograph?",
      answer: "I work with commercial, fashion, fitness, lifestyle, and print models. Whether you need clean headshots for agency submissions or creative portfolio images that showcase your versatility, I can help."
    },
    {
      id: 5,
      question: "How often should I update my modeling portfolio?",
      answer: "Every 6-12 months, or anytime your look changes significantly — new haircut, weight change, or a shift in the types of work you're pursuing. Fresh images keep your portfolio current and competitive."
    },
    {
      id: 6,
      question: "Can you help me build a portfolio from scratch?",
      answer: "Absolutely. I've helped many aspiring models build their first portfolios. I'll guide you through posing, expressions, and outfit selection to create a collection of images that agencies want to see."
    }
  ]

  return (
    <Layout
      title="Modeling Portfolio Photography Phoenix | CMQ Headshots"
      description="Professional modeling headshots and portfolio photography in Phoenix, Arizona. Comp cards, agency submissions, and portfolio images for commercial, fashion, and fitness models."
      canonical="https://www.cmqheadshots.com/modeling-headshots-phoenix"
      ogUrl="https://www.cmqheadshots.com/modeling-headshots-phoenix"
    >
      <Head>
        <meta name="robots" content="noindex, nofollow" />
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

      <FAQSchema faqs={modelingFAQs.map(f => ({ question: f.question, answer: f.answer }))} />

      {/* Hero Section */}
      <section className="relative" style={{ height: '100vh', minHeight: '600px', maxHeight: '800px' }}>
        {/* Desktop Background Image */}
        <div className="hidden lg:block absolute inset-0">
          <Image
            src="https://images.cmqheadshots.com/images/website%20media/CMQHeadshots-Modelling%20Photography-ashley.webp"
            alt="Professional modeling portfolio photography in Phoenix"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Mobile Background Image */}
        <div className="lg:hidden absolute inset-0">
          <Image
            src="https://images.cmqheadshots.com/images/website%20media/CMQHeadshots-Modelling%20Photography-ashley.webp"
            alt="Professional modeling portfolio photography in Phoenix"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content - ONE H1 */}
        <div className="relative h-full flex flex-col justify-end lg:justify-center lg:items-center pb-16 lg:pb-0 px-6 lg:px-4 text-center">
          <div className="w-full">
            <h1 className="font-raleway text-4xl lg:text-6xl xl:text-7xl leading-tight mb-8" style={{
              color: '#ffffff',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)'
            }}>
              <span className="font-medium" style={{ fontWeight: '500' }}>MODELING PORTFOLIO</span><br />
              <span className="font-light" style={{ fontWeight: '300' }}>PHOTOGRAPHY</span>
            </h1>
            <p className="font-raleway text-lg lg:text-xl max-w-2xl mx-auto mb-8" style={{
              color: '#ffffff',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)',
              fontWeight: '400',
              lineHeight: '1.6'
            }}>
              Build a portfolio that gets you noticed by agencies and casting directors
            </p>
            <GetPricingButton href="/contact-us" size="large" trackingLabel="modeling_hero_cta">
              BOOK YOUR SESSION
            </GetPricingButton>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-6" style={{ color: '#5577a5' }}>
              <span className="font-medium">PHOENIX</span>{' '}
              <span className="font-normal">MODELING HEADSHOTS</span>
            </h2>
            <p className="font-raleway text-xl font-normal" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7'
            }}>
              Your agent will advise you to hire a professional photographer for your modeling images. I can help answer any questions regarding what your agent is looking for in your modeling headshots. Whether you&apos;re building your first portfolio or updating your comp card, I&apos;ll create images that showcase your range and versatility. From commercial to fashion, fitness to lifestyle — every session is tailored to the work you want to book.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <TwoColumnSection
        title={
          <>
            <span className="font-medium">EVERY SESSION</span>{' '}
            <span className="font-normal">INCLUDES</span>
          </>
        }
        description="Pre-session consultation to plan your looks and wardrobe. Professional lighting and studio backdrop options. Expert posing and expression coaching throughout your session. High-resolution retouched images for print and web. Multiple outfit changes to show your range. Images formatted for agency submissions, comp cards, and online casting profiles."
        ctaText="GET PRICING"
        ctaLink="/contact-us"
        imageUrl="https://images.cmqheadshots.com/images/Caroline%20West%20Portraits10220.jpg"
        imageAlt="Professional modeling headshot session Phoenix"
        backgroundColor="#F1F1F1"
        reverseColumns={false}
        textSize="medium"
        ctaSize="large"
        objectFit="cover"
        minHeight="650"
        mobileStackOrder="image-first"
      />

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
                <p className="font-raleway text-lg font-normal" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.6' }}>
                  Clean, approachable images for advertising, catalog, and print work. These images sell products and services — they need to be relatable and professional.
                </p>
              </div>
              <div>
                <h3 className="font-raleway text-xl font-medium mb-3" style={{ color: '#5577a5' }}>Fashion Modeling</h3>
                <p className="font-raleway text-lg font-normal" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.6' }}>
                  Editorial and high-fashion looks that showcase your ability to embody a mood, style, or brand. Bold lighting and creative direction to make you stand out.
                </p>
              </div>
              <div>
                <h3 className="font-raleway text-xl font-medium mb-3" style={{ color: '#5577a5' }}>Fitness Modeling</h3>
                <p className="font-raleway text-lg font-normal" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.6' }}>
                  Athletic and fitness-focused images that highlight your physique and energy. Perfect for fitness brands, supplements, and athletic wear campaigns.
                </p>
              </div>
              <div>
                <h3 className="font-raleway text-xl font-medium mb-3" style={{ color: '#5577a5' }}>Comp Cards</h3>
                <p className="font-raleway text-lg font-normal" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.6' }}>
                  The industry-standard calling card for models. I&apos;ll create a variety of looks — headshot, full body, casual, and styled — that agencies require for submissions.
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
              With 12+ years of experience photographing models in Phoenix, I understand what agencies are looking for. I&apos;ll coach you through every pose and expression to bring out your best angles. My studio offers multiple backdrop options and professional lighting setups to create the variety your portfolio needs. You&apos;ll leave with images that are ready for agency submissions, casting calls, and online profiles.
            </p>
            <GetPricingButton href="/contact-us" size="large" trackingLabel="modeling_why_choose_cta">
              SCHEDULE YOUR SESSION
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
          <p className="font-raleway text-3xl lg:text-4xl font-medium mb-4 uppercase" style={{ fontWeight: '500', color: '#ffffff' }}>
            READY TO BUILD YOUR PORTFOLIO?
          </p>
          <p className="font-raleway text-xl font-normal mb-8 text-white" style={{
            fontWeight: '400',
            letterSpacing: '0.03em',
            lineHeight: '1.6'
          }}>
            Let&apos;s create modeling images that get you booked.
          </p>
          <GetPricingButton href="/contact-us" size="xl" className="border-2 border-white">
            BOOK YOUR SESSION TODAY
          </GetPricingButton>
        </div>
      </section>

    </Layout>
  )
}
