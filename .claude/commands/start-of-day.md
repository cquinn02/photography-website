---
description: Start-of-day briefing — pull latest, review recent work and S3 session logs, check deploy health, surface outstanding items, and suggest a focus
---

Run the start-of-day briefing for the CMQ Headshots marketing site. Work through these steps in order.

## 1. Confirm repo and pull latest

- Run `git rev-parse --show-toplevel` to confirm you're in a git repo and note the project root
- Run `git branch --show-current` to note the current branch
- Run `git pull` to fetch and merge the latest from remote
- If there are merge conflicts, STOP immediately and report exactly what's conflicting — do not proceed

## 2. What happened recently

- Run `git log --pretty=format:"%h %ad %s" --date=short --no-merges -10` to see the last 10 commits with dates
- Note who made the last commit and when
- If the last commit was more than 3 days ago, flag that

## 3. Read recent session logs from S3

Session logs live on S3, not locally (per CLAUDE.md). Catch up on what the last working day recorded:

- List the most recent logs: `aws s3 ls s3://cmqheadshots-website-images/logs/ | tail -5`
- Read the latest one or two: `aws s3 cp s3://cmqheadshots-website-images/logs/<DATE>.md - | cat`
- Summarize what they say in plain language — what was done and why
- If the S3 listing fails (no creds/connectivity), note it and fall back to the CHANGELOG

## 4. Read the CHANGELOG

- Read `CHANGELOG.md` — show the most recent 2-3 date sections in full
- Summarize what was actually done — what changed and why, not just file names

## 5. Read outstanding work

This project has no `MASTER-TASKS.md`. Pull outstanding items from:

- `docs/TODO.md` — cleanup TODOs; list unchecked/open items
- `MIGRATION-PLAN.md` — phase tracker; note which phase is active and what's next
- `docs/studio-app-build-plan.md` — only if studio-app work is current focus
- Note anything marked MANUAL, ONGOING, or with a specific date

## 6. Check deploy and build health

`main` auto-deploys to Vercel (SSR). Make sure the day starts from a known-good state:

- If the working tree is clean and on `main`, the live site should reflect the last commit — note the last commit's message as "what's currently live"
- Optionally run `npx tsc --noEmit` to confirm the codebase type-checks before new work begins
- Note: Vercel Web Analytics + Speed Insights are live; if relevant to today, the dashboards are at Vercel → project → Analytics / Speed Insights

## 7. Scan for context

- Re-read any mandatory rules in `CLAUDE.md` relevant to likely work today (hero/header "do not modify", SEO content rules, image rules)
- The memory index (`.claude/projects/-Users-cindyquinn-my-website-photography-website/memory/MEMORY.md`) is auto-loaded — note any feedback rules that apply to today's likely work
- Run `git diff --name-only HEAD~3 HEAD 2>/dev/null | head -20` to see recently touched files
- Check for TODO/FIXME in recently touched files:
  `git diff --name-only HEAD~3 HEAD 2>/dev/null | xargs grep -l "TODO\|FIXME" 2>/dev/null | head -10`

## 8. Print start-of-day briefing

Output a clean briefing with exactly these sections:

**Project**
CMQ Headshots marketing site · current branch · last commit date and message.

**Last session**
What was done — drawn from S3 session logs, recent commits, and CHANGELOG. 2-5 specific bullets.

**Current state**
What's live, what's in progress, anything known to be broken or incomplete. Note deploy/build health.

**Outstanding items**
Open items from `docs/TODO.md` and `MIGRATION-PLAN.md`, grouped sensibly. Keep it scannable — summarize, don't paste whole files.

**Suggested focus**
Based on outstanding items, recent momentum, and any urgency signals — recommend 1-3 specific things to work on today. Be opinionated: pick what matters most and say why.
