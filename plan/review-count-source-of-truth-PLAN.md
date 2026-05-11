# Plan: Review Count Single Source of Truth

**Created:** 2026-05-11 (late-night session, deferred to next-day execution)
**Status:** Documented, not started.

---

## Why we are doing this

The review count "133+ five-star" is currently hardcoded as static text in **14+ files** across the site. When Cindy gets new reviews, every file has to be manually updated. This caused tonight's sync mismatch:

- `content/google-reviews.json` (the dynamic data file) had **131 reviews** (last updated 2026-04-01)
- The reviews page **body** read it dynamically and showed 131 correctly via `{totalReviews}`
- The reviews page **title and meta description** were hardcoded with **"131"** (an April-Claude update that didn't propagate to the rest of the site)
- Everywhere else on the site was hardcoded with **"130+"** (the original count before April)
- The actual Google count is now **133**

Tonight's 2026-05-11 GEO fix normalized everything to "133+" via 14 separate file edits. The reviews page slipped through that sweep because my grep was looking for "130+", not "131".

This is a structural problem, not a content problem. The fix: one source, every page reads from it.

---

## Goal

Eliminate hardcoded review counts. When Cindy gets a new review, she updates ONE place. The whole site updates on next deploy.

---

## Option A — Single source of truth (recommended, simpler)

### Architecture
1. Create `content/review-stats.json`:
   ```json
   {
     "totalReviews": 133,
     "averageRating": 5.0,
     "lastUpdated": "2026-05-11"
   }
   ```
   (Or — derive automatically from `content/google-reviews.json` via a small build script. Both files already live in `content/`.)

2. Update every consumer to import from this file:
   - `src/components/Layout.tsx` schema → `"ratingCount": stats.totalReviews`
   - `src/pages/index.tsx` body text → `{stats.totalReviews}+ five-star Google reviews`
   - 12 other service / blog / about pages → same pattern
   - `src/pages/reviews.tsx` title + meta → `${stats.totalReviews}+ Five-Star Ratings`

3. `public/llms.txt` and any other static files: build-time template. Use a small script `scripts/build-llms-txt.js` that reads `review-stats.json` and writes the final `public/llms.txt` on every build. Wire into `package.json` `prebuild` script.

### When Cindy gets a new review
- Edit `content/review-stats.json` and bump `totalReviews` by 1, OR
- Add the review to `content/google-reviews.json` (which is the source for the reviews page body anyway) and let `review-stats.json` be auto-derived

### Files to change (rough scope)
- Create: `content/review-stats.json` (or derived equivalent)
- Optional: `scripts/derive-review-stats.js` (regenerates from google-reviews.json)
- Optional: `scripts/build-llms-txt.js` (generates llms.txt from a template + stats)
- Modify: `src/components/Layout.tsx`, `src/pages/index.tsx`, `src/pages/about.tsx`, `src/pages/phoenix-business-headshots.tsx`, `src/pages/linkedin-headshots.tsx`, `src/pages/actor-headshots-phoenix.tsx`, `src/pages/corporate-staff-headshots.tsx`, `src/pages/lawyer-headshots-phoenix-2.tsx`, `src/pages/realtor-headshots-phoenix.tsx`, `src/pages/modeling-headshots-phoenix.tsx`, `src/pages/eras-medical-headshots.tsx`, `src/pages/reviews.tsx`, `src/pages/blog/best-professional-headshot-photographers-near-me.tsx`, `content/about.md`
- Modify: `public/llms.txt` (becomes generated, not hand-edited)

---

## Option B — Auto-fetch from Google at build time (longer-term enhancement)

Stacks ON TOP of Option A. Replaces manual `review-stats.json` updates with automated.

### Architecture
1. Create `scripts/fetch-review-stats.js`:
   - Uses Google Places API → Place Details endpoint
   - Place ID for CMQ Headshots (extract from the Google Maps URL already in `Layout.tsx` sameAs)
   - Returns `user_ratings_total` and `rating`
   - Writes to `content/review-stats.json`

2. Wire as `prebuild` script in `package.json`:
   ```json
   "prebuild": "node scripts/fetch-review-stats.js"
   ```
   Runs automatically on every `pnpm run build` (which Amplify runs on every deploy).

3. Add `GOOGLE_PLACES_API_KEY` to Amplify environment variables.

### Cost
- Place Details API: ~$0.017 per request
- Amplify build cadence: 1-5 builds per week
- Monthly cost: under $1

### Risks
- API key in env var (standard practice, low risk)
- Google rate limiting: not a concern at this volume
- API outage during build: would fail the build. Mitigation: catch error in the script, fall back to existing JSON, log warning instead of throwing.

---

## Tonight's immediate fix (if you'd rather not wait for Option A)

Just bump the static "131" references on `src/pages/reviews.tsx` to match site standard. Two edits:
- Line 136: `131 Five-Star Ratings` → `133+ Five-Star Ratings`
- Line 137: `131 five-star Google reviews` → `133+ five-star Google reviews`

Also flag the em dash in the title (`Reviews — 131 Five-Star Ratings`) — per Cindy's style rule, em dashes are out. Swap for hyphen or colon.

This is the duct-tape fix that gets reviews page consistent with the rest of the site. The architectural fix (Option A) eliminates this work permanently.

---

## Recommended sequence for tomorrow

1. **Update `content/google-reviews.json`** to add the 2 new reviews (Cindy's manual action — she has the review text/data).
2. **Apply tonight's duct-tape fix** to reviews.tsx (4 lines: 2 count + 1 em-dash swap + sitemap lastmod bump). Buys consistency immediately while the architecture work proceeds.
3. **Build Option A** — about 1 hour focused work. After this ships, the duct-tape becomes obsolete (the imports replace hardcoded strings).
4. **Option B** (Google Places auto-fetch) — separate session if/when desired. ~30-45 min including Amplify env var setup.

---

## Decision points for Cindy

1. **Update google-reviews.json now or later?** It's the dynamic source for the reviews page body. Stale by 2 reviews.
2. **Option A only, or A+B?** Option A is enough to never have a manual sync mismatch again. B automates the count refresh.
3. **Tonight's duct-tape fix on reviews.tsx?** Yes/no — buys consistency until Option A ships.
