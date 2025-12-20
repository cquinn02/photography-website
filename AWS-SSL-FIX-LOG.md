# AWS SSL Certificate Fix Log
**Date:** December 19, 2025
**Issue:** SSL setup failed for cmqheadshots.com

---

## CURRENT STATUS: FIXED! Site is live!

**Date:** December 19, 2025 (morning)

**https://www.cmqheadshots.com is WORKING!**

---

## What Fixed It:

1. **Set up AWS CLI with admin access** - Created IAM user `claude-admin-temp` with AdministratorAccess
2. **Used CLI to delete failed domain association** - `aws amplify delete-domain-association`
3. **Deleted old ACM validation record via CLI** - The record `_eca6a7cbee7ca424ae3a4a48e2eb22b1` was stuck
4. **Created fresh domain association via CLI** - `aws amplify create-domain-association`
5. **Manually added DNS records via CLI:**
   - Root domain A record (ALIAS to CloudFront)
   - www CNAME to CloudFront
   - ACM validation CNAME

**Key insight:** The AWS Console kept auto-creating records that conflicted with old records. Using CLI gave precise control to do a clean setup.

---

## REMEMBER TO DO:
- [ ] Delete `claude-admin-temp` IAM user (has admin access!)
- [ ] Set up `clients.cmqheadshots.com` for client gallery app

---

## What We've Done (COMPLETED):

### 1. ✅ Checked everything - no orphaned resources found:
- AWS Certificate Manager (ACM) - no certificates
- CloudFront - no distributions
- Amplify - only 2 apps (photography-website and client-galleries)

### 2. ✅ Found the problem in Route53:
Old DNS records were pointing to a non-existent CloudFront distribution

### 3. ✅ Deleted these old DNS records from Route53:
- `cmqheadshots.com` A record (was pointing to old CloudFront)
- `www.cmqheadshots.com` CNAME (was pointing to old CloudFront)
- `_f9c8d34c6e...` CNAME (old certificate validation)

### 4. ✅ Kept these records (DO NOT DELETE):
- All `_domainkey` records (DKIM for email) - there are 4 of them
- `clients.cmqheadshots.com` → d1v6zej24q7yyb.cloudfront.net (client gallery portal)
- `autodiscover.cmqheadshots.com` (email)
- `_amazonses`, `_dmarc` (email)
- MX, NS, SOA, TXT records (essential)

### 5. ✅ Removed domain from Amplify:
Got error "AWSAmplifyDomainRole cannot be found" when trying Retry, so we removed the domain completely.

### 6. ⏳ IN PROGRESS - Add domain back to Amplify:
- ✅ Added domain `cmqheadshots.com` to Amplify
- ✅ Kept www subdomain and redirect configured
- ❌ Domain activation keeps FAILING - "conflicting DNS record" error

---

## CURRENT PROBLEM (Step 6):

**IAM Role Missing:** `AWSAmplifyDomainRole-Z021424516H1W5UFXD647`

Amplify needs this IAM role to manage custom domains, but it doesn't exist.

### NEXT ACTION:
1. **Remove the domain from Amplify** completely
2. **Wait 1-2 minutes**
3. **Add the domain fresh** - Amplify should create a NEW role automatically
4. If same error, check IAM console for orphaned roles

### DNS Records Still to Clean (do this while waiting):
- DELETE: `_eca6a7cbee7ca424ae3a4a48e2eb22b1.cmqheadshots.com` CNAME (old ACM validation)
- DELETE: `cmqheadshots.com` A record → d3f0zkwfimydwk.cloudfront.net (if still there)

---

## Records That MUST Stay (DO NOT DELETE):

| Record Name | Type | Points To | Purpose |
|-------------|------|-----------|---------|
| default._domainkey.cmqheadshots.com | CNAME | ...dnssmarthost.net | Email DKIM |
| ubqoxz4uftyzkvceyjfx7e4vpgdidlmz._domainkey... | CNAME | ...dkim.amazonses.com | Email DKIM |
| uj5j2tyogu3txdkvsp2hyo3tlaw7qx5r._domainkey... | CNAME | ...dkim.amazonses.com | Email DKIM |
| zk6rze7iulp3hxxxtjfzo5dz4esxifsn._domainkey... | CNAME | ...dkim.amazonses.com | Email DKIM |
| autodiscover.cmqheadshots.com | CNAME | ...awsapps.com | Email |
| clients.cmqheadshots.com | CNAME | d1v6zej24q7yyb.cloudfront.net | Client Portal |
| MX, NS, SOA, TXT records | various | various | Essential |

---

## Important Info:
- **Your code is safe** - all in GitHub
- **Your domain is safe** - still in Route53
- **Client portal unaffected** - clients.cmqheadshots.com is separate
- **Email unaffected** - we kept all email records

---

## If Session Crashes:
Tell new Claude: "Read AWS-SSL-FIX-LOG.md - SSL creation succeeded! Waiting for domain activation to complete."

---

*Last updated: December 19, 2025 - During troubleshooting session*
