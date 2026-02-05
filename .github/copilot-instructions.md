# Copilot Review Instructions

This is the Algorand Developer Portal — a static documentation site built with Astro and Starlight, deployed to Cloudflare Pages.

## Project Context

- **Stack**: Astro, Starlight, TypeScript, Tailwind CSS
- **Content**: Markdown/MDX files in `src/content/docs/`
- **Deployment**: `main` (staging) → `main-dist` (production) → Cloudflare Pages
- **CI**: ESLint, Prettier, `astro check`, `astro build`
- **No database, no auth, no backend API** — this is a fully static site

## PR Types

### Automated Documentation Import PRs
Labels: `documentation`, `automated`, `import`

These PRs are generated nightly by the `import-docs.yml` workflow, which pulls documentation from external AlgoKit repositories into `src/content/docs/`. When reviewing:

- Summarize which documentation areas were updated (e.g., AlgoKit CLI, AlgoKit Utils TypeScript, ARC Standards)
- Check for broken internal links (relative paths between docs pages)
- Verify frontmatter is valid (title, description, sidebar fields)
- Flag any unexpected file deletions or structural changes
- Check that code examples in docs are syntactically correct
- Note any new pages that may need sidebar configuration

### Production Sync PRs
Labels: `automated`, `sync`

These PRs merge `main` into `main-dist` for production deployment. Start your review with a **categorized change summary** as a top-level comment. Group all changed files into these categories:

- **Documentation** — Changes under `src/content/docs/`. List which doc areas were updated (e.g., AlgoKit CLI, AlgoKit Utils TypeScript, ARC Standards, NodeKit Reference) with file counts per area.
- **Dependencies** — Changes to `package.json`, `pnpm-lock.yaml`, and any dependency version bumps.
- **CI/Workflows** — Changes under `.github/`, build scripts, or config files (`astro.config.mjs`, `tsconfig.json`, etc.).
- **Features/Fixes** — Everything else: components, layouts, styles, utilities under `src/`.

For each category, include the number of files changed. Omit empty categories. After the summary, flag anything that could affect the production build or deployment.

### Feature/Fix PRs

Manual PRs from contributors. When reviewing:

- Verify `pnpm run lint` and `pnpm run build` would pass
- Check Markdown/MDX content for typos and formatting issues
- Review Astro component changes for correctness
- Check Starlight configuration changes (sidebar, navigation, theme)
- Verify Tailwind classes are consistent with existing patterns
- Flag any hardcoded secrets or tokens in committed files

## Content Review Priorities

1. **Link integrity** — Broken links are the most common issue in doc imports. Check relative paths, anchor links, and cross-references between pages.
2. **Frontmatter validity** — Every doc page needs valid YAML frontmatter with at minimum a `title` field.
3. **Heading structure** — Pages should have a logical heading hierarchy (no skipped levels).
4. **Code blocks** — Verify language tags on fenced code blocks and that examples look syntactically correct.
5. **Image references** — Check that image paths resolve to files that exist in the repo.

## Review Style

- Be concise — this is a docs site, not a complex application
- Focus feedback on content quality and structural correctness
- For automated PRs, prioritize summarizing what changed over nitpicking
- Flag only actionable issues; skip stylistic preferences already handled by Prettier
