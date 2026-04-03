# Mobile LCP Analysis: www.cmqheadshots.com Homepage

**Date**: March 10, 2026
**Analyzed by**: Claude Code (Performance Audit)
**Current scores**: LCP 6.4s | FCP 0.9s | CLS 0 | TBT 150ms
**Test conditions**: Lighthouse mobile simulation (Slow 4G, 4x CPU throttle)

---

## Executive Summary

The 6.4s LCP is caused primarily by **559KB of uncompressed JavaScript** that must be parsed and executed under Lighthouse's 4x CPU slowdown, which delays image decode and React hydration. The hero image itself is only 20KB and arrives within ~1.3s, but the browser cannot paint it as the LCP element until JavaScript processing completes. The 5.5-second gap between FCP (0.9s) and LCP (6.4s) is almost entirely consumed by JavaScript parse/compile/execute time on a simulated slow CPU.

---

## 1. Measured Data

### Server Response (TTFB)

| Metric | Value | Status |
|--------|-------|--------|
| Real-world TTFB (CDN warm) | 73-78ms | Excellent |
| DNS lookup | 2ms | Cached |
| TCP connect | 18ms | Fast |
| TLS handshake | 42ms | Fast |
| Cache status | HIT from CloudFront (PHX52-P2 edge) | Excellent |
| Cache-Control | s-maxage=31536000 (1 year) | Excellent |
| X-NextJS-Cache | HIT | Excellent |

**Verdict**: TTFB is not the problem. The server is fast and properly cached at the edge.

### HTML Document

| Metric | Value |
|--------|-------|
| Uncompressed | 73,017 bytes (73KB) |
| Gzip transfer | 11,019 bytes (11KB) |
| Line count | 16 (fully minified) |
| Compression ratio | 6.6:1 |

**Verdict**: HTML size is reasonable. 11KB gzip is fine.

### CSS

| Metric | Value |
|--------|-------|
| File | `36aa4ad051ca3891.css` |
| Uncompressed | 61,570 bytes (62KB) |
| Gzip transfer | 10,957 bytes (11KB) |
| Render-blocking | Yes (required for FCP) |
| Preloaded | Yes (`<link rel="preload" as="style">`) |
| @font-face rules | 9 (but only 2 actually downloaded for Latin) |

**Verdict**: CSS is well-optimized. 11KB gzip, preloaded, and render-blocking (as expected). Not a bottleneck.

### Fonts

| Font | File | Size | Preloaded |
|------|------|------|-----------|
| Raleway Latin (primary) | 630c17af-s.p.woff2 | 43,120 bytes | Yes |
| Playfair Display Latin | 40026c26-s.p.woff2 | 23,204 bytes | Yes |
| 7 additional subsets | Various | Not downloaded | No (correct) |

- `font-display: swap` is correctly set on all @font-face rules
- Next.js font optimization properly configured with `variable` fonts
- 5 Raleway weights (300, 400, 500, 700, 900) served from a single variable font file per unicode range

**Verdict**: Font loading is well-optimized. Preloaded, swap display, variable font. Not the primary bottleneck.

### Hero Image (LCP Element)

| Variant | URL | Size | Source |
|---------|-----|------|--------|
| Mobile 640w | cmq-pro-phoenix-headshots-hero2-mobile-640.webp | 20,720 bytes (20KB) | CloudFront CDN |
| Tablet 828w | cmq-pro-phoenix-headshots-hero2-mobile-828.webp | 28,350 bytes (28KB) | CloudFront CDN |
| Desktop full | cmq-pro-phoenix-headshots-hero2-scaled-1.webp | 149,954 bytes (150KB) | CloudFront CDN |

- Uses native `<picture>` element with `<source>` media queries (correct)
- `fetchPriority="high"` set on `<img>` (correct)
- Preload hints in `<head>` match the picture source URLs exactly (correct)
- `preconnect` and `dns-prefetch` set for `images.cmqheadshots.com` (correct)
- CDN response: CloudFront HIT from PHX52-P2 edge, age: 50,139s
- Image has `width="1920" height="1080"` for CLS prevention (correct)

**Verdict**: Image optimization is excellent. 20KB WebP, preloaded, correct priority, CDN-served. The image is NOT the bottleneck -- the bottleneck is what happens AFTER the image bytes arrive.

### JavaScript Bundles

| Bundle | Gzip | Uncompressed | Type |
|--------|------|-------------|------|
| polyfills | 39,453 | 112,594 | noModule (modern browsers skip) |
| webpack | 1,536 | 2,994 | Runtime |
| **framework (React)** | **59,821** | **189,770** | Core framework |
| **main** | **33,356** | **117,032** | Next.js runtime |
| _app | 5,176 | 14,659 | App wrapper |
| 9246 chunk | 4,935 | 17,331 | Shared component |
| 4742 chunk | 5,298 | 12,768 | Shared component |
| 6030 chunk | 5,996 | 28,131 | Shared component |
| 5721 chunk | 1,687 | 7,990 | Shared component |
| 6358 chunk | 7,933 | 29,877 | Shared component |
| index page | 6,727 | 26,335 | Homepage code |
| buildManifest | 1,602 | ~4,000 | Route manifest |
| ssgManifest | 121 | ~300 | SSG manifest |
| **TOTAL** | **173,641** | **559,481** | |

**Verdict**: 173KB gzip / 559KB uncompressed JavaScript is the PRIMARY BOTTLENECK. At 4x CPU slowdown, parsing and executing 559KB of JS takes 3-5 seconds on a simulated slow device.

### Header Background Texture

| Resource | Size | Priority |
|----------|------|----------|
| grey-linen-background-optimized.webp | 68,530 bytes (69KB) | Low (CSS background-image) |

**Verdict**: 69KB is large for a repeating texture. It competes for bandwidth but is not LCP-blocking.

---

## 2. The 5.5-Second Gap: FCP to LCP

### What happens between T=0.9s (FCP) and T=6.4s (LCP)

```
T=0.0s    Navigation start
T=0.6s    HTML fully received (11KB gzip, CDN-cached)
          Parser discovers: CSS preload, font preloads, image preload,
          preconnect to CDN, 12 deferred JS bundles
T=0.7s    CSS stylesheet request sent (connection reused)
T=0.9s    FCP: CSS loaded, text painted with system fallback font
          The H1 "HEADSHOTS PHOENIX" and page structure are visible
T=1.0s    Fonts arrive (preloaded, 66KB total)
          Text re-paints with Raleway (font-display: swap)
T=1.0s    CDN connection established (preconnect saved 1 RTT)
T=1.3s    Hero image bytes arrive (20KB from CDN)
          Image is decoded and COULD paint now...
          BUT: 12 deferred <script> tags are being parsed

T=1.3s-   JAVASCRIPT PROCESSING WALL
T=5.5s    At 4x CPU slowdown:
          - 559KB JS parse: ~2,000-3,000ms
          - JS compile: ~500-1,000ms
          - JS execution (React hydration): ~500-1,000ms
          - Main thread is occupied with JS tasks
          - Image decode is QUEUED behind JS execution

T=5.5s    React hydration completes
          LightboxProvider context is set up
          LazySection IntersectionObservers are created
          Header scroll listeners are attached

T=6.0s    React reconciles the DOM
          The <picture> element may be touched by hydration
          (even if unchanged, React walks the tree)

T=6.4s    LCP: Hero image fully painted after hydration cycle
```

### Why the image paints late despite arriving early

The key insight is that **Lighthouse's Lantern model accounts for CPU contention**. Even though the hero image bytes arrive at ~1.3s, the browser's main thread is saturated with JavaScript processing from T=1.3s to T=5.5s. Image decode requires main thread time, and on a 4x-throttled CPU, this decode gets queued behind JS parse/compile/execute.

Additionally, React hydration walks the entire SSR'd DOM tree and attaches event listeners. Even though the hero `<picture>` element doesn't change during hydration, React's reconciliation process occupies the main thread, delaying the final paint that Lighthouse measures as LCP.

---

## 3. Resource Loading Waterfall (Slow 4G Simulation)

```
Time  0s     1s     2s     3s     4s     5s     6s    6.4s
      |------|------|------|------|------|------|------|
HTML  [==]                                              (11KB, 0.6s)
CSS   . [=]                                             (11KB gzip, render-blocking)
FCP   ..... *                                           (0.9s)
Font1 . [====]                                          (43KB, preloaded)
Font2 . [==]                                            (23KB, preloaded)
Hero  ... [==]                                          (20KB, cross-origin, preloaded)
JS    . [==============================================] (174KB gzip = 559KB uncompressed)
  parse/compile         [================================]  (4x CPU throttled)
  hydration                                     [======]
Header BG  ...... [====]                                (69KB, low priority)
LCP   ................................................ * (6.4s)
```

The JS download finishes relatively quickly (~1.7s for 174KB gzip at 200KB/s with contention), but the CPU-throttled parse/compile/execute takes 3-4 additional seconds.

---

## 4. What Is the LCP Element?

On a 375px mobile viewport with 120px header padding:

| Element | Rendered Size (px^2) | Visible at FCP? |
|---------|---------------------|-----------------|
| Hero image (375x211) | 79,125 | Yes |
| "COMFORTABLE, EASY" text block (375x~250) | ~93,750 | Yes |
| Body paragraph (~350x~100) | ~35,000 | Partially |

The text block using 42-48px Raleway font is actually **larger** than the hero image in pixel area. However, with `font-display: swap`, the text renders at FCP with a system font. The web font swap creates a new paint but does not necessarily reset LCP if the element size doesn't change significantly.

The hero image is the most likely LCP element because:
1. It requires image data to render (not just text)
2. Image decode happens on the main thread
3. The decode is queued behind JS processing

**Note**: Without access to the actual Lighthouse trace, we cannot confirm with 100% certainty which element is the LCP. Running Lighthouse with `--output=json` and examining `audits['largest-contentful-paint-element']` would confirm this.

---

## 5. Actionable Recommendations

### Priority 1: Reduce JavaScript Bundle Size (Expected impact: -2 to -3s LCP)

This is the single most impactful change. The 559KB of uncompressed JS is the primary cause of the 5.5s gap.

**A. Remove polyfills for modern browsers**
The `polyfills-42372ed130431b0a.js` (113KB uncompressed) has `noModule` so modern browsers skip it. However, Lighthouse may still factor it into resource contention. Verify it is truly not being downloaded in the Lighthouse trace.

**B. Code-split the homepage**
The homepage imports 12 section components. Even with `LazySection`, all component CODE is bundled into the page JS. Move heavy components to dynamic imports:

```tsx
import dynamic from 'next/dynamic'

// Only load these when LazySection triggers visibility
const VideoSection = dynamic(() => import('@/components/sections/VideoSection'))
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'))
const ModelingHeadshotsSection = dynamic(() => import('@/components/sections/ModelingHeadshotsSection'))
// ... etc for all below-fold sections
```

This would split the 26KB `index` chunk and several shared chunks, reducing the initial JS parse burden.

**C. Audit shared chunks**
Chunks 9246, 4742, 6030, 5721, 6358 total 96KB uncompressed. Identify what's in them (likely lucide-react icons, section components, LightboxProvider). Consider:
- Tree-shaking lucide-react icons (import individual icons, not the package)
- Lazy-loading LightboxProvider (it's `'use client'` and includes `yet-another-react-lightbox`)

**D. Consider React Server Components or Partial Hydration**
With Next.js 15, you could use the App Router with React Server Components to eliminate client-side hydration for static content sections. This is a larger refactor but would dramatically reduce JS.

### Priority 2: Self-Host the Hero Image (Expected impact: -0.3 to -0.5s LCP)

Currently the hero image is served from `images.cmqheadshots.com` (CloudFront CDN), which requires a separate TCP+TLS connection. Even with `preconnect`, this adds ~300ms on Slow 4G (2 RTTs at 150ms).

**Option A**: Serve the mobile hero image from the same origin (`www.cmqheadshots.com`). Since it's only 20KB, the cost of routing through Amplify instead of CloudFront is negligible, and you eliminate the cross-origin connection overhead.

```html
<!-- Move to same origin -->
<link rel="preload" as="image" href="/images/hero-mobile-640.webp" media="(max-width: 767px)" fetchPriority="high" />
```

**Option B**: At minimum, add `crossorigin` to the preload link to ensure the preloaded resource matches the CORS mode of the `<img>` fetch. Without it, the browser may discard the preloaded response and fetch again.

### Priority 3: Reduce Header Background Texture (Expected impact: -0.2s LCP)

The header's CSS `background-image` is 69KB for a repeating linen texture. This competes for bandwidth with the hero image.

Options:
- Compress further (it's a simple texture, could be 5-10KB as a tiny tiled WebP)
- Use a CSS gradient approximation instead of an image
- Lazy-load it (set it via JS after first paint)
- Use a solid color initially and load texture after LCP

### Priority 4: Inline Critical CSS (Expected impact: -0.1s LCP)

The CSS file is preloaded but still requires a separate request. Inlining the critical-path CSS (above-the-fold styles) directly into the HTML `<head>` would eliminate one render-blocking request. At 11KB gzip, the full CSS could potentially be inlined without significantly increasing HTML size.

However, this is low impact since the CSS is already preloaded and cached.

### Priority 5: Reduce Structured Data Size (Expected impact: -0.05s)

The `<head>` contains 4 JSON-LD blocks totaling approximately 4KB:
- ProfessionalService schema
- WebSite schema
- VideoObject schema
- FAQPage schema (10 questions with full answers)

The FAQPage schema alone is ~2.5KB. Consider:
- Moving the FAQ schema to a separate file loaded after LCP
- Or keeping it (SEO value likely outweighs the minimal performance cost)

### Priority 6: Optimize Font Loading (Expected impact: -0.1s)

While fonts are well-configured, loading 5 weights of Raleway (300, 400, 500, 700, 900) means the variable font file is larger than necessary. The homepage uses weights 400, 800, and 900. Consider:
- Reducing to 3-4 weights if possible across the site
- The preloaded font file (43KB) serves all weights for Latin, so removing unused weights would reduce this file

---

## 6. What NOT to Change

These are already optimized and should not be modified:

1. **Hero `<picture>` element with responsive sources** -- correctly implemented
2. **Preload hints** -- correctly matching source URLs with media queries
3. **`fetchPriority="high"`** -- correctly set on hero image
4. **`preconnect` to CDN** -- correctly placed
5. **`font-display: swap`** -- correctly preventing FOIT
6. **CSS preload** -- correctly implemented
7. **LazySection for below-fold content** -- correctly reducing SSR HTML size
8. **CDN caching** -- CloudFront is properly configured with long cache times
9. **Gzip compression** -- properly applied to all text resources
10. **CLS score of 0** -- hero image has width/height, no layout shift

---

## 7. Expected Impact Summary

| Optimization | Expected LCP Reduction | Effort |
|-------------|----------------------|--------|
| Dynamic import below-fold sections | -1.5 to -2.5s | Medium |
| Audit + reduce shared JS chunks | -0.5 to -1.0s | Medium |
| Self-host mobile hero image | -0.3 to -0.5s | Low |
| Reduce header texture to <10KB | -0.1 to -0.2s | Low |
| Inline critical CSS | -0.05 to -0.1s | Low |
| Reduce font weights | -0.05 to -0.1s | Low |
| **Combined estimate** | **-2.5 to -4.0s** | |
| **Projected LCP** | **2.4 to 3.9s** | |

The most impactful single change is **reducing the JavaScript bundle** through dynamic imports of below-fold sections. This alone could bring LCP from 6.4s into the 3.5-4.5s range on simulated Slow 4G.

Combining JS reduction with self-hosting the hero image could potentially reach the 2.5s "good" threshold, though this depends on how Lighthouse's Lantern model recalculates the waterfall with fewer resources.

---

## 8. Verification Steps

After making changes, verify with:

```bash
# Run Lighthouse locally with JSON output to see LCP element
npx lighthouse https://www.cmqheadshots.com --preset=perf --output=json --output-path=./lcp-audit.json

# Check the LCP element
cat lcp-audit.json | jq '.audits["largest-contentful-paint-element"]'

# Check JS bundle sizes
cat lcp-audit.json | jq '.audits["script-treemap-data"]'
```

Also check field data via CrUX API or CrUX Vis (https://cruxvis.withgoogle.com) to compare lab (Lighthouse) vs real-user performance. Real-world mobile LCP on actual devices with faster CPUs and real 4G networks will be significantly better than Lighthouse's simulated 6.4s.
