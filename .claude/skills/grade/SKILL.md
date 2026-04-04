---
name: grade
description: Grade completed work against embedded rules. Enforces the 95% threshold at task and phase level. Work is not done until it passes. Invoke after completing any task or phase.
---

You are auditing your own work. Not summarizing it. Before you write a single word: you do not have time constraints, you will not defer anything that can be resolved now, you will not soften findings.

**Scope of this grade:** All changes since the last `/grade` invocation or the last commit, whichever is more recent. Nothing outside that boundary.

**File ownership rule:** If a problem exists in a file you modified during this task, it is yours to fix now. If it exists in a file you did not touch, it is out of scope — write it to the Addendum. This is the boundary between Rule 8 (do exactly what was asked) and Rule 9 (you built it, fix it).

---

## Mandatory Rules

These are non-negotiable. A violation in any of these is a hard blocker — it suspends the grade until resolved.

1. **Do not be lazy.** Do not take shortcuts in this audit.
2. **Do not defer tasks that can be done today.** If something can be fixed now, it gets fixed now.
3. **Do not treat time as a constraint.** There is no "good enough for now."
4. **Do not create technical debt.** Under any circumstances.
5. **Do not treat any finding as more or less important than another.** All findings are equally critical. Present them all.
6. **Do not hardcode data. Do not inline SQL that belongs in the data layer.**
7. **Do not lie.** If you don't know, say so. Do not claim CI passed without verifying it. Do not claim a test passed without running it.
8. **Do exactly what is asked.** Nothing more, nothing less.
9. **Do not use "this is a pre-existing condition" or "this error is not related to our changes" as a reason to leave something broken.** If it's in a file you touched, it's yours to fix.

**Database Safety (for any project with a database):**
- Never run write operations against production without explicit user approval.
- All schema changes must be migrations — never raw SQL against any database outside a migration file.
- Never run migrations manually against production.
- Before any DELETE/UPDATE, use SELECT to verify scope.

**Deployment (for any project with CI/CD):**
- All code goes: commit → push → CI passes → CI auto-deploys. If smoke tests fail, deployment stops.
- Never push without verifying lint, typecheck, and build pass locally.

---

## Phase 0: Hard Blockers

Pass/fail only. A failure suspends the grade — fix first, then restart.

- [ ] `npm run lint` — zero errors (Node projects; adapt to project type as needed)
- [ ] `npm run typecheck` — zero errors
- [ ] `npm run build` — completes successfully
- [ ] No violation of any Mandatory Rule above exists in the work just completed

Do not proceed to Phase 1 until all four pass.

---

## Phase 1: Score

Grade at two levels. Both must pass. A passing task inside a failing phase is not done.

### Task Grade

| Dimension | What it measures | Score |
|---|---|---|
| **Plan Fidelity** | Did you do exactly what the plan asked — nothing more, nothing less? | /100 |
| **Code Quality** | Was any technical debt created? Was any discovered and left unfixed in files you touched? Any hardcoded data or inlined SQL? | /100 |
| **Completeness** | Are there TODOs, deferred items, or loose ends in files you touched that could have been resolved today? | /100 |

For each dimension: state the score and the reason for any deduction. If perfect, say so and move on.

**Task Grade: [average]/100**

### Phase Grade

Review every completed task in the current phase. Grade the phase as a whole against the same three dimensions — does the sum of the work deliver what the phase was supposed to deliver?

For each dimension: state the score and the reason for any deduction.

**Phase Grade: [score]/100**

---

## Phase 2: Enforce

Both thresholds are independent. Both must reach ≥ 95 before proceeding. Maximum 3 attempts per grade level. If grade has not reached ≥ 95 after 3 attempts, stop and escalate to the user — do not continue cycling.

**If Task Grade < 95:**
1. List exactly what is being fixed.
2. Fix it.
3. Rerun Phase 0.
4. Regrade the task.
5. Repeat until task ≥ 95 or 3 attempts exhausted.

**If Phase Grade < 95:**
1. Identify which completed tasks are dragging the phase grade down.
2. Fix them now.
3. Regrade the phase.
4. Repeat until phase ≥ 95 or 3 attempts exhausted.

Do not proceed to Phase 3 until both grades ≥ 95.

---

## Phase 3: Findings Triage

Every finding gets a disposition. Nothing goes unresolved. All findings are equally critical — do not group or sort by severity.

| Finding | Type | Disposition |
|---|---|---|
| [describe] | Debt / Concern / Violation | FIX NOW / ADDENDUM / FLAG FOR HUMAN |

**Disposition rules:**
- Mandatory Rule violation → **FIX NOW**. Only valid disposition.
- Technical debt created this task → **FIX NOW**.
- Technical debt or concern in a file you touched → **FIX NOW**.
- Technical debt or concern in a file you did not touch → **ADDENDUM**.
- Codebase concern (risky, degraded, wrong) → **FLAG FOR HUMAN** if architectural; **ADDENDUM** if tactical.

For every item dispositioned as ADDENDUM: write it to the `## Addendum` section of the plan file now using this structure:

```
- **What:** [one line description]
  **Where:** [file and function/line if applicable]
  **Why deferred:** [out of scope / pre-existing / needs architectural decision]
```

If no findings: state "No findings." and move on.

**Catch-all:** Is there anything you observed during this task that doesn't fit the categories above but that the user should know? If yes, state it plainly. If no, move on.

---

## Phase 4: Plan Sync

1. Mark this task `[x]` in the plan file.
2. Review the next incomplete task. Does the work just completed change its requirements or assumptions?
   - **Yes** → Edit the plan file now. State what changed and why.
   - **No** → State "No plan adaptations required."

---

## Phase 5: Addendum Review

Open the `## Addendum` section of the plan file. Read every entry aloud — not to act on them, but to ensure the user is aware of what is accumulating. State the count and a one-line summary of each item.

If the Addendum is empty: state "Addendum is clear." and close.
If no plan file exists: state that and close.
