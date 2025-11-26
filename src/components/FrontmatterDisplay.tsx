'use client'

import { useState } from 'react'

interface FrontmatterDisplayProps {
  frontmatter: Record<string, any>
}

export default function FrontmatterDisplay({ frontmatter }: FrontmatterDisplayProps) {
  const [isOpen, setIsOpen] = useState(true)

  // Only show in development mode
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] font-mono text-sm"
      style={{
        backgroundColor: '#FFF3CD',
        borderBottom: '2px solid #856404',
        color: '#856404'
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left font-bold hover:bg-yellow-200 transition-colors"
      >
        📝 FRONTMATTER (DEV ONLY) {isOpen ? '▼' : '▶'}
      </button>

      {isOpen && (
        <div className="px-4 pb-3 pt-1">
          {Object.keys(frontmatter).length === 0 ? (
            <p className="text-xs italic">No frontmatter available</p>
          ) : (
            <div className="grid gap-1">
              {Object.entries(frontmatter).map(([key, value]) => (
                <div key={key} className="flex gap-2">
                  <span className="font-bold">{key}:</span>
                  <span className="break-all">
                    {typeof value === 'string'
                      ? `"${value.substring(0, 100)}${value.length > 100 ? '...' : ''}"`
                      : JSON.stringify(value)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
