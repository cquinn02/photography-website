import Layout from '@/components/Layout'
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

  return (
    <div className="relative w-full h-full">
      {coffeeImages.map((src, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: index === currentImage ? 1 : 0,
            zIndex: index === currentImage ? 1 : 0
          }}
        >
          <Image
            src={src}
            alt={`Cindy enjoying coffee - frame ${index + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
}

// Flags Slideshow Component
function FlagsSlideshow() {
  const [currentImage, setCurrentImage] = useState(0)

  // Array of flags images
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
    }, 800) // Change image every 800ms for smooth animation

    return () => clearInterval(interval)
  }, [flagsImages.length])

  return (
    <div className="relative w-full h-full">
      {flagsImages.map((src, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: index === currentImage ? 1 : 0,
            zIndex: index === currentImage ? 1 : 0
          }}
        >
          <Image
            src={src}
            alt={`Cindy with flags - frame ${index + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
}

// Travel Slideshow Component
function TravelSlideshow() {
  const [currentImage, setCurrentImage] = useState(0)

  // Array of travel images
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
    }, 800) // Change image every 800ms for smooth animation

    return () => clearInterval(interval)
  }, [travelImages.length])

  return (
    <div className="relative w-full h-full">
      {travelImages.map((src, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: index === currentImage ? 1 : 0,
            zIndex: index === currentImage ? 1 : 0
          }}
        >
          <Image
            src={src}
            alt={`Cindy traveling - frame ${index + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={index === 0}
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
      ogImage="https://www.cmqheadshots.com/images/website media/cmq-pro-phoenix-headshots-hero2-scaled-1.webp"
    >
      <style>{customButtonStyles}</style>

      {/* Meet Cindy Section - Two Column with Portrait */}
      <TwoColumnSection
        subtitle={<><span style={{ fontWeight: '700' }}>PROFESSIONAL PHOTOGRAPHER</span><br /><span style={{ fontWeight: '400' }}>PHOENIX AZ</span></>}
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

      {/* What Sets Me Apart */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className="font-raleway text-3xl lg:text-4xl text-center mb-12"
              style={{ color: '#5a81b9' }}
              dangerouslySetInnerHTML={{ __html: frontmatter.whatSetsMeApartTitle }}
            />
            <div className="grid md:grid-cols-3 gap-8">
              {frontmatter.whatSetsMeApart.map((item, index) => {
                const icons = [Award, Heart, Users]
                const Icon = icons[index]
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                    <Icon className="h-16 w-16 mx-auto mb-4" style={{ color: '#5a81b9' }} />
                    <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#575757' }}>
                      {item.title}
                    </h3>
                    <p className="font-raleway text-lg font-normal" style={{
                      color: '#575757',
                      fontWeight: '400',
                      letterSpacing: '0.03em',
                      lineHeight: '1.6'
                    }}>
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
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
                    <h3 className="font-raleway text-xl font-bold mb-3" style={{ color: '#ffffff' }}>
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