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
        title="Business & Executive Headshots Phoenix | CMQ Headshots"
        description="Professional business and executive headshots in Phoenix, AZ. C-suite, leadership, and corporate photography with 130+ five-star reviews."
        canonical="https://www.cmqheadshots.com/phoenix-business-headshots"
        ogUrl="https://www.cmqheadshots.com/phoenix-business-headshots"
        ogImage="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-2806-1x1-optimized.webp"
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
            "name": "Business & Executive Headshots Phoenix",
            "image": "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-2806-1x1-optimized.webp",
            "description": "Professional business and executive headshot photography in Phoenix, Arizona. C-suite, leadership, and corporate headshots for executives, entrepreneurs, and LinkedIn profiles with expert lighting and direction.",
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
            "serviceType": ["Business Headshot Photography", "Business Headshots", "Phoenix Business Headshots"],
            "offers": {
              "@type": "Offer",
              "price": "250",
              "priceCurrency": "USD",
              "description": "Business headshot session: $250 session fee plus $100 per edited image. Unlimited shooting time and outfit changes.",
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
        {/* Four Headshots Row with H1 Overlay */}
        <div className="relative">
          <div className="grid grid-cols-4 w-full">
            <div className="relative aspect-square">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-2806-1x1-optimized.webp"
                alt="Phoenix business headshot - male executive professional"
                fill
                className="object-cover"
                sizes="25vw"
                priority
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots-5963a-web-optimized.webp"
                alt="Business headshot photography Phoenix - professional portrait"
                fill
                className="object-cover"
                sizes="25vw"
                priority
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/CMQHeadshots-5855a%20female%20headshot.webp"
                alt="Business headshots Phoenix - female executive headshot"
                fill
                className="object-cover"
                sizes="25vw"
                priority
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/CMQHeadshots-609-casual%20headshot.webp"
                alt="Professional business headshot - casual business portrait Phoenix"
                fill
                className="object-cover"
                sizes="25vw"
                priority
              />
            </div>
          </div>
        </div>
        {/* H1 below images */}
        <div className="py-5 lg:py-6" style={{ backgroundColor: '#5577a5' }}>
          <h1 className="font-raleway text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center" style={{
            color: '#ffffff',
            fontWeight: '400',
            letterSpacing: '0.08em'
          }}>
            <span className="font-medium" style={{ fontWeight: '500' }}>BUSINESS HEADSHOTS</span>{' '}
            <span className="font-light" style={{ fontWeight: '300' }}>PHOENIX</span>
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl lg:max-w-6xl mx-auto text-center">
            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              Business headshots in Phoenix show up on LinkedIn, your company website, and every platform where people look you up. They form an opinion before you ever meet. That photo needs to be great.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              I&apos;ve been photographing business professionals across Phoenix, Scottsdale, Tempe, Chandler, Mesa, Gilbert, and the Valley for over 14 years. My studio sessions are relaxed and efficient. I coach you through every pose and expression so you walk out with business headshots you actually want to use.
            </p>

            <p className="font-raleway text-xl font-normal mb-8" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              A professional business headshot tells clients you take your work seriously. In a market like Phoenix, that matters.
            </p>

          </div>
        </div>
      </section>

      {/* Executive Headshot Carousel */}
      <section className="py-10 lg:py-14 overflow-hidden" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="carousel-track-wrapper">
          <div className="exec-carousel-track">
            {[...Array(2)].flatMap((_, setIndex) => [
              { src: 'CMQHEADSHOTS-Greystar6473.webp', alt: 'Executive headshot Phoenix - female business professional' },
              { src: 'CMQHEADSHOTS-Greystar6511.webp', alt: 'Executive headshot Phoenix - professional woman in business attire' },
              { src: 'CMQHEADSHOTS-Greystar6524.webp', alt: 'Executive business headshot - female professional Phoenix AZ' },
              { src: 'CMQHEADSHOTS-Greystar6552.webp', alt: 'Professional executive headshot Phoenix - woman in blazer' },
              { src: 'CMQHEADSHOTS-Greystar6609.webp', alt: 'Executive headshot photographer Phoenix - female professional' },
              { src: 'CMQHEADSHOTS-Greystar6632.webp', alt: 'Phoenix executive headshot - business professional portrait' },
              { src: 'CMQHEADSHOTS-Greystar6744.webp', alt: 'Professional executive headshot - woman in business attire Phoenix' },
              { src: 'CMQHEADSHOTS-Greystar6772.webp', alt: 'Executive headshot photography Phoenix - professional woman' },
              { src: 'CMQHEADSHOTS-Greystar6555.webp', alt: 'Business executive headshot - professional woman Phoenix' },
              { src: 'CMQHEADSHOTS-Greystar6860.webp', alt: 'Executive business headshot Phoenix - male professional in suit' },
            ].map((img, i) => (
              <div key={`${setIndex}-${i}`} className="exec-carousel-slide">
                <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <Image
                    src={`https://images.cmqheadshots.com/images/website%20media/Greystar-webp/${img.src}`}
                    alt={img.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 200px, (max-width: 1024px) 220px, 240px"
                  />
                </div>
              </div>
            )))}
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
                      <span className="font-medium">COMFORTABLE, EASY</span>
                    </div>
                    <div className="text-4xl md:text-5xl mb-4">
                      <span className="font-normal">HEADSHOTS</span>
                    </div>
                    <div className="text-2xl md:text-3xl">
                      <span className="font-normal">YOU&apos;RE</span> <span className="font-medium">GOING TO LOVE</span>
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
            <h3 className="font-raleway text-4xl font-medium mb-8" style={{ color: '#5577a5' }}>
              EVERY SESSION INCLUDES
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
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
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
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
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
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
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
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
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
              <h3 className="font-raleway text-xl font-medium mb-4" style={{ color: '#5577a5' }}>
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
          <div className="max-w-5xl mx-auto text-center">

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
              <span className="font-normal">PHOENIX</span>{' '}
              <span className="font-medium">BUSINESS HEADSHOT</span>
            </h2>

            <p className="font-raleway text-xl text-center font-normal" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7'
            }}>
              A Phoenix business headshot is the first thing clients, recruiters, and colleagues see when they look you up. LinkedIn profiles with professional photos get 14 times more views than those without. That same photo goes on your company website, email signature, and business cards. Every image I deliver comes sized for each platform so it looks sharp everywhere. One session, one investment, and you&apos;re covered.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Business Portraits Section */}
      <section className="py-16" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#ffffff' }}>
              <span className="font-medium">WHAT MAKES A GREAT</span>{' '}
              <span className="font-normal">BUSINESS HEADSHOT</span>
            </h2>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#ffffff'
            }}>
              What makes a great business headshot? It starts with the market you are in. Phoenix is home to Fortune 500 headquarters, tech startups, world-class athletes, and one of the largest university systems in the country at ASU. The business community here is fast-moving and competitive. Your headshot needs to keep up.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#ffffff'
            }}>
              Research published in the Phoenix Business Journal shows that people make snap judgments about credibility in as little as 100 milliseconds based on your photo alone. Professional headshots boost perceived competence by 76% and influence by 62%. Low-quality photos do the opposite. They reduce trust before you get a chance to speak.
            </p>

            <p className="font-raleway text-xl font-normal mb-8" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#ffffff'
            }}>
              Every image I deliver comes sized for LinkedIn, your company website, email signature, and business cards. One session covers every platform you need.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Headshots Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#5577a5' }}>
              <span className="font-medium">EXECUTIVE HEADSHOTS</span>{' '}
              <span className="font-normal">PHOENIX</span>
            </h2>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              Founders and CEOs are busy. Their assistant carves out 15 minutes for a headshot, sometimes less. Most have been photographed many times before. They already know their best side. They want to look strong, confident, and no-nonsense.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              Many of them are uncomfortable in front of a camera, and some come to me unhappy with headshots they&apos;ve gotten elsewhere. I spend time straightening their tie, brushing lint off their jacket, and talking them through the process until they relax. That&apos;s the part most photographers skip. I&apos;ve done executive headshots in Phoenix for founders, CEOs, and leadership teams at Berkshire Hathaway, GoDaddy, Insight Enterprises, McKesson, Chase, and State Farm.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              I limit my bookings to a maximum of two sessions per day. Always have. That means you get my full attention, not a rushed slot between other clients.
            </p>

            <h3 className="font-raleway text-2xl lg:text-3xl mb-8 mt-12" style={{ color: '#5577a5' }}>
              <span className="font-medium">EXECUTIVE HEADSHOT</span>{' '}
              <span className="font-normal">PHOTOGRAPHER</span>
            </h3>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              As an executive headshot photographer, I offer several background options. We can shoot outside if the weather is agreeable, use a location inside your office building if the space works, or I can photograph you on a solid background and swap it to match your company&apos;s branding in post-production. Every image is retouched by hand and delivered in multiple sizes for your leadership page, LinkedIn, annual reports, and business cards.
            </p>

            <h3 className="font-raleway text-2xl lg:text-3xl mb-8 mt-12" style={{ color: '#5577a5' }}>
              <span className="font-medium">EXECUTIVE HEADSHOTS</span>{' '}
              <span className="font-normal">NEAR ME</span>
            </h3>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              Most of my executive headshots near me clients have me come to them. Their assistant or marketing team finds a quiet spot in the office, I set up my equipment, and we give the executive full privacy. Some sessions are quick, others run longer depending on what the founder or executive needs for their headshots, annual reports, website, and marketing. I also photograph executives at my Phoenix studio, easy to reach from the Biltmore area, Glendale, Peoria, Surprise, North Scottsdale, and Paradise Valley.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect at Your Business Headshot Session */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#5577a5' }}>
              <span className="font-medium">BUSINESS HEADSHOT PHOTOGRAPHY</span><br />
              <span className="font-normal">WHAT TO EXPECT</span>
            </h2>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              Business headshot photography is about more than clicking a shutter. When you arrive at my Phoenix studio, we start by talking about what you need your headshots for. LinkedIn, your company website, a speaking engagement, a new job search. That conversation helps me understand the look you&apos;re going for so we nail it in the session.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              I shoot tethered to my laptop, so you see the images in real time as we go. If a collar is out of place or a smile looks forced, we fix it on the spot. I coach you through every pose and expression. You don&apos;t need to know what to do in front of the camera. That&apos;s my job.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              Bring multiple outfits so we can capture different looks. A blazer for your company profile, something more relaxed for social media. At the end of the session, we review images together and you choose your favorites. Each purchased image is retouched by hand, no filters or plug-ins, and delivered in multiple sizes for every platform.
            </p>

            <p className="font-raleway text-xl font-normal mb-8" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              With <Link href="/about" className="underline hover:no-underline" style={{ color: '#5577a5' }}>over 14 years of experience</Link> as a business headshot photographer in the Phoenix area, I know how to make the process comfortable and the results outstanding. Most clients tell me they were nervous walking in and genuinely enjoyed the experience walking out. <Link href="/contact-us" className="underline hover:no-underline" style={{ color: '#5577a5' }}>Contact me</Link> if you have any questions before booking.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <AccordionFAQSection
        title="BUSINESS HEADSHOTS PHOENIX FAQ'S"
        subtitle="Get answers to common questions about business headshots in Phoenix"
        faqs={individualFAQs}
        backgroundColor="white"
        textColor="#5577a5"
      />

      {/* Business Headshots Phoenix - Keyword Section */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-8" style={{ color: '#5577a5' }}>
              <span className="font-medium">BUSINESS HEADSHOT</span>
            </h2>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              Phoenix is one of the fastest-growing professional markets in the country. Thousands of executives, entrepreneurs, and attorneys are competing for the same clients and opportunities.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              Your headshot is often the first impression people have of you.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              It appears on LinkedIn, company websites, press releases, email signatures, and marketing materials long before someone meets you in person. A strong business headshot communicates professionalism and confidence at a glance.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              For more than 14 years, I&apos;ve been creating professional business headshots for professionals throughout the Phoenix area. I work with executives, entrepreneurs, sales teams, attorneys, real estate professionals, and companies of every size across the Valley. My studio is set up to make the experience simple and comfortable.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              During your session, I guide you through natural posing and expression so your images look confident, not stiff or overly posed. Professional lighting and careful retouching keep the final images polished and modern while still looking like you.
            </p>

            <p className="font-raleway text-xl font-normal mb-6" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              Whether you need a single headshot for LinkedIn or a full set for your website and marketing, you&apos;ll leave with photos you&apos;re proud to use.
            </p>

            <p className="font-raleway text-xl font-normal mb-0" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.7',
              color: '#575757'
            }}>
              No awkward poses.<br />
              No over-processed editing.<br />
              Just business headshots that make you look like the professional you are.
            </p>
          </div>
        </div>
      </section>

      {/* Helpful Tips - Clothing Guides */}
      <section className="py-8" style={{ backgroundColor: '#F1F1F1' }}>
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
                href="/blog/womens-headshot-clothing-guide"
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
            <h2 className="font-raleway text-4xl font-medium mb-8" style={{ color: '#5577a5' }}>
              GROUP CORPORATE HEADSHOTS PHOENIX
            </h2>
            
            <p className="font-raleway text-xl mb-8" style={{ color: '#5577a5', fontWeight: '400' }}>
              If you are looking for group corporate headshots in Phoenix, I come to your office for on-location staff and team sessions.
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