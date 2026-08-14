import Layout from '@/components/Layout'
import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
import LogoCarousel from '@/components/sections/LogoCarousel'
import FourImageRow from '@/components/sections/FourImageRow'

const AccordionFAQSection = dynamic(() => import('@/components/sections/AccordionFAQSection'))
const ThreeReviewSection = dynamic(() => import('@/components/sections/ThreeReviewSection'))

export default function ConventionHeadshots() {
  const conventionFAQs = [
    {
      id: 1,
      question: "How much space do you need for an on-site setup?",
      answer: "I need a minimum of 10x10 feet for a basic headshot setup — backdrop, lighting, and a small area for the subject. A 10x15 foot space is ideal and allows for a more comfortable flow. I bring everything self-contained, so all I need from you is the space and a standard power outlet."
    },
    {
      id: 2,
      question: "How many headshots can you photograph per hour?",
      answer: "Depending on the setup and turnaround requirements, I can photograph 12-20 people per hour for quick professional headshots. Each person gets individual attention — posing direction, lighting adjustments, and multiple shots to ensure a great result."
    },
    {
      id: 3,
      question: "Do attendees get their photos the same day?",
      answer: "Yes — same-day digital delivery is available. Attendees can receive their retouched headshot via email or text within hours of their session, sometimes even before they leave the event. Turnaround options depend on volume and are discussed during the planning process."
    },
    {
      id: 4,
      question: "What equipment do you bring?",
      answer: "I bring a complete, self-contained professional setup: studio-quality lighting, professional backdrop system, camera and tethering equipment, and a laptop for real-time image review. Everything is portable and designed for quick setup and teardown in event environments."
    },
    {
      id: 5,
      question: "Can we brand the backdrop with our company logo?",
      answer: "Absolutely. Custom branded backdrops are a popular option for corporate events and trade shows. You can provide a step-and-repeat banner with your logo, or I can work with solid color backdrops that match your brand colors. We discuss branding options during the planning phase."
    },
    {
      id: 6,
      question: "How far in advance should we book?",
      answer: "I recommend booking at least 4-6 weeks in advance for convention and event headshots, especially during peak conference season (January through April in Phoenix). Popular dates fill up quickly, so the earlier you reach out, the better."
    },
    {
      id: 7,
      question: "Do you travel to venues outside Phoenix?",
      answer: "Yes, I travel throughout the Phoenix metro area and beyond. Scottsdale, Tempe, Mesa, Chandler, Glendale — anywhere in the Valley. For venues outside the metro area, travel fees may apply. Contact me with your event details and I will provide a custom quote."
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
      title="Convention Headshots Phoenix AZ | Conference & Event Headshot Photographer | CMQ Headshots"
      description="Convention and conference headshots in Phoenix, AZ. On-site photography for trade shows and corporate events. Fast turnaround. Book today."
      canonical="https://www.cmqheadshots.com/convention-headshots-phoenix"
      ogUrl="https://www.cmqheadshots.com/convention-headshots-phoenix"
      ogImage="https://images.cmqheadshots.com/images/website%20media/optimized/BTS-at-Kierland-corporate-hero-1920w.webp"
      showHeaderButton={true}
      noindex={true}
    >
      {/* Service Schema + BreadcrumbList for Convention Headshots */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Convention Headshots Phoenix AZ",
            "image": "https://images.cmqheadshots.com/images/website%20media/optimized/BTS-at-Kierland-corporate-hero-1920w.webp",
            "description": "Professional on-site headshot photography for conventions, conferences, trade shows, and corporate events in Phoenix, Arizona. High-volume headshots with same-day digital delivery.",
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
            "serviceType": "Convention Headshot Photography",
            "url": "https://www.cmqheadshots.com/convention-headshots-phoenix"
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
                "name": "Convention Headshots Phoenix",
                "item": "https://www.cmqheadshots.com/convention-headshots-phoenix"
              }
            ]
          }) }}
        />
      </Head>

      {/* Hero Section - Single responsive section */}
      {/* TODO (Cindy): swap both hero images for a convention/event BTS shot — corporate BTS is a stand-in */}
      <section className="relative" style={{ height: '100vh', minHeight: '600px', maxHeight: '800px' }}>
        {/* Single picture element — browser downloads only the matching source */}
        <div className="absolute inset-0">
          <picture>
            <source
              media="(max-width: 1023px)"
              srcSet="https://images.cmqheadshots.com/images/website%20media/BTS-corporate-mobile.webp"
            />
            <img
              src="https://images.cmqheadshots.com/images/website%20media/optimized/BTS-at-Kierland-corporate-hero-1920w.webp"
              alt="On-location headshot station set up at a Phoenix event venue"
              title="Convention and event headshot photography in Phoenix"
              className="w-full h-full object-cover"
              fetchPriority="high"
              loading="eager"
            />
          </picture>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content - centered on desktop, bottom on mobile */}
        <div className="relative h-full flex flex-col justify-end lg:justify-center lg:items-center pb-16 lg:pb-0 px-6 lg:px-4 text-center" style={{ paddingTop: '60px' }}>
          <div className="w-full">
            <h1 className="font-raleway text-4xl lg:text-6xl xl:text-7xl leading-tight mb-8" style={{
              color: '#ffffff',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)'
            }}>
              <span className="font-medium" style={{ fontWeight: '500' }}>CONVENTION HEADSHOTS</span><br />
              <span className="font-light" style={{ fontWeight: '300' }}>PHOENIX, AZ</span>
            </h1>
            <a
              href="#request-quote"
              onClick={scrollToQuote}
              className="font-raleway font-normal inline-flex items-center justify-center text-center transition-all duration-300 rounded-lg uppercase tracking-wide text-white border shadow-lg cursor-pointer px-8 py-4 !text-[22px]"
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

      {/* Two Column Section */}
      {/* TODO (Cindy): swap imageUrl for a convention/event collage — corporate collage is a stand-in */}
      <TwoColumnSection
        title={
          <>
            <span className="font-bold">PROFESSIONAL HEADSHOTS</span> <span className="font-normal">AT YOUR EVENT</span>
          </>
        }
        description="Phoenix is one of the top convention destinations in the country, and every year thousands of professionals attend trade shows, conferences, and corporate events across the Valley. Offering on-site professional headshots at your event gives attendees something they actually value - a polished, professional image they can use immediately.

I bring a complete, self-contained headshot studio directly to your venue. Professional lighting, clean backdrops, and expert direction. The experience is fast, fun, and requires zero preparation from the people in line. Whether you're an event planner adding value for attendees, a company hosting a conference, or a trade show booth looking to drive foot traffic, professional headshots are one of the most effective engagement tools available."
        ctaText="GET QUOTE"
        ctaLink="#request-quote"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/jgp2-square-collage-3-2048x2048.webp"
        imageAlt="On-site event headshot examples from Phoenix conventions"
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
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-2806-1x1-optimized.webp",
            imageAlt: "Corporate event headshot client testimonial",
            name: "SHAWN WILSON",
            review: "Cindy made the whole experience easy and comfortable. I was nervous going in, but she coached me through every shot. The final images were exactly what I needed for my business profiles.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-LisaS0258-optimized.webp",
            imageAlt: "Conference headshot client testimonial",
            name: "LISA S.",
            review: "I put off getting a professional headshot for years. Cindy made it painless and the results speak for themselves. I use my headshot everywhere now — LinkedIn, my website, business cards.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/cmq-headshots-Anna-scottsdale-headshots-H0622-jp-leg-sqo-optimized.webp",
            imageAlt: "Event headshot client testimonial",
            name: "ANNA H.",
            review: "The quality of Cindy's work is outstanding. She really knows how to bring out the best in people. I highly recommend CMQ Headshots to anyone who needs a professional photo.",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        textColor="white"
      />

      {/* Big 4 Image Section with Title Above */}
      {/* TODO (Cindy): swap these four for headshots taken at conventions/events — studio shots are stand-ins */}
      <section className="text-center" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4 pt-20 pb-0 relative z-10 md:-mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-2xl lg:text-3xl mb-2" style={{ color: '#5577a5' }}>
              <span className="font-bold">CONVENTION & CONFERENCE</span> <span className="font-normal">HEADSHOTS</span>
            </h2>
            <p className="font-raleway text-lg mb-0" style={{ color: '#000000', lineHeight: '1.6', letterSpacing: '0.03em' }}>
              Convention and conference headshots give your attendees a professional image they can use the moment they leave your event. Every person gets studio-quality lighting and expert direction, delivered fast enough to post before the closing keynote. The same setup works for <Link href="/corporate-staff-headshots" className="underline hover:no-underline" style={{ color: '#5577a5' }}>corporate staff sessions</Link> and updated <Link href="/linkedin-headshots" className="underline hover:no-underline" style={{ color: '#5577a5' }}>LinkedIn profiles</Link>.
            </p>
          </div>
        </div>
        <FourImageRow
          images={[
            { src: 'https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-Bob-0621-headshot-optimized.webp', alt: 'Convention headshot Phoenix - male professional', title: 'Phoenix convention headshot photography' },
            { src: 'https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-Lauren-0763-fullres-optimized.webp', alt: 'Conference headshot Phoenix - female professional', title: 'Phoenix conference headshots' },
            { src: 'https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-Brayley-0718-fullres-optimized.webp', alt: 'Trade show headshot Phoenix Arizona - professional woman', title: 'Arizona trade show headshot photographer' },
            { src: 'https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-Cody-0575-fullres-optimized.webp', alt: 'Event headshot photography Phoenix - male attendee', title: 'Phoenix event headshot services' }
          ]}
          backgroundColor="transparent"
          fullWidth={true}
        />
      </section>

      {/* Why Offer Headshots at Your Event */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-bold">WHY OFFER HEADSHOTS</span> <span className="font-normal">AT YOUR EVENT</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  DRIVE BOOTH TRAFFIC
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#000000',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  If you&apos;re exhibiting at a trade show, a headshot station is one of the most effective ways to drive booth traffic. Attendees will wait in line for a professional headshot — and while they&apos;re waiting, your team has a captive audience. It&apos;s a natural conversation starter that creates real engagement, not just a badge scan.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  ADD REAL VALUE FOR ATTENDEES
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#000000',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  Conference swag ends up in the trash. A professional headshot is real value for attendees — something people actually use. They will update their LinkedIn profile, email signature, and company bio with their new headshot, and they&apos;ll associate that value with your event or brand. It&apos;s a takeaway that keeps working long after the event ends.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  SOCIAL MEDIA AMPLIFICATION
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#000000',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  People share their new headshots. When attendees post their professional photo to LinkedIn or Instagram and tag your event, that social media amplification is organic social proof reaching their entire network. It extends your event&apos;s reach without spending a dollar on advertising.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  SPONSOR AND PARTNERSHIP OPPORTUNITY
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#000000',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  Headshot stations make an excellent sponsor and partnership opportunity. A sponsor can brand the backdrop, include their logo on the digital delivery, and claim the experience as their own. It&apos;s a high-visibility, high-value perk that sponsors love because it creates direct engagement with attendees.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
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
        </div>
      </section>

      {/* What to Expect On-Site */}
      <section className="py-16" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#ffffff' }}>
              <span className="font-bold">WHAT TO EXPECT</span> <span className="font-normal">ON-SITE</span>
            </h2>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#ffffff'
            }}>
              Here&apos;s what to expect on-site: I arrive well before your event starts to set up the headshot station. Setup takes about 30 minutes and is completely self-contained — professional lighting, backdrop, camera, and tethering equipment. All I need from you is a 10x10 foot space and a standard power outlet.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#ffffff'
            }}>
              During the event, attendees walk up and get their headshot taken in 3-5 minutes. I direct every person through posing, expression, and positioning — they don&apos;t need to prepare anything. I shoot tethered so I can review images in real time and ensure every person walks away with a great result.
            </p>

            <p className="font-raleway text-xl font-normal mb-8" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#ffffff'
            }}>
              Depending on the package, retouched images can be delivered same-day via email or text. For larger events, delivery may be within 24-48 hours. I work with you to determine the best turnaround for your specific event. At the end of the day, I pack everything up and you&apos;re left with happy attendees and a lot of goodwill.
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
              PLAN YOUR EVENT
            </a>
          </div>
        </div>
      </section>

      {/* Types of Events I Cover */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-bold">TYPES OF EVENTS</span> <span className="font-normal">I COVER</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  TRADE SHOWS & EXPOS
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#000000',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  From the Phoenix Convention Center to the Scottsdale resorts, I&apos;ve photographed headshots at trade shows and expos across the Valley. A headshot station draws consistent booth traffic and gives exhibitors a reason to connect with attendees beyond the usual handshake-and-brochure routine.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  CORPORATE CONFERENCES
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#000000',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  Company-wide meetings, leadership summits, annual corporate conferences — these are perfect opportunities to offer professional headshots as a perk for your team. Everyone gets updated photos, the company gets brand-consistent imagery, and it takes minutes per person.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  ASSOCIATION & INDUSTRY MEETINGS
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#000000',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  Professional associations, industry groups, and networking organizations often offer headshots as a member benefit at their association and industry meetings. It&apos;s a practical value-add that members appreciate far more than another panel discussion.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-medium text-center mb-4" style={{ color: '#5577a5' }}>
                  COMPANY EVENTS & NETWORKING MIXERS
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#000000',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  Holiday parties, team-building events, company kickoffs, networking happy hours — a headshot station adds a professional touch to company events and networking mixers of any size. People love it because they walk away with something useful, and it creates natural energy and engagement at the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AccordionFAQSection
        title="Convention Headshot FAQs"
        subtitle="Common questions about convention and event headshot photography in Phoenix"
        faqs={conventionFAQs}
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
