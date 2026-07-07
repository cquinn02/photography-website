import Layout from '@/components/Layout'
import { Palette, Scale, Music, Award, Heart, Shield } from 'lucide-react'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
import FourImageRow from '@/components/sections/FourImageRow'
import ThreeReviewSection from '@/components/sections/ThreeReviewSection'
import VideoSection from '@/components/sections/VideoSection'
import FourStepPolaroid from '@/components/sections/FourStepPolaroid'
import FAQSection from '@/components/sections/FAQSection'
import ModelingHeadshotsSection from '@/components/sections/ModelingHeadshotsSection'
import PhoenixBusinessHeadshotsSection from '@/components/sections/PhoenixBusinessHeadshotsSection'
import ImageRightTextLeftSection from '@/components/sections/ImageRightTextLeftSection'
import GetPricingButton from '@/components/GetPricingButton'

interface LocationPageTemplateProps {
  // Required
  location: string

  // SEO (optional overrides)
  title?: string
  description?: string
  canonical?: string

  // Hero section (optional overrides)
  heroSubtitle?: string

  // Section text (optional overrides - defaults to homepage text with location substituted)
  professionalHeadshotsText?: string
  businessHeadshotsText?: string
  corporateHeadshotsText?: string
  onLocationHeadshotsText?: string
  actorHeadshotsText?: string
  modelingHeadshotsText?: string
}

export default function LocationPageTemplate({
  location,
  title,
  description,
  canonical,
  heroSubtitle,
  professionalHeadshotsText,
  businessHeadshotsText,
  corporateHeadshotsText,
  onLocationHeadshotsText,
  actorHeadshotsText,
  modelingHeadshotsText,
}: LocationPageTemplateProps) {

  // Generate URL-friendly slug from location
  const locationSlug = location.toLowerCase().replace(/\s+/g, '-')

  // Default values (homepage text with Phoenix replaced by location)
  const defaultTitle = `Professional Headshots ${location} AZ | CMQ Headshots`
  const defaultDescription = `Premier headshot photographer serving ${location}. Business, actor, modeling & corporate headshots. Studio and on-location sessions available. Book today!`
  const defaultCanonical = `https://www.cmqheadshots.com/headshots-${locationSlug}`

  // Build city list without duplicating the current location
  const otherCities = ['Phoenix', 'Scottsdale', 'Tempe'].filter(city => city.toLowerCase() !== location.toLowerCase())
  const cityList = [location, ...otherCities].slice(0, 3).join(', ')
  const defaultHeroSubtitle = `If you are looking for headshots in ${cityList}, or anywhere in the Valley, I am here to help. Being nervous is normal! I walk you through the process. The end result is, professional headshots that shine with your personality.`

  const defaultProfessionalHeadshotsText = `Looking for professional headshots in ${location}? You've come to the right place. I specialize in creating headshots that capture your authentic personality while projecting the confidence and professionalism you need for LinkedIn, your company website, or any business marketing materials. Every session is tailored to your specific industry and goals, whether you're an executive, entrepreneur, or job seeker ready to make a lasting first impression.`

  const defaultBusinessHeadshotsText = `Your career needs business headshots that are the best version of you! In my studio, I take the time to get to know you to create business headshots that meets your needs for your LinkedIn profile, Facebook profile, Zoom profile, and your business website.`

  const defaultCorporateHeadshotsText = `Whether you run a small, medium, or large business in ${location}, corporate headshots are an integral part of your success. Corporate headshots in ${location} is my specialty. I can come out and capture your teams and match your branding.`

  const defaultOnLocationHeadshotsText = `I can bring my studio to you and set up a mini version of our studio to capture your staff headshots that match your brand. I have been doing on-location staff headshots for 14 years. I have the process down. Don't have room? Not a problem, I can schedule your staff at our studio. I make it as easy as possible for you, click on get quote for more information.`

  const defaultActorHeadshotsText = `Your agent will tell you to hire a professional photographer for your Actor Headshots. I can help answer all of the questions regarding what casting agents are looking for when it comes to your Acting Headshots. If you're an Actor or Actress wanting to get more calls for roles, call me or schedule an appointment online for your acting or commercial headshot session.`

  const defaultModelingHeadshotsText = `Your agent will advise you to hire a professional photographer for your modeling images. I can help answer any questions regarding what your agent is looking for in your modeling headshots. If you're a model and need assistance with your portfolio, call me or schedule an appointment online for your modeling session.`

  return (
    <Layout
      title={title || defaultTitle}
      description={description || defaultDescription}
      canonical={canonical || defaultCanonical}
      ogUrl={canonical || defaultCanonical}
      noindex={true}
    >

      {/* H1 Section Above Image */}
      <section className="bg-white pt-1 pb-0 text-center">
        <h1 className="font-raleway text-cmq-blue text-[12px] sm:text-[16px]" style={{
          fontWeight: '400',
          letterSpacing: '0.1em'
        }}>
          HEADSHOTS {location.toUpperCase()}
        </h1>
      </section>

      {/* Hero Section - Image Only */}
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
            alt={`Professional Headshots ${location}`}
            className="w-full h-auto"
            width={2560}
            height={906}
            style={{ aspectRatio: '2560 / 906' }}
          />
        </picture>
      </section>

      {/* Hero Text Section - Below Image */}
      <section className="pt-[20px] pb-8 relative" style={{
        backgroundColor: '#ffffff'
      }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="font-raleway font-medium mb-4" style={{ fontSize: '42px', lineHeight: '1.2' }}>
              <div className="mb-3">
                <span
                  className="inline-block mr-4"
                  style={{
                    color: '#5577a5',
                    fontWeight: '800',
                    fontSize: '48px'
                  }}
                >
                  COMFORTABLE,
                </span>
                <span
                  className="inline-block mr-4"
                  style={{
                    color: '#5577a5',
                    fontWeight: '800',
                    fontSize: '48px'
                  }}
                >
                  EASY
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
                  YOU&apos;RE
                </span>
                <span
                  className="inline-block mr-4"
                  style={{
                    color: '#5577a5',
                    fontWeight: '800',
                    fontSize: '48px'
                  }}
                >
                  GOING TO
                </span>
                <span
                  className="inline-block"
                  style={{
                    color: '#5577a5',
                    fontWeight: '800',
                    fontSize: '48px'
                  }}
                >
                  LOVE
                </span>
              </div>
            </div>
            <p className="font-raleway text-lg md:text-xl mb-6 leading-relaxed text-black">
              {heroSubtitle || defaultHeroSubtitle}
            </p>

            {/* Three Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto mt-6">
              <GetPricingButton
                href="/phoenix-business-headshots"
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
                ON-LOCATION STAFF/TEAM
              </GetPricingButton>
              <GetPricingButton
                href="/actor-headshots-phoenix"
                size="large"
                className="sm:flex-1 max-w-xs !text-center flex items-center justify-center"
              >
                ACTOR RATES
              </GetPricingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Headshots Section */}
      <TwoColumnSection
        title={
          <>
            <span className="font-medium">PROFESSIONAL HEADSHOTS</span> <span className="font-normal">{location.toUpperCase()}</span>
          </>
        }
        description={professionalHeadshotsText || defaultProfessionalHeadshotsText}
        ctaText="GET PRICING"
        ctaLink="/phoenix-business-headshots"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/professional-headshots-phoenix.jpg"
        imageAlt={`Professional headshots ${location}`}
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

      {/* Business Headshots Section */}
      <PhoenixBusinessHeadshotsSection
        title={
          <span className="sm:whitespace-nowrap">
            {location.toUpperCase()} <span className="font-medium">BUSINESS HEADSHOTS</span>
          </span>
        }
        description={businessHeadshotsText || defaultBusinessHeadshotsText}
        ctaText="GET PRICING"
        ctaLink="/phoenix-business-headshots"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/optimized/Brent%20Agees11314-optimized.webp"
        imageAlt={`${location} business headshots professional`}
        backgroundColor="#575757"
        objectPosition="left"
      />

      {/* Four Image Row Section */}
      <FourImageRow
        title={<>FROM EXECUTIVES TO ENTREPRENEURS,<br />I CREATE HEADSHOTS THAT MAKE AN IMPACT</>}
        images={[
          {
            src: "https://images.cmqheadshots.com/images/website%20media/optimized/peter-osmundson-executive-headshot-400w.webp",
            alt: `Executive headshots ${location}`
          },
          {
            src: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots_D40396-400w.webp",
            alt: `Executive headshot ${location}`
          },
          {
            src: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQ-Headshots-phoenix-staff-DAY-41625-400w.webp",
            alt: `Corporate headshots ${location}`
          },
          {
            src: "https://images.cmqheadshots.com/images/website%20media/optimized/cmq-headshots-Anna-scottsdale-400w.webp",
            alt: `${location} headshots professional`
          }
        ]}
        backgroundColor="#ffffff"
        fullWidth={true}
        borderColor="#00b4d8"
      />

      {/* Review Section 1 */}
      <ThreeReviewSection
        title={
          <>
            <span style={{ fontWeight: '500' }}>CMQ HEADSHOTS&apos;S</span>{' '}
            <span style={{ fontWeight: '400' }}>5 STAR REVIEWS</span>
          </>
        }
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

      {/* Video Section */}
      <VideoSection
        videoUrl="https://images.cmqheadshots.com/images/CMQ-HEADSHOT-WELCOME-MESSAGE-compressed.mp4"
        posterImage="https://images.cmqheadshots.com/images/VideoScreenshot-small.webp"
        title="HEADSHOT PHOTOGRAPHER"
        titleThinWord={location.toUpperCase()}
        description="I take pride in my ability to make people feel comfortable in front of my camera. It's a big part of my process, and it's the first step towards creating a headshot that you'll truly love."
        ownerName="Cindy Quinn - Owner"
        backgroundColor="#F1F1F1"
      />

      {/* Review Section 2 */}
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

      {/* Corporate Headshots Section */}
      <ImageRightTextLeftSection
        title={
          <span className="sm:whitespace-nowrap">
            <span className="font-medium">CORPORATE HEADSHOTS</span> <span className="font-normal">{location.toUpperCase()}</span>
          </span>
        }
        description={corporateHeadshotsText || defaultCorporateHeadshotsText}
        ctaText="GET QUOTE"
        ctaLink="/corporate-staff-headshots"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/CMQ-HEADSHOTS-pro-headshots-41301-jpmini-leg-sq.webp"
        imageAlt={`Professional corporate headshot ${location}`}
        backgroundColor="#ffffff"
        textColor="dark"
        ctaSize="large"
        objectPosition="right"
        objectFit="contain"
        mobileStackOrder="image-first"
      />

      {/* FAQ Section 1 - Default */}
      <FAQSection
        backgroundColor="#575757"
        textColor="white"
      />

      {/* On-Location Staff Headshots Section */}
      <TwoColumnSection
        title={
          <span className="sm:whitespace-nowrap">
            {location.toUpperCase()} <span className="font-medium">ON-LOCATION STAFF</span> <span className="font-normal">HEADSHOTS</span>
          </span>
        }
        description={onLocationHeadshotsText || defaultOnLocationHeadshotsText}
        ctaText="GET QUOTE"
        ctaLink="/corporate-staff-headshots"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/CMQ-HEADSHOTS-Phoenix-on-location-staff-headshots.webp"
        imageAlt={`${location} on-location staff headshots grid`}
        backgroundColor="#e7e7e7"
        reverseColumns={true}
        textSize="small"
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

      {/* FAQ Section 2 */}
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

      {/* Actor Headshots Section */}
      <TwoColumnSection
        title={
          <>
            {location.toUpperCase()} <span className="font-medium">ACTOR HEADSHOTS</span>
          </>
        }
        description={actorHeadshotsText || defaultActorHeadshotsText}
        ctaText="ACTOR PRICING"
        ctaLink="/actor-headshots-phoenix"
        imageUrl="https://images.cmqheadshots.com/images/website%20media/Ashley-Actor-collage-of-headshots.webp"
        imageAlt={`${location} actor headshots collection`}
        backgroundColor="#F1F1F1"
        reverseColumns={false}
        textSize="medium"
        ctaSize="large"
        objectFit="contain"
        minHeight="650"
        mobileStackOrder="image-first"
      />

      {/* FAQ Section 3 */}
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

      {/* Modeling Headshots Section */}
      <ModelingHeadshotsSection
        backgroundColor="#ffffff"
        location={location}
        description={modelingHeadshotsText || defaultModelingHeadshotsText}
      />

      {/* FAQ Section 4 */}
      <FAQSection
        backgroundColor="#575757"
        faqs={[
          {
            id: 1,
            question: `Can you come to our office in ${location} and take our staff headshots?`,
            answer: `Yes, I can! I can come out to your ${location} office and photograph your staff and C-suite employees, resulting in less downtime for your staff and ensuring consistency on your website.`
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

      {/* Services Preview Section */}
      <section className="section" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl lg:text-4xl text-cmq-blue mb-4">
              <span className="font-medium">PROFESSIONAL PHOTOGRAPHY</span> <span className="font-light">SERVICES</span>
            </h2>
            <p className="font-raleway text-xl font-normal text-black max-w-2xl mx-auto whitespace-nowrap" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              Specialized headshot photography tailored to your professional needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center">
              <Palette className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h2 className="font-raleway text-3xl text-cmq-blue mb-2">
                <span className="font-medium">BRANDING</span> <span className="font-light">PHOTOGRAPHY</span>
              </h2>
              <p className="font-raleway font-normal text-black" style={{
                fontSize: '17px',
                fontWeight: '400',
                lineHeight: '1.4'
              }}>Personal and business branding images that tell your story</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center">
              <Scale className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h2 className="font-raleway text-3xl text-cmq-blue mb-2">
                <span className="font-medium">LAWYER</span> <span className="font-light">HEADSHOTS</span>
              </h2>
              <p className="font-raleway font-normal text-black" style={{
                fontSize: '17px',
                fontWeight: '400',
                lineHeight: '1.4'
              }}>Professional legal headshots that convey trust and authority</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center">
              <Music className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h2 className="font-raleway text-3xl text-cmq-blue mb-2">
                <span className="font-medium">DANCER</span> <span className="font-light">HEADSHOTS</span>
              </h2>
              <p className="font-raleway font-normal text-black" style={{
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
          <p className="font-raleway text-3xl lg:text-4xl font-medium mb-4 uppercase" style={{ fontWeight: '500', color: '#ffffff' }}>
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
