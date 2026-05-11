# Plan: About Page Image Optimization

**Created:** 2026-05-11 (late-night session, deferred to next-day execution)
**Status:** Documented, not started.

---

## Why we are doing this

Cindy reported the about page (`/about`) loads images very slowly. Investigation found 18 unoptimized JPGs totaling ~34 MB on the page:

| File group | Count | Size each | Total |
|---|---|---|---|
| `travel jpegs/*.jpg` (slideshow) | 16 | ~2 MB | ~32 MB |
| `Rachel Elliot8161.jpg` | 1 | 1.0 MB | 1.0 MB |
| `RodneyJackson2576.jpg` | 1 | 1.0 MB | 1.0 MB |
| `CMQHEADSHOTS-Sophia4485-sq.jpg` | 1 | 92 KB | 92 KB |

The travel slideshow cycles every 800ms — the browser barely finishes downloading one 2 MB JPG before the next one starts. Same WebP-encoded coffee slideshow files (in `Cindy Coffeej/`) are ~20 KB each and load instantly.

Per `feedback_image_optimization.md` memory rule: never overwrite originals on S3. Convert to WebP, resize, save as new file. Per `feedback_image_size_standard.md`: 1600px long edge masters at q=88.

---

## Source files (S3)

| File | Folder |
|---|---|
| 16 travel JPGs | `images/website%20media/travel%20jpegs/` |
| Rachel Elliot | `images/Rachel%20Elliot8161.jpg` |
| Rodney Jackson | `images/RodneyJackson2576.jpg` |
| Sophia (smaller, lower priority) | `images/CMQHEADSHOTS-Sophia4485-sq.jpg` |

Exact filenames from `src/pages/about.tsx` lines 128-145 (travel array) plus the static cards section.

---

## Execution plan

### Step 1: Download originals from S3
```bash
mkdir /tmp/about-jpg-convert
aws s3 cp s3://cmqheadshots-website-images/images/website%20media/travel%20jpegs/ /tmp/about-jpg-convert/travel/ --recursive --exclude "*" --include "*.jpg"
aws s3 cp s3://cmqheadshots-website-images/images/Rachel%20Elliot8161.jpg /tmp/about-jpg-convert/
aws s3 cp s3://cmqheadshots-website-images/images/RodneyJackson2576.jpg /tmp/about-jpg-convert/
aws s3 cp s3://cmqheadshots-website-images/images/CMQHEADSHOTS-Sophia4485-sq.jpg /tmp/about-jpg-convert/
```

### Step 2: Convert each to 1600px WebP at q=88
For each JPG, run cwebp (or sharp / ImageMagick — whatever the established workflow uses):
```bash
cwebp -q 88 -resize 1600 0 input.jpg -o output-1600.webp
```
Naming convention per existing site: `[original-name]-1600.webp`.

For the travel slideshow specifically, expect ~150-300 KB per file after conversion (down from 2 MB).

### Step 3: Upload to S3 as NEW files
DO NOT overwrite the originals. Use a parallel `optimized/` path or matching subfolder naming. Match the existing pattern in `images/website%20media/optimized/` directories.

Cache-Control header: `public, max-age=31536000, immutable` (matches existing convention).

### Step 4: Update `src/pages/about.tsx` URLs
Replace the 16 travel JPG URLs in the `travelImages` array (lines 128-145) with their new WebP equivalents. Replace the 2 standalone JPG URLs (Rachel, Rodney) and optionally the Sophia URL (smaller, lower priority).

### Step 5: Verify locally
- `pnpm run build` — zero errors
- `pnpm dev` and load `/about`
- DevTools Network tab: filter to Img, confirm sizes are now ~150-300 KB instead of 2 MB
- Confirm slideshow still cycles correctly with no flicker

### Step 6: Sitemap lastmod
`public/sitemap.xml` — bump `lastmod` for `/about` to today's date.

### Step 7: Commit + push
One commit with all the URL updates. Amplify auto-deploys.

---

## Quality bar (per memory `feedback_image_size_standard.md`)

- 1600px long edge, q=88 WebP
- Save as new files (never overwrite originals)
- Use CloudFront URLs (not direct S3 URLs) in the page code
- Update sitemap lastmod
