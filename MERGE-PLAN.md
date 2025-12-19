# Client Gallery Merge Plan
**Date:** December 19, 2025
**Goal:** Merge client-galleries app into photography-website so both can share the same domain

---

## STATUS: MERGE COMPLETE - READY TO DEPLOY

### Completed:
- [x] Created src/lib folder with prisma.ts, s3.ts, email.ts, filename-parser.ts
- [x] Copied src/app folder from client-galleries (all pages and API routes)
- [x] Copied prisma schema
- [x] Added dependencies to package.json
- [x] Merged environment variables to .env.development
- [x] Updated next.config.js for S3 image domains and ESLint config
- [x] Updated tsconfig.json for ES2017 target
- [x] Ran pnpm install and prisma generate
- [x] Build completed successfully!
- [x] Tested locally - all pages return 200 OK

### Ready for you:
- [ ] Deploy to Amplify (push to GitHub)
- [ ] Add clients subdomain in Amplify Console

---

## Phase 1: Add Dependencies

Add these to photography-website package.json:
```json
"@prisma/client": "^5.22.0",
"prisma": "^5.22.0",
"@aws-sdk/client-s3": "^3.952.0",
"@aws-sdk/s3-request-presigner": "^3.952.0",
"nodemailer": "^7.0.11",
"jszip": "^3.10.1",
"uuid": "^13.0.0"
```

DevDependencies:
```json
"@types/nodemailer": "^7.0.4",
"@types/uuid": "^11.0.0"
```

---

## Phase 2: Copy Code

### Files to copy from client-galleries:

**Library files (src/lib/):**
- prisma.ts (Prisma client singleton)
- s3.ts (S3 upload/download helpers)
- email.ts (Email templates)
- filename-parser.ts (Parse photo filenames)

**App Router pages (src/app/):**
- layout.tsx (App Router layout - RENAME or merge)
- globals.css (Merge styles if needed)
- page.tsx (Root page - becomes /clients landing)
- gallery/[token]/page.tsx (Client gallery view)
- proofs/[token]/page.tsx (Proof selection page)
- admin/page.tsx (Admin login)
- admin/dashboard/page.tsx (Admin dashboard)
- admin/gallery/[id]/page.tsx (Gallery management)
- admin/proofs/[id]/page.tsx (Proof management)

**API Routes (src/app/api/):**
- admin/check-auth/route.ts
- admin/login/route.ts
- admin/logout/route.ts
- admin/galleries/route.ts
- admin/galleries/[id]/route.ts
- admin/galleries/[id]/photos/route.ts
- admin/galleries/[id]/send-email/route.ts
- admin/invoices/route.ts
- admin/proofs/route.ts
- admin/proofs/[id]/route.ts
- admin/proofs/[id]/photos/route.ts
- admin/proofs/[id]/send-email/route.ts
- admin/tab-stats/route.ts
- gallery/[token]/route.ts
- gallery/[token]/download/route.ts
- gallery/[token]/track-tab/route.ts
- gallery/[token]/acknowledge-fee-policy/route.ts
- proofs/[token]/route.ts
- proofs/[token]/select/route.ts
- proofs/[token]/submit/route.ts

**Prisma schema:**
- prisma/schema.prisma

---

## Phase 3: Configuration

### Environment Variables (add to .env):
```
# Database (Neon PostgreSQL)
DATABASE_URL="postgresql://..."

# AWS S3 (Photo Storage)
S3_ACCESS_KEY_ID="..."
S3_SECRET_ACCESS_KEY="..."
S3_REGION="us-east-1"
S3_BUCKET="cmq-client-galleries"

# Admin Authentication
ADMIN_PASSWORD="..."

# Client App URL (for magic links)
NEXT_PUBLIC_APP_URL="https://clients.cmqheadshots.com"

# Email (Amazon WorkMail SMTP)
SMTP_HOST="smtp.mail.us-east-1.awsapps.com"
SMTP_PORT="465"
SMTP_USER="cindy@cmqheadshots.com"
SMTP_PASSWORD="..."
SMTP_FROM="cindy@cmqheadshots.com"
ADMIN_EMAIL="cindy@cmqheadshots.com"
```

### next.config.js additions:
```js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cmq-client-galleries.s3.us-east-1.amazonaws.com',
    },
  ],
}
```

---

## Phase 4: Test Locally

1. Run `pnpm install` to install new dependencies
2. Run `npx prisma generate` to generate Prisma client
3. Run `pnpm dev` to start the server
4. Test main site at http://localhost:3100
5. Test client gallery at http://localhost:3100/gallery/[token]
6. Test admin at http://localhost:3100/admin

---

## Phase 5: Deploy

1. Push to GitHub
2. Amplify will auto-deploy
3. Add `clients` subdomain in Amplify Console:
   - Domain: cmqheadshots.com
   - Subdomain: clients → main branch

**IMPORTANT:** Since both are in the same Amplify app, no domain conflicts!

---

## Architecture After Merge

```
photography-website/
├── src/
│   ├── pages/           # Pages Router (main site)
│   │   ├── index.tsx    # Homepage
│   │   ├── about.tsx
│   │   ├── pricing-*.tsx
│   │   └── ...
│   ├── app/             # App Router (client galleries)
│   │   ├── layout.tsx
│   │   ├── page.tsx     # /clients landing
│   │   ├── gallery/
│   │   ├── proofs/
│   │   ├── admin/
│   │   └── api/
│   ├── lib/             # Shared libraries
│   │   ├── prisma.ts
│   │   ├── s3.ts
│   │   ├── email.ts
│   │   └── filename-parser.ts
│   └── components/      # Shared components
└── prisma/
    └── schema.prisma
```

---

## URL Structure After Merge

- www.cmqheadshots.com → Main site (Pages Router)
- clients.cmqheadshots.com → Client portal (App Router)
- clients.cmqheadshots.com/gallery/[token] → Individual galleries
- clients.cmqheadshots.com/proofs/[token] → Proof selection
- clients.cmqheadshots.com/admin → Admin dashboard

---

## If Session Crashes

Tell new Claude:
"Read MERGE-PLAN.md - I'm merging the client gallery system into the main website. Continue from where we left off."

---

*Last updated: December 19, 2025*
