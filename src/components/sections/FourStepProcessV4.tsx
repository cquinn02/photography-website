import React, { useState, useEffect, useRef } from 'react'
import { Calendar, User, Camera, Download } from 'lucide-react'

interface Step {
  id: number
  title: string
  description: string
  icon: React.ComponentType<any>
}

interface FourStepProcessProps {
  title?: string
  subtitle?: string
  steps?: Step[]
  backgroundColor?: string
}

const defaultSteps: Step[] = [
  {
    id: 1,
    title: "Book date and time online",
    description: "Easy scheduling that fits your calendar",
    icon: Calendar
  },
  {
    id: 2,
    title: "Info on \"How to prepare\"",
    description: "Get tips and guidance for your session",
    icon: User
  },
  {
    id: 3,
    title: "Have fun at photo session",
    description: "Relax and enjoy the experience",
    icon: Camera
  },
  {
    id: 4,
    title: "Download your images",
    description: "Get your professional headshots delivered",
    icon: Download
  }
]

export default function FourStepProcess({ 
  title = "THE PROCESS IS QUICK, EASY, AND FUN!",
  subtitle = "Being nervous is normal! I walk you through the process to ensure you get headshots you'll love.",
  steps = defaultSteps,
  backgroundColor = "#5a81b9"
}: FourStepProcessProps) {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const [stringLength, setStringLength] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isActive) {
          setIsActive(true)
          
          // Start the string pulling animation
          const stringTimer = setInterval(() => {
            setStringLength(prev => {
              if (prev < 100) return prev + 2
              clearInterval(stringTimer)
              return 100
            })
          }, 50)
          
          // Pull in each note one by one in sequence
          setTimeout(() => setVisibleSteps([1]), 1000)          // Note 1
          setTimeout(() => setVisibleSteps([1, 2]), 1800)       // Note 2  
          setTimeout(() => setVisibleSteps([1, 2, 3]), 2600)    // Note 3
          setTimeout(() => setVisibleSteps([1, 2, 3, 4]), 3400) // Note 4
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
  }, [steps, isActive])

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden" style={{ backgroundColor }}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-raleway text-3xl lg:text-4xl font-bold text-white mb-6" style={{ color: 'white' }}>
            {title}
          </h2>
          <p className="font-raleway text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Clothesline Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* String/Line */}
          <div className="relative mb-8 h-4">
            <div 
              className="absolute top-1/2 left-0 h-1 bg-white/60 shadow-sm transform -translate-y-1/2 transition-all duration-2000 ease-out"
              style={{ width: `${stringLength}%` }}
            >
              {/* String endpoints */}
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white/30 rounded-full"></div>
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white/30 rounded-full"></div>
            </div>
            
            {/* Clothespins */}
            {steps.map((step, index) => {
              const position = (index + 1) * 20 + 10 // Distribute evenly along the line
              const isVisible = visibleSteps.includes(step.id)
              
              return (
                <div
                  key={`pin-${step.id}`}
                  className={`absolute transform -translate-y-1/2 transition-all duration-500 ${
                    stringLength >= position ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    left: `${position}%`, 
                    top: '50%',
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {/* Clothespin */}
                  <div className="w-3 h-6 bg-yellow-200 rounded-sm shadow-md relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-100 to-yellow-300 rounded-sm"></div>
                    <div className="absolute top-1 left-1/2 w-0.5 h-4 bg-yellow-400 transform -translate-x-1/2"></div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Notes/Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isVisible = visibleSteps.includes(step.id)
              const position = (index + 1) * 20 + 10
              
              return (
                <div
                  key={step.id}
                  className="relative"
                  style={{ 
                    marginTop: '2rem' // Space for the string above
                  }}
                >
                  {/* String from clothespin to card */}
                  <div 
                    className={`absolute -top-8 left-1/2 w-0.5 bg-white/40 transform -translate-x-1/2 transition-all duration-700 ${
                      isVisible ? 'h-8 opacity-100' : 'h-0 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  ></div>

                  {/* Note Card - Vertical Paper Sheet Style */}
                  <div
                    className={`relative bg-white shadow-xl transform transition-all duration-1000 ${
                      isVisible 
                        ? 'translate-y-0 opacity-100 scale-100 animate-sway' 
                        : 'translate-y-[-100px] rotate-12 opacity-0 scale-75'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 200}ms`,
                      background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 100%)',
                      boxShadow: isVisible ? '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' : 'none',
                      borderRadius: '2px',
                      width: '200px',
                      height: '280px',
                      transformOrigin: 'top center',
                      animationDelay: `${index * 0.3}s`
                    }}
                  >
                    {/* Paper curl effect */}
                    <div className="absolute bottom-0 right-0 w-6 h-6 overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[20px] border-t-gray-100 border-r-[20px] border-r-white shadow-inner"></div>
                    </div>

                    {/* Paper clip at top */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M15 2 C8 2, 5 5, 5 10 L5 22 C5 27, 8 30, 13 30 L17 30 C22 30, 25 27, 25 22 L25 10 C25 5, 22 2, 17 2 L13 2 C10 2, 8 4, 8 7 L8 20 C8 23, 10 25, 13 25 L17 25 C20 25, 22 23, 22 20 L22 8"
                          stroke="url(#paperclip-gradient)"
                          strokeWidth="2.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="paperclip-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#d4d4d8" />
                            <stop offset="50%" stopColor="#71717a" />
                            <stop offset="100%" stopColor="#d4d4d8" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Step number - handwritten style */}
                    <div className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center">
                      <span className="font-bold text-xl text-cmq-blue/80" style={{ fontFamily: 'serif' }}>
                        {step.id}
                      </span>
                    </div>

                    {/* Content - all same size text */}
                    <div className="p-6 pt-8 h-full flex flex-col justify-center">
                      <p className="font-raleway text-base font-semibold text-cmq-gray-darker text-center mb-3 leading-relaxed">
                        {step.title}
                      </p>
                      <p className="font-raleway text-base text-cmq-gray-dark text-center leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Lined paper effect */}
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          180deg,
                          transparent,
                          transparent 20px,
                          rgba(200, 200, 200, 0.3) 20px,
                          rgba(200, 200, 200, 0.3) 21px
                        )`,
                        backgroundPosition: '0 35px'
                      }}
                    ></div>
                    
                    {/* Subtle paper texture */}
                    <div 
                      className="absolute inset-0 opacity-[0.02] pointer-events-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '20px 20px'
                      }}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Final message when all cards are visible */}
          {visibleSteps.length === steps.length && (
            <div className="text-center mt-16">
              <div 
                className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20 animate-fadeIn"
                style={{ animationDelay: '2s' }}
              >
                <p className="font-raleway text-white text-lg font-medium">
                  Perfect! Now you&apos;re ready to create something amazing! 📸✨
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        @keyframes sway {
          0% { 
            transform: rotate(-2deg) translateX(-2px);
          }
          25% { 
            transform: rotate(1deg) translateX(1px);
          }
          50% { 
            transform: rotate(2deg) translateX(2px);
          }
          75% { 
            transform: rotate(-1deg) translateX(-1px);
          }
          100% { 
            transform: rotate(-2deg) translateX(-2px);
          }
        }
        
        .animate-sway {
          animation: sway 4s ease-in-out infinite;
        }
        
        .animate-sway:nth-child(odd) {
          animation-duration: 3.5s;
          animation-delay: 0.2s;
        }
        
        .animate-sway:nth-child(even) {
          animation-duration: 4.5s;
          animation-direction: reverse;
        }
      `}</style>
    </section>
  )
}