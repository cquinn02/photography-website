import { useState } from 'react'
import Layout from '@/components/Layout'
import FooterOption1 from '@/components/FooterOption1'
import FooterOption2 from '@/components/FooterOption2'
import FooterOption3 from '@/components/FooterOption3'
import FooterOption4 from '@/components/FooterOption4'
import FooterOption5 from '@/components/FooterOption5'

export default function FooterShowcase() {
  const [selectedFooter, setSelectedFooter] = useState(1)

  const footerOptions = [
    { id: 1, name: 'Minimalist Surprise', description: 'Clean & simple with hidden easter eggs' },
    { id: 2, name: 'Split Personality', description: 'Professional meets fun with gradient animation' },
    { id: 3, name: 'Floating Cards', description: 'Modern cards with parallax effects' },
    { id: 4, name: 'Timeline Journey', description: 'Interactive milestones with animations' },
    { id: 5, name: 'Playful Grid', description: 'Bento-box style with surprises' }
  ]

  const renderFooter = () => {
    switch (selectedFooter) {
      case 1: return <FooterOption1 />
      case 2: return <FooterOption2 />
      case 3: return <FooterOption3 />
      case 4: return <FooterOption4 />
      case 5: return <FooterOption5 />
      default: return <FooterOption1 />
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-4">Footer Design Showcase</h1>
          <p className="text-center text-gray-600 mb-12">
            Click on each option below to preview different footer designs
          </p>

          {/* Footer Selector */}
          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {footerOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedFooter(option.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedFooter === option.id
                    ? 'border-cmq-blue bg-cmq-blue text-white shadow-lg scale-105'
                    : 'border-gray-300 bg-white hover:border-cmq-blue hover:shadow-md'
                }`}
              >
                <h3 className="font-bold mb-1">Option {option.id}</h3>
                <p className="text-sm">{option.name}</p>
                <p className="text-xs mt-2 opacity-75">{option.description}</p>
              </button>
            ))}
          </div>

          {/* Preview Instructions */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-yellow-800">
              <strong>💡 Interactive Features to Try:</strong>
            </p>
            <ul className="text-sm text-yellow-700 mt-2 space-y-1">
              <li>• Option 1: Click logo 3 times for confetti, hover the copyright text</li>
              <li>• Option 2: Watch the gradient shift and fun facts rotate</li>
              <li>• Option 3: Hover cards to see them float, check the random tip</li>
              <li>• Option 4: Hover timeline dots to see milestones</li>
              <li>• Option 5: Click testimonials and mystery block</li>
            </ul>
          </div>

          {/* Sample Content */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Sample Page Content</h2>
            <p className="text-gray-600 mb-4">
              This is sample content to show how the footer looks at the bottom of a page. 
              Scroll down to see your selected footer design in action!
            </p>
            <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Page Content Area</p>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Footer */}
      {renderFooter()}
    </>
  )
}