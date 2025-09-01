import Link from 'next/link'
import { ReactNode } from 'react'

interface ContactButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  size?: 'small' | 'medium' | 'large' | 'xl'
  className?: string
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

export default function ContactButton({
  children,
  href,
  onClick,
  size = 'medium',
  className = '',
  fullWidth = false,
  type = 'button',
  disabled = false,
  external = false
}: ContactButtonProps) {
  
  // Build classes array for cleaner concatenation
  const classes = [
    // Base styles
    'font-raleway',
    'font-thin',
    'inline-block',
    'text-center',
    'transition-all',
    'duration-300',
    'rounded-lg',
    'uppercase',
    'tracking-wide',
    
    // Contact button specific styles
    'bg-cmq-blue',
    'text-white',
    'border',
    'border-cmq-blue',
    'hover:bg-cmq-gray-dark',
    'hover:border-cmq-gray-dark',
    'hover:text-white',
    'hover:shadow-lg',
    'hover:scale-105',
    
    // Conditional styles
    fullWidth && 'w-full',
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  ]
  
  // Size classes - all use 22px font size
  if (size === 'small') classes.push('px-4', 'py-2')
  else if (size === 'medium') classes.push('px-6', 'py-3')
  else if (size === 'large') classes.push('px-8', 'py-4')
  else if (size === 'xl') classes.push('px-10', 'py-5')
  
  // Add consistent 22px font size for all buttons
  classes.push('!text-[22px]')
  
  // Add custom className
  if (className) {
    classes.push(...className.split(' '))
  }
  
  // Filter out falsy values and join
  const buttonClasses = classes.filter(Boolean).join(' ')
  
  // If it's a link
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          style={{ fontWeight: '100' }}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={buttonClasses} style={{ fontWeight: '100' }}>
        {children}
      </Link>
    )
  }
  
  // If it's a button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      style={{ fontWeight: '100' }}
    >
      {children}
    </button>
  )
}