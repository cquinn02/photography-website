import { useState } from 'react'
import Image from 'next/image'
import { Phone, MapPin, Instagram, Facebook, Linkedin, Smile } from 'lucide-react'

export default function FooterOption5() {
  const [revealedJoke, setRevealedJoke] = useState(false)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  
  const testimonials = [
    "Best headshots I've ever had! - Sarah M.",
    "Cindy made me feel so comfortable - John D.",
    "My LinkedIn profile never looked better! - Mike R.",
    "Professional and fun experience - Lisa K."
  ]

  const joke = "Why did the photographer get kicked out of the party? They kept shooting everyone! 📸"

  const handleTestimonialClick = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <footer className="bg-gradient-to-br from-cmq-gray-darker to-cmq-blue/30 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-auto">
          
          {/* Large Logo Block */}
          <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <Image
              src="/images/White transparent.png"
              alt="CMQ Headshots"
              width={200}
              height={60}
              className="h-16 w-auto mx-auto group-hover:animate-bounce cursor-pointer"
            />
            <p className="text-center mt-4 font-raleway text-sm">
              Phoenix&apos;s Premier Headshot Photographer
            </p>
          </div>

          {/* Contact Block */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:rotate-3 transform">
            <Phone className="h-6 w-6 mb-2 mx-auto hover:animate-[vibrate_0.6s_ease-in-out]" />
            <p className="text-xs text-center font-raleway">(480) 648-3429</p>
          </div>

          {/* Location Block */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-rotate-3 transform">
            <MapPin className="h-6 w-6 mb-2 mx-auto hover:animate-bounce" />
            <p className="text-xs text-center font-raleway">Phoenix, AZ</p>
          </div>

          {/* Testimonial Block - Medium */}
          <div 
            onClick={handleTestimonialClick}
            className="col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105 transform"
          >
            <p className="text-sm font-raleway italic text-center animate-fadeIn" key={testimonialIndex}>
              &ldquo;{testimonials[testimonialIndex]}&rdquo;
            </p>
            <p className="text-xs text-center mt-2 opacity-50">Click for more →</p>
          </div>

          {/* Social Icons */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex justify-center space-x-2">
              <Instagram className="h-5 w-5 hover:animate-wiggle cursor-pointer" />
              <Facebook className="h-5 w-5 hover:animate-wiggle cursor-pointer" style={{ animationDelay: '0.1s' }} />
              <Linkedin className="h-5 w-5 hover:animate-wiggle cursor-pointer" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>

          {/* Mystery Block */}
          <div 
            onClick={() => setRevealedJoke(!revealedJoke)}
            className="bg-gradient-to-br from-yellow-400/20 to-pink-400/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:from-yellow-400/30 hover:to-pink-400/30 transition-all duration-300 cursor-pointer transform hover:scale-110"
          >
            {revealedJoke ? (
              <div className="text-xs text-center animate-bounceIn">
                {joke}
              </div>
            ) : (
              <div className="text-center">
                <Smile className="h-6 w-6 mx-auto mb-1 animate-pulse" />
                <p className="text-xs">Click me!</p>
              </div>
            )}
          </div>

          {/* Special Offer Block */}
          <div className="col-span-2 bg-gradient-to-r from-cmq-blue to-cmq-blue/50 rounded-2xl p-4 border border-white/20 hover:shadow-xl transition-all duration-300">
            <p className="text-sm font-raleway font-bold text-center">
              20% Off Military & First Responders
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="font-raleway text-xs opacity-70">
            © 2025 CMQ Headshots - Capturing confidence since 2012
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.5); }
          60% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-bounceIn {
          animation: bounceIn 0.5s ease-out;
        }
      `}</style>
    </footer>
  )
}