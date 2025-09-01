import React, { useState, useEffect, useRef } from 'react'
import { Calendar, User, Camera, Download, CheckCircle, ArrowRight } from 'lucide-react'

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
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [isActive, setIsActive] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isActive) {
          setIsActive(true)
          
          // Progressive step activation
          const timer = setInterval(() => {
            setCurrentStep(prev => {
              if (prev < steps.length - 1) {
                setCompletedSteps(completed => [...completed, prev])
                return prev + 1
              } else {
                setCompletedSteps(completed => [...completed, prev])
                clearInterval(timer)
                return prev
              }
            })
          }, 1200) // 1.2 seconds between steps
          
          return () => clearInterval(timer)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [steps, isActive])

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden" style={{ backgroundColor }}>
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
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

        {/* Interactive Steps Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="relative mb-12">
            <div className="h-1 bg-white/20 rounded-full">
              <div 
                className="h-1 bg-white rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(completedSteps.length + (currentStep >= 0 ? 1 : 0)) * 25}%` }}
              ></div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isActive = index === currentStep
              const isCompleted = completedSteps.includes(index)
              const isVisible = index <= currentStep

              return (
                <div
                  key={step.id}
                  className={`flex items-center gap-6 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-8'
                  }`}
                >
                  {/* Step Icon & Number */}
                  <div className="flex-shrink-0">
                    <div className={`relative w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                      isCompleted 
                        ? 'bg-green-400 border-green-400 scale-110' 
                        : isActive 
                        ? 'bg-white border-white animate-pulse scale-110' 
                        : 'bg-transparent border-white/40'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="h-8 w-8 text-white" />
                      ) : (
                        <IconComponent className={`h-8 w-8 transition-colors duration-500 ${
                          isActive ? 'text-cmq-blue' : 'text-white'
                        }`} />
                      )}
                      
                      {/* Step number badge */}
                      <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                        isCompleted 
                          ? 'bg-green-400 text-white' 
                          : isActive 
                          ? 'bg-white text-cmq-blue' 
                          : 'bg-white/20 text-white'
                      }`}>
                        {step.id}
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className={`flex-1 transition-all duration-700 ${
                    isVisible ? 'translate-y-0' : 'translate-y-4'
                  }`}>
                    <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-500 ${
                      isActive 
                        ? 'border-white bg-white/20 shadow-2xl scale-105' 
                        : isCompleted
                        ? 'border-green-400/50 bg-green-400/10'
                        : 'border-white/20'
                    }`}>
                      <h3 className={`font-raleway text-xl font-bold mb-2 transition-colors duration-500 ${
                        isCompleted || isActive ? 'text-white' : 'text-white/70'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`font-raleway transition-colors duration-500 ${
                        isCompleted || isActive ? 'text-white/90' : 'text-white/60'
                      }`}>
                        {step.description}
                      </p>
                      
                      {/* Active Step Indicator */}
                      {isActive && (
                        <div className="mt-4 flex items-center gap-2 text-white">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <span className="text-sm font-medium">In Progress...</span>
                        </div>
                      )}

                      {/* Completed Step Indicator */}
                      {isCompleted && (
                        <div className="mt-4 flex items-center gap-2 text-green-400">
                          <CheckCircle className="h-4 w-4" />
                          <span className="text-sm font-medium">Complete!</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Arrow to next step */}
                  {index < steps.length - 1 && (
                    <div className="flex-shrink-0">
                      <ArrowRight className={`h-6 w-6 transition-all duration-500 ${
                        isCompleted ? 'text-green-400 scale-110' : 'text-white/40'
                      }`} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Completion Message */}
          {completedSteps.length === steps.length && (
            <div className="mt-12 text-center">
              <div className="bg-green-400/20 backdrop-blur-sm border border-green-400/50 rounded-xl p-8 animate-bounce">
                <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="font-raleway text-2xl font-bold text-white mb-2">
                  That's it! 🎉
                </h3>
                <p className="font-raleway text-white/90">
                  Ready to start your headshot journey? Let's make you look amazing!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}