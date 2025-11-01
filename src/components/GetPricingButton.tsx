import Link from 'next/link'
import { ReactNode } from 'react'

interface GetPricingButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  size?: 'small' | 'medium' | 'large' | 'xl'
  className?: string
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
  prefetch?: boolean
}

export default function GetPricingButton({
  children,
  href,
  onClick,
  size = 'medium',
  className = '',
  fullWidth = false,
  type = 'button',
  disabled = false,
  external = false,
  prefetch = false
}: GetPricingButtonProps) {

  // Determine border color based on className prop
  const hasBorderWhite = className.includes('border-white')
  const baseBorderColor = hasBorderWhite ? '#ffffff' : '#5577a5'

  // Build classes array for cleaner concatenation
  const classes = [
    // Base styles
    'font-raleway',
    'font-normal',
    'inline-flex',
    'items-center',
    'justify-center',
    'text-center',
    'transition-all',
    'duration-300',
    'rounded-lg',
    'uppercase',
    'tracking-wide',

    // GetPricing button specific styles - base only
    'text-white',
    'border',
    'shadow-lg',

    // Base colors
    'bg-[#5577a5]',
    `border-[${baseBorderColor}]`,

    // Hover effects using Tailwind
    'hover:bg-[#575757]',
    'hover:border-white',

    // Conditional styles
    fullWidth && 'w-full',
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  ]
  
  // Size classes - all use 22px font size
  if (size === 'small') classes.push('px-4', 'py-2')
  else if (size === 'medium') classes.push('px-6', 'py-3')
  else if (size === 'large') classes.push('px-8', 'py-4')
  else if (size === 'xl') classes.push('px-10', 'py-5')
  
  // Responsive font size - smaller on mobile, larger on desktop
  classes.push('!text-[18px]', 'sm:!text-[22px]')
  
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
            fontWeight: '400'
          }}
        >
          {children}
        </a>
      )
    }
    return (
      <Link
        href={href}
        prefetch={prefetch}
        className={buttonClasses}
        style={{
          fontWeight: '400'
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
        fontWeight: '400'
      }}
    >
      {children}
    </button>
  )
}