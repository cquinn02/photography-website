'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import dynamic from 'next/dynamic'
import 'yet-another-react-lightbox/styles.css'

// Lazy-load only the Lightbox component to reduce initial JS bundle (~1MB savings)
// while allowing the provider (and all page content) to render server-side for SEO
const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false })

// Extend window interface for dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

interface LightboxImage {
  src: string
  alt?: string
  title?: string
}

interface LightboxContextType {
  openLightbox: (images: LightboxImage[], index?: number) => void
  closeLightbox: () => void
}

const LightboxContext = createContext<LightboxContextType | null>(null)

export function useLightbox() {
  const context = useContext(LightboxContext)
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider')
  }
  return context
}

// Helper to push events to GTM dataLayer
const pushToDataLayer = (event: string, data: Record<string, unknown>) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event,
      ...data
    })
  }
}

interface LightboxProviderProps {
  children: ReactNode
}

export default function LightboxProvider({ children }: LightboxProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [images, setImages] = useState<LightboxImage[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = useCallback((newImages: LightboxImage[], index = 0) => {
    setImages(newImages)
    setCurrentIndex(index)
    setIsOpen(true)

    // Track lightbox open event
    const image = newImages[index]
    pushToDataLayer('lightbox_open', {
      image_src: image?.src,
      image_alt: image?.alt,
      image_title: image?.title,
      image_index: index,
      total_images: newImages.length
    })
  }, [])

  const closeLightbox = useCallback(() => {
    setIsOpen(false)

    // Track lightbox close event
    pushToDataLayer('lightbox_close', {
      images_viewed: currentIndex + 1,
      total_images: images.length
    })
  }, [currentIndex, images.length])

  // Track image navigation
  const handleViewChange = useCallback((index: number) => {
    setCurrentIndex(index)
    const image = images[index]

    pushToDataLayer('lightbox_navigate', {
      image_src: image?.src,
      image_alt: image?.alt,
      image_title: image?.title,
      image_index: index,
      total_images: images.length
    })
  }, [images])

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}
      <Lightbox
        open={isOpen}
        close={closeLightbox}
        index={currentIndex}
        slides={images.map(img => ({ src: img.src, alt: img.alt, title: img.title }))}
        on={{ view: ({ index }) => handleViewChange(index) }}
      />
    </LightboxContext.Provider>
  )
}
