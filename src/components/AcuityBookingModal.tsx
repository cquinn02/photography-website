interface AcuityBookingModalProps {
  src: string
  title: string
  isOpen: boolean
  onClose: () => void
}

/**
 * Controlled Acuity scheduling modal — same overlay/iframe pattern as
 * AcuityBookingFacade, but with an external trigger so a page can keep its
 * own custom "Book" button. Iframe only mounts while open (no Acuity JS until then).
 */
export default function AcuityBookingModal({ src, title, isOpen, onClose }: AcuityBookingModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg w-full max-w-2xl mx-4"
        style={{ height: '85vh', maxHeight: '900px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
          aria-label="Close scheduling modal"
        >
          <span className="text-2xl leading-none" style={{ color: '#383838' }}>&times;</span>
        </button>

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
  )
}
