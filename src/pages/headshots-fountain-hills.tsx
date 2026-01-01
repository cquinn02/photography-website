import Layout from '@/components/Layout'
import Head from 'next/head'
import { Award, Heart, Shield } from 'lucide-react'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
import ThreeReviewSection from '@/components/sections/ThreeReviewSection'
import FAQSection from '@/components/sections/FAQSection'
import GetPricingButton from '@/components/GetPricingButton'
import FAQSchema from '@/components/FAQSchema'

export default function HeadshotsFountainHills() {
  return (
    <Layout
      title="Professional Headshots Fountain Hills AZ | CMQ Headshots"
      description="Professional headshot photographer serving Fountain Hills AZ. Business, actor, modeling & corporate headshots. On-location at your home or office. Book today!"
      canonical="https://www.cmqheadshots.com/headshots-fountain-hills"
      ogUrl="https://www.cmqheadshots.com/headshots-fountain-hills"
    >
      {/* DRAFT PAGE - Hidden from Google */}
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* FAQ Schema for AI Visibility */}
      <FAQSchema faqs={[
        { question: "What types of headshots do you offer in Fountain Hills?", answer: "I offer a full range of headshot services: business and LinkedIn headshots, actor and theatrical headshots, modeling headshots, corporate team photography, and personal branding sessions. Whatever your professional needs, I can help." },
        { question: "Do you offer on-location headshots in Fountain Hills?", answer: "Yes! I can come to your Fountain Hills home or business for headshot sessions. This is perfect for busy professionals, corporate teams, or anyone who prefers the comfort of their own space." },
        { question: "Do you photograph actors and models?", answer: "Absolutely! I specialize in actor headshots for theatrical and commercial work, as well as modeling headshots for portfolios. I understand what casting directors and agencies are looking for." },
        { question: "Can you do corporate team headshots in Fountain Hills?", answer: "Yes! I offer on-location corporate photography where I bring my studio setup to your Fountain Hills office. I can also schedule your team members at my studio for consistent, professional results." },
        { question: "How far is your studio from Fountain Hills?", answer: "My studio in North Phoenix/Anthem is about 25-30 minutes from Fountain Hills. Many clients appreciate the professional studio environment, and I also offer on-location photography in Fountain Hills for maximum convenience." }
      ]} />

      {/* H1 Section */}
      <section className="bg-white pt-1 pb-0 text-center">
        <h1 className="font-raleway text-cmq-blue text-[12px] sm:text-[16px]" style={{
          fontWeight: '400',
          letterSpacing: '0.1em'
        }}>
          HEADSHOTS FOUNTAIN HILLS
        </h1>
      </section>

      {/* Hero Section */}
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
            alt="Professional Headshots Fountain Hills Arizona"
            className="w-full h-auto"
            width={1920}
            height={1080}
          />
        </picture>
      </section>

      {/* Hero Text Section */}
      <section className="pt-[20px] pb-8 relative" style={{
        backgroundColor: '#ffffff'
      }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="font-raleway font-bold mb-4" style={{ fontSize: '42px', lineHeight: '1.2' }}>
              <div className="mb-3">
                <span
                  className="inline-block mr-4"
                  style={{
                    color: '#5577a5',
                    fontWeight: '800',
                    fontSize: '48px'
                  }}
                >
                  PROFESSIONAL
                </span>
                <span
                  className="inline-block"
                  style={{
                    color: '#5577a5',
                    fontWeight: '400',
                    fontSize: '42px'
                  }}
                >
                  HEADSHOTS
                </span>
              </div>
              <div>
                <span
                  className="inline-block mr-4"
                  style={{
                    color: '#5577a5',
                    fontWeight: '400',
                    fontSize: '38px'
                  }}
                >
                  FOR
                </span>
                <span
                  className="inline-block"
                  style={{
                    color: '#5577a5',
                    fontWeight: '800',
                    fontSize: '48px'
                  }}
                >
                  FOUNTAIN HILLS
                </span>
              </div>
            </div>
            <p className="font-raleway text-lg md:text-xl mb-6 leading-relaxed text-gray-700">
              Fountain Hills is home to successful professionals who value quality and attention to detail. Whether you&apos;re a realtor showcasing luxury properties, a consultant building your practice, or a business owner expanding your brand, professional headshots are essential. My studio is conveniently located in North Phoenix, or I can come to your Fountain Hills location.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto mt-6">
              <GetPricingButton
                href="/pricing-individual"
                size="large"
                className="sm:flex-1 max-w-xs !text-center flex items-center justify-center"
              >
                INDIVIDUAL RATES
              </GetPricingButton>
              <GetPricingButton
                href="/corporate-staff-headshots"
                size="large"
                className="sm:flex-1 max-w-xs !text-center flex items-center justify-center"
              >
                TEAM HEADSHOTS
              </GetPricingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Headshots Fountain Hills Section */}
      <TwoColumnSection
        title={
          <>
            <span className="font-bold">FOUNTAIN HILLS</span> <span className="font-normal">HEADSHOT PHOTOGRAPHER</span>
          </>
        }
        description="Fountain Hills professionals appreciate quality - in their homes, their businesses, and their professional image. I create headshots that reflect that same commitment to excellence. Whether you need portraits for your real estate marketing, consulting practice, corporate profile, or personal brand, I deliver polished results in a comfortable, relaxed environment. My North Phoenix studio is an easy drive, or I can bring my equipment to your Fountain Hills location."
        ctaText="GET PRICING"
        ctaLink="/pricing-individual"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/professional-headshots-phoenix.jpg"
        imageAlt="Professional headshots Fountain Hills"
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

      {/* Reviews Section */}
      <ThreeReviewSection
        title={
          <>
            <span style={{ fontWeight: '700' }}>CMQ HEADSHOTS&apos;S</span>{' '}
            <span style={{ fontWeight: '400' }}>5 STAR REVIEWS</span>
          </>
        }
        reviews={[
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS1196-sq-optimized.webp",
            imageAlt: "Professional headshot client",
            name: "Chad Noonan",
            review: "Cindy is an expert professional photographer. She helped me prepare for my photoshoot and clearly outlined expectations, resolving any uncertainties I had. I found working with Cindy easy and fun!",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/CMQHeadshots-Adwoaj9579-web-jp-leg-sq.webp",
            imageAlt: "Professional headshot review",
            name: "Adwoa John",
            review: "Cindy made me feel very comfortable right away! She is professional, detailed, and cared so much about capturing the essence of my person! I will be recommending her to friends and family.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-LisaS0258-optimized.webp",
            imageAlt: "Professional headshot review",
            name: "Lisa Sallee",
            review: "I really enjoyed working with Cindy! We had a phone consultation to give me tips on wardrobe colors, skincare, and makeup. It was a very comfortable experience, and I would absolutely use her again.",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        backgroundImage="url('https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp')"
        textColor="white"
      />

      {/* Fountain Hills Business Section */}
      <TwoColumnSection
        title={
          <>
            <span className="font-bold">BUSINESS HEADSHOTS</span> <span className="font-normal">FOUNTAIN HILLS</span>
          </>
        }
        description="Fountain Hills' business community includes successful realtors, consultants, entrepreneurs, and professionals who have chosen this beautiful community for its quality of life. Your headshot should reflect your professionalism and the high standards that Fountain Hills is known for. I create portraits that help you build trust with clients and stand out in your industry."
        ctaText="INDIVIDUAL PRICING"
        ctaLink="/pricing-individual"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/Brent%20Agees11314-optimized.webp"
        imageAlt="Business headshots Fountain Hills Arizona"
        backgroundColor="#F1F1F1"
        textColor="dark"
        titleColor="blue"
        reverseColumns={true}
        textSize="medium"
        ctaSize="large"
        objectFit="cover"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* Actor Headshots Section */}
      <TwoColumnSection
        title={
          <>
            <span className="font-bold">ACTOR HEADSHOTS</span> <span className="font-normal">FOUNTAIN HILLS</span>
          </>
        }
        description="Your agent will tell you to hire a professional photographer for your actor headshots. I can help answer all of the questions regarding what casting agents are looking for when it comes to your theatrical and commercial headshots. Whether you're pursuing film, television, or theater roles, I create headshots that showcase your range and help you get more auditions."
        ctaText="ACTOR PRICING"
        ctaLink="/pricing-actor"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/Ashley-Actor-collage-of-headshots.webp"
        imageAlt="Actor headshots Fountain Hills Arizona"
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

      {/* Modeling Headshots Section */}
      <TwoColumnSection
        title={
          <>
            <span className="font-bold">MODELING HEADSHOTS</span> <span className="font-normal">FOUNTAIN HILLS</span>
          </>
        }
        description="Building your modeling portfolio starts with stunning headshots that capture your unique look. I work with aspiring and professional models to create images that agencies want to see - from commercial and fashion to fitness and lifestyle. My studio is conveniently located in North Phoenix, so you don't have to drive across the Valley for professional modeling photos."
        ctaText="GET PRICING"
        ctaLink="/pricing-individual"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/CMQheadshots-modeling-phoenix-headshots-optimized.webp"
        imageAlt="Modeling headshots Fountain Hills Arizona"
        backgroundColor="#F1F1F1"
        textColor="dark"
        titleColor="blue"
        reverseColumns={true}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* On-Location Headshots Section */}
      <TwoColumnSection
        title={
          <>
            <span className="font-bold">ON-LOCATION</span> <span className="font-normal">HEADSHOTS FOUNTAIN HILLS</span>
          </>
        }
        description="Prefer headshots at your location? I bring my professional studio setup directly to your Fountain Hills home or office. This is perfect for busy professionals, corporate teams who need consistent headshots, or anyone who prefers the comfort of their own space. Same professional quality, maximum convenience for you."
        ctaText="GET QUOTE"
        ctaLink="/corporate-staff-headshots"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/CMQ-HEADSHOTS-Phoenix-on-location-staff-headshots.webp"
        imageAlt="On-location headshots Fountain Hills Arizona"
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

      {/* Corporate Team Headshots Section */}
      <TwoColumnSection
        title={
          <>
            <span className="font-bold">CORPORATE TEAM</span> <span className="font-normal">HEADSHOTS</span>
          </>
        }
        description="Whether you run a small, medium, or large business in Fountain Hills, corporate headshots are integral to your success. I can come to your office and photograph your entire team with consistent lighting and backgrounds, or schedule your staff at my North Phoenix studio. Either way, you get professional results that elevate your company's image."
        ctaText="TEAM QUOTE"
        ctaLink="/corporate-staff-headshots"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/jgp2-square-collage-3-2048x2048.webp"
        imageAlt="Corporate team headshots Fountain Hills Arizona"
        backgroundColor="#F1F1F1"
        textColor="dark"
        titleColor="blue"
        reverseColumns={true}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* FAQ Section */}
      <FAQSection
        backgroundColor="#FFFFFF"
        faqs={[
          {
            id: 1,
            question: "What types of headshots do you offer?",
            answer: "I offer a full range: business headshots for LinkedIn and company websites, actor headshots for theatrical and commercial work, modeling headshots for portfolios, corporate team photography, and personal branding sessions. Whatever your professional needs, I can help."
          },
          {
            id: 2,
            question: "Do you offer on-location headshots in Fountain Hills?",
            answer: "Yes! I can come to your Fountain Hills home or business for headshot sessions. This is perfect for busy professionals, corporate teams who need consistent headshots, or anyone who prefers the comfort of their own space."
          },
          {
            id: 3,
            question: "Do you photograph actors and models?",
            answer: "Absolutely! I specialize in actor headshots for theatrical and commercial work, as well as modeling headshots for portfolios. With 12+ years of experience, I understand what casting directors and agencies are looking for."
          },
          {
            id: 4,
            question: "Can you do corporate team headshots?",
            answer: "Yes! I offer on-location corporate photography where I bring my studio setup to your Fountain Hills office. I can also schedule your team members at my studio for consistent, professional results that match your company branding."
          },
          {
            id: 5,
            question: "How far is your studio from Fountain Hills?",
            answer: "My studio in North Phoenix/Anthem is about 25-30 minutes from Fountain Hills. Many clients appreciate the professional studio environment, and I also offer on-location photography in Fountain Hills for maximum convenience."
          }
        ]}
        showContactCTA={true}
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
            <h2 className="font-raleway text-4xl lg:text-5xl mb-8">
              <span className="font-medium" style={{ color: 'white' }}>WHY FOUNTAIN HILLS CHOOSES</span>{' '}
              <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600', color: '#5577a5', fontSize: '60px' }}>CMQ</span>
            </h2>
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
                Trusted by discerning professionals throughout the Valley.
              </p>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <Heart className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold mb-3" style={{ color: 'white' }}>
                Comfortable Sessions
              </h3>
              <p className="font-raleway text-xl font-normal" style={{
                color: 'white',
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                A relaxed experience that brings out your natural confidence.
              </p>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <Shield className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold mb-3" style={{ color: 'white' }}>
                On-Location Available
              </h3>
              <p className="font-raleway text-xl font-normal" style={{
                color: 'white',
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                I can come to your Fountain Hills location for maximum convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-cmq-blue text-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container mx-auto px-4 text-center">
          <p className="font-raleway text-3xl lg:text-4xl font-black mb-4 uppercase" style={{ fontWeight: '900', color: '#ffffff' }}>
            READY FOR YOUR FOUNTAIN HILLS HEADSHOTS?
          </p>
          <p className="font-raleway text-xl font-normal mb-8 text-white" style={{
            fontWeight: '400',
            letterSpacing: '0.03em',
            lineHeight: '1.6'
          }}>
            Let&apos;s create professional headshots that reflect your success.
          </p>
          <GetPricingButton href="/contactus" size="xl" className="border-2 border-white">
            Schedule Your Session Today
          </GetPricingButton>
        </div>
      </section>

    </Layout>
  )
}
