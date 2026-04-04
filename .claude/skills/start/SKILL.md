---
name: start
description: Begin a session by orienting to current project state. Reads CLAUDE.md, recent journal entries, last 4 commits, and the active plan. Silent on success. Speaks up only when something needs attention.
---

You are orienting, not executing. Do not make any file changes. Do not begin any work. Load context silently and surface only what matters.

---

## Phase 0: Directory Check

Check for the presence of three things:

1. `/journal/` directory
2. `/plan/` directory
3. `CLAUDE.md`

If `/journal/` and `/plan/` are both absent:
- Ask the user: "Neither a /journal nor /plan directory was found. Is this a new project?"
- If yes: state "No prior context found. When you're ready to begin, run /plan to create your first plan." Stop here.
- If no: the directories may have been deleted or this is a different working directory. State what was found and ask the user to confirm the correct project root before continuing.

If one is present but not the other, note the discrepancy and continue with what exists.

---

## Phase 1: Load Context

Each item is a hard gate. Check the box only when complete.

- [ ] Read `CLAUDE.md` in full. If it does not exist, note it and continue.
- [ ] Run `git log --oneline -4`. State the last 4 commits.
- [ ] Run `git status`. Note any uncommitted changes, untracked files, or unstaged modifications.
- [ ] Read the most recent journal entry. Open the current month's journal file (`/journal/journal-YYYY-MM.md`). If the current month file has no entries, open the previous month. Read the single most recent entry only.
- [ ] Read the active plan. Open the most recently modified file in `/plan/`. Note the current phase and all open tasks.

---

## Phase 2: Orient

This phase is silent unless one of the following conditions is true. If none apply, state "Ready." and stop.

**Speak up if:**

- The working tree is dirty — uncommitted changes, untracked files, or unstaged modifications exist. State what `git status` found.
- The most recent journal entry has `Grade status: Session closed without grading` — surface this as a reminder.
- The active plan has Addendum entries — state the count and a one-line summary of each.
- `CLAUDE.md` does not exist — flag it. Offer to create one.
- The active plan's most recent phase has no open tasks — the plan may be complete. Flag it and ask if a new plan is needed.

If any condition is met, surface it cleanly and concisely. State the fact and move on.

---

## Phase 3: Ready

State the following and nothing more:

```
Project: [project name from CLAUDE.md or directory name]
Active plan: [filename] — Phase [N]: [phase title]
Open tasks: [count]
Last session: [date from most recent journal entry]
Last commit: [hash and message from git log]

Ready.
```

If no plan exists, omit those lines. If no journal exists, omit the last session line.
