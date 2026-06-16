# Studio App — Build Plan

_The concrete plan to build CMQ's integrated studio system, based on a deep read (2026-06-16) of the
proven **K Dalton Photography** reference system. Architecture & settled decisions:
`docs/target-architecture.md`. Phase tracking: `MIGRATION-PLAN.md`._

## 0. What we're building
A **separate** client-facing studio app — galleries, proofing, client portals, wardrobe/clothing
uploads, CRM, booking — that incrementally replaces **Pixieset, 17hats, and Acuity**. It lives
*alongside*, not inside, the `cmqheadshots.com` marketing site.

## 1. The reference system (what we copy)
Location on Cindy's Mac: `~/Downloads/photography-gallery-system` (K Dalton Photography; her hand-off
guide is `docs/CINDY-GALLERY-SYSTEM-SETUP.md` inside it). It is a real production system:
**38 Prisma models, ~180 API routes, 8 Vercel crons, 2 local Mac helpers.** The author's explicit
instruction: **copy the code, do not rebuild 38 models from a written spec.**

## 2. Accounts (minimum to start)
- **Vercel** — a *new* project, separate from the marketing site.
- **Neon Postgres** — pooled `DATABASE_URL` + non-pooled `DIRECT_URL` (for migrations).
- **Vercel Blob** — all studio-app image storage.
- **Resend** — transactional email.

Add as features turn on: **Square** (payments), **Google Cloud** (OAuth: Gmail + Calendar + GA4),
**QuickBooks** (invoicing), **Anthropic** (wardrobe AI tagging), **remove.bg** (background removal).

## 3. Where it lives
- Subdomain, e.g. **`clients.cmqheadshots.com`** (Route 53 CNAME → Vercel), as its **own** Vercel project.
- Marketing site stays at `cmqheadshots.com`, untouched.
- The marketing site **embeds/links to the studio app's booking + lead forms** (CORS-allowed). That is
  the *only* connection between the two apps — forms/data, never shared storage.

## 4. Auth model (from the reference — deliberately simple)
- **Admin (you):** one `ADMIN_PASSWORD` + httpOnly cookie. No accounts system.
- **Clients:** unguessable **magic-link tokens** in the URL — no logins, no passwords. The link is the key.
- **Machines** (worker/watcher/crons): shared-secret headers.

## 5. Build / slice order (incremental — each slice ships value)
1. **Foundation (the runway, not a feature)** — copy the reference repo (full 38-model schema + `src/lib`)
   **verbatim**; wire Neon + Blob + Resend; admin login; deploy to `clients.cmqheadshots.com`. This is just
   the plumbing galleries need. *Verify: admin login + a clean deploy.*
2. **Client galleries — BUILD THIS FIRST** (per the reference guide and Cindy's instinct). Magic-link
   client galleries, photo upload to Blob, proofing, downloads — copied verbatim, no schema changes.
   → **kills Pixieset.**
3. **Wardrobe / clothing uploads** — `WardrobeItem` / `OutfitGroup` / `OutfitItem`; clients upload outfits
   before the shoot; optional bg-removal + AI tagging. → **the original slice that started this.**
4. **CRM** — `Project` + notes/todos/phone log/email logs; lead intake from the marketing-site forms.
   **This is where we add the normalized `Contact` table** (see §6). → starts replacing **17hats**.
5. **Booking + scheduling** — public booking, slots, QuickBooks invoicing, Google Calendar sync.
   → starts replacing **Acuity**.

Each slice sits on the same foundation. Stop after any one and you've already killed a subscription.

## 6. The one deliberate improvement: a `Contact` table (added at the CRM slice — NOT day one)
The reference system has **no single client table** — client name/email are *copied* across
`Project`, `Gallery`, and `ClientPortal` and stitched together by matching email. Galleries work fine
without fixing this, so the foundation + gallery slices copy the reference **verbatim** and ship first.
When we reach the **CRM slice (step 4)**, we add a normalized **`Contact`** model (one row per person)
that `Project` / `Gallery` / `ClientPortal` key to, so the client lives in one place from the point it
actually matters. Early on there's no production data, so adding it then is cheap — the "painful retrofit"
risk only applies once there's a lot of live data.

## 7. Production gotchas to bake in from DAY ONE
(Straight from the reference's `PRODUCTION-ISSUES.md` — these are her hard-won lessons, including a
3 a.m. outage. We inherit the fixes for free.)
- **DB connection pooling + query timeouts** — her #1 cause of 500s. Use Neon's pooled URL + Prisma limits.
- **Rate-limit** public gallery / lead / booking endpoints.
- **Square CSP** — `next.config` must allow `*.squarecdn.com` and `*.squareup.com` in
  `script-src` / `frame-src` / `style-src` / `font-src`, plus `worker-src 'self' blob:`, or the embedded
  card form silently fails to load.
- **Env-var validation at startup** (fail loud if `DATABASE_URL` / `BLOB_READ_WRITE_TOKEN` etc. are missing).
- **Migrations run live on deploy** (`prisma migrate deploy && next build`) — be deliberate about
  what's in `prisma/migrations/`.
- **Vercel Blob 403** → disconnect/reconnect the Blob store; **do not rotate the token** (Vercel bug).
- **Error boundaries + structured logging + `/api/health`** — point uptime monitoring at `/api/health`,
  not the homepage.

## 8. Local Mac helpers (an operational reality, not optional infra)
Two small programs run on **your Mac**, because Vercel functions can't do the heavy Sharp CPU work:
- **Smart-crop worker** — generates LinkedIn / square / circle / vertical crops from each headshot.
- **Tethered-proofing watcher** — watches your photo export folder during a shoot and pushes
  watermarked proofs to the client's gallery live.
Both are optional; galleries work without them.

## 9. Restyle, don't redesign
Once it runs, change **only branding** — colors, fonts, logo, the single email-template wrapper, and
copy — to CMQ. Keep all logic, models, and routes intact. (The reference author's same instruction.)

## 10. Key reference files (on Cindy's Mac)
- `~/Downloads/photography-gallery-system/docs/CINDY-GALLERY-SYSTEM-SETUP.md` — master rebuild/restyle guide
- `~/Downloads/photography-gallery-system/PRODUCTION-ISSUES.md` — incident analysis + fixes
- `~/Downloads/photography-gallery-system/prisma/schema.prisma` — the 38-model backbone
- `~/Downloads/photography-gallery-system/.env.example` — canonical env-var list
- `~/Downloads/photography-gallery-system/vercel.json` — crons, function timeouts, headers
