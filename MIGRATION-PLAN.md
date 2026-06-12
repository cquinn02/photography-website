# Migration & Build-Out Plan: Vercel + Integrated Studio System

_Last updated: 2026-06-11_

## Goal

Consolidate the photography business onto **one integrated Next.js system on Vercel**,
eventually replacing the three current SaaS subscriptions:

- **Acuity** — scheduling/booking
- **17hats** — CRM, contracts, invoicing
- **Pixieset** — client galleries

## Context / why this is viable

- A peer (fellow photographer) successfully had Claude build a **CRM into her Next.js
  site on Vercel** — a real existence proof. She did **not** buy an all-in-one product.
- Key signal: **her build succeeded on Vercel; our earlier gallery attempt failed on AWS
  Amplify.** Amplify is awkward for full-stack Next.js (API routes, DB, auth, file
  storage). Vercel is purpose-built for it. The platform likely mattered.
- Strategy: **don't boil the ocean.** Ship one capability at a time. Galleries (the
  hardest, and the piece that previously failed) come **last**, on a proven foundation.

## Guardrails (lessons baked in)

- Migrate hosting first; build features only on the Vercel foundation.
- One capability per slice, each verified before the next.
- Diagnose **why the previous gallery failed** before rebuilding galleries.
- Keep Route 53 as DNS host; never touch MX/email records.

---

## Phase 1 — Migrate hosting to Vercel (zero downtime)

1. **Pre-flight** — `pnpm build` passes locally; commit + push to `main`.
2. **Create Vercel project** — import `cquinn02/photography-website`; auto-detects Next.js + pnpm.
3. **Configure** — env vars (e.g. `NEXT_PUBLIC_GA_ID`); confirm build command + root dir (pnpm workspace).
4. **Preview deploy** — builds to `*.vercel.app`. Amplify + live site untouched.
5. **Verify on preview** — all ~50 pages, ~40 redirects, GA/GTM/Matomo, Acuity/17hats embeds, CDN images.
6. **Lower Route 53 TTL** — drop website A/CNAME TTL to 5 min ~1 day ahead.
7. **Pre-provision SSL** — add domain in Vercel, verify via TXT before flipping (no SSL gap).
8. **Cut over** — change only the website's 2 Route 53 records → Vercel
   (`A` → `76.76.21.21`, `www` CNAME → `cname.vercel-dns.com`). Leave MX/email + subdomains alone.
9. **Monitor + decommission** — keep Amplify a few days as rollback; then turn off.

## Phase 2 — Full-stack foundation (build once, reuse everywhere)

- **Database** — Neon Postgres (Vercel-integrated)
- **Auth** — client logins (magic links / Auth.js)
- **File/image storage** — Vercel Blob or existing S3/CloudFront
- **Unify apps** — fold `clients.cmqheadshots.com` into this one codebase

## Phase 3 — CRM (do this first; replaces 17hats)

Most tractable; highest immediate value. Build incrementally:
leads → contacts → contracts/e-sign → invoices → Stripe payments → email automation.

## Phase 4 — Scheduling (replaces Acuity)

Availability, booking flow, calendar sync, reminders, deposit payments.

## Phase 5 — Galleries (LAST — hardest + previously failed)

Upload pipeline, client proofing, favorites, downloads, watermarking, print/digital delivery.
Built on the proven DB/auth/storage foundation from Phase 2.

Each phase is independently shippable — stopping after Phase 3 already kills a subscription.

---

## Open questions (highest-value inputs)

1. **Why did the previous gallery build fail?** (scope creep? Amplify? image handling? auth?)
2. **How was the friend's CRM built?** (database, auth, gallery approach — a proven template)
