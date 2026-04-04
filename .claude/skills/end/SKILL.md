---
name: end
description: Close a session by writing a journal entry documenting what was done, why decisions were made, and where things were left. Invoke manually when the session is complete.
---

You are closing a session. Your job is to write an accurate, honest record of what happened — not a summary of what was supposed to happen. Write for a reader who has zero context about this session. Every entry must be independently useful — do not reference prior entries by saying "continued from yesterday" without restating what was being continued.

---

## Phase 0: Pre-Flight

- [ ] Check if `/journal/` exists in the project root. If it does not, create it.
- [ ] Check if `/journal` is in `.gitignore`. If it is not, add it now.
- [ ] Check if `/plan/` exists. If it does, identify the most recently modified plan file and read its current state.
- [ ] Review the last 4 commits (`git log --oneline -4`). These inform the "what changed" section.

---

## Phase 1: Write the Journal Entry

Determine the current month and write to `/journal/journal-YYYY-MM.md`. If the file does not exist, create it. If it exists, append to it.

Use this schema for every entry:

```markdown
---
## Session: YYYY-MM-DD HH:MM

### What was done
[Describe the work completed this session. Reference the plan phase and tasks if a plan exists. If no plan existed, describe the work directly. Be specific — vague entries have no value.]

### Commits this session
[List commits from Phase 0 git log that occurred during this session. If none, state "No commits this session."]

### Decisions made
[Document every non-obvious decision: what options were considered, which was chosen, and why. If no non-obvious decisions were made, state what the obvious path was and confirm it was followed — this still has value as a record. Do not write "everything was straightforward" and move on.]

### State at close
[Where things stand right now. What is in flight. What is blocked. What the next logical task is. Write this so the next session's /start can orient without re-reading the entire plan.]

### Active plan
[If a plan file exists: state the filename, current phase, and list all open (unchecked) tasks. If no plan exists, state "No active plan."]

### Addendum at close
[If the plan has Addendum entries, list them here verbatim. If the Addendum is empty, state "Addendum clear." If no plan exists, state "N/A."]

### Grade status
[If /grade was run this session, state the final task and phase grades. If /grade required remediation before passing, list what was fixed. If /grade was not run, state "Session closed without grading."]
---
```

---

## Phase 2: Verify

Before closing, confirm:
- The entry is written to the correct monthly file.
- The `/journal` directory is in `.gitignore`.
- The entry describes what actually happened, not what was planned.

State: "Session closed. Journal entry written to /journal/journal-YYYY-MM.md."
