import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Calendar, User, Camera, Download } from 'lucide-react'

interface Step {
  id: number
  title: string
  description: string
  icon: React.ComponentType<any>
}

interface FourStepProcessDriftProps {
  title?: string | React.ReactNode
  subtitle?: string
  steps?: Step[]
  backgroundColor?: string
}

const defaultSteps: Step[] = [
  {
    id: 1,
    title: "Book date and time online",
    description: "Easy scheduling that fits your staff's calendar",
    icon: Calendar
  },
  {
    id: 2,
    title: "I match your brand style",
    description: "I match your lighting and background color",
    icon: User
  },
  {
    id: 3,
    title: "Have fun at photo session",
    description: "I provide direction on pose and expression",
    icon: Camera
  },
  {
    id: 4,
    title: "Download your images",
    description: "I invoice you and once paid delivery the images to you",
    icon: Download
  }
]

export default function FourStepProcessDrift({
  title = "THE PROCESS IS QUICK, EASY, AND FUN!",
  subtitle = "Being nervous is normal! I walk you through the process to ensure you get headshots you'll love.",
  steps = defaultSteps,
  backgroundColor = "#575757"
}: FourStepProcessDriftProps) {
  const [activeCards, setActiveCards] = useState<number[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const startDriftAnimation = useCallback(() => {
    steps.forEach((step, index) => {
      setTimeout(() => {
        setActiveCards(prev => [...prev, step.id])
      }, index * 800) // 800ms delay between each card
    })
  }, [steps])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          startDriftAnimation()
        }
      },
      { threshold: 0.2 }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [isVisible, startDriftAnimation])

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden" style={{
      backgroundColor: '#575757',
      backgroundImage: 'url("/images/website media/optimized/grey-linen-background-optimized.webp")',
      backgroundRepeat: 'repeat',
      backgroundSize: 'auto'
    }}>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-raleway font-bold text-white mb-6 uppercase" style={{ color: 'white', fontSize: '25px', lineHeight: '1.8' }}>
            {title}
          </h2>
          {subtitle && (
            <p className="font-raleway text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            const isActive = activeCards.includes(step.id)

            return (
              <div
                key={step.id}
                className={`drift-card ${isActive ? 'drift-active' : ''}`}
                style={{
                  animationDelay: `${index * 0.8}s`
                }}
              >
                {/* Step card */}
                <div className="relative bg-white rounded-2xl p-6 text-center h-full"
                  style={{
                    border: '2px solid #d1d5db',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '300px'
                  }}>
                  {/* Step number */}
                  <div className="absolute top-3 left-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg text-sm"
                      style={{ backgroundColor: '#5577a5', color: 'white' }}>
                      {step.id}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                      style={{
                        backgroundColor: '#5577a5',
                        boxShadow: '0 8px 25px rgba(90,129,185,0.2)'
                      }}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-raleway font-bold mb-3 text-lg"
                    style={{ color: '#5577a5' }}>
                    {step.title}
                  </h3>
                  <p className="font-raleway leading-relaxed text-sm"
                    style={{ color: '#5577a5' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CSS for drift animation */}
      <style jsx>{`
        .drift-card {
          opacity: 0;
          transform: translateX(100%) scale(0.8);
          transition: none;
        }

        .drift-card.drift-active {
          animation: driftIn 2s ease-out forwards;
        }

        @keyframes driftIn {
          0% {
            opacity: 0;
            transform: translateX(100%) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: translateX(0%) scale(1.15);
          }
          100% {
            opacity: 1;
            transform: translateX(0%) scale(1);
          }
        }

        /* Hover effect */
        .drift-card.drift-active > div {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .drift-card.drift-active > div:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </section>
  )
}
