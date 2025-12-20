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

---

## Environment Variables (AWS Amplify)

All these must be set in AWS Amplify Console → Hosting → Environment variables:

```
# Database
DATABASE_URL=postgresql://...

# AWS S3
S3_ACCESS_KEY_ID=AKIA...
S3_SECRET_ACCESS_KEY=...
S3_REGION=us-east-1
S3_BUCKET=cmq-client-galleries

# Admin Auth
ADMIN_PASSWORD=your-password-here
ADMIN_EMAIL=cindy@cmqheadshots.com

# Email (Amazon WorkMail)
SMTP_HOST=smtp.mail.us-east-1.awsapps.com
SMTP_PORT=465
SMTP_USER=cindy@cmqheadshots.com
SMTP_PASSWORD=...
SMTP_FROM=cindy@cmqheadshots.com

# App URL
NEXT_PUBLIC_APP_URL=https://www.cmqheadshots.com
```

**Important:** Environment variables are written to `.env.production` during build via `amplify.yml`. Changes require a redeploy.

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
│   ├── email.ts                  # Email templates
│   └── filename-parser.ts        # Photo metadata extraction
└── prisma/
    └── schema.prisma             # Database models
```

---

## Troubleshooting

### Can't Login
- Check `ADMIN_PASSWORD` is set in AWS Amplify environment variables
- Redeploy after changing environment variables

### Photos Won't Upload
- Check S3 credentials (`S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`) in Amplify
- Verify IAM user has S3 permissions
- Check browser console for specific errors

### Emails Not Sending
- Verify SMTP credentials in Amplify environment variables
- Check `SMTP_PASSWORD` doesn't have special characters that got escaped
- Localhost has a safety check that prevents sending (for testing)

### Slow Deployments
- Builds take ~7 minutes due to dependencies
- pnpm version is pinned to avoid re-downloading

---

## Migration History

Originally deployed as separate app at `clients.cmqheadshots.com`. Merged into main website December 2025:

1. Code merged from `/photography-gallery-system` to `/photography-website`
2. Environment variables configured in Amplify
3. `amplify.yml` created to pass env vars to SSR runtime
4. Presigned URL uploads implemented (Dec 20, 2025)
5. Email BCC to admin implemented (Dec 20, 2025)

---

*For main website documentation, see CLAUDE.md*
