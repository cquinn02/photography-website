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
 * Fire a GA4 conversion event reliably. gtag loads lazily (on first user
 * interaction) for PageSpeed, so on pages with no interaction — e.g. the
 * thank-you pages — we nudge the loader and poll briefly until it's ready.
 * The event is stored/reported in GA4; nothing is persisted on the site.
 */
function fireConversion(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  const send = () => {
    if (window.gtag) {
      window.gtag('event', eventName, { source_page: window.location.pathname, ...params })
    }
  }
  if (window.gtag) { send(); return }
  // Nudge the lazy GA4 loader (it listens for scroll/click) then poll up to ~10s.
  try { window.dispatchEvent(new Event('scroll')) } catch { /* no-op */ }
  let tries = 0
  const id = window.setInterval(() => {
    if (window.gtag) { window.clearInterval(id); send() }
    else if (++tries > 50) window.clearInterval(id)
  }, 200)
}

/**
 * Booking conversions are NOT tracked from the site. The entire Acuity booking
 * (date/time, deposit, confirmation) happens inside a cross-origin iframe, so
 * completed bookings are reported to GA4 by Acuity's own Google Analytics
 * integration (Acuity → Integrations → Google Analytics). Tracking clicks here
 * would only measure intent and would inflate the conversion count.
 *
 * Track a completed general inquiry (athankyou page load) — fires the existing
 * `qualify_lead` GA4 key event.
 */
export function trackQualifiedLead(form: string) {
  fireConversion('qualify_lead', { form })
}

/**
 * Track a completed business inquiry (bthank-you page load) — fires the existing
 * `close_convert_lead` GA4 key event.
 */
export function trackConvertedLead(form: string) {
  fireConversion('close_convert_lead', { form })
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
