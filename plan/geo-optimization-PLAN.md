## Plan: GEO Optimization — AI Search Visibility Fixes

Based on the GEO analysis performed 2026-04-05. This plan addresses verified issues only — stale review count, incomplete schema social profiles, missing footer social icons, and robots.txt cleanup. Content-level GEO improvements (citable answer blocks, question-based headings) are explicitly out of scope — those require a separate content plan.

---

### Phase 1: Update Review Count to 131

All instances of "130+" and `ratingCount: 130` need to become "131" / `ratingCount: 131`. 26 occurrences across 14 files. The backup file `index-current-backup.tsx` has 4 occurrences — included since it will be inconsistent otherwise.

- [ ] Update `src/components/Layout.tsx` line 88: change `ratingCount: 130` to `ratingCount: 131`
- [ ] Update `src/pages/index.tsx`: change "130+ five-star" to "131 five-star" (2 occurrences)
- [ ] Update `src/pages/about.tsx` line 649: change "130+ five-star" to "131 five-star"
- [ ] Update `src/pages/phoenix-business-headshots.tsx` line 63: change "130+ five-star" to "131 five-star"
- [ ] Update `src/pages/linkedin-headshots.tsx`: change "130+ five-star" to "131 five-star" (2 occurrences)
- [ ] Update `src/pages/actor-headshots-phoenix.tsx`: change "130+ five-star" to "131 five-star" (4 occurrences)
- [ ] Update `src/pages/corporate-staff-headshots.tsx`: change "130+ five-star" to "131 five-star" (1 occurrence)
- [ ] Update `src/pages/lawyer-headshots-phoenix.tsx`: change "130+ five-star" to "131 five-star" (2 occurrences)
- [ ] Update `src/pages/realtor-headshots-phoenix.tsx`: change "130+ five-star" to "131 five-star" (2 occurrences)
- [ ] Update `src/pages/modeling-headshots-phoenix.tsx` line 229: change "130+ five-star" to "131 five-star"
- [ ] Update `src/pages/eras-medical-headshots.tsx` line 624: change "over 130 five-star" to "131 five-star"
- [ ] Update `src/pages/reviews.tsx` line 137: change "130+ five-star" to "131 five-star"
- [ ] Update `src/pages/blog/best-professional-headshot-photographers-near-me.tsx` line 12: change "130+ five-star" to "131 five-star"
- [ ] Update `src/pages/index-current-backup.tsx`: change "130+ five-star" to "131 five-star" (4 occurrences)
- [ ] Update `content/about.md` line 66: change "130+ five-star" to "131 five-star"
- [ ] Update `public/llms.txt`: change "130+" to "131" (3 occurrences on lines 4, 31, 66)

### Phase 2: Complete Schema sameAs Social Profiles

The `sameAs` arrays in both the global ProfessionalService schema and the Person schema are missing social profiles that are documented in llms.txt.

- [ ] Update `src/components/Layout.tsx` lines 78-82: add LinkedIn, YouTube, TikTok, and Pinterest URLs to the `sameAs` array (currently only Facebook, Instagram, Google Maps)
- [ ] Update `src/pages/about.tsx` lines 273-276: add LinkedIn, YouTube, TikTok, Pinterest, and Google Maps URLs to the Person schema `sameAs` array (currently only Instagram, Facebook)

### Phase 3: Add Missing Footer Social Icons

Footer currently shows Instagram, LinkedIn, and Google Maps. Missing Facebook, YouTube, TikTok, Pinterest. All URLs are confirmed in llms.txt.

- [ ] Add Facebook icon/link to footer social section (both desktop and mobile layouts)
- [ ] Add YouTube icon/link to footer social section (both desktop and mobile layouts)
- [ ] Add TikTok icon/link to footer social section (both desktop and mobile layouts)
- [ ] Add Pinterest icon/link to footer social section (both desktop and mobile layouts)
- [ ] Verify icon styling matches existing social icons (same size `h-8 w-8`, same color `text-cmq-blue`, same hover `hover:text-white`, same `transform hover:scale-110`)
- [ ] Check lucide-react for available icons; if YouTube/TikTok/Pinterest are not in lucide-react, use inline SVGs matching the existing Google Maps pin pattern

### Phase 4: Robots.txt AI Crawler Cleanup

Current robots.txt has individual AI crawler blocks with only `Allow: /`, which means they don't inherit the `Disallow` rules from `User-agent: *`. Additionally, OAI-SearchBot (OpenAI's dedicated search crawler) is not explicitly listed.

- [ ] Add explicit `User-agent: OAI-SearchBot` / `Allow: /` block to robots.txt
- [ ] Add `Disallow` lines to each AI crawler block matching the `User-agent: *` disallows (athankyou, bthank-you, footer-showcase, private/, convention-headshots-phoenix, headshot-booth-phoenix, homepage-mockup)
- [ ] Add explicit `User-agent: Bytespider` / `Disallow: /` block (ByteDance training crawler — no citation benefit)
- [ ] Add explicit `User-agent: cohere-ai` / `Disallow: /` block (Cohere training crawler — no citation benefit)
- [ ] Update the "Last Updated" comment at the top of robots.txt

### Phase 5: Update GEO Analysis Report

- [ ] Rewrite `docs/GEO-ANALYSIS.md` to reflect all corrected findings: 131 reviews, YouTube/TikTok exist, corrected brand presence table, accurate footer/schema gap descriptions, accurate citability assessment noting that FAQ H3 questions ARE semantic elements

### Phase 6: Sitemap lastmod + Build Verification

- [ ] Update `public/sitemap.xml` lastmod dates for all pages modified in Phases 1-3
- [ ] Run `pnpm run build` — verify zero errors
- [ ] Spot-check rendered HTML for one page to confirm schema changes are correct in output

### Phase 7: GEO Implementation Deferred Findings & Cleanup
[Left intentionally blank. Populated by /grade as out-of-scope findings are discovered during execution.]

## Addendum

### Carried forward from phoenix-pages-polish-PLAN.md:

- **What:** `font-ralway` typo (should be `font-raleway`) in ImageRightTextLeftSection.tsx line 52
  **Where:** `src/components/sections/ImageRightTextLeftSection.tsx:52`
  **Why deferred:** File not touched in this task — out of scope

- **What:** `<img>` tags used instead of Next.js `<Image>` in realtor page (3 instances)
  **Where:** `src/pages/realtor-headshots-phoenix.tsx`
  **Why deferred:** Pre-existing, not in scope of GEO plan

### Realtor Headshots SEO — Overtake headshotprosaz.com (carried forward):
- [ ] Add internal links to `/realtor-headshots-phoenix` from homepage body text
- [ ] Add 1-2 more FAQs to realtor page targeting "near me" variations
- [ ] Add a realtor-specific review to the homepage reviews section
- [ ] Write blog post: "Why Your Realtor Headshot Matters More Than Your Business Card"
- [ ] Google Business Profile posts and service page updates
- [ ] Monitor GSC weekly for realtor keyword URL cannibalization

### Blog Post Backlog (out of scope):
- "What color to wear for a headshot" (70/mo, KD 6)
- "Fun professional headshots" (90/mo, KD 7)
- "Natural headshots" (90/mo, KD 4)

### GEO Content Improvements (out of scope — separate plan needed):
- Add 134-167 word citable answer blocks below first H2 on each service page
- Convert 2-3 H2s per service page to question format
- Surface LinkedIn stats (21x views, 36x messages, 70% rejection) into visible body text
- Add Speakable schema to service pages
- Add author byline + "Last updated" date to service pages
- Add HowTo schema to process sections
- Add pricing comparison tables
- Build "AI Headshots vs Professional" comparison content

### Off-Site GEO (out of scope — not code changes):
- Build Reddit presence in r/phoenix, r/headshots, r/realtors
- Create YouTube content (headshot tips, behind-the-scenes)
- Pursue Wikidata entity creation for CMQ Headshots
- Pursue local press coverage (Phoenix New Times, AZ Central)
- Create LinkedIn Company Page
