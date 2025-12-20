# Client Gallery System Documentation

**Last Updated:** December 20, 2025

## Overview

The client gallery system allows you to create secure photo galleries for clients with magic link access, email notifications, and download tracking. Originally a separate subdomain app (`clients.cmqheadshots.com`), it has been fully integrated into the main website.

---

## Live URLs

| Function | URL |
|----------|-----|
| Admin Login | https://www.cmqheadshots.com/admin |
| Admin Dashboard | https://www.cmqheadshots.com/admin/dashboard |
| Client Gallery | https://www.cmqheadshots.com/gallery/[token] |
| Proofing Portal | https://www.cmqheadshots.com/proofs/[token] |

---

## Admin Workflow

### 1. Login
- Go to https://www.cmqheadshots.com/admin
- Enter the admin password (set in AWS Amplify environment variables as `ADMIN_PASSWORD`)

### 2. Create a Gallery
- Click "New Gallery" on the dashboard
- Fill in client details: First Name, Last Name, Email, Session Name
- Set expiration date (default: 30 days)
- Click "Create Gallery"

### 3. Upload Photos
- Click on a gallery to open it
- Click "Upload Photos" button
- Select multiple images (any size, any quantity)
- Photos upload directly to S3 with progress indicator:
  - "Preparing 15 files..."
  - "Uploading 1 of 15: photo1.jpg"
  - "Successfully uploaded 15 photos!"

### 4. Send Client Email
- Choose template: **Business** or **Actor** (dropdown next to Send Email button)
- Click "Send Email"
- Confirm the send
- Client receives branded email with gallery link
- You receive a BCC copy of every email sent

### 5. Track Activity
- View count shows when client opens gallery
- Download history shows what they've downloaded

---

## Photo Upload System

### How It Works (Presigned URL Upload)
The system uses presigned URLs for direct-to-S3 uploads, bypassing server size limits:

1. **Frontend** requests presigned URLs from `/api/admin/galleries/[id]/presigned-urls`
2. **Each file** uploads directly from browser to S3 (no server processing)
3. **After upload**, photos are registered in database via `/api/admin/galleries/[id]/register-photos`

### Benefits
- No file size limits (uploads go directly to S3)
- Can upload 100+ photos at once
- Faster uploads (parallel, not sequential through server)
- Progress tracking shows each file

### Why Presigned URLs?
AWS Amplify has a ~10MB request body limit. Direct server uploads would fail with "413 Content Too Large" for typical photo batches. Presigned URLs bypass this by uploading directly to S3.

### Filename Parsing
Photos are automatically parsed for metadata:
- `John Smith_Company_001-print_ready.jpg` → Person: "John Smith", Type: "High Resolution"
- Photos are grouped by person name in the gallery view

---

## Email Templates

### Business Template
For corporate/professional headshots. Includes:
- 7x5 full resolution at 300 dpi
- LinkedIn profile version
- Facebook profile version
- Instagram profile version
- Black & White social media version
- Teams profile version

### Actor Template
For actor/performer headshots. Includes:
- `-1x1` — Square crop (Instagram, profiles)
- `-B&W` — Black & white social media
- `-full` — Full resolution for print
- `-vert` — Vertical crop
- `-horz-5x4` — Horizontal 5×4 crop

### Email Features
- All client emails are BCC'd to admin (cindy@cmqheadshots.com)
- CMQ branding with logo header
- Expiration date warning
- "Access Your Gallery" button with magic link

---

## AWS Resources

| Resource | Value |
|----------|-------|
| Amplify App ID | `d2459kj32lb9y4` |
| Region | `us-east-1` |
| S3 Bucket | `cmq-client-galleries` |
| CloudFront | `d3gob5idai29dv.cloudfront.net` |
| Route53 Hosted Zone | `Z021424516H1W5UFXD647` |

---

## S3 Bucket Configuration

### Bucket Name
`cmq-client-galleries` (original bucket from subdomain setup)

### CORS Configuration
The S3 bucket MUST have this CORS configuration for presigned URL uploads to work:

**S3 Console → cmq-client-galleries → Permissions → CORS:**

```json
[
    {
        "AllowedHeaders": ["*"],
        "AllowedMethods": ["GET", "PUT", "POST", "HEAD"],
        "AllowedOrigins": [
            "https://www.cmqheadshots.com",
            "https://cmqheadshots.com",
            "http://localhost:3100"
        ],
        "ExposeHeaders": ["ETag"]
    }
]
```

### IAM Permissions
The IAM user (credentials in `S3_ACCESS_KEY_ID` / `S3_SECRET_ACCESS_KEY`) needs:
- `s3:PutObject` - Upload files
- `s3:GetObject` - Read files
- `s3:DeleteObject` - Delete files
- `s3:ListBucket` - List bucket contents

---

## Environment Variables (AWS Amplify)

All these must be set in **AWS Amplify Console → Hosting → Environment variables**:

| Variable | Value | Description |
|----------|-------|-------------|
| `DATABASE_URL` | `postgresql://neondb_owner:...@ep-cool-rice-ahr9wnsg-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require` | Neon PostgreSQL connection string |
| `S3_ACCESS_KEY_ID` | `AKIA...` | AWS IAM access key |
| `S3_SECRET_ACCESS_KEY` | `(secret)` | AWS IAM secret key |
| `S3_REGION` | `us-east-1` | S3 bucket region |
| `S3_BUCKET` | `cmq-client-galleries` | S3 bucket name |
| `ADMIN_PASSWORD` | `(your password)` | Admin login password (no special chars like `!`) |
| `ADMIN_EMAIL` | `cindy@cmqheadshots.com` | Admin email for BCC |
| `SMTP_HOST` | `smtp.mail.us-east-1.awsapps.com` | Amazon WorkMail SMTP |
| `SMTP_PORT` | `465` | SMTP port (SSL) |
| `SMTP_USER` | `cindy@cmqheadshots.com` | SMTP username |
| `SMTP_PASSWORD` | `(password)` | SMTP password |
| `SMTP_FROM` | `cindy@cmqheadshots.com` | From email address |
| `NEXT_PUBLIC_APP_URL` | `https://www.cmqheadshots.com` | App URL for magic links |

### Important Notes on Environment Variables

1. **Changes require redeploy** - After changing env vars in Amplify, you must redeploy for changes to take effect

2. **Special characters in passwords** - Avoid `!` and other special characters in `ADMIN_PASSWORD` as they can get escaped/stripped

3. **How env vars work** - The `amplify.yml` writes env vars to `.env.production` during build, which Next.js reads at runtime

---

## amplify.yml Configuration

This file tells AWS Amplify how to build and deploy. Critical for passing environment variables to the SSR runtime:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - corepack enable
        - corepack prepare pnpm@10.14.0 --activate
        - pnpm install
        - npx prisma generate
    build:
      commands:
        - |
          echo "ADMIN_PASSWORD=\"$ADMIN_PASSWORD\"" >> .env.production
          echo "ADMIN_EMAIL=\"$ADMIN_EMAIL\"" >> .env.production
          echo "DATABASE_URL=\"$DATABASE_URL\"" >> .env.production
          echo "S3_ACCESS_KEY_ID=\"$S3_ACCESS_KEY_ID\"" >> .env.production
          echo "S3_SECRET_ACCESS_KEY=\"$S3_SECRET_ACCESS_KEY\"" >> .env.production
          echo "S3_REGION=\"$S3_REGION\"" >> .env.production
          echo "S3_BUCKET=\"$S3_BUCKET\"" >> .env.production
          echo "SMTP_HOST=\"$SMTP_HOST\"" >> .env.production
          echo "SMTP_PORT=\"$SMTP_PORT\"" >> .env.production
          echo "SMTP_USER=\"$SMTP_USER\"" >> .env.production
          echo "SMTP_PASSWORD=\"$SMTP_PASSWORD\"" >> .env.production
          echo "SMTP_FROM=\"$SMTP_FROM\"" >> .env.production
          echo "NEXT_PUBLIC_APP_URL=\"$NEXT_PUBLIC_APP_URL\"" >> .env.production
        - pnpm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
      - '../.env.production'
  cache:
    paths:
      - .next/cache/**/*
      - node_modules/**/*
```

**Why this is needed:** AWS Amplify environment variables are available at build time but NOT at SSR runtime by default. This workaround writes them to `.env.production` which gets included in the deployment artifacts.

---

## API Endpoints

### Admin (Protected - requires login)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/admin/login` | Login with password |
| POST | `/api/admin/logout` | Clear session |
| GET | `/api/admin/check-auth` | Verify authentication |
| GET | `/api/admin/galleries` | List all galleries |
| POST | `/api/admin/galleries` | Create gallery |
| GET | `/api/admin/galleries/[id]` | Get gallery details |
| PATCH | `/api/admin/galleries/[id]` | Update gallery |
| DELETE | `/api/admin/galleries/[id]` | Delete gallery + S3 files |
| POST | `/api/admin/galleries/[id]/presigned-urls` | Get S3 upload URLs |
| POST | `/api/admin/galleries/[id]/register-photos` | Register uploaded photos |
| DELETE | `/api/admin/galleries/[id]/photos` | Delete photos |
| POST | `/api/admin/galleries/[id]/send-email` | Send gallery ready email |

### Client (Public - magic link access)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/gallery/[token]` | View gallery |
| GET | `/proofs/[token]` | View proofs for selection |

---

## File Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── page.tsx              # Login page
│   │   ├── dashboard/page.tsx    # Gallery list
│   │   ├── gallery/[id]/page.tsx # Gallery management
│   │   └── proofs/[id]/page.tsx  # Proof management
│   ├── api/admin/
│   │   ├── login/route.ts
│   │   ├── logout/route.ts
│   │   ├── check-auth/route.ts
│   │   ├── galleries/
│   │   │   ├── route.ts
│   │   │   └── [id]/
│   │   │       ├── route.ts
│   │   │       ├── photos/route.ts
│   │   │       ├── presigned-urls/route.ts
│   │   │       ├── register-photos/route.ts
│   │   │       └── send-email/route.ts
│   │   └── proofs/...
│   ├── gallery/[token]/page.tsx  # Client gallery view
│   └── proofs/[token]/page.tsx   # Client proof selection
├── lib/
│   ├── prisma.ts                 # Database client
│   ├── s3.ts                     # S3 operations + presigned URLs
│   ├── email.ts                  # Email templates (with BCC)
│   └── filename-parser.ts        # Photo metadata extraction
└── prisma/
    └── schema.prisma             # Database models
```

---

## Troubleshooting

### Can't Login ("Invalid password")
1. Check `ADMIN_PASSWORD` is set in AWS Amplify environment variables
2. Make sure password doesn't contain special characters like `!`
3. Redeploy after changing environment variables
4. Debug: Create temp endpoint to check if env var is loading (see session notes)

### Photos Won't Upload
1. **Check S3 CORS** - Most common issue. Bucket needs CORS config (see above)
2. **Check S3 credentials** in Amplify env vars (`S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`)
3. **Check browser Network tab** for specific error:
   - `403 Forbidden` = CORS or permissions issue
   - `413 Content Too Large` = Should not happen with presigned URLs
4. **Verify S3_BUCKET** matches actual bucket name

### Emails Not Sending
1. Verify SMTP credentials in Amplify environment variables
2. Check `SMTP_PASSWORD` doesn't have special characters that got escaped
3. Localhost has a safety check that prevents sending (for testing)

### Slow Deployments
- Builds take ~7 minutes due to large dependencies (puppeteer, prisma, etc.)
- pnpm version is pinned to `10.14.0` to avoid re-downloading
- Cache paths configured for `node_modules` and `.next/cache`

### Environment Variables Not Working
1. Check they're set in Amplify Console → Hosting → Environment variables
2. Make sure `amplify.yml` includes the variable in the echo commands
3. Redeploy after any changes
4. Variables are written to `.env.production` during build - check build logs

---

## Session Log: December 20, 2025

### Issues Fixed

#### 1. Admin Login Not Working
**Problem:** "Invalid password" error even with correct password
**Cause:** Environment variables weren't being passed to SSR runtime
**Solution:** Created `amplify.yml` that writes env vars to `.env.production` during build

#### 2. Email Template Dropdown Missing
**Problem:** Business/Actor template selector not showing on gallery page
**Cause:** Code was modified locally but never pushed to production
**Solution:** Committed and pushed the pending changes

#### 3. Admin Not Receiving Email Copies
**Problem:** No way to see what emails clients receive
**Solution:** Added BCC to admin email (`cindy@cmqheadshots.com`) on all client emails in `src/lib/email.ts`

#### 4. Photo Uploads Failing (413 Error)
**Problem:** Uploading multiple photos failed with "413 Content Too Large"
**Cause:** AWS Amplify has ~10MB body size limit for requests
**Solution:** Implemented presigned URL uploads:
- Created `/api/admin/galleries/[id]/presigned-urls` endpoint
- Created `/api/admin/galleries/[id]/register-photos` endpoint
- Updated frontend to upload directly to S3
- Added progress indicator

#### 5. S3 CORS Error
**Problem:** Direct S3 uploads blocked by browser
**Cause:** S3 bucket didn't have CORS configured for new domain
**Solution:** Added CORS configuration allowing `www.cmqheadshots.com`

#### 6. S3 Bucket Consolidation
**Problem:** Old bucket `cmq-client-galleries` from subdomain setup
**Solution:** Created new bucket `cmqheadshots-galleries` with proper CORS, updated all references

### Files Modified
- `amplify.yml` - Created for env var handling
- `src/lib/email.ts` - Added BCC to admin
- `src/lib/s3.ts` - Added `getPresignedUploadUrl` function
- `src/app/admin/gallery/[id]/page.tsx` - Presigned URL upload logic + progress
- `src/app/api/admin/galleries/[id]/presigned-urls/route.ts` - New endpoint
- `src/app/api/admin/galleries/[id]/register-photos/route.ts` - New endpoint
- `next.config.js` - Updated S3 bucket domain
- `CLIENT-GALLERY-MIGRATION-STATUS.md` - This documentation
- `.env.example` - Updated bucket name
- `MERGE-PLAN.md` - Updated bucket name

### Commits (December 20, 2025)
1. Add temporary debug endpoint for admin password troubleshooting
2. Add amplify.yml to pass environment variables to SSR runtime
3. Add env config to next.config.js for build-time env var injection
4. Fix: Write env vars to .env.production during build
5. Add email template dropdown (Business/Actor) to admin gallery page
6. Remove debug endpoint and pin pnpm version for faster builds
7. Add admin BCC to all client emails
8. Add temporary S3 debug endpoint
9. Implement presigned URL uploads for large file batches
10. Update client gallery documentation
11. Improve upload error messages for debugging
12. Update S3 bucket to cmqheadshots-galleries
13. Update all references to new S3 bucket

---

## Migration History

Originally deployed as separate app at `clients.cmqheadshots.com`. Merged into main website December 2025:

1. Code merged from `/photography-gallery-system` to `/photography-website`
2. Environment variables configured in Amplify
3. `amplify.yml` created to pass env vars to SSR runtime (Dec 20, 2025)
4. Presigned URL uploads implemented (Dec 20, 2025)
5. Email BCC to admin implemented (Dec 20, 2025)
6. New S3 bucket `cmqheadshots-galleries` created with CORS (Dec 20, 2025)

---

## Old Resources (Can Be Deleted)

These resources from the original subdomain setup are no longer needed:

- S3 Bucket: `cmqheadshots-galleries` (was created but never used - empty bucket)
- S3 Bucket: `cmqheadshots.com` (appears unused)
- Amplify App for `clients.cmqheadshots.com` (if still exists)

**IMPORTANT:** Do NOT delete `cmq-client-galleries` - this is the active bucket containing all client photos!

---

*For main website documentation, see CLAUDE.md*
