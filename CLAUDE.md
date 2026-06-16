# Photography Website - CMQ Headshots

## Tech Stack
- **Framework**: Next.js SSR (NOT static export) on **Vercel** (migrated off AWS Amplify, cutover 2026-06-12)
- **Language**: TypeScript | **Styling**: Tailwind CSS 4.1+ | **Package Manager**: pnpm
- **Image CDN**: https://images.cmqheadshots.com (S3 + CloudFront today — legacy; migrating to Cloudflare R2, see below)
- **Port**: 3100 | **Deploy**: Vercel (auto-detects Next.js SSR; push to `main` auto-deploys)

## Target Architecture (the integrated build) — READ BEFORE PROPOSING INFRA
TWO separate apps. Decisions are **settled** (verified against the proven K Dalton reference system) —
do not reopen them:
- **This repo = the MARKETING site** (`cmqheadshots.com`, Pages Router, images on **S3/CloudFront**). Stays as-is.
- **A NEW, SEPARATE studio app** (galleries / CRM / booking / wardrobe) — a copy of the K Dalton reference
  (Next 16 App Router) on a subdomain (e.g. `clients.cmqheadshots.com`), its own Vercel project.
- Studio-app stack: **Vercel + Neon Postgres + Vercel Blob + Resend + Prisma**; **Square** for payments;
  Google/QuickBooks/Anthropic as pipes. **NOT** Supabase (dead dep), **NOT** R2/S3 for the app.
- The two apps have **separate image storage that never touches** (verified): marketing → S3/CloudFront;
  studio app → Vercel Blob. **Do NOT migrate the marketing images** — there's nothing to migrate.
- Build plan: **`docs/studio-app-build-plan.md`** · Decisions: **`docs/target-architecture.md`** ·
  Phases: **`MIGRATION-PLAN.md`** · Cleanup TODOs: **`docs/TODO.md`**.

## Key Files
| Purpose | Path |
|---------|------|
| Pages | `src/pages/` |
| Components | `src/components/` and `src/components/sections/` |
| Layout (SEO, header, footer) | `src/components/Layout.tsx` |
| Global styles & CSS vars | `src/styles/globals.css` |
| Content (frontmatter) | `content/*.md` |
| Next.js config | `next.config.js` |
| Sitemap | `public/sitemap.xml` |

## Brand Colors
```css
--cmq-blue: #5577a5     /* Primary */
--cmq-gray-dark: #575757 /* Backgrounds/accents */
--cmq-gray-darker: #383838 /* Font color */
--cmq-white: #FFFFFF
--cmq-gray-light: #D0D0D0
```

## Reference Docs (read when working on that area)
| Topic | Path |
|-------|------|
| Typography & style guide | `docs/claude-templates/typography-style-guide.md` |
| Mobile optimization rules | `docs/claude-templates/mobile-rules.md` |
| SEO content rules | `docs/claude-templates/seo-content-rules.md` |
| UI guidelines | `docs/claude-templates/UIGuidelines.md` |
| Image system | `docs/claude-templates/image-rules.md` |
| Blog post template | `docs/claude-templates/blog-post.md` |
| Deployment guide | `docs/claude-templates/deployment.md` |
| Dev rules | `docs/claude-templates/dev-rules.md` |
| SEO next steps | `docs/SEO-TODO-NEXT-STEPS.md` |

## Commands
```bash
pnpm dev           # Standard development
pnpm dev:stable    # With monitoring & auto-recovery
pnpm dev:clean     # Clean start
pnpm clean         # Remove artifacts
pnpm run build     # Production build
```

---

## CRITICAL RULES — Do Not Violate

### AWS Deployment
- NEVER add `output: 'export'` to next.config.js
- NEVER add `images.unoptimized` to next.config.js
- NEVER create amplify.yml file
- NEVER add rewrite rules like `/<*>` → `/index.html` in Amplify Console
- Only redirect: www redirect (cmqheadshots.com → www.cmqheadshots.com, 302)

### One H1 Per Page
ONE `<section>`, ONE `<h1>`, swap ONLY the background `<Image>` for desktop/mobile:
```tsx
<section className="relative">
  <div className="hidden lg:block absolute inset-0"><Image src="desktop.webp" ... /></div>
  <div className="lg:hidden absolute inset-0"><Image src="mobile.webp" ... /></div>
  <div className="relative ...">
    <h1 className="font-raleway text-4xl lg:text-6xl">PAGE TITLE</h1>
  </div>
</section>
```
- NEVER create two separate sections for desktop/mobile heroes
- NEVER put an H1 inside `hidden lg:block` or `lg:hidden`

### Do Not Modify — Hero Image Pattern
The homepage hero (and every page hero) uses a hand-rolled `<picture>` element with five WebP variants (640/828/1400/1920/2560 px) plus `<link rel="preload" media="...">` blocks in `<Head>`. This pattern is correct and required for LCP performance.

**See `docs/claude-templates/image-rules.md` → "Hero pattern — locked, do not redesign" for the full code template, file specs, and the rejection list of suggestions that future sessions might propose. Do not switch heroes to Next.js `<Image>` with `fill`. Do not drop the preloads.**

### Do Not Modify — Header
- Uses `position: fixed` (not sticky — overflow-x:hidden breaks sticky)
- Shrinks on scroll after 50px
- Layout has `pt-[120px]` — do NOT change this value

### SEO Content (also see `docs/claude-templates/seo-content-rules.md`)
- H2/H3 keyword phrase MUST appear in body text below it
- One H1 per page with primary keyword
- H1 → H2 → H3, never skip levels
- Demo/test pages MUST have `<meta name="robots" content="noindex, nofollow" />`
- Update `public/sitemap.xml` lastmod dates when editing pages

### Dependencies
- Use EXACT researched LTS/STABLE versions — no substitutions
- Tailwind CSS and @tailwindcss/postcss MUST be v4.1.0+
- Versions documented in `docs/dependency-versions.md`

### No Local Storage for Logs or Archives
- Session logs go to `s3://cmqheadshots-website-images/logs/` (e.g., `2026-04-01.md`)
- Archive documents go to `s3://cmqheadshots-website-images/archive/`
- NEVER store logs or archive files locally — upload directly to S3
- Delete any local temp files after uploading

### Security Headers (in next.config.js)
HSTS, X-Frame-Options: SAMEORIGIN, X-Content-Type-Options: nosniff, X-XSS-Protection, Referrer-Policy, Permissions-Policy

---

## Current Stack Versions
Next.js 15.4.6 | React 19.1.0 | TypeScript 5.9.2 | Tailwind CSS 4.1.0 | pnpm 10.14.0

## Deployment
- **Repo**: github.com/cquinn02/photography-website
- **Branch**: main
- **Env var**: `NEXT_PUBLIC_GA_ID`

## Troubleshooting
1. Stop server (Ctrl+C) → `pnpm clean` → `pnpm dev:stable`
2. Check `/logs/` for errors
3. See `docs/stable-dev-setup.md` for full guide

## If Site Goes Down
1. Check Amplify Console → Rewrites and redirects
2. Should be ONLY the www redirect (302)
3. If `/<*>` → `/index.html` rule exists, DELETE IT
4. Redeploy latest successful build
