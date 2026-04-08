# Image System

## CDN Policy

**Always use the CDN for images. Never use local paths in production code.**

### CDN Base URL
```
https://images.cmqheadshots.com
```

This is a CloudFront distribution backed by an S3 bucket. All website images are served from this CDN.

### Image URL Format
```
https://images.cmqheadshots.com/images/website media/[filename].webp
https://images.cmqheadshots.com/images/blog/optimized/[filename].webp
https://images.cmqheadshots.com/images/logos/clients/[filename].webp
```

### Next.js Image Component
The CDN is configured in `next.config.js` under `images.remotePatterns`:
```js
remotePatterns: [
  {
    protocol: 'https',
    hostname: 'images.cmqheadshots.com',
  },
]
```

### Usage in Components
```tsx
<Image
  src="https://images.cmqheadshots.com/images/website media/example.webp"
  alt="Descriptive alt text"
  fill
  className="object-cover"
  sizes="(max-width: 1024px) 100vw, 50vw"
/>
```

For hero images with known dimensions (no cropping):
```tsx
<Image
  src="https://images.cmqheadshots.com/images/website media/hero.webp"
  alt="Descriptive alt text"
  width={1920}
  height={1080}
  className="w-full h-auto"
  sizes="100vw"
  priority
/>
```

## No-Crop Policy

**Never crop, letterbox, or distort photography images.** These are professional photographs — respect the original composition.

- Use `object-cover` only when the container aspect ratio is close to the image's natural ratio
- Use `object-contain` when you need to show the full image without cropping
- For hero images, use `width`/`height` props with `w-full h-auto` to maintain natural aspect ratio
- Never use `object-fit: fill` (distorts the image)

## Alt Text Standards

Alt text must be descriptive and include relevant keywords naturally.

### Good Examples
- `"Professional corporate headshot of a woman in a navy blazer, Phoenix studio"`
- `"LinkedIn profile photo taken at CMQ Headshots studio in Scottsdale"`
- `"Team of 8 employees posing for corporate staff headshots on location"`

### Bad Examples
- `"image1"` — not descriptive
- `"headshot"` — too generic
- `"Professional Phoenix headshot photographer corporate headshot best headshots"` — keyword stuffing

### Rules
- Describe what is in the photograph
- Include location (Phoenix, Scottsdale) when natural
- Include the type of session (corporate, LinkedIn, actor) when relevant
- Keep under 125 characters
- Never start with "Image of" or "Photo of"

## OpenGraph Images

Always provide the full object format, never a bare URL:
```tsx
ogImage={{
  url: "https://images.cmqheadshots.com/images/website media/example.webp",
  width: 1200,
  height: 630,
  alt: "Descriptive alt text for social sharing"
}}
```

Or as a string prop on the Layout component:
```tsx
<Layout
  ogImage="https://www.cmqheadshots.com/images/website media/example.webp"
>
```

## PageSpeed Image Optimization Checklist

When Google PageSpeed flags an image as oversized, follow ALL steps — not just some:

1. **Read Google's exact message** — note the displayed dimensions (e.g., 410x328)
2. **Convert to WebP** on S3 (new file, never overwrite original JPG)
3. **Set `imageWidth` and `imageHeight`** props to Google's displayed dimensions — this controls the srcset and is what actually fixes the complaint
4. **Update the image URL** in code to point to the `.webp` file on CloudFront
5. **Upload with cache headers**: `Cache-Control: public, max-age=31536000, immutable`
6. **Commit and push immediately**
7. **Verify after deploy** — re-run PageSpeed and confirm the image is no longer flagged

### Why this matters
- Converting JPG to WebP reduces FILE SIZE but not PIXEL DIMENSIONS
- Google's complaint is about dimensions, not format
- The `imageWidth` prop controls the srcset max size — if set to 828 but displayed at 410, the browser downloads 2x more pixels than needed
- Desktop `fill` layout uses deviceSizes independently and is unaffected by imageWidth

### Common mistake
Setting `imageWidth={828}` because that's the source image size. The correct value is the **mobile displayed width** from PageSpeed (e.g., 410).

## Preconnect

The CDN preconnect is configured in `_document.tsx`:
```html
<link rel="preconnect" href="https://images.cmqheadshots.com" />
<link rel="dns-prefetch" href="https://images.cmqheadshots.com" />
```
