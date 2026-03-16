import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
import { Award, Heart, Users, Star } from 'lucide-react'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import { useState, useEffect } from 'react'

const customButtonStyles = `
  .about-cta-button {
    background-color: #5a81b9;
    transition: all 0.3s ease;
  }
  .about-cta-button:hover {
    background-color: #575757;
    transform: scale(1.05);
  }
`

// Coffee Slideshow Component
function CoffeeSlideshow() {
  const [currentImage, setCurrentImage] = useState(0)

  // Array of coffee images
  const coffeeImages = [
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/ABout%20cindy12672b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/ABout%20cindy12673b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/ABout%20cindy12674b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/ABout%20cindy12676b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/ABout%20cindy12683b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/ABout%20cindy12684b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/ABout%20cindy12690b%201.jpg',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/ABout%20cindy12691b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/ABout%20cindy12692b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/ABout%20cindy12693b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/ABout%20cindy12694b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/ABout%20cindy12697b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/ABout%20cindy12698b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/ABout%20cindy12701b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/ABout%20cindy12702b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/ABout%20cindy12703b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/ABout%20cindy12707b.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % coffeeImages.length)
    }, 800) // Change image every 800ms for smooth animation

    return () => clearInterval(interval)
  }, [coffeeImages.length])

  // Only render current image and the next one for smooth crossfade (saves ~15 image loads)
  const nextImage = (currentImage + 1) % coffeeImages.length

  return (
    <div className="relative w-full h-full">
      {[currentImage, nextImage].map((imgIndex) => (
        <div
          key={coffeeImages[imgIndex]}
          className="absolute inset-0"
          style={{
            opacity: imgIndex === currentImage ? 1 : 0,
            zIndex: imgIndex === currentImage ? 1 : 0
          }}
        >
          <Image
            src={coffeeImages[imgIndex]}
            alt={`Cindy enjoying coffee - frame ${imgIndex + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={imgIndex === 0}
          />
        </div>
      ))}
    </div>
  )
}

// Flags Slideshow Component
function FlagsSlideshow() {
  const [currentImage, setCurrentImage] = useState(0)

  const flagsImages = [
    'https://images.cmqheadshots.com/images/website%20media/flags/ABout%20cindy12544b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/flags/ABout%20cindy12552b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/flags/ABout%20cindy12553b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/flags/ABout%20cindy12560b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/flags/ABout%20cindy12564b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/flags/ABout%20cindy12565b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/flags/ABout%20cindy12567b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/flags/ABout%20cindy12576b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/flags/ABout%20cindy12580b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/flags/ABout%20cindy12582b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/flags/ABout%20cindy12583b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/flags/ABout%20cindy12584b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/flags/ABout%20cindy12590b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/flags/ABout%20cindy12601b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/flags/ABout%20cindy12602b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/flags/ABout%20cindy12603b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/flags/ABout%20cindy12604b.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % flagsImages.length)
    }, 800)
    return () => clearInterval(interval)
  }, [flagsImages.length])

  const nextImage = (currentImage + 1) % flagsImages.length

  return (
    <div className="relative w-full h-full">
      {[currentImage, nextImage].map((imgIndex) => (
        <div
          key={flagsImages[imgIndex]}
          className="absolute inset-0"
          style={{
            opacity: imgIndex === currentImage ? 1 : 0,
            zIndex: imgIndex === currentImage ? 1 : 0
          }}
        >
          <Image
            src={flagsImages[imgIndex]}
            alt={`Cindy with flags - frame ${imgIndex + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={imgIndex === 0}
          />
        </div>
      ))}
    </div>
  )
}

// Travel Slideshow Component
function TravelSlideshow() {
  const [currentImage, setCurrentImage] = useState(0)

  const travelImages = [
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/ABout%20cindy12440b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/ABout%20cindy12444b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/ABout%20cindy12447b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/ABout%20cindy12450b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/ABout%20cindy12459b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/ABout%20cindy12461b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/ABout%20cindy12475b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/ABout%20cindy12488b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/ABout%20cindy12491b%201.jpg',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/ABout%20cindy12495b%201.jpg',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/ABout%20cindy12496b%201.jpg',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/ABout%20cindy12500b%201.jpg',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/ABout%20cindy12501b%201.jpg',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/ABout%20cindy12504b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/ABout%20cindy12514b.jpg',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/ABout%20cindy12525b.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % travelImages.length)
    }, 800)
    return () => clearInterval(interval)
  }, [travelImages.length])

  const nextImage = (currentImage + 1) % travelImages.length

  return (
    <div className="relative w-full h-full">
      {[currentImage, nextImage].map((imgIndex) => (
        <div
          key={travelImages[imgIndex]}
          className="absolute inset-0"
          style={{
            opacity: imgIndex === currentImage ? 1 : 0,
            zIndex: imgIndex === currentImage ? 1 : 0
          }}
        >
          <Image
            src={travelImages[imgIndex]}
            alt={`Cindy traveling - frame ${imgIndex + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={imgIndex === 0}
          />
        </div>
      ))}
    </div>
  )
}

interface PageProps {
  frontmatter: {
    title: string
    description: string
    pageTitle: string
    meetCindySubtitle: string
    meetCindySubtitleSize?: string
    meetCindySubtitleWeight?: string
    meetCindyTitle: string
    meetCindyTitleSize?: string
    meetCindyTitleWeight?: string
    meetCindyDescription: string
    meetCindyDescriptionSize?: string
    coffeeTitle: string
    coffeeTitleSize?: string
    coffeeTitleWeight?: string
    citizenshipTitle: string
    citizenshipTitleSize?: string
    citizenshipTitleWeight?: string
    travelTitle: string
    travelTitleSize?: string
    travelTitleWeight?: string
    familyTitle: string
    familyTitleSize?: string
    familyTitleWeight?: string
    ericTitle: string
    ericTitleSize?: string
    ericTitleWeight?: string
    airstreamTitle: string
    airstreamTitleSize?: string
    airstreamTitleWeight?: string
    philosophyTitle: string
    philosophyTitleSize?: string
    philosophyTitleWeight?: string
    philosophyQuote: string
    philosophyQuoteSize?: string
    philosophyQuoteWeight?: string
    philosophyDescription: string
    philosophyDescriptionSize?: string
    whatSetsMeApartTitle: string
    whatSetsMeApartTitleSize?: string
    whatSetsMeApartTitleWeight?: string
    whatSetsMeApart: Array<{ title: string; description: string }>
    expertiseTitle: string
    expertiseTitleSize?: string
    expertiseTitleWeight?: string
    expertise: Array<{ title: string; description: string }>
    commitmentTitle: string
    commitmentTitleSize?: string
    commitmentTitleWeight?: string
    commitmentParagraph1: string
    commitmentParagraph1Size?: string
    commitmentParagraph2: string
    commitmentParagraph2Size?: string
    commitmentParagraph3?: string
    commitmentParagraph3Size?: string
  }
  content: string
}

export default function About({ frontmatter, content }: PageProps) {
  return (
    <Layout
      title={frontmatter.title}
      description={frontmatter.description}
      canonical="https://www.cmqheadshots.com/about"
      ogUrl="https://www.cmqheadshots.com/about"
      ogImage="https://www.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-scaled-1.webp"
    >
      {/* Person Schema + BreadcrumbList */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Cindy Quinn",
            "jobTitle": "Professional Headshot Photographer",
            "url": "https://www.cmqheadshots.com/about",
            "image": "https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-CIindyPortrait-0313.webp",
            "worksFor": {
              "@type": "ProfessionalService",
              "@id": "https://www.cmqheadshots.com",
              "name": "CMQ Headshots"
            },
            "knowsAbout": [
              "Headshot Photography",
              "Portrait Photography",
              "Corporate Photography",
              "Actor Headshots",
              "LinkedIn Headshots"
            ],
            "sameAs": [
              "https://www.instagram.com/cmqheadshots",
              "https://www.facebook.com/cmqheadshots"
            ]
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
                "name": "About",
                "item": "https://www.cmqheadshots.com/about"
              }
            ]
          }) }}
        />
      </Head>

      <style>{customButtonStyles}</style>

      {/* Meet Cindy Section - Two Column with Portrait */}
      <TwoColumnSection
        subtitle={<><span style={{ fontWeight: '500' }}>PROFESSIONAL PHOTOGRAPHER</span><br /><span style={{ fontWeight: '400' }}>PHOENIX AZ</span></>}
        subtitleTag="h1"
        subtitleSize="16px"
        title={frontmatter.meetCindyTitle}
        titleTag="h2"
        description={frontmatter.meetCindyDescription}
        imageUrl="https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-CIindyPortrait-0313.webp"
        imageAlt="Cindy Quinn - Phoenix Headshot Photographer"
        backgroundColor="#575757"
        backgroundImage="https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp"
        textColor="white"
        titleColor="white"
        reverseColumns={false}
        objectFit="contain"
        objectPosition="center"
        minHeight="100vh"
        mobileStackOrder="image-first"
      />

      {/* Three Card Section with Coffee Animation */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Coffee Slideshow */}
            <div className="flex flex-col">
              {/* Small box above */}
              <div className="mb-4 text-center">
                <h3 className={`font-raleway ${frontmatter.coffeeTitleSize || 'text-2xl'} ${frontmatter.coffeeTitleWeight || 'font-bold'}`} style={{ color: '#5a81b9' }}>
                  {frontmatter.coffeeTitle}
                </h3>
              </div>

              {/* Card */}
              <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/5]">
                <CoffeeSlideshow />
              </div>
            </div>

            {/* Card 2: Flags Slideshow */}
            <div className="flex flex-col">
              {/* Small box above */}
              <div className="mb-4 text-center">
                <h3 className={`font-raleway ${frontmatter.citizenshipTitleSize || 'text-2xl'} ${frontmatter.citizenshipTitleWeight || 'font-bold'}`} style={{ color: '#5a81b9' }}>
                  {frontmatter.citizenshipTitle}
                </h3>
              </div>

              {/* Card */}
              <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/5]">
                <FlagsSlideshow />
              </div>
            </div>

            {/* Card 3: Travel Slideshow */}
            <div className="flex flex-col">
              {/* Small box above */}
              <div className="mb-4 text-center">
                <h3 className={`font-raleway ${frontmatter.travelTitleSize || 'text-2xl'} ${frontmatter.travelTitleWeight || 'font-bold'}`} style={{ color: '#5a81b9' }}>
                  {frontmatter.travelTitle}
                </h3>
              </div>

              {/* Card */}
              <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/5]">
                <TravelSlideshow />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Static Image Cards Section */}
      <section className="py-16 lg:py-20" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Family */}
            <div className="flex flex-col">
              {/* Small box above */}
              <div className="mb-4 text-center">
                <h3 className="font-raleway text-xl font-bold" style={{ color: '#ffffff' }}>
                  {frontmatter.familyTitle}
                </h3>
              </div>

              {/* Card */}
              <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/5] relative">
                <Image
                  src="https://images.cmqheadshots.com/images/website%20media/optimized/family/ABout-cindy12437-optimized.webp"
                  alt="Family photo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Card 2: Eric */}
            <div className="flex flex-col">
              {/* Small box above */}
              <div className="mb-4 text-center">
                <h3 className="font-raleway text-xl font-bold" style={{ color: '#ffffff' }}>
                  {frontmatter.ericTitle}
                </h3>
              </div>

              {/* Card */}
              <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/5] relative">
                <Image
                  src="https://images.cmqheadshots.com/images/website%20media/optimized/eric/ABout-cindy12824b-optimized.webp"
                  alt="Eric photo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Card 3: Airstream */}
            <div className="flex flex-col">
              {/* Small box above */}
              <div className="mb-4 text-center">
                <h3 className="font-raleway text-xl font-bold" style={{ color: '#ffffff' }}>
                  {frontmatter.airstreamTitle}
                </h3>
              </div>

              {/* Card */}
              <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/5] relative">
                <Image
                  src="https://images.cmqheadshots.com/images/website%20media/optimized/trailer/ABout-cindy12421b-optimized.webp"
                  alt="Airstream trailer"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="font-raleway text-3xl lg:text-4xl mb-8"
              style={{ color: '#5a81b9' }}
              dangerouslySetInnerHTML={{ __html: frontmatter.philosophyTitle }}
            />
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
              <p
                className="font-raleway text-2xl font-normal mb-6"
                style={{
                  color: '#5a81b9',
                  fontWeight: '400',
                  fontStyle: 'italic',
                  lineHeight: '1.6'
                }}
                dangerouslySetInnerHTML={{ __html: `&ldquo;${frontmatter.philosophyQuote}&rdquo;` }}
              />
              <p className="font-raleway text-xl font-normal" style={{
                color: '#575757',
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                {frontmatter.philosophyDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Story 1 - Rachael */}
      <section style={{ backgroundColor: '#575757' }}>
        <div className="grid lg:grid-cols-2 gap-0 lg:items-center">
          <div className="relative flex items-center justify-center">
            <Image
              src="https://images.cmqheadshots.com/images/Rachel%20Elliot8161.jpg"
              alt="Rachael professional headshot by CMQ Headshots"
              width={800}
              height={800}
              className="w-full h-auto"
              sizes="50vw"
              quality={100}
            />
          </div>
          <div className="flex items-center justify-center px-6 lg:px-12" style={{ backgroundColor: '#575757' }}>
            <div className="w-full py-12 lg:py-16">
              <blockquote className="text-xl font-normal mb-8 font-raleway text-center text-white" style={{
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                &quot;I had a phenomenal experience getting professional headshots done with Cindy. I went into the experience not expecting the pictures to turn out great because I had gained some weight but she made me look so professional and I couldn&apos;t be happier with the pictures. She didn&apos;t just snap a bunch of pictures and hope I looked good in one of them. She directed me on how to pose and walked me through each picture so my true and confident self could shine through.&quot;
              </blockquote>
              <div className="text-center">
                <p className="font-raleway text-lg font-semibold text-white mb-2">— Rachael</p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Story 2 - Rodney */}
      <section style={{ backgroundColor: '#ffffff' }}>
        <div className="grid lg:grid-cols-2 gap-0 lg:items-center">
          <div className="flex items-center justify-center px-6 lg:px-12 order-2 lg:order-1">
            <div className="w-full py-12 lg:py-16">
              <blockquote className="text-xl font-normal mb-8 font-raleway text-center" style={{
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6',
                color: '#575757'
              }}>
                &quot;I had never had professional headshots and would probably never have had any but for an upcoming event that requires them. Cindy thoroughly impressed me with the preparation she provided before our session, how much fun the session itself was, and finally by images that portray me in a way that stands head and shoulders above any that I have ever had. I can&apos;t say enough how happy I am to have worked with Cindy.&quot;
              </blockquote>
              <div className="text-center">
                <p className="font-raleway text-lg font-semibold mb-2" style={{ color: '#383838' }}>— Rodney Jackson</p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            <Image
              src="https://images.cmqheadshots.com/images/RodneyJackson2576.jpg"
              alt="Rodney Jackson professional headshot by CMQ Headshots"
              width={800}
              height={800}
              className="w-full h-auto"
              sizes="50vw"
              quality={100}
            />
          </div>
        </div>
      </section>

      {/* Client Story 3 - Sophia */}
      <section style={{ backgroundColor: '#575757' }}>
        <div className="grid lg:grid-cols-2 gap-0 lg:items-center">
          <div className="relative flex items-center justify-center">
            <Image
              src="https://images.cmqheadshots.com/images/CMQHEADSHOTS-Sophia4485-sq.jpg"
              alt="Sophia Hsieh professional headshot by CMQ Headshots"
              width={800}
              height={800}
              className="w-full h-auto"
              sizes="50vw"
              quality={100}
            />
          </div>
          <div className="flex items-center justify-center px-6 lg:px-12" style={{ backgroundColor: '#575757' }}>
            <div className="w-full py-12 lg:py-16">
              <blockquote className="text-xl font-normal mb-8 font-raleway text-center text-white" style={{
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                &quot;Cindy was truly delightful to work with. I had never gotten a professional headshot done, so I wasn&apos;t sure what to expect, but she was extremely patient and made sure I looked and felt my best throughout the entire session. Cindy is kind, professional, and wonderfully talented. I would recommend her to everyone looking for the perfect headshot.&quot;
              </blockquote>
              <div className="text-center">
                <p className="font-raleway text-lg font-semibold text-white mb-2">— Sophia Hsieh</p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Me Apart */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="font-raleway text-3xl lg:text-4xl text-center mb-12"
              style={{ color: '#5a81b9' }}
              dangerouslySetInnerHTML={{ __html: frontmatter.whatSetsMeApartTitle }}
            />

            <h3 className="font-raleway text-2xl font-medium mb-4" style={{ color: '#5a81b9' }}>
              Peter Hurley Headshot Crew
            </h3>
            <p className="font-raleway text-xl font-normal mb-10" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              I am an Associate Photographer with the Peter Hurley Headshot Crew, an international network of elite headshot photographers led by world-renowned photographer Peter Hurley. This distinction is awarded only to photographers who consistently demonstrate a high level of technical skill, client direction, and expertise in professional headshot photography. I am proud to be one of the few photographers in Arizona to hold this designation.
            </p>

            <h3 className="font-raleway text-2xl font-medium mb-4" style={{ color: '#5a81b9' }}>
              14 Years of Experience
            </h3>
            <p className="font-raleway text-xl font-normal mb-10" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              I took my first headshot in October 2012, and I knew immediately that this was my calling. Since then, I&apos;ve photographed thousands of professionals across the Phoenix metro area — executives, entrepreneurs, attorneys, realtors, actors, and job seekers. I&apos;ve had the privilege of working with several Fortune 500 companies in the Valley — including Berkshire Hathaway, GoDaddy, Insight Enterprises, McKesson, Chase, and State Farm — many of whom I&apos;ve supported for five years or more. I hold an Associate&apos;s degree in Computer Science, which gives me a unique technical edge in digital workflow and delivering your final images quickly and efficiently.
            </p>

            <h3 className="font-raleway text-2xl font-medium mb-4 mt-10" style={{ color: '#5a81b9' }}>
              Published Work
            </h3>
            <p className="font-raleway text-xl font-normal mb-10" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              One of my images has been selected for publication in a composite book — a curated collection showcasing the work of top headshot photographers. Having my work recognized alongside other elite photographers is an honor and a reflection of the quality and artistry I bring to every session.
            </p>

            <h3 className="font-raleway text-2xl font-medium mb-4" style={{ color: '#5a81b9' }}>
              A Comfortable Environment
            </h3>
            <p className="font-raleway text-xl font-normal mb-0" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              With 130+ five-star Google reviews, my clients consistently say I make them feel relaxed and confident in front of the camera. If you hate having your picture taken, you&apos;re in good company — most of my clients feel the same way walking in. They don&apos;t feel that way walking out. I offer a 20% discount for military personnel and first responders who serve our community.
            </p>

            <h3 className="font-raleway text-2xl font-medium mb-4 mt-10" style={{ color: '#5a81b9' }}>
              My Job Is My Passion
            </h3>
            <p className="font-raleway text-xl font-normal mb-6" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              I truly love what I do. Photography allows me to combine my passion for people with my craft of creating professional headshots that look natural, confident, and authentic. Every person who steps in front of my camera has a story, goals, and something unique they want to communicate through their image. Being able to help people present themselves in a way that supports their career, their marketing, or their artistic pursuits is incredibly rewarding.
            </p>
            <p className="font-raleway text-xl font-normal mb-6" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              One of my favorite parts of this work is meeting so many interesting people and hearing their stories. Whether someone is updating a LinkedIn profile, building a personal brand, or auditioning for a role in the theater, I love helping them create an image that reflects who they are and where they&apos;re going.
            </p>
            <p className="font-raleway text-xl font-normal mb-6" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              When most people walk into my studio, they&apos;re a little nervous. That&apos;s completely normal. Within just a few minutes, though, the nerves usually turn into laughter. As they see how great they look under professional lighting and direction, their confidence starts to come through, and that&apos;s when the magic really happens. Those are the moments when we capture the strongest, most authentic images.
            </p>
            <p className="font-raleway text-xl font-normal mb-0" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              The best part of all is hearing from people after the session — when they tell me they landed the job, booked the role, or finally feel proud of the image representing them. And sometimes the cherry on top is a hug at the end of the session, when someone says they never expected to look this good or to have so much fun during a photo shoot.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 lg:py-20 relative" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="font-raleway text-3xl lg:text-4xl text-center mb-12"
              style={{ color: '#ffffff' }}
              dangerouslySetInnerHTML={{ __html: frontmatter.expertiseTitle }}
            />
            <div className="grid md:grid-cols-2 gap-6">
              {frontmatter.expertise.map((item, index) => {
                // Map expertise items to their corresponding pages
                const linkMap: { [key: string]: string } = {
                  'Business & Executive Headshots': '/phoenix-business-headshots',
                  'Actor Headshots': '/actor-headshots-phoenix',
                  'Corporate Photography': '/corporate-staff-headshots',
                  'LinkedIn Photography': '/phoenix-business-headshots'
                }
                const href = linkMap[item.title] || '#'

                return (
                  <Link
                    key={index}
                    href={href}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 block hover:bg-white/20 transition-colors duration-300 text-center"
                  >
                    <h3 className="font-raleway text-xl font-medium mb-3" style={{ color: '#ffffff' }}>
                      {item.title}
                    </h3>
                    <p className="font-raleway text-lg font-normal" style={{
                      color: '#ffffff',
                      fontWeight: '400',
                      letterSpacing: '0.03em',
                      lineHeight: '1.6'
                    }}>
                      {item.description}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* My Commitment */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="font-raleway text-3xl lg:text-4xl mb-8"
              style={{ color: '#5a81b9' }}
              dangerouslySetInnerHTML={{ __html: frontmatter.commitmentTitle }}
            />
            <p className="font-raleway text-xl font-normal mb-6" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              {frontmatter.commitmentParagraph1}
            </p>
            <p className="font-raleway text-xl font-normal" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              {frontmatter.commitmentParagraph2}
            </p>
            {frontmatter.commitmentParagraph3 && (
              <p className="font-raleway text-xl font-normal" style={{
                color: '#575757',
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                {frontmatter.commitmentParagraph3}
              </p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'about.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}