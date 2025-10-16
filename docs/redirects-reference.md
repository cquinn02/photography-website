# Website Redirects Reference

This document lists all active redirects configured in `next.config.js`.

## Current Active Redirects

| Old URL | New Destination | Type | Reason |
|---------|----------------|------|--------|
| `/headshot-types` | `/` (Home) | 301 Permanent | SEO - redirect old URL to home page |
| `/phoenix-business-headshot-rates-2` | `/pricing-individual` | 301 Permanent | SEO - redirect old pricing page to individual pricing |
| `/articles` | `/blog` | 301 Permanent | SEO - old blog URL to new blog page |
| `/privacy-policy-2` | `/privacy-policy` | 301 Permanent | SEO - old privacy policy URL |

## How Redirects Work

- **301 Permanent Redirect**: Tells search engines the page has permanently moved
- Redirects are automatic and invisible to users
- Search engines update their indexes to use the new URLs
- These redirects preserve SEO value from old URLs

## Configuration Location

All redirects are configured in: `/next.config.js`

In the `async redirects()` function (lines 97-124)

## When to Add New Redirects

Add a redirect when:
- You change a page URL but want to preserve old links
- External sites are linking to an old URL
- SEO tools report 404 errors on old URLs
- You want to handle URL variations (like capitalization)

## Removed Redirects

| Old URL | Issue | Date Removed |
|---------|-------|--------------|
| `/Contact` → `/contact` | Caused infinite redirect loop (Next.js redirects are case-insensitive by default) | October 15, 2025 |

## Last Updated

October 15, 2025
