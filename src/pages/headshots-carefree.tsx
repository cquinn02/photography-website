import Layout from '@/components/Layout'
import Head from 'next/head'
import { Award, Heart, Shield } from 'lucide-react'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
import ThreeReviewSection from '@/components/sections/ThreeReviewSection'
import FAQSection from '@/components/sections/FAQSection'
import GetPricingButton from '@/components/GetPricingButton'
import FAQSchema from '@/components/FAQSchema'

export default function HeadshotsCarefree() {
  return (
    <Layout
      title="Professional Headshots Carefree AZ | CMQ Headshots"
      description="Professional headshot photographer near Carefree AZ. Business, actor, modeling & corporate headshots. On-location at your home or office. Book today!"
      canonical="https://www.cmqheadshots.com/headshots-carefree"
      ogUrl="https://www.cmqheadshots.com/headshots-carefree"
    >
      {/* DRAFT PAGE - Hidden from Google */}
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* FAQ Schema for AI Visibility */}
      <FAQSchema faqs={[
        { question: "How close is your studio to Carefree?", answer: "My studio in Anthem is just 15-20 minutes from Carefree - making me the closest professional headshot photographer to the Carefree area. No need to drive to Scottsdale or Phoenix!" },
        { question: "What types of headshots do you offer for Carefree clients?", answer: "I offer a full range: business headshots for LinkedIn and company websites, actor headshots for theatrical and commercial work, modeling headshots for portfolios, corporate team photography, and personal branding sessions." },
        { question: "Do you offer on-location headshots in Carefree?", answer: "Yes! I can come to your Carefree home, gallery, office, or even a scenic desert location. I bring professional lighting and equipment to you for maximum convenience." },
        { question: "Do you photograph actors and models from Carefree?", answer: "Absolutely! I specialize in actor headshots for theatrical and commercial work, as well as modeling headshots for portfolios. I understand what casting directors and agencies are looking for." },
        { question: "Can you do corporate team headshots for Carefree businesses?", answer: "Yes! I offer on-location corporate photography where I bring my studio setup to your Carefree location. I can also schedule your team members at my Anthem studio just 15-20 minutes away." }
      ]} />

      {/* H1 Section */}
      <section className="bg-white pt-1 pb-0 text-center">
        <h1 className="font-raleway text-cmq-blue text-[12px] sm:text-[16px]" style={{
          fontWeight: '400',
          letterSpacing: '0.1em'
        }}>
          HEADSHOTS CAREFREE
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
            alt="Professional Headshots Carefree Arizona"
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
                  ELEGANT
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
                  CAREFREE PROFESSIONALS
                </span>
              </div>
            </div>
            <p className="font-raleway text-lg md:text-xl mb-6 leading-relaxed text-gray-700">
              Carefree is known for its artistic community, luxury resorts, and distinguished professionals. Your headshot should reflect that same level of sophistication. My studio in nearby Anthem is just 15-20 minutes away - the closest professional headshot option for Carefree residents and business owners.
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

      {/* Professional Headshots Carefree Section */}
      <TwoColumnSection
        title={
          <>
            <span className="font-bold">CAREFREE&apos;S NEAREST</span> <span className="font-normal">HEADSHOT PHOTOGRAPHER</span>
          </>
        }
        description="While most professional headshot photographers require a 30-45 minute drive to Scottsdale or Phoenix, my Anthem studio is right in your neighborhood. I work with Carefree's art gallery owners, luxury real estate professionals, resort executives, and entrepreneurs who need headshots that match the prestige of the Carefree brand. My relaxed approach and professional results have made me the go-to photographer for the area."
        ctaText="GET PRICING"
        ctaLink="/pricing-individual"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/professional-headshots-phoenix.jpg"
        imageAlt="Professional headshots Carefree"
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

      {/* Carefree Business Section */}
      <TwoColumnSection
        title={
          <>
            <span className="font-bold">LUXURY HEADSHOTS</span> <span className="font-normal">CAREFREE</span>
          </>
        }
        description="Carefree's business community includes world-class art galleries, luxury real estate, acclaimed resorts, and successful entrepreneurs. Your headshot needs to convey the same level of quality and sophistication that your clients expect. I create polished, professional portraits that help you build trust and connect with your ideal clients - whether for your gallery website, real estate marketing, or executive profile."
        ctaText="INDIVIDUAL PRICING"
        ctaLink="/pricing-individual"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/Brent%20Agees11314-optimized.webp"
        imageAlt="Luxury headshots Carefree Arizona"
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
            <span className="font-bold">ACTOR HEADSHOTS</span> <span className="font-normal">CAREFREE</span>
          </>
        }
        description="Your agent will tell you to hire a professional photographer for your actor headshots. I can help answer all of the questions regarding what casting agents are looking for when it comes to your theatrical and commercial headshots. Whether you're pursuing film, television, or theater roles, I create headshots that showcase your range and help you get more auditions."
        ctaText="ACTOR PRICING"
        ctaLink="/pricing-actor"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/Ashley-Actor-collage-of-headshots.webp"
        imageAlt="Actor headshots Carefree Arizona"
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
            <span className="font-bold">MODELING HEADSHOTS</span> <span className="font-normal">CAREFREE</span>
          </>
        }
        description="Building your modeling portfolio starts with stunning headshots that capture your unique look. I work with aspiring and professional models to create images that agencies want to see - from commercial and fashion to fitness and lifestyle. My studio in nearby Anthem is just 15-20 minutes away, making professional modeling photos convenient for Carefree residents."
        ctaText="GET PRICING"
        ctaLink="/pricing-individual"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/CMQheadshots-modeling-phoenix-headshots-optimized.webp"
        imageAlt="Modeling headshots Carefree Arizona"
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
            <span className="font-bold">ON-LOCATION</span> <span className="font-normal">HEADSHOTS CAREFREE</span>
          </>
        }
        description="Prefer headshots at your location? I bring my professional studio setup directly to your Carefree home, gallery, or office. This is perfect for busy professionals, corporate teams, or anyone who prefers the comfort of their own space. I can even capture the stunning Carefree desert landscape in outdoor settings."
        ctaText="GET QUOTE"
        ctaLink="/corporate-staff-headshots"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/CMQ-HEADSHOTS-Phoenix-on-location-staff-headshots.webp"
        imageAlt="On-location headshots Carefree Arizona"
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
        description="Whether you run a boutique gallery, luxury resort, or professional practice in Carefree, corporate headshots are integral to your success. I can come to your location and photograph your entire team with consistent lighting and backgrounds, or schedule your staff at my Anthem studio just 15-20 minutes away. Professional results that match Carefree's standards of excellence."
        ctaText="TEAM QUOTE"
        ctaLink="/corporate-staff-headshots"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/jgp2-square-collage-3-2048x2048.webp"
        imageAlt="Corporate team headshots Carefree Arizona"
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
            question: "Do you offer on-location headshots in Carefree?",
            answer: "Yes! I can come to your Carefree home, gallery, office, or even a scenic desert location. This is perfect for busy professionals, corporate teams, or anyone who prefers the comfort of their own space."
          },
          {
            id: 3,
            question: "Do you photograph actors and models?",
            answer: "Absolutely! I specialize in actor headshots for theatrical and commercial work, as well as modeling headshots for portfolios. With 12+ years of experience, I understand what casting directors and agencies are looking for."
          },
          {
            id: 4,
            question: "Can you do corporate team headshots?",
            answer: "Yes! I offer on-location corporate photography where I bring my studio setup to your Carefree location. I can also schedule your team at my Anthem studio just 15-20 minutes away."
          },
          {
            id: 5,
            question: "How close is your studio to Carefree?",
            answer: "My Anthem studio is just 15-20 minutes from Carefree - making me the closest professional headshot photographer to the area. No need to drive to Scottsdale or Phoenix!"
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
              <span className="font-medium" style={{ color: 'white' }}>WHY CAREFREE CHOOSES</span>{' '}
              <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600', color: '#5577a5', fontSize: '60px' }}>CMQ</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <Award className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold mb-3" style={{ color: 'white' }}>
                Your Neighbor
              </h3>
              <p className="font-raleway text-xl font-normal" style={{
                color: 'white',
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                Located in Anthem, just 15-20 minutes from Carefree - no long drives.
              </p>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <Heart className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold mb-3" style={{ color: 'white' }}>
                Premium Quality
              </h3>
              <p className="font-raleway text-xl font-normal" style={{
                color: 'white',
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                Sophisticated portraits that match Carefree&apos;s standards.
              </p>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <Shield className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold mb-3" style={{ color: 'white' }}>
                12+ Years Experience
              </h3>
              <p className="font-raleway text-xl font-normal" style={{
                color: 'white',
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                Trusted by discerning professionals throughout the area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-cmq-blue text-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container mx-auto px-4 text-center">
          <p className="font-raleway text-3xl lg:text-4xl font-black mb-4 uppercase" style={{ fontWeight: '900', color: '#ffffff' }}>
            READY FOR YOUR CAREFREE HEADSHOTS?
          </p>
          <p className="font-raleway text-xl font-normal mb-8 text-white" style={{
            fontWeight: '400',
            letterSpacing: '0.03em',
            lineHeight: '1.6'
          }}>
            Elegant portraits from your neighborhood photographer.
          </p>
          <GetPricingButton href="/contactus" size="xl" className="border-2 border-white">
            Schedule Your Session Today
          </GetPricingButton>
        </div>
      </section>

    </Layout>
  )
}
