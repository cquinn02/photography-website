# CMQ Headshots - Comprehensive Site Audit
**Date**: March 4, 2026
**Site**: cmqheadshots.com

---

## PAGE-BY-PAGE H-TAG AUDIT (39 Pages Total)

### Main Pages

| # | Page | Route | H1 |
|---|------|-------|----|
| 1 | **Home** | `/` | "HEADSHOTS PHOENIX" + "COMFORTABLE, EASY HEADSHOTS YOU'RE GOING TO LOVE" |
| 2 | **About** | `/about` | "PROFESSIONAL PHOTOGRAPHER PHOENIX AZ" |
| 3 | **Contact** | `/contactus` | "CONTACT CMQ HEADSHOTS" |

### Service/Pricing Pages

| # | Page | Route | H1 |
|---|------|-------|----|
| 4 | **Individual Pricing** | `/pricing-individual` | "PHOENIX BUSINESS HEADSHOTS" |
| 5 | **Corporate Staff** | `/corporate-staff-headshots` | "CORPORATE STAFF HEADSHOTS IN PHOENIX WITHOUT THE HASSLE" |
| 6 | **Actor Headshots** | `/actor-headshots-phoenix` | "ACTOR HEADSHOTS PHOENIX, AZ" |
| 7 | **Realtor Headshots** | `/realtor-headshots-phoenix` | "PHOENIX REALTOR HEADSHOTS" |
| 8 | **LinkedIn Headshots** | `/linkedin-headshots` | "PHOENIX LINKEDIN EXPRESS HEADSHOTS" |
| 9 | **Team Composite** | `/team-composite-headshots` | "TEAM COMPOSITE HEADSHOTS" |
| 10 | **Convention Headshots** | `/convention-headshots-phoenix` | (service page) |
| 11 | **ERAS Medical** | `/eras-medical-headshots` | (service page) |
| 12 | **Headshot Booth** | `/headshot-booth-phoenix` | (service page) |

### Location Pages (13 pages, all currently `noindex`)

| # | Page | Route | H1 |
|---|------|-------|----|
| 13 | Scottsdale | `/headshots-scottsdale` | "HEADSHOTS SCOTTSDALE" |
| 14 | Tempe | `/headshots-tempe` | "HEADSHOTS TEMPE" |
| 15 | Mesa | `/headshots-mesa` | "HEADSHOTS MESA" |
| 16 | Gilbert | `/headshots-gilbert` | "HEADSHOTS GILBERT" |
| 17 | Chandler | `/headshots-chandler` | "HEADSHOTS CHANDLER" |
| 18 | East Valley | `/headshots-east-valley` | "HEADSHOTS EAST VALLEY" |
| 19 | Carefree | `/headshots-carefree` | "HEADSHOTS CAREFREE" |
| 20 | Cave Creek | `/headshots-cave-creek` | "HEADSHOTS CAVE CREEK" |
| 21 | Fountain Hills | `/headshots-fountain-hills` | "HEADSHOTS FOUNTAIN HILLS" |
| 22 | Glendale | `/headshots-glendale` | "HEADSHOTS GLENDALE" |
| 23 | Peoria | `/headshots-peoria` | "HEADSHOTS PEORIA" |
| 24 | Paradise Valley | `/headshots-paradise-valley` | "HEADSHOTS PARADISE VALLEY" |
| 25 | Anthem | `/headshots-anthem` | "HEADSHOTS ANTHEM" |

### Blog Pages

| # | Page | Route | H1 |
|---|------|-------|----|
| 26 | Blog Index | `/blog` | "BLOGS" |
| 27 | Best Pro Headshot | `/blog/best-professional-headshot-photographer-near-me` | Blog title |
| 28 | Why Hire Pro | `/blog/why-hire-a-professional-headshot-photographer` | Blog title |
| 29 | Horizontal Headshots | `/blog/why-i-shoot-headshots-horizontally` | Blog title |
| 30 | Women's Clothing | `/blog/what-to-wear-women` | Blog title |
| 31 | Men's Clothing | `/blog/mens-headshot-fashion-tips` | Blog title |
| 32 | Makeup Tips | `/blog/what-kind-of-makeup` | Blog title |
| 33 | Photoshop | `/blog/should-photographer-photoshop-you` | Blog title |
| 34 | How to Prep | `/blog/how-to-prep-for-headshot` | Blog title |

### Other Pages

| # | Page | Route | H1 |
|---|------|-------|----|
| 35 | Privacy Policy | `/privacy-policy` | Policy heading |
| 36 | Terms & Conditions | `/terms-and-conditions` | Terms heading |
| 37 | Thank You (A) | `/athankyou` | Confirmation |
| 38 | Thank You (B) | `/bthank-you` | Confirmation |
| 39 | Style Guide | `/style-guide` | Internal only |

### SEO Notes on H-Tags
- **Homepage has 2 H1 tags** — should only have 1 for SEO best practice
- All service pages have proper single H1 with target keywords
- Location pages follow consistent H1 pattern
- Blog index H1 is just "BLOGS" — weak for SEO

---

## SECURITY CONCERNS (Ranked by Severity)

### CRITICAL (Fix Immediately)

| # | Issue | File/Location | Details |
|---|-------|---------------|---------|
| 1 | **Hardcoded admin password in .env.development** | `.env.development` | `ADMIN_PASSWORD` is in version control — anyone with repo access gets admin |
| 2 | **Insecure TLS in email config** | `src/lib/email.ts` | `rejectUnauthorized: false` + SSLv3 ciphers — disables certificate validation and uses deprecated protocol |
| 3 | **No rate limiting on admin login** | `src/app/api/admin/login/route.ts` | Brute force attacks can try unlimited passwords |
| 4 | **No CSRF protection** | All POST/PATCH/DELETE API routes | Endpoints lack CSRF tokens — admin could be tricked into unwanted changes |

### HIGH (Fix Soon)

| # | Issue | File/Location | Details |
|---|-------|---------------|---------|
| 5 | **No input validation library** | All API routes | Email format, string lengths, XSS not validated on API inputs |
| 6 | **Missing Content-Security-Policy header** | `next.config.js` | Other security headers exist but no CSP — leaves XSS risk |
| 7 | **N+1 query on presigned URLs** | `src/app/api/admin/galleries/[id]/route.ts` | Gallery with 100 photos = 100 individual S3 API calls |
| 8 | **No file type/size validation on uploads** | Upload API endpoint | Allows 50MB but doesn't check MIME type — could upload malicious files |
| 9 | **Inconsistent error handling** | Multiple API routes | Some endpoints leak error details to client, others swallow them silently |
| 10 | **ESLint disabled during builds** | `next.config.js` | `ignoreDuringBuilds: true` allows lint errors through |

### MEDIUM

| # | Issue | File/Location | Details |
|---|-------|---------------|---------|
| 11 | **In-memory rate limiting** | `src/app/api/gallery/[token]/track-tab/route.ts` | Resets on server restart, not shared across instances |
| 12 | **No error boundaries** | Component tree | Single component crash takes down entire page |
| 13 | **`dangerouslySetInnerHTML` usage** | `FAQSchema.tsx`, `Layout.tsx`, `about.tsx`, `actor-headshots-phoenix.tsx` | Used for JSON-LD — risky pattern if refactored carelessly |
| 14 | **No env variable validation at startup** | `src/lib/s3.ts` and others | Uses `!` non-null assertions — runtime crash if env vars missing |
| 15 | **Console.logs in production code** | Multiple API routes | Leaks internal details in browser console |
| 16 | **Missing audit logging** | Admin auth system | No logging of failed login attempts |

### LOW

| # | Issue | File/Location | Details |
|---|-------|---------------|---------|
| 17 | **Magic numbers scattered in code** | Multiple files | `3600`, `60 * 1000` etc. — should be named constants |
| 18 | **Duplicate component logic** | `FAQSection.tsx`, `AccordionFAQSection.tsx` | Share similar toggle logic that could be a shared hook |
| 19 | **No request caching (SWR/React Query)** | Admin dashboard | Makes redundant API calls on navigation |
| 20 | **Prisma connection pool not configured** | `src/lib/prisma.ts` | Uses defaults, may not be optimal for production |

---

## CODE QUALITY & EFFICIENCY

### What's Working Well
- TypeScript used throughout — catches type errors at build time
- Next.js Image component used properly for most images
- Gzip compression enabled (`compress: true` in next.config.js)
- Strong security headers (HSTS, X-Frame-Options, X-Content-Type-Options, etc.)
- Proper use of SSG/SSR for SEO pages
- LocationPageTemplate reduces code duplication for 13 location pages
- Consistent brand styling with Tailwind utility classes

### Areas for Improvement
- Add `zod` validation library for all API input validation
- Standardize error response format across all API routes
- Extract rate limiting to reusable `src/lib/rate-limit.ts`
- Add React error boundaries around major page sections
- Replace `console.log` with proper logging library (pino/winston)
- Create `src/lib/constants.ts` for magic numbers
- Consider React Query or SWR for admin dashboard data fetching

---

## PERFORMANCE

### Good
- Images optimized with Next.js Image component
- Compression enabled
- Static generation used where appropriate
- Priority loading on hero images

### Needs Improvement
- N+1 pattern on gallery presigned URL generation (100 photos = 100 S3 calls)
- LogoCarousel renders 48 Image components (24 logos × 2 for infinite scroll)
- FAQSection recreates Set on every card toggle, causing unnecessary re-renders
- No lazy loading on below-fold components
- Tab stats API fetches all interactions then aggregates in JS (should use DB aggregation)

---

## SUMMARY SCORES

| Category | Score | Notes |
|----------|-------|-------|
| **Security** | 6/10 | Good headers, weak auth & validation |
| **Code Quality** | 7/10 | TypeScript helps, needs validation & error standardization |
| **Performance** | 7/10 | Images well-optimized, N+1 pattern on gallery API |
| **SEO** | 8/10 | Strong meta tags, 2 H1s on homepage needs fixing |
| **Overall** | 7/10 | Solid foundation, needs security hardening |

---

## RECOMMENDED FIX PRIORITY

### Phase 1 — Critical Security (Do First)
1. Fix insecure TLS email config (quick fix)
2. Ensure .env.development is in .gitignore
3. Add rate limiting to admin login
4. Add Content-Security-Policy header

### Phase 2 — Input Validation
5. Install `zod` and add validation to all API routes
6. Add file type/MIME validation on uploads
7. Standardize error handling across API routes

### Phase 3 — SEO Fixes
8. Fix homepage to single H1
9. Strengthen blog index H1

### Phase 4 — Code Quality
10. Add error boundaries
11. Replace console.logs with proper logging
12. Extract shared component logic
13. Re-enable ESLint in builds

---

*Generated by Claude Code audit — March 4, 2026*
