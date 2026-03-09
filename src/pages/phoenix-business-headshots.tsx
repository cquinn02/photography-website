import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import GetPricingButton from '@/components/GetPricingButton'
import AccordionFAQSection from '@/components/sections/AccordionFAQSection'
import ThreeReviewSection from '@/components/sections/ThreeReviewSection'
import FAQSchema from '@/components/FAQSchema'

export default function IndividualPricing() {
  const individualFAQs = [
    {
      id: 1,
      question: "What forms of payment do you accept?",
      answer: "We accept: Visa, Mastercard, Discover, Square, Cash, and Trips to Australia, or Italy."
    },
    {
      id: 2,
      question: "When will I get my final images back?",
      answer: "Your final images will be done within 7 business days from the time you selected your favorite images.\n\nSame day Retouching – is available at an additional fee of $50.00"
    },
    {
      id: 3,
      question: "Can you help me relax?",
      answer: "I hear this all the time. In my studio, it's just you and I. I have great music playing and I have a confident and calm demeanor, and within a short period of time, I will demonstrate my skills in posing and lighting you. I shoot tethered to my laptop so that I can show you immediately what I am getting. Then I will coach you, to get you to be your natural self. Then we will capture great natural-looking pictures of the best of you."
    },
    {
      id: 4,
      question: "What should I wear?",
      answer: "I send you documentation on what to wear and how to prepare for your headshot session once you have booked."
    },
    {
      id: 5,
      question: "Do I need a Pro Make-up Artist?",
      answer: "A really good professional make-up artist is definitely worth the money, especially if you have rosacea or if your skin tone is not even. If your eyebrows need some help or if you don't put on makeup regularly. I can provide you with the names of some good MUA when you book."
    },
    {
      id: 6,
      question: "What size are the final images?",
      answer: "Your final images will come in 5 different sizes, for each image you purchase. LinkedIn Profile size, Facebook Profile, Instagram profile, Full resolution 5×7 @ 300 dpi, black and white social media image."
    },
    {
      id: 7,
      question: "Can I bring a friend?",
      answer: "We prefer you come alone so we can focus entirely on you and your session. However, if you need support, one person is welcome to accompany you."
    },
    {
      id: 8,
      question: "Will you retouch my Photos?",
      answer: "CMQ Headshots will retouch your final images in the most natural-looking way possible. Don't worry about a nick with the razor or the zit that popped up the day of your session we can easily remove them in photoshop. Every image is manually edited, we do not use plug-ins and that is why our final images look so great and natural."
    },
    {
      id: 9,
      question: "Do you have hair advice?",
      answer: "I want you to look like you normally do on your best day. Most men and women know their hair better than anyone else. You know when your hair looks best either the day after a shower or the day of the shower.\n\nIf you have a hairstylist or a barber who knows your hair well and you like the way they do it, then absolutely make an appointment but don't do anything different than the way you normally wear your hair.\n\nFor women, we move your hair around a lot during a headshot session so don't spray it will ultra hold hair hairspray. Use something that will let your hair move."
    }
  ]

  return (
    <>
      <Layout
        title="Phoenix Business Headshots | CMQ Headshots"
        description="Professional business headshots in Phoenix, AZ. Executive, entrepreneur, and LinkedIn headshots with expert lighting and direction. Book today."
        canonical="https://www.cmqheadshots.com/phoenix-business-headshots"
        ogUrl="https://www.cmqheadshots.com/phoenix-business-headshots"
        showHeaderContact={true}
      >
      {/* FAQ Schema for AI Visibility */}
      <FAQSchema faqs={individualFAQs.map(faq => ({ question: faq.question, answer: faq.answer }))} />

      {/* Service Schema + BreadcrumbList for Business Headshots */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Phoenix Business Headshots",
            "description": "Professional business headshot photography in Phoenix, Arizona. Executive, entrepreneur, and LinkedIn headshots with expert lighting and direction.",
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
            "serviceType": "Business Headshot Photography",
            "offers": {
              "@type": "Offer",
              "price": "250",
              "priceCurrency": "USD",
              "description": "Business headshot session fee. Images purchased separately at $100 each.",
              "url": "https://www.cmqheadshots.com/phoenix-business-headshots"
            },
            "url": "https://www.cmqheadshots.com/phoenix-business-headshots"
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
                "name": "Phoenix Business Headshots",
                "item": "https://www.cmqheadshots.com/phoenix-business-headshots"
              }
            ]
          }) }}
        />
      </Head>

      {/* Header with Headshots */}
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
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-2806-1x1-optimized.webp"
                alt="Business headshot Phoenix AZ - male executive"
                fill
                className="object-cover"
                sizes="25vw"
                priority
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots-5963a-web-optimized.webp"
                alt="Executive headshot Phoenix - professional portrait"
                fill
                className="object-cover"
                sizes="25vw"
                priority
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/CMQHeadshots-5855a%20female%20headshot.webp"
                alt="Professional business headshot Phoenix - female executive"
                fill
                className="object-cover"
                sizes="25vw"
                priority
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/CMQHeadshots-609-casual%20headshot.webp"
                alt="Business headshot Phoenix AZ - casual professional"
                fill
                className="object-cover"
                sizes="25vw"
                priority
              />
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
            <h1 className="font-raleway text-4xl md:text-5xl" style={{ color: 'white' }}>
              <span className="font-bold" style={{ color: 'white' }}>BUSINESS HEADSHOTS</span> <span className="font-normal" style={{ color: 'white' }}>PHOENIX, AZ</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#5577a5' }}>
              <span className="font-bold">PROFESSIONAL BUSINESS HEADSHOTS</span> <span className="font-normal">PHOENIX, AZ</span>
            </h2>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              Looking for business headshots in Phoenix, AZ? Whether you&apos;re an executive, entrepreneur, consultant, or job seeker, your headshot is the first impression you make online. It&apos;s on your LinkedIn profile, your company website, your email signature, and every professional platform where people decide if they want to work with you — before you ever meet.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              I&apos;ve been photographing business professionals across Phoenix, Scottsdale, Tempe, Chandler, Mesa, Gilbert, and the entire Valley for over 12 years. My studio sessions are relaxed and efficient — I coach you through every pose and expression so you walk out with headshots that look confident, approachable, and authentically you.
            </p>

            <p className="font-raleway text-xl font-normal mb-8" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              A professional business headshot isn&apos;t a luxury — it&apos;s an investment in your career. The right image tells clients you take your work seriously and helps you stand out in a competitive market.
            </p>

            <GetPricingButton href="#pricing" size="large">
              BOOK YOUR SESSION
            </GetPricingButton>
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
                <div className="text-center max-w-md">
                  <div className="font-raleway mb-12" style={{ color: '#5577a5', lineHeight: '1.8' }}>
                    <div className="text-3xl md:text-4xl mb-4">
                      <span className="font-bold">COMFORTABLE, EASY</span>
                    </div>
                    <div className="text-4xl md:text-5xl mb-4">
                      <span className="font-normal">HEADSHOTS</span>
                    </div>
                    <div className="text-2xl md:text-3xl">
                      <span className="font-normal">YOU&apos;RE</span> <span className="font-bold">GOING TO LOVE</span>
                    </div>
                  </div>
                  
                  <div className="mb-12">
                    <div className="text-6xl mb-12" style={{ color: '#5577a5', fontWeight: '400' }}>
                      $250
                    </div>
                    
                    <div className="space-y-8">
                      <p className="font-raleway text-2xl italic" style={{ color: '#575757' }}>
                        plus
                      </p>
                      <p className="font-raleway text-2xl" style={{ color: '#575757', fontWeight: '400' }}>
                        IMAGE(S) you purchase
                      </p>
                      <p className="font-raleway text-3xl font-bold" style={{ color: '#575757' }}>
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
                title="Schedule Appointment"
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
          </div>
        </div>
      </section>

      {/* Every Session Includes Section */}
      <section className="py-16" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-4xl font-bold mb-8" style={{ color: '#5577a5' }}>
              EVERY SESSION INCLUDES
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Card 1 - Unlimited Shooting Time */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                UNLIMITED SHOOTING TIME
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Every photo session is customized to your needs. I want you to leave the studio with images that help you succeed.
              </p>
            </div>

            {/* Card 2 - Unlimited Outfits */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                UNLIMITED OUTFITS
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                You can bring all the outfits you would like to get captured in front of the camera. I will give you guidance on what will work best.
              </p>
            </div>

            {/* Card 3 - Various Backdrops */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                VARIOUS BACKDROPS
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                I will pick a color that will be best for your outfit If you need something specific we can match existing website backgrounds.
              </p>
            </div>

            {/* Card 4 - Professional Retouching */}
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
                All purchased images receive professional retouching to ensure you look your absolute best in every photo.
              </p>
            </div>

            {/* Card 5 - Preparation Information */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                PREPARATION INFORMATION
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                You&apos;ll receive detailed preparation tips and guidance to help you look and feel your best for your session.
              </p>
            </div>

            {/* Card 6 - 1-on-1 Image Selection */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                1-ON-1 IMAGE SELECTION
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                We&apos;ll review your images together to select the perfect shots that represent you at your best.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Image Selection and Delivery Section */}
      <section className="py-16" style={{ backgroundColor: '#5577a5' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Image Selection Process */}
            <div className="mb-12">
              <p className="font-raleway font-normal text-xl md:text-2xl text-white leading-relaxed" style={{ fontWeight: '400' }}>
                – At the end of the session, we will sit down together, review the images, and you will make your final decision on which images you would like to purchase.
              </p>
            </div>
            
            {/* Image Delivery Information */}
            <div>
              <p className="font-raleway font-normal text-xl md:text-2xl text-white leading-relaxed" style={{ fontWeight: '400' }}>
                – Images are delivered via download and come in 5 different versions: LinkedIn Profile, Facebook Profile, Teams profile, black & white, and full-resolution within 7 days.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <ThreeReviewSection
        reviews={[
          {
            image: "https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-2806-1x1.jpg",
            imageAlt: "Denise Andrade headshot",
            name: "DENISE ANDRADE",
            review: "Cindy took headshots for my consulting company, and she was wonderful to work with! She is a true professional who helps you get the best-looking photos, and I am very happy with my headshots. She sends helpful tips before your appointment to help you prep, knows what works in terms of clothing, poses, and generally makes me feel at ease during my appointment.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots-5963a-web-optimized.webp",
            imageAlt: "Scott Anderson headshot",
            name: "SCOTT ANDERSON",
            review: "I found CMQ Headshots, and my company was able to schedule and pay for everything remotely, easily. Cindy is an excellent photographer. I felt relaxed and comfortable. Her photography skills, approach, and personality created a comfortable atmosphere, which resulted in photos more reflective of myself. I highly recommend.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-executive-headshots-phoenix-11669-web-2.webp",
            imageAlt: "Jenny Bolt headshot",
            name: "JENNY BOLT",
            review: "Cindy was amazing...she made me feel so comfortable throughout the entire process. I'm not one who enjoys photos of myself, and Cindy helped me feel relaxed and actually really enjoyed the process. We got some amazing photos. Her turnaround time was extremely fast. I would definitely recommend CMQ Headshots!",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        textColor="white"
      />

      {/* Why Professional Business Headshots Matter */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-bold">WHY PROFESSIONAL</span> <span className="font-normal">BUSINESS HEADSHOTS MATTER</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  YOUR HEADSHOT IS YOUR FIRST HANDSHAKE
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  Before a client emails you, before a recruiter calls you, before anyone walks into your office — they&apos;ve already seen your headshot. On LinkedIn. On your company&apos;s About page. In a Google search. That image is doing the work of a first impression whether you planned it or not. A professional business headshot tells people you&apos;re serious, capable, and someone worth reaching out to.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  STAND OUT IN THE PHOENIX MARKET
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  Phoenix is one of the fastest-growing business markets in the country. Whether you&apos;re in finance, tech, healthcare, real estate, or law, you&apos;re competing for attention with thousands of other professionals. A polished headshot separates you from the crowd — especially on LinkedIn, where profiles with professional photos get 14 times more views than those without one.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  WHO NEEDS BUSINESS HEADSHOTS
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  I photograph executives, entrepreneurs, consultants, lawyers, financial advisors, job seekers, sales professionals, and anyone who wants to look their best online. Whether you need a single headshot for your LinkedIn profile update or a full set of images for your website, business cards, and marketing materials, I&apos;ll make sure every image works across every platform you need it on.
                </p>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  CONSISTENCY ACROSS EVERY PLATFORM
                </h3>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{
                  color: '#575757',
                  fontWeight: '400',
                  lineHeight: '1.7'
                }}>
                  Your headshot should look the same everywhere — LinkedIn, your company website, Zoom, email signature, and business cards. When someone finds you on one platform and recognizes you on another, that consistency builds trust. Every purchased image comes in multiple sizes optimized for each platform so your brand looks cohesive everywhere.
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
              <span className="font-bold">WHAT TO EXPECT</span> <span className="font-normal">AT YOUR SESSION</span>
            </h2>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              When you arrive at my Phoenix studio, we&apos;ll start by talking about what you need your headshots for — LinkedIn, your company website, a speaking engagement, a new job search. This helps me understand the look you&apos;re going for so we nail it in the session.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              I shoot tethered to my laptop, so you&apos;ll see the images in real time as we go. No guessing, no waiting, no surprises. If a collar is out of place or a smile looks forced, we fix it on the spot. I coach you through every pose and expression — you don&apos;t need to know what to do in front of the camera. That&apos;s my job.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              Bring multiple outfits so we can capture different looks — a blazer for your company profile, something more relaxed for social media. At the end of the session, we review images together and you choose your favorites. Each purchased image is professionally retouched by hand — no filters, no plug-ins — and delivered in multiple sizes for every platform.
            </p>

            <p className="font-raleway text-xl font-normal mb-8" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              With <Link href="/about" className="underline hover:no-underline" style={{ color: '#5577a5' }}>over 12 years of experience</Link> photographing business professionals in the Phoenix area, I know how to make the process comfortable and the results outstanding. Most clients tell me they were nervous walking in and genuinely enjoyed the experience walking out. <Link href="/contactus" className="underline hover:no-underline" style={{ color: '#5577a5' }}>Contact me</Link> if you have any questions before booking.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <AccordionFAQSection
        title="BUSINESS HEADSHOTS PHOENIX AZ"
        subtitle="Get answers to common questions about business headshot sessions in Phoenix"
        faqs={individualFAQs}
        backgroundColor="white"
        textColor="#5577a5"
      />

      {/* Helpful Tips - Clothing Guides */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-2">
            <p className="font-raleway text-lg" style={{ color: '#575757' }}>
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
                href="/blog/what-kind-of-clothing-should-i-wear-to-my-headshot-session-women"
                className="underline hover:no-underline transition-all"
                style={{ color: '#5577a5' }}
              >
                women&apos;s clothing guide
              </Link>
              .
            </p>
            <p className="font-raleway text-lg" style={{ color: '#575757' }}>
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

      {/* Staff/Team Headshots Section */}
      <section className="py-16" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-raleway text-4xl font-bold mb-8" style={{ color: '#5577a5' }}>
              GROUP CORPORATE HEADSHOTS PHOENIX
            </h2>
            
            <p className="font-raleway text-xl mb-8" style={{ color: '#5577a5', fontWeight: '400' }}>
              If you are looking for on-location staff and team headshots.
            </p>
            
            <p className="font-raleway text-xl mb-8" style={{ color: '#5577a5', fontWeight: '400' }}>
              Click on the &quot;Request A Quote&quot; button.
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