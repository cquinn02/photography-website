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
        subtitle="Phoenix's Premier Headshot Photographer"
        subtitleTag="h1"
        title="MEET CINDY QUINN"
        titleTag="h2"
        description="Originally born and raised in Canada as a Canadian army brat, I later moved to Beavercreek, Ohio, before finding my home in Phoenix, Arizona. My diverse background has given me the ability to connect with people from all walks of life, making them feel comfortable during what can often be an intimidating experience. I took my first headshot in October 2012, and I knew immediately that this was my calling. There's something magical about capturing that perfect moment when someone's personality shines through – when they look confident, approachable, and authentically themselves."
        imageUrl="/images/website media/CMQHEADSHOTS-CIindyPortrait-0313.webp"
        imageAlt="Cindy Quinn - Phoenix Headshot Photographer"
        backgroundColor="#575757"
        backgroundImage="/images/website media/grey linen-background.jpg"
        textColor="white"
        titleColor="blue"
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
                <h3 className="font-raleway text-xl font-bold" style={{ color: '#5a81b9' }}>
                  Coffee Lover
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
                <h3 className="font-raleway text-xl font-bold" style={{ color: '#5a81b9' }}>
                  US and Canadian Citizenship
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
                <h3 className="font-raleway text-xl font-bold" style={{ color: '#5a81b9' }}>
                  Travel Lover
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
        backgroundImage: 'url("/images/website media/grey linen-background.jpg")',
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
                  My little Family
                </h3>
              </div>

              {/* Card */}
              <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/5] relative">
                <Image
                  src="/images/website media/family/ABout cindy12437.jpg"
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
                  My oldest son Eric May 1986 - July 2011
                </h3>
              </div>

              {/* Card */}
              <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/5] relative">
                <Image
                  src="/images/website media/eric/ABout cindy12824b.jpg"
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
                  Our litte Airstream
                </h3>
              </div>

              {/* Card */}
              <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/5] relative">
                <Image
                  src="/images/website media/trailer/ABout cindy12421b.jpg"
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
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#5a81b9' }}>
              <span className="font-bold">MY PHOTOGRAPHY</span> <span className="font-normal">PHILOSOPHY</span>
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
              <p className="font-raleway text-2xl font-normal mb-6" style={{
                color: '#5a81b9',
                fontWeight: '400',
                fontStyle: 'italic',
                lineHeight: '1.6'
              }}>
                &ldquo;Comfortable, Easy Headshots You&apos;re Going to Love&rdquo;
              </p>
              <p className="font-raleway text-xl font-normal" style={{
                color: '#575757',
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                This isn&apos;t just my tagline – it&apos;s my promise to every client who walks through my door. I believe that the best headshots happen when people feel relaxed and natural. That&apos;s why I&apos;ve built my entire approach around creating a comfortable environment where you can be yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Me Apart */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-12" style={{ color: '#5a81b9' }}>
              <span className="font-bold">WHAT SETS ME</span> <span className="font-normal">APART</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <Award className="h-16 w-16 mx-auto mb-4" style={{ color: '#5a81b9' }} />
                <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#575757' }}>
                  12+ Years Experience
                </h3>
                <p className="font-raleway text-lg font-normal" style={{
                  color: '#575757',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.6'
                }}>
                  Over a decade of professional headshot photography experience helping clients shine
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <Heart className="h-16 w-16 mx-auto mb-4" style={{ color: '#5a81b9' }} />
                <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#575757' }}>
                  Comfortable Environment
                </h3>
                <p className="font-raleway text-lg font-normal" style={{
                  color: '#575757',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.6'
                }}>
                  Clients consistently say I make them feel relaxed and confident in front of the camera
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <Users className="h-16 w-16 mx-auto mb-4" style={{ color: '#5a81b9' }} />
                <h3 className="font-raleway text-xl font-bold mb-4" style={{ color: '#575757' }}>
                  Community Focused
                </h3>
                <p className="font-raleway text-lg font-normal" style={{
                  color: '#575757',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.6'
                }}>
                  20% discount for military personnel and first responders who serve our community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 lg:py-20 relative" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("/images/website media/grey linen-background.jpg")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-12" style={{ color: '#ffffff' }}>
              <span className="font-bold">PROFESSIONAL</span> <span className="font-normal">EXPERTISE</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-raleway text-xl font-bold mb-3" style={{ color: '#ffffff' }}>
                  Business & Executive Headshots
                </h3>
                <p className="font-raleway text-lg font-normal" style={{
                  color: '#ffffff',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.6'
                }}>
                  Helping professionals present their best selves
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-raleway text-xl font-bold mb-3" style={{ color: '#ffffff' }}>
                  Actor Headshots
                </h3>
                <p className="font-raleway text-lg font-normal" style={{
                  color: '#ffffff',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.6'
                }}>
                  Industry-standard portraits with guidance on different looks for casting
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-raleway text-xl font-bold mb-3" style={{ color: '#ffffff' }}>
                  Corporate Photography
                </h3>
                <p className="font-raleway text-lg font-normal" style={{
                  color: '#ffffff',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.6'
                }}>
                  On-location team photography for businesses
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-raleway text-xl font-bold mb-3" style={{ color: '#ffffff' }}>
                  LinkedIn Photography
                </h3>
                <p className="font-raleway text-lg font-normal" style={{
                  color: '#ffffff',
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.6'
                }}>
                  Optimized headshots for professional networking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Commitment */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#5a81b9' }}>
              <span className="font-bold">MY COMMITMENT</span> <span className="font-normal">TO YOU</span>
            </h2>
            <p className="font-raleway text-xl font-normal mb-6" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              Every session continues until you have the images you need – whether that takes 20 minutes or 3 hours. I&apos;m not watching the clock; I&apos;m focused on capturing headshots that will boost your career and business marketing efforts.
            </p>
            <p className="font-raleway text-xl font-normal" style={{
              color: '#575757',
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              I&apos;m proud to serve the Greater Phoenix area, including Scottsdale, Tempe, and Chandler. Ready to work together? I&apos;d love to help you create headshots that truly represent who you are and where you&apos;re going in your career.
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