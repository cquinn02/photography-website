# Google Analytics Event Tracking Guide

## Overview
This guide shows you how to add tracking to all buttons and images on your website so you can see what users are clicking on in Google Analytics.

## Naming Convention

Use this format for tracking labels: `{element}_{page}_{location}`

### Examples:
- **Buttons:**
  - `pricing_home_hero` - Pricing button in hero section on homepage
  - `contact_footer` - Contact button in footer
  - `book_now_sticky` - Book Now button in sticky bar

- **Images:**
  - `hero_home` - Hero image on homepage
  - `gallery_portfolio` - Gallery image on portfolio page
  - `headshot_about` - Headshot on about page

- **Links:**
  - `portfolio_nav` - Portfolio link in navigation
  - `phone_header` - Phone number link in header
  - `facebook_footer` - Facebook link in footer

## How to Add Tracking

### 1. For GetPricingButton Component

Simply add the `trackingLabel` prop:

```tsx
<GetPricingButton
  href="/pricing"
  trackingLabel="pricing_home_hero"
>
  Get Pricing
</GetPricingButton>
```

### 2. For Regular Links

Import the tracking function and add onClick:

```tsx
import { trackLinkClick } from '@/utils/analytics'

<Link
  href="/contact"
  onClick={() => trackLinkClick('contact_footer', '/contact')}
>
  Contact Us
</Link>
```

### 3. For Images

Wrap images in a clickable div with tracking:

```tsx
import { trackImageClick } from '@/utils/analytics'
import Image from 'next/image'

<div
  onClick={() => trackImageClick('hero_home')}
  className="cursor-pointer"
>
  <Image
    src="/images/hero.jpg"
    alt="Hero Image"
    width={1920}
    height={1080}
  />
</div>
```

### 4. For External Links (Phone, Email, Social Media)

```tsx
import { trackLinkClick } from '@/utils/analytics'

{/* Phone Link */}
<a
  href="tel:+14806483429"
  onClick={() => trackLinkClick('phone_header', 'tel:+14806483429')}
>
  (480) 648-3429
</a>

{/* Email Link */}
<a
  href="mailto:info@cmqheadshots.com"
  onClick={() => trackLinkClick('email_contact', 'mailto:info@cmqheadshots.com')}
>
  info@cmqheadshots.com
</a>

{/* Social Media Link */}
<a
  href="https://facebook.com/yourpage"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackLinkClick('facebook_footer', 'https://facebook.com')}
>
  Facebook
</a>
```

### 5. For Form Submissions

```tsx
import { trackFormSubmit } from '@/utils/analytics'

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  trackFormSubmit('contact_form_page')
  // ... rest of form submission logic
}

<form onSubmit={handleSubmit}>
  {/* form fields */}
</form>
```

## Real-World Examples

### Homepage Hero Button
```tsx
<GetPricingButton
  href="/pricing"
  trackingLabel="pricing_home_hero"
  size="xl"
>
  View Pricing & Availability
</GetPricingButton>
```

### Footer Contact Link
```tsx
import { trackLinkClick } from '@/utils/analytics'

<Link
  href="/contact"
  onClick={() => trackLinkClick('contact_footer', '/contact')}
  className="text-white hover:underline"
>
  Contact Us
</Link>
```

### Portfolio Gallery Image
```tsx
import { trackImageClick } from '@/utils/analytics'

<div
  onClick={() => trackImageClick('portfolio_corporate_headshot_1')}
  className="cursor-pointer hover:opacity-90 transition-opacity"
>
  <Image
    src="/images/corporate-headshot-1.jpg"
    alt="Corporate Headshot Example"
    width={800}
    height={1000}
  />
</div>
```

### Sticky Bottom Bar Button
```tsx
<GetPricingButton
  href="/contact"
  trackingLabel="book_now_sticky_bar"
  size="large"
>
  Book Your Session
</GetPricingButton>
```

## Testing Your Tracking

1. **Open your website in Chrome**
2. **Open Developer Console** (F12 or Cmd+Option+I on Mac)
3. **Click on a tracked button or image**
4. **Look for the console log**: `📊 GA Event: { action: 'click', category: 'button', label: 'pricing_home_hero' }`

This log only appears in development mode. In production, events go directly to Google Analytics.

## Viewing Events in Google Analytics

1. Log into Google Analytics 4
2. Go to **Reports** → **Engagement** → **Events**
3. You'll see events with names like:
   - `click` (most common)
   - `submit` (for forms)
4. Click on an event to see the labels (which button/image was clicked)

## Common Tracking Locations

Here's a checklist of elements you should track:

### Header
- [ ] Logo link
- [ ] Navigation menu links
- [ ] Phone number link
- [ ] "Get Pricing" or "Book Now" button

### Hero Sections
- [ ] Main CTA button
- [ ] Hero image (if clickable)
- [ ] Secondary CTA button

### Content Sections
- [ ] All "Learn More" buttons
- [ ] All "View Portfolio" buttons
- [ ] All "Get Started" buttons
- [ ] Gallery images

### Footer
- [ ] All navigation links
- [ ] Phone number
- [ ] Email address
- [ ] Social media links
- [ ] Address/location link

### Sticky Bottom Bar
- [ ] Main CTA button

### Contact Forms
- [ ] Form submission
- [ ] 17hats iframe (if trackable)

## Page-Specific Examples

### Homepage (`/`)
- `pricing_home_hero`
- `portfolio_home_section`
- `testimonials_home_section`
- `contact_home_footer`

### Pricing Page (`/pricing`)
- `book_now_pricing_hero`
- `contact_pricing_cta`
- `faq_pricing_section`

### About Page (`/about`)
- `contact_about_cta`
- `portfolio_about_gallery`

### Contact Page (`/contact`)
- `phone_contact_info`
- `email_contact_info`
- `form_submit_contact`

## Pro Tips

1. **Be Consistent**: Always use the same format for similar elements
2. **Be Descriptive**: Labels should clearly identify what was clicked
3. **Be Specific**: Include page and location in the label
4. **Test Everything**: Click every tracked element and check the console
5. **Review Regularly**: Check Google Analytics weekly to see what's working

## Troubleshooting

**Events not showing in console?**
- Make sure you're in development mode (`pnpm dev`)
- Check that the tracking function is imported
- Verify the `trackingLabel` prop is passed

**Events not showing in Google Analytics?**
- Check that `NEXT_PUBLIC_GA_ID` is set in your environment
- Wait 24-48 hours for data to appear in GA4
- Test in production, not just localhost

**Need Help?**
Contact your developer or refer to the `/src/utils/analytics.ts` file for more details.
