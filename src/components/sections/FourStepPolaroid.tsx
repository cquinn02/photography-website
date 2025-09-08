import React, { useState, useEffect, useRef } from 'react'
import { CalendarCheck, Handshake, Sparkles, MailCheck } from 'lucide-react'
import GetPricingButton from '../GetPricingButton'

interface Step {
  id: number
  title: string
  description: string
  icon: React.ComponentType<any>
  note: string
  angle: number
}

const defaultSteps: Step[] = [
  {
    id: 1,
    title: "Book your session",
    description: "Easy online scheduling",
    icon: CalendarCheck,
    note: "Step 1 - Schedule",
    angle: -8
  },
  {
    id: 2,
    title: "Prepare for success",
    description: "Get our expert tips",
    icon: Handshake,
    note: "Step 2 - Prepare",
    angle: 5
  },
  {
    id: 3,
    title: "Enjoy the shoot",
    description: "Fun & professional",
    icon: Sparkles,
    note: "Step 3 - Shoot!",
    angle: -6
  },
  {
    id: 4,
    title: "Get your photos",
    description: "Download & share",
    icon: MailCheck,
    note: "Step 4 - Deliver",
    angle: 7
  }
]

export default function FourStepPolaroid() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate cards in sequence
          defaultSteps.forEach((step, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, step.id])
            }, index * 200)
          })
        }
      },
      { threshold: 0.3 }
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
  }, [])

  return (
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: '#F1F1F1' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-raleway text-4xl lg:text-5xl mb-4" style={{ color: '#575757' }}>
            <span className="font-light">THE PROCESS IS</span> <span className="font-bold">QUICK, EASY, AND FUN!</span>
          </h2>
        </div>

        {/* Polaroid Stack */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {defaultSteps.map((step, index) => {
              const IconComponent = step.icon
              const isVisible = visibleCards.includes(step.id)
              const isHovered = hoveredCard === step.id
              
              return (
                <div
                  key={step.id}
                  className="relative flex justify-center"
                  onMouseEnter={() => setHoveredCard(step.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Authentic Polaroid Frame */}
                  <div
                    className={`
                      relative shadow-2xl transition-all duration-700 ease-out cursor-pointer
                      ${isVisible 
                        ? 'opacity-100 translate-x-0 scale-100' 
                        : 'opacity-0 translate-x-full scale-75 rotate-12'
                      }
                      ${isHovered ? 'scale-110 -rotate-1 shadow-3xl z-10' : ''}
                    `}
                    style={{
                      transform: isHovered 
                        ? 'rotate(0deg) scale(1.15) translateX(0) translateY(-10px)' 
                        : isVisible 
                          ? `rotate(${step.angle}deg) scale(1) translateX(0)`
                          : `rotate(${step.angle + 15}deg) scale(0.75) translateX(100%)`,
                      width: '240px',
                      height: '290px',
                      padding: '10px 10px 50px 10px', // Authentic polaroid proportions
                      transformOrigin: 'center bottom',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      transitionDelay: `${index * 150}ms`,
                      borderRadius: '2px',
                      boxShadow: isHovered 
                        ? '0 15px 35px rgba(0,0,0,0.25), 0 5px 15px rgba(0,0,0,0.15)'
                        : '0 10px 30px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)',
                      background: 'linear-gradient(to bottom, #f8f8f8 0%, #f2f2f2 100%)',
                      border: '1px solid #e8e8e8',
                      zIndex: isHovered ? 10 : 1
                    }}
                  >
                    {/* Photo Area with white inner border */}
                    <div className="relative w-full overflow-hidden" style={{ 
                      height: '220px', 
                      backgroundColor: 'rgba(160, 160, 160, 0.7)',
                      border: '3px solid #ffffff',
                      boxShadow: 'inset 0 0 2px rgba(0,0,0,0.1)'
                    }}>
                      {/* All steps - Full image with no text overlay */}
                      <>
                        <img 
                          src={step.id === 1 ? "/images/website media/ibook on line Stock-2213802656.jpg" : step.id === 2 ? "/images/website media/prepare for headshot.jpg" : step.id === 3 ? "/images/website media/shoot-iStock-2217506333.jpg" : "/images/website media/download-stockphoto-1311146330-1024x1024.jpg"}
                          alt={step.id === 1 ? "Schedule your appointment" : step.id === 2 ? "Prepare for success" : step.id === 3 ? "Enjoy the photography shoot" : "Quick and easy process completion"}
                          className="w-full h-full object-cover"
                        />
                        {/* Step Number Badge */}
                        <div className="absolute top-2 left-2 w-8 h-8 border border-white rounded-full flex items-center justify-center shadow-md z-20" style={{ backgroundColor: '#5a81b9' }}>
                          <span className="text-sm font-light font-raleway text-white">{step.id}</span>
                        </div>
                      </>
                    </div>

                    {/* Polaroid Caption Area - centered in the bottom grey space */}
                    <div className="absolute bottom-0 left-0 right-0 h-[50px] flex items-center justify-center" style={{ paddingBottom: '8px' }}>
                      <div className="flex flex-col items-center justify-center">
                        <p className="font-raleway font-light" style={{ 
                          color: '#000000',
                          fontSize: '16px',
                          lineHeight: '1.2'
                        }}>
                          {step.note}
                        </p>
                        <p className="font-raleway font-light" style={{ 
                          color: '#000000',
                          fontSize: '16px',
                          marginTop: '0px',
                          lineHeight: '1.2'
                        }}>
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Polaroid Shadow */}
                    <div className="absolute inset-0 -z-10 bg-black/20 blur-xl transform translate-y-4"></div>
                  </div>

                  {/* Scattered Effect - Other Photos Behind */}
                  <div className="absolute inset-0 -z-20">
                    <div className="absolute top-2 left-2 w-full h-full bg-white shadow-lg"
                      style={{ transform: `rotate(${step.angle - 5}deg)` }}
                    ></div>
                    <div className="absolute top-4 left-4 w-full h-full bg-white shadow-lg"
                      style={{ transform: `rotate(${step.angle + 3}deg)` }}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pricing Buttons */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-4xl mx-auto">
            <GetPricingButton href="/pricing-individual" size="large" className="flex-1 max-w-xs">
              INDIVIDUAL RATES
            </GetPricingButton>
            <GetPricingButton href="/corporate-staff-headshots" size="large" className="flex-1 max-w-xs">
              GROUP RATES
            </GetPricingButton>
            <GetPricingButton href="/pricing-actor" size="large" className="flex-1 max-w-xs">
              ACTOR RATES
            </GetPricingButton>
          </div>
        </div>

      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes dance-in-from-right {
          0% {
            opacity: 0;
            transform: translateX(200%) rotate(25deg) scale(0.5);
          }
          50% {
            opacity: 1;
            transform: translateX(50%) rotate(-5deg) scale(1.1);
          }
          70% {
            transform: translateX(10%) rotate(3deg) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(0deg) scale(1);
          }
        }
        
        @keyframes gentle-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        
        @keyframes floating {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-gentle-bounce {
          animation: gentle-bounce 2s ease-in-out infinite;
        }
        
        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }
        
        /* Add a subtle floating effect to polaroids */
        .polaroid-hover:hover {
          animation: floating 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}