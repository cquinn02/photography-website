## Plan: Phoenix Pages Polish & Service Page Buildout

### Phase 1: Homepage Final Polish ✅
- [x] Remove all 7 stale `TODO: Cindy to pick image` comments from `src/pages/index.tsx`
- [x] Audit current word count — baseline was 2,438
- [x] Added ~340 words across 6 thin sections + new "Headshots for Every Profession" section (105 words) — total now ~3,000+
- [x] All 17 H2 keyword phrases echoed in body text
- [x] Build passes with zero errors

### Phase 2: Convention Headshots Page ✅ (Already Built)
- [x] Page already has 565 lines of content, FAQs, schema, How It Works cards
- [x] `noindex={true}` already set
- [x] Not in navigation or sitemap
- [x] Only needs real photos swapped in for placeholder grey boxes (waiting on Cindy)

### Phase 3: Headshot Booth Page ✅ (Already Built)
- [x] Page already has 545 lines of content, FAQs, schema
- [x] `noindex={true}` already set
- [x] Not in navigation or sitemap
- [x] Only needs real photos swapped in for placeholder grey boxes (waiting on Cindy)

### Phase 4: Service Page Keyword Optimization ✅
- [x] **Corporate Staff page** — added "group corporate headshots" in body text. Skipped "corporate product photographer phoenix" — doesn't fit this page's focus on staff headshots.
- [x] **Realtor page** — added "real estate photography in Phoenix, AZ" in closing section body text
- [x] **Actor page** — changed "actor headshots near me" to "actors headshots near me" to match target keyword
- [x] **LinkedIn page** — added "best LinkedIn headshots in Scottsdale" in body text
- [x] H2 keyword echo verified on all 4 pages
- [x] Build passes with zero errors

### Phase 5: Technical SEO Cleanup ✅
- [x] Audited meta descriptions across all Phoenix pages — found 2 over-length (convention 185ch, booth 181ch)
- [x] Trimmed both to under 160 characters
- [x] `headshot-booth-phoenix` has `noindex={true}` confirmed
- [x] Updated sitemap lastmod to 2026-04-03 for: corporate-staff, actor, linkedin, realtor
- [x] Full build passes with zero errors

### Phase 6: Deferred Findings & Cleanup
[Left intentionally blank. Populated by /grade as out-of-scope findings are discovered during execution.]

## Addendum

- **What:** `font-ralway` typo (should be `font-raleway`) in ImageRightTextLeftSection.tsx line 52
  **Where:** `src/components/sections/ImageRightTextLeftSection.tsx:52`
  **Why deferred:** File not touched in this task — out of scope

- **What:** `<img>` tags used instead of Next.js `<Image>` in realtor page (lint warnings)
  **Where:** `src/pages/realtor-headshots-phoenix.tsx` (3 instances)
  **Why deferred:** Pre-existing, file was touched but only for body text — image refactor is a separate task

### Blog Post Backlog (out of scope — future plan)
- "What color to wear for a headshot" (70/mo, KD 6)
- "Fun professional headshots" (90/mo, KD 7)
- "Natural headshots" (90/mo, KD 4)

### Location Pages (out of scope — future plan)
- Build out after Phoenix pages are complete and structure is finalized
- 13 location pages exist but need 800-1,500 words of unique content each

### Off-Site SEO (out of scope — future plan)
- Google Business Profile, local directories, backlinks, guest posts
