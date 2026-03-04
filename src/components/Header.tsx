'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import LogoModern from './LogoModern'

const servicesMenu = [
  { label: 'Business Headshots', href: '/phoenix-business-headshots' },
  { label: 'Actor Headshots', href: '/actor-headshots-phoenix' },
  { label: 'Realtor Headshots', href: '/realtor-headshots-phoenix' },
  { label: 'LinkedIn Headshots', href: '/linkedin-headshots' },
  { label: 'Corporate/Staff', href: '/corporate-staff-headshots' },
  { label: 'Team Composites', href: '/team-composite-headshots' },
]

interface HeaderProps {
  showContact?: boolean
}

export default function Header({ showContact = false }: HeaderProps) {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on route change (resize)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
        setMobileServicesOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 200)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}
      style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mobile Layout */}
        <div className={`lg:hidden flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
          <Link href="/" prefetch={false} className="flex items-center">
            <LogoModern variant="light" size="small" layout="horizontal" />
          </Link>

          {/* Hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col" style={{ fontFamily: 'Raleway, sans-serif' }}>
              {/* Services accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full py-3 px-2 text-white text-base uppercase tracking-wider border-b border-white/20"
                style={{ fontWeight: '400', letterSpacing: '0.08em' }}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="pl-4">
                  {servicesMenu.map((item) => {
                    const isCurrentPage = router.pathname === item.href
                    return isCurrentPage ? (
                      <span
                        key={item.href}
                        className="block py-2.5 px-2 text-cmq-blue text-sm"
                        style={{ fontFamily: 'Raleway, sans-serif', fontWeight: '400', letterSpacing: '0.04em' }}
                      >
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        prefetch={false}
                        onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false) }}
                        className="block py-2.5 px-2 text-white/90 text-sm hover:text-white transition-colors"
                        style={{ fontFamily: 'Raleway, sans-serif', fontWeight: '400', letterSpacing: '0.04em' }}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
              )}

              {showContact && (
                <Link
                  href="/contactus"
                  prefetch={false}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-2 text-white text-base uppercase tracking-wider border-b border-white/20"
                  style={{ fontWeight: '400', letterSpacing: '0.08em' }}
                >
                  Contact
                </Link>
              )}
            </nav>
          </div>
        )}

        {/* Desktop Layout */}
        <div className={`hidden lg:flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
          {/* Logo */}
          <Link href="/" prefetch={false} className="flex items-center">
            <LogoModern variant="light" size={isScrolled ? "small" : "medium"} layout="horizontal" />
          </Link>

          {/* Nav + Button */}
          <div className="flex items-center gap-8">
            {/* Navigation */}
            <nav className="flex items-center gap-6">
              {/* Services dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-2 text-white uppercase text-xl tracking-wider transition-colors hover:text-cmq-blue"
                  style={{ fontFamily: 'Raleway, sans-serif', fontWeight: '600', letterSpacing: '0.08em' }}
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown panel */}
                <div
                  className={`absolute top-full left-0 mt-2 w-56 rounded-lg shadow-xl overflow-hidden transition-all duration-200 origin-top ${
                    servicesOpen
                      ? 'opacity-100 scale-y-100 pointer-events-auto'
                      : 'opacity-0 scale-y-95 pointer-events-none'
                  }`}
                  style={{ backgroundColor: '#575757' }}
                >
                  {servicesMenu.map((item, index) => {
                    const isCurrentPage = router.pathname === item.href
                    return isCurrentPage ? (
                      <span
                        key={item.href}
                        className={`block px-5 py-3 text-cmq-blue text-sm ${
                          index < servicesMenu.length - 1 ? 'border-b border-white/10' : ''
                        }`}
                        style={{ fontFamily: 'Raleway, sans-serif', fontWeight: '400', letterSpacing: '0.04em' }}
                      >
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        prefetch={false}
                        onClick={() => setServicesOpen(false)}
                        className={`block px-5 py-3 text-white/90 text-sm hover:bg-[#5577a5] hover:text-white transition-colors ${
                          index < servicesMenu.length - 1 ? 'border-b border-white/10' : ''
                        }`}
                        style={{ fontFamily: 'Raleway, sans-serif', fontWeight: '400', letterSpacing: '0.04em' }}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
              {showContact && (
                <Link
                  href="/contactus"
                  prefetch={false}
                  className="text-white uppercase text-xl tracking-wider transition-colors hover:text-cmq-blue"
                  style={{ fontFamily: 'Raleway, sans-serif', fontWeight: '600', letterSpacing: '0.08em' }}
                >
                  Contact
                </Link>
              )}
            </nav>

          </div>
        </div>

      </div>
    </header>
  )
}
