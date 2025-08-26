# Button Component Template Guide

## Quick Usage

### Import the Button
```tsx
import Button from '@/components/Button'
```

## Basic Examples

### Primary Button (Default)
```tsx
<Button href="/pricing">
  GET PRICING
</Button>
```

### Secondary Button
```tsx
<Button variant="secondary" href="/about">
  Learn More
</Button>
```

### Outline Button
```tsx
<Button variant="outline" href="/contact">
  Contact Us
</Button>
```

### White Button (for dark backgrounds)
```tsx
<Button variant="white" href="/portfolio">
  View Portfolio
</Button>
```

### Ghost Button (subtle)
```tsx
<Button variant="ghost" href="/blog">
  Read More
</Button>
```

## Button Sizes

### Small
```tsx
<Button size="small" href="/pricing">
  Small Button
</Button>
```

### Medium (Default)
```tsx
<Button size="medium" href="/pricing">
  Medium Button
</Button>
```

### Large
```tsx
<Button size="large" href="/pricing">
  Large Button
</Button>
```

### Extra Large
```tsx
<Button size="xl" href="/pricing">
  Extra Large Button
</Button>
```

## Button Actions

### Link Button (Internal)
```tsx
<Button href="/pricing">
  Internal Link
</Button>
```

### External Link Button
```tsx
<Button href="https://google.com" external>
  External Link
</Button>
```

### Click Action Button
```tsx
<Button onClick={() => console.log('Clicked!')}>
  Click Me
</Button>
```

### Submit Button
```tsx
<Button type="submit">
  Submit Form
</Button>
```

## Special Options

### Full Width Button
```tsx
<Button fullWidth href="/pricing">
  Full Width Button
</Button>
```

### Disabled Button
```tsx
<Button disabled>
  Disabled Button
</Button>
```

### No Uppercase
```tsx
<Button uppercase={false}>
  Normal Case Text
</Button>
```

### Custom Classes
```tsx
<Button className="rounded-full shadow-2xl">
  Custom Styled
</Button>
```

## Complete Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | required | Button text/content |
| `href` | string | optional | Link destination |
| `onClick` | function | optional | Click handler |
| `variant` | string | "primary" | Style variant: primary, secondary, outline, white, ghost |
| `size` | string | "medium" | Size: small, medium, large, xl |
| `className` | string | "" | Additional CSS classes |
| `fullWidth` | boolean | false | Make button full width |
| `type` | string | "button" | HTML button type |
| `disabled` | boolean | false | Disable button |
| `uppercase` | boolean | true | Make text uppercase |
| `external` | boolean | false | Open link in new tab |

## Brand Colors Used

- **Primary**: CMQ Blue (#5a81b9)
- **Secondary**: CMQ Gray Light (#f2f2f2)
- **Text Dark**: CMQ Gray Dark (#575757)
- **White**: Pure White (#ffffff)

## Real-World Examples from Your Site

### Hero CTA Button
```tsx
<Button size="xl" href="/contact">
  Schedule Your Session Today
</Button>
```

### Pricing Buttons Row
```tsx
<div className="flex gap-4">
  <Button href="/pricing-individual">
    INDIVIDUAL RATES
  </Button>
  <Button href="/pricing-corporate">
    GROUP RATES
  </Button>
  <Button href="/pricing">
    ACTOR RATES
  </Button>
</div>
```

### Form Submit Button
```tsx
<Button type="submit" size="large" fullWidth>
  Send Message
</Button>
```

### Portfolio View More
```tsx
<Button variant="outline" href="/portfolio">
  View Complete Portfolio
</Button>
```

## Updating TwoColumnSection to Use Button Component

Replace the Link in TwoColumnSection with:
```tsx
import Button from '../Button'

// Then replace the Link with:
{ctaText && ctaLink && (
  <Button href={ctaLink} size="medium">
    {ctaText}
  </Button>
)}
```

## Installation Complete!

The Button component is now ready to use throughout your site with consistent CMQ branding.