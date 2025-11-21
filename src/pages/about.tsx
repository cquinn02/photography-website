import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import LogoWatermark from '@/components/LogoWatermark'
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
    '/images/website media/Cindy Coffeej/ABout cindy12672b.jpg',
    '/images/website media/Cindy Coffeej/ABout cindy12673b.jpg',
    '/images/website media/Cindy Coffeej/ABout cindy12674b.jpg',
    '/images/website media/Cindy Coffeej/ABout cindy12676b.jpg',
    '/images/website media/Cindy Coffeej/ABout cindy12683b.jpg',
    '/images/website media/Cindy Coffeej/ABout cindy12684b.jpg',
    '/images/website media/Cindy Coffeej/ABout cindy12690b 1.jpg',
    '/images/website media/Cindy Coffeej/ABout cindy12691b.jpg',
    '/images/website media/Cindy Coffeej/ABout cindy12692b.jpg',
    '/images/website media/Cindy Coffeej/ABout cindy12693b.jpg',
    '/images/website media/Cindy Coffeej/ABout cindy12694b.jpg',
    '/images/website media/Cindy Coffeej/ABout cindy12697b.jpg',
    '/images/website media/Cindy Coffeej/ABout cindy12698b.jpg',
    '/images/website media/Cindy Coffeej/ABout cindy12701b.jpg',
    '/images/website media/Cindy Coffeej/ABout cindy12702b.jpg',
    '/images/website media/Cindy Coffeej/ABout cindy12703b.jpg',
    '/images/website media/Cindy Coffeej/ABout cindy12707b.jpg'
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
    '/images/website media/flags/ABout cindy12544b.jpg',
    '/images/website media/flags/ABout cindy12552b.jpg',
    '/images/website media/flags/ABout cindy12553b.jpg',
    '/images/website media/flags/ABout cindy12560b.jpg',
    '/images/website media/flags/ABout cindy12564b.jpg',
    '/images/website media/flags/ABout cindy12565b.jpg',
    '/images/website media/flags/ABout cindy12567b.jpg',
    '/images/website media/flags/ABout cindy12576b.jpg',
    '/images/website media/flags/ABout cindy12580b.jpg',
    '/images/website media/flags/ABout cindy12582b.jpg',
    '/images/website media/flags/ABout cindy12583b.jpg',
    '/images/website media/flags/ABout cindy12584b.jpg',
    '/images/website media/flags/ABout cindy12590b.jpg',
    '/images/website media/flags/ABout cindy12601b.jpg',
    '/images/website media/flags/ABout cindy12602b.jpg',
    '/images/website media/flags/ABout cindy12603b.jpg',
    '/images/website media/flags/ABout cindy12604b.jpg'
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
    '/images/website media/travel jpegs/ABout cindy12440b.jpg',
    '/images/website media/travel jpegs/ABout cindy12444b.jpg',
    '/images/website media/travel jpegs/ABout cindy12447b.jpg',
    '/images/website media/travel jpegs/ABout cindy12450b.jpg',
    '/images/website media/travel jpegs/ABout cindy12459b.jpg',
    '/images/website media/travel jpegs/ABout cindy12461b.jpg',
    '/images/website media/travel jpegs/ABout cindy12475b.jpg',
    '/images/website media/travel jpegs/ABout cindy12488b.jpg',
    '/images/website media/travel jpegs/ABout cindy12491b 1.jpg',
    '/images/website media/travel jpegs/ABout cindy12495b 1.jpg',
    '/images/website media/travel jpegs/ABout cindy12496b 1.jpg',
    '/images/website media/travel jpegs/ABout cindy12500b 1.jpg',
    '/images/website media/travel jpegs/ABout cindy12501b 1.jpg',
    '/images/website media/travel jpegs/ABout cindy12504b.jpg',
    '/images/website media/travel jpegs/ABout cindy12514b.jpg',
    '/images/website media/travel jpegs/ABout cindy12525b.jpg'
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
        subtitle={<>professional photographer<br />phoenix az</>}
        subtitleTag="h1"
        subtitleSize="12px"
        title={frontmatter.meetCindyTitle}
        titleTag="h2"
        description={frontmatter.meetCindyDescription}
        imageUrl="/images/website media/CMQHEADSHOTS-CIindyPortrait-0313.webp"
        imageAlt="Cindy Quinn - Phoenix Headshot Photographer"
        backgroundColor="#575757"
        backgroundImage="/images/website media/optimized/grey-linen-background-optimized.webp"
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
        backgroundImage: 'url("/images/website media/optimized/grey-linen-background-optimized.webp")',
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
                  src="/images/website media/optimized/family/ABout-cindy12437-optimized.webp"
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
                  src="/images/website media/optimized/eric/ABout-cindy12824b-optimized.webp"
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
                  src="/images/website media/optimized/trailer/ABout-cindy12421b-optimized.webp"
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
        backgroundImage: 'url("/images/website media/optimized/grey-linen-background-optimized.webp")',
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
              {frontmatter.expertise.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
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
                </div>
              ))}
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