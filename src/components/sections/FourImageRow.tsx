import Image from 'next/image'

interface FourImageRowProps {
  images: {
    src: string
    alt: string
    flip?: boolean
  }[]
  title?: string
  subtitle?: string
  backgroundColor?: string
  fullWidth?: boolean
  borderColor?: string
}

export default function FourImageRow({
  images,
  title,
  subtitle,
  backgroundColor = '#ffffff',
  fullWidth = true,
  borderColor = '#00b4d8'
}: FourImageRowProps) {

  // Handle undefined images prop
  if (!images || !Array.isArray(images)) {
    console.warn('FourImageRow: images prop is required and must be an array')
    return null
  }

  // Handle undefined images prop
  if (!images || !Array.isArray(images)) {
    console.warn('FourImageRow: images prop is required and must be an array')
    return null
  }

  // Ensure we have exactly 4 images
  if (images.length !== 4) {
    console.warn('FourImageRow requires exactly 4 images')
  }

  const sectionStyle = backgroundColor?.startsWith('url(')
    ? { backgroundImage: backgroundColor, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor }

  return (
    <section className="w-full" style={sectionStyle}>
      <div className={fullWidth ? 'w-full' : 'container mx-auto px-4'}>
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

        {/* Four Images in a Row - Edge to Edge */}
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start">
          {images.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className={`w-4/5 md:w-1/4 relative overflow-hidden ${index >= 2 ? 'hidden md:block' : ''}`}
              style={{
                aspectRatio: '1/1',
                minHeight: '400px'
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover ${image.flip ? 'scale-x-[-1]' : ''}`}
                sizes="(max-width: 768px) 80vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}