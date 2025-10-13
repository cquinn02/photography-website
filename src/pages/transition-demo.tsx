import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const compositeSteps = [
  { src: '/images/website media/ims ind/for website /ims sales-1-bkgrd.webp', label: 'Studio Setup' },
  { src: '/images/website media/ims ind/for website /ims sales-1-bob.webp', label: 'First Team Member' },
  { src: '/images/website media/ims ind/for website /ims sales-2-bob-laura.webp', label: 'Second Member Added' },
  { src: '/images/website media/ims ind/for website /ims sales-3.webp', label: 'Third Member' },
  { src: '/images/website media/ims ind/for website /ims sales-4.webp', label: 'Fourth Member' },
  { src: '/images/website media/ims ind/for website /ims sales-5.webp', label: 'Fifth Member' },
  { src: '/images/website media/ims ind/for website /ims sales-6.webp', label: 'Sixth Member' },
  { src: '/images/website media/ims ind/for website /ims sales-7.webp', label: 'Complete Team Composite' },
]

interface TransitionDemoProps {
  type: 'fade' | 'slide' | 'scale' | 'wipe' | 'instant' | 'flip'
  title: string
}

function TransitionDemo({ type, title }: TransitionDemoProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const playAnimation = () => {
    setIsPlaying(true)
    setCurrentStep(0)
    let step = 0
    const interval = setInterval(() => {
      step++
      if (step >= compositeSteps.length) {
        clearInterval(interval)
        setIsPlaying(false)
      } else {
        setCurrentStep(step)
      }
    }, 800)
  }

  useEffect(() => {
    // Auto-play once on mount
    const timer = setTimeout(() => playAnimation(), 500)
    return () => clearTimeout(timer)
  }, [])

  const getTransitionClasses = () => {
    switch (type) {
      case 'fade':
        return 'transition-opacity duration-700'
      case 'slide':
        return 'transition-all duration-700'
      case 'scale':
        return 'transition-all duration-700'
      case 'wipe':
        return 'transition-all duration-700'
      case 'instant':
        return ''
      case 'flip':
        return 'transition-all duration-700'
      default:
        return 'transition-opacity duration-700'
    }
  }

  const getTransitionStyles = (index: number) => {
    const isActive = index === currentStep

    switch (type) {
      case 'fade':
        return {
          opacity: isActive ? 1 : 0,
          zIndex: isActive ? 1 : 0
        }
      case 'slide':
        return {
          opacity: isActive ? 1 : 0,
          transform: isActive ? 'translateX(0)' : 'translateX(100%)',
          zIndex: isActive ? 1 : 0
        }
      case 'scale':
        return {
          opacity: isActive ? 1 : 0,
          transform: isActive ? 'scale(1)' : 'scale(0.8)',
          zIndex: isActive ? 1 : 0
        }
      case 'wipe':
        return {
          clipPath: isActive ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
          zIndex: isActive ? 1 : 0
        }
      case 'instant':
        return {
          opacity: isActive ? 1 : 0,
          zIndex: isActive ? 1 : 0
        }
      case 'flip':
        return {
          opacity: isActive ? 1 : 0,
          transform: isActive ? 'rotateY(0deg)' : 'rotateY(90deg)',
          zIndex: isActive ? 1 : 0
        }
      default:
        return {
          opacity: isActive ? 1 : 0,
          zIndex: isActive ? 1 : 0
        }
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 bg-gray-100 border-b">
        <h3 className="font-raleway text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <button
          onClick={playAnimation}
          disabled={isPlaying}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm"
        >
          {isPlaying ? 'Playing...' : 'Play Again'}
        </button>
      </div>

      <div className="relative w-full" style={{ aspectRatio: '21/9', minHeight: '200px' }}>
        {compositeSteps.map((step, index) => (
          <div
            key={index}
            className={`absolute inset-0 ${getTransitionClasses()}`}
            style={getTransitionStyles(index)}
          >
            <Image
              src={step.src}
              alt={step.label}
              fill
              className="object-cover"
              sizes="600px"
            />
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center gap-1 p-3 bg-gray-50">
        {compositeSteps.map((_, index) => (
          <div
            key={index}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: index === currentStep ? '32px' : '16px',
              backgroundColor: index <= currentStep ? '#5577a5' : '#d1d5db'
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function TransitionDemoPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-raleway text-4xl font-bold text-gray-900 mb-4">
            Transition Comparison Demo
          </h1>
          <p className="font-raleway text-lg text-gray-600 mb-6">
            Compare different transition styles for the team composite animation
          </p>
          <Link
            href="/corporate-staff-headshots"
            className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            ← Back to Corporate Page
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TransitionDemo type="fade" title="1. Fade (Current)" />
          <TransitionDemo type="slide" title="2. Slide In from Right" />
          <TransitionDemo type="scale" title="3. Scale/Zoom In" />
          <TransitionDemo type="wipe" title="4. Wipe/Reveal Left to Right" />
          <TransitionDemo type="instant" title="5. Instant Cut (No Transition)" />
          <TransitionDemo type="flip" title="6. Flip/Rotate In" />
        </div>

        <div className="mt-12 text-center">
          <p className="font-raleway text-gray-600 mb-4">
            Each animation auto-plays once when you load the page. Click &quot;Play Again&quot; to replay any transition.
          </p>
        </div>
      </div>
    </div>
  )
}
