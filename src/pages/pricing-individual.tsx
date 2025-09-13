import Layout from '@/components/Layout'
import Link from 'next/link'
import GetPricingButton from '@/components/GetPricingButton'
import AccordionFAQSection from '@/components/sections/AccordionFAQSection'
import ThreeReviewSection from '@/components/sections/ThreeReviewSection'

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
      question: "Do you have hair advise?",
      answer: "I want you to look like you normally do on your best day. Most men and women know their hair better than anyone else. You know when your hair looks best either the day after a shower or the day of the shower.\n\nIf you have a hairstylist or a barber who knows your hair well and you like the way they do it, then absolutely make an appointment but don't do anything different than the way you normally wear your hair.\n\nFor women, we move your hair around a lot during a headshot session so don't spray it will ultra hold hair hairspray. Use something that will let your hair move."
    }
  ]

  return (
    <>
      <Layout 
        title="Individual Headshot Rates | CMQ Headshots Phoenix"
        description="Professional individual headshot pricing in Phoenix. Flexible packages for business professionals, LinkedIn profiles, and personal branding."
        headerButtonText="CONTACT US"
        headerButtonLink="/contact"
      >
      {/* Header with Headshots */}
      <section className="relative" style={{ 
        backgroundColor: '#575757',
        backgroundImage: 'url("/images/website media/grey linen-background.jpg")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        {/* Four Headshots Row */}
        <div className="relative">
          <div className="grid grid-cols-4 w-full">
            <div className="relative aspect-square">
              <img 
                src="/images/website media/CMQHEADSHOTS-2806-1x1.jpg"
                alt="Professional business headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-square">
              <img 
                src="/images/website media/CMQHeadshots-5963a-web (1).jpg"
                alt="Executive headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-square">
              <img 
                src="/images/website media/CMQHeadshots-5855a female headshot.webp"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-square">
              <img 
                src="/images/website media/CMQHeadshots-609-casual headshot.webp"
                alt="Business headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Title Overlay */}
        <div className="relative py-12" style={{ 
          backgroundColor: '#575757',
          backgroundImage: 'url("/images/website media/grey linen-background.jpg")',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto'
        }}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-raleway text-4xl md:text-5xl" style={{ color: 'white' }}>
              <span className="font-normal" style={{ color: 'white' }}>PHOENIX INDIVIDUAL BUSINESS</span> <span className="font-bold" style={{ color: 'white' }}>HEADSHOT RATES</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Pricing and Calendar Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            
            {/* Left Side - Pricing Information */}
            <div className="w-full">
              <div className="bg-white border-2 border-gray-300 rounded-lg p-8 h-[800px] flex items-center justify-center shadow-lg w-full">
                <div className="text-center max-w-md">
                  <h2 className="font-raleway mb-12" style={{ color: '#5a81b9', lineHeight: '1.8' }}>
                    <div className="text-3xl md:text-4xl mb-4">
                      <span className="font-bold">COMFORTABLE, EASY</span>
                    </div>
                    <div className="text-4xl md:text-5xl mb-4">
                      <span className="font-normal">HEADSHOTS</span>
                    </div>
                    <div className="text-2xl md:text-3xl">
                      <span className="font-normal">YOU&apos;RE</span> <span className="font-bold">GOING TO LOVE</span>
                    </div>
                  </h2>
                  
                  <div className="mb-12">
                    <div className="text-6xl mb-12" style={{ color: '#5a81b9', fontWeight: '400' }}>
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
                height="800" 
                frameBorder="0" 
                allow="payment"
                className="w-full"
              ></iframe>
            </div>
            
          </div>
          
          {/* Appointment Notice */}
          <div className="text-center mt-8">
            <p className="font-raleway text-lg text-gray-600">
              All sessions by appointment only. Book now to secure your preferred date.
            </p>
          </div>
        </div>
      </section>

      {/* Every Session Includes Section */}
      <section className="py-16" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-4xl font-bold mb-8" style={{ color: '#5a81b9' }}>
              EVERY SESSION INCLUDES
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Card 1 - Unlimited Shooting Time */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5a81b9' }}>
                <svg className="w-8 h-8" style={{ color: '#5a81b9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5a81b9' }}>
                UNLIMITED SHOOTING TIME
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Every photo session is customized to your needs. I want you to leave the studio with images that help you succeed.
              </p>
            </div>

            {/* Card 2 - Unlimited Outfits */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5a81b9' }}>
                <svg className="w-8 h-8" style={{ color: '#5a81b9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5a81b9' }}>
                UNLIMITED OUTFITS
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                You can bring all the outfits you would like to get captured in front of the camera. I will give you guidance on what will work best.
              </p>
            </div>

            {/* Card 3 - Various Backdrops */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5a81b9' }}>
                <svg className="w-8 h-8" style={{ color: '#5a81b9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5a81b9' }}>
                VARIOUS BACKDROPS
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                I will pick a color that will be best for your outfit If you need something specific we can match existing website backgrounds.
              </p>
            </div>

            {/* Card 4 - Professional Retouching */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5a81b9' }}>
                <svg className="w-8 h-8" style={{ color: '#5a81b9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5a81b9' }}>
                PROFESSIONAL RETOUCHING
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                All purchased images receive professional retouching to ensure you look your absolute best in every photo.
              </p>
            </div>

            {/* Card 5 - Preparation Information */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5a81b9' }}>
                <svg className="w-8 h-8" style={{ color: '#5a81b9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5a81b9' }}>
                PREPARATION INFORMATION
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                You&apos;ll receive detailed preparation tips and guidance to help you look and feel your best for your session.
              </p>
            </div>

            {/* Card 6 - 1-on-1 Image Selection */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5a81b9' }}>
                <svg className="w-8 h-8" style={{ color: '#5a81b9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5a81b9' }}>
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
      <section className="py-16" style={{ backgroundColor: '#5a81b9' }}>
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
            image: "/images/website media/CMQHEADSHOTS-2806-1x1.jpg",
            imageAlt: "Denise Andrade headshot",
            name: "DENISE ANDRADE",
            review: "Cindy took headshots for my consulting company, and she was wonderful to work with! She is a true professional who helps you get the best-looking photos, and I am very happy with my headshots. She sends helpful tips before your appointment to help you prep, knows what works in terms of clothing, poses, and generally makes me feel at ease during my appointment.",
            stars: 5
          },
          {
            image: "/images/website media/CMQHeadshots-5963a-web (1).jpg",
            imageAlt: "Scott Anderson headshot",
            name: "SCOTT ANDERSON",
            review: "I found CMQ Headshots, and my company was able to schedule and pay for everything remotely, easily. Cindy is an excellent photographer. I felt relaxed and comfortable. Her photography skills, approach, and personality created a comfortable atmosphere, which resulted in photos more reflective of myself. I highly recommend.",
            stars: 5
          },
          {
            image: "/images/website media/CMQHEADSHOTS-executive-headshots-phoenix-11669-web-2.webp",
            imageAlt: "Jenny Bolt headshot",
            name: "JENNY BOLT",
            review: "Cindy was amazing...she made me feel so comfortable throughout the entire process. I'm not one who enjoys photos of myself, and Cindy helped me feel relaxed and actually really enjoyed the process. We got some amazing photos. Her turnaround time was extremely fast. I would definitely recommend CMQ Headshots!",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        textColor="white"
      />

      {/* FAQ Section with Accordion */}
      <AccordionFAQSection
        title="FREQUENTLY ASKED QUESTIONS"
        subtitle="Get answers to common questions about our individual headshot sessions"
        faqs={individualFAQs}
        backgroundColor="white"
        textColor="#5a81b9"
      />

      {/* Staff/Team Headshots Section */}
      <section className="py-16" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-raleway text-4xl font-bold mb-8" style={{ color: '#5a81b9' }}>
              HEADSHOTS FOR YOUR STAFF OR TEAM?
            </h2>
            
            <p className="font-raleway text-xl mb-8" style={{ color: '#5a81b9', fontWeight: '400' }}>
              If you are looking for on-location staff and team headshots.
            </p>
            
            <p className="font-raleway text-xl mb-8" style={{ color: '#5a81b9', fontWeight: '400' }}>
              Click on the &quot;Request A Quote&quot; button.
            </p>
            
            <Link
              href="/corporate-staff-headshots"
              className="inline-block text-white font-raleway text-lg font-medium px-8 py-3 rounded transition-colors duration-300"
              style={{ backgroundColor: '#5a81b9' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#575757';
                e.currentTarget.style.backgroundImage = 'url("/images/website media/grey linen-background.jpg")';
                e.currentTarget.style.backgroundRepeat = 'repeat';
                e.currentTarget.style.backgroundSize = 'auto';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5a81b9';
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