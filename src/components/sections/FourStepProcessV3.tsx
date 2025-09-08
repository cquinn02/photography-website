import React, { useState, useEffect, useRef } from 'react'
import { Calendar, User, Camera, Download, Sparkles, Heart, Star } from 'lucide-react'

interface Step {
  id: number
  title: string
  description: string
  icon: React.ComponentType<any>
  emoji: string
  color: string
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
    icon: Calendar,
    emoji: "📅",
    color: "#FF6B6B"
  },
  {
    id: 2,
    title: "Info on \"How to prepare\"",
    description: "Get tips and guidance for your session",
    icon: User,
    emoji: "✨",
    color: "#4ECDC4"
  },
  {
    id: 3,
    title: "Have fun at photo session",
    description: "Relax and enjoy the experience",
    icon: Camera,
    emoji: "📸",
    color: "#45B7D1"
  },
  {
    id: 4,
    title: "Download your images",
    description: "Get your professional headshots delivered",
    icon: Download,
    emoji: "🎉",
    color: "#96CEB4"
  }
]

export default function FourStepProcess({ 
  title = "THE PROCESS IS QUICK, EASY, AND FUN!",
  subtitle = "Being nervous is normal! I walk you through the process to ensure you get headshots you'll love.",
  steps = defaultSteps,
  backgroundColor = "#5a81b9"
}: FourStepProcessProps) {
  const [activeStep, setActiveStep] = useState(-1)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          
          // Start the fun sequence
          setTimeout(() => setActiveStep(0), 500)
          setTimeout(() => setActiveStep(1), 1500)
          setTimeout(() => setActiveStep(2), 2500)
          setTimeout(() => setActiveStep(3), 3500)
          setTimeout(() => {
            setShowConfetti(true)
            setTimeout(() => setShowConfetti(false), 2000)
          }, 4500)
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
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden" style={{ backgroundColor }}>
      {/* Floating Fun Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-ping opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? '⭐' : '✨'}
          </div>
        ))}
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: '1s'
              }}
            >
              {['🎉', '🎊', '✨', '🌟', '💫'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-raleway text-3xl lg:text-4xl font-bold text-white mb-6 animate-bounce">
            {title}
          </h2>
          <p className="font-raleway text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Circular Step Display */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center Hub */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
              <div className="text-center">
                <div className="text-4xl mb-2">📸</div>
                <div className="text-white font-bold text-sm" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600' }}>CMQ</div>
              </div>
            </div>
          </div>

          {/* Steps in Circle */}
          <div className="relative h-96 flex items-center justify-center">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const angle = (index * 90) - 90 // Start at top and go clockwise
              const radius = 180
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius
              
              const isActive = activeStep >= index
              const isCurrent = activeStep === index

              return (
                <div
                  key={step.id}
                  className={`absolute transition-all duration-1000 ${
                    isActive 
                      ? 'scale-100 opacity-100 rotate-0' 
                      : 'scale-50 opacity-40 rotate-180'
                  }`}
                  style={{
                    transform: `translate(${x}px, ${y}px) ${isCurrent ? 'scale(1.2)' : ''}`,
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {/* Step Card */}
                  <div 
                    className={`relative w-64 p-6 rounded-2xl backdrop-blur-sm border-2 transition-all duration-500 ${
                      isCurrent 
                        ? 'animate-pulse shadow-2xl border-white' 
                        : isActive 
                        ? 'shadow-xl border-white/50' 
                        : 'border-white/20'
                    }`}
                    style={{ 
                      backgroundColor: isActive ? `${step.color}40` : 'rgba(255,255,255,0.1)',
                      boxShadow: isCurrent ? `0 0 30px ${step.color}60` : undefined
                    }}
                  >
                    {/* Fun Floating Icons */}
                    {isCurrent && (
                      <>
                        <div className="absolute -top-4 -right-4 text-2xl animate-spin">{step.emoji}</div>
                        <Star className="absolute -bottom-2 -left-2 h-6 w-6 text-yellow-300 animate-pulse" />
                        <Heart className="absolute -top-2 -left-4 h-4 w-4 text-pink-300 animate-bounce" />
                      </>
                    )}

                    {/* Step Number Badge */}
                    <div 
                      className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white transition-all duration-500 ${
                        isActive ? 'animate-bounce' : ''
                      }`}
                      style={{ backgroundColor: step.color }}
                    >
                      {step.id}
                    </div>

                    {/* Icon */}
                    <div className="text-center mb-4">
                      <div 
                        className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-500 ${
                          isCurrent ? 'animate-spin' : ''
                        }`}
                        style={{ backgroundColor: `${step.color}60` }}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-raleway text-lg font-bold text-white text-center mb-2">
                      {step.title}
                    </h3>
                    <p className="font-raleway text-sm text-white/90 text-center leading-relaxed">
                      {step.description}
                    </p>

                    {/* Active Indicator */}
                    {isCurrent && (
                      <div className="mt-4 flex justify-center">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Connection Line to Center */}
                  {isActive && (
                    <div 
                      className="absolute top-1/2 left-1/2 w-1 bg-white/30 origin-left transition-all duration-1000"
                      style={{
                        height: '2px',
                        width: `${radius - 80}px`,
                        transform: `translate(-50%, -50%) rotate(${angle + 180}deg)`,
                        transformOrigin: 'left center'
                      }}
                    >
                      <div className="absolute right-0 w-4 h-4 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Fun Bottom Message */}
          {activeStep >= steps.length - 1 && (
            <div className="text-center mt-12 animate-fadeIn">
              <div className="bg-gradient-to-r from-pink-400/20 to-purple-400/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl mb-4 animate-bounce">🎪</div>
                <h3 className="font-raleway text-2xl font-bold text-white mb-2">
                  Ta-da! That&apos;s the whole show! 
                </h3>
                <p className="font-raleway text-white/90 text-lg">
                  Ready to join the fun? Let&apos;s create some magic together! ✨
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
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  )
}