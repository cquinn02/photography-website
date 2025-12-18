## 🤖 THE COMPLETE "SECURE MY PHOTOGRAPHY WEBSITE" AUTOPILOT PROMPT

```
# AUTONOMOUS SECURITY HARDENING FOR PHOTOGRAPHY WEBSITES

I'm a photographer who built a Next.js website. I need you to autonomously secure my codebase and set up automation to keep it secure. Only ask questions when you MUST have my input.

## YOUR MISSION:
Fix security vulnerabilities, implement testing for critical paths, and automate ongoing security monitoring. Do NOT break my booking systems or revenue-critical integrations.

---

## PHASE 1: DISCOVERY (Ask me these upfront, then work autonomously)

1. What deployment platform? (Vercel/AWS Amplify/Other)

2. Which booking/CRM platforms are you using? (Check all that apply)
   - [ ] Acuity Scheduling
   - [ ] 17hats
   - [ ] Go High Level
   - [ ] Other (please specify)

3. What's your domain name? (for CORS configuration)

4. Do you use any analytics or marketing tools? (Google Analytics, Facebook Pixel, Tag Manager, etc.)

5. Do you have a Redis or Upstash account? (If no, I'll use a simpler rate limiting approach)

6. Do you have any webhook endpoints? (Acuity confirmations, payment notifications, form submissions from external platforms, etc.)

---

## PHASE 2: AUTONOMOUS EXECUTION

### 🔐 SECURITY FIXES (ACT AUTONOMOUSLY)

**Environment Variables:**
- Scan entire codebase for hardcoded secrets (API keys, tokens, passwords, database URLs)
- Move ALL secrets to .env.local
- Create .env.example with placeholder values and clear descriptions
- Verify .env* files are in .gitignore
- Check git history for exposed secrets using basic grep
- If secrets were previously committed: STOP and ALERT ME (I'll need to rotate them)

**API Route Security:**
- Add input validation to EVERY API route using Zod or similar
- Implement rate limiting:
  * If Redis/Upstash available: use @upstash/ratelimit
  * If not: implement simple in-memory rate limiting (note: won't persist across serverless invocations, but better than nothing)
  * Document the approach used and its limitations
- Add proper error handling with try-catch blocks
- Ensure sensitive operations require authentication
- Never expose internal error details to clients (log them, return generic errors)

**CORS Configuration (WEBHOOK-AWARE):**
- For webhook endpoints (/api/webhooks/*): Configure to accept requests from legitimate sources:
  * Acuity: acuityscheduling.com
  * 17hats: 17hats.com  
  * Go High Level: gohighlevel.com, leadconnectorhq.com
  * Payment processors: stripe.com, etc.
- For internal API routes (/api/contact, etc.): Restrict to my domain only
- Document which routes accept which origins

**Security Headers (DON'T BREAK BOOKING SYSTEMS):**
Configure in next.config.js:
- X-Frame-Options: DENY (except on pages with booking embeds)
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Strict-Transport-Security: max-age=31536000; includeSubDomains

**Content Security Policy (CRITICAL - DEPLOY IN REPORT-ONLY MODE FIRST):**
Based on booking platforms identified, create CSP with these directives:

```javascript
// Start with Content-Security-Policy-Report-Only
const csp = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://acuityscheduling.com https://*.acuityscheduling.com https://app.17hats.com https://*.17hats.com https://*.gohighlevel.com https://www.googletagmanager.com https://www.google-analytics.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' data:;
  frame-src 'self' https://acuityscheduling.com https://*.acuityscheduling.com https://app.17hats.com https://*.17hats.com https://*.gohighlevel.com;
  connect-src 'self' https://www.google-analytics.com;
`;
```

**Deploy CSP in report-only mode first. Add to checklist to review violations before enforcement.**

**Client vs Server Security:**
- Ensure API keys and secrets are NEVER in client components
- Move sensitive operations to server components or API routes
- Verify no database credentials in client-accessible code

---

### 📦 DEPENDENCY MANAGEMENT

**Fix Vulnerabilities:**
- Run `npm audit` to see current state
- Run `npm audit fix` (NOT --force) to auto-fix safe updates
- Document any vulnerabilities that can't be auto-fixed
- Remove unused dependencies from package.json
- Update dependencies that haven't been updated in >1 year (test after each update)

**If npm audit fix can't resolve critical/high vulnerabilities:**
- Research the specific vulnerabilities
- Determine if there's a safe major version update
- ASK ME before making breaking changes

---

### 🔄 GITHUB ACTIONS SETUP (FULLY AUTOMATED)

Create `.github/workflows/security-checks.yml`:
```yaml
name: Security & Quality Checks

on:
  push:
    branches: [ main, master, develop ]
  pull_request:
    branches: [ main, master, develop ]

jobs:
  security-audit:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run npm audit (fail on critical/high)
      run: npm audit --audit-level=high
    
    - name: Check for secrets
      uses: trufflesecurity/trufflehog@main
      with:
        path: ./
        base: ${{ github.event.repository.default_branch }}
        head: HEAD
      continue-on-error: true
    
    - name: Run tests
      run: npm test
      continue-on-error: true

  dependency-review:
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'
    
    steps:
    - uses: actions/checkout@v4
    - uses: actions/dependency-review-action@v4
      with:
        fail-on-severity: high
```

Create `.github/workflows/dependency-updates.yml`:
```yaml
name: Monthly Dependency Report

on:
  schedule:
    - cron: '0 10 1 * *'  # First day of month, 10am UTC
  workflow_dispatch:

jobs:
  dependency-report:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
    
    - name: Check for updates
      run: |
        npm outdated > outdated.txt || true
        npm audit > audit.txt || true
        
    - name: Create issue
      uses: peter-evans/create-issue-from-file@v5
      with:
        title: '📦 Monthly Dependency & Security Report'
        content-filepath: ./outdated.txt
        labels: dependencies, security
```

Create `.github/workflows/security-scan.yml`:
```yaml
name: Weekly Security Scan

on:
  schedule:
    - cron: '0 9 * * 1'  # Every Monday 9am UTC
  workflow_dispatch:

jobs:
  security-scan:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Full security audit
      run: npm audit --json > audit-report.json || true
    
    - name: Check if vulnerabilities exist
      id: check_vulns
      run: |
        if grep -q '"vulnerabilities":' audit-report.json; then
          echo "has_vulns=true" >> $GITHUB_OUTPUT
        fi
    
    - name: Create security issue
      if: steps.check_vulns.outputs.has_vulns == 'true'
      uses: peter-evans/create-issue-from-file@v5
      with:
        title: '🚨 Weekly Security Scan: Vulnerabilities Found'
        content-filepath: ./audit-report.json
        labels: security, urgent
```

Commit all three workflows and push to enable them.

---

### 🧪 TESTING FOR SECURITY-CRITICAL PATHS

**Install Testing Framework:**
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
# or
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

**Create test configuration and npm scripts.**

**Write Tests For:**

1. **All API Routes** - Create tests for each route in `/api`:
   ```javascript
   // Test structure for each API route:
   // ✓ Valid request succeeds with expected response
   // ✓ Invalid input returns 400 with error message
   // ✓ Missing required fields returns 400
   // ✓ Unauthorized requests return 401 (if auth required)
   // ✓ Rate limit is enforced (if implemented)
   ```

2. **Contact/Booking Forms:**
   - Valid submission succeeds
   - Required fields are validated
   - Email format is validated
   - Prevents XSS in form inputs

3. **Webhook Endpoints (if they exist):**
   - Verify signature validation
   - Reject invalid signatures
   - Handle malformed payloads gracefully

4. **Authentication Flows (if present):**
   - Login with valid credentials succeeds
   - Invalid credentials fail appropriately
   - Protected routes require authentication

5. **File Upload (if present):**
   - File size limits enforced
   - File type validation works
   - Malicious files rejected

**Add to package.json:**
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:ci": "jest --ci --coverage --maxWorkers=2"
  }
}
```

---

### 🪝 GIT HOOKS (AUTO-INSTALL WITH HUSKY)

**Install Husky:**
```bash
npm install -D husky
npx husky init
```

**Create `.husky/pre-commit`:**
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🔍 Running pre-commit security checks..."

# Check for secrets patterns
if git diff --cached --diff-filter=ACM | grep -iE '(api[_-]?key|apikey|api[_-]?secret|password|token|secret[_-]?key).*[=:]\s*["\047][a-zA-Z0-9]{20,}'; then
    echo "❌ ERROR: Potential secret detected!"
    echo "Move secrets to .env.local"
    exit 1
fi

# Check if .env files are being committed
if git diff --cached --name-only | grep -E '^\.env$|^\.env\.local$|^\.env\.production$'; then
    echo "❌ ERROR: .env file detected in commit!"
    echo "These files should be in .gitignore"
    exit 1
fi

# Run tests on API routes
npm test -- --testPathPattern=api --passWithNoTests

echo "✅ Pre-commit checks passed!"
```

Make it executable and test it works.

---

### 📋 CONFIGURATION FILES

**Update/Create these files:**

**`.env.example`:**
```bash
# Copy this to .env.local and fill in your values

# Database
DATABASE_URL=

# APIs
ACUITY_API_KEY=
STRIPE_SECRET_KEY=
SENDGRID_API_KEY=

# Other
NEXT_PUBLIC_SITE_URL=
```

**`.gitignore`** - Ensure these are present:
```
# Environment
.env
.env*.local
.env.production

# Dependencies
node_modules/

# Next.js
.next/
out/

# Testing
coverage/

# OS
.DS_Store
```

**`next.config.js`** - Add security headers:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: 'YOUR_CSP_HERE',
          },
        ],
      },
      // Allow iframes on booking pages
      {
        source: '/booking/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

**Update `README.md`** with:
- Setup instructions
- Environment variables needed
- How to run tests
- Security considerations

---

## PHASE 3: SAFE DEPLOYMENT

**CRITICAL: Test before production**

1. Create a `security-hardening` branch
2. Commit all changes to this branch
3. Push and create preview deployment (Vercel/Amplify auto-creates these)
4. Test preview URL thoroughly:
   - ✓ Booking embeds load and work
   - ✓ Forms submit successfully
   - ✓ API routes respond correctly
   - ✓ No console errors
   - ✓ Webhooks still work (if testable)
5. Only after confirming preview works: merge to main

**Environment Variables Sync:**
Before merging to main, verify all environment variables from .env.example are configured in your deployment platform (Vercel/Amplify dashboard).

---

## PHASE 4: VERIFICATION CHECKLIST

Provide this checklist at the end. I'll verify each item:

### ✅ SECURITY CHECKLIST
- [ ] No hardcoded secrets in codebase (verified with grep/search)
- [ ] All secrets moved to .env.local
- [ ] .env.example created with all required variables documented
- [ ] .env* files in .gitignore
- [ ] All API routes have input validation (using Zod or similar)
- [ ] Rate limiting implemented (document approach used)
- [ ] Security headers configured in next.config.js
- [ ] CSP configured in REPORT-ONLY mode (not enforced yet)
- [ ] CSP allows required booking/CRM platform domains
- [ ] CORS configured appropriately (webhooks vs internal routes documented)
- [ ] No sensitive operations in client components
- [ ] Git pre-commit hooks installed via Husky
- [ ] Pre-commit hooks tested and working

### ✅ TESTING CHECKLIST
- [ ] Test framework installed and configured (Jest or Vitest)
- [ ] Tests exist for all API routes (happy path + error cases)
- [ ] Tests cover authentication if present
- [ ] Tests cover form validation
- [ ] Tests cover webhook signature validation if applicable
- [ ] Tests cover file upload validation if applicable
- [ ] `npm test` runs successfully with no failures
- [ ] Test coverage report available

### ✅ DEPENDENCY CHECKLIST
- [ ] `npm audit` shows NO critical or high vulnerabilities
- [ ] Documented any vulnerabilities that couldn't be auto-fixed
- [ ] Unused dependencies removed
- [ ] Dependencies >1 year old updated (or documented why not)
- [ ] package-lock.json committed

### ✅ AUTOMATION CHECKLIST
- [ ] .github/workflows/security-checks.yml created
- [ ] .github/workflows/dependency-updates.yml created
- [ ] .github/workflows/security-scan.yml created
- [ ] All workflows committed and pushed
- [ ] First GitHub Actions run completed successfully
- [ ] Verified workflows appear in GitHub Actions tab

### ✅ CONFIGURATION CHECKLIST
- [ ] .env.example complete with all variables
- [ ] .gitignore updated with all sensitive patterns
- [ ] next.config.js has security headers
- [ ] next.config.js has CSP in report-only mode
- [ ] README.md updated with setup instructions
- [ ] Husky installed and pre-commit hook working

### ✅ DEPLOYMENT CHECKLIST
- [ ] Created security-hardening branch for testing
- [ ] Preview deployment URL created and tested
- [ ] Booking embeds (Acuity/17hats/GHL) load correctly in preview
- [ ] Forms submit successfully in preview
- [ ] API routes return expected responses in preview
- [ ] No console errors in preview
- [ ] Webhooks tested if possible
- [ ] All environment variables synced to deployment platform
- [ ] Environment variables match .env.example (no missing vars)

### ✅ BUSINESS CONTINUITY CHECKLIST (TEST IN PREVIEW FIRST)
- [ ] Acuity scheduling embed loads and accepts bookings
- [ ] 17hats embed loads (if applicable)
- [ ] Go High Level embed loads (if applicable)
- [ ] Contact forms submit successfully
- [ ] Analytics/tracking scripts still fire
- [ ] No functionality broken by security changes

### ✅ POST-DEPLOYMENT (After merging to main)
- [ ] Production site still loads correctly
- [ ] Test booking flow end-to-end in production
- [ ] Verify webhooks deliver (check logs in Acuity/17hats/GHL)
- [ ] Monitor CSP report-only violations for 1 week
- [ ] Review CSP violations and adjust policy if needed
- [ ] After 1 week: Switch CSP from report-only to enforcement (if no issues)

---

## IMPORTANT RULES:

1. **Act autonomously** - Fix obvious security issues without asking
2. **Batch all questions upfront** - Don't interrupt workflow
3. **Test as you go** - Verify each fix works before moving on
4. **Commit frequently** - Make atomic commits with clear messages
5. **Document decisions** - Note any judgment calls in code comments
6. **NEVER break booking systems** - If uncertain about CSP/headers affecting embeds, ASK FIRST
7. **No breaking changes without asking** - Major version updates need approval
8. **Use preview deployments** - Test everything before production merge
9. **CSP starts in report-only mode** - NEVER enforce CSP immediately

---

## OUTPUT FORMAT:

**Start with:**
"I need answers to 6 questions before I begin..."

**During execution:**
Show progress updates:
- "✅ Moved 3 API keys to .env.local"
- "✅ Added input validation to /api/contact"
- "✅ Created security-checks.yml workflow"
- "⚠️ Found 2 high-severity vulnerabilities that need manual review"

**End with:**
The complete verification checklist above, with any special notes about decisions made or issues that need your attention.

---

BEGIN NOW.
```

---

This prompt:
- ✅ Asks all critical questions upfront (including booking platforms)
- ✅ Won't break Acuity/17hats/Go High Level embeds
- ✅ CSP starts in report-only mode (safe)
- ✅ Tests in preview before production
- ✅ Handles webhooks correctly
- ✅ Uses Husky for git hooks (actually works)
- ✅ Clear business continuity checks
- ✅ Comprehensive verification checklist
- ✅ Platform agnostic (Vercel/Amplify)

Your photographers can literally copy-paste this into Claude Code and it should handle everything autonomously while keeping their businesses running. The checklist at the end gives them clear verification that everything is actually done.