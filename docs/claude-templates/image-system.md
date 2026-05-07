# Image System

**Single source of truth for every photograph on cmqheadshots.com.**

This is the only image-policy document on the site. If you find image-sizing guidance anywhere else (memories, plans, other docs), it is either casual / scoped to a different concern, or it is wrong and contradicts this file. This file wins.

Last updated: 2026-05-07

---

## TL;DR

| Image type | Long edge | Quality | Format | Filename |
|---|---|---|---|---|
| Section / portrait headshots (most images) | **1600 px** | `cwebp -q 88` | WebP | `[name]-1600.webp` |
| Hero / LCP-priority (homepage hero, page hero banners) | **2560 px** | `cwebp -q 92` | WebP, with explicit srcset variants | `[name]-2560.webp` |

Other rules:
- `imageWidth` / `imageHeight` props always match the master's native pixel dimensions, never displayed dimensions
- Always use the CloudFront URL `https://images.cmqheadshots.com/...`, never the direct S3 URL
- Never overwrite the original JPG / PNG / WebP on S3; always upload as a new file with the size suffix
- Never re-encode below `q=85`
- sRGB color profile only

---

## Why this standard exists

For 14 months prior to this rewrite, every PageSpeed audit triggered a session that shrank source images down to PageSpeed's reported "displayed dimension" (often 410 × 328 or 500 × 400 pixels). That fixes the audit warning for one Lighthouse run, then breaks retina screens, then the next session re-encodes the next image the same way. The cycle has now happened four times. Each cycle costs Cindy time and degrades her photographs, which are her product.

The cycle ends with one master size per photograph, encoded once at photographer-grade quality, served to every device through Next.js Image's automatic srcset. PageSpeed warnings about "image size" in this configuration are to be ignored.

---

## The math behind 1600 px

Images on the homepage and service pages render at the following sizes, calculated from the actual component code:

**Desktop (≥ 1024 px viewport, side-by-side layout):**
- TwoColumnSection / PhoenixBusinessHeadshotsSection: image column = 50vw
- ImageRightTextLeftSection: image column = 55vw
- All section images use `object-contain` inside a container with `minHeight: 650px`
- Portraits are height-bound by the 650 px minimum, so they display at roughly 520 × 650 CSS pixels regardless of monitor width

**Mobile (< 1024 px viewport, stacked layout):**
- Image takes 100vw (full screen width)
- Largest realistic device: iPad portrait at 1024 CSS px wide
- Largest phone: iPhone 16 Pro Max at 430 CSS px × 3 DPR = 1290 effective pixels

**Retina factor:**
- 2x DPR doubles the source pixels needed for sharpness
- Desktop section image at 520 × 650 CSS × 2 DPR = 1040 × 1300 source pixels needed
- Mobile 100vw on iPad portrait × 2 DPR = 2048 source pixels needed (rare — most mobile traffic is phones at < 1290)

**Next.js srcset cap:**
- `next.config.js` sets `deviceSizes: [384, 640, 828, 1080, 1200, 1920]`
- Next.js Image will never request a srcset variant larger than 1920 px regardless of source size
- The CDN serves the closest variant the browser asks for, and the browser downscales locally if needed

**Conclusion:** A 1600 px master covers desktop retina perfectly, covers iPhone Pro Max retina perfectly, and handles iPad portrait at 100vw with a 17 % browser downscale (not perceptible on portrait subjects). Going to 1920 px or 2048 px adds 30-50 % file weight for a quality gain that only matters on the largest iPads viewing at full DPR. **1600 px is the right balance for a photography-portfolio-and-booking site.**

Hero images are different. They span 100vw on every device and are LCP-critical, so the homepage hero already uses an explicit srcset at 640 / 828 / 1400 / 1920 / 2560 with a 2560 master. That is the correct pattern and stays.

---

## Industry research

### Foreground Web (photography-portfolio specific, 2026 guide)
- Full-width hero / slideshow images: **2560 px wide** (or 2500 px round number)
- Gallery / lightbox images: **1500 to 2000 px** on the longest edge
- Content-area images: roughly 2x the display width, capped near **1650 px on the longest edge**
- Maximum file size target: under **500 KB** per image
- JPG quality export: **60 to 70** (claims quality difference imperceptible vs 100)
- WebP advantage over JPG: roughly **30 % smaller files at equivalent quality**
- Recommended cap: **2500 px** to prevent file bloat and image theft

### web.dev / Google
- No specific numeric quality recommendations for WebP or AVIF
- Defers to per-image testing: "Try several quality levels to find the best quality versus file size tradeoff for your asset"
- Recommends 3 to 5 srcset variants per image

### Comparison to our standard

| Spec | Foreground Web (photographer-specific) | web.dev (Google generic) | Our standard |
|---|---|---|---|
| Hero / full-width | 2500 to 2560 px | not specified | **2560 px** ✅ aligned |
| Section / content | 1200 to 1650 px | not specified | **1600 px** ✅ aligned (top of range) |
| Quality | JPG q=60 to 70 | "test per image" | **WebP q=88** (higher than industry — intentional) |
| Max file size | 500 KB | not specified | 150 to 300 KB section, 400 to 600 KB hero |
| Format | WebP recommended | WebP / AVIF recommended | **WebP** ✅ aligned |
| Color | sRGB | sRGB | **sRGB** ✅ aligned |

### Why our quality is higher than the industry recommendation

Foreground Web's q=60-70 recommendation is for general-purpose photographer websites. WebP at q=88 is roughly equivalent to JPG q=85, still well below maximum but high enough that portrait skin tones and fine detail remain crisp. Cindy's photographs are her product. A 30 % file-size reduction at q=88 vs q=92 is the right trade. A further reduction at q=70 is not.

If a future PageSpeed pass insists images are too heavy, the answer is not to drop quality. The answer is to verify the file is at the 1600 px master spec, then accept the warning. Photography portfolios are a known exception to general "smaller is faster" web-performance guidance.

---

## Component contract

Every section component on the site (`TwoColumnSection`, `ImageRightTextLeftSection`, `PhoenixBusinessHeadshotsSection`, `FourImageRow`, `FiveImageRow`) uses Next.js `<Image fill>` on desktop and `<Image width={imageWidth} height={imageHeight}>` on mobile.

The contract is:

- `imageWidth` and `imageHeight` props must equal the master's native pixel dimensions. For a 1600 × 1280 landscape master, set `imageWidth={1600} imageHeight={1280}`. For a 1280 × 1600 portrait, set `imageWidth={1280} imageHeight={1600}`. For a 1600 × 1600 square, set `imageWidth={1600} imageHeight={1600}`.
- The `sizes` attribute is already correct in every component (`(max-width: 1024px) 100vw, 50vw` for TwoColumnSection, similar for others). Do not modify.
- Next.js generates the responsive srcset automatically from the `deviceSizes` config in `next.config.js`. Do not pre-shrink the master.

### Wrong pattern (causes the cycle)

```tsx
imageUrl="https://images.cmqheadshots.com/images/.../headshot-400w.webp"
imageWidth={410}
imageHeight={328}
```

This forces the mobile renderer to upscale a 400 px source up to 1024 CSS pixels on an iPad. Visible blur. Fails on retina. Triggers the next PageSpeed warning round.

### Correct pattern

```tsx
imageUrl="https://images.cmqheadshots.com/images/.../headshot-1600.webp"
imageWidth={1600}
imageHeight={1280}
```

Mobile renders the 1600 px master at 100vw (browser downscales sharply). Desktop fills 50vw with `object-contain` (Next.js requests a 1080 srcset variant). Both look great. PageSpeed will still flag this as "served at 1600, displayed at 410" on its mobile audit. Ignore that warning. The displayed dimension is the CSS dimension, not the device dimension; on a retina phone the image is rendered at 1290 effective pixels, not 410.

---

## CDN policy

**Always use the CDN for images. Never use direct S3 URLs in production code.**

CDN base URL: `https://images.cmqheadshots.com`

This is a CloudFront distribution backed by S3. The `next.config.js` `images.remotePatterns` allowlist contains only this hostname, so direct S3 URLs will fail to render through Next.js Image.

Standard URL formats:
- `https://images.cmqheadshots.com/images/website media/[filename]-1600.webp`
- `https://images.cmqheadshots.com/images/blog/optimized/[filename]-1600.webp`
- `https://images.cmqheadshots.com/images/logos/clients/[filename].webp`

Preconnect is configured in `_document.tsx`:
```html
<link rel="preconnect" href="https://images.cmqheadshots.com" />
<link rel="dns-prefetch" href="https://images.cmqheadshots.com" />
```

---

## Encoding workflow

```bash
# 1. Pull master from S3 to /tmp
aws s3 cp "s3://cmqheadshots-website-images/images/website media/[master.jpg]" /tmp/

# 2. Resize and encode at 1600 px on long edge, q=88
# For landscape (wider than tall):
cwebp -q 88 -resize 1600 0 /tmp/master.jpg -o /tmp/output-1600.webp
# For portrait (taller than wide):
cwebp -q 88 -resize 0 1600 /tmp/master.jpg -o /tmp/output-1600.webp
# For square:
cwebp -q 88 -resize 1600 1600 /tmp/master.jpg -o /tmp/output-1600.webp

# 3. Verify dimensions and size
sips -g pixelWidth -g pixelHeight /tmp/output-1600.webp
ls -lh /tmp/output-1600.webp        # expect 150 to 300 KB

# 4. Upload to S3 with cache headers
aws s3 cp /tmp/output-1600.webp \
  "s3://cmqheadshots-website-images/images/website media/output-1600.webp" \
  --cache-control "public, max-age=31536000, immutable" \
  --content-type "image/webp"

# 5. Clean up local files
rm /tmp/master.jpg /tmp/output-1600.webp

# 6. Update imageUrl, imageWidth, imageHeight props in the page (.tsx file)
```

For hero images use `-q 92` and `-resize 2560 0` (or `0 2560`) instead.

For images that need a flat-background composite (the rembg cutout pipeline established in the May 3 session), run rembg and the PIL composite on the **1600 px** input, not on a small file. Output naming: `[name]-blended-1600.webp`.

---

## Alt text standards

Alt text describes the photograph and includes relevant keywords naturally without stuffing.

Good:
- `"Professional corporate headshot of a woman in a navy blazer, Phoenix studio"`
- `"LinkedIn profile photo taken at CMQ Headshots studio in Phoenix"`
- `"Team of 8 employees posing for corporate staff headshots on location"`

Bad:
- `"image1"` (not descriptive)
- `"headshot"` (too generic)
- `"Professional Phoenix headshot photographer corporate headshot best headshots"` (stuffing)

Rules:
- Describe what is in the photograph
- Include location (Phoenix) when natural
- Include the type of session (corporate, LinkedIn, actor) when relevant
- Keep under 125 characters
- Never start with "Image of" or "Photo of"

Per the trifecta rule (`docs/claude-templates/seo-content-rules.md`), the body paragraph next to a photo serves as its description for SEO. Never use `<figcaption>`.

---

## OpenGraph images

Always provide the full object format for OG images, never a bare URL:

```tsx
ogImage={{
  url: "https://images.cmqheadshots.com/images/website media/example-1600.webp",
  width: 1200,
  height: 630,
  alt: "Descriptive alt text for social sharing"
}}
```

Standard OG dimensions: **1200 × 630 px** (Facebook, LinkedIn, Twitter card spec).

---

## Hero / LCP exception

The homepage hero (`src/pages/index.tsx` lines 100-142) uses a hand-rolled `<picture>` element with explicit srcset variants at 640, 828, 1400, 1920, 2560. This image is preloaded for LCP. Do not modify the hero pattern; it is correct as written.

The same exception applies to any page hero that the LCP analysis identifies as the LCP element. These images get the 2560 master treatment with explicit srcset.

---

## Forbidden patterns

These are the historical mistakes that have triggered the four-cycle re-fix loop. Future sessions must reject any of these patterns on sight:

- `*-400w.webp`, `*-500w.webp`, `*-720w.webp` filenames as masters. These are PageSpeed band-aids from old sessions. Replace with `-1600.webp` masters.
- `imageWidth={410}` or any `imageWidth` prop that matches PageSpeed's "displayed dimension" reading. Set to native master dimensions instead.
- Re-encoding at `q < 85` (visible quality loss on portrait skin).
- Encoding to JPG instead of WebP for new files. Existing JPG masters on S3 stay; new optimized files are always WebP.
- Overwriting the original JPG or PNG on S3. Always upload as a new file. (See memory `feedback_image_optimization.md`.)
- Saving an image at the displayed pixel dimension and giving it a name with no size suffix, so a future session can't tell it from a real master.
- Using direct S3 URLs (`cmqheadshots-website-images.s3.us-east-1.amazonaws.com`) in code. Always CloudFront. (See memory `feedback_image_urls.md`.)
- Adding `<figcaption>` to any photo. Plain `<Image>` with alt text only. (See memory `feedback_no_figcaption.md`.)

---

## When PageSpeed flags an image

PageSpeed's "Properly size images" warning is triggered when the source pixel dimension is significantly larger than the CSS displayed dimension on a small viewport. For a photography portfolio served through Next.js Image, this warning is **expected and to be ignored** as long as:

1. The master is at the 1600 px (or 2560 px hero) standard
2. The `imageWidth` and `imageHeight` props match the master's native dimensions
3. Next.js is generating a srcset (visible in DevTools network tab — image URL contains `/_next/image?url=...&w=...`)

If those three conditions are met, the image is correctly sized for retina screens. PageSpeed measures CSS pixels, not device pixels, and underestimates retina needs.

If a PageSpeed warning persists and you are tempted to shrink the master to make the warning go away — stop. Read this section again. The warning is not a bug, it is a known limitation of PageSpeed for photography sites.

---

## Verification process for any image change

After encoding and uploading a new master, verify:

- [ ] S3 dimensions match the standard (`sips -g pixelWidth -g pixelHeight /path/to/file`)
- [ ] File size in target range (150-300 KB section, 400-600 KB hero)
- [ ] `imageWidth` / `imageHeight` props in the page match master native dimensions, not displayed
- [ ] `pnpm build` completes without errors
- [ ] Visual check at 414 px viewport (phone) — image looks sharp
- [ ] Visual check at 1920 px viewport (desktop) — image looks sharp at 50vw column
- [ ] Lightbox / zoom does not exist on this site (was removed). If a future session adds zoom functionality, masters must be revisited.

---

## Cross-references

These files complement (do not contradict) this document:

- `docs/claude-templates/seo-content-rules.md` — the H-tag trifecta rule and how the body paragraph below a photo serves as its description
- `docs/claude-templates/mobile-rules.md` — layout rules for mobile (image stacking, `w-4/5` text container width). Not about image asset dimensions.
- Memory `feedback_image_optimization.md` — the "never overwrite originals" rule
- Memory `feedback_image_urls.md` — the "always CloudFront, never direct S3" rule
- Memory `feedback_no_figcaption.md` — the "no figcaption ever" rule
- Memory `feedback_image_size_standard.md` — short-form pointer back to this document; loaded automatically every session

If any of those files conflict with this document, this document wins and the conflicting file should be corrected.
