import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function AnimatedCompositeBuilder() {
  const [currentStep, setCurrentStep] = useState(0)
  const [hasPlayed, setHasPlayed] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
      } else {
        setCurrentStep(step)
      }
    }, 700) // 700ms per step = ~4.9 seconds total
  }

  return (
    <div ref={sectionRef} className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="font-raleway text-4xl lg:text-5xl mb-4 text-center font-medium uppercase" style={{ color: '#5577a5', fontWeight: '500' }}>
            Watch The Team Come Together
          </h2>
          <p className="font-raleway text-lg mb-12 text-gray-700 text-center leading-relaxed">
            See how individual headshots transform into a professional team composite
          </p>

          {/* Animation Container */}
          <div className="relative w-full max-w-5xl mx-auto mb-8">
            {/* Aspect ratio container */}
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              {/* Current composite image */}
              <div className="absolute inset-0 rounded-lg shadow-2xl overflow-hidden">
                <Image
                  src={compositeSteps[currentStep].src}
                  alt={compositeSteps[currentStep].label}
                  fill
                  className="object-contain transition-opacity duration-500"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority={currentStep === 0}
                />
              </div>

              {/* Glow effect on final step */}
              {currentStep === compositeSteps.length - 1 && (
                <div className="absolute inset-0 rounded-lg animate-glow pointer-events-none"></div>
              )}
            </div>

            {/* Step label */}
            <div className="text-center mt-6">
              <p className="font-raleway text-lg font-semibold" style={{ color: '#5577a5' }}>
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
                  backgroundColor: index <= currentStep ? '#5577a5' : '#d1d5db'
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
                  setTimeout(() => playAnimation(), 100)
                }}
                className="font-raleway font-normal inline-flex items-center justify-center text-center transition-all duration-300 rounded-lg uppercase tracking-wide text-white border shadow-lg cursor-pointer px-8 py-4 text-lg"
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
