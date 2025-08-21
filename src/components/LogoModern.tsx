import { useState } from 'react'

interface LogoModernProps {
  variant?: 'light' | 'dark'
  size?: 'small' | 'medium' | 'large'
  animated?: boolean
  layout?: 'stacked' | 'horizontal'
}

export default function LogoModern({ variant = 'light', size = 'medium', animated = true, layout = 'stacked' }: LogoModernProps) {
  const [hovered, setHovered] = useState(false)

  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-4xl', 
    large: 'text-6xl'
  }

  const subSizeClasses = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-lg'
  }

  // Horizontal layout version
  if (layout === 'horizontal') {
    return (
      <div 
        className="inline-block cursor-pointer select-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex flex-col">
          {/* CMQ HEADSHOTS on one line */}
          <div className="flex items-baseline gap-3">
            {/* CMQ Letters */}
            <div className={`${sizeClasses[size]} font-bold relative`}>
              <span 
                className={`inline-block transition-all duration-300 text-cmq-blue ${hovered && animated ? 'transform -translate-x-1' : ''}`}
                style={{ 
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: '400',
                  letterSpacing: '-0.05em',
                  fontStyle: 'normal',
                  fontSize: '1.2em'
                }}
              >
                C
              </span>
              <span 
                className={`inline-block transition-all duration-500 text-cmq-blue ${hovered && animated ? 'transform scale-110' : ''}`}
                style={{ 
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: '400',
                  letterSpacing: '-0.05em',
                  fontStyle: 'normal',
                  fontSize: '1.2em',
                  textShadow: hovered ? `0 0 20px rgba(90,129,185,0.5)` : 'none'
                }}
              >
                M
              </span>
              <span 
                className={`inline-block transition-all duration-300 text-cmq-blue ${hovered && animated ? 'transform translate-x-1' : ''}`}
                style={{ 
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: '400',
                  letterSpacing: '-0.05em',
                  fontStyle: 'normal',
                  fontSize: '1.2em'
                }}
              >
                Q
              </span>
            </div>

            {/* HEADSHOTS text */}
            <div 
              className={`${sizeClasses[size]} transition-all duration-300 ${
                variant === 'light' ? 'text-white' : 'text-cmq-gray-dark'
              }`}
              style={{ 
                fontFamily: 'Raleway, sans-serif',
                fontWeight: '200',
                letterSpacing: '0.05em',
                paddingBottom: '2px'
              }}
            >
              HEADSHOTS
            </div>
          </div>

          {/* EST tagline below */}
          {size !== 'small' && (
            <div 
              className={`text-[10px] mt-1 opacity-60 transition-all duration-500 text-center ${
                variant === 'light' ? 'text-white' : 'text-cmq-gray-dark'
              } ${hovered ? 'opacity-100' : ''}`}
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              EST. 2012 • PHOENIX
            </div>
          )}
        </div>
      </div>
    )
  }

  // Original stacked layout
  return (
    <div 
      className="inline-block cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        {/* Camera lens accent */}
        <div 
          className={`absolute -left-4 top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
            hovered ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
          }`}
        >
          <div className={`w-2 h-2 rounded-full ${variant === 'light' ? 'bg-white' : 'bg-cmq-blue'} opacity-60`} />
          <div className={`w-2 h-2 rounded-full ${variant === 'light' ? 'bg-white' : 'bg-cmq-blue'} opacity-40 mt-1`} />
          <div className={`w-2 h-2 rounded-full ${variant === 'light' ? 'bg-white' : 'bg-cmq-blue'} opacity-20 mt-1`} />
        </div>

        {/* Main Logo Text */}
        <div className="flex flex-col items-center">
          {/* CMQ Letters */}
          <div className={`${sizeClasses[size]} font-bold tracking-wider relative`}>
            <span 
              className={`inline-block transition-all duration-300 ${
                variant === 'light' ? 'text-white' : 'text-cmq-blue'
              } ${hovered && animated ? 'transform -translate-x-1' : ''}`}
              style={{ 
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: '300',
                letterSpacing: '0.1em',
                fontStyle: 'normal'
              }}
            >
              C
            </span>
            <span 
              className={`inline-block transition-all duration-500 ${
                variant === 'light' ? 'text-white' : 'text-cmq-blue'
              } ${hovered && animated ? 'transform scale-110' : ''}`}
              style={{ 
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: '300',
                letterSpacing: '0.1em',
                fontStyle: 'normal',
                textShadow: hovered ? `0 0 20px rgba(90,129,185,0.5)` : 'none'
              }}
            >
              M
            </span>
            <span 
              className={`inline-block transition-all duration-300 ${
                variant === 'light' ? 'text-white' : 'text-cmq-blue'
              } ${hovered && animated ? 'transform translate-x-1' : ''}`}
              style={{ 
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: '300',
                letterSpacing: '0.1em',
                fontStyle: 'normal'
              }}
            >
              Q
            </span>

            {/* Animated underline */}
            <div 
              className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                variant === 'light' ? 'bg-white' : 'bg-cmq-blue'
              } transform origin-left transition-all duration-500 ${
                hovered ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </div>

          {/* HEADSHOTS text */}
          <div 
            className={`${subSizeClasses[size]} tracking-[0.3em] mt-1 font-light transition-all duration-300 ${
              variant === 'light' ? 'text-white' : 'text-cmq-gray-dark'
            } ${hovered && animated ? 'tracking-[0.4em]' : ''}`}
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            HEADSHOTS
          </div>

          {/* Tagline (only shows on medium and large) */}
          {size !== 'small' && (
            <div 
              className={`text-[10px] mt-1 opacity-60 transition-all duration-500 ${
                variant === 'light' ? 'text-white' : 'text-cmq-gray-dark'
              } ${hovered ? 'opacity-100' : ''}`}
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              EST. 2012 • PHOENIX
            </div>
          )}
        </div>

        {/* Camera aperture decoration */}
        <div 
          className={`absolute -right-4 top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
            hovered ? 'rotate-90 scale-110' : 'rotate-0 scale-100'
          }`}
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none"
            className={`${variant === 'light' ? 'text-white' : 'text-cmq-blue'} opacity-40`}
          >
            <path 
              d="M12 2L14.5 7.5L20.5 7.5L15.5 11.5L17.5 17.5L12 13.5L6.5 17.5L8.5 11.5L3.5 7.5L9.5 7.5L12 2Z" 
              stroke="currentColor" 
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}