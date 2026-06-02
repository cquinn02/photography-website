import Layout from '@/components/Layout'
import dynamic from 'next/dynamic'
import { Award, Heart, Shield } from 'lucide-react'
import KWSection from '@/components/sections/KWSection'
import PhoenixBusinessHeadshotsSection from '@/components/sections/PhoenixBusinessHeadshotsSection'
import FourStepPolaroid from '@/components/sections/FourStepPolaroid'
import GetPricingButton from '@/components/GetPricingButton'
import Head from 'next/head'

const ServiceCarousel = dynamic(() => import('@/components/sections/ServiceCarousel'))
const ThreeReviewSection = dynamic(() => import('@/components/sections/ThreeReviewSection'))
const VideoSection = dynamic(() => import('@/components/sections/VideoSection'))
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'))

export default function Home() {
  return (
    <Layout
      title="Professional Headshot Photographer Phoenix | CMQ Headshots"
      description="Phoenix headshots by a dedicated headshot specialist with 14 years of experience and 133+ 5-star reviews. Look confident, approachable, and professional."
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
          href="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-desktop-1400.webp"
          media="(min-width: 1024px) and (max-width: 1599px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-desktop-1920.webp"
          media="(min-width: 1600px) and (max-width: 2559px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-scaled-1.webp"
          media="(min-width: 2560px)"
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
          <source
            media="(max-width: 1599px)"
            srcSet="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-desktop-1400.webp"
          />
          <source
            media="(max-width: 2559px)"
            srcSet="https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-desktop-1920.webp"
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
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Single H1 — overlays hero image on all screen sizes */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-raleway text-center text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl" style={{
            color: '#FFFFFF',
            fontWeight: '400',
            letterSpacing: '0.08em',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)'
          }}>
            <span className="font-bold" style={{ fontWeight: '700' }}>PROFESSIONAL HEADSHOT</span><br />
            <span className="font-normal" style={{ fontWeight: '400' }}>PHOTOGRAPHER PHOENIX</span>
          </h1>
        </div>
      </section>

      {/* ===== SUPPORTING PARAGRAPH ===== */}
      <section className="pt-2 pb-4 lg:pt-12 lg:pb-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="font-raleway text-xl font-normal" style={{
              color: '#000000',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              I&apos;m Cindy Quinn, a professional headshot photographer in Phoenix with 14 years
              of experience and 133+ five-star Google reviews. I photograph business professionals,
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
        captionsUrl="/captions/welcome-message.vtt"
        title="HEADSHOT PHOTOGRAPHER"
        titleThinWord="PHOENIX"
        description="I take pride in my ability to make people feel comfortable in front of my camera. It's a big part of my process, and it's the first step towards creating a headshot that you'll truly love."
        ownerName="Cindy Quinn - Owner"
        backgroundColor="#D0D0D0"
      />

      {/* Reviews 1 — Kara, Michael, Barbara */}
      <ThreeReviewSection
        reviews={[
          {
            image: "https://images.cmqheadshots.com/images/CMQHEADSHOTS-Kara%20Kastilahn0420-e-linkedin.webp",
            imageAlt: "Kara Kastilahn professional headshot Phoenix",
            name: "Kara Kastilahn",
            review: "Found CMQ Headshots in an online search which is always a bit nerve wracking. So pleased with the ease of booking, the detailed communication that followed and the session itself. Cindy is delightful!",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/CMQHEADSHOTS-micheal%20Harris7860-blue%20green-teams.webp",
            imageAlt: "Michael Harris professional headshot Phoenix",
            name: "Michael Harris",
            review: "Cindy is the best! Very thorough, knowledgeable, and personable. She goes above and beyond to ensure you get the best photos for your needs. I've worked with her a few times over the last several years.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/CMQHEADSHOTS-BarbaraB3598-horizontal2-teams.webp",
            imageAlt: "Barbara Buck professional headshot Phoenix",
            name: "Barbara Buck",
            review: "I recently updated my headshot and found Cindy to be one of the best head photographers I have ever worked with. She is a wonderful coach and provides some helpful educational information.",
            stars: 5
          }
        ]}
        background="darkGrey"
      />

      {/* ============================================================ */}
      {/*  KW SECTION 1 of 11 — Craig — PROFESSIONAL HEADSHOTS PHOENIX  */}
      {/*  M / dark dramatic                                            */}
      {/* ============================================================ */}
      <KWSection
        title={<><span className="font-bold">PROFESSIONAL HEADSHOTS</span> <span className="font-normal">PHOENIX</span></>}
        description="Professional headshots Phoenix professionals trust. I specialize in creating headshots and professional portraits that capture your authentic personality while projecting the confidence and professionalism you need for LinkedIn, your company website, or any business marketing materials."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/denova-2743-craig-transparent-1600.webp"
        imageAlt="Professional headshots Phoenix - portrait by CMQ Headshots"
        background="veryDark"
        imageLayout="horizontal"
        imageSide="right"
      />

      <FourStepPolaroid />

      {/* ============================================================ */}
      {/*  KW SECTION 2 of 11 — Courtney — PHOENIX HEADSHOTS            */}
      {/*  M / white                                                    */}
      {/* ============================================================ */}
      <KWSection
        title={<><span className="font-normal">PHOENIX</span> <span className="font-bold">HEADSHOTS</span></>}
        description="Phoenix headshots done right. Studio in North Phoenix with free parking, professional lighting, and a relaxed atmosphere. Most clients walk out saying it was the most relaxed photo session they have ever had."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/courtney-keith-hamilton-16736-transparent-1600.webp"
        imageAlt="Phoenix headshots - professional portrait by CMQ Headshots"
        background="white"
        imageLayout="horizontal"
        imageSide="left"
      />

      {/* Reviews 2 — Chad, Adwoa, Lisa */}
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
        background="darkGrey"
      />

      {/* ============================================================ */}
      {/*  KW SECTION 3 of 11 — Cami — PROFESSIONAL HEADSHOTS NEAR ME   */}
      {/*  F / light grey                                               */}
      {/* ============================================================ */}
      <KWSection
        title={<><span className="font-bold">PROFESSIONAL HEADSHOTS</span> <span className="font-normal">NEAR ME</span></>}
        description="Professional headshots near me in the Phoenix area. North Phoenix studio with easy freeway access from the 101 and I-17. On-location sessions at your office across the metro."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/cami-collins-13789-transparent-1600.webp"
        imageAlt="Professional headshots near me - Phoenix area headshot photographer"
        background="lightGrey"
        imageLayout="horizontal"
        imageSide="right"
      />

      {/* FAQ 1 — General */}
      <FAQSection
        background="darkGrey"
      />

      {/* ============================================================ */}
      {/*  KW SECTION 4 of 11 — Sophia — HEADSHOTS PHOENIX              */}
      {/*  F / dark dramatic (Cindy's favorite combo)                   */}
      {/* ============================================================ */}
      <KWSection
        title={<><span className="font-bold">HEADSHOTS</span> <span className="font-normal">PHOENIX</span></>}
        description="Headshots Phoenix professionals trust. North Phoenix studio with professional lighting, multiple backdrops, and a relaxed atmosphere. Every session is private, never rushed, and tailored to your industry."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/sophia-4483-transparent-1600.webp"
        imageAlt="Headshots Phoenix - studio portrait by CMQ Headshots"
        background="veryDark"
        imageLayout="vertical"
        imageSide="left"
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
              <h3 className="font-raleway text-xl font-semibold mb-3" style={{ color: 'white' }}>14+ Years Experience</h3>
              <p className="font-raleway text-xl font-normal" style={{ color: 'white', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                Trusted by professionals across Phoenix and Scottsdale for over a decade.
              </p>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <Heart className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold mb-3" style={{ color: 'white' }}>Comfortable Experience</h3>
              <p className="font-raleway text-xl font-normal" style={{ color: 'white', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                I take pride in my ability to make people feel comfortable in front of my camera.
              </p>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <Shield className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold mb-3" style={{ color: 'white' }}>No Rush Guarantee</h3>
              <p className="font-raleway text-xl font-normal" style={{ color: 'white', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                Sessions continue until you have the perfect shots - 20 minutes to 3 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  KW SECTION 5 of 11 — Matt — ARIZONA HEADSHOTS                */}
      {/*  M / white (Matt non-transparent — placed on white)           */}
      {/* ============================================================ */}
      <KWSection
        title={<><span className="font-bold">ARIZONA</span> <span className="font-normal">HEADSHOTS</span></>}
        description="Arizona headshots by CMQ Headshots. North Phoenix studio serving professionals across the entire state. Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, and Paradise Valley."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/matt%20federico0730-hd.webp"
        imageAlt="Arizona headshots - professional portrait by CMQ Headshots"
        background="white"
        imageLayout="vertical"
        imageSide="right"
      />

      {/* Trusted By Phoenix Professionals */}
      <section className="py-12 lg:py-16" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-raleway text-3xl lg:text-4xl mb-4" style={{ color: '#FFFFFF' }}>
              <span className="font-bold">TRUSTED BY PHOENIX PROFESSIONALS</span>
            </p>
            <p className="font-raleway text-xl font-normal mb-8" style={{ color: '#FFFFFF', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
              I work with professionals across Phoenix. Here are some of the industries I photograph:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { label: 'Executives & C-Suite' },
                { label: 'Entrepreneurs & Founders' },
                { label: 'Attorneys & Law Firms' },
                { label: 'Real Estate Agents' },
                { label: 'Financial Advisors' },
                { label: 'Healthcare Professionals' },
                { label: 'Actors & Performers', desktopOnly: true },
                { label: 'Job Seekers' },
                { label: 'Corporate Teams' }
              ].map((item) => (
                <div key={item.label} className={`font-raleway text-xl py-3 px-4 rounded-lg flex items-center justify-center text-center${item.desktopOnly ? ' hidden md:flex' : ''}`} style={{
                  backgroundColor: '#FFFFFF',
                  color: '#383838',
                  fontWeight: '400'
                }}>
                  {item.label}
                </div>
              ))}
            </div>
            <p className="font-raleway text-xl font-normal mt-8" style={{ color: '#FFFFFF', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
              Each industry has different expectations. I know what works for each one.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  KW SECTION 6 of 11 — Anna — HEADSHOT PROFESSIONAL            */}
      {/*  F / white (avoids light-light boundary with Trusted By)      */}
      {/* ============================================================ */}
      <KWSection
        title={<><span className="font-bold">HEADSHOT</span> <span className="font-normal">PROFESSIONAL</span></>}
        description="Hiring a headshot professional makes a visible difference. I coach you through posing and expressions so your photos look natural and confident. No awkward arms, no forced smiles."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/anna-h0622-transparent-1600.webp"
        imageAlt="Headshot professional Phoenix AZ - professional portrait"
        background="lightGrey"
        imageLayout="horizontal"
        imageSide="left"
      />

      {/* Reviews 3 — Denise, Scott, Jenny */}
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
            image: "https://images.cmqheadshots.com/images/CMQHEADSHOTS-Scott%20Anderson10074-low-res.webp",
            imageAlt: "Scott Anderson professional headshot Phoenix",
            name: "Scott Anderson",
            review: "I found CMQ Headshots, and my company was able to schedule and pay for everything remotely, easily. Cindy is an excellent photographer. I felt relaxed and comfortable. Her photography skills created a comfortable atmosphere.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/CMQHEADSHOTS-Jenny%20Bolt11669-insta.webp",
            imageAlt: "Jenny Bolt professional headshot Phoenix",
            name: "Jenny Bolt",
            review: "Cindy was amazing...she made me feel so comfortable throughout the entire process. I'm not one who enjoys photos of myself, and Cindy helped me feel relaxed and actually really enjoyed the process.",
            stars: 5
          }
        ]}
        background="darkGrey"
      />

      {/* ============================================================ */}
      {/*  KW SECTION 7 of 11 — Brent — HEADSHOT PHOTOGRAPHER PHOENIX  */}
      {/*  M / dark dramatic (avoids identical-bg blending with Reviews 3 dark textured) */}
      {/* ============================================================ */}
      <KWSection
        title={<><span className="font-bold">HEADSHOT PHOTOGRAPHER</span> <span className="font-normal">PHOENIX</span></>}
        description="A headshot photographer Phoenix professionals book again and again comes down to experience, reviews, and results. I have 133+ five-star Google reviews and 14 years behind the camera. Headshots are not a side gig for me. This is all I do, every day."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/brent-agees-11314-1600.webp"
        imageAlt="Headshot photographer Phoenix - professional business portrait by CMQ Headshots"
        background="veryDark"
        imageLayout="horizontal"
        imageSide="right"
        objectPosition="left bottom"
      />

      {/* FAQ 2 — Posing & Portfolio */}
      <FAQSection
        background="white"
        faqs={[
          { id: 1, question: "Do you only shoot headshots?", answer: "I have specialized in headshots, but I love creating portraits, working with models, creating unique images for their portfolios, and studio senior photos. I do not do weddings or baby photography." },
          { id: 2, question: "Will you help me pose during my headshot session?", answer: "Absolutely! I will help you to look more confident and natural in front of the camera. When my clients leave the studio, they always say that I made them feel so comfortable and relaxed. I can help you too." },
          { id: 3, question: "Can you help me create my acting portfolio?", answer: "Yes, I have helped many actors create different looks for the different roles that they want to be cast in, by helping them choose the best outfit and lighting them in a way that will enhance their facial expressions." }
        ]}
        showContactCTA={true}
      />

      {/* ============================================================ */}
      {/*  KW SECTION 8 of 11 — Photo 41301 — BEST HEADSHOT PHOTOGRAPHER PHOENIX */}
      {/*  F / light grey (avoids white-white boundary with FAQ 2)      */}
      {/* ============================================================ */}
      <KWSection
        title={<><span className="font-bold">BEST HEADSHOT PHOTOGRAPHER</span> <span className="font-normal">PHOENIX</span></>}
        description={`"Best headshot photographer Phoenix" is more than a search term. It's a standard built on experience, consistency, and specialization. For over 14 years, CMQ Headshots has focused exclusively on professional headshots, earning 133+ five-star Google reviews from clients across the Phoenix area.`}
        imageUrl="https://images.cmqheadshots.com/images/website%20media/jgp-day-41301-transparent-1600.webp"
        imageAlt="Best headshot photographer Phoenix - studio session by CMQ Headshots"
        background="lightGrey"
        imageLayout="horizontal"
        imageSide="left"
      />

      {/* Reviews 4 — Carol, Shawn, Ronlyn */}
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
        background="darkGrey"
      />

      {/* ============================================================ */}
      {/*  KW SECTION 9 of 11 — Bryan — PROFESSIONAL PHOTOGRAPHY PHOENIX */}
      {/*  M / light grey                                               */}
      {/* ============================================================ */}
      <KWSection
        title={<><span className="font-bold">PROFESSIONAL PHOTOGRAPHY</span> <span className="font-normal">PHOENIX</span></>}
        description="Professional photography Phoenix is a broad field. CMQ Headshots specializes in headshots and portraits, not family, babies, or weddings. Do one thing and do it really well."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/bryan-ahia-18642-transparent-1600.webp"
        imageAlt="Professional photography Phoenix - male headshot by CMQ Headshots"
        background="lightGrey"
        imageLayout="horizontal"
        imageSide="right"
      />

      {/* FAQ 3 — Pricing & Logistics */}
      <FAQSection
        background="darkGrey"
        faqs={[
          { id: 1, question: "Do you offer discounts?", answer: "I offer a 20% discount to military personnel and active first responders, and 30% off the session fee for return clients." },
          { id: 2, question: "How long is the headshot session?", answer: "The headshot session will take as long as it takes to get the images you need for your marketing and LinkedIn profile. It can be as short as 20 minutes and as long as 3 hours." },
          { id: 3, question: "What are your business hours?", answer: "All sessions are by appointment only. Please check our calendar on the pricing page to view my current availability, and if you can't find something that works for you, please give me a call." }
        ]}
        showContactCTA={true}
      />

      {/* ============================================================ */}
      {/*  KW SECTION 10 of 11 — Nikkie — PROFESSIONAL HEADSHOTS PHOENIX, AZ */}
      {/*  F / light grey                                               */}
      {/* ============================================================ */}
      <KWSection
        title={<><span className="font-bold">PROFESSIONAL HEADSHOTS</span> <span className="font-normal">PHOENIX, AZ</span></>}
        description="Professional headshots Phoenix, AZ from a studio that does only headshots. Fourteen years of experience, 133+ five-star Google reviews, and sessions that are never rushed."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/nikkie-miller-0061-transparent-1600.webp"
        imageAlt="Professional headshots Phoenix, AZ - portrait by CMQ Headshots"
        background="white"
        imageLayout="square"
        imageSide="left"
      />

      {/* FAQ 4 — Corporate & Backdrops */}
      <FAQSection
        background="darkGrey"
        faqs={[
          { id: 1, question: "Can you come to our office and take our staff headshots?", answer: "Yes, I can! I can come out to your office and photograph your staff and C-suite employees, resulting in less downtime for your staff and ensuring consistency on your website." },
          { id: 2, question: "Do you only have a few backdrops?", answer: "I have many options. You and I will discuss what will look best with your outfits and your specific industry to ensure we create the best image for your profile." },
          { id: 3, question: "I'm really nervous, can you help me?", answer: "Most people who come to my studio are nervous. I know that, and I have the personality and confidence to walk you through the process. Before you know it, you are laughing and loving your images." }
        ]}
        showContactCTA={true}
      />

      {/* ============================================================ */}
      {/*  KW SECTION 11 of 11 — Peter — PROFESSIONAL HEADSHOT PHOTOGRAPHER */}
      {/*  M / light grey (avoids dark-dark boundary with FAQ 4)        */}
      {/* ============================================================ */}
      <KWSection
        title={<><span className="font-bold">PROFESSIONAL HEADSHOT</span> <span className="font-normal">PHOTOGRAPHER</span></>}
        description="A professional headshot photographer does more than point a camera at your face. I coach you through every pose and expression so you look natural, not stiff. Most people are nervous when they arrive — I talk them through it until they are laughing."
        imageUrl="https://images.cmqheadshots.com/images/website%20media/chris-maxedon-7296-transparent-1600.webp"
        imageAlt="Professional headshot photographer Phoenix - executive portrait"
        background="lightGrey"
        imageLayout="horizontal"
        imageSide="right"
      />

      {/* FAQ 5 — Pricing & Delivery */}
      <FAQSection
        background="white"
        faqs={[
          { id: 1, question: "How much do headshots cost in Phoenix?", answer: "Individual headshot sessions start at $250 session fee plus $100 per edited image. Corporate team pricing depends on group size. Contact me for a custom quote." },
          { id: 2, question: "What is the difference between a headshot and a professional portrait?", answer: "A headshot focuses on your face and shoulders, typically used for LinkedIn, company websites, and business cards. A professional portrait captures more of you, your posture, environment, and personal brand. Both are shot in my Phoenix studio with professional lighting. Many clients book a session that includes both." },
          { id: 3, question: "When will I get my final images?", answer: "Final retouched images are delivered within 7 business days. Same-day retouching is available for an additional $50." }
        ]}
        showContactCTA={true}
      />

      {/* HEADSHOTS FOR EVERY PROFESSION */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#5577a5' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-medium mb-6 font-raleway" style={{ color: '#FFFFFF' }}>
              <span className="font-bold">HEADSHOTS</span> <span className="font-normal">FOR EVERY PROFESSION</span>
            </h2>
            <p className="text-xl font-normal mb-8 font-raleway" style={{ color: '#FFFFFF', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
              Not every headshot fits a single category. I have photographed yoga instructors, fitness coaches, life coaches, nutritionists, chiropractors, dentists, veterinarians, financial advisors, insurance agents, mortgage brokers, architects, interior designers, personal trainers, therapists, consultants, authors, speakers, podcasters, and nonprofit directors. If your profession requires a photo that represents who you are and what you do, I have probably photographed someone in your field.
            </p>
            <GetPricingButton href="/contact-us" size="large" shimmer={true} className="!bg-white !text-[#5577a5] hover:!bg-[#f0f0f0]">
              CONTACT ME
            </GetPricingButton>
          </div>
        </div>
      </section>

    </Layout>
  )
}
