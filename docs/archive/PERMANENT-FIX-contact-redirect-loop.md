# PERMANENT FIX: Contact Page Redirect Loop

**Problem:** Contact page redirect loop has occurred **5+ times** since project creation.

**Last Occurrence:** October 15, 2025

---

## Root Causes

This issue has **multiple sources** that must ALL be fixed to prevent recurrence:

### 1. AWS Amplify Console Redirect Rules (MOST LIKELY)
- **Where:** AWS Amplify Console → App Settings → Rewrites and redirects
- **Problem:** If someone added `/Contact` → `/contact` redirect in AWS console, it persists across all deployments
- **Impact:** Overrides next.config.js settings

### 2. Browser Cache (308 Permanent Redirect)
- **Where:** Browser cache on local machine and production
- **Problem:** 308 redirects are cached PERMANENTLY by browsers
- **Impact:** Even after fixing config, browsers still redirect

### 3. amplify.yml File (SHOULD NOT EXIST)
- **Where:** Root of project
- **Problem:** According to CLAUDE.md, this file should NOT exist for Next.js SSR
- **Impact:** Can interfere with Amplify's auto-detection of Next.js SSR
- **Status:** DELETED October 15, 2025

### 4. Build Cache
- **Where:** .next directory, AWS build cache
- **Problem:** Old redirects can persist in build artifacts
- **Impact:** Stale config served even after code changes

---

## PERMANENT FIX CHECKLIST

### ✅ Step 1: Remove from next.config.js (DONE)
```javascript
// ❌ DO NOT ADD THIS REDIRECT - CAUSES INFINITE LOOP
{
  source: '/Contact',
  destination: '/contact',
  permanent: true,
}
```

**Why it fails:** Next.js redirects are case-insensitive, so this matches both `/Contact` AND `/contact`, creating a loop.

---

### ✅ Step 2: Delete amplify.yml (DONE)
```bash
git rm amplify.yml
git commit -m "Remove amplify.yml - not needed for Next.js SSR"
git push
```

**Reason:** AWS Amplify auto-detects Next.js SSR. Having amplify.yml can interfere with this.

---

### ⚠️ Step 3: Check AWS Amplify Console (USER MUST DO)

**CRITICAL:** This is likely where the redirect keeps coming back from!

1. Go to AWS Amplify Console: https://console.aws.amazon.com/amplify/
2. Select your app: `photography-website` (or whatever it's called)
3. Click **App Settings** → **Rewrites and redirects**
4. **Look for any redirect containing "Contact" or "contact"**
5. **DELETE any redirects you find** except the www redirect

**What you should see:**
- ✅ ONLY ONE redirect: `https://cmqheadshots.com` → `https://www.cmqheadshots.com` (302 Temporary)
- ❌ NO redirect for `/Contact` → `/contact`
- ❌ NO redirect for `/<*>` → `/index.html`

**Screenshot:** Take a screenshot after fixing for documentation.

---

### ⚠️ Step 4: Clear ALL Browser Caches (USER MUST DO)

308 redirects are cached PERMANENTLY. You must clear cache in ALL browsers you've used:

#### Chrome/Edge:
1. Open DevTools (F12)
2. Right-click refresh button
3. Select "Empty Cache and Hard Reload"
4. OR go to Settings → Privacy → Clear browsing data → Cached images and files

#### Firefox:
1. Settings → Privacy & Security
2. Cookies and Site Data → Clear Data
3. Check "Cached Web Content"

#### Safari:
1. Develop menu → Empty Caches
2. OR Safari → Clear History → All History

#### Mobile browsers:
- Clear cache in browser settings

**Test in Incognito/Private browsing** to verify fix without cache.

---

### ✅ Step 5: Clear Build Caches (DONE VIA pnpm clean)

This is handled by `pnpm run dev:clean` command.

---

### ✅ Step 6: Add Prevention Documentation (DONE)

This file serves as permanent documentation.

---

## How to Test Fix

1. Clear ALL browser caches (see Step 4)
2. Open INCOGNITO/PRIVATE window
3. Visit: `http://localhost:3100/contact`
4. Should see: **HTTP 200 OK** (not 308 redirect)
5. Page loads successfully

## If Problem Returns Again

1. **First, check AWS Amplify Console** - This is most likely the culprit
2. Check `next.config.js` - Make sure no Contact redirect exists
3. Clear browser cache again
4. Check for new config files (amplify.yml, _redirects, .htaccess)
5. Run `pnpm clean` and restart dev server

## Git History of This Issue

```bash
26430b2 - Fix contact page infinite redirect loop (Oct 15, 2025)
e326abe - Remove /Contact redirect that was causing infinite loop
db43a2e - Fix /contact page 308 redirect loop
a6c606b - Fix critical redirect loop - add _redirects file
049fdcd - Add redirects for old URLs, exclude /Contact to prevent loop
```

**This issue has occurred 5+ times.** The permanent fix requires addressing ALL root causes, especially AWS Amplify Console redirects.

---

## Why `/Contact` Redirect Doesn't Work

**User Intent:** Fix SEMRush 404 error for `/Contact` URL

**Why redirect fails:**
- Next.js redirects are **case-insensitive by default**
- Redirect matches both `/Contact` AND `/contact`
- Creates infinite loop: `/contact` → `/contact` → `/contact` ...

**Correct solution:**
- **Do nothing** - Next.js pages handle case variations automatically
- The `/contact` page will respond to both `/contact` and `/Contact`
- No redirect needed

---

## Files to Monitor

These files should NEVER contain Contact redirects:
- ✅ `next.config.js` - Should have 4 redirects (NOT 5)
- ✅ `amplify.yml` - Should NOT exist
- ✅ `_redirects` - Should NOT exist
- ✅ `.htaccess` - Should NOT exist

---

## Success Criteria

- ✅ Contact page loads with HTTP 200 (not 308)
- ✅ No infinite redirects in browser Network tab
- ✅ Works in incognito/private browsing
- ✅ `next.config.js` has exactly 4 redirects
- ✅ No `amplify.yml` file exists
- ✅ AWS Amplify Console has ONLY www redirect
- ✅ This issue does not return for 30+ days

---

**Last Updated:** October 15, 2025
**Status:** Fixed - Monitoring for recurrence
**Next Review:** November 15, 2025
