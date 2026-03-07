# Development Rules

## Non-Negotiable Rules

1. **One pass, verify, move on** — Make changes, run `pnpm build` to verify, then proceed. Do not loop back unless build fails.
2. **Never hardcode data** — Content comes from markdown frontmatter (`content/*.md`), component props, or data files. Never embed business-specific text directly in layout components.
3. **Build verification required** — Every change must pass `pnpm build` before being considered complete.
4. **Read before writing** — Always read an existing file before modifying it. Never create a file that already exists without reading it first.
5. **Use pnpm exclusively** — This project uses pnpm. Never use npm or yarn. Never create a `package-lock.json` or `yarn.lock`.
6. **Incremental changes** — Make one change at a time and verify before making more. Do not batch unrelated changes.
7. **No speculative features** — Only implement what is explicitly requested. Do not add features, refactor code, or make improvements beyond what was asked.

## SEO Rules

1. **Title tags under 60 characters** — Google truncates beyond ~60 characters.
2. **Meta descriptions under 160 characters** — Google truncates beyond ~160 characters.
3. **One H1 per page** — Every page must have exactly one H1 tag. Never duplicate H1s for desktop/mobile.
4. **Demo pages must be noindexed** — Any test or demo page must include `<meta name="robots" content="noindex, nofollow" />`.

## Pre-Task Checklist

- [ ] Read the relevant file(s) before making changes
- [ ] Check session logs (`session-logs/`) for recent related work
- [ ] Confirm dev server is running on port 3100
- [ ] Understand the existing patterns before adding new ones

## Post-Task Checklist

- [ ] Run `pnpm build` — must complete without errors
- [ ] Verify no TypeScript errors
- [ ] Check that mobile layouts are not broken by desktop changes (use responsive classes)
- [ ] Screenshot affected pages if visual changes were made (`pnpm screenshot`)
- [ ] Do not push unless the user explicitly asks

## Package Manager Rule

**Always use pnpm.** Commands:
- `pnpm install` — install dependencies
- `pnpm add <package>` — add a dependency
- `pnpm add -D <package>` — add a dev dependency
- `pnpm run <script>` — run a script
- `pnpm build` — build the project

If a `package-lock.json` or `yarn.lock` appears, delete it immediately.
