# UI Guidelines

## Brand Colors

| Color | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| CMQ Blue | `#5577a5` | `--cmq-blue` | Primary brand color, headings, buttons, links |
| Gray Dark | `#575757` | `--cmq-gray-dark` | Backgrounds, accents, button hover |
| Gray Darker | `#383838` | `--cmq-gray-darker` | Body text color |
| White | `#FFFFFF` | `--cmq-white` | Backgrounds, text on dark |
| Gray Light | `#f2f2f2` | `--cmq-gray-light` | Alternate section backgrounds |

## Typography

### Fonts
- **Headings**: Raleway (`font-raleway`, `--font-raleway`)
- **Body**: Raleway (`font-raleway`, `--font-raleway`)
- **Accent/Display**: Playfair Display (`font-playfair`, `--font-playfair`) — used sparingly

### H1 — Hero Headings
```tsx
<h1 className="font-raleway text-4xl lg:text-6xl xl:text-7xl leading-tight text-center">
  <span className="font-medium" style={{ fontWeight: '500' }}>BOLD WORDS</span><br />
  <span className="font-light" style={{ fontWeight: '300' }}>LIGHT WORDS</span>
</h1>
```
- Desktop: `text-6xl` to `text-7xl` | Mobile: `text-4xl` to `text-5xl`
- Mixed weight pattern: `font-medium` (500) + `font-light` (300)
- White on hero overlays with `textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)'`
- Blue (`#5577a5`) on white backgrounds

### H2 — Section Headings
```tsx
<h2 className="font-raleway text-3xl lg:text-4xl text-center mb-6" style={{ color: '#5577a5' }}>
  <span className="font-medium">BOLD WORDS</span>{' '}
  <span className="font-normal">NORMAL WORDS</span>
</h2>
```
- Color: Blue (`#5577a5`)
- Mixed weight: `font-medium` (500) + `font-normal` (400)

### Body Text
```tsx
<p className="font-raleway text-xl font-normal" style={{
  fontWeight: '400',
  letterSpacing: '0.03em',
  lineHeight: '1.6'
}}>
```

### Blog H1
```tsx
<h1 className="font-raleway text-3xl lg:text-4xl mb-6 leading-tight text-center uppercase" style={{ color: '#5577a5' }}>
  <span className="font-bold">BOLD PART</span><br />
  <span className="font-normal">NORMAL PART</span>
</h1>
```

## Page Header Pattern — Hero Section

One section, one H1. Swap only the background image for responsive layouts.

> **Image dimensions, file size, and WebP quality are NOT specified here.** The single source of truth for image specs is `docs/claude-templates/image-rules.md`. The example below shows layout structure only.

```tsx
<section className="relative" style={{ height: '100vh', minHeight: '600px', maxHeight: '800px' }}>
  {/* Desktop Background */}
  <div className="hidden lg:block absolute inset-0">
    <Image src="desktop-hero.webp" alt="..." fill className="object-cover" sizes="100vw" priority />
    <div className="absolute inset-0 bg-black/20"></div>
  </div>

  {/* Mobile Background */}
  <div className="lg:hidden absolute inset-0">
    <Image src="mobile-hero.webp" alt="..." fill className="object-cover" sizes="100vw" priority />
    <div className="absolute inset-0 bg-black/20"></div>
  </div>

  {/* Content — ONE H1 */}
  <div className="relative h-full flex flex-col justify-end lg:justify-center lg:items-center pb-16 lg:pb-0 px-6 lg:px-4 text-center">
    <h1 className="font-raleway text-4xl lg:text-6xl xl:text-7xl leading-tight">
      <span className="font-medium">PAGE TITLE</span><br />
      <span className="font-light">SUBTITLE</span>
    </h1>
  </div>
</section>
```

## Section Layout Alternation

Sections alternate between white and light gray backgrounds:
1. White (`#ffffff`)
2. Light gray (`#F1F1F1` or `#f2f2f2`)
3. White
4. Dark gray (`#575757`) with linen texture — for emphasis sections
5. White

Dark gray sections use: `url("/images/website media/grey linen-background.jpg")` with `background-repeat: repeat`.

## Buttons

### Primary CTA Button
```tsx
<Link
  href="/contact"
  className="font-raleway inline-block text-white px-8 py-4 text-lg font-normal transition-colors rounded-lg uppercase"
  style={{ backgroundColor: '#5577a5' }}
  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#575757'}
  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5577a5'}
>
  BUTTON TEXT
</Link>
```

### GetPricingButton Component
- Background: `#5577a5` → Hover: `#575757`
- Border: `#5577a5` → Hover: `#ffffff`
- Shadow: `0 4px 8px rgba(0, 0, 0, 0.3)`
- Hover scale: `scale(1.05)`
- Sizes: small (`px-6 py-3 text-base`), medium (`px-8 py-4 text-lg`), large (`px-8 py-4 text-[22px]`)

## Animation Rules

### Approved
- Button hover transitions: `transition-colors`, `transition: all 0.3s ease`
- Subtle hover scale: `scale(1.05)`
- Button translateY on hover: `translateY(-1px)`

### Prohibited
- No parallax effects
- No scroll-triggered animations (no AOS, no Framer Motion scroll)
- No auto-playing carousels or sliders
- No bouncing, pulsing, or attention-seeking animations
- No page transition animations

## Card Patterns

### FAQ Flip Cards
- Mobile height: `h-[300px]` | Desktop: `h-[400px]`
- Single tap to flip on mobile (no hover handlers on touch)
- Question: `text-xl lg:text-2xl`, `fontWeight: '500'`
- Answer: `text-base lg:text-xl`, `fontWeight: '400'`

## Hard Prohibitions

- Never use `output: 'export'` in next.config.js
- Never add `images.unoptimized` to next.config.js
- Never create an `amplify.yml` file
- Never duplicate H1 tags for desktop/mobile
- Never use `position: sticky` on the header (use `fixed`)
- Never modify the homepage hero image setup (uses width/height props, not fill)
- Never change the 120px header clearance padding
