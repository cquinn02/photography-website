# Deployment

## Platform
**AWS Amplify Hosting** — Next.js SSR (Server-Side Rendering)

This site uses SSR, NOT static export. Amplify auto-detects the Next.js SSR framework.

## Repository
- **GitHub**: github.com/cquinn02/photography-website
- **Branch**: main
- **Auto-deploy**: Pushes to `main` trigger automatic deployment

## Build Process

1. Push to `main` branch
2. AWS Amplify detects the push and starts a build
3. Amplify runs `pnpm run build` (auto-detected)
4. Amplify deploys the SSR application

No `amplify.yml` file is needed — Amplify handles everything automatically.

## Environment Variables

Set these in AWS Amplify Console > Environment Variables:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID |

Local development variables (in `.env.development`):

| Variable | Description |
|----------|-------------|
| `PORT` | Dev server port (3100) |
| `NEXT_TELEMETRY_DISABLED` | Disable Next.js telemetry |
| `NODE_OPTIONS` | Node memory allocation |

**Never commit `.env` files with secrets to the repository.**

## Pre-Deploy Checklist

- [ ] `pnpm build` completes without errors
- [ ] No TypeScript errors
- [ ] ESLint passes (`pnpm lint`)
- [ ] Title tags under 60 characters
- [ ] Meta descriptions under 160 characters
- [ ] All demo/test pages have `noindex` meta tag
- [ ] No `output: 'export'` in `next.config.js`
- [ ] No `amplify.yml` file in the repository
- [ ] No `images.unoptimized` in `next.config.js`

## Production URL
- **Primary**: https://www.cmqheadshots.com
- **Redirect**: https://cmqheadshots.com -> https://www.cmqheadshots.com (302)

## Redirects

The only redirect configured in AWS Amplify Console is:
- `https://cmqheadshots.com` -> `https://www.cmqheadshots.com` (302)

**There should be NO `/<*>` -> `/index.html` rewrite rule.** If one exists, delete it — it breaks SSR routing.

All other redirects are handled in `next.config.js` under `async redirects()`.

## Rollback

If a deployment breaks the site:
1. Go to AWS Amplify Console
2. Find the last successful deployment
3. Click "Redeploy this version"
4. Check Rewrites and Redirects — ensure only the www redirect exists
5. If there's a `/<*>` -> `/index.html` rule, delete it

## Troubleshooting

### Site returns 404 for all pages
- Check AWS Amplify > Rewrites and Redirects
- Delete any `/<*>` -> `/index.html` rule
- Redeploy

### Site shows blank page
- Check that `output: 'export'` is NOT in `next.config.js`
- Check that no `amplify.yml` file exists
- Redeploy from the last working commit
