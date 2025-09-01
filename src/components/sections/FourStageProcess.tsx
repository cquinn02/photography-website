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

export default function FourStageProcess({ 
  title = "THE PROCESS IS QUICK, EASY, AND FUN!",
  subtitle = "I have made the process easy, breezy and fun.",
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
    <section ref={sectionRef} className="py-12 relative overflow-hidden" style={{ backgroundColor }}>
      {/* Moving clouds background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cloud layer 1 - slower, larger */}
        <div className="absolute w-full h-full">
          <div className="absolute top-20 animate-drift-slow opacity-30">
            <div className="w-48 h-24 bg-white rounded-full blur-2xl"></div>
          </div>
          <div className="absolute top-40 right-0 animate-drift-slow opacity-25" style={{ animationDelay: '10s' }}>
            <div className="w-64 h-32 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-20 animate-drift-slow opacity-30" style={{ animationDelay: '20s' }}>
            <div className="w-56 h-28 bg-white rounded-full blur-2xl"></div>
          </div>
        </div>
        
        {/* Cloud layer 2 - faster, smaller */}
        <div className="absolute w-full h-full">
          <div className="absolute top-10 animate-drift opacity-20">
            <div className="w-32 h-16 bg-white rounded-full blur-xl"></div>
          </div>
          <div className="absolute top-32 right-10 animate-drift opacity-25" style={{ animationDelay: '5s' }}>
            <div className="w-40 h-20 bg-white rounded-full blur-xl"></div>
          </div>
          <div className="absolute bottom-32 left-20 animate-drift opacity-20" style={{ animationDelay: '15s' }}>
            <div className="w-36 h-18 bg-white rounded-full blur-xl"></div>
          </div>
        </div>
        
        {/* Cloud layer 3 - medium speed */}
        <div className="absolute w-full h-full">
          <div className="absolute top-1/2 animate-drift-medium opacity-15" style={{ animationDelay: '7s' }}>
            <div className="w-44 h-22 bg-white rounded-full blur-2xl"></div>
          </div>
          <div className="absolute bottom-10 right-1/4 animate-drift-medium opacity-20" style={{ animationDelay: '12s' }}>
            <div className="w-52 h-26 bg-white rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-white mb-3" style={{ color: 'white' }}>
            {title}
          </h2>
          <p className="font-raleway text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Clothesline Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* String/Line */}
          <div className="relative mb-4 h-4">
            <div 
              className="absolute top-1/2 left-0 h-1 bg-white/60 shadow-sm transform -translate-y-1/2 transition-all duration-2000 ease-out"
              style={{ width: `${stringLength}%` }}
            >
              {/* String endpoints */}
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white/30 rounded-full"></div>
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white/30 rounded-full"></div>
            </div>
            
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
                  {/* String from line directly to paper clip */}
                  <div 
                    className={`absolute -top-12 left-1/2 w-0.5 bg-white/40 transform -translate-x-1/2 transition-all duration-700 ${
                      isVisible ? 'h-12 opacity-100' : 'h-0 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  ></div>

                  {/* Polaroid Photo Style */}
                  <div
                    className={`relative transform transition-all duration-1000 ${
                      isVisible 
                        ? 'translate-y-0 opacity-100 scale-100 animate-sway' 
                        : 'translate-y-[-100px] rotate-12 opacity-0 scale-75'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 200}ms`,
                      background: 'linear-gradient(135deg, #f9f7f4 0%, #e8e4dd 100%)',
                      boxShadow: isVisible ? '0 8px 16px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.15)' : 'none',
                      border: '1px solid rgba(0,0,0,0.15)',
                      borderRadius: '4px',
                      width: '180px',
                      height: '220px',
                      transformOrigin: 'top center',
                      animationDelay: `${index * 0.3}s`,
                      padding: '12px 12px 40px 12px' // Polaroid-style padding with thick bottom
                    }}
                  >

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

                    {/* Polaroid Photo Area */}
                    <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-white rounded-sm mb-3 flex items-center justify-center relative overflow-hidden">
                      {/* Step number as photo element */}
                      <div className="absolute top-2 right-2 w-6 h-6 bg-white/80 rounded-full flex items-center justify-center shadow-sm">
                        <span className="font-bold text-sm text-cmq-blue">
                          {step.id}
                        </span>
                      </div>
                      
                      {/* Custom content for each step */}
                      {step.id === 1 ? (
                        // Professional booking interface for Step 1
                        <div className="relative flex items-center justify-center">
                          {/* Smartphone with booking interface */}
                          <div className="relative">
                            <div className="w-16 h-24 bg-gray-900 rounded-lg shadow-xl p-1">
                              <div className="w-full h-full bg-white rounded flex flex-col items-center justify-center p-1">
                                {/* Mini calendar icon */}
                                <div className="w-8 h-8 bg-gradient-to-br from-cmq-blue to-blue-600 rounded flex items-center justify-center mb-1">
                                  <Calendar className="h-4 w-4 text-white" />
                                </div>
                                {/* Time slot lines */}
                                <div className="w-full space-y-0.5">
                                  <div className="h-1 bg-gray-200 rounded-full"></div>
                                  <div className="h-1 bg-green-400 rounded-full"></div>
                                  <div className="h-1 bg-gray-200 rounded-full"></div>
                                </div>
                                {/* Confirm button */}
                                <div className="mt-1 w-10 h-2 bg-green-500 rounded-full"></div>
                              </div>
                            </div>
                            {/* Confirmed badge */}
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      ) : step.id === 2 ? (
                        // Professional prep guide with documentation icon for Step 2
                        <div className="relative flex items-center justify-center">
                          <img 
                            src="/images/website media/Icon of documentation and video and a women.png"
                            alt="Documentation and video icon"
                            className="w-20 h-20 object-contain"
                          />
                        </div>
                      ) : step.id === 3 ? (
                        // Fun studio session with lights, camera, and laughing faces for Step 3
                        <div className="relative flex items-center justify-center">
                          <div className="relative">
                            {/* Studio setup container */}
                            <div className="flex items-center gap-2">
                              {/* Left studio light */}
                              <div className="relative">
                                <div className="w-3 h-10 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-lg">
                                  <div className="w-3 h-4 bg-gradient-to-b from-yellow-200 to-white rounded-t-lg animate-pulse"></div>
                                </div>
                                <div className="w-4 h-1 bg-gray-800 rounded-b"></div>
                              </div>
                              
                              {/* Camera in center */}
                              <div className="relative">
                                <div className="w-10 h-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg flex items-center justify-center">
                                  {/* Lens */}
                                  <div className="w-6 h-6 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full border border-gray-500">
                                    <div className="w-full h-full rounded-full flex items-center justify-center">
                                      <div className="w-2 h-2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Happy laughing faces below camera */}
                                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                                  {/* Face 1 - laughing */}
                                  <div className="w-5 h-5 bg-gradient-to-b from-pink-100 to-pink-200 rounded-full relative">
                                    <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-gray-700 rounded-full"></div>
                                    <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-gray-700 rounded-full"></div>
                                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                                      <div className="w-3 h-1.5 border-b border-gray-700 rounded-b-full"></div>
                                    </div>
                                    {/* Joy lines */}
                                    <div className="absolute -top-1 -left-1 text-xs">😄</div>
                                  </div>
                                  
                                  {/* Face 2 - big smile */}
                                  <div className="w-5 h-5 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-full relative">
                                    <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-gray-700 rounded-full"></div>
                                    <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-gray-700 rounded-full"></div>
                                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                                      <div className="w-3 h-1.5 border-b border-gray-700 rounded-b-full"></div>
                                    </div>
                                    {/* Laugh emoji */}
                                    <div className="absolute -top-1 -right-1 text-xs">😊</div>
                                  </div>
                                </div>
                                
                                {/* Flash effect */}
                                <div className="absolute top-1 right-1">
                                  <div className="w-3 h-3 bg-white rounded-full opacity-60 animate-ping"></div>
                                </div>
                              </div>
                              
                              {/* Right studio light */}
                              <div className="relative">
                                <div className="w-3 h-10 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-lg">
                                  <div className="w-3 h-4 bg-gradient-to-b from-yellow-200 to-white rounded-t-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                </div>
                                <div className="w-4 h-1 bg-gray-800 rounded-b"></div>
                              </div>
                            </div>
                            
                            {/* Fun indicator */}
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                              <div className="text-sm">✨</div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Laptop with download gallery for Step 4
                        <div className="relative flex items-center justify-center">
                          <div className="relative">
                            {/* Laptop screen */}
                            <div className="w-24 h-16 bg-gray-900 rounded-t-lg shadow-xl p-1">
                              <div className="w-full h-full bg-white rounded-t flex flex-col p-2">
                                {/* Browser bar */}
                                <div className="h-2 bg-gradient-to-r from-cmq-blue to-blue-600 rounded-full mb-1"></div>
                                
                                {/* Gallery grid */}
                                <div className="grid grid-cols-4 gap-0.5 flex-1">
                                  {[...Array(8)].map((_, i) => (
                                    <div key={i} className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-sm relative">
                                      {i === 0 && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                                        </div>
                                      )}
                                      {i === 3 && (
                                        <div className="absolute inset-0 bg-green-400/30 rounded-sm flex items-center justify-center">
                                          <div className="w-2 h-2 border border-green-500 rounded-sm"></div>
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                                
                                {/* Download button */}
                                <div className="mt-1 h-2 bg-green-500 rounded-full flex items-center justify-center">
                                  <Download className="h-1.5 w-1.5 text-white" />
                                </div>
                              </div>
                            </div>
                            
                            {/* Laptop base */}
                            <div className="w-28 h-1 bg-gray-800 rounded-b-lg"></div>
                            
                            {/* Success badge */}
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Subtle photo grain effect */}
                      <div 
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                          backgroundSize: '200px 200px'
                        }}
                      ></div>
                    </div>

                    {/* Polaroid Caption Area */}
                    <div className="text-center space-y-1">
                      <p className="font-raleway text-xs font-semibold text-cmq-gray-darker leading-tight">
                        {step.title}
                      </p>
                      <p className="font-raleway text-xs text-cmq-gray-dark leading-tight opacity-80">
                        {step.description}
                      </p>
                    </div>

                    {/* Polaroid-style vintage effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-50/20 pointer-events-none rounded-sm"></div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Final message when all cards are visible */}
          {visibleSteps.length === steps.length && (
            <div className="text-center mt-8">
              <div 
                className="inline-block bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20 animate-fadeIn"
                style={{ animationDelay: '2s' }}
              >
                <p className="font-raleway text-white text-base font-medium">
                  Click here to book your session! 📸✨
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
            transform: rotate(-4deg) translateX(-3px);
          }
          25% { 
            transform: rotate(2deg) translateX(2px);
          }
          50% { 
            transform: rotate(4deg) translateX(3px);
          }
          75% { 
            transform: rotate(-2deg) translateX(-2px);
          }
          100% { 
            transform: rotate(-4deg) translateX(-3px);
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
        
        @keyframes drift {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(calc(100vw + 100px));
          }
        }
        
        @keyframes drift-slow {
          0% {
            transform: translateX(-200px);
          }
          100% {
            transform: translateX(calc(100vw + 200px));
          }
        }
        
        @keyframes drift-medium {
          0% {
            transform: translateX(-150px);
          }
          100% {
            transform: translateX(calc(100vw + 150px));
          }
        }
        
        .animate-drift {
          animation: drift 20s linear infinite;
        }
        
        .animate-drift-slow {
          animation: drift-slow 35s linear infinite;
        }
        
        .animate-drift-medium {
          animation: drift-medium 25s linear infinite;
        }
      `}</style>
    </section>
  )
}