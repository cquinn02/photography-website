# Photography Website - CMQ Headshots

## Tech Stack
- **Framework**: Next.js SSR (NOT static export) on AWS Amplify
- **Language**: TypeScript | **Styling**: Tailwind CSS 4.1+ | **Package Manager**: pnpm
- **Image CDN**: https://images.cmqheadshots.com (CloudFront) — no local image storage
- **Port**: 3100 | **Deploy**: AWS Amplify auto-detects Next.js SSR

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
| Image system | `docs/claude-templates/image-system.md` |
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

### Do Not Modify — Homepage Hero Image
```tsx
{/* Uses width/height (NOT fill) for natural aspect ratio. Changing breaks layout. */}
<section className="relative w-full">
  <Image src="..." width={1920} height={1080} className="w-full h-auto" sizes="100vw" priority />
</section>
```

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
