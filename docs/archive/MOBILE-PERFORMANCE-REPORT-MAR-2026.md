# Mobile Performance Analysis Report
## www.cmqheadshots.com - Homepage
**Date:** March 9, 2026
**Reported Issue:** 7.49s mobile load time (POOR) per Ubersuggest
**Interactivity (INP):** 125ms (GOOD - threshold is 200ms)
**CLS:** 0.00 (GOOD - threshold is 0.1)

---

## Executive Summary

The 7.49s mobile load time is driven by three compounding factors: (1) an oversized HTML document at 173 KB uncompressed containing 28 SSR-rendered images with full srcSet markup, (2) 559 KB of JavaScript across 13 script files that must be downloaded before hydration, and (3) excessive below-the-fold content rendered eagerly in the initial HTML. The hero image itself is well-optimized at 20 KB for mobile, but the sheer volume of page content creates a long loading waterfall.

---

## 1. LCP Element Identification

**LCP element on mobile:** The hero image served via `<picture>` element.

```
cmq-pro-phoenix-headshots-hero2-mobile-640.webp (20 KB at 640px width)
```

**LCP optimization status: WELL OPTIMIZED**
- Uses `<picture>` with mobile-specific sources (not Next.js Image component)
- Has `fetchPriority="high"` attribute
- Has `<link rel="preload">` with media queries for each breakpoint
- Has `<link rel="preconnect">` to CDN domain
- Image is only 20 KB for mobile (640w WebP)
- Has explicit `width="1920" height="1080"` preventing CLS

The LCP image itself is not the bottleneck. The slow load time comes from everything else on the page.

---

## 2. Image Analysis

### Image Count
- **28 `<img>` tags** rendered in the initial SSR HTML
- **21 unique source images** referenced
- **259 total image URL references** in the HTML (srcSet variants at multiple widths)
- Only **1 image** is non-lazy (the hero). The other 27 have `loading="lazy"`.

### Image Optimization Status
All below-fold images go through Next.js Image optimization (`/_next/image?url=...&w=640&q=75`), which resizes and compresses them on the server. Example:

| Source Image | Source Size | Next.js Optimized (640w) |
|---|---|---|
| professional-headshots-phoenix.jpg | 1.8 MB | ~20 KB |
| Ashley-Actor-collage-of-headshots.webp | 129 KB | Served via /_next/image |
| CMQ-HEADSHOTS-Phoenix-on-location-staff-headshots.webp | 140 KB | Served via /_next/image |

**Finding:** While image optimization is working, the source file `professional-headshots-phoenix.jpg` at 1.8 MB should be replaced with a pre-optimized WebP version on the CDN. If the Next.js image optimization cache is cold, the first request must fetch 1.8 MB from CloudFront, resize it, then serve it -- adding significant TTFB for that image.

### Background Texture Images (Not Lazy Loaded)
The grey linen texture (`grey-linen-background-optimized.webp`, 67 KB) is used as a CSS `background-image` in:
- The header (always visible)
- The review sections (x2)
- The "Why Choose" section
- FAQ sections

CSS background-image does not support `loading="lazy"`. This texture is referenced 5 times via inline styles. The browser will start downloading it as soon as it parses the CSS/inline styles.

---

## 3. Render-Blocking Resources

### JavaScript (13 files, 559 KB uncompressed)
All JS files use `defer` attribute, meaning they do NOT block initial render. However, they block hydration (interactivity). Breakdown:

| File | Size (uncompressed) | Purpose |
|---|---|---|
| framework (React) | 185 KB | React runtime |
| main | 114 KB | Next.js core |
| polyfills | 110 KB | Legacy browser support |
| chunk-6358 | 29 KB | Shared component code |
| chunk-6030 | 27 KB | Shared component code |
| index page | 25 KB | Homepage-specific code |
| chunk-9246 | 17 KB | Shared component code |
| _app | 14 KB | App wrapper |
| chunk-4742 | 12 KB | Shared component code |
| chunk-5721 | 8 KB | Shared component code |
| webpack | 3 KB | Module loader |
| buildManifest | ~1 KB | Route manifest |
| ssgManifest | ~1 KB | SSG manifest |

**Server compression:** Brotli compression is enabled (confirmed via `content-encoding: br` response header). Compressed transfer sizes are significantly smaller.

### CSS (1 file, 60 KB)
Single CSS file with `<link rel="preload" as="style">` hint. This is render-blocking by nature but is preloaded and cached.

### Fonts (2 WOFF2 files)
Both fonts (Raleway and Playfair Display) are preloaded via `<link rel="preload" as="font">` and use `display: swap`. This is correct -- fonts do not block render.

### Google Tag Manager
Loaded via `next/script` with `strategy="afterInteractive"` -- does NOT block initial render. Correct implementation.

**Verdict: No traditional render-blocking resources.** The delay is not from blocking CSS/JS but from the total page weight and network waterfall.

---

## 4. Initial Page Load Resource Analysis

### HTML Document: 173 KB (19 KB compressed)
The HTML is very large for a single page. This is because all sections are server-side rendered with full content, including:

- **4 structured data blocks** (LocalBusiness, WebSite, VideoObject, FAQPage with 10 questions) -- approximately 4 KB of JSON-LD
- **28 images with full srcSet markup** -- each Next.js Image generates 6-11 width variants in the srcSet attribute, creating substantial HTML
- **Duplicate mobile/desktop layouts** -- TwoColumnSection and similar components render both `lg:hidden` and `hidden lg:block` variants, effectively doubling the DOM for those sections
- **Inline styles throughout** -- font-family, font-weight, letter-spacing, line-height repeated on many elements

### Page Structure (Very Long Homepage)
The homepage has approximately 15 visual sections:

1. H1 text section
2. Hero image (picture element)
3. Hero text + 3 CTA buttons
4. TwoColumnSection (Professional Headshots Phoenix)
5. FourStepPolaroid (4-step process)
6. PhoenixBusinessHeadshotsSection
7. FourImageRow (4 headshot images)
8. ThreeReviewSection (3 reviews)
9. VideoSection (video + poster)
10. ThreeReviewSection (3 more reviews)
11. ImageRightTextLeftSection (Corporate Headshots)
12. FAQSection (flip cards)
13. TwoColumnSection (On-Location Staff)
14. "Why Choose" section (3 cards)
15. FAQSection (white background)
16. TwoColumnSection (Actor Headshots)
17. FAQSection (grey)
18. ModelingHeadshotsSection
19. FAQSection (light grey)
20. Services Preview (3 service cards)
21. CTA section

This is an extremely content-heavy homepage. Every section's HTML is in the initial server response even though a mobile user can only see sections 1-3 on first load.

---

## 5. Specific Bottlenecks (Ranked by Impact)

### CRITICAL: HTML Document Size (173 KB uncompressed)
**Impact: HIGH** -- This is the single biggest factor in the 7.49s load time.

The browser must download, parse, and construct the DOM for the entire 173 KB document before it can begin rendering. On a 4G mobile connection (~10 Mbps with 50ms latency), downloading 19 KB compressed takes about 200ms, but parsing and constructing the DOM for 28 images, 20+ sections, and duplicated mobile/desktop layouts takes substantially longer.

Each Next.js Image component generates ~500-1000 bytes of srcSet HTML. With 28 images, that alone is 14-28 KB of image markup.

### HIGH: Duplicate Mobile/Desktop DOM
Components like TwoColumnSection render both layouts:
```html
<!-- Desktop version (hidden on mobile) -->
<div class="hidden lg:grid grid-cols-2">...</div>
<!-- Mobile version (hidden on desktop) -->
<div class="lg:hidden">...</div>
```
This doubles the DOM content for those sections. Mobile users download and parse the desktop layout but never see it.

### MEDIUM: Too Many Below-Fold Sections
21 sections on the homepage means the browser must construct DOM nodes for content that is 5-10 screen heights below the fold. While images are lazy-loaded, the HTML structure, text content, and styles for all sections are in the initial payload.

### MEDIUM: Polyfills Bundle (110 KB)
The `polyfills-42372ed130431b0a.js` file is 110 KB. It uses `noModule` attribute so modern browsers skip it, but this should be verified in actual mobile browser testing. Modern iPhones and Android devices should skip this file entirely.

### LOW: Source Image professional-headshots-phoenix.jpg (1.8 MB)
While Next.js Image optimization handles this correctly in most cases, if the optimization cache is cold (after a new deployment or cache invalidation), the server must fetch 1.8 MB from CloudFront before it can serve the optimized version. Replace the source with a pre-optimized WebP at the CDN.

### LOW: Grey Linen Background Texture
The 67 KB background texture is loaded for the header (always visible). While not large, it adds to the critical path since the header has this as a CSS background-image.

---

## 6. Prioritized Recommendations

### Priority 1: Reduce Below-Fold Content in Initial HTML (Expected Impact: -2 to -3 seconds)

**Option A: Implement lazy-loading sections via Intersection Observer**

Create a `LazySection` wrapper component that only renders its children when the section scrolls near the viewport. This would prevent the browser from constructing DOM for 15+ off-screen sections.

```tsx
// src/components/LazySection.tsx
import { useRef, useState, useEffect, ReactNode } from 'react'

export default function LazySection({ children, height = '600px' }: { children: ReactNode, height?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { rootMargin: '200px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ minHeight: isVisible ? 'auto' : height }}>
      {isVisible ? children : null}
    </div>
  )
}
```

**Trade-off:** This breaks SSR for those sections. Search engines will still see the full SSR content because they execute JavaScript. But if SEO crawlability of below-fold text content is critical, use Option B instead.

**Option B: Split the homepage into above-fold (SSR) and below-fold (dynamic import)**

Use `next/dynamic` with `ssr: false` for sections below the fold. This removes their HTML from the initial server response while still rendering them client-side.

### Priority 2: Eliminate Duplicate Mobile/Desktop DOM (Expected Impact: -20 to -40 KB HTML, -1 second)

Instead of rendering both mobile and desktop layouts for TwoColumnSection, use CSS-only responsive layout within a single DOM structure. This halves the HTML output for those sections.

The current pattern renders the title, description, CTA, and image twice (once in `hidden lg:grid` and once in `lg:hidden`). Refactor to use a single layout that reflows via CSS grid/flexbox.

### Priority 3: Pre-Optimize Source Images on CDN (Expected Impact: -0.5 to -1 second on cold cache)

Replace these unoptimized source files on the CDN with pre-optimized WebP versions:

| Current Source | Size | Action |
|---|---|---|
| professional-headshots-phoenix.jpg | 1.8 MB | Convert to WebP, max 200 KB |
| Ashley-Actor-collage-of-headshots.webp | 129 KB | Already WebP, acceptable |
| CMQ-HEADSHOTS-Phoenix-on-location-staff-headshots.webp | 140 KB | Already WebP, acceptable |

Even though Next.js Image optimization resizes these, the server must fetch the full source from CloudFront on cache miss.

### Priority 4: Reduce Structured Data Size (Expected Impact: -2 KB HTML)

The FAQPage schema contains 10 full questions/answers inline in the HTML. Consider:
- Moving the FAQ schema to a separate JSON file loaded asynchronously
- Or keeping only the 3 most important FAQs in the schema (Google shows a maximum of 3-4 in rich results anyway)

### Priority 5: Compress Header Background Texture (Expected Impact: -50 KB)

The grey linen texture (67 KB) is loaded on every page via the header's inline style. Options:
- Compress to under 10 KB (it is a repeating texture pattern, can be made very small)
- Convert to a CSS gradient that approximates the linen look
- Use a much smaller tile (even 50x50px can tile effectively for linen textures)

### Priority 6: Consider Reducing Font Weights (Expected Impact: -5 to -10 KB)

Raleway is loaded with 5 weights: 300, 400, 500, 700, 900. Review if all 5 are actually needed. Reducing to 3 weights (400, 700, 900) would reduce the font file size.

---

## 7. What Is Already Working Well

- Hero image is excellently optimized (20 KB mobile, preloaded, fetchPriority="high")
- CDN preconnect is in place
- All JS bundles use `defer` (no render blocking)
- Google Tag Manager loads afterInteractive (no render blocking)
- Fonts use `display: swap` and are preloaded
- Brotli compression is enabled server-side
- CLS is 0.00 (all images have dimensions)
- INP is 125ms (well within 200ms threshold)
- Next.js Image optimization is properly configured
- Long cache TTLs (1 year) for static assets
- Only 1 CSS file (no CSS fragmentation)

---

## 8. Expected Results After Optimizations

| Optimization | Current Load | Expected Savings |
|---|---|---|
| Lazy-load below-fold sections | 7.49s | -2 to -3s |
| Eliminate duplicate DOM | 7.49s | -0.5 to -1s |
| Pre-optimize source images | 7.49s | -0.5s (cold cache) |
| Compress background texture | 7.49s | -0.2s |
| **Combined estimate** | **7.49s** | **3 to 4.5s** |
| **Projected load time** | | **3 to 4.5s** |

A load time of 3-4.5s would put the site in the "Needs Improvement" to "Good" range for LCP (threshold is 2.5s for "Good").

To reach the "Good" threshold of 2.5s, the most impactful approach is Priority 1 (lazy-loading below-fold sections), as it eliminates the majority of unnecessary HTML parsing and DOM construction on initial load.

---

## TTFB Analysis

**Measured TTFB: 353ms** (from curl to CloudFront)

This is above the recommended 200ms threshold but acceptable given the SSR nature of the site. The page uses `getStaticProps` so it should be served from cache (SSG). If TTFB is higher for real mobile users (due to cellular latency), this adds to the total load time.

**Recommendation:** Verify in CrUX data that real-user TTFB is under 800ms. If not, consider edge caching via CloudFront's cache behaviors for the HTML response.
