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

export default function FourStepProcess({
  title = "THE PROCESS IS QUICK, EASY, AND FUN!",
  subtitle = "Being nervous is normal! I walk you through the process to ensure you get headshots you'll love.",
  steps = defaultSteps,
  backgroundColor = "#5a81b9"
}: FourStepProcessProps) {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [currentCenterStep, setCurrentCenterStep] = useState<number | null>(null)
  const [animationPhase, setAnimationPhase] = useState<'intro' | 'showcase' | 'lineup'>('intro')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          startSequentialAnimation()
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

  const startSequentialAnimation = () => {
    setAnimationPhase('showcase')

    // Step 1: Show each step in center, one by one
    steps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentCenterStep(step.id)
        setVisibleSteps(prev => [...prev, step.id])

        // After 2 seconds, move to next step or finish
        setTimeout(() => {
          if (index === steps.length - 1) {
            // All steps shown, now line them up
            setTimeout(() => {
              setAnimationPhase('lineup')
              setCurrentCenterStep(null)
            }, 2000)
          }
        }, 2000)
      }, index * 3000) // 3 seconds for each step (2s display + 1s transition)
    })
  }
  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden" style={{
      backgroundColor: '#575757',
      backgroundImage: 'url("/images/website media/grey linen-background.jpg")',
      backgroundRepeat: 'repeat',
      backgroundSize: 'auto'
    }}>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-raleway font-thin text-white mb-6 uppercase" style={{ color: 'white', fontSize: '25px', lineHeight: '1.8' }}>
            {title}
          </h2>
          <p className="font-raleway text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Steps Container */}
        <div className="max-w-6xl mx-auto relative min-h-[450px]">
          {/* Center Stage Area */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Grid container for final lineup */}
            <div className={`${animationPhase === 'lineup' ? 'grid grid-cols-4 gap-4 w-full max-w-5xl' : 'contents'}`}>
              {steps.map((step, index) => {
                const IconComponent = step.icon
                const isStepVisible = visibleSteps.includes(step.id)
                const isCenter = currentCenterStep === step.id
                const isInLineup = animationPhase === 'lineup' && isStepVisible

                return (
                  <div
                    key={step.id}
                    className={`transition-all duration-1000 ease-in-out ${
                      isStepVisible ? 'opacity-100' : 'opacity-0'
                    } ${isInLineup ? 'relative flex justify-center' : 'absolute'}`}
                    style={{
                      // Center stage when showcasing
                      ...(isCenter && animationPhase === 'showcase' ? {
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%) scale(1.2)',
                        zIndex: 10
                      } :
                      // Final lineup position (handled by grid)
                      isInLineup ? {
                        transform: 'scale(1)',
                        zIndex: 1
                      } :
                      // Hidden/waiting position
                      {
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%) scale(0)',
                        zIndex: 0
                      })
                    }}
                  >

                  {/* Step card */}
                  <div className={`relative rounded-2xl text-center transition-all duration-500 ${
                    isCenter ? 'p-12 shadow-2xl' : 'p-6'
                  }`}
                  style={{
                    backgroundColor: '#f1f1f1',
                    border: '2px solid #d1d5db',
                    width: isCenter ? '400px' : '300px',
                    height: isCenter ? '400px' : '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    {/* Step number */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <div className={`${isCenter ? 'w-16 h-16 text-xl' : 'w-12 h-12 text-lg'} rounded-full flex items-center justify-center font-bold shadow-lg transition-all duration-300`}
                      style={{ backgroundColor: '#5a81b9', color: 'white' }}>
                        {step.id}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className={`${isCenter ? 'mb-8' : 'mb-4'}`}>
                      <div className={`${isCenter ? 'w-32 h-32' : 'w-20 h-20'} rounded-full flex items-center justify-center mx-auto transition-all duration-300`}
                      style={{
                        backgroundColor: '#5a81b9',
                        boxShadow: isCenter ? '0 12px 40px rgba(90,129,185,0.3)' : '0 8px 25px rgba(90,129,185,0.2)'
                      }}>
                        <IconComponent className={`${isCenter ? 'h-16 w-16' : 'h-10 w-10'} text-white transition-all duration-300`} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className={`font-raleway font-bold mb-3 transition-all duration-300 ${isCenter ? 'text-2xl' : 'text-lg'}`}
                    style={{ color: '#5a81b9' }}>
                      {step.title}
                    </h3>
                    <p className={`font-raleway leading-relaxed transition-all duration-300 ${isCenter ? 'text-lg' : 'text-sm'}`}
                    style={{ color: '#5a81b9' }}>
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
        </div>

      </div>

      {/* CSS for additional animations */}
      <style jsx>{`
        @keyframes slideInBounce {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.6) rotate(15deg);
          }
          60% {
            opacity: 1;
            transform: translateY(-10px) scale(1.05) rotate(-2deg);
          }
          80% {
            transform: translateY(5px) scale(0.98) rotate(1deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes flowingLight {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-iconPulse {
          animation: iconPulse 2s ease-in-out infinite;
        }

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