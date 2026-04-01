import Image from 'next/image'

interface LogoCarouselProps {
  title?: string
  subtitle?: string
  speed?: number // seconds for one complete scroll
  rowCount?: 1 | 2
  pauseOnHover?: boolean
}

const logos: { file: string; alt: string }[] = [
  { file: 'American-Express-Logotype-Single-Line.webp', alt: 'American Express' },
  { file: 'Bell-Bank-logo.png', alt: 'Bell Bank' },
  { file: 'Calvary-Healing-Center-Logo_retina.webp', alt: 'Calvary Healing Center' },
  { file: 'chase-bank-ndash-logos-download-181100.png', alt: 'Chase Bank' },
  { file: 'cranetech.png', alt: 'CraneTech' },
  { file: 'denova-logotype-k.svg', alt: 'Denova Collaborative Health' },
  { file: 'dress for success logo.webp', alt: 'Dress for Success' },
  { file: 'Grasso-Logo-Color-Small-1011754265.png', alt: 'Grasso Law Firm' },
  { file: 'inside-arm-logo.webp', alt: 'insideARM' },
  { file: 'Ims.svg', alt: 'IMS' },
  { file: 'Kettlefire.png', alt: 'Kettle Fire' },
  { file: 'maricopa logo.webp', alt: 'Maricopa County' },
  { file: 'MB-Lockup-Dark-Blue-3049037033.png', alt: 'MB Financial' },
  { file: 'Mobivity-logo.webp', alt: 'Mobivity' },
  { file: 'north-pointe-logo.webp', alt: 'North Pointe' },
  { file: 'north-star-funding.jpeg', alt: 'North Star Funding' },
  { file: 'Orbis logo.webp', alt: 'Orbis' },
  { file: 'statefarm.png', alt: 'State Farm' },
  { file: 'team-baird-private-wealth-management.jpg', alt: 'Baird Private Wealth Management' },
  { file: 'us-bank-logo-png-45997.png', alt: 'US Bank' },
  { file: 'van-tuyl logo.webp', alt: 'Van Tuyl' },
  { file: 'Workforce.png', alt: 'Workforce' },
  { file: 'workforcenow.avif', alt: 'ADP Workforce Now' },
  { file: 'zinda-logo.png', alt: 'Zinda Law Group' },
  { file: 'Comcast_2024_logo.svg', alt: 'Comcast' },
]

export default function LogoCarousel({
  title = "TRUSTED BY LEADING COMPANIES",
  subtitle = "We've provided professional headshots for teams across various industries",
  speed = 30,
  rowCount = 2,
  pauseOnHover = true
}: LogoCarouselProps) {

  // Split logos for two rows
  const midpoint = Math.ceil(logos.length / 2)
  const firstRowLogos = logos.slice(0, midpoint)
  const secondRowLogos = logos.slice(midpoint)

  const renderLogoRow = (logoSet: typeof logos, scrollDirection: 'left' | 'right', rowKey: string) => (
    <div className="overflow-hidden">
      <div
        className={`flex ${scrollDirection === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'}`}
        style={{
          animation: `scroll-${scrollDirection} ${speed}s linear infinite`,
          willChange: 'transform'
        }}
      >
        {/* First set of logos */}
        <div className="flex space-x-6 min-w-max">
          {logoSet.map((logo, index) => (
            <div key={`${rowKey}-1-${index}`} className="bg-white p-4 rounded-lg shadow-sm w-40 h-24 flex-shrink-0 relative">
              <Image
                src={`https://images.cmqheadshots.com/images/logos/clients/${logo.file}`}
                alt={logo.alt}
                fill
                className="object-contain p-2"
                sizes="160px"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex space-x-6 min-w-max">
          {logoSet.map((logo, index) => (
            <div key={`${rowKey}-2-${index}`} className="bg-white p-4 rounded-lg shadow-sm w-40 h-24 flex-shrink-0 relative">
              <Image
                src={`https://images.cmqheadshots.com/images/logos/clients/${logo.file}`}
                alt={logo.alt}
                fill
                className="object-contain p-2"
                sizes="160px"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <section className="flex items-center" style={{ backgroundColor: '#D0D0D0' }}>
      <div className="container mx-auto px-4 py-8">
        {/* Title Section */}
        {(title || subtitle) && (
          <div className="text-center mb-6">
            {title && (
              <h3 className="font-raleway text-4xl lg:text-5xl font-medium mb-4" style={{ color: '#5577a5', fontWeight: '500' }}>
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-gray-600" style={{ fontSize: '22px' }}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        {/* Logo Carousel */}
        <div className={rowCount === 2 ? 'space-y-8' : ''}>
          {/* First Row - Always scrolls right */}
          {renderLogoRow(firstRowLogos, 'right', 'row1')}
          
          {/* Second Row - Only if rowCount is 2, scrolls left */}
          {rowCount === 2 && renderLogoRow(secondRowLogos, 'left', 'row2')}
        </div>

        {/* And many more text */}
        <div className="text-center mt-4">
          <p className="text-lg font-raleway text-gray-600 italic">
            ...and many many more
          </p>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
          
          @keyframes scroll-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll-right {
            animation: scroll-right ${speed}s linear infinite;
          }
          
          .animate-scroll-left {
            animation: scroll-left ${speed}s linear infinite;
          }
          
          ${pauseOnHover ? `
          .animate-scroll-right:hover,
          .animate-scroll-left:hover {
            animation-play-state: paused;
          }
          ` : ''}
        `}</style>
      </div>
    </section>
  )
}