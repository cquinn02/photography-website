## Plan: GEO Optimization — AI Search Visibility Fixes

**Original analysis:** 2026-04-05 (GEO audit)
**Updated:** 2026-05-10 (scope refresh — current state verified, TikTok dropped, review count bumped to 133)
**Status:** All phases verified-not-done as of 2026-05-10. Ready to execute.

---

## Why we are doing this

The site already has strong on-page SEO and (as of 2026-05-10) PageSpeed scores in the 90s. The remaining gap is **GEO (Generative Engine Optimization)** — making the site easy for AI search engines (ChatGPT, Claude, Perplexity, Google AI Overviews) to cite accurately.

Three concrete problems verified in the current codebase:

1. **Stale review count.** Site claims "130+ five-star reviews" in 19 prose locations + `ratingCount: 130` in schema. Actual count is **133**. Inconsistent or stale counts harm credibility with both AI crawlers and Google's E-E-A-T signals.

2. **Incomplete schema sameAs arrays.** Both the global ProfessionalService schema (`Layout.tsx:78-82`) and the Person schema (`about.tsx:273-276`) list only Facebook + Instagram (+ Google Maps for the ProfessionalService). LinkedIn, YouTube, and Pinterest exist as active profiles and are missing — AI engines use `sameAs` to verify entity identity across platforms.

3. **Missing footer social icons.** Footer shows Instagram, LinkedIn, Google Maps. Missing Facebook, YouTube, Pinterest. Same credibility/discoverability gap.

4. **Robots.txt AI crawler blocks are loose.** Each AI crawler block has only `Allow: /` and does not inherit the `Disallow` rules from `User-agent: *`. That means private/staging pages (athankyou, bthank-you, footer-showcase, convention-headshots-phoenix, headshot-booth-phoenix, homepage-mockup) are crawlable by AI crawlers but not by Google. OAI-SearchBot (OpenAI's dedicated search crawler) is not explicitly listed.

5. **TikTok claim in `llms.txt` but no active account.** `llms.txt` line for TikTok needs to be removed.

---

## Scope decisions (2026-05-10)

- **Active social platforms:** Facebook, Instagram, LinkedIn, YouTube, Pinterest. **NOT TikTok** (Cindy doesn't actively use it).
- **Review count:** "133+" (keep the "+"). Durable — does not need site-wide updates every time a new review comes in. Schema `ratingCount` is the exact integer 133 (no "+" — schema requires a number).
- **Bytespider / cohere-ai blocks:** Add explicit `Disallow: /` per the original plan (no citation benefit, only training extraction).

---

## Phase 1: Review count 130 → 133 (site-wide)

Touch the following files. Each prose occurrence becomes `133+ five-star` (keep the "+"). The schema integer becomes `"ratingCount": 133` (no "+" — must be a number).

### Schema (1 file)
- [ ] `src/components/Layout.tsx:88` — `"ratingCount": 130` → `"ratingCount": 133`

### Page meta descriptions and body text (15 files, 19 occurrences)
- [ ] `src/pages/index.tsx` lines 21, 155, 537, 663 (4 occurrences — meta description + body prose)
- [ ] `src/pages/about.tsx` line 649
- [ ] `src/pages/phoenix-business-headshots.tsx` line 81 (meta description)
- [ ] `src/pages/linkedin-headshots.tsx` lines 187, 571 (2 occurrences)
- [ ] `src/pages/actor-headshots-phoenix.tsx` lines 76, 206, 691, 767 (4 occurrences — meta + 3 body)
- [ ] `src/pages/corporate-staff-headshots.tsx` line 511
- [ ] `src/pages/lawyer-headshots-phoenix-2.tsx` line 539
- [ ] `src/pages/realtor-headshots-phoenix.tsx` line 571
- [ ] `src/pages/modeling-headshots-phoenix.tsx` line 249
- [ ] `src/pages/eras-medical-headshots.tsx` line 624 (uses "over 130 five-star" — becomes "133+ five-star")
- [ ] `src/pages/blog/best-professional-headshot-photographers-near-me.tsx` line 12
- [ ] `content/about.md` line 66

### llms.txt (3 occurrences)
- [ ] `public/llms.txt` lines 4, 31, 66 — "130+ five-star Google reviews" → "133+ five-star Google reviews"

---

## Phase 2: Schema sameAs — add LinkedIn, YouTube, Pinterest

### `src/components/Layout.tsx:78-82` (ProfessionalService schema)
Current:
```json
"sameAs": [
  "https://www.facebook.com/cmqheadshots",
  "https://www.instagram.com/cmqheadshots",
  "https://www.google.com/maps/place/CMQ+Headshots/@33.8760267,-112.1544037,17z"
]
```
- [ ] Add to the array: `https://www.linkedin.com/in/cmqheadshots/`, `https://www.youtube.com/@cmqheadshots8437`, `https://www.pinterest.com/cmqheadshots/`

### `src/pages/about.tsx:273-276` (Person schema)
Current:
```json
"sameAs": [
  "https://www.instagram.com/cmqheadshots",
  "https://www.facebook.com/cmqheadshots"
]
```
- [ ] Add to the array: `https://www.linkedin.com/in/cmqheadshots/`, `https://www.youtube.com/@cmqheadshots8437`, `https://www.pinterest.com/cmqheadshots/`, `https://www.google.com/maps/place/CMQ+Headshots/@33.8760267,-112.1544037,17z`

---

## Phase 3: Footer social icons — add Facebook, YouTube, Pinterest

Footer currently has Instagram, LinkedIn, Google Maps icons in both desktop (`Footer.tsx:80-91`) and mobile (`Footer.tsx:133-144`) layouts. Add three new icons in **both** layouts, in this order: Facebook, Instagram, LinkedIn, YouTube, Pinterest, Google Maps.

- [ ] Add Facebook icon — `lucide-react` has `Facebook`. URL: `https://www.facebook.com/CMQHeadshots/`
- [ ] Add YouTube icon — `lucide-react` has `Youtube`. URL: `https://www.youtube.com/@cmqheadshots8437`
- [ ] Add Pinterest icon — `lucide-react` does NOT have Pinterest. Use inline SVG matching the existing Google Maps pattern. URL: `https://www.pinterest.com/cmqheadshots/`
- [ ] Match existing styling: `text-cmq-blue hover:text-white transition-colors transform hover:scale-110`, icon size `h-8 w-8`, `aria-label` per platform
- [ ] Add to both desktop AND mobile layout blocks

---

## Phase 4: Robots.txt cleanup

`public/robots.txt`:

- [ ] Each AI crawler block (GPTBot, ChatGPT-User, ClaudeBot, CCBot, PerplexityBot, Google-Extended) needs the same `Disallow` lines as `User-agent: *`: `/_next/image`, `/athankyou`, `/bthank-you`, `/footer-showcase`, `/private/`, `/convention-headshots-phoenix`, `/headshot-booth-phoenix`, `/homepage-mockup`
- [ ] Add new `User-agent: OAI-SearchBot` block with `Allow: /` + the same Disallows (OpenAI's dedicated search crawler — distinct from GPTBot)
- [ ] Add `User-agent: Bytespider` / `Disallow: /` block (ByteDance training crawler — no citation benefit)
- [ ] Add `User-agent: cohere-ai` / `Disallow: /` block (Cohere training crawler — no citation benefit)
- [ ] Update "Last Updated" comment to 2026-05-10

---

## Phase 5: Remove TikTok from llms.txt

- [ ] `public/llms.txt` — remove the TikTok line (currently lists `https://www.tiktok.com/@cmqheadshots`). Cindy doesn't actively use the account; claiming it harms credibility with AI crawlers that may try to verify and find no recent activity.

---

## Phase 6: Update GEO-ANALYSIS doc + sitemap

- [ ] `docs/GEO-ANALYSIS.md` — rewrite to reflect: 133 reviews, accurate social platform list (5 platforms, no TikTok), updated schema/footer/robots state after Phases 1-5
- [ ] `public/sitemap.xml` — bump `lastmod` to 2026-05-10 for every page modified in Phase 1 (homepage, about, phoenix-business, linkedin, actor, corporate-staff, lawyer-2, realtor, modeling, eras-medical, the named blog post, reviews if touched)

---

## Phase 7: Build verification + commit strategy

- [ ] `pnpm run lint` — zero errors
- [ ] `pnpm run build` — zero errors, all pages compile
- [ ] Spot-check rendered HTML for `/` and `/about` — confirm new sameAs URLs appear in schema output
- [ ] Open footer in browser at both desktop and mobile breakpoints — confirm 6 icons render correctly

**Commit strategy (proposed):** Four logical commits for reviewability:
1. Review count site-wide (130 → 133, ratingCount + 19 prose + 3 llms.txt)
2. Schema sameAs additions (Layout.tsx + about.tsx)
3. Footer social icons (Facebook, YouTube, Pinterest in both layouts)
4. Robots.txt cleanup + llms.txt TikTok removal

---

## Addendum — items carried forward / out of scope

### From phoenix-pages-polish-PLAN.md (archived 2026-05-10):
- **font-ralway typo** — ✅ DONE (commit `c917473`, "Fix font-ralway typo, move SEO audit to S3, update plan docs")
- **`<img>` tags instead of Next.js `<Image>` on realtor page** — still open, 3 instances. Out of scope for GEO plan; separate task.

### Realtor SEO — Overtake headshotprosaz.com (carried forward, not GEO-specific):
- [ ] Add internal links to `/realtor-headshots-phoenix` from homepage body text
- [ ] Add 1-2 more FAQs to realtor page targeting "near me" variations
- [ ] Add a realtor-specific review to the homepage reviews section
- [ ] Write blog post: "Why Your Realtor Headshot Matters More Than Your Business Card"
- [ ] Google Business Profile posts and service page updates
- [ ] Monitor GSC weekly for realtor keyword URL cannibalization

### Blog post backlog (out of scope — separate content plan):
- "What color to wear for a headshot" (70/mo, KD 6)
- "Fun professional headshots" (90/mo, KD 7)
- "Natural headshots" (90/mo, KD 4)

### GEO content improvements (out of scope — separate content plan):
- Citable answer blocks (134-167 words) below first H2 on each service page
- Convert 2-3 H2s per service page to question format
- Surface LinkedIn stats (21x views, 36x messages, 70% rejection) into visible body text
- Add Speakable schema to service pages
- Add author byline + "Last updated" date to service pages
- Add HowTo schema to process sections
- Add pricing comparison tables
- Build "AI Headshots vs Professional" comparison content

### Off-site GEO (not code changes — separate marketing plan):
- Build Reddit presence in r/phoenix, r/headshots, r/realtors
- Create YouTube content (headshot tips, behind-the-scenes)
- Pursue Wikidata entity creation for CMQ Headshots
- Pursue local press coverage (Phoenix New Times, AZ Central)
- Create LinkedIn Company Page
