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
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Trigger steps to appear one by one
          steps.forEach((step, index) => {
            setTimeout(() => {
              setVisibleSteps(prev => [...prev, step.id])
            }, index * 400) // 400ms delay between each step
          })
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
  }, [steps, isVisible])
  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden" style={{ backgroundColor }}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-white/5 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-white/5 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-raleway text-3xl lg:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="font-raleway text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isStepVisible = visibleSteps.includes(step.id)
              return (
                <div 
                  key={step.id}
                  className={`group relative transition-all duration-700 ${
                    isStepVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95'
                  }`}
                >
                  {/* Connection line (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-white/30 transform -translate-x-8 z-0">
                      <div className={`absolute inset-0 bg-white/60 transition-all duration-1000 origin-left ${
                        visibleSteps.includes(steps[index + 1]?.id) ? 'scale-x-100' : 'scale-x-0'
                      }`}></div>
                    </div>
                  )}

                  {/* Step card */}
                  <div className="relative bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/25 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`w-8 h-8 bg-white text-cmq-blue rounded-full flex items-center justify-center font-bold text-sm shadow-lg group-hover:scale-110 transition-all duration-300 ${
                        isStepVisible ? 'animate-pulse-once' : ''
                      }`}>
                        {step.id}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-6 mt-4">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12">
                        <IconComponent className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-raleway text-lg font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="font-raleway text-sm text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {step.description}
                    </p>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 hover:bg-white/30 transition-all duration-300 hover:scale-105">
            <p className="font-raleway text-white font-medium">
              Ready to get started? 📸 Let&apos;s create something amazing!
            </p>
          </div>
        </div>
      </div>

      {/* CSS for additional animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
          }
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        @keyframes pulseOnce {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
        }
        
        .animate-pulse-once {
          animation: pulseOnce 1s ease-out;
        }
      `}</style>
    </section>
  )
}