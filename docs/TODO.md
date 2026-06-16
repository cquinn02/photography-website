# TODO / Pending Cleanup

_Committed on purpose, so it survives across sessions and **both laptops**. Claude Code memory does
NOT sync between machines — git does. Add cross-session TODOs here, not to memory._

## CLAUDE.md — finish the Amplify → Vercel cleanup
The site moved off AWS Amplify to Vercel (cutover 2026-06-12). The tech-stack header and the new
Target Architecture section are updated, but these sections are still Amplify-stale:

- [ ] **"### AWS Deployment" critical-rules section** — rewrite for Vercel. Drop the Amplify-only
  rules (no `amplify.yml`, no Amplify-Console `/<*>` → `/index.html` rewrites). Keep the still-valid
  Next.js SSR rules (no `output: 'export'`, no `images.unoptimized`). Update the www-redirect note:
  it's now Vercel's **308 apex → www**, not an Amplify 302.
- [ ] **"## If Site Goes Down" section** — currently says "check Amplify Console → Rewrites and
  redirects." That's dead now. Rewrite for Vercel (deployment status, Domains, DNS).
- [ ] Scan the rest of `CLAUDE.md` and `docs/` for any remaining "Amplify" references.

## After Amplify is decommissioned (reminder scheduled ~2026-06-16)
- [ ] Once Amplify is turned off, remove the Amplify **rollback** references in `MIGRATION-PLAN.md`
  (Phase 1, step 9) — the CloudFront rollback target no longer applies.

## Storage — RESOLVED, no action
The earlier "migrate 413 website images off S3" item is **closed**. Decision (2026-06-16): the marketing
site and the new studio app are two separate apps with separate storage. **Marketing images stay on
S3/CloudFront, untouched. The studio app uses Vercel Blob.** Nothing to migrate. See
`docs/target-architecture.md` + `docs/studio-app-build-plan.md`.
