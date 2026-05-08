> ⚠️ **SUPERSEDED 2026-05-07** — The "Nikki Image Right-Size" phase in this plan recommends generating a `mobile-720w.webp` variant at `cwebp -q 82`. That contradicts the current image standard (1600 px master at q=88; let Next.js srcset handle responsive delivery). Do not follow the image guidance in this plan. The single source of truth is `docs/claude-templates/image-rules.md`. The GA4 and font-preload phases of this plan are still valid as historical reference but should be reviewed against current `_app.tsx` and `Layout.tsx` before executing.

## Plan: Realtor Page PSI Fixes — GA4 Deferral, Font Preload, Nikki Image Right-Size

### Problem Statement
PSI mobile score for `/realtor-headshots-phoenix` is 66 (Apr 17, 2026). Three actionable issues identified:

1. **TBT 1,180ms** — driven primarily by 653ms of GA4 gtag.js execution (399ms eval + 254ms parse) firing inside PSI's measurement window, even though it's loaded with `lazyOnload`.
2. **LCP 3.4s, element render delay 2,360ms** — LCP element is the intro paragraph at `realtor-headshots-phoenix.tsx:219-225`. TTFB is 0ms (CloudFront cache hit, fine). The 2.3s gap is text waiting for the real Raleway font to swap in over the fallback.
3. **Image delivery: 13 KiB savings** — Nikki section image (`CMQHEADSHOTS-Nikkie-Miller-006-optimized.webp`) is 800×1000 served, displayed at 718×897. No mobile variant exists.

CLS is 0 (good). FCP 1.3s (good). Acuity facade work from Apr 16 already eliminated the 2.5MB of Squarespace/reCAPTCHA/Stripe/Facebook JS — those are confirmed gone in PSI's "3rd parties" panel.

### Research Sources
1. [Web.dev — Lazy-loading third-party JavaScript on interaction](https://web.dev/articles/optimizing-third-party-javascript) — interaction-based loading pattern (scroll/click/touch + idle fallback) for analytics
2. [Next.js docs — `next/font` preload behavior](https://nextjs.org/docs/app/api-reference/components/font#preload) — primary subset auto-preloads when font is applied via `className` or `variable`
3. [Web.dev — Preload critical font assets](https://web.dev/articles/preload-critical-assets) — manual `<link rel="preload" as="font" type="font/woff2" crossorigin>` when auto-preload is insufficient
4. [Next.js docs — `<Image>` `sizes` and responsive images](https://nextjs.org/docs/app/api-reference/components/image#sizes) — when `sizes="100vw"` is wrong for below-fold images
5. Homepage hero pattern reference — `src/pages/index.tsx:101-128` — `<picture>`+`<source>` with explicit `<link rel="preload" media="...">` per breakpoint, currently scoring well
6. Apr 8, 2026 session log — context on why GTM was removed and GA4 went to direct gtag.js (PageSpeed cost of GTM was high; analytics fidelity acceptable to reduce)
7. Apr 16, 2026 session log Phase 6 deferred — homepage hit the same "text-LCP / 2,320ms render delay" symptom, confirming this is a known font/JS-blocking pattern in this codebase

### Design Decisions

**Fix 1 — GA4 interaction loader.** Replace `next/script strategy="lazyOnload"` with a small inline bootstrap that:
- Listens for first user interaction: `scroll`, `click`, `touchstart`, `keydown`, `mousemove`
- On first event, dynamically injects `<script src="...gtag/js?id=G-HCJ1R92010">` and runs `gtag('config', ...)`
- Idle fallback: `setTimeout(load, 10000)` after `window.load` so bounce sessions still get counted (at lower fidelity)
- Once-only guard so duplicate triggers don't double-load
- Bot-probe pathname filter preserved (skip `send_page_view` for `/wp-`, `/wordpress`, etc., same as today)

Why not Partytown: extra dependency, extra runtime, Cindy already standardized on direct gtag.

**Fix 2 — Font preload, verify-then-act.**
- Step 1: build production bundle and inspect emitted HTML for `<link rel="preload" as="font" href="...raleway...400...">`
- If present → no code change needed (fix is a no-op, document and move on)
- If absent → add manual `<link rel="preload" as="font" type="font/woff2" crossorigin>` in `Layout.tsx <Head>`. Pull the woff2 URL from the build output of `next/font/google`.

Why not change `_app.tsx` to use `raleway.className` instead of `raleway.variable`: that would force Tailwind utility `font-raleway` to break across the codebase. Manual preload in Layout is the smaller, safer surgical fix if needed.

**Fix 3 — Nikki image, picture+preload pattern.**
- Create `CMQHEADSHOTS-Nikkie-Miller-006-mobile-720w.webp` (720×900) on S3 with `Cache-Control: public, max-age=31536000, immutable` (matches existing convention)
- In `realtor-headshots-phoenix.tsx`, replace the `<TwoColumnSection>` call for the Nikki block with a custom inline section that uses `<picture>` + `<source media="(max-width: 767px)">` for the mobile variant, native `<img>` fallback for desktop, keeping the same TwoColumn layout via Tailwind grid + the existing text content
- Why not extend `TwoColumnSection` with a `mobileImageUrl` prop: shared component is used in many places, regression surface too large for a 13KiB win. Realtor-only inline is the smaller blast radius.

### Out of Scope (explicit)
- Other service pages (lawyer, actor, business, modeling) — same fixes likely apply but Cindy wants to test on realtor first
- Homepage LCP-text issue (deferred from Apr 16 plan, lives there)
- TwoColumnSection `sizes="100vw"` mobile pattern across other pages — systemic, flagged for user decision in approval summary
- Acuity facade, dynamic imports for FAQ/Reviews — already shipped Apr 16
- Legacy JS polyfills (12 KiB) — separate browserslist decision, not in this plan
- DOM size optimization (613 elements, well under Google's 1500 threshold)
- Font subset reduction or self-hosting woff2 outside `next/font` — bigger refactor

---

### Phase 1: GA4 Interaction Loader
- [ ] In `src/pages/_app.tsx`: remove the two existing `<Script strategy="lazyOnload">` blocks (gtag.js src + ga4-init inline).
- [ ] In `src/pages/_app.tsx`: add a single `<Script id="ga4-loader" strategy="afterInteractive">` containing inline JS that (a) defines a `loadGA4()` function which appends `<script async src="https://www.googletagmanager.com/gtag/js?id=G-HCJ1R92010">`, sets up `dataLayer`/`gtag`, and runs `gtag('config','G-HCJ1R92010',{send_page_view:!skip})` with the existing bot-probe pathname filter; (b) attaches `loadGA4` as a once-only handler to `scroll`, `click`, `touchstart`, `keydown`, `mousemove` events on `window` with `{ once: true, passive: true }`; (c) sets a `setTimeout(loadGA4, 10000)` fallback so bounce sessions still log within 10s of `load`.
- [ ] Run `pnpm dev`, open `localhost:3100/realtor-headshots-phoenix`, open DevTools Network tab filtered to `gtag`. Verify: no gtag request fires on initial load. Scroll the page → gtag request fires exactly once. Reload, do nothing for 10 seconds → gtag request fires from the timeout fallback. Reload, click immediately → gtag fires from the click handler, not the timer.
- [ ] Verify `gtag('config'...)` ran: in DevTools Console, confirm `window.dataLayer` contains a `config` event for `G-HCJ1R92010`.
- [ ] Verify bot-probe filter still works: visit `localhost:3100/wp-login.php` (will 404), confirm no gtag `page_view` is sent (check Network for `g/collect`).
- [ ] Run `pnpm run lint` — zero errors.
- [ ] Run `pnpm run build` — zero errors, all pages compile.
- [ ] Run local Lighthouse on `localhost:3100/realtor-headshots-phoenix` (mobile, simulated throttle), record TBT and LCP. This is the local baseline for this fix.
- [ ] Commit with message describing the GA4 interaction-loading change. Push to `main`.
- [ ] Wait for Amplify build SUCCEED.
- [ ] Wait 5 minutes for CloudFront cache to settle on the new HTML.
- [ ] Run PSI on `https://www.cmqheadshots.com/realtor-headshots-phoenix` (mobile). Record: Performance score, TBT, LCP, FCP, SI. Confirm gtag is no longer in PSI's "Reduce JavaScript execution" or "long main-thread tasks" panels.
- [ ] Document before/after in plan file as a comment under this phase, then mark phase complete.

#### Phase 1 Local Lighthouse (mobile, simulated throttle)
| Metric | Before (live PSI) | After (local Lighthouse) |
|---|---|---|
| Performance | 66 | 96 |
| TBT | 1,180ms | 0ms |
| LCP | 3.4s | 2.7s |
| FCP | 1.3s | 0.9s |
| Speed Index | 4.1s | 0.9s |
| gtag requests during run | 1 (in TBT window) | 0 |

Live PSI to be recorded after Amplify deploy.

### Phase 2: Raleway 400 Font Preload (Verify-Then-Act) — NO-OP
- [x] Inspected built HTML at `localhost:3100/realtor-headshots-phoenix`. Two `<link rel="preload" as="font">` tags present: `630c17af355fa44e-s.p.woff2` (Raleway latin) and `40026c26c28aabed-s.p.woff2` (Playfair latin), both with `data-next-font="size-adjust"` and `crossorigin="anonymous"`.
- [x] Inspected the built CSS at `.next/static/css/c6adfcd3593470ce.css`. The preloaded `630c17af355fa44e-s.p.woff2` is mapped via `@font-face` to **all four declared Raleway weights (300, 400, 500, 700)** for the basic Latin Unicode range — Next.js shares one physical file across weights.
- [x] **Branch A taken: Raleway 400 IS already preloaded.** No code change needed. The 2,360ms LCP render delay is not a font-swap issue.
- [x] Implication: Phase 1 (GA4 deferral) was the correct lever for the LCP render delay. Local Lighthouse confirmed: LCP 3.4s → 2.7s after Phase 1 alone, with no Phase 2 work.
- [x] No commit. Phase 2 complete as a no-op with documented finding.

### Phase 3: Nikki Image Right-Size
- [ ] Locally generate `CMQHEADSHOTS-Nikkie-Miller-006-mobile-720w.webp` from the existing 800×1000 source. Use ImageMagick or sharp: target dimensions 720×900, WebP quality 82, strip metadata. Verify file is smaller than the 800x1000 original (currently 84,578 bytes — target under 70 KiB).
- [ ] Upload to S3: `aws s3 cp ./CMQHEADSHOTS-Nikkie-Miller-006-mobile-720w.webp s3://cmqheadshots-website-images/images/optimized/CMQHEADSHOTS-Nikkie-Miller-006-mobile-720w.webp --cache-control "public, max-age=31536000, immutable" --content-type "image/webp"`. Delete the local file after upload (per S3-only storage rule).
- [ ] Verify CloudFront serves the file: `curl -I https://images.cmqheadshots.com/images/optimized/CMQHEADSHOTS-Nikkie-Miller-006-mobile-720w.webp` returns 200 with the immutable cache header.
- [ ] In `src/pages/realtor-headshots-phoenix.tsx` (around line 266-278): replace the `<TwoColumnSection>` Nikki block with a custom `<section>` using the same Tailwind grid layout (text-right, image-left, `reverseColumns` equivalent) and styling (`backgroundColor: '#999ea2'`, `textColor: 'white'`, `ctaText: 'BOOK YOUR SESSION'`, `ctaLink: '#pricing'`). Use a `<picture>` element with `<source media="(max-width: 767px)" srcSet=".../mobile-720w.webp">` and a native `<img>` fallback at 800×1000. Match the H2 "REAL ESTATE AGENT HEADSHOTS" with the existing keyword echo intact in the body copy. Preserve the H2 → keyword-in-body SEO rule.
- [ ] Verify the H2 still echoes the keyword phrase in body text (CLAUDE.md SEO rule) — run grep against the modified file to confirm "real estate agent headshots" appears in body copy below the H2.
- [ ] Run `pnpm run lint` and `pnpm run build` — zero errors.
- [ ] Run `pnpm dev` and visually inspect `localhost:3100/realtor-headshots-phoenix` at three viewports: 375px (mobile), 768px (tablet), 1440px (desktop). Confirm: image position matches prior layout, text readable, CTA button works, no CLS, mobile picks the 720w variant (DevTools Network → Img filter, check the request URL).
- [ ] Run local Lighthouse on `localhost:3100/realtor-headshots-phoenix` mobile. Record any LCP/score delta.
- [ ] Commit with a message describing the picture-pattern swap and the new mobile image variant. Push to `main`.
- [ ] Wait for Amplify SUCCEED. Wait 5 minutes for CloudFront. Run PSI on live URL.
- [ ] Confirm PSI's "Improve image delivery" panel no longer flags the Nikki image.
- [ ] Update `public/sitemap.xml` lastmod for `/realtor-headshots-phoenix` to today's date (2026-04-17). Commit and push.
- [ ] Document before/after in plan file. Mark phase complete.

### Phase 4: Cleanup & Deferred Findings
[Left intentionally blank. Populated by /grade as out-of-scope findings are discovered during execution.]

## Addendum
[Empty — new plan, no prior addendum to inherit.]
