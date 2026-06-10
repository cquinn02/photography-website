/**
 * Google Analytics Event Tracking Utility
 *
 * Use this to track button clicks, image interactions, and other user events
 */

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void
  }
}

export interface TrackEventParams {
  action: string
  category: string
  label?: string
  value?: number
}

/**
 * Track a custom event in Google Analytics
 *
 * @example
 * trackEvent({
 *   action: 'click',
 *   category: 'button',
 *   label: 'pricing_home_hero'
 * })
 */
export function trackEvent({ action, category, label, value }: TrackEventParams) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    })

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 GA Event:', { action, category, label, value })
    }
  }
}

/**
 * Track a button click
 *
 * @example
 * trackButtonClick('pricing_home_hero', '/pricing')
 */
export function trackButtonClick(label: string, destination?: string) {
  trackEvent({
    action: 'click',
    category: 'button',
    label: destination ? `${label}_to_${destination}` : label
  })
}

/**
 * Track an image interaction
 *
 * @example
 * trackImageClick('hero_homepage')
 */
export function trackImageClick(label: string) {
  trackEvent({
    action: 'click',
    category: 'image',
    label
  })
}

/**
 * Track a link click
 *
 * @example
 * trackLinkClick('footer_contact', '/contact')
 */
export function trackLinkClick(label: string, destination: string) {
  trackEvent({
    action: 'click',
    category: 'link',
    label: `${label}_to_${destination}`
  })
}

/**
 * Track a booking/appointment click to Acuity (as.me / acuityscheduling.com).
 * Fires the EXISTING `book_headshot_session` GA4 key event (already configured
 * as a conversion in the property but previously never firing) — bookings
 * complete off-site, so this click is the closest measurable booking signal.
 *
 * @example
 * trackBookingClick('https://cmqheadshots.as.me/ERASHeadshot')
 */
export function trackBookingClick(destination: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'book_headshot_session', {
      destination,
      source_page: window.location.pathname,
    })
  }
}

/**
 * Track a form submission
 *
 * @example
 * trackFormSubmit('contact_form')
 */
export function trackFormSubmit(label: string) {
  trackEvent({
    action: 'submit',
    category: 'form',
    label
  })
}
