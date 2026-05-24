'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Phone, MapPin, Clock, Instagram, Linkedin, Facebook, Mail } from 'lucide-react'
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
            <p className="font-raleway text-lg font-semibold mb-4 text-white">Contact Info</p>
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
                  4405 W Phalen Dr<br />Phoenix, AZ 85087
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
              <a href="https://www.facebook.com/CMQHeadshots/" target="_blank" rel="noopener noreferrer" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110" aria-label="Follow me on Facebook">
                <Facebook className="h-8 w-8" />
              </a>
              <a href="https://www.instagram.com/cmqheadshots/" target="_blank" rel="noopener noreferrer" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110" aria-label="Follow me on Instagram">
                <Instagram className="h-8 w-8" />
              </a>
              <a href="https://www.linkedin.com/in/cmqheadshots/" target="_blank" rel="noopener noreferrer" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110" aria-label="Connect with me on LinkedIn">
                <Linkedin className="h-8 w-8" />
              </a>
              <a href="https://www.pinterest.com/cmqheadshots/" target="_blank" rel="noopener noreferrer" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110" aria-label="Follow me on Pinterest">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
              <a href="https://www.google.com/maps/place/CMQ+Headshots/@33.8760108,-112.156965,17z/data=!3m1!4b1!4m6!3m5!1s0x872c9f6f61d9d319:0xfe597c46938a00b!8m2!3d33.8760108!4d-112.1543901!16s%2Fg%2F11fd4xkbn1?hl=en&entry=ttu" target="_blank" rel="noopener noreferrer" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110" aria-label="View CMQ Headshots on Google Business Profile">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11.5A2.5 2.5 0 0 1 9.5 9 2.5 2.5 0 0 1 12 6.5 2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"/></svg>
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
            <p className="font-raleway text-lg font-semibold mb-4 text-white">Quick Links</p>
            <ul className="space-y-2 font-raleway text-[16px]">
              <li><FooterLink href="/">Headshots Phoenix</FooterLink></li>
              <li><FooterLink href="/about">About Me</FooterLink></li>
              <li><FooterLink href="/contact-us">Contact Me</FooterLink></li>
              <li><FooterLink href="/phoenix-business-headshots">Business Headshots</FooterLink></li>
              <li><FooterLink href="/linkedin-headshots">LinkedIn Headshots</FooterLink></li>
              <li><FooterLink href="/actor-headshots-phoenix">Actor Pricing</FooterLink></li>
              <li><FooterLink href="/realtor-headshots-phoenix">Realtor Headshots</FooterLink></li>
              <li><FooterLink href="/lawyer-headshots-phoenix">Lawyer Headshots</FooterLink></li>
              <li><FooterLink href="/eras-medical-headshots">ERAS Medical Headshots</FooterLink></li>
              <li><FooterLink href="/corporate-staff-headshots">Group Headshots</FooterLink></li>
              <li><FooterLink href="/team-composite-headshots">Team Composites</FooterLink></li>
              <li><FooterLink href="/reviews">Reviews</FooterLink></li>
              <li><FooterLink href="/blog">Blogs</FooterLink></li>
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
              <a href="https://www.facebook.com/CMQHeadshots/" target="_blank" rel="noopener noreferrer" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110" aria-label="Follow me on Facebook">
                <Facebook className="h-8 w-8" />
              </a>
              <a href="https://www.instagram.com/cmqheadshots/" target="_blank" rel="noopener noreferrer" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110" aria-label="Follow me on Instagram">
                <Instagram className="h-8 w-8" />
              </a>
              <a href="https://www.linkedin.com/in/cmqheadshots/" target="_blank" rel="noopener noreferrer" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110" aria-label="Connect with me on LinkedIn">
                <Linkedin className="h-8 w-8" />
              </a>
              <a href="https://www.pinterest.com/cmqheadshots/" target="_blank" rel="noopener noreferrer" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110" aria-label="Follow me on Pinterest">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
              <a href="https://www.google.com/maps/place/CMQ+Headshots/@33.8760108,-112.156965,17z/data=!3m1!4b1!4m6!3m5!1s0x872c9f6f61d9d319:0xfe597c46938a00b!8m2!3d33.8760108!4d-112.1543901!16s%2Fg%2F11fd4xkbn1?hl=en&entry=ttu" target="_blank" rel="noopener noreferrer" className="text-cmq-blue hover:text-white transition-colors transform hover:scale-110" aria-label="View CMQ Headshots on Google Business Profile">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11.5A2.5 2.5 0 0 1 9.5 9 2.5 2.5 0 0 1 12 6.5 2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"/></svg>
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
            <p className="font-raleway text-lg font-semibold mb-4 text-white">Contact Info</p>
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
                  4405 W Phalen Dr<br />Phoenix, AZ 85087
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
            <p className="font-raleway text-lg font-semibold mb-4 text-white">Quick Links</p>
            <ul className="space-y-2 font-raleway text-[16px]">
              <li><FooterLink href="/">Headshots Phoenix</FooterLink></li>
              <li><FooterLink href="/about">About Me</FooterLink></li>
              <li><FooterLink href="/contact-us">Contact Me</FooterLink></li>
              <li><FooterLink href="/phoenix-business-headshots">Business Headshots</FooterLink></li>
              <li><FooterLink href="/linkedin-headshots">LinkedIn Headshots</FooterLink></li>
              <li><FooterLink href="/actor-headshots-phoenix">Actor Pricing</FooterLink></li>
              <li><FooterLink href="/realtor-headshots-phoenix">Realtor Headshots</FooterLink></li>
              <li><FooterLink href="/lawyer-headshots-phoenix">Lawyer Headshots</FooterLink></li>
              <li><FooterLink href="/eras-medical-headshots">ERAS Medical Headshots</FooterLink></li>
              <li><FooterLink href="/corporate-staff-headshots">Group Headshots</FooterLink></li>
              <li><FooterLink href="/team-composite-headshots">Team Composites</FooterLink></li>
              <li><FooterLink href="/reviews">Reviews</FooterLink></li>
              <li><FooterLink href="/blog">Blogs</FooterLink></li>
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