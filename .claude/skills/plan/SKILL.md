---
name: plan
description: Create a plan before executing any work. Do not execute until the plan is approved. Enforces 95% confidence threshold, pre-work analysis, and establishes the plan file structure that /grade depends on.
---

You are planning, not executing. Do not touch a single file until the plan is approved by the user.

Before you write a single word: you do not have time constraints, there is no "good enough for now", and all tasks in this plan are equally critical. Every task that belongs in scope makes it into the plan — nothing gets dropped or deprioritized. Tasks are sequenced logically to respect dependencies, not ranked by importance. Do not use risk or effort to decide what gets included. Present findings and let the user decide scope.

If CLAUDE.md conflicts with any Mandatory Rule below, the Mandatory Rules win.

---

## Mandatory Rules

These are non-negotiable. A violation in any of these invalidates the plan.

1. **Do not be lazy.** Do not produce a shallow plan to get to execution faster.
2. **Do not defer tasks that can be done in this plan.** If it's in scope, it belongs in the plan.
3. **Do not treat time as a constraint.** Plan the right solution, not the fast one.
4. **Do not create technical debt.** Under any circumstances. If the correct solution is harder, plan the correct solution.
5. **Do not treat any task as more or less important than another.** All tasks are equally critical.
6. **Do not hardcode data. Do not inline SQL that belongs in the data layer.**
7. **Do not lie.** If you don't know something, say so. Do not fabricate confidence.
8. **Do exactly what is asked.** Nothing more, nothing less. Do not expand scope without flagging it explicitly.
9. **Do not use "pre-existing condition" as a reason to leave something broken** — if it's in scope of this plan, fix it.

**Database Safety (for any project with a database):**
- All schema changes must be migrations — plan them as explicit tasks.
- Never plan raw SQL against any database outside a migration file.
- Any plan touching production data requires explicit user approval before execution.
- Plan SELECT verification before any DELETE/UPDATE.

**Deployment (for any project with CI/CD):**
- All code goes: commit → push → CI passes → CI auto-deploys.
- Plan lint, typecheck, and build verification as explicit final tasks before any push.

---

## Phase 0: Pre-Work

Each item is a hard gate. Check the box only when complete. Do not proceed to Phase 1 until all boxes are checked.

- [ ] Read `CLAUDE.md` in full. If it does not exist, state that explicitly.
- [ ] Check for an active plan in `/plan/`. Files follow the naming convention `[descriptive-name]-PLAN.md` (e.g., `auth-refactor-PLAN.md`, `billing-migration-PLAN.md`). If multiple exist, read the most recently modified. List every entry in its `## Addendum` section. The `/plan/` directory is committed to git — do not add it to `.gitignore`.
- [ ] Review all files relevant to this task. Trace affected code paths to their end — not just the entry point.
- [ ] Search the codebase for similar patterns: same query logic, same assumptions, same data flow. State what you found, including if nothing was found.

---

## Phase 1: Pre-Plan Questions

Answer every question before assembling the plan. Do not skip. Do not abbreviate.

**1. Rule relevance**
Which Mandatory Rules are directly relevant to this task? For each one, state in one sentence how the plan honors it.

**2. File inventory**
List every file this plan will modify or create. For each, state why the change is necessary. If you cannot state why, that file does not belong in the plan.

**3. Irreversible changes**
List any changes that would be difficult or impossible to reverse. If none, state "None."

**4. Order dependency**
Why does the task order matter? What breaks if steps are rearranged? If order is flexible, say so.

**5. Uncertainty map**
Where are you least certain? For each uncertainty, attempt to resolve it now using the codebase, CLAUDE.md, or available context. Confirm each one closed before continuing.

If an uncertainty cannot be resolved from available context — it requires a business decision, an ambiguous requirement, or access to a system you cannot reach — do not guess. State exactly what you need from the user and halt. Do not proceed to Phase 2 until all uncertainties are either closed or answered by the user.

**6. Isolated or systemic**
Is this problem isolated or a pattern? Reference what you found in Phase 0. If the problem is systemic, do not expand scope unilaterally — flag it in the approval summary and let the user decide whether the fix is local or universal.

**6a. Scope check**
Is this request appropriately sized for a single plan? If the scope warrants splitting into multiple plans or PRs, propose the split explicitly and halt for user approval before proceeding. Do not produce a monolithic plan for work that should be phased separately.

**7. Addendum inheritance**
If an Addendum exists from prior work:
- Which entries are in scope for this plan? Convert them to tasks in the appropriate phase.
- Which entries are out of scope? Leave them in the Addendum unchanged and list them in the approval summary.
If no Addendum exists, state "No prior Addendum."

**8. Confidence**
State your confidence (x/100) and the specific gap between that number and 100. If below 95%: identify which questions above are incomplete or underconfident, resolve them, and restate. Repeat until ≥ 95. Do not present the plan until confidence ≥ 95.

---

## Phase 2: The Plan

Present only after Phase 1 is complete and confidence ≥ 95.

Write the plan to `/plan/[descriptive-name]-PLAN.md`. Use a name that describes the work, not the date. The file is the canonical record of intent for this workstream and will be read by `/start`, `/grade`, and future `/plan` invocations.

```
## Plan: [descriptive title]

### Phase 1: [title]
- [ ] Task description (atomic — one action, verifiable as done or not)
- [ ] Task description

### Phase 2: [title]
- [ ] Task description

[continue for all phases]

### Phase N: [project-specific title] — Cleanup & Deferred Findings
[Left intentionally blank. Populated by /grade as out-of-scope findings are discovered during execution.]

## Addendum
[Carried forward from prior work, or blank if new plan.]
```

**Plan rules:**
- Every task is atomic — one action, verifiable as done or not done.
- The final numbered phase is always the Cleanup phase. Name it to match the project context, not generically.
- The Addendum section always exists, even if empty.
- Do not present the plan without both sections present.
- `/grade` may add entries to the Cleanup phase and flag plan invalidations as they are discovered during execution. `/grade` may not modify approved tasks without explicit user approval. If a discovery during execution invalidates an upcoming task, `/grade` must flag it and halt for user decision before continuing.

---

## Phase 3: Approval Summary

Before asking for approval, state:
1. The number of phases and total tasks.
2. Any irreversible changes and what makes them irreversible.
3. Your confidence level and what remains uncertain, if anything.
4. Any Addendum items incorporated into this plan as tasks.
5. Any Addendum items intentionally left deferred and why.
6. If a systemic pattern was found: state its scope and what you are recommending — local fix or universal — and why. User decides.

Then state: "Awaiting approval. No files will be modified until you confirm."

Do not execute. Do not begin any task. Do not make any file changes.
