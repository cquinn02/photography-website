import Layout from '@/components/Layout'
import dynamic from 'next/dynamic'
import { Award, Heart, Shield } from 'lucide-react'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
import PhoenixBusinessHeadshotsSection from '@/components/sections/PhoenixBusinessHeadshotsSection'
import FourStepPolaroid from '@/components/sections/FourStepPolaroid'
import GetPricingButton from '@/components/GetPricingButton'
import FAQSchema from '@/components/FAQSchema'
import Head from 'next/head'

const ServiceCarousel = dynamic(() => import('@/components/sections/ServiceCarousel'))
const ThreeReviewSection = dynamic(() => import('@/components/sections/ThreeReviewSection'))
const VideoSection = dynamic(() => import('@/components/sections/VideoSection'))
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'))
const ImageRightTextLeftSection = dynamic(() => import('@/components/sections/ImageRightTextLeftSection'))

export default function Home() {
  return (
    <Layout
      title="Professional Headshot Photographer Phoenix | CMQ Headshots"
      description="Professional headshot photographer in Phoenix with 14 years experience and 130+ five-star reviews. Business, corporate, actor & LinkedIn headshots. Book today."
      canonical="https://www.cmqheadshots.com/"
      ogUrl="https://www.cmqheadshots.com/"
    >
      {/* Video Schema for Google Video search visibility */}
      <Head>
        {/* Preload hero images for faster LCP — homepage only */}
        <link
          rel="preload"
          as="image"
          href="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-mobile-640.webp"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-mobile-828.webp"
          media="(min-width: 768px) and (max-width: 1023px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-scaled-1.webp"
          media="(min-width: 1024px)"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Welcome to CMQ Headshots – Phoenix Headshot Photographer",
            "description": "Cindy Quinn, owner of CMQ Headshots, introduces her Phoenix headshot photography studio and explains how she makes clients feel comfortable during their professional headshot session.",
            "thumbnailUrl": "https://images.cmqheadshots.com/images/VideoScreenshot-small.webp",
            "uploadDate": "2024-01-01",
            "duration": "PT1M20S",
            "contentUrl": "https://images.cmqheadshots.com/images/CMQ-HEADSHOT-WELCOME-MESSAGE-compressed.mp4",
            "creator": {
              "@type": "Organization",
              "name": "CMQ Headshots",
              "url": "https://www.cmqheadshots.com"
            }
          }) }}
        />
      </Head>

      {/* FAQ Schema for AI Visibility */}
      <FAQSchema faqs={[
        // Section 1 - General FAQs
        { question: "Do you only shoot headshots?", answer: "I specialize in headshots, but I also create professional portraits, work with models, create unique images for their portfolios, and studio senior photos. Whether you need a headshot or a professional portrait in Phoenix, I can help. I do not do weddings or baby photography." },
        { question: "Will you help me pose during my headshot session?", answer: "Absolutely! I will help you to look more confident and natural in front of the camera. When my clients leave the studio, they always say that I made them feel so comfortable and relaxed. I can help you too." },
        { question: "Can you help me create my acting portfolio?", answer: "Yes, I have helped many actors create different looks for the different roles that they want to be cast in, by helping them choose the best outfit and lighting them in a way that will enhance their facial expressions." },
        // Section 2 - Pricing/Logistics FAQs
        { question: "Do you offer discounts?", answer: "I offer a 20% discount to military personnel and active first responders, and 30% off the session fee for return clients." },
        { question: "How long is the headshot session?", answer: "The headshot session will take as long as it takes to get the images you need for your marketing and LinkedIn profile. It can be as short as 20 minutes and as long as 3 hours." },
        { question: "What are your business hours?", answer: "All sessions are by appointment only. Please check our calendar on the pricing page to view my current availability, and if you can't find something that works for you, please give me a call." },
        // Section 3 - Corporate FAQs
        { question: "Can you come to our office and take our staff headshots?", answer: "Yes, I can! I can come out to your office and photograph your staff and C-suite employees, resulting in less downtime for your staff and ensuring consistency on your website." },
        { question: "Do you only have a few backdrops?", answer: "I have many options. You and I will discuss what will look best with your outfits and your specific industry to ensure we create the best image for your profile." },
        { question: "I'm really nervous, can you help me?", answer: "Most people who come to my studio are nervous. I know that, and I have the personality and confidence to walk you through the process. Before you know it, you are laughing and loving your images." },
        { question: "What is the difference between a headshot and a professional portrait?", answer: "A headshot focuses on your face and shoulders, typically used for LinkedIn, company websites, and business cards. A professional portrait captures more of you — your posture, environment, and personal brand. Both are shot in my Phoenix, AZ studio with professional lighting and posing guidance. Many clients book a session that includes both." }
      ]} />

      {/* ===== HERO SECTION with H1 overlay ===== */}
      <section className="relative w-full">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-mobile-640.webp"
          />
          <source
            media="(max-width: 1023px)"
            srcSet="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-mobile-828.webp"
          />
          <img
            src="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-scaled-1.webp"
            alt="Headshots Phoenix — professional headshot photography by CMQ Headshots"
            className="w-full"
            style={{ aspectRatio: '2560/906', height: 'auto' }}
            width={2560}
            height={906}
            fetchPriority="high"
          />
        </picture>
        {/* Single H1 — overlays hero image on all screen sizes */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full py-4 lg:py-10" style={{
            background: 'linear-gradient(to bottom, transparent, rgba(87, 87, 87, 0.3) 30%, rgba(87, 87, 87, 0.3) 70%, transparent)'
          }}>
            <h1 className="font-raleway text-center text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl" style={{
              color: '#FFFFFF',
              fontWeight: '400',
              letterSpacing: '0.08em'
            }}>
              <span className="font-medium" style={{ fontWeight: '500' }}>PROFESSIONAL HEADSHOT</span><br />
              <span className="font-light" style={{ fontWeight: '300' }}>PHOTOGRAPHER PHOENIX</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ===== SUPPORTING PARAGRAPH ===== */}
      <section className="pt-2 pb-4 lg:pt-12 lg:pb-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="font-raleway text-xl font-normal" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              I&apos;m Cindy Quinn, a professional headshot photographer in Phoenix with 14 years
              of experience and 130+ five-star Google reviews. I photograph business professionals,
              corporate teams, actors, realtors, and attorneys. Every session is comfortable,
              never rushed, and tailored to your industry.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TAGLINE ===== */}
      <section className="pt-6 pb-12 lg:pt-8 lg:pb-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="font-raleway mb-8" style={{ lineHeight: '1.2' }}>
              <div className="mb-3">
                <span className="inline-block mr-2 lg:mr-4 text-[30px] lg:text-[48px] font-bold" style={{ color: '#5577a5' }}>COMFORTABLE,</span>
                <span className="inline-block mr-2 lg:mr-4 text-[30px] lg:text-[48px] font-bold" style={{ color: '#5577a5' }}>EASY</span>
                <span className="inline-block text-[26px] lg:text-[42px] font-normal" style={{ color: '#5577a5' }}>HEADSHOTS</span>
              </div>
              <div>
                <span className="inline-block mr-2 lg:mr-4 text-[24px] lg:text-[38px] font-normal" style={{ color: '#5577a5' }}>YOU&apos;RE</span>
                <span className="inline-block mr-2 lg:mr-4 text-[30px] lg:text-[48px] font-bold" style={{ color: '#5577a5' }}>GOING TO</span>
                <span className="inline-block text-[30px] lg:text-[48px] font-bold" style={{ color: '#5577a5' }}>LOVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE CARDS CAROUSEL ===== */}
      <ServiceCarousel />

      {/* ===== VIDEO SECTION (moved up) ===== */}
      <VideoSection
        videoUrl="https://images.cmqheadshots.com/images/CMQ-HEADSHOT-WELCOME-MESSAGE-compressed.mp4"
        posterImage="https://images.cmqheadshots.com/images/VideoScreenshot-small.webp"
        title="HEADSHOT PHOTOGRAPHER"
        titleThinWord="PHOENIX"
        description="I take pride in my ability to make people feel comfortable in front of my camera. It's a big part of my process, and it's the first step towards creating a headshot that you'll truly love."
        ownerName="Cindy Quinn - Owner"
        backgroundColor="#F1F1F1"
      />

      {/* ===== PHOENIX-SPECIFIC KEYWORD SECTIONS ===== */}

      {/* KW #1 — PROFESSIONAL HEADSHOTS PHOENIX (keep as-is from March 10) */}
      <TwoColumnSection
        title={
          <>
            <span className="font-bold">PROFESSIONAL HEADSHOTS</span> <span className="font-normal">PHOENIX</span>
          </>
        }
        description="Looking for professional headshots or portraits in Phoenix? You've come to the right place. I specialize in creating headshots and professional portraits that capture your authentic personality while projecting the confidence and professionalism you need for LinkedIn, your company website, or any business marketing materials. Every session is tailored to your specific industry and goals, whether you're an executive, entrepreneur, or job seeker ready to make a lasting first impression."
        ctaText="SELECT A SERVICE"
        ctaLink="#services"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/professional-headshots-phoenix.jpg"
        imageAlt="Professional portraits and headshots Phoenix AZ"
        backgroundColor="#282725"
        textColor="white"
        titleColor="white"
        reverseColumns={false}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* 4-Step Process Section */}
      <FourStepPolaroid />

      {/* ===== PAIR 1: KW #2 + KW #3 ===== */}

      {/* KW #2 — PHOENIX HEADSHOTS */}
      <PhoenixBusinessHeadshotsSection
        title={
          <span className="sm:whitespace-nowrap">
            PHOENIX <span className="font-bold">HEADSHOTS</span>
          </span>
        }
        description="Phoenix headshots done right. My studio is in North Phoenix with free parking, professional lighting, and a relaxed atmosphere. I photograph executives, attorneys, realtors, actors, and medical professionals. Every Phoenix headshot session is comfortable and never rushed. I shoot tethered so you see your images on a large screen in real time. You will know exactly what you are getting before you leave. Most clients walk out saying it was the most relaxed photo session they have ever had."
        ctaText="SELECT A SERVICE"
        ctaLink="#services"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/Brent%20Agees11314-optimized.webp"
        imageAlt="Phoenix headshots - professional business portrait by CMQ Headshots"
        backgroundColor="#575757"
        objectPosition="left"
      />

      {/* KW #3 — PHOENIX, AZ PROFESSIONAL HEADSHOTS */}

      <ImageRightTextLeftSection
        title={
          <span className="sm:whitespace-nowrap">
            <span className="font-normal">PHOENIX, AZ</span> <span className="font-bold">PROFESSIONAL HEADSHOTS</span>
          </span>
        }
        description="Phoenix, AZ professional headshots for every industry. Whether you work in the Biltmore corridor, downtown Phoenix, or anywhere across the Valley, I deliver headshots that match your profession. From a single LinkedIn photo to a full set for your company website, annual report, and business cards. Every image is retouched by hand and delivered in five sizes so it looks sharp on every platform. Phoenix, AZ professional headshots from my studio come with posing guidance, wardrobe consultation, and enough time to get it right."
        ctaText="SELECT A SERVICE"
        ctaLink="#services"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/CMQ-HEADSHOTS-pro-headshots-41301-jpmini-leg-sq.webp"
        imageAlt="Phoenix AZ professional headshots - business portrait by CMQ Headshots"
        backgroundColor="#ffffff"
        textColor="dark"
        ctaSize="large"
        objectPosition="right bottom"
        objectFit="cover"
        mobileStackOrder="image-first"
      />

      {/* Reviews 1 */}
      <ThreeReviewSection
        reviews={[
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS1196-sq-optimized.webp",
            imageAlt: "Chad's professional headshot",
            name: "Chad Noonan",
            review: "Cindy is an expert professional photographer. She helped me prepare for my photoshoot and clearly outlined expectations, resolving any uncertainties I had. I found working with Cindy easy and fun!",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/CMQHeadshots-Adwoaj9579-web-jp-leg-sq.webp",
            imageAlt: "Professional headshot review 2",
            name: "Adwoa John",
            review: "Cindy made me feel very comfortable right away! She is professional, detailed, and cared so much about capturing the essence of my person! I will be recommending her to friends and family.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-LisaS0258-optimized.webp",
            imageAlt: "Professional headshot review 3",
            name: "Lisa Sallee",
            review: "I really enjoyed working with Cindy! We had a phone consultation to give me tips on wardrobe colors, skincare, and makeup. It was a very comfortable experience, and I would absolutely use her again.",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        backgroundImage="url('https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp')"
        textColor="white"
      />

      {/* ===== PAIR 2: KW #4 + KW #5 ===== */}

      {/* KW #4 — PROFESSIONAL HEADSHOTS PHOENIX, AZ */}

      <TwoColumnSection
        title={
          <span className="sm:whitespace-nowrap">
            <span className="font-bold">PROFESSIONAL HEADSHOTS</span> <span className="font-normal">PHOENIX, AZ</span>
          </span>
        }
        description="Professional headshots in Phoenix, AZ start at $250. Session fee plus $100 per edited image. No minimum purchase, no packages, no pressure. You pick the photos you want and only pay for what you love. Professional headshots in Phoenix, AZ should be simple, and that is exactly how I run my studio. I also offer on-location sessions at your office anywhere in the Phoenix metro area. Whether you need one headshot or fifty for your entire team, the pricing stays transparent and straightforward."
        ctaText="SELECT A SERVICE"
        ctaLink="#services"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/CMQ-HEADSHOTS-Phoenix-on-location-staff-headshots.webp"
        imageAlt="Professional headshots Phoenix AZ - studio portrait by CMQ Headshots"
        backgroundColor="#e7e7e7"
        reverseColumns={true}
        textSize="small"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* KW #5 — PHOENIX, AZ HEADSHOT PHOTOGRAPHER */}

      <TwoColumnSection
        title={
          <>
            <span className="font-normal">PHOENIX, AZ</span> <span className="font-bold">HEADSHOT PHOTOGRAPHER</span>
          </>
        }
        description="Finding the right Phoenix, AZ headshot photographer comes down to experience, reviews, and results. I have been shooting headshots in Phoenix for over 14 years. Not weddings, not events. Just headshots. My studio has professional lighting, multiple backdrops, and a relaxed atmosphere. As your Phoenix, AZ headshot photographer, I send you a prep guide before your session covering wardrobe, grooming, and what to expect. On the day, I walk you through every pose so you never feel lost in front of the camera."
        ctaText="SELECT A SERVICE"
        ctaLink="#services"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/Ashley-Actor-collage-of-headshots.webp"
        imageAlt="Phoenix AZ headshot photographer - professional studio portrait"
        backgroundColor="#575757"
        textColor="white"
        titleColor="white"
        reverseColumns={false}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* Why Choose Section */}
      <section className="section flex items-center" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        paddingTop: '75px',
        paddingBottom: '100px',
        minHeight: '650px'
      }}>
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-16">
            <h3 className="font-raleway text-4xl lg:text-5xl mb-8">
              <span className="font-medium" style={{ color: 'white' }}>WHY CHOOSE</span> <span className="font-normal"><span style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600', color: '#5577a5', fontSize: '60px' }}>CMQ</span> <span style={{ color: 'white' }}>HEADSHOTS?</span></span>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <Award className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold mb-3" style={{ color: 'white' }}>
                14+ Years Experience
              </h3>
              <p className="font-raleway text-xl font-normal" style={{
                color: 'white',
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                Trusted by professionals across Phoenix and Scottsdale for over a decade.
              </p>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <Heart className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold mb-3" style={{ color: 'white' }}>
                Comfortable Experience
              </h3>
              <p className="font-raleway text-xl font-normal" style={{
                color: 'white',
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                I take pride in my ability to make people feel comfortable in front of my camera.
              </p>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <Shield className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold mb-3" style={{ color: 'white' }}>
                No Rush Guarantee
              </h3>
              <p className="font-raleway text-xl font-normal" style={{
                color: 'white',
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                Sessions continue until you have the perfect shots - 20 minutes to 3 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Phoenix Professionals */}
      <section className="py-12 lg:py-16" style={{
        backgroundColor: '#F1F1F1'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-raleway text-3xl lg:text-4xl mb-4" style={{ color: '#5577a5' }}>
              <span className="font-medium">TRUSTED BY</span>{' '}
              <span className="font-normal">PHOENIX PROFESSIONALS</span>
            </p>
            <p className="font-raleway text-xl font-normal mb-8" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              I work with professionals across Phoenix. Here are some of the industries I photograph:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                'Executives & C-Suite',
                'Entrepreneurs & Founders',
                'Attorneys & Law Firms',
                'Real Estate Agents',
                'Financial Advisors',
                'Healthcare Professionals',
                'Actors & Performers',
                'Job Seekers',
                'Corporate Teams'
              ].map((item) => (
                <div key={item} className="font-raleway text-xl py-3 px-4 rounded-lg flex items-center justify-center text-center" style={{
                  backgroundColor: '#575757',
                  backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
                  backgroundRepeat: 'repeat',
                  backgroundSize: 'auto',
                  color: '#ffffff',
                  fontWeight: '400',
                  border: '2px solid #5577a5'
                }}>
                  {item}
                </div>
              ))}
            </div>
            <p className="font-raleway text-xl font-normal mt-8" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              Each industry has different expectations. I know what works for each one.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ 1 — General */}
      <FAQSection
        backgroundColor="#575757"
        textColor="white"
      />

      {/* ===== PAIR 3: KW #6 + KW #7 ===== */}

      {/* KW #6 — PROFESSIONAL HEADSHOT PHOTOGRAPHER */}

      <TwoColumnSection
        title={
          <>
            <span className="font-bold">PROFESSIONAL HEADSHOT</span> <span className="font-normal">PHOTOGRAPHER</span>
          </>
        }
        description="A professional headshot photographer does more than point a camera at your face. I coach you through every pose and expression so you look natural, not stiff. Most people are nervous when they arrive. I talk them through it until they are laughing. Over 130 five-star Google reviews from real clients. A professional headshot photographer should also deliver images that are retouched by hand and sized for every platform you need. LinkedIn, your company website, email signature, business cards, and print. That is what you get with every session."
        ctaText="SELECT A SERVICE"
        ctaLink="#services"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/peter-osmundson-executive-headshot-400w.webp"
        imageAlt="Professional headshot photographer Phoenix - executive portrait"
        backgroundColor="#ffffff"
        reverseColumns={true}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* KW #7 — PROFESSIONAL PHOTOGRAPHY PHOENIX */}
      <TwoColumnSection
        title={<><span className="font-bold">PROFESSIONAL PHOTOGRAPHY</span> <span className="font-normal">PHOENIX</span></>}
        description="Professional photography in Phoenix is competitive. There are hundreds of photographers in the Valley and most of them do a little bit of everything. Weddings on Saturday, newborns on Sunday, headshots squeezed in on a Tuesday. I took a different approach. I focus exclusively on headshots because that is what I do best. Every day, for 14 years. Professional photography in Phoenix should not feel like an assembly line. My studio is set up so you have my full attention, a private space to change outfits, and enough time to get it right."
        ctaText="SELECT A SERVICE"
        ctaLink="#services"
        imageUrl="https://images.cmqheadshots.com/images/CMQHEADSHOTS-Bryan%20Ahia18642grey.jpg"
        imageAlt="Professional photography Phoenix - male headshot by CMQ Headshots"
        backgroundColor="#cecfd1"
        textColor="white"
        titleColor="white"
        reverseColumns={false}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* FAQ 2 — Posing & Portfolio */}
      <FAQSection
        backgroundColor="#FFFFFF"
        faqs={[
          {
            id: 1,
            question: "Do you only shoot headshots?",
            answer: "I have specialized in headshots, but I love creating portraits, working with models, creating unique images for their portfolios, and studio senior photos. I do not do weddings or baby photography."
          },
          {
            id: 2,
            question: "Will you help me pose during my headshot session?",
            answer: "Absolutely! I will help you to look more confident and natural in front of the camera. When my clients leave the studio, they always say that I made them feel so comfortable and relaxed. I can help you too."
          },
          {
            id: 3,
            question: "Can you help me create my acting portfolio?",
            answer: "Yes, I have helped many actors create different looks for the different roles that they want to be cast in, by helping them choose the best outfit and lighting them in a way that will enhance their facial expressions."
          }
        ]}
        showContactCTA={true}
      />

      {/* ===== PAIR 4: KW #8 + KW #9 ===== */}

      {/* KW #8 — PHOENIX HEADSHOT (NEW) */}

      <TwoColumnSection
        title={<><span className="font-bold">PHOENIX</span> <span className="font-normal">HEADSHOT</span></>}
        description="Need just one Phoenix headshot for LinkedIn? One great photo can change how people see you before you ever meet them. Your Phoenix headshot session includes professional lighting, posing guidance, and enough time to get it right. No minimums, no packages, no pressure. You pick the images you love and only pay for those."
        ctaText="SELECT A SERVICE"
        ctaLink="#services"
        imageUrl="https://images.cmqheadshots.com/images/Nikkie%20Miller0061.webp"
        imageAlt="Phoenix headshot - professional portrait by CMQ Headshots"
        backgroundColor="#a0a0a0"
        textColor="white"
        titleColor="white"
        reverseColumns={true}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* KW #9 — HEADSHOTS PHOENIX (NEW) */}

      <TwoColumnSection
        title={<><span className="font-bold">HEADSHOTS</span> <span className="font-normal">PHOENIX</span></>}
        description="Headshots Phoenix professionals trust. My North Phoenix studio has been the go-to location for headshots in Phoenix for over 14 years. I work with business professionals, attorneys, realtors, actors, and medical professionals. Every session is private, never rushed, and tailored to your industry. Your headshots are retouched by hand, not by software filters. I clean up temporary blemishes, even out skin tone, and make subtle adjustments so you look polished while still looking like yourself. Headshots Phoenix clients receive are delivered within 7 business days, with same-day rush available."
        ctaText="SELECT A SERVICE"
        ctaLink="#services"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/4x5%20images/Sophia4482-vert1.webp"
        imageAlt="Headshots Phoenix - studio portrait by CMQ Headshots"
        backgroundColor="#242323"
        textColor="white"
        titleColor="white"
        reverseColumns={false}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* FAQ 3 — Pricing & Logistics */}
      <FAQSection
        backgroundColor="#575757"
        faqs={[
          {
            id: 1,
            question: "Do you offer discounts?",
            answer: "I offer a 20% discount to military personnel and active first responders, and 30% off the session fee for return clients."
          },
          {
            id: 2,
            question: "How long is the headshot session?",
            answer: "The headshot session will take as long as it takes to get the images you need for your marketing and LinkedIn profile. It can be as short as 20 minutes and as long as 3 hours."
          },
          {
            id: 3,
            question: "What are your business hours?",
            answer: "All sessions are by appointment only. Please check our calendar on the pricing page to view my current availability, and if you can't find something that works for you, please give me a call."
          }
        ]}
        showContactCTA={true}
      />

      {/* ===== PAIR 5: KW #10 + KW #11 ===== */}

      {/* KW #10 — HEADSHOT PHOTOGRAPHER PHOENIX (NEW) */}

      <TwoColumnSection
        title={<><span className="font-bold">HEADSHOT PHOTOGRAPHER</span> <span className="font-normal">PHOENIX</span></>}
        description="Choosing a headshot photographer in Phoenix comes down to experience, reviews, and results. I have over 130 five-star Google reviews and 14 years behind the camera. Headshots are not a side gig for me. This is all I do, every day. As your headshot photographer in Phoenix, I know what lighting, angles, and expressions work for your specific industry."
        ctaText="SELECT A SERVICE"
        ctaLink="#services"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots_D40396-400w.webp"
        imageAlt="Headshot photographer Phoenix - professional portrait by CMQ Headshots"
        backgroundColor="#ffffff"
        reverseColumns={true}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* KW #11 — ARIZONA HEADSHOTS */}
      <TwoColumnSection
        title={<><span className="font-bold">ARIZONA</span> <span className="font-normal">HEADSHOTS</span></>}
        description="Arizona headshots by CMQ Headshots. My studio is in North Phoenix and I serve professionals across the entire state. Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, and Paradise Valley are all an easy drive. I also travel for on-location sessions at your office. Whether you need Arizona headshots for your law firm, real estate brokerage, medical practice, or corporate team, I bring 14 years of experience and over 130 five-star Google reviews to every session."
        ctaText="SELECT A SERVICE"
        ctaLink="#services"
        imageUrl="https://images.cmqheadshots.com/images/matt%20federico0713.webp"
        imageAlt="Arizona headshots - professional portrait by CMQ Headshots"
        backgroundColor="#585858"
        textColor="white"
        titleColor="white"
        reverseColumns={false}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* Reviews 3 */}
      <ThreeReviewSection
        reviews={[
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-2806-1x1-optimized.webp",
            imageAlt: "Professional headshot client",
            name: "Denise Andrade",
            review: "Cindy took headshots for my consulting company, and she was wonderful to work with! She is a true professional who helps you get the best-looking photos, and I am very happy with my headshots.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/CMQHEADSHOTS-Scott%20Anderson10074-low-res.jpg",
            imageAlt: "Scott Anderson professional headshot Phoenix",
            name: "Scott Anderson",
            review: "I found CMQ Headshots, and my company was able to schedule and pay for everything remotely, easily. Cindy is an excellent photographer. I felt relaxed and comfortable. Her photography skills created a comfortable atmosphere.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/CMQHEADSHOTS-Jenny%20Bolt11669-insta.jpg",
            imageAlt: "Jenny Bolt professional headshot Phoenix",
            name: "Jenny Bolt",
            review: "Cindy was amazing...she made me feel so comfortable throughout the entire process. I'm not one who enjoys photos of myself, and Cindy helped me feel relaxed and actually really enjoyed the process.",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        backgroundImage="url('https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp')"
        textColor="white"
      />

      {/* ===== PAIR 6: KW #12 + KW #13 — NEAR ME ===== */}

      {/* KW #12 — PROFESSIONAL HEADSHOTS NEAR ME */}
      <div style={{ backgroundColor: '#babab9' }}>
      <TwoColumnSection
        title={<><span className="font-bold">PROFESSIONAL HEADSHOTS</span> <span className="font-normal">NEAR ME</span></>}
        description="Looking for professional headshots near me in the Phoenix area? My studio is in North Phoenix with easy freeway access from the 101 and I-17. I photograph professionals from Scottsdale, Tempe, Chandler, Mesa, Gilbert, and the entire East Valley. I also do on-location sessions at your office anywhere in the metro area. Professional headshots near me should mean a short drive, free parking, and a photographer who knows what they are doing. That is exactly what you get here."
        ctaText=""
        ctaLink=""
        imageUrl="https://images.cmqheadshots.com/images/CMQHEADSHOTS-denise%20Tedeschi12874_(2)grey.jpg"
        imageAlt="Professional headshots near me - Phoenix area headshot photographer"
        backgroundColor="transparent"
        textColor="white"
        titleColor="white"
        reverseColumns={false}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />
      </div>

      {/* KW #15 — HEADSHOT PROFESSIONAL */}
      <TwoColumnSection
        title={<><span className="font-bold">HEADSHOT</span> <span className="font-normal">PROFESSIONAL</span></>}
        description="Hiring a headshot professional makes a visible difference. I coach you through posing and expressions so your photos look natural and confident. No awkward arms, no forced smiles. As a headshot professional with 14 years behind the camera, I know how to bring out the best version of you in minutes. I shoot tethered to my laptop so you can see the images in real time. If something is not working, we fix it on the spot. No guessing, no waiting for proofs a week later."
        ctaText="SELECT A SERVICE"
        ctaLink="#services"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/cmq-headshots-Anna-scottsdale-400w.webp"
        imageAlt="Headshot professional Phoenix AZ - professional portrait"
        backgroundColor="#ffffff"
        reverseColumns={true}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* FAQ 4 — Corporate & Backdrops */}
      <FAQSection
        backgroundColor="#575757"
        faqs={[
          {
            id: 1,
            question: "Can you come to our office and take our staff headshots?",
            answer: "Yes, I can! I can come out to your office and photograph your staff and C-suite employees, resulting in less downtime for your staff and ensuring consistency on your website."
          },
          {
            id: 2,
            question: "Do you only have a few backdrops?",
            answer: "I have many options. You and I will discuss what will look best with your outfits and your specific industry to ensure we create the best image for your profile."
          },
          {
            id: 3,
            question: "I'm really nervous, can you help me?",
            answer: "Most people who come to my studio are nervous. I know that, and I have the personality and confidence to walk you through the process. Before you know it, you are laughing and loving your images."
          }
        ]}
        showContactCTA={true}
      />

      {/* ===== PAIR 7: KW #14 + KW #15 — GENERIC HIGH-VOLUME ===== */}

      {/* KW #14 — HEADSHOT PHOTOS */}
      <TwoColumnSection
        title={<><span className="font-bold">HEADSHOT</span> <span className="font-normal">PHOTOS</span></>}
        description="Your headshot photos show up everywhere. LinkedIn, your company website, email signature, business cards, conference bios, and legal directories. One photo does the work of a dozen marketing pieces. I deliver every headshot in multiple sizes so it looks sharp on every platform. Headshot photos from my Phoenix studio are retouched by hand, not run through a filter. No plug-ins, no AI editing. Just careful, manual retouching that makes you look like the best version of yourself."
        ctaText="SELECT A SERVICE"
        ctaLink="#services"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots_D40396-400w.webp"
        imageAlt="Headshot photos Phoenix - professional portrait by CMQ Headshots"
        backgroundColor="#ffffff"
        reverseColumns={false}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* KW #13 — BEST HEADSHOT PHOTOGRAPHER NEAR ME */}
      <TwoColumnSection
        title={<><span className="font-bold">BEST HEADSHOT PHOTOGRAPHER</span><br /><span className="font-normal">NEAR ME</span></>}
        description="Searching for the best headshot photographer near me? Here is what to look for. A photographer who specializes in headshots, not a generalist who also does weddings and events. Someone with real Google reviews from real clients, not stock photos on their website. A studio with professional lighting and a relaxed atmosphere. And a photographer who coaches you through posing so you look natural, not stiff. I check every one of those boxes. Over 130 five-star reviews, 14 years of experience, and headshots are all I do."
        ctaText="SELECT A SERVICE"
        ctaLink="#services"
        imageUrl="https://images.cmqheadshots.com/images/CMQHEADSHOTS-Adwoaj9579.webp"
        imageAlt="Best headshot photographer near me - Phoenix professional portrait"
        backgroundColor="#656565"
        textColor="white"
        titleColor="white"
        reverseColumns={true}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* Reviews 4 */}
      <ThreeReviewSection
        reviews={[
          {
            image: "https://images.cmqheadshots.com/images/CMQHEADSHOTS-Kara%20Kastilahn0420-e-linkedin.jpg",
            imageAlt: "Kara Kastilahn professional headshot Phoenix",
            name: "Kara Kastilahn",
            review: "Found CMQ Headshots in an online search which is always a bit nerve wracking. So pleased with the ease of booking, the detailed communication that followed and the session itself. Cindy is delightful!",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/CMQHEADSHOTS-micheal%20Harris7860-blue%20green-teams.jpg",
            imageAlt: "Michael Harris professional headshot Phoenix",
            name: "Michael Harris",
            review: "Cindy is the best! Very thorough, knowledgeable, and personable. She goes above and beyond to ensure you get the best photos for your needs. I've worked with her a few times over the last several years.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/CMQHEADSHOTS-BarbaraB3598-horizontal2-teams.jpg",
            imageAlt: "Barbara Buck professional headshot Phoenix",
            name: "Barbara Buck",
            review: "I recently updated my headshot and found Cindy to be one of the best head photographers I have ever worked with. She is a wonderful coach and provides some helpful educational information.",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        backgroundImage="url('https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp')"
        textColor="white"
      />

      {/* ===== PAIR 8: KW #16 + KW #17 ===== */}

      {/* KW #16 — PROFESSIONAL HEADSHOT PHOTOS */}
      <TwoColumnSection
        title={<><span className="font-bold">PROFESSIONAL HEADSHOT</span> <span className="font-normal">PHOTOS</span></>}
        description="Professional headshot photos are an investment in your career. Every image I deliver comes in five sizes: LinkedIn profile, Facebook profile, Teams profile, full resolution for print, and black and white. One session covers every platform. Professional headshot photos from my studio are retouched by hand and delivered within 7 business days. Same-day delivery is available if you need them fast."
        ctaText="SELECT A SERVICE"
        ctaLink="#services"
        imageUrl="https://images.cmqheadshots.com/images/CMQHEADSHOTS-Cami-Collins-Phoenix-Az-08-20-2025-1grey.jpg"
        imageAlt="Professional headshot photos Phoenix - studio portrait by CMQ Headshots"
        backgroundColor="#afafaf"
        textColor="white"
        titleColor="white"
        reverseColumns={false}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* KW #17 — PROFESSIONAL BUSINESS PHOTOGRAPHY */}
      <TwoColumnSection
        title={<><span className="font-bold">PROFESSIONAL BUSINESS</span> <span className="font-normal">PHOTOGRAPHY</span></>}
        description="Professional business photography in Phoenix goes beyond a simple headshot. I work with executives, entrepreneurs, sales teams, and entire companies to create images that represent your brand. From individual portraits for your LinkedIn and company website to team sessions that keep everyone consistent, professional business photography is about showing clients who you are before they ever meet you. My studio sessions are relaxed and efficient. On-location sessions bring the studio to your office."
        ctaText="SELECT A SERVICE"
        ctaLink="#services"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-2806-1x1-optimized.webp"
        imageAlt="Professional business photography Phoenix - corporate headshot"
        backgroundColor="#575757"
        textColor="white"
        titleColor="white"
        reverseColumns={true}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* FAQ 5 — Pricing & Delivery */}
      <FAQSection
        backgroundColor="#FFFFFF"
        faqs={[
          {
            id: 1,
            question: "How much do headshots cost in Phoenix?",
            answer: "Individual headshot sessions start at $250 session fee plus $100 per edited image. Corporate team pricing depends on group size. Contact me for a custom quote."
          },
          {
            id: 2,
            question: "What is the difference between a headshot and a professional portrait?",
            answer: "A headshot focuses on your face and shoulders, typically used for LinkedIn, company websites, and business cards. A professional portrait captures more of you, your posture, environment, and personal brand. Both are shot in my Phoenix studio with professional lighting. Many clients book a session that includes both."
          },
          {
            id: 3,
            question: "When will I get my final images?",
            answer: "Final retouched images are delivered within 7 business days. Same-day retouching is available for an additional $50."
          }
        ]}
        showContactCTA={true}
      />

      {/* Reviews 2 */}
      <ThreeReviewSection
        reviews={[
          {
            image: "https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTSCarolH3375.webp",
            imageAlt: "Carol H professional headshot",
            name: "Carol Herron",
            review: "From start to finish, the session was 2.5 hours. Before your session, you'll receive helpful information. I recommend CMQ HEADSHOTS to all of my friends and family.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-Shawn%20Wilson10136-small-1x1-optimized.webp",
            imageAlt: "Shawn Wilson professional headshot",
            name: "Shawn Wilson",
            review: "Cindy helped me with posing, expression and clothing that made me more comfortable, which me look better, and ultimately resulted in amazing headshots. I highly recommend CMQ Headshots!",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/CMQheadshots-Ronlyn-Phoenix-headshots3414.webp",
            imageAlt: "Ronlyn professional headshot",
            name: "Ronlyn Griggs",
            review: "Cindy at CMQ Headshots did a fantastic job with my headshots. Very patient and willing to do whatever it took to get a great shot. She is a PRO and it shows! Highly recommend!!!",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        backgroundImage="url('https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp')"
        textColor="white"
      />

      {/* HEADSHOTS FOR EVERY PROFESSION */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-medium mb-6 font-raleway" style={{ color: '#5577a5' }}>
              <span className="font-bold">HEADSHOTS</span> <span className="font-normal">FOR EVERY PROFESSION</span>
            </h2>
            <p className="text-xl font-normal mb-8 font-raleway" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              Not every headshot fits a single category. I have photographed yoga instructors, fitness coaches, life coaches, nutritionists, chiropractors, dentists, veterinarians, financial advisors, insurance agents, mortgage brokers, architects, interior designers, personal trainers, therapists, consultants, authors, speakers, podcasters, and nonprofit directors. If your profession requires a photo that represents who you are and what you do, I have probably photographed someone in your field. Every session is tailored to your industry and your goals. Whether you need a clean corporate look or something with more personality, I will help you get there. I would love to work with you to create the images you are looking for.
            </p>
            <GetPricingButton href="/contact-us" size="large" shimmer={true}>
              CONTACT ME
            </GetPricingButton>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-cmq-blue text-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container mx-auto px-4 text-center">
          <p className="font-raleway text-3xl lg:text-4xl font-black mb-4 uppercase" style={{ fontWeight: '900', color: '#ffffff' }}>
            READY TO LOOK YOUR BEST?
          </p>
          <p className="font-raleway text-xl font-normal mb-8 text-white" style={{
            fontWeight: '400',
            letterSpacing: '0.03em',
            lineHeight: '1.6'
          }}>
            Let&apos;s create headshots that boost your career and business marketing efforts.
          </p>
          <GetPricingButton href="/contact-us" size="xl" className="border-2 border-white">
            Schedule Your Session Today
          </GetPricingButton>
        </div>
      </section>
    </Layout>
  )
}
