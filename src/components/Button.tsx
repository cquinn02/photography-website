import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'ghost'
  size?: 'small' | 'medium' | 'large' | 'xl'
  className?: string
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  uppercase?: boolean
  external?: boolean
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
  fullWidth = false,
  type = 'button',
  disabled = false,
  uppercase = true,
  external = false
}: ButtonProps) {
  
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
    
    // Conditional styles
    fullWidth && 'w-full',
    uppercase && 'uppercase tracking-wide',
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  ]
  
  // Size classes - all use 22px font size
  if (size === 'small') classes.push('px-4', 'py-2')
  else if (size === 'medium') classes.push('px-6', 'py-3')
  else if (size === 'large') classes.push('px-8', 'py-4')
  else if (size === 'xl') classes.push('px-10', 'py-5')
  
  // Add consistent 22px font size for all buttons
  classes.push('!text-[22px]')
  
  // Variant classes
  if (variant === 'primary') {
    classes.push(
      'bg-cmq-blue',
      'text-white',
      'border',
      'border-cmq-blue',
      'hover:bg-cmq-gray-dark',
      'hover:border-cmq-gray-dark',
      'hover:shadow-lg',
      'hover:scale-105'
    )
  } else if (variant === 'secondary') {
    classes.push(
      'bg-cmq-gray-light',
      'text-cmq-gray-darker',
      'border',
      'border-cmq-gray-light',
      'hover:bg-cmq-gray-dark',
      'hover:text-white',
      'hover:border-cmq-gray-dark',
      'hover:shadow-lg',
      'hover:scale-105'
    )
  } else if (variant === 'outline') {
    classes.push(
      'bg-transparent',
      'text-cmq-blue',
      'border-2',
      'border-cmq-blue',
      'hover:bg-cmq-gray-dark',
      'hover:text-white',
      'hover:border-cmq-gray-dark',
      'hover:shadow-lg',
      'hover:scale-105'
    )
  } else if (variant === 'white') {
    classes.push(
      'bg-white',
      'text-cmq-blue',
      'border',
      'border-white',
      'hover:bg-cmq-gray-dark',
      'hover:text-white',
      'hover:border-cmq-gray-dark',
      'hover:shadow-lg',
      'hover:scale-105'
    )
  } else if (variant === 'ghost') {
    classes.push(
      'bg-transparent',
      'text-cmq-gray-dark',
      'border',
      'border-transparent',
      'hover:bg-cmq-gray-light',
      'hover:text-cmq-gray-darker'
    )
  }
  
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
          style={{ fontWeight: '400' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundImage = 'url("/images/website media/grey linen-background.jpg")';
            e.currentTarget.style.backgroundRepeat = 'repeat';
            e.currentTarget.style.backgroundSize = 'auto';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundImage = 'none';
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
        style={{ fontWeight: '400' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundImage = 'url("/images/website media/grey linen-background.jpg")';
          e.currentTarget.style.backgroundRepeat = 'repeat';
          e.currentTarget.style.backgroundSize = 'auto';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundImage = 'none';
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
      style={{ fontWeight: '400' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundImage = 'url("/images/website media/grey linen-background.jpg")';
        e.currentTarget.style.backgroundRepeat = 'repeat';
        e.currentTarget.style.backgroundSize = 'auto';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundImage = 'none';
      }}
    >
      {children}
    </button>
  )
}