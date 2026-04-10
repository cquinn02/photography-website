import Layout from '@/components/Layout'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import Head from 'next/head'
import InteractiveCompositeBuilder from '@/components/sections/InteractiveCompositeBuilder'
import AccordionFAQSection from '@/components/sections/AccordionFAQSection'
import FAQSchema from '@/components/FAQSchema'
import ThreeReviewSection from '@/components/sections/ThreeReviewSection'
import { Star, Check, User, Wand2, Layers, RefreshCw } from 'lucide-react'

export default function TeamCompositeHeadshots() {
  const compositeFAQs = [
    {
      id: 1,
      question: "What is a team composite headshot?",
      answer: "A team composite is a single image that combines individual headshots into a polished group photo. Each person is photographed separately with consistent lighting and backgrounds, then expertly composited together. The result looks like everyone was photographed at the same time — even if sessions happened weeks apart."
    },
    {
      id: 2,
      question: "How much do team composite headshots cost?",
      answer: "Pricing depends on the number of team members and the complexity of the composite. Contact me for a custom quote — I'll work with your budget and team size to find the right package."
    },
    {
      id: 3,
      question: "Can you add or remove people from an existing composite?",
      answer: "Yes! That's one of the biggest advantages of composite team photos. When someone joins or leaves, I photograph the new person and update the composite — no need to reschedule the entire team for a reshoot."
    },
    {
      id: 4,
      question: "Do you come to our office for team composites?",
      answer: "Absolutely. I can set up at your office in Phoenix, Scottsdale, Tempe, or anywhere in the Valley. On-location sessions mean less downtime for your staff. I can also photograph team members at my studio if that's more convenient."
    },
    {
      id: 5,
      question: "How long does each person's session take?",
      answer: "Individual sessions typically take 10-15 minutes per person. I work efficiently so your team can get back to work quickly while still capturing great expressions."
    },
    {
      id: 6,
      question: "What should team members wear for composite headshots?",
      answer: "I'll provide a style guide to share with your team before the session. Generally, solid colors work best — avoid busy patterns and logos. Consistency in dress code (e.g., all in business professional) ensures the final composite looks cohesive."
    },
    {
      id: 7,
      question: "How long until we receive the final composite?",
      answer: "Individual headshots are delivered within 7 business days. The composite typically takes an additional 3-5 business days depending on team size and complexity. Rush delivery is available for an additional fee."
    },
    {
      id: 8,
      question: "What industries benefit most from composite team photos?",
      answer: "Real estate brokerages, law firms, financial advisors, medical practices, tech companies, and any business that wants a professional team presence on their website. Composites are especially valuable for companies with multiple locations or high turnover."
    }
  ]
  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById('request-quote')
    if (element) {
      const yOffset = -150
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <Layout
      title="Team Composite Headshots Phoenix | CMQ Headshots"
      description="Team composite headshots for businesses in Phoenix and Scottsdale. Add or remove staff easily without expensive reshoots. On-location or studio sessions."
      canonical="https://www.cmqheadshots.com/team-composite-headshots"
      ogUrl="https://www.cmqheadshots.com/team-composite-headshots"
      ogImage="https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-ims%20sales-2x1A.webp"
      showHeaderButton={true}
    >
      {/* FAQ Schema for AI Visibility */}
      <FAQSchema faqs={compositeFAQs.map(faq => ({ question: faq.question, answer: faq.answer }))} />

      {/* Service Schema + BreadcrumbList */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Team Composite Headshots Phoenix",
            "image": "https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-ims%20sales-2x1A.webp",
            "description": "Professional team composite headshot photography in Phoenix, Arizona. Individual headshots combined into cohesive group images. Easy updates when staff changes.",
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
              { "@type": "City", "name": "Scottsdale", "sameAs": "https://en.wikipedia.org/wiki/Scottsdale,_Arizona" }
            ],
            "serviceType": "Team Composite Headshot Photography",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "description": "Team composite headshot photography — see website for session details and pricing.",
              "url": "https://www.cmqheadshots.com/team-composite-headshots",
              "availability": "https://schema.org/InStock"
            },
            "url": "https://www.cmqheadshots.com/team-composite-headshots"
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
                "name": "Team Composite Headshots",
                "item": "https://www.cmqheadshots.com/team-composite-headshots"
              }
            ]
          }) }}
        />
      </Head>

      {/* Hero Section - Single responsive section with swapped background images */}
      <section className="relative" style={{ height: '100vh', minHeight: '600px', maxHeight: '800px', paddingTop: '30px' }}>
        {/* Desktop Background Image */}
        <div className="hidden lg:block absolute inset-0">
          <Image
            src="https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-ims%20sales-2x1A.webp"
            alt="Professional team composite headshot in Phoenix"
            title="Team composite headshot photography"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Mobile Background Image */}
        <div className="lg:hidden absolute inset-0" style={{ top: '30px' }}>
          <Image
            src="https://images.cmqheadshots.com/images/website%20media/BTS-corporate-mobile.webp"
            alt="Team composite headshot session"
            fill
            className="object-cover"
            style={{ objectPosition: 'top' }}
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content - shared across desktop and mobile */}
        <div className="relative h-full flex flex-col justify-end lg:justify-center lg:items-center pb-16 lg:pb-0 px-6 lg:px-4 text-center" style={{ paddingTop: '60px' }}>
          <div className="w-full">
            <h1 className="font-raleway text-4xl lg:text-6xl xl:text-7xl leading-tight mb-8" style={{
              color: '#ffffff',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)'
            }}>
              <span className="font-medium" style={{ fontWeight: '500' }}>TEAM COMPOSITE</span><br />
              <span className="font-light" style={{ fontWeight: '300' }}>HEADSHOTS PHOENIX</span>
            </h1>
            <p className="font-raleway text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto" style={{
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
            }}>
              Flexible group photography for growing businesses
            </p>
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

      {/* Team and Group Photos Title Section */}
      <section className="pt-12 pb-4 text-center" style={{ backgroundColor: '#F1F1F1' }}>
        <h2 className="font-raleway text-3xl lg:text-4xl" style={{ color: '#5577a5' }}>
          <span className="font-medium">TEAM HEADSHOTS</span> <span className="font-light">PHOENIX</span>
        </h2>
      </section>

      {/* Step-by-Step Process Section */}
      <section className="pt-4 pb-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="font-raleway text-lg mb-12 text-black leading-relaxed text-center">
              Upgrade your company&apos;s image with flexible, composite team photography—perfect for fast-growing businesses in Phoenix, Scottsdale, and the Valley. Add or remove staff easily, no need for expensive group reshoots or complex scheduling.
            </p>

            {/* 4-Step Process Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Step 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto" style={{ backgroundColor: '#5577a5' }}>
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="text-center mb-2">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2" style={{ backgroundColor: '#e3f2fd', color: '#5577a5' }}>Step 1</span>
                </div>
                <h3 className="font-raleway text-lg font-medium text-center mb-3" style={{ color: '#5577a5' }}>
                  Individual Sessions
                </h3>
                <p className="text-black text-center text-sm leading-relaxed">
                  Each team member photographed individually with consistent lighting and professional setup.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto" style={{ backgroundColor: '#5577a5' }}>
                  <Wand2 className="w-8 h-8 text-white" />
                </div>
                <div className="text-center mb-2">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2" style={{ backgroundColor: '#e3f2fd', color: '#5577a5' }}>Step 2</span>
                </div>
                <h3 className="font-raleway text-lg font-medium text-center mb-3" style={{ color: '#5577a5' }}>
                  Expert Retouching
                </h3>
                <p className="text-black text-center text-sm leading-relaxed">
                  Professional editing ensures every team member looks their best with unified color and style.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto" style={{ backgroundColor: '#5577a5' }}>
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <div className="text-center mb-2">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2" style={{ backgroundColor: '#e3f2fd', color: '#5577a5' }}>Step 3</span>
                </div>
                <h3 className="font-raleway text-lg font-medium text-center mb-3" style={{ color: '#5577a5' }}>
                  Seamless Compositing
                </h3>
                <p className="text-black text-center text-sm leading-relaxed">
                  Individual photos artfully combined into a cohesive team image that looks naturally composed.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto" style={{ backgroundColor: '#5577a5' }}>
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <div className="text-center mb-2">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2" style={{ backgroundColor: '#e3f2fd', color: '#5577a5' }}>Step 4</span>
                </div>
                <h3 className="font-raleway text-lg font-medium text-center mb-3" style={{ color: '#5577a5' }}>
                  Easy Updates
                </h3>
                <p className="text-black text-center text-sm leading-relaxed">
                  Add or remove staff anytime without expensive reshoots—we update your composite as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Composite Builder */}
      <InteractiveCompositeBuilder />

      {/* Benefits Section */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Key Benefits */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="font-raleway text-center mb-6" style={{ color: '#5577a5', fontSize: '30px', fontWeight: '500' }}>
                Why Choose Composite Team Photography?
              </h3>
              <div className="grid md:grid-cols-2 gap-6" style={{ fontSize: '20px' }}>
                <div className="flex items-start">
                  <Check className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{ color: '#5577a5' }} />
                  <div>
                    <strong className="font-semibold text-gray-900">Scalable & Cost-Effective:</strong>
                    <span className="text-black"> Pay only for new or departing members</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{ color: '#5577a5' }} />
                  <div>
                    <strong className="font-semibold text-gray-900">Effortless Scheduling:</strong>
                    <span className="text-black"> Sessions fit around each employee&apos;s availability</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{ color: '#5577a5' }} />
                  <div>
                    <strong className="font-semibold text-gray-900">Consistent Quality:</strong>
                    <span className="text-black"> Unified look with professional lighting for everyone</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{ color: '#5577a5' }} />
                  <div>
                    <strong className="font-semibold text-gray-900">Future-Proof:</strong>
                    <span className="text-black"> Adapts with every change to maintain a current image</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="font-raleway text-xl font-medium text-black leading-relaxed text-center mt-8 uppercase">
              This service is ideal for businesses with multiple locations or frequent staffing changes.
            </p>

            <hr className="border-t-2 border-gray-300 my-8" />

            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-raleway text-4xl lg:text-5xl mb-6 font-medium uppercase" style={{ color: '#5577a5', fontWeight: '500' }}>
                GROUP CORPORATE HEADSHOTS
              </h2>
              <div className="space-y-4">
                <p className="font-raleway text-xl text-black" style={{ lineHeight: '1.6' }}>
                  Your session can take place at your office or in my studio—whichever is most convenient. I start by capturing individual headshots, focusing on great expressions and natural poses. Next, I photograph each team member full-length, ensuring everyone looks their best.
                </p>
                <p className="font-raleway text-xl text-black" style={{ lineHeight: '1.6' }}>
                  After your session, each person selects their favorite headshot for professional editing. I then create polished team composites and send draft galleries for your review and feedback. You&apos;re welcome to request up to two rounds of adjustments so the final images perfectly match your expectations.
                </p>
                <p className="font-raleway text-xl text-black" style={{ lineHeight: '1.6' }}>
                  Once approved, you&apos;ll receive your high-resolution team and headshot images ready to use across your website and marketing materials.
                </p>
              </div>
            </div>

            <hr className="border-t-2 border-gray-300 mt-8" />

            <p className="font-raleway text-lg font-semibold text-center mt-8" style={{ color: '#5577a5' }}>
              Contact me today for a free team photography consultation!
            </p>
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#5577a5' }}>
              <span className="font-medium">WHO BENEFITS FROM</span> <span className="font-normal">COMPOSITE TEAM PHOTOS?</span>
            </h2>
            <p className="font-raleway text-xl text-black mb-10" style={{ lineHeight: '1.6', fontWeight: '400', letterSpacing: '0.03em' }}>
              Composite team headshots are the smart choice for businesses in Phoenix, Scottsdale, Tempe, and the Valley that need a professional group image without the logistical headache of gathering everyone at once.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start">
                <Check className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{ color: '#5577a5' }} />
                <p className="font-raleway text-lg text-black"><strong>Real estate brokerages</strong> with agents joining and leaving throughout the year</p>
              </div>
              <div className="flex items-start">
                <Check className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{ color: '#5577a5' }} />
                <p className="font-raleway text-lg text-black"><strong>Law firms</strong> that need a polished team page for their website</p>
              </div>
              <div className="flex items-start">
                <Check className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{ color: '#5577a5' }} />
                <p className="font-raleway text-lg text-black"><strong>Financial advisory teams</strong> where trust and professionalism matter</p>
              </div>
              <div className="flex items-start">
                <Check className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{ color: '#5577a5' }} />
                <p className="font-raleway text-lg text-black"><strong>Medical practices</strong> that want a cohesive staff page for patients</p>
              </div>
              <div className="flex items-start">
                <Check className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{ color: '#5577a5' }} />
                <p className="font-raleway text-lg text-black"><strong>Tech companies</strong> with remote or hybrid teams across multiple locations</p>
              </div>
              <div className="flex items-start">
                <Check className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{ color: '#5577a5' }} />
                <p className="font-raleway text-lg text-black"><strong>Any growing business</strong> that wants a current team photo without constant reshoots</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <ThreeReviewSection
        title="WHAT CLIENTS SAY"
        reviews={[
          {
            image: "https://images.cmqheadshots.com/images/website%20media/CMQHeadshots-Quantcast1744-transp.webp",
            imageAlt: "Team composite client Stephanie Eidelman",
            name: "STEPHANIE EIDELMAN",
            review: "I hosted a women's conference in Scottsdale and hired CMQ to take headshots of attendees. She was so wonderful then that we engaged her to return in 2021. It was once again a huge hit. The photos of every single person are absolutely beautiful. She really gets the most out of her subjects very quickly and efficiently. I'd recommend her wholeheartedly for any event!",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-2806-1x1-optimized.webp",
            imageAlt: "Team composite client Spencer Hopkin",
            name: "SPENCER HOPKIN",
            review: "Cindy exceeded our expectations for our 2-day corporate event (headshots for employees)! She arrived early and was prompt and prepared throughout. Our event required a lot of flexibility and Cindy was unfazed by the ever-changing schedule. Cindy put each person at ease in their session and delivered the photos quickly. Highly recommend!",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-LisaS0258-optimized.webp",
            imageAlt: "Team composite client Cami Collins",
            name: "CAMI COLLINS",
            review: "Needed to replace my professional headshot and am so grateful to have found Cindy! Her easy-going personality made the process seamless and fun. Studio is in her lovely home which makes things more personable and comfortable. 10/10 would recommend to anyone in the valley!",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        textColor="white"
      />

      {/* On-Location Section */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-6" style={{ color: '#5577a5' }}>
              <span className="font-medium">TEAM COMPOSITE HEADSHOTS</span> <span className="font-normal">IN PHOENIX AND SCOTTSDALE</span>
            </h2>
            <div className="space-y-4">
              <p className="font-raleway text-xl text-black" style={{ lineHeight: '1.6', fontWeight: '400', letterSpacing: '0.03em' }}>
                I serve businesses throughout the Phoenix metro area including Scottsdale, Tempe, Mesa, Chandler, and Gilbert. Whether your team is 5 people or 50, I can photograph everyone at your office or at my studio — whichever works best for your schedule.
              </p>
              <p className="font-raleway text-xl text-black" style={{ lineHeight: '1.6', fontWeight: '400', letterSpacing: '0.03em' }}>
                With over 14 years of headshot photography experience, I understand how to make every team member look confident and approachable. My portable studio setup means consistent lighting and backgrounds whether I&apos;m shooting at your downtown Phoenix office or a Scottsdale location.
              </p>
              <p className="font-raleway text-xl text-black" style={{ lineHeight: '1.6', fontWeight: '400', letterSpacing: '0.03em' }}>
                Need individual headshots for your team too? Every person in your composite also receives their own professionally retouched headshot for LinkedIn, company directories, and email signatures. Learn more about our <Link href="/corporate-staff-headshots" className="underline" style={{ color: '#5577a5' }}>corporate staff headshot packages</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AccordionFAQSection
        title="Team Composite Headshot FAQs"
        subtitle="Common questions about composite team photography in Phoenix"
        faqs={compositeFAQs}
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
