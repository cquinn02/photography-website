import React, { useState, useEffect, useRef } from 'react'
import { CalendarCheck, Handshake, Sparkles, MailCheck } from 'lucide-react'
import ContactButton from '../ContactButton'

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
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: '#575757' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-raleway text-4xl lg:text-5xl mb-4" style={{ color: 'white' }}>
            <span className="font-thin">THE PROCESS IS</span> <span className="font-bold">QUICK, EASY, AND FUN!</span>
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
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-16 scale-75 rotate-12'
                      }
                      ${isHovered ? 'scale-110 -rotate-1 shadow-3xl z-10' : ''}
                    `}
                    style={{
                      transform: isHovered 
                        ? 'rotate(-1deg) scale(1.1)' 
                        : `rotate(${step.angle}deg) scale(${isVisible ? 1 : 0.75})`,
                      width: '240px',
                      height: '290px',
                      padding: '10px 10px 50px 10px', // Authentic polaroid proportions
                      transformOrigin: 'center bottom',
                      transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                      borderRadius: '2px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)',
                      background: 'linear-gradient(to bottom, #f8f8f8 0%, #f2f2f2 100%)',
                      border: '1px solid #e8e8e8'
                    }}
                  >
                    {/* Photo Area with white inner border */}
                    <div className="relative w-full overflow-hidden" style={{ 
                      height: '220px', 
                      backgroundColor: '#000000',
                      border: '3px solid #ffffff',
                      boxShadow: 'inset 0 0 2px rgba(0,0,0,0.1)'
                    }}>
                      {/* Developed Photo Content */}
                      <div className="absolute inset-0 p-6 flex flex-col items-center justify-center">
                        
                        {/* Icon */}
                        <div className="relative z-10 mb-4">
                          {step.id === 1 ? (
                            <img 
                              src="/images/website media/calendar and clock icon.png"
                              alt="Calendar and clock icon"
                              className="w-28 h-28 object-cover rounded-full border-2"
                              style={{ borderColor: '#5a81b9' }}
                            />
                          ) : step.id === 2 ? (
                            <img 
                              src="/images/website media/Icon of documentation and video and a women.png"
                              alt="Documentation and video icon"
                              className="w-28 h-28 object-cover rounded-full border-2"
                              style={{ borderColor: '#5a81b9' }}
                            />
                          ) : step.id === 3 ? (
                            <img 
                              src="/images/website media/Icon of a women holding a camera.png"
                              alt="Woman holding camera icon"
                              className="w-28 h-28 object-cover rounded-full border-2"
                              style={{ borderColor: '#5a81b9' }}
                            />
                          ) : step.id === 4 ? (
                            <img 
                              src="/images/website media/Icon of a person downloading image.png"
                              alt="Person downloading image icon"
                              className="w-28 h-28 object-cover rounded-full border-2"
                              style={{ borderColor: '#5a81b9' }}
                            />
                          ) : (
                            <div className="w-28 h-28 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#5a81b9' }}>
                              <IconComponent className="w-14 h-14 text-white" />
                            </div>
                          )}
                        </div>
                        
                        {/* Title */}
                        <h3 className="relative z-10 font-raleway text-lg font-thin text-center" style={{ color: 'white !important' }}>
                          {step.title}
                        </h3>
                        
                        {/* Description */}
                        {false && (
                          <p className="relative z-10 font-raleway text-sm font-thin text-center mt-2" style={{ color: 'white !important' }}>
                            {step.description}
                          </p>
                        )}

                      </div>

                      {/* Step Number Badge */}
                      <div className="absolute top-2 left-2 w-8 h-8 bg-black border border-white rounded-full flex items-center justify-center shadow-md z-20">
                        <span className="text-sm font-thin font-raleway text-white">{step.id}</span>
                      </div>
                    </div>

                    {/* Polaroid Caption Area - centered in the bottom grey space */}
                    <div className="absolute bottom-0 left-0 right-0 h-[50px] flex items-center justify-center" style={{ paddingBottom: '8px' }}>
                      <div className="flex flex-col items-center justify-center">
                        <p className="font-raleway font-thin" style={{ 
                          color: '#000000',
                          fontSize: '16px',
                          lineHeight: '1.2'
                        }}>
                          {step.note}
                        </p>
                        <p className="font-raleway font-thin" style={{ 
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

        {/* Bottom Message */}
        <div className="text-center mt-16">
          {visibleCards.length === 4 && (
            <div className="space-y-6">
              <div className="inline-block animate-fade-in-up">
                <div className="bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 animate-gentle-bounce">
                  <p className="font-raleway font-thin flex items-center gap-2" style={{ color: '#5a81b9' }}>
                    <Sparkles className="w-5 h-5 animate-pulse" style={{ color: '#5a81b9' }} />
                    Perfect shots captured! Ready to begin?
                  </p>
                </div>
              </div>
              <div className="animate-fade-in-up">
                <ContactButton href="/contact" size="large">
                  BOOK YOUR SESSION
                </ContactButton>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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