import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

export default function InteractiveCompositeBuilder() {
  const [currentStep, setCurrentStep] = useState(0)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [hoveredPerson, setHoveredPerson] = useState<number | null>(null)
  const [typedText, setTypedText] = useState('')
  const sectionRef = useRef<HTMLDivElement>(null)

  const fullText = 'YOUR SALES TEAM'

  const compositeSteps = [
    { src: 'https://images.cmqheadshots.com/images/website%20media/ims%20ind/for%20website%20/ims%20sales-1-bkgrd.webp', label: 'Team composite headshot studio setup with gray background' },
    { src: 'https://images.cmqheadshots.com/images/website%20media/ims%20ind/for%20website%20/ims%20sales-1-bob.webp', label: 'First team member added to composite headshot' },
    { src: 'https://images.cmqheadshots.com/images/website%20media/ims%20ind/for%20website%20/ims%20sales-2-bob-laura.webp', label: 'Two team members in composite headshot layout' },
    { src: 'https://images.cmqheadshots.com/images/website%20media/ims%20ind/for%20website%20/ims%20sales-3.webp', label: 'Three team members in composite headshot' },
    { src: 'https://images.cmqheadshots.com/images/website%20media/ims%20ind/for%20website%20/ims%20sales-4.webp', label: 'Four team members in composite headshot' },
    { src: 'https://images.cmqheadshots.com/images/website%20media/ims%20ind/for%20website%20/ims%20sales-5.webp', label: 'Five team members in composite headshot' },
    { src: 'https://images.cmqheadshots.com/images/website%20media/ims%20ind/for%20website%20/ims%20sales-6.webp', label: 'Six team members in composite headshot' },
    { src: 'https://images.cmqheadshots.com/images/website%20media/ims%20ind/for%20website%20/ims%20sales-7.webp', label: 'Complete seven-person team composite headshot Phoenix' },
  ]

  // Individual headshots for hover (left to right order: Matt, Brayley, Anthony, Bob, Lauren, Doug, Hayley)
  const headshots = [
    {
      src: 'https://images.cmqheadshots.com/images/website%20media/ims%20ind/CMQHEADSHOTS-Matt-0822-fullres.jpg',
      name: 'Matt Appel',
      title: 'Sales Consultant',
      bio: 'Leading our sales team for over 8 years with expertise in enterprise solutions.'
    },
    {
      src: 'https://images.cmqheadshots.com/images/website%20media/ims%20ind/CMQHEADSHOTS-Brayley-0718-fullres.webp',
      name: 'Brayley Roberts, RN',
      title: 'Sales Consultant',
      bio: 'Specializing in client relationships and strategic business development.'
    },
    {
      src: 'https://images.cmqheadshots.com/images/website%20media/ims%20ind/CMQHEADSHOTS-Anthony-0887-fullres.jpg',
      name: 'Anthony Reyes',
      title: 'Sales Manager',
      bio: 'Passionate about connecting clients with the perfect solutions for their needs.'
    },
    {
      src: 'https://images.cmqheadshots.com/images/website%20media/ims%20ind/CMQHEADSHOTS-Bob-0621-headshot.jpg',
      name: 'Bob Byram',
      title: 'CEO of Innovative Medical Systems',
      bio: 'Overseeing operations across the Southwest region with proven results.'
    },
    {
      src: 'https://images.cmqheadshots.com/images/website%20media/ims%20ind/CMQHEADSHOTS-Lauren-0763-fullres.webp',
      name: 'Lauren Urquides',
      title: 'Director of Sales',
      bio: 'Expert in customer engagement and building long-term partnerships.'
    },
    {
      src: 'https://images.cmqheadshots.com/images/website%20media/ims%20ind/CMQHEADSHOTS-doug-0931-fullres.jpg',
      name: 'Doug Smith',
      title: 'Sales Consultant',
      bio: 'Driving growth through innovative market strategies and client solutions.'
    },
    {
      src: 'https://images.cmqheadshots.com/images/website%20media/ims%20ind/CMQHEADSHOTS-Hayley-0953-fullres.jpg',
      name: 'Hayley Oleson',
      title: 'Sales Consultant',
      bio: 'Supporting our team with exceptional organizational and communication skills.'
    },
  ]

  // Hotspot positions (left to right: Matt, Brayley, Anthony, Bob, Lauren, Doug, Hayley)
  const hotspots = [
    { left: '8%', top: '30%', width: '12%', height: '60%', person: 0 }, // Matt
    { left: '21%', top: '30%', width: '12%', height: '60%', person: 1 }, // Brayley
    { left: '34%', top: '30%', width: '12%', height: '60%', person: 2 }, // Anthony
    { left: '47%', top: '30%', width: '12%', height: '60%', person: 3 }, // Bob
    { left: '60%', top: '30%', width: '12%', height: '60%', person: 4 }, // Lauren
    { left: '73%', top: '30%', width: '12%', height: '60%', person: 5 }, // Doug
    { left: '86%', top: '30%', width: '12%', height: '60%', person: 6 }, // Hayley
  ]

  const startTypewriter = useCallback(() => {
    setTypedText('')
    let index = 0
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 100) // 100ms per character
  }, [fullText])

  const playAnimation = useCallback(() => {
    let step = 0
    const interval = setInterval(() => {
      step++
      if (step >= compositeSteps.length) {
        clearInterval(interval)
        // Start typewriter effect after animation completes
        setTimeout(() => startTypewriter(), 500)
      } else {
        setCurrentStep(step)
      }
    }, 700)
  }, [compositeSteps.length, startTypewriter])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            setHasPlayed(true)
            playAnimation()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasPlayed, playAnimation])

  return (
    <div ref={sectionRef} className="py-8" style={{ backgroundColor: '#F1F1F1' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="font-raleway text-4xl lg:text-5xl mb-4 text-center font-medium uppercase" style={{ color: '#5577a5', fontWeight: '500' }}>
            Watch The Team Come Together
          </h2>
          <p className="font-raleway text-lg mb-12 text-black text-center leading-relaxed">
            See how individual images transform into a professional team composite
            {currentStep === compositeSteps.length - 1 && (
              <>
                <br />
                <span className="inline-block mt-2 text-xl italic font-semibold highlight-sweep">
                  Hover over each person to see their individual headshot
                </span>
              </>
            )}
          </p>

          {/* Text above image on mobile */}
          {typedText && currentStep === compositeSteps.length - 1 && (
            <div className="lg:hidden mb-4">
              <h3
                className="font-raleway font-medium uppercase text-center text-2xl"
                style={{
                  color: '#000000',
                  fontWeight: '500',
                  letterSpacing: '0.05em'
                }}
              >
                {typedText}
              </h3>
            </div>
          )}

          {/* Animation Container with Side Button */}
          <div className="lg:flex lg:items-center lg:gap-8 max-w-7xl mx-auto mb-8">
            {/* Replay button - to the left on desktop, below image on mobile */}
            {currentStep === compositeSteps.length - 1 && (
              <div className="hidden lg:block flex-shrink-0">
                <button
                  onClick={() => {
                    setCurrentStep(0)
                    setHoveredPerson(null)
                    setTypedText('')
                    setTimeout(() => playAnimation(), 100)
                  }}
                  className="font-raleway font-normal inline-flex items-center justify-center text-center transition-all duration-300 rounded-lg uppercase tracking-wide text-white border shadow-lg cursor-pointer px-6 py-3 text-base"
                  style={{
                    fontWeight: '400',
                    backgroundColor: '#5577a5',
                    borderColor: '#5577a5',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#575757'
                    e.currentTarget.style.borderColor = '#ffffff'
                    e.currentTarget.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#5577a5'
                    e.currentTarget.style.borderColor = '#5577a5'
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  Watch Again
                </button>
              </div>
            )}

            {/* Image Container */}
            <div className="relative w-full lg:flex-1">
            {/* Aspect ratio container */}
            <div className="relative w-full" style={{ aspectRatio: '21/9' }}>
              {/* All composite images stacked - instant cut based on currentStep */}
              {compositeSteps.map((step, index) => (
                <div
                  key={index}
                  className="absolute inset-0 rounded-lg shadow-2xl overflow-hidden"
                  style={{
                    opacity: index === currentStep ? 1 : 0,
                    zIndex: index === currentStep ? 1 : 0
                  }}
                >
                  <Image
                    src={step.src}
                    alt={step.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Typewriter text overlay - desktop only */}
              {typedText && currentStep === compositeSteps.length - 1 && (
                <div
                  className="hidden lg:block absolute z-10 pointer-events-none px-2"
                  style={{
                    left: '50%',
                    top: '12%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    maxWidth: '100%'
                  }}
                >
                  <h3
                    className="font-raleway font-medium uppercase text-center text-[2.5rem]"
                    style={{
                      color: '#ffffff',
                      fontWeight: '500',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {typedText}
                  </h3>
                </div>
              )}

              {/* Bio card popup - appears left or right based on position */}
              {hoveredPerson !== null && currentStep === compositeSteps.length - 1 && (
                <div
                  className="absolute pointer-events-none transition-all duration-300"
                  style={{
                    // Right-side people (Lauren, Doug, Hayley - index > 3) show cards on right side
                    // Left-side people (Matt, Brayley, Anthony, Bob - index <= 3) show cards on left side
                    left: hoveredPerson > 3 ? '100%' : 'auto',
                    right: hoveredPerson > 3 ? 'auto' : '100%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    marginLeft: hoveredPerson > 3 ? '10px' : '0',
                    marginRight: hoveredPerson > 3 ? '0' : '10px',
                    width: '280px',
                    zIndex: 30
                  }}
                >
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-2" style={{ borderColor: '#5577a5' }}>
                    {/* Headshot */}
                    <div className="relative w-full h-48">
                      <Image
                        src={headshots[hoveredPerson].src}
                        alt={headshots[hoveredPerson].name}
                        fill
                        className="object-cover"
                        sizes="320px"
                      />
                    </div>
                    {/* Bio content */}
                    <div className="p-4">
                      <h4 className="font-raleway font-medium text-xl mb-1" style={{ color: '#5577a5' }}>
                        {headshots[hoveredPerson].name}
                      </h4>
                      <p className="font-raleway text-sm font-semibold mb-2 text-black">
                        {headshots[hoveredPerson].title}
                      </p>
                      <p className="font-raleway text-sm text-black leading-relaxed">
                        {headshots[hoveredPerson].bio}
                      </p>
                    </div>
                  </div>
                  {/* Arrow pointing to person */}
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2"
                    style={{
                      [hoveredPerson > 3 ? 'right' : 'left']: '-10px',
                      width: '0',
                      height: '0',
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                      [hoveredPerson > 3 ? 'borderLeft' : 'borderRight']: hoveredPerson > 3 ? '10px solid #5577a5' : '10px solid #5577a5',
                    }}
                  />
                </div>
              )}

              {/* Interactive hotspots (only show after animation completes) */}
              {currentStep === compositeSteps.length - 1 && hotspots.map((hotspot, index) => (
                <div
                  key={index}
                  className="absolute cursor-pointer transition-all duration-200 rounded-lg"
                  style={{
                    left: hotspot.left,
                    top: hotspot.top,
                    width: hotspot.width,
                    height: hotspot.height,
                    backgroundColor: hoveredPerson === hotspot.person ? 'rgba(90, 129, 185, 0.3)' : 'transparent',
                    border: hoveredPerson === hotspot.person ? '2px solid rgba(90, 129, 185, 0.8)' : '2px solid transparent',
                    zIndex: 10
                  }}
                  onMouseEnter={() => setHoveredPerson(hotspot.person)}
                  onMouseLeave={() => setHoveredPerson(null)}
                />
              ))}

              {/* Glow effect on final step */}
              {currentStep === compositeSteps.length - 1 && (
                <div className="absolute inset-0 rounded-lg animate-glow pointer-events-none"></div>
              )}
            </div>
            </div>

            {/* Mobile button below image */}
            {currentStep === compositeSteps.length - 1 && (
              <div className="lg:hidden flex justify-center mt-4">
                <button
                  onClick={() => {
                    setCurrentStep(0)
                    setHoveredPerson(null)
                    setTypedText('')
                    setTimeout(() => playAnimation(), 100)
                  }}
                  className="font-raleway font-normal inline-flex items-center justify-center text-center transition-all duration-300 rounded-lg uppercase tracking-wide text-white border shadow-lg cursor-pointer px-6 py-3 text-base"
                  style={{
                    fontWeight: '400',
                    backgroundColor: '#5577a5',
                    borderColor: '#5577a5',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  Watch Again
                </button>
              </div>
            )}
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center gap-2 mb-8">
            {compositeSteps.map((_, index) => (
              <div
                key={index}
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  width: index === currentStep ? '48px' : '24px',
                  backgroundColor: index <= currentStep ? '#5577a5' : '#d1d5db'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(90, 129, 185, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(90, 129, 185, 0.6);
          }
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes highlightSweep {
          0% {
            background-size: 0% 100%;
          }
          100% {
            background-size: 100% 100%;
          }
        }

        .highlight-sweep {
          position: relative;
          display: inline-block;
          background: linear-gradient(90deg, rgba(255, 255, 0, 0.5) 0%, rgba(255, 255, 0, 0.5) 100%);
          background-repeat: no-repeat;
          background-position: left center;
          background-size: 0% 100%;
          animation: highlightSweep 1.5s ease-out forwards;
          padding: 2px 4px;
        }
      `}</style>
    </div>
  )
}
