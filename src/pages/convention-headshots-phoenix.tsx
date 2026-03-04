import Layout from '@/components/Layout'
import Link from 'next/link'
import Head from 'next/head'
import GetPricingButton from '@/components/GetPricingButton'
import AccordionFAQSection from '@/components/sections/AccordionFAQSection'
import ThreeReviewSection from '@/components/sections/ThreeReviewSection'
import FAQSchema from '@/components/FAQSchema'

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

  return (
    <>
      <Layout
        title="Convention Headshots Phoenix AZ | Conference & Event Headshot Photographer | CMQ Headshots"
        description="Professional convention and conference headshots in Phoenix, AZ. On-site headshot photography for trade shows, corporate events, and conferences. Fast turnaround. Book your event today."
        canonical="https://www.cmqheadshots.com/convention-headshots-phoenix"
        ogUrl="https://www.cmqheadshots.com/convention-headshots-phoenix"
        showHeaderContact={false}
      >
      {/* FAQ Schema for AI Visibility */}
      <FAQSchema faqs={conventionFAQs.map(faq => ({ question: faq.question, answer: faq.answer }))} />

      {/* Service Schema + BreadcrumbList for Convention Headshots */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Convention Headshots Phoenix AZ",
            "description": "Professional on-site headshot photography for conventions, conferences, trade shows, and corporate events in Phoenix, Arizona. High-volume headshots with same-day digital delivery.",
            "provider": {
              "@type": "LocalBusiness",
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

      {/* Hero Section with Placeholder Images */}
      <section className="relative" style={{ backgroundColor: '#5577a5' }}>
        {/* Four Headshots Row - Placeholder */}
        <div className="relative">
          <div className="grid grid-cols-4 w-full">
            {/* TODO: Replace with convention headshot image 1 */}
            <div className="relative aspect-[4/5] bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-raleway text-center px-2">Convention Headshot 1</span>
            </div>
            {/* TODO: Replace with convention headshot image 2 */}
            <div className="relative aspect-[4/5] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-raleway text-center px-2">Convention Headshot 2</span>
            </div>
            {/* TODO: Replace with convention headshot image 3 */}
            <div className="relative aspect-[4/5] bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-raleway text-center px-2">Convention Headshot 3</span>
            </div>
            {/* TODO: Replace with convention headshot image 4 */}
            <div className="relative aspect-[4/5] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-raleway text-center px-2">Convention Headshot 4</span>
            </div>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="relative py-12" style={{
          backgroundColor: '#575757',
          backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto'
        }}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl" style={{ color: 'white' }}>
              <span className="font-bold" style={{ color: 'white' }}>CONVENTION HEADSHOTS</span><br />
              <span className="font-normal" style={{ color: 'white' }}>PHOENIX, AZ</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#5577a5' }}>
              <span className="font-bold">PROFESSIONAL HEADSHOTS</span> <span className="font-normal">AT YOUR EVENT</span>
            </h2>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              Phoenix is one of the top convention destinations in the country, and every year thousands of professionals attend trade shows, conferences, and corporate events across the Valley. Offering on-site professional headshots at your event gives attendees something they actually value — a polished, professional image they can use immediately.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              I bring a complete, self-contained headshot studio directly to your venue. Professional lighting, clean backdrops, and expert direction — everything your attendees need to walk away with a great headshot. The experience is fast, fun, and requires zero preparation from the people in line. I handle everything.
            </p>

            <p className="font-raleway text-xl font-normal mb-8" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              Whether you&apos;re an event planner adding value for attendees, a company hosting a conference, or a trade show booth looking to drive foot traffic, professional headshots are one of the most effective engagement tools available. People will stand in line for a free headshot — and they&apos;ll remember who provided it.
            </p>

            <GetPricingButton href="/contactus" size="large">
              GET A QUOTE
            </GetPricingButton>
          </div>
        </div>
      </section>

      {/* Four Images Section - Placeholder Row on Blue */}
      <section className="relative" style={{ backgroundColor: '#5577a5' }}>
        <div className="relative">
          <div className="grid grid-cols-4 w-full">
            {/* TODO: Replace with convention headshot image 5 */}
            <div className="relative aspect-[4/5] bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-raleway text-center px-2">Convention Headshot 5</span>
            </div>
            {/* TODO: Replace with convention headshot image 6 */}
            <div className="relative aspect-[4/5] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-raleway text-center px-2">Convention Headshot 6</span>
            </div>
            {/* TODO: Replace with convention headshot image 7 */}
            <div className="relative aspect-[4/5] bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-raleway text-center px-2">Convention Headshot 7</span>
            </div>
            {/* TODO: Replace with convention headshot image 8 */}
            <div className="relative aspect-[4/5] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-raleway text-center px-2">Convention Headshot 8</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-4xl font-bold mb-8" style={{ color: '#5577a5' }}>
              HOW IT WORKS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Card 1 - We Set Up */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                I SET UP AT YOUR VENUE
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                I arrive early and set up a complete, self-contained headshot studio at your event space. All I need is a 10x10 foot area and a power outlet.
              </p>
            </div>

            {/* Card 2 - Attendees Walk Up */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                ATTENDEES WALK UP
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                No appointments needed. Attendees simply walk up, step in front of the camera, and get a professional headshot in minutes.
              </p>
            </div>

            {/* Card 3 - Quick Session */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                3-5 MINUTES PER PERSON
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Each person gets expert direction on posing and expression. The session is fast but thorough — no one walks away with a bad headshot.
              </p>
            </div>

            {/* Card 4 - Professional Lighting */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                PROFESSIONAL LIGHTING
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Studio-quality lighting that flatters every skin tone and face shape. The results look like they were shot in a professional studio — because they were.
              </p>
            </div>

            {/* Card 5 - Same-Day Delivery */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                SAME-DAY DELIVERY
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Attendees can receive their retouched headshot via email or text the same day — sometimes before they even leave the event.
              </p>
            </div>

            {/* Card 6 - Branded Backdrops */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                BRANDED BACKDROPS
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Add your company logo or brand colors to the backdrop. A custom step-and-repeat banner turns every headshot into branded marketing.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Offer Headshots at Your Event */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-bold">WHY OFFER HEADSHOTS</span> <span className="font-normal">AT YOUR EVENT</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  DRIVE BOOTH TRAFFIC
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  If you&apos;re exhibiting at a trade show, a headshot station is one of the most effective ways to pull people into your booth. Attendees will wait in line for a professional headshot — and while they&apos;re waiting, your team has a captive audience. It&apos;s a natural conversation starter that creates real engagement, not just a badge scan.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  ADD REAL VALUE FOR ATTENDEES
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  Conference swag ends up in the trash. A professional headshot is something people actually use. Attendees will update their LinkedIn profile, email signature, and company bio with their new headshot — and they&apos;ll associate that value with your event or brand. It&apos;s a takeaway that keeps working long after the event ends.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  SOCIAL MEDIA AMPLIFICATION
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  People share their new headshots. When attendees post their professional photo to LinkedIn or Instagram and tag your event, that&apos;s organic social proof reaching their entire network. It extends your event&apos;s reach without spending a dollar on advertising.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  SPONSOR AND PARTNERSHIP OPPORTUNITY
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  Headshot stations make excellent sponsorship activations. A sponsor can brand the backdrop, include their logo on the digital delivery, and claim the experience as their own. It&apos;s a high-visibility, high-value perk that sponsors love because it creates direct engagement with attendees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Events We Cover */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-bold">TYPES OF EVENTS</span> <span className="font-normal">I COVER</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  TRADE SHOWS & EXPOS
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  From the Phoenix Convention Center to the Scottsdale resorts, I&apos;ve photographed headshots at trade shows across the Valley. A headshot station draws consistent booth traffic and gives exhibitors a reason to connect with attendees beyond the usual handshake-and-brochure routine.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  CORPORATE CONFERENCES
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  Company-wide meetings, leadership summits, annual conferences — these are perfect opportunities to offer professional headshots as a perk for your team. Everyone gets updated photos, the company gets brand-consistent imagery, and it takes minutes per person.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  ASSOCIATION & INDUSTRY MEETINGS
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  Professional associations, industry groups, and networking organizations often offer headshots as a member benefit at their events. It&apos;s a practical value-add that members appreciate far more than another panel discussion.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  COMPANY EVENTS & NETWORKING MIXERS
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  Holiday parties, team-building events, company kickoffs, networking happy hours — a headshot station adds a professional touch to any corporate gathering. People love it because they walk away with something useful, and it creates natural energy and engagement at the event.
                </p>
              </div>
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
              I arrive well before your event starts to set up the headshot station. Setup takes about 30 minutes and is completely self-contained — professional lighting, backdrop, camera, and tethering equipment. All I need from you is a 10x10 foot space and a standard power outlet.
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

            <GetPricingButton href="/contactus" size="large">
              PLAN YOUR EVENT
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

      {/* FAQ Section */}
      <AccordionFAQSection
        title="CONVENTION HEADSHOT QUESTIONS"
        subtitle="Get answers to the most common questions about event headshot photography"
        faqs={conventionFAQs}
        backgroundColor="white"
        textColor="#5577a5"
      />

      {/* Final CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl lg:text-4xl mb-6" style={{ color: '#5577a5' }}>
            <span className="font-bold">PLANNING AN EVENT</span> <span className="font-normal">IN PHOENIX?</span>
          </h2>
          <p className="font-raleway text-xl font-normal mb-8 max-w-2xl mx-auto" style={{
            fontWeight: '400',
            letterSpacing: '0.03em',
            lineHeight: '1.7',
            color: '#575757'
          }}>
            Let&apos;s talk about adding professional headshots to your next convention, conference, or corporate event. Every event is different, so <Link href="/contactus" className="underline hover:no-underline" style={{ color: '#5577a5' }}>contact me</Link> for a custom quote.
          </p>
          <GetPricingButton href="/contactus" size="large">
            GET A QUOTE
          </GetPricingButton>
        </div>
      </section>

      </Layout>
    </>
  )
}