import { useState, useCallback } from 'react'

interface AcuityBookingFacadeProps {
  src: string
  title: string
}

export default function AcuityBookingFacade({ src, title }: AcuityBookingFacadeProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  return (
    <>
      {/* Facade: styled card with booking button — zero Acuity JS until click */}
      <div
        className="bg-white border-2 border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center text-center px-6 py-12"
        style={{ minHeight: '400px' }}
      >
        <p className="font-raleway text-5xl lg:text-6xl mb-4" style={{ color: '#5577a5', fontWeight: '500' }}>
          Ready to Book?
        </p>
        <p className="font-raleway text-xl lg:text-2xl mb-10 max-w-md" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.6' }}>
          Click on the button to see my availability and pick the date and time that works best for you.
        </p>
        <button
          onClick={openModal}
          className="font-raleway text-xl lg:text-2xl px-10 py-5 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden"
          style={{
            backgroundColor: '#5577a5',
            color: '#ffffff',
            fontWeight: '500',
            letterSpacing: '0.08em',
          }}
        >
          <span className="relative z-10">SCHEDULE YOUR SESSION</span>
          <span
            className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite]"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            }}
          />
        </button>
      </div>

      {/* Modal overlay with Acuity iframe — only loads when user clicks */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg w-full max-w-2xl mx-4"
            style={{ height: '85vh', maxHeight: '900px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
              aria-label="Close scheduling modal"
            >
              <span className="text-2xl leading-none" style={{ color: '#383838' }}>&times;</span>
            </button>

            {/* Iframe — src only set when modal opens */}
            <iframe
              src={src}
              title={title}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="payment"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  )
}
