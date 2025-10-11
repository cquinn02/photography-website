'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import LogoModern from './LogoModern'
import GetPricingButton from './GetPricingButton'

interface HeaderProps {
  buttonText?: string
  buttonLink?: string
  showButton?: boolean
}

export default function Header({ buttonText = "GET PRICING", buttonLink = "/pricing-individual", showButton = true }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}
      style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("/images/website media/grey linen-background.jpg")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Stacked and Centered */}
        <div className={`lg:hidden flex flex-col items-center gap-2 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
          <Link href="/" prefetch={false} className="flex items-center">
            <LogoModern variant="light" size={isScrolled ? "small" : "small"} layout="horizontal" />
          </Link>
          {showButton && (
            <GetPricingButton href={buttonLink} size="small">
              {buttonText}
            </GetPricingButton>
          )}
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className={`hidden lg:flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
          <Link href="/" prefetch={false} className="flex items-center">
            <LogoModern variant="light" size={isScrolled ? "small" : "medium"} layout="horizontal" />
          </Link>
          {showButton && (
            <GetPricingButton href={buttonLink} size={isScrolled ? "small" : "medium"}>
              {buttonText}
            </GetPricingButton>
          )}
        </div>

      </div>
    </header>
  )
}