# DevPortal Documentation Templates

Templates for publishing library documentation to the Algorand Developer Portal.

## Overview

These templates enable your library to publish pre-built documentation
artifacts that the devportal imports automatically. This replaces the
raw-file import strategy with a faster, more reliable pipeline.

## Setup

### 1. Copy template files

Copy into your library repo:

- `build-sidebar-json.mjs` -> `docs/build-sidebar-json.mjs`
- `publish-devportal-docs.yml` -> `.github/workflows/publish-devportal-docs.yml`

### 2. Verify sidebar.config.ts

Your `docs/sidebar.config.ts` must export a `sidebar` array:

```ts
import type { StarlightUserConfig } from '@astrojs/starlight/types'

export const sidebar: NonNullable<StarlightUserConfig['sidebar']> = [
  // Your sidebar entries here
]
```

Non-serializable entries (like `typeDocSidebarGroup`) are automatically
filtered out by `build-sidebar-json.mjs`.

### 3. Verify content paths

The workflow copies content from these directories (adjust in the
workflow YAML if your paths differ):

- `docs/src/content/docs/guides/` - Guide documentation
- `docs/src/content/docs/api/` - API reference

### 4. Configure secrets

Add this secret to your library repo:

| Secret | Description |
|--------|-------------|
| `DEVPORTAL_DISPATCH_TOKEN` | PAT with `repo` scope on `algorandfoundation/devportal`. Used to trigger a rebuild when docs are published. |

### 5. Test locally

```bash
cd docs
pnpm build
node build-sidebar-json.mjs
ls dist-devportal/
# Should contain: content/, sidebar.json
```

## How it works

1. **Build**: Library CI builds Starlight docs (`pnpm build`)
2. **Package**: Copies `guides/` and `api/` content + serialized sidebar
   into a tarball (`devportal-docs.tar.gz`)
3. **Publish**: Attaches tarball to a GitHub Release
   - Nightly -> rolling `docs-latest` pre-release
   - Tag push (`v*`) -> attached to the version's release
4. **Notify**: `repository_dispatch` triggers devportal rebuild
5. **Import**: Devportal's `import-release-docs.ts` downloads the tarball,
   unpacks content, and rebases sidebar paths
