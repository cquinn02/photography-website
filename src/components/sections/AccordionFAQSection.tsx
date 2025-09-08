import React, { useState } from 'react'

interface FAQ {
  id: number
  question: string
  answer: string
}

interface AccordionFAQSectionProps {
  title?: string
  subtitle?: string
  faqs: FAQ[]
  backgroundColor?: string
  textColor?: string
}

export default function AccordionFAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about our headshot photography services",
  faqs,
  backgroundColor = "white",
  textColor = "#5a81b9"
}: AccordionFAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (id: number) => {
    setOpenItems(prev => {
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
    <section className="py-16" style={{ backgroundColor }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl md:text-4xl font-bold mb-4" style={{ color: textColor }}>
              {title}
            </h2>
            <p className="font-raleway text-lg text-gray-600">
              {subtitle}
            </p>
          </div>

          {/* Accordion Items */}
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openItems.has(faq.id)
              
              return (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Question Header - Clickable */}
                  <button
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <h3 className="font-raleway text-lg font-medium pr-4" style={{ color: textColor }}>
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <svg 
                        className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        style={{ color: textColor }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Answer Content - Collapsible */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <div className="font-raleway text-gray-700 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}