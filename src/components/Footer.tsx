import Image from 'next/image'
import { Phone, MapPin, Clock } from 'lucide-react'

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
                <Phone className="h-4 w-4 text-white transition-all duration-300 hover:animate-[vibrate_0.6s_ease-in-out]" />
                <span className="font-raleway text-sm text-white">(480) 648-3429</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1" />
                <span className="font-raleway text-sm text-white">Phoenix, Arizona</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-white mt-0.5 transition-all duration-300 hover:scale-125 hover:rotate-12" />
                <div className="font-raleway text-sm text-white">
                  <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 11:00 AM - 2:00 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-raleway text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 font-raleway text-sm text-white">
              <li>Professional Headshots</li>
              <li>Business Portraits</li>
              <li>Executive Photography</li>
              <li>LinkedIn Headshots</li>
              <li>Actor Headshots</li>
            </ul>
          </div>

          {/* About */}
          <div className="text-center md:text-left">
            <div className="mb-4 flex justify-center md:justify-start">
              <Image
                src="/images/White transparent.png"
                alt="CMQ Headshots"
                width={200}
                height={60}
                className="h-14 w-auto transition-all duration-300 hover:animate-bounce hover:scale-105 cursor-pointer"
                priority
              />
            </div>
            <p className="font-raleway text-sm text-white leading-relaxed">
              Professional headshot photography in Phoenix and Scottsdale. 
              Comfortable, easy headshots you&apos;re going to love.
            </p>
            <div className="mt-4">
              <span className="inline-block bg-white/10 text-white border border-white/30 px-3 py-1 rounded-full text-xs font-raleway font-medium">
                20% Off for Military & First Responders
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-center font-raleway text-sm text-white">
            © {new Date().getFullYear()} CMQ Headshots - Cindy Quinn Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}