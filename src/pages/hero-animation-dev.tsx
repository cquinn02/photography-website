import Layout from '@/components/Layout'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function HeroAnimationDev() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)

  // High-quality portfolio images for showcasing
  const portfolioImages = [
    "/images/website%20media/Peter%20Osmundson1991-1x1.jpg",
    "/images/website%20media/CMQHeadshots_D40396-1x1-jgmini-leg-sqo.webp",
    "/images/website%20media/CMQ-Headshots-phoenix-staff-DAY-41625-1x1-jpmini-leg-squ.webp",
    "/images/website%20media/cmq-headshots-Anna-scottsdale-headshots-H0622-jp-leg-sqo.webp",
    "/images/website%20media/Amy5204-1x1-jpmini-leg-sqo.webp",
    "/images/website%20media/Annie-Talbor6091a-jpmini-leg-sqo.webp",
    "/images/website%20media/Chris-Yaegar5680-left-compressed-sqo.webp",
    "/images/website%20media/Shawn%20Wilson10136-1x1.webp"
  ]

  // Handle scroll for parallax effect
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Carousel auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length)
    }, 4000) // Change image every 4 seconds
    return () => clearInterval(interval)
  }, [portfolioImages.length])

  return (
    <Layout title="Hero Animation Development" description="Testing animated hero sections">
      {/* Navigation back to main */}
      <div className="fixed top-4 right-4 z-50">
        <Link
          href="/"
          className="bg-blue-600 text-white px-3 py-1 text-sm rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          ← Back
        </Link>
      </div>

      {/* 1. IMAGE SPOTLIGHT CAROUSEL */}
      <section className="relative h-screen overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src={portfolioImages[currentImageIndex]}
            alt="Professional Photography Portfolio"
            className="w-full h-full object-cover transition-opacity duration-1000"
            key={currentImageIndex}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
              SPOTLIGHT CAROUSEL
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">Large rotating hero images showcase your best work</p>
            <div className="flex justify-center space-x-2">
              {portfolioImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEN BURNS EFFECT */}
      <section className="relative h-screen overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="/images/website%20media/Peter%20Osmundson1991-1x1.jpg"
            alt="Ken Burns Effect"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                KEN BURNS EFFECT
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Cinematic zoom and pan creates movement within a single powerful image
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PARALLAX LAYERED ANIMATION */}
      <section className="relative h-screen overflow-hidden" ref={parallaxRef}>
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img
            src="/images/website%20media/CMQHeadshots_D40396-1x1-jgmini-leg-sqo.webp"
            alt="Parallax Background"
            className="w-full h-[120%] object-cover"
          />
        </div>
        <div
          className="absolute inset-0 bg-blue-900 bg-opacity-40"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1
              className="text-6xl md:text-8xl font-bold text-white mb-6"
              style={{ transform: `translateY(${scrollY * -0.2}px)` }}
            >
              PARALLAX LAYERS
            </h1>
            <p
              className="text-xl md:text-2xl text-white"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              Background moves at different speed creating depth and dimension
            </p>
          </div>
        </div>
      </section>

      {/* 4. HOVER-TRIGGERED IMAGE REVEALS */}
      <section className="relative h-screen bg-gray-100 flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-6 h-[80vh]">
            {/* Main Display Image */}
            <div className="col-span-8">
              <div className="h-full rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={hoveredImage || portfolioImages[0]}
                  alt="Main Display"
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="col-span-4 space-y-4">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                HOVER REVEALS
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Hover over thumbnails to see full-size images
              </p>
              <div className="grid grid-cols-2 gap-3">
                {portfolioImages.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 shadow-lg"
                    onMouseEnter={() => setHoveredImage(image)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SCROLL-TRIGGERED IMAGE SEQUENCE */}
      <section className="relative">
        {portfolioImages.map((image, index) => (
          <div key={index} className="h-screen relative overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                transform: `translateY(${(scrollY - (index * 800)) * 0.3}px)`,
              }}
            >
              <img
                src={image}
                alt={`Story Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            <div className="relative z-10 h-full flex items-center justify-center text-center">
              <div className="max-w-2xl px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                  SCROLL STORY
                </h1>
                <p className="text-xl text-white mb-4">
                  Image {index + 1} of {portfolioImages.length}
                </p>
                <p className="text-lg text-white opacity-90">
                  Different images appear as you scroll, telling your story
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Summary Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Choose Your Hero Style</h2>
          <p className="text-xl mb-8">
            Each animation showcases your photography in a unique, engaging way
          </p>
          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="font-bold mb-2">Spotlight Carousel</h3>
              <p className="text-sm text-gray-300">Large rotating images with smooth transitions</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="font-bold mb-2">Ken Burns Effect</h3>
              <p className="text-sm text-gray-300">Cinematic zoom and pan movement</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="font-bold mb-2">Parallax Layers</h3>
              <p className="text-sm text-gray-300">Depth through scroll-based movement</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="font-bold mb-2">Hover Reveals</h3>
              <p className="text-sm text-gray-300">Interactive thumbnail-to-large display</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="font-bold mb-2">Scroll Story</h3>
              <p className="text-sm text-gray-300">Sequential reveal through scrolling</p>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.1) translate(-2%, -1%);
          }
          100% {
            transform: scale(1.05) translate(1%, 1%);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>

    </Layout>
  )
}