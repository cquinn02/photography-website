import Layout from '@/components/Layout'
import Link from 'next/link'
import Head from 'next/head'
import GetPricingButton from '@/components/GetPricingButton'
import AccordionFAQSection from '@/components/sections/AccordionFAQSection'
import ThreeReviewSection from '@/components/sections/ThreeReviewSection'
import FAQSchema from '@/components/FAQSchema'

export default function HeadshotBooth() {
  const boothFAQs = [
    {
      id: 1,
      question: "How is a headshot booth different from a photo booth?",
      answer: "A traditional photo booth is about fun — props, filters, silly group photos. A headshot booth is about professional results. I use studio-quality lighting, clean backdrops, and expert posing direction to give every person a polished, usable headshot. The images are real professional headshots, not party snapshots."
    },
    {
      id: 2,
      question: "How many people can you photograph per hour?",
      answer: "I can photograph 12-20 people per hour depending on the setup and delivery requirements. Each person gets individual attention — I direct them through posing, check lighting, and shoot multiple frames to ensure a great result. It's fast but never rushed."
    },
    {
      id: 3,
      question: "How much space does the booth need?",
      answer: "A minimum of 10x10 feet for a basic setup. A 10x15 foot space is ideal and allows for more comfortable flow, especially at high-traffic events. I bring everything self-contained — all I need from you is the floor space and a standard power outlet."
    },
    {
      id: 4,
      question: "Do guests receive their photos immediately?",
      answer: "Same-day digital delivery is available. Depending on the package, guests can receive their retouched headshot via email or text within hours of their session — often before they leave the event. Delivery options are customized based on your event's needs."
    },
    {
      id: 5,
      question: "Can we add our company logo to the backdrop?",
      answer: "Yes! Custom branded backdrops are a popular option. You can provide a step-and-repeat banner with your logo, or I can work with solid color backdrops that complement your brand. We'll discuss branding options when we plan your event."
    },
    {
      id: 6,
      question: "How far in advance should we book?",
      answer: "I recommend booking at least 4-6 weeks in advance, especially during peak season (January through April in Phoenix). Popular dates fill up fast, so the earlier you reach out, the more flexibility we'll have with scheduling."
    },
    {
      id: 7,
      question: "What if our event is outside Phoenix?",
      answer: "I travel throughout the entire Phoenix metro area — Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, and everywhere in between. For venues outside the metro area, travel fees may apply. Contact me with your event details for a custom quote."
    },
    {
      id: 8,
      question: "Can guests choose their own background?",
      answer: "Depending on the setup, I can offer multiple backdrop options for guests to choose from. Solid colors, textured backgrounds, or your branded backdrop — we can discuss the best approach for your specific event during the planning process."
    }
  ]

  return (
    <>
      <Layout
        title="Headshot Booth Phoenix AZ | Professional Headshot Booth for Events | CMQ Headshots"
        description="Professional headshot booth for corporate events, trade shows, and conferences in Phoenix, AZ. Walk-up headshots with fast digital delivery. Branded backdrops available. Book today."
        canonical="https://www.cmqheadshots.com/headshot-booth-phoenix"
        ogUrl="https://www.cmqheadshots.com/headshot-booth-phoenix"
        showHeaderContact={false}
        noindex={true}
      >
      {/* FAQ Schema for AI Visibility */}
      <FAQSchema faqs={boothFAQs.map(faq => ({ question: faq.question, answer: faq.answer }))} />

      {/* Service Schema + BreadcrumbList for Headshot Booth */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Headshot Booth Phoenix AZ",
            "description": "Professional headshot booth for corporate events, trade shows, conferences, and company parties in Phoenix, Arizona. Walk-up professional headshots with expert direction and fast digital delivery.",
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
            "serviceType": "Headshot Booth Photography",
            "url": "https://www.cmqheadshots.com/headshot-booth-phoenix"
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
                "name": "Headshot Booth Phoenix",
                "item": "https://www.cmqheadshots.com/headshot-booth-phoenix"
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
            {/* TODO: Replace with headshot booth image 1 */}
            <div className="relative aspect-[4/5] bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-raleway text-center px-2">Headshot Booth 1</span>
            </div>
            {/* TODO: Replace with headshot booth image 2 */}
            <div className="relative aspect-[4/5] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-raleway text-center px-2">Headshot Booth 2</span>
            </div>
            {/* TODO: Replace with headshot booth image 3 */}
            <div className="relative aspect-[4/5] bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-raleway text-center px-2">Headshot Booth 3</span>
            </div>
            {/* TODO: Replace with headshot booth image 4 */}
            <div className="relative aspect-[4/5] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-raleway text-center px-2">Headshot Booth 4</span>
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
              <span className="font-bold" style={{ color: 'white' }}>HEADSHOT BOOTH</span><br />
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
              <span className="font-bold">NOT A PHOTO BOOTH.</span> <span className="font-normal">A HEADSHOT BOOTH.</span>
            </h2>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              Let&apos;s be clear about what this is — and what it isn&apos;t. A headshot booth is not a photo booth with silly props and ring lights. It&apos;s a portable professional headshot studio, operated by a real photographer, with real studio lighting, real direction, and real results. Every person who steps in front of the camera walks away with a polished, professional headshot they can actually use.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              I set up a complete, self-contained headshot station at your event. Guests walk up, get expert direction on posing and expression, and have their headshot taken in about 3-5 minutes. The images are professionally retouched and delivered digitally — often the same day. No appointments, no hassle, no awkward results.
            </p>

            <p className="font-raleway text-xl font-normal mb-8" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              A headshot booth is one of the highest-value activations you can offer at any corporate event. People love it because they get something genuinely useful. Companies love it because it drives engagement, creates social media content, and leaves a lasting impression that a branded pen never will.
            </p>

            <GetPricingButton href="/contact-us" size="large">
              GET A QUOTE
            </GetPricingButton>
          </div>
        </div>
      </section>

      {/* Four Images Section - Placeholder Row on Blue */}
      <section className="relative" style={{ backgroundColor: '#5577a5' }}>
        <div className="relative">
          <div className="grid grid-cols-4 w-full">
            {/* TODO: Replace with headshot booth image 5 */}
            <div className="relative aspect-[4/5] bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-raleway text-center px-2">Headshot Booth 5</span>
            </div>
            {/* TODO: Replace with headshot booth image 6 */}
            <div className="relative aspect-[4/5] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-raleway text-center px-2">Headshot Booth 6</span>
            </div>
            {/* TODO: Replace with headshot booth image 7 */}
            <div className="relative aspect-[4/5] bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-raleway text-center px-2">Headshot Booth 7</span>
            </div>
            {/* TODO: Replace with headshot booth image 8 */}
            <div className="relative aspect-[4/5] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-raleway text-center px-2">Headshot Booth 8</span>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-4xl font-bold mb-8" style={{ color: '#5577a5' }}>
              WHAT&apos;S INCLUDED
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Card 1 - Professional Lighting */}
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
                Studio-quality lighting that flatters every skin tone and face shape. No harsh shadows, no unflattering angles — just clean, professional results.
              </p>
            </div>

            {/* Card 2 - Clean Backdrop */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                CLEAN BACKDROP
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Professional backdrop system with multiple color options. Solid colors, textured backgrounds, or your custom branded banner — your choice.
              </p>
            </div>

            {/* Card 3 - Expert Direction */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                EXPERT DIRECTION
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Every person gets coached through posing, expression, and positioning. Nobody has to figure out what to do — that&apos;s my job.
              </p>
            </div>

            {/* Card 4 - Digital Delivery */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                DIGITAL DELIVERY
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Retouched headshots delivered via email or text — same-day delivery available. Guests leave with a professional image ready to use.
              </p>
            </div>

            {/* Card 5 - Branded Options */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                BRANDED OPTIONS
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Custom branded backdrops, logo overlays, and branded digital delivery. Turn every headshot into a piece of branded marketing.
              </p>
            </div>

            {/* Card 6 - Professional Retouching */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                PROFESSIONAL RETOUCHING
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Every image is retouched by hand for a natural, polished look. No filters, no automated processing — real retouching by a real photographer.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why a Headshot Booth Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-bold">WHY A HEADSHOT BOOTH</span> <span className="font-normal">INSTEAD OF A PHOTO BOOTH</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  PROFESSIONAL RESULTS, NOT PARTY PHOTOS
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  Photo booths are fun for weddings and birthday parties. But when you&apos;re hosting a professional event — a conference, a company kickoff, a networking mixer — you want something that matches the caliber of the occasion. A headshot booth gives attendees a professional-grade image they&apos;ll use on LinkedIn, their company website, and their business profiles. It&apos;s the difference between a souvenir and a tool.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  THE ENGAGEMENT FACTOR
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  People will stand in line for a professional headshot. That&apos;s a level of engagement most event activations can only dream of. While they wait, they&apos;re talking to your team, learning about your brand, and spending time in your space. It creates real connections — not just another badge scan or pamphlet grab.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  A TAKEAWAY THAT KEEPS WORKING
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  Conference swag bags get thrown away. Branded pens end up in a drawer. But a professional headshot? People use it. They update their LinkedIn profile. They swap out their email signature. They share it on social media and tag your event. One headshot booth creates dozens — sometimes hundreds — of organic brand impressions that last for years.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  CORPORATE BRANDING OPPORTUNITY
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  Branded backdrops, logo overlays on the digital delivery, custom color palettes — every element of the headshot booth can be tailored to your brand. When attendees share their headshot online, your brand goes with it. It&apos;s subtle, professional, and infinitely more effective than slapping a logo on a tote bag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-bold">PERFECT</span> <span className="font-normal">FOR</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                { title: 'Trade Shows & Expos', desc: 'Drive booth traffic and create lasting engagement' },
                { title: 'Corporate Conferences', desc: 'A professional perk attendees actually value' },
                { title: 'Company Kickoffs', desc: 'Start the year with fresh, brand-consistent headshots' },
                { title: 'Holiday Parties', desc: 'A sophisticated alternative to the standard photo booth' },
                { title: 'Networking Events', desc: 'Give guests a reason to stay and connect' },
                { title: 'Association Meetings', desc: 'A member benefit that makes your organization stand out' }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <h3 className="font-raleway text-lg font-bold mb-2" style={{ color: '#5577a5' }}>
                    {item.title.toUpperCase()}
                  </h3>
                  <p className="font-raleway text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#ffffff' }}>
              <span className="font-bold">HOW IT WORKS</span>
            </h2>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#ffffff'
            }}>
              I arrive before your event begins and set up the headshot station in about 30 minutes. The setup is completely self-contained: professional lighting, backdrop system, camera, and tethering equipment. All I need from you is a 10x10 foot space and a power outlet.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#ffffff'
            }}>
              During the event, guests walk up to the booth and get their headshot taken in about 3-5 minutes each. I direct every person through posing, expression, and positioning — they don&apos;t need to prepare anything or know what to do. I shoot tethered to my laptop so I can review each image in real time and ensure everyone walks away with a great result.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#ffffff'
            }}>
              At high-volume events, I can photograph 12-20 people per hour while maintaining the quality standard that makes these headshots actually useful. Every image is retouched — skin tone evening, blemish removal, and subtle color correction — so each person receives a polished, professional final image.
            </p>

            <p className="font-raleway text-xl font-normal mb-8" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#ffffff'
            }}>
              Delivery is fast. Same-day digital delivery via email or text is available, so your guests can update their LinkedIn profile before they even leave the venue. At the end of the event, I pack everything up and the space is clear.
            </p>

            <GetPricingButton href="/contact-us" size="large">
              BOOK YOUR HEADSHOT BOOTH
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
            imageAlt: "Headshot booth client testimonial",
            name: "SHAWN WILSON",
            review: "Cindy made the whole experience easy and comfortable. I was nervous going in, but she coached me through every shot. The final images were exactly what I needed for my business profiles.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-LisaS0258-optimized.webp",
            imageAlt: "Event headshot client testimonial",
            name: "LISA S.",
            review: "I put off getting a professional headshot for years. Cindy made it painless and the results speak for themselves. I use my headshot everywhere now — LinkedIn, my website, business cards.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/cmq-headshots-Anna-scottsdale-headshots-H0622-jp-leg-sqo-optimized.webp",
            imageAlt: "Corporate event headshot testimonial",
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
        title="HEADSHOT BOOTH QUESTIONS"
        subtitle="Get answers to the most common questions about headshot booth services"
        faqs={boothFAQs}
        backgroundColor="white"
        textColor="#5577a5"
      />

      {/* Final CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl lg:text-4xl mb-6" style={{ color: '#5577a5' }}>
            <span className="font-bold">READY TO ADD A HEADSHOT BOOTH</span> <span className="font-normal">TO YOUR EVENT?</span>
          </h2>
          <p className="font-raleway text-xl font-normal mb-8 max-w-2xl mx-auto" style={{
            fontWeight: '400',
            letterSpacing: '0.03em',
            lineHeight: '1.7',
            color: '#575757'
          }}>
            Every event is different. <Link href="/contact-us" className="underline hover:no-underline" style={{ color: '#5577a5' }}>Contact me</Link> with your event details — date, location, expected attendance, and any branding requirements — and I&apos;ll put together a custom quote.
          </p>
          <GetPricingButton href="/contact-us" size="large">
            GET A QUOTE
          </GetPricingButton>
        </div>
      </section>

      </Layout>
    </>
  )
}