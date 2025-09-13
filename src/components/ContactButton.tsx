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
    'font-normal',
    'inline-block',
    'text-center',
    'transition-all',
    'duration-300',
    'rounded-lg',
    'uppercase',
    'tracking-wide',
    
    // Contact button specific styles - base only
    'text-white',
    'border',
    'shadow-lg',
    
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
          style={{ 
            fontWeight: '400',
            backgroundColor: '#5a81b9',
            borderColor: '#5a81b9'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#575757'
            e.currentTarget.style.borderColor = '#ffffff'
            e.currentTarget.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#5a81b9'
            e.currentTarget.style.borderColor = '#5a81b9'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          {children}
        </a>
      )
    }
    return (
      <Link 
        href={href} 
        className={buttonClasses} 
        style={{ 
          fontWeight: '400',
          backgroundColor: '#5a81b9',
          borderColor: '#5a81b9'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#575757'
          e.currentTarget.style.borderColor = '#ffffff'
          e.currentTarget.style.transform = 'scale(1.05)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#5a81b9'
          e.currentTarget.style.borderColor = '#5a81b9'
          e.currentTarget.style.transform = 'scale(1)'
        }}
      >
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
      style={{ 
        fontWeight: '400',
        backgroundColor: '#5a81b9',
        borderColor: '#5a81b9'
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = '#575757'
          e.currentTarget.style.borderColor = '#ffffff'
          e.currentTarget.style.transform = 'scale(1.05)'
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = '#5a81b9'
          e.currentTarget.style.borderColor = '#5a81b9'
          e.currentTarget.style.transform = 'scale(1)'
        }
      }}
    >
      {children}
    </button>
  )
}