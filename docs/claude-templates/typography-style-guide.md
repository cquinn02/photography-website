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
- **Font weight**: Mixed medium/normal pattern
  - Bold words: `font-medium` (500)
  - Normal words: `font-normal` (400)
- **Color**: Blue (`#5577a5` or `text-cmq-blue`)
- **Alignment**: `text-center`
- **Margin bottom**: `mb-6`

**Example:**
```tsx
<h2 className="font-raleway text-3xl lg:text-4xl" style={{ color: '#5577a5' }}>
  <span className="font-medium">STAFF HEADSHOTS</span> <span className="font-normal">IN PHOENIX AND SCOTTSDALE ARIZONA</span>
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

## Background Colors & Patterns
- **White sections**: `#ffffff`
- **Light gray sections**: `#F1F1F1`
- **Dark gray sections**: `#575757` with texture
  - Texture: `url("/images/website media/grey linen-background.jpg")`
  - Background repeat: `repeat`
  - Background size: `auto`
- **Darker gray**: `#383838`

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
