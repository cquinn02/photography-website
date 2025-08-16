import { useState, useEffect } from 'react'
import { Phone, MapPin, Clock, Camera, Star, Heart } from 'lucide-react'

export default function FooterOption2() {
  const funFacts = [
    "2,847 smiles captured and counting!",
    "12 years of making people look awesome",
    "Zero awkward photos (we delete those!)",
    "Countless confidence boosts delivered",
    "1 photographer who actually makes it fun"
  ]
  
  const [currentFact, setCurrentFact] = useState(0)
  const [gradientPos, setGradientPos] = useState(0)

  useEffect(() => {
    const factInterval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length)
    }, 3000)

    const gradientInterval = setInterval(() => {
      setGradientPos((prev) => (prev + 1) % 360)
    }, 50)

    return () => {
      clearInterval(factInterval)
      clearInterval(gradientInterval)
    }
  }, [])

  return (
    <footer 
      className="text-white relative"
      style={{
        background: `linear-gradient(${gradientPos}deg, #5a81b9 0%, #383838 50%, #5a81b9 100%)`
      }}
    >
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Professional Side */}
          <div className="space-y-4">
            <h3 className="font-raleway text-xl font-bold mb-4">Let's Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-white transition-all duration-300 group-hover:animate-[vibrate_0.6s_ease-in-out]" />
                <span className="font-raleway">(480) 648-3429</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-125" />
                <span className="font-raleway">Phoenix, Arizona</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Clock className="h-5 w-5 text-white transition-all duration-300 group-hover:rotate-12" />
                <span className="font-raleway">Mon-Fri: 9AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Fun Side */}
          <div className="space-y-4 text-right">
            <h3 className="font-raleway text-xl font-bold mb-4">Fun Facts</h3>
            <div className="min-h-[60px] flex items-center justify-end">
              <p className="font-raleway text-lg animate-slideIn" key={currentFact}>
                {funFacts[currentFact]}
              </p>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <Camera className="h-6 w-6 animate-bounce" style={{ animationDelay: '0s' }} />
              <Star className="h-6 w-6 animate-bounce" style={{ animationDelay: '0.2s' }} />
              <Heart className="h-6 w-6 animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="font-raleway text-sm">
            © 2025 CMQ Headshots - Cindy Quinn Photography
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateX(20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
    </footer>
  )
}