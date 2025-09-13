import Layout from '@/components/Layout'
import Link from 'next/link'
import GetPricingButton from '@/components/GetPricingButton'
import AccordionFAQSection from '@/components/sections/AccordionFAQSection'
import ThreeReviewSection from '@/components/sections/ThreeReviewSection'

export default function ActorPricing() {
  const actorFAQs = [
    {
      id: 1,
      question: "What's the difference between theatrical and commercial headshots?",
      answer: "Theatrical headshots are more serious and dramatic, showing your depth for film and theater roles. Commercial headshots are bright, friendly, and approachable for advertising work."
    },
    {
      id: 2,
      question: "How many outfit changes should I bring?",
      answer: "Bring 5-6 outfits to give us options. We'll select the best ones that work for your different character types and the lighting setup."
    },
    {
      id: 3,
      question: "Should I wear makeup to my session?",
      answer: "Yes! Natural, camera-ready makeup is essential. We can recommend professional makeup artists who specialize in headshot makeup if needed."
    },
    {
      id: 4,
      question: "How often should I update my headshots?",
      answer: "Every 1-2 years, or whenever your appearance changes significantly. Your headshot should look like you on your best day, right now."
    },
    {
      id: 5,
      question: "What format will my headshots be in?",
      answer: "High-resolution JPEGs suitable for 8x10 prints, plus web-optimized versions for Actors Access, LA Casting, and other online platforms."
    },
    {
      id: 6,
      question: "Can I see the images during the session?",
      answer: "Yes! We'll review images periodically during the shoot to ensure we're capturing the looks you need and make adjustments as necessary."
    },
    {
      id: 7,
      question: "Do you shoot on location?",
      answer: "Yes, we offer both studio and outdoor/environmental sessions. Natural light outdoor sessions can add variety to your portfolio."
    },
    {
      id: 8,
      question: "What if I'm nervous in front of the camera?",
      answer: "Don't worry! We work with actors at all comfort levels. Our relaxed approach and professional direction will help you feel confident and natural."
    },
    {
      id: 9,
      question: "When will I get my final images back?",
      answer: "Your final images will be done within 7 business days from the time you selected your favorite images.\n\nSame day Retouching – is available at an additional fee of $50.00"
    }
  ]

  return (
    <>
      <Layout 
        title="Actor Headshot Rates | CMQ Headshots Phoenix"
        description="Professional actor headshot pricing in Phoenix. Specialized packages for theatrical, commercial, and modeling headshots with expert direction."
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
                src="/images/website media/CMQHEADSHOTS-Kyldie10769-fullres-scaled (1).webp"
                alt="Theatrical actor headshot"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="relative aspect-square">
              <img 
                src="/images/website media/CMQHEADSHOTS-Kyldie10684-fullres-scaled (1).webp"
                alt="Commercial actor headshot"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="relative aspect-square">
              <img 
                src="/images/website media/CMQHEADSHOTS-Kyldie10624-fullres-scaled.webp"
                alt="Character actor headshot"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="relative aspect-square">
              <img 
                src="/images/website media/CMQHEADSHOTS-Kyldie10745-fullres-scaled (1).webp"
                alt="Professional actor headshot"
                className="w-full h-full object-cover object-top"
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
            <h1 className="font-raleway text-4xl" style={{ color: 'white' }}>
              <span className="font-normal" style={{ color: 'white' }}>PHOENIX ACTOR & THEATRICAL</span> <span className="font-bold" style={{ color: 'white' }}>HEADSHOT RATES</span>
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
                  <h4 className="font-raleway mb-12" style={{ color: '#5a81b9', lineHeight: '1.8' }}>
                    <div className="text-3xl md:text-4xl mb-4">
                      <span className="font-bold">CAPTIVATING, CHARACTER-DRIVEN</span>
                    </div>
                    <div className="text-4xl md:text-5xl mb-4">
                      <span className="font-normal">HEADSHOTS</span>
                    </div>
                    <div className="text-2xl md:text-3xl">
                      <span className="font-normal">FOR</span> <span className="font-bold">ACTORS & PERFORMERS</span>
                    </div>
                  </h4>
                  
                  <div className="mb-12">
                    <div className="text-6xl mb-12" style={{ color: '#5a81b9', fontWeight: '400' }}>
                      $250
                    </div>
                    
                    <div className="space-y-8">
                      <p className="font-raleway text-2xl italic" style={{ color: '#575757' }}>
                        plus
                      </p>
                      <p className="font-raleway text-lg font-bold" style={{ color: '#575757' }}>
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
                title="Schedule Actor Headshot Session" 
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

      {/* Four Images Section - Duplicate of Top Section */}
      <section className="relative" style={{ backgroundColor: '#5a81b9' }}>
        {/* Four Headshots Row */}
        <div className="relative">
          <div className="grid grid-cols-4 w-full">
            <div className="relative aspect-[4/5] bg-gray-100">
              <img 
                src="/images/website media/CMQHEADSHOTS-mohmad12094-vert-c-fullres-scaled.webp"
                alt="Theatrical actor headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <img 
                src="/images/website media/CMQHEADSHOTS-mohmad12050c.webp"
                alt="Commercial actor headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <img 
                src="/images/website media/CMQHEADSHOTS-mohmad12167b.webp"
                alt="Character actor headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <img 
                src="/images/website media/CMQHEADSHOTS-mohmad12194a.webp"
                alt="Professional actor headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Every Session Includes Section */}
      <section className="py-16" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-4xl font-bold mb-8" style={{ color: '#5a81b9' }}>
              EVERY ACTOR SESSION INCLUDES
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Card 1 - Multiple Looks */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5a81b9' }}>
                <svg className="w-8 h-8" style={{ color: '#5a81b9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5a81b9' }}>
                MULTIPLE CHARACTER LOOKS
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Capture your range with theatrical, commercial, and character-specific looks that showcase your versatility as a performer.
              </p>
            </div>

            {/* Card 2 - Professional Direction */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5a81b9' }}>
                <svg className="w-8 h-8" style={{ color: '#5a81b9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5a81b9' }}>
                PROFESSIONAL DIRECTION
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Expert guidance on expressions, angles, and energy levels to bring out authentic performances that casting directors want to see.
              </p>
            </div>

            {/* Card 3 - Industry Standards */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5a81b9' }}>
                <svg className="w-8 h-8" style={{ color: '#5a81b9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5a81b9' }}>
                INDUSTRY STANDARDS
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Headshots formatted to meet current industry specifications for Actors Access, LA Casting, and other casting platforms.
              </p>
            </div>

            {/* Card 4 - Natural Light Options */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5a81b9' }}>
                <svg className="w-8 h-8" style={{ color: '#5a81b9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5a81b9' }}>
                NATURAL LIGHT OPTIONS
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Studio and natural light settings available to create the perfect mood and atmosphere for each of your character types.
              </p>
            </div>

            {/* Card 5 - Wardrobe Consultation */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5a81b9' }}>
                <svg className="w-8 h-8" style={{ color: '#5a81b9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5a81b9' }}>
                WARDROBE CONSULTATION
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Pre-session guidance on wardrobe selection to ensure your clothing enhances rather than distracts from your face and performance.
              </p>
            </div>

            {/* Card 6 - Fast Turnaround */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5a81b9' }}>
                <svg className="w-8 h-8" style={{ color: '#5a81b9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5a81b9' }}>
                FAST TURNAROUND
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Get your professionally retouched headshots within 48-72 hours, ready for auditions and casting submissions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Four Images Section - Additional Strip */}
      <section className="relative" style={{ backgroundColor: '#5a81b9' }}>
        {/* Four Headshots Row */}
        <div className="relative">
          <div className="grid grid-cols-4 w-full">
            <div className="relative aspect-[4/5] bg-gray-100">
              <img 
                src="/images/website media/Phoenix-Actor-Headshots-CMQ-HEADSHOTS.webp"
                alt="Theatrical actor headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <img 
                src="/images/website media/NinaE8132-jpmini-leg-sqo.webp"
                alt="Commercial actor headshot"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <img 
                src="/images/website media/CMQHEADSHOTSSophia4554f-instagram.webp"
                alt="Character actor headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <img 
                src="/images/website media/CMQHeadshots-AshleyM0415-web-jp-leg-sq.webp"
                alt="Professional actor headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Actor Headshots Different Section */}
      <section className="py-16" style={{ 
        backgroundColor: '#ffffff'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-raleway text-3xl md:text-4xl text-center mb-12" style={{ color: '#5a81b9' }}>
              <span className="font-normal" style={{ color: '#5a81b9' }}>WHAT MAKES</span> <span className="font-bold" style={{ color: '#5a81b9' }}>ACTOR HEADSHOTS DIFFERENT</span>
            </h2>
            
            <div className="space-y-8">
              {/* Casting Directors Need */}
              <div className="text-center">
                <p className="font-raleway font-normal text-xl md:text-2xl text-gray-700 leading-relaxed">
                  – Casting directors need to see YOU, not just a pretty picture. Your headshots should capture your essence, personality, and the types of roles you can authentically portray.
                </p>
              </div>
              
              {/* Industry Experience */}
              <div className="text-center">
                <p className="font-raleway font-normal text-xl md:text-2xl text-gray-700 leading-relaxed">
                  – With over 12 years photographing actors and performers, I understand the specific requirements of theatrical and commercial headshots that get you noticed.
                </p>
              </div>
              
              {/* Formats Provided */}
              <div className="text-center">
                <p className="font-raleway font-normal text-xl md:text-2xl text-gray-700 leading-relaxed">
                  – All images are delivered in high-resolution formats optimized for print (8x10) and web submission to casting platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <ThreeReviewSection
        title="WHAT ACTORS SAY"
        reviews={[
          {
            image: "/images/website media/CMQHEADSHOTS-Kyldie10684-fullres-scaled (1).webp",
            imageAlt: "Commercial actor testimonial",
            name: "KLYDIE MORE",
            review: "As a commercial actor, I needed headshots that showed my approachable, friendly side. Cindy created a comfortable environment that allowed my personality to shine through. The results exceeded my expectations!",
            stars: 5
          },
          {
            image: "/images/website media/CMQHEADSHOTS-mohmad12094-vert-c-fullres-scaled.webp",
            imageAlt: "Theater actor testimonial",
            name: "MOHAMAD TOKKO",
            review: "Cindy knows exactly what casting directors are looking for. She captured my theatrical and commercial looks perfectly, and I've been getting so many more auditions since updating my headshots. Her direction during the session was invaluable!",
            stars: 5
          },
          {
            image: "/images/website media/Phoenix-Actor-Headshots-CMQ-HEADSHOTS.webp",
            imageAlt: "Musical theater actor testimonial",
            name: "JESSICA WILLIAMS",
            review: "The variety of looks Cindy captured in one session was amazing! I now have headshots for musical theater, straight plays, and commercial work. Her understanding of the industry really shows in the final images.",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        textColor="white"
      />

      {/* FAQ Section - Actor Specific with Accordion */}
      <AccordionFAQSection
        title="ACTOR HEADSHOT QUESTIONS"
        subtitle="Get answers to the most common questions about actor headshot sessions"
        faqs={actorFAQs}
        backgroundColor="white"
        textColor="#5a81b9"
      />


      </Layout>
    </>
  )
}