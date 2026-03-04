import Image from 'next/image'

interface LogoCarouselProps {
  title?: string
  subtitle?: string
  speed?: number // seconds for one complete scroll
  rowCount?: 1 | 2
  pauseOnHover?: boolean
}

const logos = [
  'American-Express-Logotype-Single-Line.webp',
  'Bell-Bank-logo.png',
  'Calvary-Healing-Center-Logo_retina.webp',
  'chase-bank-ndash-logos-download-181100.png',
  'cranetech.png',
  'denova-logotype-k.svg',
  'dress for success logo.webp',
  'Grasso-Logo-Color-Small-1011754265.png',
  'inside-arm-logo.webp',
  'Ims.svg',
  'Kettlefire.png',
  'maricopa logo.webp',
  'MB-Lockup-Dark-Blue-3049037033.png',
  'Mobivity-logo.webp',
  'north-pointe-logo.webp',
  'north-star-funding.jpeg',
  'Orbis logo.webp',
  'statefarm.png',
  'team-baird-private-wealth-management.jpg',
  'us-bank-logo-png-45997.png',
  'van-tuyl logo.webp',
  'Workforce.png',
  'workforcenow.avif',
  'zinda-logo.png'
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

  const renderLogoRow = (logoSet: string[], scrollDirection: 'left' | 'right', rowKey: string) => (
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
            <div key={`${rowKey}-1-${index}`} className="bg-white p-4 rounded-lg shadow-sm w-40 h-24 flex-shrink-0 hover:shadow-md transition-shadow duration-300 relative">
              <Image
                src={`/images/logos/clients/${logo}`}
                alt={logo.replace(/[-_]/g, ' ').replace(/\.(webp|png|svg|avif|jpg|jpeg)$/i, '')}
                fill
                className="object-contain transition-all duration-300 hover:scale-105 p-2"
                sizes="160px"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex space-x-6 min-w-max">
          {logoSet.map((logo, index) => (
            <div key={`${rowKey}-2-${index}`} className="bg-white p-4 rounded-lg shadow-sm w-40 h-24 flex-shrink-0 hover:shadow-md transition-shadow duration-300 relative">
              <Image
                src={`/images/logos/clients/${logo}`}
                alt={logo.replace(/[-_]/g, ' ').replace(/\.(webp|png|svg|avif|jpg|jpeg)$/i, '')}
                fill
                className="object-contain transition-all duration-300 hover:scale-105 p-2"
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