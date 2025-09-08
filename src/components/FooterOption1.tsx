import { useState } from 'react'
import Image from 'next/image'

export default function FooterOption1() {
  const [hovered, setHovered] = useState(false)
  const [clicks, setClicks] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleLogoClick = () => {
    const newClicks = clicks + 1
    setClicks(newClicks)
    
    if (newClicks === 3) {
      setShowConfetti(true)
      setTimeout(() => {
        setShowConfetti(false)
        setClicks(0)
      }, 3000)
    }
  }

  return (
    <footer className="bg-cmq-gray-darker text-white relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              <div className="text-2xl">🎉</div>
            </div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex flex-col items-center space-y-6">
          <div 
            onClick={handleLogoClick}
            className="cursor-pointer transform transition-all duration-300 hover:scale-110"
          >
            <Image
              src="/images/White transparent.png"
              alt="CMQ Headshots"
              width={180}
              height={54}
              className="h-14 w-auto"
            />
          </div>
          
          <div 
            className="text-center transition-all duration-500"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {hovered ? (
              <p className="font-raleway text-lg animate-fadeIn">
                Making Phoenix smile, one headshot at a time! 📸
              </p>
            ) : (
              <p className="font-raleway text-sm">
                © 2025 <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600' }}>CMQ</span> Headshots - All rights reserved.
              </p>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fall {
          animation: fall linear;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in;
        }
      `}</style>
    </footer>
  )
}