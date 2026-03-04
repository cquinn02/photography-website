import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import GetPricingButton from '@/components/GetPricingButton'
import AccordionFAQSection from '@/components/sections/AccordionFAQSection'
import ThreeReviewSection from '@/components/sections/ThreeReviewSection'
import FAQSchema from '@/components/FAQSchema'

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
      answer: "You don't need to wear it to the session — you can do it when you get here. Keep it minimal: a little mascara, lipstick or gloss, and minimal blush is all you need. The goal is to look like the best version of yourself. It's not about heavy makeup."
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
      question: "What if I'm nervous in front of the camera?",
      answer: "Don't worry! We work with actors at all comfort levels. Our relaxed approach and professional direction will help you feel confident and natural."
    },
    {
      id: 8,
      question: "When will I get my final images back?",
      answer: "Your final images will be done within 7 business days from the time you selected your favorite images.\n\nSame day Retouching – is available at an additional fee of $50.00"
    }
  ]

  return (
    <>
      <Layout
        title="Actor Headshots Phoenix AZ | Professional Actor Headshot Photographer | CMQ Headshots"
        description="Professional actor headshots in Phoenix, AZ. Theatrical, commercial, and character headshots with expert direction tailored to the roles you want."
        canonical="https://www.cmqheadshots.com/actor-headshots-phoenix"
        ogUrl="https://www.cmqheadshots.com/actor-headshots-phoenix"
        showHeaderContact={true}
      >
      {/* FAQ Schema for AI Visibility */}
      <FAQSchema faqs={actorFAQs.map(faq => ({ question: faq.question, answer: faq.answer }))} />

      {/* Service Schema + BreadcrumbList for Actor Headshots */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Actor Headshots Phoenix AZ",
            "description": "Professional actor headshot photography in Phoenix, Arizona. Theatrical, commercial, child actor, voiceover, modeling, and comedy performer headshots with expert direction.",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://www.cmqheadshots.com",
              "name": "CMQ Headshots"
            },
            "areaServed": {
              "@type": "City",
              "name": "Phoenix",
              "sameAs": "https://en.wikipedia.org/wiki/Phoenix,_Arizona"
            },
            "serviceType": "Actor Headshot Photography",
            "offers": {
              "@type": "Offer",
              "price": "250",
              "priceCurrency": "USD",
              "description": "Actor headshot session fee. Images purchased separately at $100 each.",
              "url": "https://www.cmqheadshots.com/actor-headshots-phoenix"
            },
            "url": "https://www.cmqheadshots.com/actor-headshots-phoenix"
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
                "name": "Actor Headshots Phoenix",
                "item": "https://www.cmqheadshots.com/actor-headshots-phoenix"
              }
            ]
          }) }}
        />
      </Head>

      {/* Header with Headshots */}
      <section className="relative" style={{ backgroundColor: '#575757' }}>
        {/* Four Headshots Row */}
        <div className="relative" style={{ lineHeight: 0 }}>
          <div className="grid grid-cols-4 w-full">
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/optimized/NinaE8039b-2-optimized.webp"
                alt="Theatrical actor headshot Phoenix AZ - dramatic studio lighting by CMQ Headshots"
                fill
                className="object-cover"
                sizes="25vw"
                priority
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/optimized/NinaE8168b-2-optimized.webp"
                alt="Commercial actor headshot Phoenix Arizona - approachable expression for casting"
                fill
                className="object-cover"
                sizes="25vw"
                priority
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/optimized/NinaE8136b-optimized.webp"
                alt="Character-driven actor headshot Phoenix AZ - confident expression for auditions"
                fill
                className="object-cover"
                sizes="25vw"
                priority
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/optimized/NinaE8250-white-optimized.webp"
                alt="Professional actress headshot Phoenix AZ - clean white background portrait"
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
            <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl" style={{ color: 'white' }}>
              <span className="font-bold" style={{ color: 'white' }}>ACTOR HEADSHOTS</span><br />
              <span className="font-normal" style={{ color: 'white' }}>PHOENIX, AZ</span>
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
                  <h4 className="font-raleway mb-12" style={{ color: '#5577a5', lineHeight: '1.8' }}>
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
                    <div className="text-6xl mb-12" style={{ color: '#5577a5', fontWeight: '400' }}>
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
                src="https://cmqheadshots.as.me/Actor-model"
                title="Schedule Actor Headshot Session"
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
            <p className="font-raleway text-gray-600 mt-4" style={{ fontSize: '18px' }}>
              If you don&apos;t see a date or time that works for you, please <Link href="/contactus" className="underline hover:no-underline" style={{ color: '#5577a5' }}>contact me</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Four Images Section - Ethan Images */}
      <section className="relative" style={{ backgroundColor: '#5577a5' }}>
        {/* Four Headshots Row */}
        <div className="relative">
          <div className="grid grid-cols-4 w-full">
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots-EthanD-Actor-Phoenix1-optimized.webp"
                alt="Male actor headshot Phoenix AZ - cinematic theatrical portrait by CMQ Headshots"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots-EthanD-Actor-Phoenix2-optimized.webp"
                alt="Actor commercial headshot Phoenix Arizona - friendly natural expression"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots-EthanD-Actor-Phoenix3-optimized.webp"
                alt="Phoenix actor headshot - dramatic character look with studio lighting"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots-EthanD-Actor-Phoenix4-optimized.webp"
                alt="Professional acting headshot Phoenix AZ - versatile look for casting submissions"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Every Session Includes Section */}
      <section className="py-16" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-4xl font-bold mb-8" style={{ color: '#5577a5' }}>
              EVERY ACTOR SESSION INCLUDES
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Card 1 - Multiple Looks */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                MULTIPLE CHARACTER LOOKS
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Capture your range with theatrical, commercial, and character-specific looks that showcase your versatility as a performer.
              </p>
            </div>

            {/* Card 2 - Professional Direction */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                PROFESSIONAL DIRECTION
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Expert guidance on expressions, angles, and energy levels to bring out authentic performances that casting directors want to see.
              </p>
            </div>

            {/* Card 3 - Industry Standards */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                INDUSTRY STANDARDS
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Headshots formatted to meet current industry specifications for Actors Access, LA Casting, and other casting platforms.
              </p>
            </div>

            {/* Card 4 - Natural Light Options */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                NATURAL LIGHT OPTIONS
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Studio and natural light settings available to create the perfect mood and atmosphere for each of your character types.
              </p>
            </div>

            {/* Card 5 - Wardrobe Consultation */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                WARDROBE CONSULTATION
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Pre-session guidance on wardrobe selection to ensure your clothing enhances rather than distracts from your face and performance.
              </p>
            </div>

            {/* Card 6 - Fast Turnaround */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#5577a5' }}>
                <svg className="w-8 h-8" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#5577a5' }}>
                FAST TURNAROUND
              </h3>
              <p className="font-raleway text-gray-700 leading-relaxed">
                Get your professionally retouched headshots within 48-72 hours, ready for auditions and casting submissions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Four Images Section - Kyldie Images */}
      <section className="relative" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        {/* Four Headshots Row */}
        <div className="relative">
          <div className="grid grid-cols-4 w-full">
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-Kyldie10769-fullres-scaled%20(1).webp"
                alt="Actress theatrical headshot Phoenix AZ - expressive portrait for theater auditions"
                fill
                className="object-cover object-top"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-Kyldie10684-fullres-scaled%20(1).webp"
                alt="Commercial actress headshot Phoenix Arizona - warm approachable casting photo"
                fill
                className="object-cover object-top"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-Kyldie10624-fullres-scaled.webp"
                alt="Actor headshot with character range Phoenix AZ - multiple looks in one session"
                fill
                className="object-cover object-top"
                sizes="25vw"
              />
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-Kyldie10745-fullres-scaled%20(1).webp"
                alt="Professional performer headshot Phoenix AZ - polished portrait for acting portfolio"
                fill
                className="object-cover object-top"
                sizes="25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Actor Headshots Section */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl md:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-bold">TYPES OF ACTOR HEADSHOTS</span> <span className="font-normal">I PHOTOGRAPH</span>
            </h2>

            <div className="space-y-12">

              {/* Commercial Headshots */}
              <div>
                <h2 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  COMMERCIAL ACTING HEADSHOTS
                </h2>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.7' }}>
                  Commercial headshots are bright, warm, and full of personality. These are the headshots you need when you&apos;re auditioning for TV commercials, print ads, corporate training videos, and lifestyle campaigns. The lighting is even and flattering, the background is clean, and your expression is open and approachable — the kind of face that makes viewers feel like they already know and trust you. I&apos;ll coach you through a range of genuine smiles and friendly expressions that show you&apos;re the relatable, everyday person that brands are looking for. If you&apos;re pursuing commercial work in the Phoenix market, this is the headshot that gets you in the door.
                </p>
              </div>

              {/* Theatrical Headshots */}
              <div>
                <h2 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  THEATRICAL HEADSHOTS
                </h2>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.7' }}>
                  Theatrical headshots are darker, moodier, and more intense. These capture the depth and range you bring to dramatic roles — think Shakespeare&apos;s Hamlet or Macbeth, Arthur Miller&apos;s Death of a Salesman, Tennessee Williams&apos; A Streetcar Named Desire, or modern dramas like August: Osage County. The lighting is more sculpted with deeper shadows, and your expression conveys emotional weight and complexity. Casting directors for film, television dramas, and stage productions need to see that you can carry the intensity of a scene. I use dramatic lighting techniques to bring out the gravitas in your look while keeping the image natural and authentic to who you are as a performer.
                </p>
              </div>

              {/* Kid/Child Actor Headshots */}
              <div>
                <h2 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  CHILD &amp; TEEN ACTOR HEADSHOTS
                </h2>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.7' }}>
                  Photographing young actors requires a different approach. Kids and teens need to feel comfortable and relaxed in the studio — not posed or stiff. I work with young performers at their pace, keeping the session fun and low-pressure so their natural personality shines through. Parents are welcome to stay in the studio. For child actors, casting directors want to see the real kid — not a miniature adult. The headshot should capture their age-appropriate look, natural expressions, and the spark that makes them stand out. I&apos;ll guide them through gentle direction that brings out authentic reactions, whether they&apos;re auditioning for commercials, film, or theater productions in the Phoenix area.
                </p>
              </div>

              {/* Voice Actor / Voiceover Headshots */}
              <div>
                <h2 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  VOICEOVER &amp; VOICE ACTOR HEADSHOTS
                </h2>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.7' }}>
                  This is a <a href="https://www.backstage.com/magazine/article/truth-voiceover-headshots-1108/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: '#5577a5' }}>heated debate in the voiceover world</a>: do voice actors even need a headshot? Some argue that showing your face creates bias — casting directors might make assumptions about your age, type, or vocal range based on how you look instead of how you sound. Others use a cartoon avatar instead of a real photo. Personally, I think that raises more questions than it answers — what are you hiding?
                </p>
                <p className="font-raleway text-lg text-center leading-relaxed mt-4" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.7' }}>
                  Here&apos;s the truth: it depends on your career path, and ultimately it&apos;s your decision. But I&apos;m a headshot photographer, so I&apos;m going to tell you that you need at least one professional headshot. Your photo shows up on casting platforms, agency websites, LinkedIn, and your own marketing materials. People want to put a face to the voice — it builds connection and trust. A strong voiceover headshot conveys warmth, energy, and the personality behind the voice. Whether you specialize in animation, audiobooks, commercials, or narration, I&apos;ll capture a look that makes a producer want to hear what you sound like.
                </p>
              </div>

              {/* Modeling / Commercial Print */}
              <div>
                <h2 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  MODELING &amp; COMMERCIAL PRINT HEADSHOTS
                </h2>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.7' }}>
                  If you&apos;re pursuing modeling or commercial print work alongside acting, you need headshots that show your versatility. These sessions focus on capturing a range of looks — from editorial and fashion-forward to clean commercial shots that agencies and brands want to see. I&apos;ll help you showcase different sides of your look with wardrobe changes, varied expressions, and multiple lighting setups. Many Phoenix actors work across both acting and modeling, and having headshots that serve both markets means more auditions and more bookings.
                </p>
              </div>

              {/* Stand-Up / Comedy Headshots */}
              <div>
                <h2 className="font-raleway text-2xl font-bold text-center mb-4" style={{ color: '#5577a5' }}>
                  COMEDY &amp; STAND-UP PERFORMER HEADSHOTS
                </h2>
                <p className="font-raleway text-lg text-center leading-relaxed" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.7' }}>
                  Comedy performers need a headshot that shows their personality and sense of humor without being goofy. The best comedy headshots capture a knowing look, a subtle smirk, or an expression that says &quot;I&apos;m about to make you laugh.&quot; Whether you perform stand-up at comedy clubs around Phoenix, do improv, or audition for comedic roles in film and TV, your headshot should project confidence and likability. I&apos;ll help you find that sweet spot between professional and personable that makes casting directors and bookers take notice.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl md:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-bold">WHAT TO EXPECT</span> <span className="font-normal">AT YOUR ACTOR HEADSHOT SESSION</span>
            </h2>

            <div className="space-y-6">
              <p className="font-raleway text-lg text-center leading-relaxed" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.7' }}>
                Your actor headshot session starts well before you arrive at the studio. After you book, we&apos;ll schedule a phone consultation where I learn about your acting career, the roles you&apos;re pursuing, and what you want your headshots to communicate to casting directors. This is where we plan your wardrobe, discuss hair and grooming, and map out the different looks we&apos;ll capture during the session.
              </p>

              <p className="font-raleway text-lg text-center leading-relaxed" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.7' }}>
                On the day of your shoot, plan to arrive a few minutes early so you can settle in and get comfortable. My Phoenix studio is a relaxed, professional space where you can change outfits and touch up your hair or <Link href="/blog/what-kind-of-makeup-should-i-wear-to-my-headshot-session" className="underline hover:no-underline" style={{ color: '#5577a5' }}>makeup</Link> between looks. We&apos;ll start with whatever look feels most natural to you, then work through your planned wardrobe changes from there.
              </p>

              <p className="font-raleway text-lg text-center leading-relaxed" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.7' }}>
                During the session, I&apos;ll direct you through a range of expressions and subtle adjustments — a slight tilt of the head, a shift in where your eyes focus, the difference between a warm commercial smile and a grounded theatrical look. We review images together on the monitor throughout the shoot so you can see what&apos;s working and we can make adjustments in real time. Most actors are surprised by how much variety we capture in a single session.
              </p>

              <p className="font-raleway text-lg text-center leading-relaxed" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.7' }}>
                After the session, I&apos;ll prepare a private online gallery where you can view all of your images. You choose the ones you want to purchase — there&apos;s no minimum and no pressure. Your selected images are <Link href="/blog/should-the-photographer-photoshop-you" className="underline hover:no-underline" style={{ color: '#5577a5' }}>professionally retouched</Link> and delivered within 7 business days, ready to upload to Actors Access, LA Casting, Backstage, and any other platforms where you submit for roles. Need them faster? Same-day retouching is available for an additional fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Actor Headshots Different Section */}
      <section className="py-16" style={{
        backgroundColor: '#F1F1F1'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-raleway text-3xl md:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-normal" style={{ color: '#5577a5' }}>WHAT MAKES</span> <span className="font-bold" style={{ color: '#5577a5' }}>ACTOR HEADSHOTS DIFFERENT</span>
            </h2>

            <div className="space-y-8">
              {/* Casting Directors Need */}
              <div className="text-center">
                <p className="font-raleway font-normal text-xl md:text-2xl text-gray-700 leading-relaxed">
                  – Casting directors need to see YOU, not just a pretty picture. Your headshots should capture your essence, personality, and the types of roles you can authentically portray. A corporate headshot focuses on professionalism — an actor headshot needs to show emotion, range, and the spark that makes you memorable in a stack of submissions.
                </p>
              </div>

              {/* Industry Experience */}
              <div className="text-center">
                <p className="font-raleway font-normal text-xl md:text-2xl text-gray-700 leading-relaxed">
                  – With over 12 years photographing actors and performers in Phoenix, I understand the specific requirements of theatrical and commercial headshots that get you noticed. I stay current with what casting directors and talent agents want to see, so your headshots never look outdated or out of touch with industry standards.
                </p>
              </div>

              {/* Collaborative Direction */}
              <div className="text-center">
                <p className="font-raleway font-normal text-xl md:text-2xl text-gray-700 leading-relaxed">
                  – Every session includes personalized direction based on the character types and roles you&apos;re pursuing. I don&apos;t use a one-size-fits-all approach — your session is tailored to your unique look, your strengths as a performer, and the specific market you&apos;re targeting.
                </p>
              </div>

              {/* Flexible Purchasing */}
              <div className="text-center">
                <p className="font-raleway font-normal text-xl md:text-2xl text-gray-700 leading-relaxed">
                  – You only buy the images you love. There&apos;s no minimum purchase and no pressure. Whether you need one strong theatrical headshot or a full collection of looks for different casting categories, the choice is yours.
                </p>
              </div>

              {/* Formats Provided */}
              <div className="text-center">
                <p className="font-raleway font-normal text-xl md:text-2xl text-gray-700 leading-relaxed">
                  – All images are delivered in high-resolution formats optimized for print (8x10) and web submission to Actors Access, LA Casting, Backstage, and other casting platforms used by Phoenix actors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Phoenix Actors Choose CMQ Section */}
      <section className="py-16" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl md:text-4xl text-center mb-12" style={{ color: 'white' }}>
              <span className="font-bold">WHY PHOENIX ACTORS</span> <span className="font-normal">CHOOSE CMQ HEADSHOTS</span>
            </h2>

            <div className="space-y-6">
              <p className="font-raleway text-lg text-center leading-relaxed" style={{ color: 'white', fontWeight: '400', lineHeight: '1.7' }}>
                Your actor headshot session with me is a collaborative process from start to finish. Before we ever step into the studio, we&apos;ll have a phone consultation where we talk through exactly what you want to accomplish. What roles are you going after? What character types do you want to showcase? This conversation shapes every decision we make together.
              </p>

              <p className="font-raleway text-lg text-center leading-relaxed" style={{ color: 'white', fontWeight: '400', lineHeight: '1.7' }}>
                During our pre-session call, we&apos;ll plan your wardrobe choices, discuss how you want to wear your hair, and talk about the expressions and energy that will help you get noticed by casting directors. By the time you walk into the studio, we both have a clear vision for the session — no guesswork, no wasted time.
              </p>

              <p className="font-raleway text-lg text-center leading-relaxed" style={{ color: 'white', fontWeight: '400', lineHeight: '1.7' }}>
                With <Link href="/about" className="underline hover:no-underline" style={{ color: '#ffffff' }}>over 12 years of experience</Link> photographing actors and performers in Phoenix, I understand what casting directors and agents are looking for. I&apos;ll direct you through expressions and angles that bring out authentic performances on camera — the kind that make someone stop scrolling and call you in for an audition.
              </p>

              <p className="font-raleway text-lg text-center leading-relaxed" style={{ color: 'white', fontWeight: '400', lineHeight: '1.7' }}>
                My pricing is straightforward: you pay a session fee, and then you only buy the images you love. No pressure to purchase a package you don&apos;t need. Whether you need one killer theatrical headshot or a full set of commercial and character looks, you&apos;re in control.
              </p>

              <p className="font-raleway text-lg text-center leading-relaxed" style={{ color: 'white', fontWeight: '400', lineHeight: '1.7' }}>
                My studio is conveniently located in Phoenix with easy access from Scottsdale, Tempe, and the East Valley. Ready to get started? <Link href="/contactus" className="underline hover:no-underline" style={{ color: '#ffffff' }}>Contact me</Link> to schedule your consultation call, or book your session directly above.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <ThreeReviewSection
        title="WHAT ACTORS SAY"
        reviews={[
          {
            image: "https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-Kyldie10684-fullres-scaled%20(1).webp",
            imageAlt: "Commercial actor testimonial",
            name: "KLYDIE MORE",
            review: "As a commercial actor, I needed headshots that showed my approachable, friendly side. Cindy created a comfortable environment that allowed my personality to shine through. The results exceeded my expectations!",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-mohmad12094-vert-c-fullres-scaled.webp",
            imageAlt: "Theater actor testimonial",
            name: "MOHAMAD TOKKO",
            review: "Cindy knows exactly what casting directors are looking for. She captured my theatrical and commercial looks perfectly, and I've been getting so many more auditions since updating my headshots. Her direction during the session was invaluable!",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/Phoenix-Actor-Headshots-CMQ-HEADSHOTS.webp",
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
        textColor="#5577a5"
      />


      </Layout>
    </>
  )
}