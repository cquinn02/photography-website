# Typography & Style Guide

## H1 (Hero Headings)
- **Font family**: Raleway (`font-raleway`)
- **Desktop size**: `text-6xl` to `text-7xl` (60-72px)
- **Mobile size**: `text-4xl` to `text-5xl` (36-48px)
- **Font weight**: Mixed medium/light pattern
  - Bold words: `font-medium` (500) with `fontWeight: '500'`
  - Light words: `font-light` (300) with `fontWeight: '300'`
- **Color**: White (`#ffffff`) on hero overlays, Blue (`#5577a5`) on white backgrounds
- **Text shadow**: `1px 1px 3px rgba(0, 0, 0, 0.4)` for overlays
- **Line height**: `leading-tight`
- **Alignment**: `text-center`

**Example:**
```tsx
<h1 className="font-raleway text-5xl md:text-6xl lg:text-7xl leading-tight" style={{
  color: '#ffffff',
  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)'
}}>
  <span className="font-medium" style={{ fontWeight: '500' }}>CORPORATE STAFF</span><br />
  <span className="font-light" style={{ fontWeight: '300' }}>HEADSHOTS</span>
</h1>
```

## H2 (Section Headings)
- **Font family**: Raleway (`font-raleway`)
- **Size**: `text-3xl lg:text-4xl` (default)
  - Small: `text-2xl lg:text-3xl`
  - Large: `text-4xl lg:text-5xl`
- **Font weight**: Mixed bold/normal pattern — DO NOT use `font-medium` (500) for the bold word; the contrast with `font-normal` (400) is too subtle in Raleway and looks flat.
  - Bold words: `font-bold` (700)
  - Normal words: `font-normal` (400)
- **Color**: Blue (`#5577a5` or `text-cmq-blue`) on light backgrounds, white on dark backgrounds
- **Alignment**: `text-center`
- **Margin bottom**: `mb-6`

**Example:**
```tsx
<h2 className="font-raleway text-3xl lg:text-4xl" style={{ color: '#5577a5' }}>
  <span className="font-bold">STAFF HEADSHOTS</span> <span className="font-normal">IN PHOENIX AND SCOTTSDALE ARIZONA</span>
</h2>
```

## Body Text
- **Font family**: Raleway (`font-raleway`)
- **Size**: `text-xl` (20px)
- **Font weight**: `font-normal` (400) with `fontWeight: '400'`
- **Letter spacing**: `letterSpacing: '0.03em'`
- **Line height**: `lineHeight: '1.6'`
- **Color**:
  - Dark backgrounds: White or `text-white`
  - Light backgrounds: Dark gray (`text-cmq-gray-dark` or `text-cmq-gray-darker`)
- **Alignment**: Usually `text-center` on mobile, varies on desktop

**Example:**
```tsx
<p className="font-raleway text-xl font-normal" style={{
  fontWeight: '400',
  letterSpacing: '0.03em',
  lineHeight: '1.6'
}}>
  Your content here
</p>
```

## Buttons (GetPricingButton)
- **Font family**: Raleway (`font-raleway`)
- **Font weight**: `font-normal` (400)
- **Text transform**: `uppercase`
- **Letter spacing**: `tracking-wide`
- **Colors**: Background `#5577a5`, Text white, Border `#5577a5`
- **Hover**: Background `#575757`, Border `#ffffff`, Transform `scale(1.05)`
- **Shadow**: `0 4px 8px rgba(0, 0, 0, 0.3)`
- **Sizes**: Small `px-6 py-3 text-base` | Medium `px-8 py-4 text-lg` | Large `px-8 py-4 text-[22px]`

## CTA Buttons (Primary)
```tsx
<Link
  href="/contact"
  className="font-raleway inline-block text-white px-8 py-4 text-lg font-normal transition-colors rounded-lg uppercase"
  style={{ backgroundColor: '#5577a5' }}
  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#575757'}
  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5577a5'}
>
  Button Text
</Link>
```

## Brand Color Palette

The site uses a **strict five-color palette**. Do not introduce new shades. If you find a color outside this list (e.g. `#F1F1F1`, `#cecfd1`, `#f0f0f0`), it is a legacy mistake — replace it with the closest palette color.

| Color | Hex | Usage |
|---|---|---|
| **Brand blue** | `#5577a5` | H1/H2/H3 text, icons, button backgrounds, accents. **Never used as a section background.** |
| **White** | `#FFFFFF` | Section backgrounds |
| **Light grey** | `#D0D0D0` | Section backgrounds (replaces the deprecated `#F1F1F1`) |
| **Dark grey** | `#575757` | Section backgrounds, button hover, body text on light bg |
| **Very dark** | `#282725` | Section backgrounds for dramatic / dark-mode sections |

### Linen Texture Overlay

The dark grey (`#575757`) sections are typically paired with a linen texture overlay:

```tsx
style={{
  backgroundColor: '#575757',
  backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
  backgroundRepeat: 'repeat',
  backgroundSize: 'auto'
}}
```

### Text Colors

- **Body text on light backgrounds** (`#FFFFFF`, `#D0D0D0`): `#383838`
- **Body text on dark backgrounds** (`#575757`, `#282725`): `#FFFFFF`
- **Headings (H1/H2/H3) on light backgrounds**: `#5577a5` (brand blue)
- **Headings on dark backgrounds**: `#FFFFFF`

> **`#383838` is a text-only color.** Do not use it as a section background. The five palette colors above are the only valid section backgrounds.

### Deprecated — Do Not Use

- `#F1F1F1` — the old "light grey." Replace with `#D0D0D0`.
- `#cecfd1` — accidental near-grey. Replace with `#D0D0D0`.
- `#f0f0f0`, `#e7e7e7`, `#e8e8e8` — outlier shades. Replace with `#D0D0D0` or `#FFFFFF`.

## Hero Image Overlays
- **Desktop**: `bg-black/20` (20% opacity black)
- **Mobile**: No overlay when text is below image
- **Object fit**: `object-cover` for full coverage
- **Object position**: `center` or `top` depending on composition

## Spacing Standards
- **Section padding**: `py-12` to `py-20`
- **Container max-width**: `max-w-7xl` (1280px)
- **Text container width** (mobile): `w-4/5` (80%)
- **Grid gaps**: `gap-8` to `gap-12`
- **Header clearance**: Desktop `pt-[120px]`, Mobile `pt-[100px]`

## Responsive Breakpoints
- **sm**: 640px | **md**: 768px | **lg**: 1024px (primary) | **xl**: 1280px | **2xl**: 1536px
