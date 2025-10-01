import Image from 'next/image'

interface FullWidthSectionProps {
  title: string
  subtitle?: string
  description: string
  ctaText?: string
  ctaLink?: string
  backgroundImage?: string
  backgroundColor?: string
  textColor?: string
  titleColor?: string
  textAlign?: 'left' | 'center' | 'right'
  overlayOpacity?: number
  contentImage?: string
  contentImageAlt?: string
  contentImages?: { src: string; alt: string; caption?: string }[]
}

export default function FullWidthSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
  backgroundColor = '#ffffff',
  textColor = '#333333',
  titleColor,
  textAlign = 'center',
  overlayOpacity = 0.7,
  contentImage,
  contentImageAlt,
  contentImages
}: FullWidthSectionProps) {
  const sectionStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : { backgroundColor }

  return (
    <section className="w-full relative" style={sectionStyle}>
      {/* Overlay for background images */}
      {backgroundImage && (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: backgroundColor,
            opacity: overlayOpacity
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 py-16 px-8 max-w-6xl mx-auto">
        <div className={`text-${textAlign}`} style={{ color: textColor }}>
          {subtitle && (
            <p className="font-raleway text-sm uppercase tracking-wider mb-4 opacity-80">
              {subtitle}
            </p>
          )}

          <h2 className="font-raleway text-3xl lg:text-5xl font-bold mb-8 leading-tight" style={{ color: titleColor || textColor }}>
            {title}
          </h2>

          <div className="text-lg lg:text-xl leading-relaxed mb-10 max-w-4xl mx-auto">
            {description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          {contentImage && (
            <div className="mb-10 relative w-full max-w-4xl mx-auto" style={{ aspectRatio: '16/9' }}>
              <Image
                src={contentImage}
                alt={contentImageAlt || ""}
                fill
                className="rounded-lg shadow-lg object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          )}

          {contentImages && contentImages.length > 0 && (
            <div className="mb-10 space-y-6">
              {contentImages.map((image, index) => (
                <div key={index} className="relative w-full max-w-4xl mx-auto" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="rounded-lg shadow-lg object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                  {image.caption && (
                    <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded font-raleway text-sm font-semibold z-10">
                      {image.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {ctaText && ctaLink && (
            <div>
              <a
                href={ctaLink}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-raleway font-semibold px-8 py-4 rounded-lg transition-colors duration-300 text-lg"
                style={{ backgroundColor: '#5a81b9' }}
              >
                {ctaText}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}