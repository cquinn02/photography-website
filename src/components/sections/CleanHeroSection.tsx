import React from 'react'
import GetPricingButton from '../GetPricingButton'

interface CleanHeroSectionProps {
  backgroundColor?: string
}

export default function CleanHeroSection({
  backgroundColor = '#f5f5f5'
}: CleanHeroSectionProps) {
  return (
    <section className="py-20" style={{ backgroundColor }}>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Hero Text */}
          <div className="mb-12">
            <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl mb-6">
              <div className="mb-2">
                <span 
                  className="word-animate inline-block mr-4"
                  style={{
                    animationDelay: '0s',
                    color: '#5a81b9',
                    fontWeight: '700'
                  }}
                >
                  COMFORTABLE,
                </span>
                <span 
                  className="word-animate inline-block mr-4"
                  style={{
                    animationDelay: '0.6s',
                    color: '#5a81b9',
                    fontWeight: '700'
                  }}
                >
                  EASY
                </span>
                <span 
                  className="word-animate inline-block"
                  style={{
                    animationDelay: '1.2s',
                    color: '#5a81b9',
                    fontWeight: '300'
                  }}
                >
                  HEADSHOTS
                </span>
              </div>
              <div>
                <span 
                  className="word-animate inline-block mr-4"
                  style={{
                    animationDelay: '1.8s',
                    color: '#5a81b9',
                    fontWeight: '300'
                  }}
                >
                  YOU&apos;RE
                </span>
                <span 
                  className="word-animate inline-block mr-4"
                  style={{
                    animationDelay: '2.4s',
                    color: '#5a81b9',
                    fontWeight: '700'
                  }}
                >
                  GOING TO
                </span>
                <span 
                  className="word-animate inline-block"
                  style={{
                    animationDelay: '3.0s',
                    color: '#5a81b9',
                    fontWeight: '700'
                  }}
                >
                  LOVE
                </span>
              </div>
            </h1>
            
            <p className="font-raleway text-xl md:text-2xl leading-relaxed opacity-0 text-gray-700 max-w-3xl mx-auto" 
               style={{
                 animation: 'slideInWord 0.8s ease-out 3.8s forwards'
               }}>
              If you are looking for headshots in Phoenix or Scottsdale, Arizona. I am here to help. Being nervous is normal! I walk you through the process. The end result is, professional headshots that shine with your personality.
            </p>
          </div>
          
          {/* Three Pricing Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-4xl mx-auto opacity-0"
               style={{
                 animation: 'slideInWord 0.8s ease-out 4.6s forwards'
               }}>
            <GetPricingButton href="/pricing-individual" size="large" className="flex-1 max-w-xs">
              INDIVIDUAL RATES
            </GetPricingButton>
            <GetPricingButton href="/corporate-staff-headshots" size="large" className="flex-1 max-w-xs">
              GROUP RATES
            </GetPricingButton>
            <GetPricingButton href="/pricing-actor" size="large" className="flex-1 max-w-xs">
              ACTOR RATES
            </GetPricingButton>
          </div>
        </div>
      </div>
    </section>
  )
}