import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Phone, MapPin, Clock, Camera, Star, Sparkles } from 'lucide-react'

export default function FooterOption3() {
  const [scrollY, setScrollY] = useState(0)
  const [tip, setTip] = useState('')

  useEffect(() => {
    const tips = [
      "Tip: Smile with your eyes for authentic photos!",
      "Tip: Wear solid colors for timeless headshots",
      "Tip: Get a good night's sleep before your session",
      "Tip: Bring multiple outfit options",
      "Tip: Trust your photographer - that's me! 😊"
    ]
    
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    
    // Random tip on load
    setTip(tips[Math.floor(Math.random() * tips.length)])
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className="bg-gradient-to-br from-cmq-gray-darker via-cmq-blue/20 to-cmq-gray-darker text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Contact Card */}
          <div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            <h3 className="font-raleway font-bold text-lg mb-4 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-yellow-400" />
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <Phone className="h-4 w-4 transition-all duration-300 group-hover:animate-[vibrate_0.6s_ease-in-out]" />
                <span className="text-sm">(480) 648-3429</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-1" />
                <span className="text-sm">Phoenix, Arizona</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Clock className="h-4 w-4 transition-all duration-300 group-hover:rotate-180" />
                <span className="text-sm">Mon-Fri: 9AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Services Card */}
          <div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            style={{ transform: `translateY(${scrollY * 0.03}px)` }}
          >
            <h3 className="font-raleway font-bold text-lg mb-4 flex items-center">
              <Camera className="h-5 w-5 mr-2 text-cmq-blue animate-pulse" />
              Services
            </h3>
            <div className="space-y-2">
              {['Professional Headshots', 'Business Portraits', 'LinkedIn Photos', 'Actor Headshots'].map((service, i) => (
                <div 
                  key={service}
                  className="flex items-center space-x-2 group cursor-pointer"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <Star className="h-3 w-3 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity group-hover:animate-spin" />
                  <span className="text-sm group-hover:text-cmq-blue transition-colors">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About Card */}
          <div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            style={{ transform: `translateY(${scrollY * 0.04}px)` }}
          >
            <div className="mb-4">
              <Image
                src="/images/White transparent.png"
                alt="CMQ Headshots"
                width={140}
                height={42}
                className="h-10 w-auto hover:animate-bounce cursor-pointer"
              />
            </div>
            <p className="text-sm mb-4 italic animate-fadeIn">
              {tip}
            </p>
            <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs">
              20% Off Military & First Responders
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-raleway text-sm opacity-70">
            © 2025 <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600' }}>CMQ</span> Headshots - Making you look amazing since 2012
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </footer>
  )
}