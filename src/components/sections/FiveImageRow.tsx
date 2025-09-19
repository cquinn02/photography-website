interface FiveImageRowProps {
  images: {
    src: string
    alt: string
  }[]
  title?: string
  subtitle?: string
  backgroundColor?: string
  fullWidth?: boolean
  borderColor?: string
}

export default function FiveImageRow({
  images,
  title,
  subtitle,
  backgroundColor = '#ffffff',
  fullWidth = true,
  borderColor = '#00b4d8'
}: FiveImageRowProps) {

  // Handle undefined images prop
  if (!images || !Array.isArray(images)) {
    console.warn('FiveImageRow: images prop is required and must be an array')
    return null
  }

  // Show up to 4 images
  if (images.length < 4) {
    console.warn('FiveImageRow: At least 4 images recommended for best display')
  }

  const sectionStyle = backgroundColor?.startsWith('url(')
    ? { backgroundImage: backgroundColor, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor }

  return (
    <section className="w-full py-8" style={sectionStyle}>
      <div className={fullWidth ? 'w-full px-4' : 'container mx-auto px-4'}>
        {/* Optional Title Section */}
        {(title || subtitle) && (
          <div className="text-center mb-8 px-4">
            {subtitle && (
              <p className="font-raleway text-sm uppercase tracking-wider text-cmq-gray-dark mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="font-raleway text-3xl lg:text-4xl font-bold text-cmq-blue">
                {title}
              </h2>
            )}
          </div>
        )}

        {/* Five Images in a Row - Edge to Edge */}
        <div className="flex flex-wrap md:flex-nowrap">
          {images.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className="w-1/2 md:w-1/4 relative overflow-hidden"
              style={{
                aspectRatio: '4/5',
                minHeight: '450px'
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                style={index === 3 ? { objectPosition: '100% 5%', transform: 'scale(1.1) translateX(20px)' } : {}}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}