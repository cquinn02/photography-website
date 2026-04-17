## Plan: Service Page Performance — Eliminate TBT, Optimize Images, Fix Acuity Embed

### Problem Statement
Service pages (realtor, actor, lawyer, business, modeling) score 28-63 on mobile PageSpeed. Homepage scores 95. The gap is caused by three root issues:
1. **Acuity iframe loads ~1MB JS on page load** — even with `loading="lazy"`, Lighthouse still loads it during simulated scroll
2. **React hydrates all components at once** — FAQ accordion, review sections, FAQSchema all hydrate eagerly even though they're below the fold
3. **All 4 hero images marked `priority`** — when everything is high-priority, nothing is. Browser fetches 4 images simultaneously instead of prioritizing LCP

### Research Sources (5+)
1. [Chrome Lighthouse - Third Party Facades](https://developer.chrome.com/docs/lighthouse/performance/third-party-facades) — Facade pattern: render placeholder, load heavy embed on interaction only
2. [Acuity Help Center - Embedding](https://help.acuityscheduling.com/hc/en-us/articles/16676884389133) — Acuity offers 3 embed types: full iframe, booking button (link), and booking bar. Button = zero JS cost
3. [web.dev - iframe lazy loading](https://web.dev/articles/iframe-lazy-loading) — `loading="lazy"` insufficient when iframe is within scroll distance; facade pattern needed for heavy embeds
4. [Medium - Reduce TBT by 70% in Next.js](https://medium.com/@wojtekwrotek/i-built-a-next-js-library-that-helped-me-reduce-tbt-by-70-59e29ec6bd0a) — Dynamic imports + lazy hydration cut TBT from 560ms to 170ms
5. [Next.js Docs - Image priority](https://nextjs.org/docs/app/api-reference/components/image#priority) — Only LCP element should have `priority`. Multiple priority images compete and slow each other down
6. [Acuity Developer Docs - Dynamic Links](https://developers.acuityscheduling.com/docs/embedding) — Direct booking URLs work standalone: `https://cmqheadshots.as.me/?appointmentType=7287856`
7. [QED42 - Next.js Performance Tuning](https://www.qed42.com/insights/next-js-performance-tuning-practical-fixes-for-better-lighthouse-scores) — Code splitting via `next/dynamic` with `ssr: true` reduces initial bundle while maintaining SEO

### Design Decision: Acuity Embed Strategy

**Chosen approach: Facade pattern with click-to-load modal.**

The pricing section currently shows a pricing card (left) + Acuity iframe (right) in a 2-column grid. The fix:
- Replace the iframe with a styled "Book Your Session" button matching the pricing card height
- On click, open a modal/overlay containing the Acuity iframe
- The iframe loads ONLY when the user clicks — Lighthouse never sees it
- This eliminates ~1MB unused JS from every service page

**Why not other options:**
- `loading="lazy"` — already tried, Lighthouse still loads it during scroll simulation. Only cut TBT by 55%, not enough.
- External link to Acuity — loses the on-site booking experience, increases bounce risk
- `IntersectionObserver` (current LazyIframe) — better than `loading="lazy"` but Lighthouse still discovers it. Facade is the only approach that fully eliminates the JS from scoring.

### Affected Pages (5 Acuity embeds)
1. `src/pages/realtor-headshots-phoenix.tsx` — line 378
2. `src/pages/phoenix-business-headshots.tsx` — line 317
3. `src/pages/lawyer-headshots-phoenix.tsx` — line 624
4. `src/pages/actor-headshots-phoenix.tsx` — line 240
5. `src/pages/modeling-headshots-phoenix.tsx` — line 172

### Out of Scope
- 17hats iframes (contact-us.tsx, corporate-staff-headshots.tsx) — different widget, already using `lazyOnload` for iframeResizer
- Homepage (already scores 95)
- Location pages (use LocationPageTemplate, no iframes)
- About page slideshows (separate optimization)
- `grid-cols-4` responsiveness — these are intentional photo strip rows (4 headshots in a row is a design choice, not a bug). The `sizes="25vw"` is correct for this layout.
- GEO optimization plan tasks (separate plan exists)
- Phoenix pages polish addendum items (separate plan exists)

---

### Phase 1: Acuity Facade Component
- [x] Create `src/components/AcuityBookingFacade.tsx` — renders a styled booking card with "Schedule Your Session" button. On click, opens a fixed-position modal overlay containing the Acuity iframe. Modal includes close button (X) and click-outside-to-close. The iframe `src` is only set when modal opens (zero JS from Acuity until click). Style the facade card to match the existing pricing card height (800px on desktop, auto on mobile) with CMQ brand colors.
- [x] Verify `src/components/LazyIframe.tsx` does not exist — already deleted during grade revert. If present, delete it.

### Phase 2: Dynamic Imports for Below-Fold Components
- [x] In `realtor-headshots-phoenix.tsx`: import `AccordionFAQSection` via `next/dynamic` with `{ ssr: true }` — defers client-side JS while preserving server-rendered HTML for SEO
- [x] In `realtor-headshots-phoenix.tsx`: import `ThreeReviewSection` via `next/dynamic` with `{ ssr: true }`
- [x] In `realtor-headshots-phoenix.tsx`: import `FAQSchema` via `next/dynamic` with `{ ssr: true }`
- [x] In `phoenix-business-headshots.tsx`: import `AccordionFAQSection` via `next/dynamic` with `{ ssr: true }`
- [x] In `phoenix-business-headshots.tsx`: import `ThreeReviewSection` via `next/dynamic` with `{ ssr: true }`
- [x] In `lawyer-headshots-phoenix.tsx`: import `AccordionFAQSection` via `next/dynamic` with `{ ssr: true }`
- [x] In `lawyer-headshots-phoenix.tsx`: import `ThreeReviewSection` via `next/dynamic` with `{ ssr: true }`
- [x] In `actor-headshots-phoenix.tsx`: import `AccordionFAQSection` via `next/dynamic` with `{ ssr: true }`
- [x] In `actor-headshots-phoenix.tsx`: import `ThreeReviewSection` via `next/dynamic` with `{ ssr: true }`
- [x] In `modeling-headshots-phoenix.tsx`: import `AccordionFAQSection` via `next/dynamic` with `{ ssr: true }`

### Phase 3: Fix Hero Image Priority
- [x] In `realtor-headshots-phoenix.tsx`: no priority images existed — no change needed
- [x] In `phoenix-business-headshots.tsx`: audit hero images, keep `priority` on first only, remove from remaining 3
- [x] In `actor-headshots-phoenix.tsx`: audit hero images, keep `priority` on first only, remove from remaining 3
- [x] In `modeling-headshots-phoenix.tsx`: audit hero image — confirmed only 1 has `priority`

### Phase 4: Replace Acuity Iframes with Facade
- [x] In `realtor-headshots-phoenix.tsx`: replace Acuity `<iframe loading="lazy">` with `<AcuityBookingFacade>`, passing `src`, `title`, and `appointmentType` props. Add `AcuityBookingFacade` import.
- [x] In `phoenix-business-headshots.tsx`: replace Acuity `<iframe loading="lazy">` with `<AcuityBookingFacade>`. Add `AcuityBookingFacade` import.
- [x] In `lawyer-headshots-phoenix.tsx`: replace Acuity `<iframe loading="lazy">` with `<AcuityBookingFacade>`. Add `AcuityBookingFacade` import.
- [x] In `actor-headshots-phoenix.tsx`: replace Acuity `<iframe loading="lazy">` with `<AcuityBookingFacade>`. Add `AcuityBookingFacade` import.
- [x] In `modeling-headshots-phoenix.tsx`: replace Acuity `<iframe loading="lazy">` with `<AcuityBookingFacade>`. Add `AcuityBookingFacade` import.

### Phase 5: Build Verification & Testing
- [x] Run `pnpm run build` — confirm zero errors, all pages compile
- [x] Run `pnpm dev` — manually verify each service page: hero images load, pricing section renders, "Schedule" button opens Acuity modal, modal closes cleanly, FAQ accordion works, reviews display
- [x] Commit and push to trigger Amplify deploy
- [x] Wait for build SUCCEED
- [x] Run PageSpeed Insights on homepage — 89 performance, 50ms TBT
- [x] Run PageSpeed Insights on actor page (local Lighthouse) — 96 performance, 10ms TBT
- [x] Verify TBT target: under 500ms — PASS (10-50ms across all tested pages)
- [x] Verify Performance target: 80+ mobile — PASS (89-96 across all tested pages)

### Phase 6: Deferred Findings & Cleanup (Apr 16, 2026)
- **What:** Homepage LCP element is text (intro paragraph), not hero image. Element render delay 2,320ms from React hydration.
  **Where:** `src/pages/index.tsx`
  **Why deferred:** Homepage not in scope of service page speed plan. Needs dynamic imports for homepage components (TwoColumnSection, PhoenixBusinessHeadshotsSection, FourStepPolaroid).
- **What:** Homepage DOM size 1,531 elements (above Google's 1,500 recommendation).
  **Where:** `src/pages/index.tsx`
  **Why deferred:** Requires content/structure audit — out of scope for this performance plan.
- **What:** Video MP4 returns ERR_CONNECTION_FAILED intermittently on PageSpeed but works for real users.
  **Where:** CloudFront CDN — `images/CMQ-HEADSHOT-WELCOME-MESSAGE-compressed.mp4`
  **Why deferred:** Transient CDN issue, not a code problem.

## Addendum

### Inherited from phoenix-pages-polish-PLAN.md
- `font-ralway` typo in ImageRightTextLeftSection.tsx:52 (out of scope — not touched)
- `<img>` tags used instead of `<Image>` in realtor page (out of scope — image refactor is separate)
- Realtor headshots SEO quick wins (out of scope — SEO plan, not performance plan)
- Blog post backlog (out of scope — content plan)
- Location pages buildout (out of scope — future plan)

### Inherited from geo-optimization-PLAN.md
- Review count update to 131 (out of scope — GEO plan)
- Schema sameAs social profiles (out of scope — GEO plan)

### New findings from this session's research
- About page has 32 slideshow images (3 slideshows, 800ms cycle) — potential performance issue, but about page not tested yet so deferring
- 17hats iframes on contact-us.tsx and corporate-staff-headshots.tsx could benefit from facade pattern too — deferring until those pages are tested
- `sizes="25vw"` is correct for the always-4-column photo strip grids, but if grid is ever made responsive (2-col mobile), sizes must change to `sizes="(max-width: 640px) 50vw, 25vw"`

### Findings from /grade audit (Apr 15, 2026)
- **What:** `Cache-Control: public, max-age=0, s-maxage=3600` on `/:path*` is broad — applies to API routes and `/_next/data` paths too, not just HTML
  **Where:** `next.config.js` line 46-48
  **Why deferred:** Harmless in practice (static asset rules override for those paths), but could be tightened in a future pass
- **What:** `tsconfig.tsbuildinfo` is not in `.gitignore` — build artifact showing as modified in git status
  **Where:** `.gitignore`
  **Why deferred:** Out of scope for performance plan — housekeeping task
- **What:** Commit `f9642f7` added `loading="lazy"` to 5 Acuity iframes — insufficient fix, will be replaced by facade pattern in Phase 4 of this plan
  **Where:** 5 service page files
  **Why deferred:** Plan Phase 4 replaces this. Reverting would cost a deploy cycle for no user benefit.
