'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Phone, MapPin, Clock, Instagram, Linkedin, Mail } from 'lucide-react'
import LogoModern from './LogoModern'
import GetPricingButton from './GetPricingButton'

function FooterLink({ href, children }: { href: string; children: React.ReactNode; }) {
  const router = useRouter()
  const isCurrentPage = router.pathname === href
  if (isCurrentPage) {
    return <span className="text-cmq-blue">{children}</span>
  }
  return (
    <Link href={href} prefetch={false} className="text-white hover:text-cmq-blue transition-colors">
      {children}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="text-cmq-white" style={{
      backgroundColor: '#383838',
      backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
      backgroundRepeat: 'repeat',
      backgroundSize: 'auto',
      paddingBottom: '50px'
    }}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">

          {/* Contact Information - Left */}
          <div className="text-left">
            <h3 className="font-raleway text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 justify-start">
                <Phone className="h-5 w-5 text-cmq-blue transition-all duration-300 hover:animate-[vibrate_0.6s_ease-in-out]" />
                <a href="sms:+14806483429" className="font-raleway text-[16px] text-white hover:text-cmq-blue transition-colors">
                  (480) 648-3429
                </a>
              </div>
              <div className="flex items-center space-x-3 justify-start">
                <Mail className="h-5 w-5 text-cmq-blue transition-all duration-300 hover:scale-125" />
                <a href="mailto:Cindy@CMQHeadshots.com" className="font-raleway text-[16px] text-white hover:text-cmq-blue transition-colors">
                  Cindy@CMQHeadshots.com
                </a>
              </div>
              <div className="flex items-start space-x-3 justify-start">
                <MapPin className="h-5 w-5 text-cmq-blue mt-0.5 transition-all duration-300 hover:scale-125 hover:-translate-y-1" />
                <a href="https://www.google.com/maps/dir/33.8759082,-112.1542941/4405+W+Phalen+Dr,+Phoenix,+AZ/@33.8760712,-112.1569246,17z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x872c9e72a581d4fd:0xe0205aad575d70f7!2m2!1d-112.1544037!2d33.8760267!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="font-raleway text-[16px] text-white hover:text-cmq-blue transition-colors">
                  4405 W. Phalen Dr.<br />Phoenix, Az 85087
                </a>
              </div>
              <div className="flex items-start space-x-3 justify-start">
                <Clock className="h-5 w-5 text-cmq-blue mt-0.5 transition-all duration-300 hover:scale-125 hover:rotate-12" />
                <div className="font-raleway text-[16px] text-white">
                  <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 11:00 AM - 2:00 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo, Tagline & Social - Center */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <LogoModern variant="light" size="large" />
            </div>
            <p className="font-raleway text-[16px] text-white leading-relaxed mb-2">
              Comfortable, easy headshots you&apos;re going to love.
            </p>
            <p className="font-raleway text-[16px] text-white leading-relaxed mb-4">
              Professional headshot photography in<br />Phoenix and Scottsdale, Arizona.
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 mb-4">
              <a href="https://www.instagram.com/cmqheadshots/" target="_blank" rel="noopener noreferrer" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110" aria-label="Follow me on Instagram">
                <Instagram className="h-8 w-8" />
              </a>
              <a href="https://www.linkedin.com/in/cmqheadshots/" target="_blank" rel="noopener noreferrer" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110" aria-label="Connect with me on LinkedIn">
                <Linkedin className="h-8 w-8" />
              </a>
            </div>

            <div className="mb-4 flex justify-center">
              <span className="inline-block bg-white/10 text-white border border-white/30 px-3 py-1 rounded-full text-xs font-raleway font-medium">
                20% Off for Military & First Responders
              </span>
            </div>
          </div>

          {/* Quick Links - Right */}
          <div className="text-right">
            <h3 className="font-raleway text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 font-raleway text-[16px]">
              <li><FooterLink href="/">Headshots Phoenix</FooterLink></li>
              <li><FooterLink href="/about">About Me</FooterLink></li>
              <li><FooterLink href="/contactus">Contact Me</FooterLink></li>
              <li><FooterLink href="/pricing-individual">Business Pricing</FooterLink></li>
              <li><FooterLink href="/linkedin-headshots">LinkedIn Headshots</FooterLink></li>
              <li><FooterLink href="/pricing-actor">Actor Pricing</FooterLink></li>
              <li><FooterLink href="/corporate-staff-headshots">Group Headshots</FooterLink></li>
              <li><FooterLink href="/team-composite-headshots">Team Composites</FooterLink></li>
              <li><FooterLink href="/blog">Blogs</FooterLink></li>
              <li><FooterLink href="/admin">Login</FooterLink></li>
            </ul>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {/* Logo & About First */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <LogoModern variant="light" size="large" />
            </div>
            <p className="font-raleway text-[16px] text-white leading-relaxed mb-2">
              Comfortable, easy headshots you&apos;re going to love.
            </p>
            <p className="font-raleway text-[16px] text-white leading-relaxed mb-4">
              Professional headshot photography in<br />Phoenix and Scottsdale, Arizona.
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 mb-4">
              <a href="https://www.instagram.com/cmqheadshots/" target="_blank" rel="noopener noreferrer" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110" aria-label="Follow me on Instagram">
                <Instagram className="h-8 w-8" />
              </a>
              <a href="https://www.linkedin.com/in/cmqheadshots/" target="_blank" rel="noopener noreferrer" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110" aria-label="Connect with me on LinkedIn">
                <Linkedin className="h-8 w-8" />
              </a>
            </div>

            <div className="mb-4 flex justify-center">
              <span className="inline-block bg-white/10 text-white border border-white/30 px-3 py-1 rounded-full text-xs font-raleway font-medium">
                20% Off for Military & First Responders
              </span>
            </div>
          </div>

          {/* Contact Information Second */}
          <div className="text-center">
            <h3 className="font-raleway text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 justify-center">
                <Phone className="h-5 w-5 text-cmq-blue transition-all duration-300 hover:animate-[vibrate_0.6s_ease-in-out]" />
                <a href="sms:+14806483429" className="font-raleway text-[16px] text-white hover:text-cmq-blue transition-colors">
                  (480) 648-3429
                </a>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <Mail className="h-5 w-5 text-cmq-blue transition-all duration-300 hover:scale-125" />
                <a href="mailto:Cindy@CMQHeadshots.com" className="font-raleway text-[16px] text-white hover:text-cmq-blue transition-colors">
                  Cindy@CMQHeadshots.com
                </a>
              </div>
              <div className="flex items-start space-x-3 justify-center">
                <MapPin className="h-5 w-5 text-cmq-blue mt-0.5 transition-all duration-300 hover:scale-125 hover:-translate-y-1" />
                <a href="https://www.google.com/maps/dir/33.8759082,-112.1542941/4405+W+Phalen+Dr,+Phoenix,+AZ/@33.8760712,-112.1569246,17z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x872c9e72a581d4fd:0xe0205aad575d70f7!2m2!1d-112.1544037!2d33.8760267!3e0!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="font-raleway text-[16px] text-white hover:text-cmq-blue transition-colors">
                  4405 W. Phalen Dr.<br />Phoenix, Az 85087
                </a>
              </div>
              <div className="flex items-start space-x-3 justify-center">
                <Clock className="h-5 w-5 text-cmq-blue mt-0.5 transition-all duration-300 hover:scale-125 hover:rotate-12" />
                <div className="font-raleway text-[16px] text-white">
                  <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 11:00 AM - 2:00 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Third */}
          <div className="text-center">
            <h3 className="font-raleway text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 font-raleway text-[16px]">
              <li><FooterLink href="/">Headshots Phoenix</FooterLink></li>
              <li><FooterLink href="/about">About Me</FooterLink></li>
              <li><FooterLink href="/contactus">Contact Me</FooterLink></li>
              <li><FooterLink href="/pricing-individual">Business Pricing</FooterLink></li>
              <li><FooterLink href="/linkedin-headshots">LinkedIn Headshots</FooterLink></li>
              <li><FooterLink href="/pricing-actor">Actor Pricing</FooterLink></li>
              <li><FooterLink href="/corporate-staff-headshots">Group Headshots</FooterLink></li>
              <li><FooterLink href="/team-composite-headshots">Team Composites</FooterLink></li>
              <li><FooterLink href="/blog">Blogs</FooterLink></li>
              <li><FooterLink href="/admin">Login</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="font-raleway text-[16px] text-white">
              © <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600' }}>CMQ</span> HEADSHOTS {new Date().getFullYear()} | All Rights Reserved
            </p>
            <div className="flex space-x-4 font-raleway text-[16px]">
              <Link href="/privacy-policy" prefetch={false} className="text-white hover:text-cmq-blue transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" prefetch={false} className="text-white hover:text-cmq-blue transition-colors">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}