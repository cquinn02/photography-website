import React, { useState } from 'react'
import GetPricingButton from '../GetPricingButton'

interface FAQ {
  id: number
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  faqs?: FAQ[]
  backgroundColor?: string
  textColor?: string
  showContactCTA?: boolean
}

const defaultFAQs: FAQ[] = [
  {
    id: 1,
    question: "Will you do staff Headshots at our office?",
    answer: "Yes! I offer on-location services for corporate teams. I bring professional lighting and backdrop equipment to create a studio-quality setup at your office location."
  },
  {
    id: 2,
    question: "Do you do outdoor headshot sessions?",
    answer: "Absolutely! I love outdoor headshot sessions. We can capture beautiful natural lighting and create a more relaxed, approachable look for your professional headshots."
  },
  {
    id: 3,
    question: "Do you sell gift cards for Headshot sessions?",
    answer: "Yes! Gift cards make wonderful presents for friends, family, or colleagues who could benefit from professional headshots. Contact me for gift card options and pricing."
  }
]

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about our headshot photography services",
  faqs = defaultFAQs,
  backgroundColor = "#5a81b9",
  textColor = "white",
  showContactCTA = true
}: FAQSectionProps) {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  const toggleCard = (id: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section className="py-20 relative" style={{ 
      backgroundColor, 
      ...(backgroundColor === '#575757' ? {
        backgroundImage: 'url("/images/website media/grey linen-background.jpg")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      } : {}),
      zIndex: 1 
    }}>
      <div className="container mx-auto px-4">
        {/* FAQ Cards - Horizontal Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {faqs.map((faq) => {
              const isFlipped = flippedCards.has(faq.id)
              
              return (
                <div
                  key={faq.id}
                  className="relative cursor-pointer group"
                  style={{ 
                    perspective: '1000px',
                    height: '400px',
                    isolation: 'isolate'
                  }}
                  onClick={() => toggleCard(faq.id)}
                  onMouseEnter={() => !isFlipped && toggleCard(faq.id)}
                  onMouseLeave={() => isFlipped && toggleCard(faq.id)}
                >
                  <div
                    className="absolute inset-0 w-full h-full transition-transform duration-700"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    {/* Front of card - Question */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-lg flex items-center justify-center p-8"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        /* Custom background image */
                        backgroundImage: 'url("/images/website media/vecteezy_abstract-white-background-with-color-gradient-and-modern_48042263.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      <h3 className="font-raleway text-xl font-light text-center" style={{ 
                        color: '#5a81b9',
                        fontWeight: '300',
                        letterSpacing: '0.03em',
                        lineHeight: '1.6',
                        textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                      }}>
                        {faq.question}
                      </h3>
                    </div>
                    
                    {/* Back of card - Answer */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-lg flex items-center justify-center p-8"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        backgroundColor: '#575757',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      <p className="font-raleway text-xl font-light text-white text-center" style={{
                        fontWeight: '300',
                        letterSpacing: '0.03em',
                        lineHeight: '1.6'
                      }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Contact CTA */}
        {showContactCTA && (
          <div className="text-center mt-16">
            <p className="font-raleway mb-6" style={{ color: '#575757' }}>
              Still have questions? I&apos;d love to help!
            </p>
            <GetPricingButton 
              href="/contact" 
              size="large" 
              className={backgroundColor === '#5a81b9' ? 'border-2 border-white' : ''}
            >
              CONTACT ME
            </GetPricingButton>
          </div>
        )}
      </div>
    </section>
  )
}