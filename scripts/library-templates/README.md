# DevPortal Documentation Templates

Templates for publishing library documentation to the Algorand Developer Portal.

## Overview

These templates enable your library to publish pre-built documentation
artifacts that the devportal imports automatically. This replaces the
raw-file import strategy with a faster, more reliable pipeline.

## Template files

| File | Copy to | Purpose |
|------|---------|---------|
| `build-sidebar-json.ts` | `docs/build-sidebar-json.ts` | Serializes `sidebar.config.ts` → `sidebar.json` |
| `normalize-links.ts` | `docs/normalize-links.ts` | Converts relative markdown links to absolute paths |
| `publish-devportal-docs.yml` | `.github/workflows/publish-devportal-docs.yml` | CI workflow for publishing doc artifacts |

## Setup

### 1. Copy template files

Copy all three template files into your library repo at the paths
shown in the table above.

### 2. Add tsx dev dependency

Each library's `docs/package.json` must have `tsx` as a dev dependency:

```bash
cd docs && pnpm add -D tsx
```

### 3. Add npm scripts to docs/package.json

Your `docs/package.json` must define these scripts:

```json
{
  "scripts": {
    "build-devportal": "pnpm build && pnpm run normalize-links && pnpm run build-sidebar",
    "normalize-links": "npx tsx normalize-links.ts",
    "build-sidebar": "npx tsx build-sidebar-json.ts"
  }
}
```

The `build-devportal` script is the single entry point called by the CI
workflow. Customize it if your library needs additional steps (e.g.,
Sphinx API doc generation before the Astro build).

### 4. Verify sidebar.config.ts

Your `docs/sidebar.config.ts` must export a `sidebar` array:

```ts
import type { StarlightUserConfig } from '@astrojs/starlight/types'

export const sidebar: NonNullable<StarlightUserConfig['sidebar']> = [
  // Your sidebar entries here
]
```

Non-serializable entries (like `typeDocSidebarGroup`) are automatically
filtered out by `build-sidebar-json.ts`. To provide serializable
replacements (e.g., an autogenerate fallback for filtered entries),
export a `devportalFallbacks` array alongside `sidebar`.

### 5. Add language-specific CI steps (if needed)

The workflow template has a placeholder section for language-specific
setup. Add your steps there:

- **Python/Sphinx repos:** Add `astral-sh/setup-uv` + `uv sync --group dev`
- **TypeScript/TypeDoc repos:** Add `npm ci` at root for TypeDoc dependencies

### 6. Verify content paths

The workflow copies content from these directories (adjust in the
workflow YAML if your paths differ):

- `docs/src/content/docs/guides/` - Guide documentation
- `docs/src/content/docs/api/` - API reference
- Root `.md`/`.mdx` files in `docs/src/content/docs/`

### 7. Test locally

```bash
cd docs
pnpm run build-devportal
ls dist-devportal/
# Should contain: content/, sidebar.json
```

## How it works

1. **Build**: Library CI runs `pnpm run build-devportal` which:
   - Builds the Starlight site (`pnpm build`)
   - Normalizes relative links to absolute paths (`normalize-links.ts`)
   - Serializes the sidebar config to JSON (`build-sidebar-json.ts`)
2. **Package**: Copies `guides/`, `api/`, and root content files +
   sidebar.json + manifest.json into a tarball (`devportal-docs.tar.gz`)
3. **Publish**: Attaches tarball to a GitHub Release
   - Nightly → rolling `docs-latest` pre-release
   - Tag push (`v*`) → attached to the version's release
4. **Import**: Devportal's `import-release-docs.ts` downloads the tarball,
   unpacks content, normalizes links to devportal paths, and applies any
   configured post-import transforms

## normalize-links.ts

Converts all relative markdown links in `guides/` and `api/` to absolute
paths rooted at the library's Starlight site base (read from
`astro.config.mjs` or passed via `--base`).

Features:
- Skips links inside fenced code blocks and inline code
- Filesystem fallback resolution for hand-written guides with broken relative links
- Strips `.md`/`.mdx` extensions and normalizes `index` paths
- Exits with error if any links can't be resolved

The devportal's import script applies a second normalization pass that
rewrites these site-base-rooted links to devportal content paths.

## Using the composite action (recommended)

Instead of copying `publish-devportal-docs.yml`, you can reference the
reusable composite action from the devportal repo. This keeps the
shared packaging/publishing logic in one place.

Your library workflow only needs checkout, Node/pnpm setup, and
language-specific steps:

```yaml
name: Publish DevPortal Docs

on:
  schedule:
    - cron: '0 2 * * *'
  push:
    tags: ['v*']
  workflow_dispatch:
    inputs:
      ref:
        description: 'Git ref to build from'
        required: false
        default: 'main'

permissions:
  contents: write

jobs:
  publish-docs:
    name: Build and Publish Docs
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
      - uses: actions/checkout@v4
        with:
          ref: ${{ github.event.inputs.ref || github.ref }}

      - uses: actions/setup-node@v4
        with:
          node-version: '22'

      - uses: pnpm/action-setup@v4
        with:
          version: 10

      # Add language-specific steps here:
      # - run: npm ci          # TypeScript/TypeDoc
      # - uses: astral-sh/setup-uv@v5  # Python/Sphinx
      # - run: uv sync --group dev

      - name: Publish DevPortal Docs
        uses: algorandfoundation/devportal/.github/actions/publish-devportal-docs@main
```

The composite action handles: dependency install, `build-devportal`,
content packaging, manifest generation, tarball creation, and GitHub
Release publishing.

## No secrets required

The CI workflow publishes to the library's own GitHub Releases (using
the built-in `GITHUB_TOKEN`). The devportal's nightly import picks up
new releases automatically — no `repository_dispatch` or PAT needed.
