import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function InteractiveCompositeBuilder() {
  const [currentStep, setCurrentStep] = useState(0)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [hoveredPerson, setHoveredPerson] = useState<number | null>(null)
  const [typedText, setTypedText] = useState('')
  const sectionRef = useRef<HTMLDivElement>(null)

  const fullText = 'YOUR SALES TEAM'

  const compositeSteps = [
    { src: '/images/website media/ims ind/for website /ims sales-1-bkgrd.webp', label: 'Studio Setup' },
    { src: '/images/website media/ims ind/for website /ims sales-1-bob.webp', label: 'First Team Member' },
    { src: '/images/website media/ims ind/for website /ims sales-2-bob-laura.webp', label: 'Second Member Added' },
    { src: '/images/website media/ims ind/for website /ims sales-3.webp', label: 'Third Member' },
    { src: '/images/website media/ims ind/for website /ims sales-4webp.webp', label: 'Fourth Member' },
    { src: '/images/website media/ims ind/for website /ims sales-5.webp', label: 'Fifth Member' },
    { src: '/images/website media/ims ind/for website /ims sales-6.webp', label: 'Sixth Member' },
    { src: '/images/website media/ims ind/for website /ims sales-7.webp', label: 'Complete Team Composite' },
  ]

  // Individual headshots for hover (left to right order: Matt, Brayley, Anthony, Bob, Lauren, Doug, Hayley)
  const headshots = [
    {
      src: '/images/website media/ims ind/CMQHEADSHOTS-Matt-0822-fullres.jpg',
      name: 'Matt Thompson',
      title: 'Senior Sales Manager',
      bio: 'Leading our sales team for over 8 years with expertise in enterprise solutions.'
    },
    {
      src: '/images/website media/ims ind/CMQHEADSHOTS-Brayley-0718-fullres.webp',
      name: 'Brayley Chen',
      title: 'Account Executive',
      bio: 'Specializing in client relationships and strategic business development.'
    },
    {
      src: '/images/website media/ims ind/CMQHEADSHOTS-Anthony-0887-fullres.jpg',
      name: 'Anthony Rodriguez',
      title: 'Sales Representative',
      bio: 'Passionate about connecting clients with the perfect solutions for their needs.'
    },
    {
      src: '/images/website media/ims ind/CMQHEADSHOTS-Bob-0621-headshot.jpg',
      name: 'Bob Williams',
      title: 'Regional Director',
      bio: 'Overseeing operations across the Southwest region with proven results.'
    },
    {
      src: '/images/website media/ims ind/CMQHEADSHOTS-Lauren-0763-fullres.webp',
      name: 'Lauren Davis',
      title: 'Inside Sales Specialist',
      bio: 'Expert in customer engagement and building long-term partnerships.'
    },
    {
      src: '/images/website media/ims ind/CMQHEADSHOTS-doug-0931-fullres.jpg',
      name: 'Doug Martinez',
      title: 'Business Development',
      bio: 'Driving growth through innovative market strategies and client solutions.'
    },
    {
      src: '/images/website media/ims ind/CMQHEADSHOTS-Hayley-0953-fullres.jpg',
      name: 'Hayley Anderson',
      title: 'Sales Coordinator',
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
  }, [hasPlayed])

  const playAnimation = () => {
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
  }

  const startTypewriter = () => {
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
  }

  return (
    <div ref={sectionRef} className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="font-raleway text-4xl lg:text-5xl mb-4 text-center font-medium uppercase" style={{ color: '#5a81b9', fontWeight: '500' }}>
            Watch The Team Come Together
          </h2>
          <p className="font-raleway text-lg mb-12 text-gray-700 text-center leading-relaxed">
            See how individual images transform into a professional team composite
            {currentStep === compositeSteps.length - 1 && <span className="block mt-2 text-base italic">Hover over each person to see their individual headshot</span>}
          </p>

          {/* Animation Container */}
          <div className="relative w-full max-w-4xl mx-auto mb-8">
            {/* Aspect ratio container */}
            <div className="relative w-full" style={{ aspectRatio: '21/9' }}>
              {/* Current composite image */}
              <div className="absolute inset-0 rounded-lg shadow-2xl overflow-hidden">
                <Image
                  src={compositeSteps[currentStep].src}
                  alt={compositeSteps[currentStep].label}
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority={currentStep === 0}
                />
              </div>

              {/* Typewriter text overlay */}
              {typedText && currentStep === compositeSteps.length - 1 && (
                <div
                  className="absolute z-10 pointer-events-none"
                  style={{
                    left: '50%',
                    top: '12%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  <h3
                    className="font-raleway font-bold uppercase text-center whitespace-nowrap"
                    style={{
                      color: '#ffffff',
                      fontSize: '2.5rem',
                      fontWeight: '700',
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
                  className="absolute z-20 pointer-events-none transition-all duration-300"
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
                  }}
                >
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-2" style={{ borderColor: '#5a81b9' }}>
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
                      <h4 className="font-raleway font-bold text-xl mb-1" style={{ color: '#5a81b9' }}>
                        {headshots[hoveredPerson].name}
                      </h4>
                      <p className="font-raleway text-sm font-semibold mb-2 text-gray-600">
                        {headshots[hoveredPerson].title}
                      </p>
                      <p className="font-raleway text-sm text-gray-700 leading-relaxed">
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
                      [hoveredPerson > 3 ? 'borderLeft' : 'borderRight']: hoveredPerson > 3 ? '10px solid #5a81b9' : '10px solid #5a81b9',
                    }}
                  />
                </div>
              )}

              {/* Interactive hotspots (only show after animation completes) */}
              {currentStep === compositeSteps.length - 1 && hotspots.map((hotspot, index) => (
                <div
                  key={index}
                  className="absolute cursor-pointer transition-all duration-200 hover:bg-cmq-blue hover:bg-opacity-20 rounded-lg"
                  style={{
                    left: hotspot.left,
                    top: hotspot.top,
                    width: hotspot.width,
                    height: hotspot.height,
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

            {/* Step label */}
            <div className="text-center mt-6">
              <p className="font-raleway text-lg font-semibold" style={{ color: '#5a81b9' }}>
                Step {currentStep + 1} of {compositeSteps.length}: {compositeSteps[currentStep].label}
              </p>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center gap-2 mb-8">
            {compositeSteps.map((_, index) => (
              <div
                key={index}
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  width: index === currentStep ? '48px' : '24px',
                  backgroundColor: index <= currentStep ? '#5a81b9' : '#d1d5db'
                }}
              />
            ))}
          </div>

          {/* Replay button */}
          {currentStep === compositeSteps.length - 1 && (
            <div className="text-center">
              <button
                onClick={() => {
                  setCurrentStep(0)
                  setHoveredPerson(null)
                  setTypedText('')
                  setTimeout(() => playAnimation(), 100)
                }}
                className="font-raleway font-normal inline-flex items-center justify-center text-center transition-all duration-300 rounded-lg uppercase tracking-wide text-white border shadow-lg cursor-pointer px-8 py-4 text-lg"
                style={{
                  fontWeight: '400',
                  backgroundColor: '#5a81b9',
                  borderColor: '#5a81b9',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#575757'
                  e.currentTarget.style.borderColor = '#ffffff'
                  e.currentTarget.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#5a81b9'
                  e.currentTarget.style.borderColor = '#5a81b9'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                Watch Again
              </button>
            </div>
          )}
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
      `}</style>
    </div>
  )
}
