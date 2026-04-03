# Homepage Rebuild Plan — Complete

## Context
The homepage has been broken across multiple sessions. Keywords were removed, the high-end design was replaced with small generic sections, and the page no longer looks or performs like it should. We are starting from the March 10 design (currently running on localhost) which Cindy approved as the visual baseline. Every section slot stays. No sections get removed except the "Executives to Entrepreneurs" 4-image row. Sections that had actor/modeling/corporate content keep their exact layout, height, background style -- only the H2 keyword, supporting text, and image get swapped.

## Starting Point
**File:** `src/pages/index-old-mar10.tsx` (currently loaded as `src/pages/index.tsx`)
**Design:** 650px tall TwoColumnSections, background colors matched to image backdrops, CTA buttons, high-end editorial feel.

---

## Master Keyword List — All 17 H2s for Homepage

### PHOENIX-SPECIFIC (top of page — these go first):

| # | Keyword (exact H2 text) | Volume/Rank | Source |
|---|------------------------|-------------|--------|
| 1 | PROFESSIONAL HEADSHOTS PHOENIX | 213 imp, #6 | GSC + Semrush |
| 2 | PHOENIX HEADSHOTS | 165 imp, #8 | GSC |
| 3 | PHOENIX, AZ PROFESSIONAL HEADSHOTS | #4 rank | Rankings screenshot |
| 4 | PROFESSIONAL HEADSHOTS PHOENIX, AZ | #8 rank | Rankings screenshot |
| 5 | PHOENIX, AZ HEADSHOT PHOTOGRAPHER | #17, dropped 3 | Rankings screenshot |
| 6 | PROFESSIONAL HEADSHOT PHOTOGRAPHER | #6, dropped 1 | Rankings screenshot |
| 7 | PROFESSIONAL PHOTOGRAPHY PHOENIX | #19, dropped 1 | Rankings screenshot |
| 8 | PHOENIX HEADSHOT | GSC | Needs own section |
| 9 | HEADSHOTS PHOENIX | 260/mo weak | GSC |
| 10 | HEADSHOT PHOTOGRAPHER PHOENIX | 125 imp, #8.6 | GSC — close to page 1 |
| 11 | ARIZONA HEADSHOTS | GSC | Needs own section |

### NEAR ME (middle of page):

| # | Keyword (exact H2 text) | Volume/Rank | Source |
|---|------------------------|-------------|--------|
| 12 | PROFESSIONAL HEADSHOTS NEAR ME | 146 imp, #27 | GSC |
| 13 | BEST HEADSHOT PHOTOGRAPHER NEAR ME | #4 rank | Rankings screenshot |

### GENERIC / HIGH VOLUME (lower on page):

| # | Keyword (exact H2 text) | Volume/Rank | Source |
|---|------------------------|-------------|--------|
| 14 | HEADSHOT PHOTOS | 1,600/mo | Semrush — highest volume |
| 15 | HEADSHOT PROFESSIONAL | 720/mo | Semrush — 2nd highest |
| 16 | PROFESSIONAL HEADSHOT PHOTOS | 390/mo | Semrush |
| 17 | PROFESSIONAL BUSINESS PHOTOGRAPHY | 390/mo | Semrush |

**Total: 17 keyword H2 sections needed on the homepage.**
**Order: Phoenix-specific first → Near Me middle → Generic high-volume lower**

**Save to:** `docs/homepage-keyword-targets.md`

---

## Complete Page Layout — Top to Bottom

Every row below is a section on the page. "KEEP" means don't touch it. "SWAP" means keep the section design but change keyword + text + image. "ADD" means new section that doesn't exist on March 10.

| # | Section | Type | H2 Keyword | Image | Background | Action |
|---|---------|------|------------|-------|------------|--------|
| 1 | Hero + H1 overlay | Hero | H1: PROFESSIONAL HEADSHOT PHOTOGRAPHER PHOENIX | Hero collage | image | CHANGE: add H1 overlay (from live site) |
| 2 | Cindy intro paragraph | Text | (supports H1) | — | white | ADD (from live site) |
| 3 | Tagline | Text | COMFORTABLE EASY HEADSHOTS YOU'RE GOING TO LOVE | — | white | KEEP |
| 4 | Service Carousel | Carousel | — | 8 service cards | dark linen | ADD (from live site) |
| 5 | Video Section | Video | — | video | white | MOVE UP from bottom |
| | | | | | | |
| | **--- PHOENIX-SPECIFIC KEYWORDS (top) ---** | | | | | |
| 6 | **PROFESSIONAL HEADSHOTS PHOENIX** | TwoColumn | KW #1 | Dark bg guy (existing) | #282725 | KEEP as-is |
| 7 | 4-Step Polaroid | Process | — | polaroid cards | — | KEEP |
| 8 | **PHOENIX HEADSHOTS** | TwoColumn | KW #2 | Gray bg guy Brent (existing) | #575757 | SWAP from "Phoenix Business Headshots" |
| 9 | Reviews 1 | ThreeReview | — | 3 headshots | dark linen | KEEP |
| 10 | **PHOENIX, AZ PROFESSIONAL HEADSHOTS** | TwoColumn | KW #3 | Cindy picks (was blonde woman) | #ffffff | SWAP from "Corporate Headshots" |
| 11 | FAQ 1 | Flip cards | — | — | #575757 | KEEP |
| 12 | **PROFESSIONAL HEADSHOTS PHOENIX, AZ** | TwoColumn | KW #4 | Cindy picks (was staff grid) | #e7e7e7 | SWAP from "On-Location Staff" |
| 13 | Why Choose CMQ | 3 icons | — | — | dark linen | KEEP |
| 14 | **PHOENIX, AZ HEADSHOT PHOTOGRAPHER** | TwoColumn | KW #5 | Cindy picks (was actor collage) | #F1F1F1 | SWAP from "Actor Headshots" |
| 15 | FAQ 2 | Flip cards | — | — | #ffffff | KEEP |
| 16 | **PROFESSIONAL HEADSHOT PHOTOGRAPHER** | TwoColumn | KW #6 | Cindy picks (was modeling) | #ffffff | SWAP from "Modeling Headshots" |
| 17 | **PROFESSIONAL PHOTOGRAPHY PHOENIX** | TwoColumn NEW | KW #7 | Cindy picks | TBD | ADD new section |
| 18 | FAQ 3 | Flip cards | — | — | #575757 | KEEP |
| 19 | **PHOENIX HEADSHOT** | TwoColumn NEW | KW #8 | Cindy picks | TBD | ADD new section |
| 20 | **HEADSHOTS PHOENIX** | TwoColumn NEW | KW #9 | Cindy picks | TBD | ADD new section |
| 21 | Reviews 2 | ThreeReview | — | 3 headshots | dark linen | KEEP |
| 22 | **HEADSHOT PHOTOGRAPHER PHOENIX** | TwoColumn NEW | KW #10 | Cindy picks | TBD | ADD new section |
| 23 | **ARIZONA HEADSHOTS** | TwoColumn NEW | KW #11 | Cindy picks | TBD | ADD new section |
| | | | | | | |
| | **--- NEAR ME KEYWORDS (middle) ---** | | | | | |
| 24 | **PROFESSIONAL HEADSHOTS NEAR ME** | TwoColumn NEW | KW #12 | Cindy picks | TBD | ADD new section |
| 25 | FAQ 4 | Flip cards | — | — | #F1F1F1 | KEEP |
| 26 | **BEST HEADSHOT PHOTOGRAPHER NEAR ME** | TwoColumn NEW | KW #13 | Cindy picks | TBD | ADD new section |
| | | | | | | |
| | **--- GENERIC HIGH-VOLUME KEYWORDS (lower) ---** | | | | | |
| 27 | Reviews 3 | ThreeReview NEW | — | 3 headshots | dark linen | ADD (break up sections) |
| 28 | **HEADSHOT PHOTOS** | TwoColumn NEW | KW #14 | Cindy picks | TBD | ADD new section |
| 29 | **HEADSHOT PROFESSIONAL** | TwoColumn NEW | KW #15 | Cindy picks | TBD | ADD new section |
| 30 | **PROFESSIONAL HEADSHOT PHOTOS** | TwoColumn NEW | KW #16 | Cindy picks | TBD | ADD new section |
| 31 | **PROFESSIONAL BUSINESS PHOTOGRAPHY** | TwoColumn NEW | KW #17 | Cindy picks | TBD | ADD new section |
| | | | | | | |
| | **--- CLOSING ---** | | | | | |
| 32 | "Professional Photography Services" | 3 cards | — | icons | #575757 | KEEP or update |
| 33 | Blue CTA | CTA | BOOK YOUR PHOENIX HEADSHOT SESSION | — | blue | KEEP |

**REMOVED:** "Executives to Entrepreneurs" 4-image row only (images reusable)

---

## Section Count Summary
- **5 KEEP as-is** TwoColumnSections/content sections (hero, polaroid, why choose, services cards, CTA)
- **5 SWAP** keyword + text + image (existing TwoColumn slots)
- **12 ADD** new TwoColumnSections for remaining keywords
- **4 KEEP** FAQ sections
- **2 KEEP** + 1 ADD review sections
- **1 KEEP** video (moved up)
- **1 KEEP** tagline
- **1 ADD** service carousel
- **1 ADD** Cindy intro paragraph
- **Total sections: 33**

---

## Rules for Every TwoColumnSection
- `minHeight="650"` — tall, impactful
- `objectFit="contain"` — image fills naturally
- `mobileStackOrder="image-first"` — image shows first on mobile
- `ctaText` + `ctaLink` — every section gets a CTA button
- `textSize="medium"` — consistent text sizing
- `ctaSize="large"` — consistent button sizing
- Background color MATCHED to image backdrop color
- Text color: white on dark backgrounds, dark on light backgrounds
- H2 keyword phrase MUST appear in body text (keyword echo rule)
- Alternating `reverseColumns` (false = text left/image right, true = image left/text right)

---

## What Cindy Needs to Provide
For each of the 17 keyword sections, Cindy needs to pick:
1. **The headshot image** (S3 path or CDN URL)
2. **The backdrop color** of that image (so I can match the section background)

Sections that already have images (KW #1 PROFESSIONAL HEADSHOTS PHOENIX = dark bg guy, KW #2 PHOENIX HEADSHOTS = gray bg guy Brent) are set. The other 15 need images.

I can start building the structure with TODO placeholders for images, or wait until Cindy picks images first.

---

## Implementation Order
1. Save keyword list to `docs/homepage-keyword-targets.md`
2. Start from March 10 index.tsx as base
3. Add H1 overlay on hero (from live site code)
4. Add Cindy intro paragraph (from live site code)
5. Add Service Carousel component (from live site code)
6. Move Video Section up to position #5
7. Remove "Executives to Entrepreneurs" 4-image row
8. Swap 5 existing TwoColumn keywords + text (keep images until Cindy picks new ones)
9. Add 12 new TwoColumn sections with keywords, text, and TODO image placeholders
10. Add 1 new review section (#27) to break up keyword sections
11. Verify all 17 keywords present (grep check)
12. Verify keyword echo in body text
13. Build test (`pnpm run build`)
14. Visual check on localhost

## Files to Modify
- `src/pages/index.tsx` — main homepage rebuild
- `docs/homepage-keyword-targets.md` — NEW keyword reference (permanent)

## Verification
1. `pnpm run build` passes with zero errors
2. All 17 keyword phrases found on page (automated grep)
3. All 17 H2 keyword phrases echoed in body text below them
4. Word count target: ~3,000+
5. Visual check: every TwoColumn section is 650px tall with impactful images
6. No keywords from March 10 or current live site were lost
