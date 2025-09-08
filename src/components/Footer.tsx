import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Mail } from 'lucide-react'
import LogoModern from './LogoModern'
import GetPricingButton from './GetPricingButton'

export default function Footer() {
  return (
    <footer className="text-cmq-white" style={{
      backgroundColor: '#383838',
      backgroundImage: 'url("/images/website media/grey linen-background.jpg")',
      backgroundRepeat: 'repeat',
      backgroundSize: 'auto'
    }}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div>
            <h3 className="font-raleway text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cmq-blue transition-all duration-300 hover:animate-[vibrate_0.6s_ease-in-out]" />
                <a href="sms:+14806483429" className="font-raleway text-sm text-white hover:text-cmq-blue transition-colors">
                  (480) 648-3429
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cmq-blue transition-all duration-300 hover:scale-125" />
                <a href="mailto:Cindy@CMQHeadshots.com" className="font-raleway text-sm text-white hover:text-cmq-blue transition-colors">
                  Cindy@CMQHeadshots.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-cmq-blue mt-0.5 transition-all duration-300 hover:scale-125 hover:-translate-y-1" />
                <a href="https://www.google.com/maps/dir/33.8759082,-112.1542941/4405+W+Phalen+Dr,+Phoenix,+AZ/@33.8760712,-112.1569246,17z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x872c9e72a581d4fd:0xe0205aad575d70f7!2m2!1d-112.1544037!2d33.8760267!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="font-raleway text-sm text-white hover:text-cmq-blue transition-colors">
                  4405 W. Phalen Dr.<br />Phoenix, Az 85087
                </a>
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
                <Link href="/pricing-individual" className="text-white hover:text-cmq-blue transition-colors">
                  Business Pricing
                </Link>
              </li>
              <li>
                <Link href="/pricing-actor" className="text-white hover:text-cmq-blue transition-colors">
                  Actor Pricing
                </Link>
              </li>
              <li>
                <Link href="/corporate-staff-headshots" className="text-white hover:text-cmq-blue transition-colors">
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
              <a href="https://www.facebook.com/CMQHeadshots" target="_blank" rel="noopener noreferrer" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/cmqheadshots/" target="_blank" rel="noopener noreferrer" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/cmqheadshots/" target="_blank" rel="noopener noreferrer" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <div className="mb-4 flex justify-center">
              <span className="inline-block bg-white/10 text-white border border-white/30 px-3 py-1 rounded-full text-xs font-raleway font-medium">
                20% Off for Military & First Responders
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="font-raleway text-sm text-white">
              © <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600' }}>CMQ</span> HEADSHOTS 2025 | All Rights Reserved
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