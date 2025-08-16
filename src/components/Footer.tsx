import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Mail } from 'lucide-react'
import LogoModern from './LogoModern'

export default function Footer() {
  return (
    <footer className="bg-cmq-gray-darker text-cmq-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div>
            <h3 className="font-raleway text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cmq-blue transition-all duration-300 hover:animate-[vibrate_0.6s_ease-in-out]" />
                <span className="font-raleway text-sm text-white">(480) 648-3429</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cmq-blue transition-all duration-300 hover:scale-125" />
                <a href="mailto:Cindy@CMQHeadshots.com" className="font-raleway text-sm text-white hover:text-cmq-blue transition-colors">
                  Cindy@CMQHeadshots.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-cmq-blue mt-0.5 transition-all duration-300 hover:scale-125 hover:-translate-y-1" />
                <span className="font-raleway text-sm text-white">
                  4405 W. Phalen Dr.<br />Phoenix, Az 85087
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-cmq-blue mt-0.5 transition-all duration-300 hover:scale-125 hover:rotate-12" />
                <div className="font-raleway text-sm text-white">
                  <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 11:00 AM - 2:00 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-raleway text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 font-raleway text-sm">
              <li>
                <Link href="/contact" className="text-white hover:text-cmq-blue transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white hover:text-cmq-blue transition-colors">
                  Business Pricing
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white hover:text-cmq-blue transition-colors">
                  Actor Pricing
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white hover:text-cmq-blue transition-colors">
                  Group Headshots
                </Link>
              </li>
              <li>
                <a href="#" className="text-white hover:text-cmq-blue transition-colors">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* About & Social */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <LogoModern variant="light" size="medium" />
            </div>
            <p className="font-raleway text-sm text-white leading-relaxed mb-4">
              Professional headshot photography in Phoenix and Scottsdale. 
              Comfortable, easy headshots you&apos;re going to love.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.006 2.163c-5.025 0-9.1 4.074-9.1 9.1 0 5.026 4.075 9.1 9.1 9.1s9.1-4.074 9.1-9.1c0-5.026-4.075-9.1-9.1-9.1zm4.155 6.22l-4.187 4.187c-.283.283-.742.283-1.025 0l-1.912-1.912c-.283-.283-.283-.742 0-1.025s.742-.283 1.025 0l1.4 1.4 3.675-3.675c.283-.283.742-.283 1.025 0s.283.742 0 1.025z"/>
                </svg>
              </a>
            </div>
            
            <div className="mb-4 flex justify-center">
              <span className="inline-block bg-white/10 text-white border border-white/30 px-3 py-1 rounded-full text-xs font-raleway font-medium">
                20% Off for Military & First Responders
              </span>
            </div>
          </div>
        </div>

        {/* Booking Buttons Row */}
        <div className="mt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#" 
              className="bg-cmq-blue text-white px-6 py-3 rounded-lg font-raleway font-medium hover:bg-white hover:text-cmq-blue border border-cmq-blue transition-all duration-300 transform hover:scale-105"
            >
              Book Zoom
            </a>
            <a 
              href="#" 
              className="bg-cmq-blue text-white px-6 py-3 rounded-lg font-raleway font-medium hover:bg-white hover:text-cmq-blue border border-cmq-blue transition-all duration-300 transform hover:scale-105"
            >
              Book Shoot
            </a>
            <a 
              href="mailto:Cindy@CMQHeadshots.com" 
              className="bg-cmq-blue text-white px-6 py-3 rounded-lg font-raleway font-medium hover:bg-white hover:text-cmq-blue border border-cmq-blue transition-all duration-300 transform hover:scale-105"
            >
              Send Email
            </a>
            <a 
              href="sms:(480)648-3429" 
              className="bg-cmq-blue text-white px-6 py-3 rounded-lg font-raleway font-medium hover:bg-white hover:text-cmq-blue border border-cmq-blue transition-all duration-300 transform hover:scale-105"
            >
              Send Text
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="font-raleway text-sm text-white">
              © CMQ HEADSHOTS 2025 | All Rights Reserved
            </p>
            <div className="flex space-x-4 font-raleway text-sm">
              <a href="#" className="text-white hover:text-cmq-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-cmq-blue transition-colors">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}