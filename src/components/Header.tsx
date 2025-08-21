import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import LogoModern from './LogoModern'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="shadow-md" style={{backgroundColor: '#575757'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <LogoModern variant="light" size="medium" layout="horizontal" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-raleway text-white hover:text-cmq-blue px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary px-6 py-2 rounded-md font-raleway text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Book Session
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-cmq-blue transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-cmq-gray-light">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cmq-gray-light">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-raleway text-cmq-gray-dark hover:text-cmq-blue block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary block text-center mx-3 mt-4 px-6 py-2 rounded-md font-raleway text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Session
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}