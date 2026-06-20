---
description: End-of-day wrap-up — verify build, update docs/changelog, clean up, write S3 session log, commit (push only after asking), and print a summary
---

Run the end-of-day wrap-up for the CMQ Headshots marketing site. Work through these steps in order. Do not skip steps.

## 1. Orient

- Run `git rev-parse --show-toplevel` to confirm the project root
- Run `git branch --show-current` to note the current branch
- Read `CLAUDE.md` — note the mandatory rules, especially: the AWS/Amplify "do not modify" list, the hero/header patterns, the SEO content rules, and the "No Local Storage for Logs or Archives" rule
- The persistent memory index at `.claude/projects/-Users-cindyquinn-my-website-photography-website/memory/MEMORY.md` is auto-loaded each session — skim it for any feedback rules relevant to today's work

## 2. Identify today's changes

- Run `git status` to see staged and unstaged changes
- Run `git diff --stat HEAD` to see what changed since the last commit
- Run `git log --since="6am today" --oneline --no-merges` to see any commits already made today
- Build a clear picture of everything that was done before touching any files

## 3. Verify the build is healthy BEFORE committing

`main` auto-deploys to Vercel (SSR), so a broken commit ships to production. Gate the day's work:

- Run `npx tsc --noEmit` for a fast type check — it must exit 0
- If TypeScript passes but today touched config, routing, images, or dependencies, run `pnpm run build` for a full production build check
- If either fails, STOP. Report the failure and do not commit until it's fixed.

## 4. Update outstanding-work docs (if today's work affects them)

This project has no `MASTER-TASKS.md`. Instead:

- `docs/TODO.md` — cleanup TODOs. If today completed any item, mark it done with today's date; if today created a new follow-up, add it.
- `MIGRATION-PLAN.md` — phase tracker. If today advanced a phase, update its status.
- `docs/studio-app-build-plan.md` — only if today touched studio-app planning.

Update these before the CHANGELOG so the CHANGELOG reflects the final state.

## 5. Update CHANGELOG.md

- Read `CHANGELOG.md` first — note the last entry date and the exact format used
- If today's changes aren't already logged, add a new entry for today following the existing format exactly
- Be specific: list what changed and why, not just which files were touched
- Do NOT create a separate commit for the CHANGELOG — it goes in the final commit with everything else

## 6. Check for stale or unneeded files

Run these checks:
```
find . -name "*.tmp" -o -name "*.bak" -o -name "*.orig" -o -name ".DS_Store" | grep -v node_modules | grep -v .next | grep -v .git
find . -name "*.log" -not -path "*/node_modules/*" -not -path "*/.git/*"
```
- List any candidates found — do NOT delete without confirming they're safe to remove
- Per CLAUDE.md, logs and archives must NOT live locally. If you find any local `*.log` or stray archive/temp files, flag them for upload-to-S3-then-delete (see step 7), not for keeping.

## 7. Write the session log to S3 (not local)

Per CLAUDE.md, session logs go to S3, never to local disk.

- Compose today's session log (the same content as the summary in step 9) as markdown
- Write it to a temp file, upload, then delete the temp file:
  ```
  aws s3 cp /tmp/session-<DATE>.md s3://cmqheadshots-website-images/logs/<DATE>.md
  rm /tmp/session-<DATE>.md
  ```
  where `<DATE>` is today in `YYYY-MM-DD` format (e.g. `2026-06-19.md`)
- If a log for today already exists, append today's work to it rather than overwriting
- Confirm the upload succeeded with `aws s3 ls s3://cmqheadshots-website-images/logs/<DATE>.md`

## 8. Commit — and ASK before pushing

- Stage only the relevant modified files (be specific — don't `git add .` blindly)
- Write a commit message that summarizes the actual work done today, not "end of day update"
- Match the commit style in `git log --oneline -5`
- End the commit message with a blank line and exactly:
  `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`
- **Do NOT push automatically.** Per the standing rule, always ask first. If on `main`, remind the user that pushing will trigger a live Vercel production deploy, and confirm before pushing.
- After an approved push, confirm it succeeded and note that the Vercel deploy will start — suggest watching the Deployments tab.

## 9. Update memory if a non-obvious decision was made

If today produced a durable decision, preference, or project-state change that isn't obvious from the code or commits, write/update a memory file under the memory directory and add its one-line pointer to `MEMORY.md`. Skip this if today was routine.

## 10. Print end-of-day summary

Output a clean summary with exactly these sections:

**What was done today**
Bullet list of actual work completed. Specific — what changed and why, not "made changes to X".

**Build status**
Result of the type check / build gate from step 3.

**Files changed**
Count of files modified and the key ones worth calling out.

**Outstanding items**
Open items from `docs/TODO.md` / `MIGRATION-PLAN.md`, any work left incomplete, anything needing follow-up.

**Notes for tomorrow**
Context that isn't obvious from the code — decisions pending, things to check first, deploy status to confirm.
