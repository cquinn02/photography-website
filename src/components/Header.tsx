import Link from 'next/link'
import LogoModern from './LogoModern'
import GetPricingButton from './GetPricingButton'

interface HeaderProps {
  buttonText?: string
  buttonLink?: string
  showButton?: boolean
}

export default function Header({ buttonText = "GET PRICING", buttonLink = "/pricing-individual", showButton = true }: HeaderProps) {

  return (
    <header className="sticky top-0 z-50 shadow-md" style={{
      backgroundColor: '#575757',
      backgroundImage: 'url("/images/website media/grey linen-background.jpg")',
      backgroundRepeat: 'repeat',
      backgroundSize: 'auto'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <LogoModern variant="light" size="medium" layout="horizontal" />
            </Link>
          </div>

          {/* GET PRICING Button */}
          <div className="flex items-center">
            {showButton && (
              <GetPricingButton href={buttonLink} size="medium">
                {buttonText}
              </GetPricingButton>
            )}
          </div>

        </div>

      </div>
    </header>
  )
}