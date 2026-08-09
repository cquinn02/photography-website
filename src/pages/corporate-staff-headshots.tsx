import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
import SplitHero from '@/components/sections/SplitHero'
import LogoCarousel from '@/components/sections/LogoCarousel'
import FourImageRow from '@/components/sections/FourImageRow'
import { Star } from 'lucide-react'

const FourStepProcessDrift = dynamic(() => import('@/components/sections/FourStepProcessDrift'))
const AccordionFAQSection = dynamic(() => import('@/components/sections/AccordionFAQSection'))
const ThreeReviewSection = dynamic(() => import('@/components/sections/ThreeReviewSection'))

export default function CorporateStaffV2() {
  const corporateFAQs = [
    {
      id: 1,
      question: "How much do corporate staff headshots cost?",
      answer: "Pricing depends on the number of employees and whether you need on-location or studio sessions. Contact me for a custom quote based on your team size and needs."
    },
    {
      id: 2,
      question: "Can you come to our office for staff headshots?",
      answer: "Yes! I bring my full studio setup to your office in Phoenix, Scottsdale, Tempe, or anywhere in the Valley. On-location sessions mean less downtime for your staff. Each person typically needs just 10-15 minutes."
    },
    {
      id: 3,
      question: "How long does a corporate headshot session take?",
      answer: "Individual sessions take about 10-15 minutes per person. For a team of 20, plan for about half a day. I work efficiently so your team can get back to work quickly."
    },
    {
      id: 4,
      question: "What should employees wear to their headshot session?",
      answer: "I provide a style guide to share with your team before the session. Generally, solid colors in business or business-casual attire work best. Avoid busy patterns, large logos, and bright white shirts."
    },
    {
      id: 5,
      question: "How do you ensure consistency across all staff headshots?",
      answer: "I use the same lighting setup, background, and camera settings for every person. This ensures a cohesive look across your entire team page, whether I photograph everyone in one day or over multiple sessions."
    },
    {
      id: 6,
      question: "When will we receive the final images?",
      answer: "Final retouched images are delivered within 7 business days. Each person selects their favorite image, which is then professionally edited. Rush delivery is available for an additional fee."
    },
    {
      id: 7,
      question: "Can you photograph new hires separately and match the existing style?",
      answer: "Absolutely. I keep notes on the lighting and background used for your team so new hires match perfectly with existing staff headshots, even months later."
    },
    {
      id: 8,
      question: "Do you offer headshots for multiple office locations?",
      answer: "Yes, I regularly work with companies that have offices across the Phoenix metro area. I can visit each location to photograph staff, ensuring consistent results across all sites."
    }
  ]
  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById('request-quote')
    if (element) {
      const yOffset = -150 // Offset to show the title at top with more space
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <Layout
      title="Corporate Headshots Phoenix | 139+ Five-Star Reviews | CMQ Headshots"
      description="I bring the studio to your Phoenix office. Consistent corporate headshots for teams of 5 to 50, about 10 minutes per person. 139+ five-star reviews. Get a quote."
      canonical="https://www.cmqheadshots.com/corporate-staff-headshots"
      ogUrl="https://www.cmqheadshots.com/corporate-staff-headshots"
      ogImage="https://images.cmqheadshots.com/images/website%20media/optimized/corporate-headshot-phoenix-hero-1280w.webp"
      showHeaderButton={true}
    >
      {/* Service Schema + BreadcrumbList */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Corporate Staff Headshots Phoenix",
            "image": "https://images.cmqheadshots.com/images/website%20media/optimized/corporate-headshot-phoenix-hero-1280w.webp",
            "description": "Professional corporate staff headshot photography in Phoenix, Arizona. On-site team photography with consistent lighting and backgrounds for your entire staff.",
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
              { "@type": "City", "name": "Phoenix", "sameAs": "https://en.wikipedia.org/wiki/Phoenix,_Arizona" },
              { "@type": "City", "name": "Scottsdale", "sameAs": "https://en.wikipedia.org/wiki/Scottsdale,_Arizona" },
              { "@type": "City", "name": "Tempe", "sameAs": "https://en.wikipedia.org/wiki/Tempe,_Arizona" }
            ],
            "serviceType": "Corporate Staff Headshot Photography",
            "offers": {
              "@type": "Offer",
              "price": "250",
              "priceCurrency": "USD",
              "description": "Corporate staff headshot session: $250 session fee plus $100 per edited image. On-site sessions available for teams.",
              "url": "https://www.cmqheadshots.com/corporate-staff-headshots",
              "availability": "https://schema.org/InStock"
            },
            "url": "https://www.cmqheadshots.com/corporate-staff-headshots"
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
                "name": "Corporate Staff Headshots",
                "item": "https://www.cmqheadshots.com/corporate-staff-headshots"
              }
            ]
          }) }}
        />
      </Head>

      {/* Split Hero — dark linen text panel left, image 2/3 right (chosen 2026-08-08) */}
      <SplitHero imageLeft={false} panelBg="dark-grey" centered={true} layout="two-thirds" quoteHref="#request-quote" />

      {/* Two Column Section */}
      <TwoColumnSection
        title={
          <>
            <span className="font-medium">CORPORATE PHOTOGRAPHER</span> <span className="font-normal">PHOENIX</span>
          </>
        }
        description="Corporate headshots in Phoenix for your entire staff, photographed on-location at your office or in my studio. You know your company needs staff headshots but you honestly don&apos;t want to deal with the hassle. The scheduling nightmare, the cost, the time away from work - it&apos;s so much.

I understand your need and can make it happen for you without all the hassle. I have my routine down. Whether your staff comes to me or I come to your location, you&apos;ll be pleasantly surprised at how quick and easy it is! I handle group corporate headshots for teams of any size, from a small office of five to a company of fifty. Every person gets the same professional lighting, background, and direction so your website looks consistent and polished."
        ctaText="GET QUOTE"
        ctaLink="#request-quote"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/jgp2-square-collage-3-2048x2048.webp"
        imageAlt="Corporate team headshots"
        backgroundColor="#ffffff"
        columnRatio="1-1"
        minHeight="650"
        titleTag="h2"
      />

      {/* Company Logos Carousel Section */}
      <LogoCarousel
        title="TRUSTED BY LEADING COMPANIES"
        subtitle="I have provided professional headshots for staff members across various industries"
        speed={40}
        rowCount={2}
        pauseOnHover={true}
      />

      {/* Client Reviews Section */}
      <ThreeReviewSection
        reviews={[
          {
            image: "https://images.cmqheadshots.com/images/website%20media/cmqheadshots-sales-headshotsa-1017b.webp",
            imageAlt: "Corporate headshot client Megan Baez",
            name: "MEGAN BAEZ",
            review: "We used Cindy Quinn for our corporate headshots and she did not disappoint! The pictures were exceptional and exactly what we were looking for. She was able to take our headshots over a two-day span. We created a Wall of Fame to recognize our team. We also really liked the fact that Cindy has her own studio so we can send our new hires to her to make sure the headshots all match going forward.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/3P3033.jpg",
            imageAlt: "Corporate headshot client Molly Smith",
            name: "MOLLY SMITH",
            review: "Cindy was wonderful to work with! She was so patient and made our team feel at ease. We were very pleased with her professionalism, our experience and of course, the images! Highly recommend.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/Annie%20Talbor6159.jpg",
            imageAlt: "Corporate headshot client Annie Talbot",
            name: "ANNIE TALBOT",
            review: "We hired Cindy Quinn to do our company\u2019s professional headshots and she was absolutely incredible! She was very communicative and set clear expectations from the get go. The day of she was flexible and made every employee feel comfortable. She helped pose employees and worked with them until they got the perfect shot. I would absolutely recommend her to any company looking for quality, professional headshots.",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        textColor="white"
      />

      {/* Big 4 Image Section with Title Below */}
      <section className="text-center" style={{ backgroundColor: '#ffffff' }}>
        <FourImageRow
          images={[
            { src: 'https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-Bob-0621-headshot-optimized.webp', alt: 'Professional staff headshot Phoenix - male executive', title: 'Phoenix staff headshot photography' },
            { src: 'https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-Lauren-0763-fullres-optimized.webp', alt: 'Corporate staff headshot Scottsdale - female professional', title: 'Scottsdale corporate headshots' },
            { src: 'https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-Brayley-0718-fullres-optimized.webp', alt: 'Business headshot Phoenix Arizona - professional woman', title: 'Arizona business headshot photographer' },
            { src: 'https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-Cody-0575-fullres-optimized.webp', alt: 'Team headshot photography Phoenix - male employee', title: 'Phoenix team headshot services' }
          ]}
          backgroundColor="transparent"
          fullWidth={true}
        />
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-2xl lg:text-3xl mb-2" style={{ color: '#5577a5' }}>
              <span style={{ fontWeight: '500' }}>CORPORATE STAFF</span> <span style={{ fontWeight: '400' }}>HEADSHOTS</span>
            </h2>
            <p className="font-raleway text-lg mb-0" style={{ color: '#000000', lineHeight: '1.6', letterSpacing: '0.03em' }}>
              Professional staff headshots that capture your team&apos;s personality and professionalism. From <Link href="/phoenix-business-headshots" className="underline hover:no-underline" style={{ color: '#5577a5' }}>executives</Link> to entry-level employees, every member of your organization deserves a polished, consistent look. Each image is delivered in multiple sizes for your company website, <Link href="/linkedin-headshots" className="underline hover:no-underline" style={{ color: '#5577a5' }}>LinkedIn profiles</Link>, email signatures, and business cards.
            </p>
          </div>
        </div>
      </section>

      {/* Team Composite CTA Section */}
      <section className="py-16 text-center" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-6" style={{ color: '#5577a5' }}>
              <span className="font-medium">CORPORATE TEAM</span>{' '}<span className="font-normal">COMPOSITES</span>
            </h2>
            <p className="font-raleway text-xl text-black mb-8" style={{ lineHeight: '1.6' }}>
              I offer flexible composite team photography. Perfect for fast-growing businesses. Add or remove staff easily without expensive group reshoots.
            </p>
            <Link
              href="/team-composite-headshots"
              className="font-raleway font-normal inline-flex items-center justify-center text-center transition-all duration-300 rounded-lg uppercase tracking-wide text-white border shadow-lg px-8 py-4 text-lg"
              style={{
                fontWeight: '400',
                backgroundColor: '#5577a5',
                borderColor: '#5577a5',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#575757'
                e.currentTarget.style.borderColor = '#ffffff'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5577a5'
                e.currentTarget.style.borderColor = '#5577a5'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              Learn About Team Composites
            </Link>
          </div>
        </div>
      </section>

      {/* New SEO Section 1: Team Branding */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-6" style={{ color: '#5577a5' }}>
              <span className="font-medium">MODERN CORPORATE</span> <span className="font-normal">HEADSHOTS</span>
            </h2>
            <p className="font-raleway text-xl mb-6" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
              Today&apos;s companies want more than traditional corporate headshots. Many of our clients are focused on showing the personality, culture, and values behind their teams.
            </p>
            <p className="font-raleway text-xl mb-6" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
              We create natural, candid, and environmental portraits that help your organization feel approachable and modern while still maintaining a professional look. These images work beautifully for websites, social media, recruiting, and internal communication.
            </p>
            <p className="font-raleway text-xl mb-8" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
              This approach is especially popular with growing companies, startups, and marketing-focused organizations. If you&apos;re interested, we can combine classic headshots with candid team photography in the same session. For individuals who need their own session, check out our <Link href="/phoenix-business-headshots" className="underline hover:no-underline" style={{ color: '#5577a5' }}>business headshot sessions</Link>.
            </p>
            <a
              href="#request-quote"
              onClick={scrollToQuote}
              className="font-raleway font-normal inline-flex items-center justify-center text-center transition-all duration-300 rounded-lg uppercase tracking-wide text-white border shadow-lg cursor-pointer px-8 py-4 text-lg"
              style={{
                fontWeight: '400',
                backgroundColor: '#5577a5',
                borderColor: '#5577a5',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#575757'
                e.currentTarget.style.borderColor = '#ffffff'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5577a5'
                e.currentTarget.style.borderColor = '#5577a5'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              GET QUOTE
            </a>
          </div>
        </div>
      </section>

      {/* New SEO Section 2: Ongoing Programs */}
      <section className="py-16" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-6" style={{ color: '#ffffff' }}>
              <span className="font-medium">ONBOARDING AND</span> <span className="font-normal">NEW HIRE HEADSHOTS</span>
            </h2>
            <p className="font-raleway text-xl mb-6" style={{ color: '#ffffff', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
              Many of our clients begin with a single session and continue working with us as their teams grow. This ensures consistency and saves time as new employees join your organization.
            </p>
            <p className="font-raleway text-xl mb-8" style={{ color: '#ffffff', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
              We offer flexible programs for new hire and onboarding headshots, leadership updates, and annual or quarterly refresh sessions. This creates a long-term visual strategy and keeps your branding consistent as your company evolves.
            </p>
            <Link
              href="/contact-us"
              className="font-raleway font-normal inline-flex items-center justify-center text-center transition-all duration-300 rounded-lg uppercase tracking-wide text-white border shadow-lg cursor-pointer px-8 py-4 text-lg"
              style={{
                fontWeight: '400',
                backgroundColor: '#5577a5',
                borderColor: '#5577a5',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#575757'
                e.currentTarget.style.borderColor = '#ffffff'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5577a5'
                e.currentTarget.style.borderColor = '#5577a5'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* New SEO Section 3: Multi-Location */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-6" style={{ color: '#5577a5' }}>
              <span className="font-medium">MULTI-LOCATION</span> <span className="font-normal">HEADSHOT SESSIONS</span>
            </h2>
            <p className="font-raleway text-xl mb-6" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
              For companies with multiple offices, consistency is essential. We regularly coordinate multi-day and multi-location headshot sessions to ensure your brand looks cohesive across every team.
            </p>
            <p className="font-raleway text-xl mb-8" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
              We manage scheduling, communication, and logistics so your organization presents a unified, professional image across all locations.
            </p>
            <a
              href="#request-quote"
              onClick={scrollToQuote}
              className="font-raleway font-normal inline-flex items-center justify-center text-center transition-all duration-300 rounded-lg uppercase tracking-wide text-white border shadow-lg cursor-pointer px-8 py-4 text-lg"
              style={{
                fontWeight: '400',
                backgroundColor: '#5577a5',
                borderColor: '#5577a5',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#575757'
                e.currentTarget.style.borderColor = '#ffffff'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5577a5'
                e.currentTarget.style.borderColor = '#5577a5'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              GET QUOTE
            </a>
          </div>
        </div>
      </section>

      {/* New SEO Section 4: Employer Branding */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-6" style={{ color: '#5577a5' }}>
              <span className="font-medium">EMPLOYER BRANDING</span> <span className="font-normal">PHOTOGRAPHY</span>
            </h2>
            <p className="font-raleway text-xl mb-6" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
              Strong visuals play an important role in attracting and retaining great employees. In addition to headshots, we create workplace and team imagery that supports recruiting, marketing, and employer branding.
            </p>
            <p className="font-raleway text-xl mb-8" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
              These sessions can include environmental portraits, leadership imagery, and natural workplace photography that reflects your company culture.
            </p>
            <a
              href="#request-quote"
              onClick={scrollToQuote}
              className="font-raleway font-normal inline-flex items-center justify-center text-center transition-all duration-300 rounded-lg uppercase tracking-wide text-white border shadow-lg cursor-pointer px-8 py-4 text-lg"
              style={{
                fontWeight: '400',
                backgroundColor: '#5577a5',
                borderColor: '#5577a5',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#575757'
                e.currentTarget.style.borderColor = '#ffffff'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5577a5'
                e.currentTarget.style.borderColor = '#5577a5'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              GET QUOTE
            </a>
          </div>
        </div>
      </section>

      {/* 4 Step Process Section with Drift Animation */}
      <FourStepProcessDrift
        backgroundColor="#575757"
        title="HOW NEW HIRE HEADSHOTS WORK"
        subtitle="Did a staff member miss the headshot event? Did you hire a new employee after the headshot session? I made a process to fix this that is quick and easy."
      />

      {/* Corporate Headshots Near Me Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#5577a5' }}>
              <span className="font-medium">CORPORATE HEADSHOTS</span>{' '}
              <span className="font-normal">NEAR ME</span>
            </h2>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#000000'
            }}>
              My Phoenix studio is easy to get to from anywhere in the Valley, and I&apos;m the go-to choice for corporate headshots in Scottsdale, Tempe, Mesa, Chandler, Gilbert, and the entire East Valley. I also bring my full studio setup to your office for on-location corporate headshot sessions, so your team doesn&apos;t have to leave the building. Whether you need corporate and business photography in Phoenix for a rebrand or just updated staff photos, I&apos;ve got you covered. With 139+ five-star Google reviews and over 14 years of experience, you won&apos;t find a more trusted corporate headshot photographer near you.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AccordionFAQSection
        title="Corporate Headshot FAQs"
        subtitle="Common questions about corporate team photography in Phoenix"
        faqs={corporateFAQs}
        backgroundColor="#F1F1F1"
      />

      {/* Contact Form Section */}
      <section id="request-quote" className="py-16" style={{ backgroundColor: '#D0D0D0', scrollMarginTop: '150px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="font-raleway text-3xl lg:text-4xl font-medium mb-4 uppercase" style={{ color: '#5577a5', fontWeight: '500' }}>
                Request a Quote
              </p>
              <p className="font-raleway text-xl" style={{ color: '#5577a5' }}>
                Fill in as much information as possible for an accurate quote
              </p>
            </div>
            <iframe
              name="lc_contact_form"
              frameBorder="0"
              width="100%"
              height="600"
              src="https://537178.17hats.com/p#/embed/gttwshbvskvcgtfvsxskwkchdbgtbphg"
            ></iframe>
            <Script
              src="https://537178.17hats.com/vendor/iframeSizer.min.js"
              strategy="lazyOnload"
            />
          </div>
        </div>
      </section>

    </Layout>
  )
}