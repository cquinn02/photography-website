import { useState } from 'react'
import { ChevronRight, Camera, Award, Heart, Rocket, Star } from 'lucide-react'

export default function FooterOption4() {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null)
  
  const milestones = [
    { year: '2012', icon: Camera, text: 'First professional headshot', color: 'bg-blue-500' },
    { year: '2015', icon: Award, text: '1000+ happy clients', color: 'bg-purple-500' },
    { year: '2018', icon: Heart, text: 'Opened Phoenix studio', color: 'bg-pink-500' },
    { year: '2021', icon: Star, text: 'Top rated photographer', color: 'bg-yellow-500' },
    { year: '2024', icon: Rocket, text: 'Still making magic!', color: 'bg-green-500' }
  ]

  return (
    <footer className="bg-cmq-gray-darker text-white relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cmq-blue rounded-full animate-float" />
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-white rounded-full animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-cmq-blue rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 relative z-10">
        <h3 className="text-center font-raleway text-2xl font-bold mb-12">
          My Photography Journey
        </h3>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 right-0 h-1 bg-white/20 top-1/2 transform -translate-y-1/2" />
          
          <div className="flex justify-between items-center relative">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              return (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredDot(index)}
                  onMouseLeave={() => setHoveredDot(null)}
                >
                  {/* Dot */}
                  <div
                    className={`w-4 h-4 ${milestone.color} rounded-full cursor-pointer transform transition-all duration-300 ${
                      hoveredDot === index ? 'scale-150' : ''
                    }`}
                  />
                  
                  {/* Year */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <p className="text-xs font-raleway">{milestone.year}</p>
                  </div>
                  
                  {/* Popup */}
                  {hoveredDot === index && (
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-cmq-gray-darker p-3 rounded-lg shadow-xl whitespace-nowrap animate-bounceIn">
                      <Icon className="h-5 w-5 mx-auto mb-1" />
                      <p className="text-sm font-raleway font-semibold">{milestone.text}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-flex items-center bg-cmq-blue text-white px-6 py-3 rounded-full font-raleway font-medium hover:bg-white hover:text-cmq-blue transition-all duration-300 animate-pulse-slow group"
          >
            Book Your Session
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <div className="mt-12 text-center">
          <p className="font-raleway text-sm opacity-70">
            © 2025 CMQ Headshots - Your story, beautifully captured
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: translate(-50%, 10px) scale(0.5); }
          100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 3s;
        }
        .animate-bounceIn {
          animation: bounceIn 0.3s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}