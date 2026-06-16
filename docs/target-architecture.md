# Target Architecture — Integrated Studio System

_Updated 2026-06-16 after a deep read of the proven reference system (K Dalton Photography). Decisions
below are **settled** — do not reopen them. Concrete build steps live in `docs/studio-app-build-plan.md`._
_If you are a new Claude session: read this before proposing any infrastructure._

## The shape: TWO separate apps (verified, not assumed)
1. **Marketing site** — the existing `cmqheadshots.com` (this repo: Next.js **Pages Router**, on Vercel;
   images on **S3/CloudFront** at `images.cmqheadshots.com`). **Stays exactly as it is.**
2. **Studio app** — NEW and **separate**: the client-facing system (galleries, proofing, portals, CRM,
   booking, wardrobe). A separate Next.js **App-Router** app on a subdomain (e.g. `clients.cmqheadshots.com`).

Two different codebases, two different image stores **that never touch.** This is *verified* against the
reference system: its studio app uses Vercel Blob only and has **zero storage coupling** to its marketing
site — the only link is hyperlinks/embedded forms, never shared images.

## A note on "off AWS" (so nobody panics when they see "AWS")
"Off AWS" means **off your own AWS *account* and its mess** — Amplify, S3 buckets, CloudFront, the AWS
console, the AWS bill — **NOT** "no data ever touches an AWS data center." That second thing is neither
possible nor the goal: **Vercel, Neon, and Vercel Blob all run on AWS (and other clouds) underneath.**
That is correct and fine — you have a Vercel / Neon / Resend account and bill, never an AWS one. A Neon
region like "AWS US East 1" is normal and right (it also matches Vercel's default region = fast). The
thing you escaped was *managing* AWS yourself, and you have.

## Storage — SETTLED
- **Marketing images:** stay on **S3/CloudFront** (`images.cmqheadshots.com`). **Untouched. No migration.**
  (The earlier R2-vs-Blob "migrate the 413 images" debate is **closed** — the two systems are independent,
  so there is nothing to migrate and no risk to the website's images.)
- **Studio-app images** (galleries, wardrobe, proofs, etc.): **Vercel Blob.** Confirmed by the reference
  system, which runs entirely on Blob at production scale (~$10/mo).

## Studio-app stack — SETTLED (mirrors the proven reference)
- Next.js 16 (App Router) · Prisma · **Neon Postgres** · **Vercel Blob** · **Resend** (email) · Tailwind 4
- **Supabase is NOT used** — it's a dead dependency in the reference; we use **Neon directly via Prisma**.
- **Payments: Square** (in-gallery checkout) + **QuickBooks** (invoicing) — matches the reference *and*
  your current Square usage. (Not Stripe.)
- Pipes: **Google** (Gmail send + Calendar sync), **Resend** (transactional email), **Anthropic Claude**
  (wardrobe auto-tagging), **remove.bg** (background removal). SMS can be added later (Twilio) if wanted.
- **Two local Mac helpers** (run on your Mac, not the cloud): a smart-crop worker (Sharp) and a
  tethered-proofing watcher.

## The client record — one IMPROVEMENT on the reference
The reference has **no single client table** — name/email are copied across Project/Gallery/Portal and
stitched by matching email. We add a normalized **`Contact`** table that those entities key to, so the
client lives in one place. This is the one place we deliberately improve on the proven design — but it's
added at the **CRM slice**, not the gallery slices (which copy the reference verbatim and ship first).
See the build plan.

## Approach — copy, don't rebuild
Per the reference author: do **not** rebuild 38 models from a spec. **Copy the reference codebase**
(schema + `src/lib` verbatim) into a new repo, stand it up on your own accounts, enable features one
slice at a time, then restyle to your brand. Steps + slice order: `docs/studio-app-build-plan.md`.

## Non-negotiables
- **Two separate apps**; the marketing site is untouched.
- Studio-app images on **Vercel Blob**; marketing images stay on **S3/CloudFront**. They never share storage.
- **Neon Postgres** for the studio app, with **one `Contact` row per client**.
- Bake in the reference's production fixes from day one (DB pooling, rate-limiting, Square CSP, env
  validation — see the build plan).
- **Never touch MX / email DNS records.**
