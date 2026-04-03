import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Palette, Scale, Music, Award, Heart, Shield } from 'lucide-react'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
import PhoenixBusinessHeadshotsSection from '@/components/sections/PhoenixBusinessHeadshotsSection'
import FourStepPolaroid from '@/components/sections/FourStepPolaroid'
import GetPricingButton from '@/components/GetPricingButton'
import FAQSchema from '@/components/FAQSchema'
<<<<<<< Updated upstream
import LazySection from '@/components/LazySection'
=======
import TwoColumnSection from '@/components/sections/TwoColumnSection'
>>>>>>> Stashed changes
import Head from 'next/head'

// Dynamic imports for below-fold sections — JS only loads when user scrolls near them
const FourImageRow = dynamic(() => import('@/components/sections/FourImageRow'), { ssr: false })
const ThreeReviewSection = dynamic(() => import('@/components/sections/ThreeReviewSection'), { ssr: false })
const VideoSection = dynamic(() => import('@/components/sections/VideoSection'), { ssr: false })
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'), { ssr: false })
const ModelingHeadshotsSection = dynamic(() => import('@/components/sections/ModelingHeadshotsSection'), { ssr: false })
const ImageRightTextLeftSection = dynamic(() => import('@/components/sections/ImageRightTextLeftSection'), { ssr: false })

interface PageProps {
  frontmatter: {
    title: string
    description: string
    heroTitle: string
    heroSubtitle: string
  }
  content: string
}

export default function Home({ frontmatter, content }: PageProps) {
  return (
    <Layout
      title={frontmatter.title}
      description={frontmatter.description}
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
            "thumbnailUrl": "https://images.cmqheadshots.com/images/VideoScreenshot-small.jpg",
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

      {/* H1 Section Above Image */}
      <section className="bg-white pt-0 pb-1 lg:pt-1 lg:pb-0 text-center">
        <h1 className="font-raleway text-cmq-blue text-xl" style={{
          fontWeight: '400',
          letterSpacing: '0.1em'
        }}>
          HEADSHOTS PHOENIX
        </h1>
      </section>

      {/* Hero Section - Image Only */}
      {/* Mobile-optimized responsive hero image using picture element for fastest LCP */}
      <section className="relative w-full">
        <picture>
          {/* Mobile: 640px version (20 KB) for phones */}
          <source
            media="(max-width: 767px)"
            srcSet="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-mobile-640.webp"
          />
          {/* Tablet: 828px version (28 KB) */}
          <source
            media="(max-width: 1023px)"
            srcSet="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-mobile-828.webp"
          />
          {/* Desktop: Full size (146 KB) */}
          <img
            src="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-scaled-1.webp"
            alt="Professional Phoenix Headshots"
            className="w-full h-auto"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
        </picture>
      </section>

      {/* Hero Text Section - Below Image */}
      <section className="pt-[20px] pb-8 relative" style={{
        backgroundColor: '#ffffff'
      }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="font-raleway mb-4" style={{ lineHeight: '1.2' }}>
              <div className="mb-3">
                <span
                  className="inline-block mr-2 lg:mr-4 text-[30px] lg:text-[48px] font-bold"
                  style={{ color: '#5577a5' }}
                >
                  COMFORTABLE,
                </span>
                <span
                  className="inline-block mr-2 lg:mr-4 text-[30px] lg:text-[48px] font-bold"
                  style={{ color: '#5577a5' }}
                >
                  EASY
                </span>
                <span
                  className="inline-block text-[26px] lg:text-[42px] font-normal"
                  style={{ color: '#5577a5' }}
                >
                  HEADSHOTS
                </span>
              </div>
              <div>
                <span
                  className="inline-block mr-2 lg:mr-4 text-[24px] lg:text-[38px] font-normal"
                  style={{ color: '#5577a5' }}
                >
                  YOU&apos;RE
                </span>
                <span
                  className="inline-block mr-2 lg:mr-4 text-[30px] lg:text-[48px] font-bold"
                  style={{ color: '#5577a5' }}
                >
                  GOING TO
                </span>
                <span
                  className="inline-block text-[30px] lg:text-[48px] font-bold"
                  style={{ color: '#5577a5' }}
                >
                  LOVE
                </span>
              </div>
            </div>
<<<<<<< Updated upstream
            <p className="font-raleway text-lg md:text-xl mb-6 leading-relaxed text-gray-700">
              {frontmatter.heroSubtitle}
            </p>
            
            {/* Three Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-4xl mx-auto mt-6">
              <GetPricingButton
                href="/phoenix-business-headshots"
                size="medium"
                className="sm:flex-1 max-w-xs !text-center flex items-center justify-center"
                trackingLabel="individual_rates_home_hero"
              >
                INDIVIDUAL RATES
              </GetPricingButton>
              <GetPricingButton
                href="/corporate-staff-headshots"
                size="medium"
                className="sm:flex-1 max-w-xs !text-center flex items-center justify-center"
                trackingLabel="staff_team_home_hero"
              >
                ON-LOCATION STAFF/TEAM
              </GetPricingButton>
              <GetPricingButton
                href="/actor-headshots-phoenix"
                size="medium"
                className="sm:flex-1 max-w-xs !text-center flex items-center justify-center"
                trackingLabel="actor_rates_home_hero"
              >
                ACTOR RATES
              </GetPricingButton>
            </div>
          </div>
        </div>
      </section>
=======
          </div>
        </div>
      </section>

      {/* ===== SERVICE CARDS CAROUSEL ===== */}
      <ServiceCarousel />

      {/* ===== KEYWORD AUTHORITY SECTIONS (Phoenix-specific first) ===== */}

      {/* #5 — PROFESSIONAL HEADSHOTS PHOENIX (213 impressions, #6 ranking) */}
      <TwoColumnSection
        title={<><span className="font-medium">PROFESSIONAL HEADSHOTS</span>{' '}<span className="font-normal">PHOENIX</span></>}
        description="Professional headshots in Phoenix are an investment that pays for itself. Your photo appears on LinkedIn, your website, and every directory where clients look you up. I have been shooting professional headshots in Phoenix for over 14 years and deliver professional headshot photos sized for every platform."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-Brayley-0718-fullres-optimized.webp"
        imageAlt="Professional headshots Phoenix - female business portrait by CMQ Headshots"
        backgroundColor="#F1F1F1"
        reverseColumns={false}
      />

      {/* #8 — PHOENIX HEADSHOTS (165 impressions, position 26) */}
      <TwoColumnSection
        title={<><span className="font-medium">PHOENIX</span>{' '}<span className="font-normal">HEADSHOTS</span></>}
        description="Phoenix headshots done right. My studio is in North Phoenix with free parking, professional lighting, and a relaxed atmosphere. I photograph executives, attorneys, realtors, actors, and medical professionals. Every Phoenix headshot session is comfortable and never rushed."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-Cody-0575-fullres-optimized.webp"
        imageAlt="Phoenix headshots - male professional portrait by CMQ Headshots"
        backgroundColor="#ffffff"
        reverseColumns={true}
      />

      {/* #9 — PHOENIX, AZ PROFESSIONAL HEADSHOTS (#4 ranking) */}
      <TwoColumnSection
        title={<><span className="font-medium">PHOENIX, AZ</span>{' '}<span className="font-normal">PROFESSIONAL HEADSHOTS</span></>}
        description="Phoenix, AZ professional headshots for every industry. Whether you work in the Biltmore corridor, downtown Phoenix, or anywhere across the Valley, I deliver headshots that match your profession. From a single LinkedIn photo to a full set for your company website, annual report, and business cards."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/4x5%20images/CMQHeadshots-Denova2743-craig-8x10.webp"
        imageAlt="Phoenix AZ professional headshots - business portrait by CMQ Headshots"
        backgroundColor="#F1F1F1"
        reverseColumns={false}
      />

      {/* #10 — BEST HEADSHOT PHOTOGRAPHER NEAR ME (#4 ranking) */}
      <TwoColumnSection
        title={<><span className="font-medium">BEST HEADSHOT PHOTOGRAPHER</span>{' '}<span className="font-normal">NEAR ME</span></>}
        description="Searching for the best headshot photographer near me? I am located in North Phoenix with easy freeway access from the 101 and I-17. Over 130 five-star Google reviews, 14 years of experience, and I only shoot headshots. No weddings, no events. That focus is why the results are consistent."
        imageUrl="https://images.cmqheadshots.com/images/Rachel%20Elliot8161.jpg"
        imageAlt="Best headshot photographer near me - Phoenix professional portrait"
        backgroundColor="#ffffff"
        reverseColumns={true}
      />

      {/* #11 — PROFESSIONAL HEADSHOTS NEAR ME (146 impressions) */}
      <TwoColumnSection
        title={<><span className="font-medium">PROFESSIONAL HEADSHOTS</span>{' '}<span className="font-normal">NEAR ME</span></>}
        description="Looking for professional headshots near me in the Phoenix area? My studio serves professionals across Phoenix, Scottsdale, Tempe, Chandler, Mesa, Gilbert, and the East Valley. I also do Arizona headshots on location at your office. Book online or call to schedule."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-executive-headshots-phoenix-11669-web-2.webp"
        imageAlt="Professional headshots near me - Phoenix area headshot photographer"
        backgroundColor="#F1F1F1"
        reverseColumns={false}
      />

      {/* #12 — PROFESSIONAL HEADSHOTS PHOENIX, AZ (#8 ranking) */}
      <TwoColumnSection
        title={<><span className="font-medium">PROFESSIONAL HEADSHOTS</span>{' '}<span className="font-normal">PHOENIX, AZ</span></>}
        description="Professional headshots in Phoenix, AZ start at $250. Session fee plus $100 per edited image. No minimum purchase, no packages, no pressure. You pick the photos you want and only pay for what you love. Professional headshots in Phoenix, AZ should be simple, and that is exactly how I run my studio."
        imageUrl="https://images.cmqheadshots.com/images/Guillermo%20Ocampo16095-c.webp"
        imageAlt="Professional headshots Phoenix AZ - studio portrait by CMQ Headshots"
        backgroundColor="#ffffff"
        reverseColumns={true}
      />

      {/* HEADSHOT PHOTOS (1,600/mo — generic, high volume) */}
      <TwoColumnSection
        title={<><span className="font-medium">HEADSHOT</span>{' '}<span className="font-normal">PHOTOS</span></>}
        description="Your headshot photos show up everywhere. LinkedIn, your company website, email signature, business cards, conference bios, and legal directories. One photo does the work of a dozen marketing pieces. I deliver every headshot in multiple sizes so it looks sharp on every platform. Headshot photos from my Phoenix studio are retouched by hand, not run through a filter."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-Bob-0621-headshot-optimized.webp"
        imageAlt="Professional headshot photos Phoenix - male executive portrait by CMQ Headshots"
        backgroundColor="#F1F1F1"
        reverseColumns={false}
      />

      {/* HEADSHOT PROFESSIONAL (720/mo — generic, high volume) */}
      <TwoColumnSection
        title={<><span className="font-medium">HEADSHOT</span>{' '}<span className="font-normal">PROFESSIONAL</span></>}
        description="Hiring a headshot professional makes a visible difference. I coach you through posing and expressions so your photos look natural and confident. No awkward arms, no forced smiles. As a headshot professional with 14 years behind the camera, I know how to bring out the best version of you in minutes."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-Lauren-0763-fullres-optimized.webp"
        imageAlt="Headshot professional Phoenix AZ - female corporate portrait"
        backgroundColor="#ffffff"
        reverseColumns={true}
      />

      {/* PHOENIX, AZ HEADSHOT PHOTOGRAPHER (#17 ranking) */}
      <TwoColumnSection
        title={<><span className="font-medium">PHOENIX, AZ</span>{' '}<span className="font-normal">HEADSHOT PHOTOGRAPHER</span></>}
        description="Finding the right Phoenix, AZ headshot photographer comes down to experience, reviews, and results. I have been shooting headshots in Phoenix for over 14 years. Not weddings, not events. Just headshots. My studio has professional lighting, multiple backdrops, and a relaxed atmosphere. I limit my bookings to two sessions per day so you get my full attention."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-2806-1x1-optimized.webp"
        imageAlt="Phoenix AZ headshot photographer - professional studio portrait by CMQ Headshots"
        backgroundColor="#F1F1F1"
        reverseColumns={false}
      />

      {/* #14 — PROFESSIONAL HEADSHOT PHOTOGRAPHER (#6 ranking) */}
      <TwoColumnSection
        title={<><span className="font-medium">PROFESSIONAL HEADSHOT</span>{' '}<span className="font-normal">PHOTOGRAPHER</span></>}
        description="A professional headshot photographer does more than point a camera at your face. I coach you through every pose and expression so you look natural, not stiff. Most people are nervous when they arrive. I talk them through it until they are laughing. Over 130 five-star Google reviews from real clients who walked in nervous and walked out smiling."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots-5963a-web-optimized.webp"
        imageAlt="Professional headshot photographer Phoenix - executive business portrait"
        backgroundColor="#ffffff"
        reverseColumns={true}
      />

      {/* #15 — PROFESSIONAL PHOTOGRAPHY PHOENIX (#19 ranking) */}
      <TwoColumnSection
        title={<><span className="font-medium">PROFESSIONAL PHOTOGRAPHY</span>{' '}<span className="font-normal">PHOENIX</span></>}
        description="Professional photography in Phoenix is competitive. Most photographers do a little bit of everything. I took a different approach. I focus exclusively on headshots because that is what I do best. Every day, for 14 years. Professional business photography with consistent results and reviews that speak for themselves."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/cmq-headshots-Anna-scottsdale-headshots-H0622-jp-leg-sqo-optimized.webp"
        imageAlt="Professional photography Phoenix - female headshot by CMQ Headshots"
        backgroundColor="#F1F1F1"
        reverseColumns={false}
      />
>>>>>>> Stashed changes

      {/* Professional Headshots Phoenix Section */}
      <TwoColumnSection
        title={
          <>
            <span className="font-bold">PROFESSIONAL HEADSHOTS</span> <span className="font-normal">PHOENIX</span>
          </>
        }
        description="Looking for professional headshots or portraits in Phoenix? You've come to the right place. I specialize in creating headshots and professional portraits that capture your authentic personality while projecting the confidence and professionalism you need for LinkedIn, your company website, or any business marketing materials. Every session is tailored to your specific industry and goals, whether you're an executive, entrepreneur, or job seeker ready to make a lasting first impression."
        ctaText="GET PRICING"
        ctaLink="/phoenix-business-headshots"
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

      {/* Phoenix Business Headshots Section */}
      <PhoenixBusinessHeadshotsSection
        title={
          <span className="sm:whitespace-nowrap">
            PHOENIX <span className="font-bold">BUSINESS HEADSHOTS</span>
          </span>
        }
        description="Your career needs business headshots that are the best version of you! In my studio, I take the time to get to know you to create business headshots that meets your needs for your LinkedIn profile, Facebook profile, Zoom profile, and your business website."
        ctaText="GET PRICING"
        ctaLink="/phoenix-business-headshots"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/Brent%20Agees11314-optimized.webp"
        imageAlt="Phoenix business headshots professional"
        backgroundColor="#575757"
        objectPosition="left"
      />

      {/* Four Image Row Section */}
      <LazySection height="400px">
      <FourImageRow
        title={<><span className="font-normal">FROM</span> <span className="font-bold">EXECUTIVES</span> <span className="font-normal">TO</span> <span className="font-bold">ENTREPRENEURS,</span><br /><span className="font-normal">I CREATE PORTRAITS &amp; HEADSHOTS THAT MAKE AN IMPACT</span></>}
        images={[
          {
            src: "https://images.cmqheadshots.com/images/website%20media/optimized/peter-osmundson-executive-headshot-400w.webp",
            alt: "Executive headshots Phoenix"
          },
          {
            src: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots_D40396-400w.webp",
            alt: "Executive headshot phoenix"
          },
          {
            src: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQ-Headshots-phoenix-staff-DAY-41625-400w.webp",
            alt: "Corporate headshots Phoenix"
          },
          {
            src: "https://images.cmqheadshots.com/images/website%20media/optimized/cmq-headshots-Anna-scottsdale-400w.webp",
            alt: "Scottsdale headshots professional"
          }
        ]}
        backgroundColor="#ffffff"
        fullWidth={true}
        borderColor="#00b4d8"
      />
      </LazySection>

      {/* Review Section */}
      <LazySection height="500px">
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
      </LazySection>

      {/* Video Section */}
      <LazySection height="600px">
      <VideoSection
        videoUrl="https://images.cmqheadshots.com/images/CMQ-HEADSHOT-WELCOME-MESSAGE-compressed.mp4"
        posterImage="https://images.cmqheadshots.com/images/VideoScreenshot-small.jpg"
        title="HEADSHOT PHOTOGRAPHER"
        titleThinWord="PHOENIX"
        description="I take pride in my ability to make people feel comfortable in front of my camera. It's a big part of my process, and it's the first step towards creating a headshot that you'll truly love."
        ownerName="Cindy Quinn - Owner"
        backgroundColor="#F1F1F1"
      />
      </LazySection>

      {/* Dark Grey Review Section */}
      <LazySection height="500px">
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
      </LazySection>

      {/* Corporate Headshots Section */}
      <LazySection height="600px">
      <ImageRightTextLeftSection
        title={
          <span className="sm:whitespace-nowrap">
            <span className="font-bold">CORPORATE HEADSHOTS</span> <span className="font-normal">PHOENIX</span>
          </span>
        }
        description="Whether you run a small, medium, or large business in Phoenix, corporate headshots are an integral part of your success. Corporate headshots in Phoenix is my specialty. I can come out and capture your teams and match your branding."
        ctaText="GET QUOTE"
        ctaLink="/corporate-staff-headshots"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/CMQ-HEADSHOTS-pro-headshots-41301-jpmini-leg-sq.webp"
        imageAlt="Professional corporate headshot Phoenix"
        backgroundColor="#ffffff"
        textColor="dark"
        ctaSize="large"
        objectPosition="right bottom"
        objectFit="cover"
        mobileStackOrder="image-first"
      />
      </LazySection>

      {/* FAQ Section */}
      <LazySection height="500px">
      <FAQSection
        backgroundColor="#575757"
        textColor="white"
      />
      </LazySection>

      {/* On-Location Staff Headshots Section */}
      <LazySection height="600px">
      <TwoColumnSection
        title={
          <span className="sm:whitespace-nowrap">
            PHOENIX <span className="font-bold">ON-LOCATION STAFF</span> <span className="font-normal">HEADSHOTS</span>
          </span>
        }
        description="I can bring my studio to you and set up a mini version of our studio to capture your staff headshots that match your brand. I have been doing on-location staff headshots for 12 years. I have the process down. Don't have room? Not a problem, I can schedule your staff at our studio. I make it as easy as possible for you, click on get quote for more information."
        ctaText="GET QUOTE"
        ctaLink="/corporate-staff-headshots"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/CMQ-HEADSHOTS-Phoenix-on-location-staff-headshots.webp"
        imageAlt="Phoenix on-location staff headshots grid"
        backgroundColor="#e7e7e7"
        reverseColumns={true}
        textSize="small"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />
      </LazySection>

      {/* Why Choose Section */}
      <LazySection height="650px">
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
              <Award className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold mb-3" style={{ color: 'white' }}>
                12+ Years Experience
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
              <Heart className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
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
              <Shield className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
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
      </LazySection>

      {/* Second FAQ Section */}
      <LazySection height="500px">
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
      </LazySection>

      {/* Phoenix Actor Headshots Section */}
      <LazySection height="600px">
      <TwoColumnSection
        title={
          <>
            PHOENIX <span className="font-bold">ACTOR HEADSHOTS</span>
          </>
        }
        description="Your agent will tell you to hire a professional photographer for your Actor Headshots. I can help answer all of the questions regarding what casting agents are looking for when it comes to your Acting Headshots. If you're an Actor or Actress wanting to get more calls for roles, call me or schedule an appointment online for your acting or commercial headshot session."
        ctaText="ACTOR PRICING"
        ctaLink="/actor-headshots-phoenix"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/Ashley-Actor-collage-of-headshots.webp"
        imageAlt="Phoenix actor headshots collection"
        backgroundColor="#F1F1F1"
        reverseColumns={false}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />
      </LazySection>

      {/* Third FAQ Section */}
      <LazySection height="500px">
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
      </LazySection>

      {/* Phoenix Modeling Headshots Section */}
      <LazySection height="600px">
      <ModelingHeadshotsSection backgroundColor="#ffffff" />
      </LazySection>

      {/* Fourth FAQ Section */}
      <LazySection height="500px">
      <FAQSection
        backgroundColor="#F1F1F1"
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
      </LazySection>

      {/* Services Preview Section */}
      <LazySection height="500px">
      <section className="section" style={{ backgroundColor: '#575757' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-4" style={{ color: '#ffffff' }}>
              <span className="font-bold">PROFESSIONAL PHOTOGRAPHY</span> <span className="font-light">SERVICES</span>
            </h2>
            <p className="font-raleway text-xl font-normal max-w-2xl mx-auto whitespace-nowrap" style={{ color: '#ffffff',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              Specialized headshot and portrait photography tailored to your professional needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center">
              <Palette className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h2 className="font-raleway text-3xl text-cmq-blue mb-2">
                <span className="font-bold">BRANDING</span> <span className="font-light">PHOTOGRAPHY</span>
              </h2>
              <p className="font-raleway font-normal text-cmq-gray-dark" style={{
                fontSize: '17px',
                fontWeight: '400',
                lineHeight: '1.4'
              }}>Personal and business branding images that tell your story</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center">
              <Scale className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h2 className="font-raleway text-3xl text-cmq-blue mb-2">
                <span className="font-bold">LAWYER</span> <span className="font-light">HEADSHOTS</span>
              </h2>
              <p className="font-raleway font-normal text-cmq-gray-dark" style={{
                fontSize: '17px',
                fontWeight: '400',
                lineHeight: '1.4'
              }}>Professional legal headshots that convey trust and authority</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center">
              <Music className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h2 className="font-raleway text-3xl text-cmq-blue mb-2">
                <span className="font-bold">DANCER</span> <span className="font-light">HEADSHOTS</span>
              </h2>
              <p className="font-raleway font-normal text-cmq-gray-dark" style={{
                fontSize: '17px',
                fontWeight: '400',
                lineHeight: '1.4'
              }}>Dynamic headshots capturing the grace and energy of dancers</p>
            </div>
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
      </LazySection>

    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'home.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}