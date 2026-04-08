'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import dynamic from 'next/dynamic'
// Lazy-load Lightbox component and its CSS — only loaded when lightbox is opened
const Lightbox = dynamic(
  () => import('yet-another-react-lightbox').then(mod => {
    import('yet-another-react-lightbox/styles.css')
    return mod
  }),
  { ssr: false }
)

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
  }, [])

  const closeLightbox = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleViewChange = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

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
