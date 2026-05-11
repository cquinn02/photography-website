import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
import { Award, Heart, Users } from 'lucide-react'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import { useState, useEffect } from 'react'

const customButtonStyles = `
  .about-cta-button {
    background-color: #5577a5;
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
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/claude/CMQHEADSHOTS-ABout%20cindy12672b.webp',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/claude/CMQHEADSHOTS-ABout%20cindy12674b.webp',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/claude/CMQHEADSHOTS-ABout%20cindy12683b.webp',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/claude/CMQHEADSHOTS-ABout%20cindy12684b.webp',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/claude/CMQHEADSHOTS-ABout%20cindy12690b%201.webp',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/claude/CMQHEADSHOTS-ABout%20cindy12692b.webp',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/claude/CMQHEADSHOTS-ABout%20cindy12697b.webp',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/claude/CMQHEADSHOTS-ABout%20cindy12702b.webp',
    'https://images.cmqheadshots.com/images/website%20media/Cindy%20Coffeej/claude/CMQHEADSHOTS-ABout%20cindy12703b.webp'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % coffeeImages.length)
    }, 600)

    return () => clearInterval(interval)
  }, [coffeeImages.length])

  return (
    <div className="relative w-full h-full">
      {coffeeImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-500 ease-in-out"
          style={{ opacity: i === currentImage ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`Cindy Quinn Phoenix headshot photographer behind the scenes`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={i === 0}
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
    'https://images.cmqheadshots.com/images/website%20media/flags/flags%201600/CMQHEADSHOTS-ABout%20cindy12552-flagb-1600.webp',
    'https://images.cmqheadshots.com/images/website%20media/flags/flags%201600/CMQHEADSHOTS-ABout%20cindy12567b-1600.webp',
    'https://images.cmqheadshots.com/images/website%20media/flags/flags%201600/CMQHEADSHOTS-ABout%20cindy12580b-1600.webp',
    'https://images.cmqheadshots.com/images/website%20media/flags/flags%201600/CMQHEADSHOTS-ABout%20cindy12582b-1600.webp',
    'https://images.cmqheadshots.com/images/website%20media/flags/flags%201600/CMQHEADSHOTS-ABout%20cindy12590b-1600.webp',
    'https://images.cmqheadshots.com/images/website%20media/flags/flags%201600/CMQHEADSHOTS-ABout%20cindy12602b-1600.webp',
    'https://images.cmqheadshots.com/images/website%20media/flags/flags%201600/CMQHEADSHOTS-ABout%20cindy12604b-1600.webp'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % flagsImages.length)
    }, 600)
    return () => clearInterval(interval)
  }, [flagsImages.length])

  return (
    <div className="relative w-full h-full">
      {flagsImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-500 ease-in-out"
          style={{ opacity: i === currentImage ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`Cindy Quinn personal photo with American flags`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={i === 0}
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
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/travel%20wb%201600/ABout%20cindy12440b.webp',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/travel%20wb%201600/ABout%20cindy12444b.webp',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/travel%20wb%201600/ABout%20cindy12447b.webp',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/travel%20wb%201600/ABout%20cindy12450b.webp',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/travel%20wb%201600/ABout%20cindy12459b.webp',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/travel%20wb%201600/ABout%20cindy12461b.webp',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/travel%20wb%201600/ABout%20cindy12466b.webp',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/travel%20wb%201600/ABout%20cindy12475b.webp',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/travel%20wb%201600/ABout%20cindy12488b.webp',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/travel%20wb%201600/ABout%20cindy12491b.webp',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/travel%20wb%201600/ABout%20cindy12500b.webp',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/travel%20wb%201600/ABout%20cindy12501.webp',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/travel%20wb%201600/ABout%20cindy12504b.webp',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/travel%20wb%201600/ABout%20cindy12514b.webp',
    'https://images.cmqheadshots.com/images/website%20media/travel%20jpegs/travel%20wb%201600/ABout%20cindy12525b.webp'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % travelImages.length)
    }, 600)
    return () => clearInterval(interval)
  }, [travelImages.length])

  return (
    <div className="relative w-full h-full">
      {travelImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-500 ease-in-out"
          style={{ opacity: i === currentImage ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`Cindy Quinn traveling with her photography gear`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
            loading="eager"
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
      ogImage="https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-CIindyPortrait-0313-1600.webp"
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
            "image": "https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-CIindyPortrait-0313-1600.webp",
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
              "https://www.facebook.com/cmqheadshots",
              "https://www.linkedin.com/in/cmqheadshots/",
              "https://www.youtube.com/@cmqheadshots8437",
              "https://www.pinterest.com/cmqheadshots/",
              "https://www.google.com/maps/place/CMQ+Headshots/@33.8760267,-112.1544037,17z"
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
        subtitle={<><span style={{ fontWeight: '500' }}>ABOUT YOUR PHOENIX</span><br /><span style={{ fontWeight: '400' }}>HEADSHOT PHOTOGRAPHER</span></>}
        subtitleTag="h1"
        subtitleSize="16px"
        title={frontmatter.meetCindyTitle}
        titleTag="h2"
        description={frontmatter.meetCindyDescription}
        imageUrl="https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-CIindyPortrait-0313-1600.webp"
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
                <h3 className={`font-raleway ${frontmatter.coffeeTitleSize || 'text-2xl'} ${frontmatter.coffeeTitleWeight || 'font-bold'}`} style={{ color: '#5577a5' }}>
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
                <h3 className={`font-raleway ${frontmatter.citizenshipTitleSize || 'text-2xl'} ${frontmatter.citizenshipTitleWeight || 'font-bold'}`} style={{ color: '#5577a5' }}>
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
                <h3 className={`font-raleway ${frontmatter.travelTitleSize || 'text-2xl'} ${frontmatter.travelTitleWeight || 'font-bold'}`} style={{ color: '#5577a5' }}>
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
                  src="https://images.cmqheadshots.com/images/website%20media/family%20photos%201600/ABout%20cindy12436b.webp"
                  alt="Cindy Quinn holding a framed family photograph"
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
                  src="https://images.cmqheadshots.com/images/website%20media/family%20photos%201600/ABout%20cindy12824b-1600.webp"
                  alt="Cindy Quinn holding a framed portrait drawing"
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
                  src="https://images.cmqheadshots.com/images/website%20media/family%20photos%201600/ABout%20cindy12421b.webp"
                  alt="Cindy Quinn holding an Airstream brochure"
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
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#D0D0D0' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="font-raleway text-3xl lg:text-4xl mb-8"
              style={{ color: '#5577a5' }}
              dangerouslySetInnerHTML={{ __html: frontmatter.philosophyTitle }}
            />
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
              <p
                className="font-raleway text-3xl lg:text-4xl font-bold mb-6"
                style={{
                  color: '#5577a5',
                  fontWeight: '700',
                  fontStyle: 'italic',
                  lineHeight: '1.6'
                }}
                dangerouslySetInnerHTML={{ __html: `&ldquo;${frontmatter.philosophyQuote}&rdquo;` }}
              />
              <p className="font-raleway text-xl font-normal" style={{
                color: '#383838',
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

      {/* What Sets Me Apart */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2
              className="font-raleway text-3xl lg:text-4xl text-center mb-12"
              style={{ color: '#5577a5' }}
              dangerouslySetInnerHTML={{ __html: frontmatter.whatSetsMeApartTitle }}
            />

            <h3 className="font-raleway text-2xl font-bold mb-4" style={{ color: '#5577a5' }}>
              Peter Hurley Headshot Crew
            </h3>
            <p className="font-raleway text-xl font-normal mb-10" style={{
              color: '#383838',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              I am an Associate Photographer with the Peter Hurley Headshot Crew, an international network led by Peter Hurley. The distinction goes to photographers who demonstrate strong technical skill, client direction, and expertise in professional headshot photography. I am proud to be one of the few photographers in Arizona to hold this designation.
            </p>

            <h3 className="font-raleway text-2xl font-bold mb-4" style={{ color: '#5577a5' }}>
              14 Years of Experience
            </h3>
            <p className="font-raleway text-xl font-normal mb-10" style={{
              color: '#383838',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              I took my first headshot in October 2012, and I knew immediately this was my calling. Since then, I&apos;ve photographed thousands of professionals across the Phoenix metro area: executives, entrepreneurs, attorneys, realtors, actors, and job seekers. I&apos;ve worked with several Fortune 500 companies in the Valley, including Berkshire Hathaway, GoDaddy, Insight Enterprises, McKesson, Chase, and State Farm. Many of them have come back for five years or more. My Associate&apos;s degree in Computer Science also helps me handle digital workflow and image delivery efficiently.
            </p>

            <h3 className="font-raleway text-2xl font-bold mb-4 mt-10" style={{ color: '#5577a5' }}>
              Published Work
            </h3>
            <p className="font-raleway text-xl font-normal mb-10" style={{
              color: '#383838',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              One of my images has been selected for publication in a composite book, a collection of work from top headshot photographers. Seeing my work published alongside theirs means a lot.
            </p>

            <h3 className="font-raleway text-2xl font-bold mb-4" style={{ color: '#5577a5' }}>
              A Comfortable Environment
            </h3>
            <p className="font-raleway text-xl font-normal mb-0" style={{
              color: '#383838',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              With 133+ five-star Google reviews, my clients say I make them feel relaxed and confident in front of the camera. If you hate having your picture taken, you&apos;re in good company. Most of my clients feel the same way walking in. They don&apos;t feel that way walking out. I offer a 20% discount for military personnel and first responders who serve our community.
            </p>

            <h3 className="font-raleway text-2xl font-bold mb-4 mt-10" style={{ color: '#5577a5' }}>
              My Job Is My Passion
            </h3>
            <p className="font-raleway text-xl font-normal mb-6" style={{
              color: '#383838',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              I love what I do. Headshot photography lets me work with people one-on-one and help them see themselves clearly. Every client comes in with a reason: a new job, a website refresh, an audition, a profile update. The goal is to make an image that actually works for that purpose.
            </p>
            <p className="font-raleway text-xl font-normal mb-6" style={{
              color: '#383838',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              One of my favorite parts of this work is meeting so many interesting people and hearing their stories. LinkedIn updates, personal brand shoots, theater auditions. I love helping each person get an image that fits their goal.
            </p>
            <p className="font-raleway text-xl font-normal mb-6" style={{
              color: '#383838',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              When most people walk into my studio, they&apos;re a little nervous. That&apos;s completely normal. Within a few minutes, the nerves usually turn into laughter. Once someone sees how good they look under professional lighting, their confidence shows up on camera. Those are the best shots.
            </p>
            <p className="font-raleway text-xl font-normal mb-0" style={{
              color: '#383838',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              The best part is hearing from people after the session. They tell me they landed the job, booked the role, or finally feel proud of the image representing them. And sometimes the cherry on top is a hug at the end of the session, when someone says they never expected to look this good or have this much fun.
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
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#D0D0D0' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2
              className="font-raleway text-3xl lg:text-4xl mb-8"
              style={{ color: '#5577a5' }}
              dangerouslySetInnerHTML={{ __html: frontmatter.commitmentTitle }}
            />
            <p className="font-raleway text-xl font-normal mb-6" style={{
              color: '#383838',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              {frontmatter.commitmentParagraph1}
            </p>
            <p className="font-raleway text-xl font-normal mb-6" style={{
              color: '#383838',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              {frontmatter.commitmentParagraph2}
            </p>
            {frontmatter.commitmentParagraph3 && (
              <p className="font-raleway text-xl font-normal" style={{
                color: '#383838',
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