# Deployment

The Algorand Developer Portal is a single Astro/Starlight site deployed from this repository.

The important thing to know is that deployment and documentation import are separate:

- `pnpm run import:docs` pulls remote library docs into this repository
- `pnpm run build` builds the site from whatever files are already present here

The deploy workflow runs `pnpm run build`, not `pnpm run import:docs`.

## What Lives Here

There are two kinds of docs in this repo:

- Local portal content under `src/content/docs/`
- Imported library content, mostly under `src/content/docs/docs/<library>/<language>/<version>/`

Example library URLs look like:

```text
/docs/<library>/<language>/<version>/<page>/
```

These library sections are within the same site but have their own picker, sidebar, and language/version selectors.

## Import Paths

There are two ways library docs get into this repo.

### 1. GitHub Loader

This means the portal copies raw docs files directly from an upstream GitHub repository.

That happens during:

```bash
IMPORT_GITHUB=true astro sync
```

This is one step inside `pnpm run import:docs`.

Current examples include:

- `arc-standards`

`nodekit` also uses this import path, but it is currently imported only as a
command reference for the local `Running A Node` section. It is intentionally
kept out of the library picker until there is a fuller NodeKit docs section to
expose as standalone library/tool documentation.

### 2. GitHub Artifact

This means the upstream repo publishes a prebuilt docs bundle as a GitHub Release asset named:

```text
devportal-docs.tar.gz
```

The portal downloads that artifact and unpacks it into the local content tree.

Current examples include:

- `algokit-utils`
- `algokit-cli`
- `algokit-subscriber`
- `algorand-python`
- `algorand-typescript`

The artifact is not a full repo archive. It is a docs bundle, typically containing:

- `content/`
- `sidebar.json`
- `manifest.json`

`manifest.json` records the upstream tag, commit and build time. The import
copies those into `imports/import-manifest.json`, which is committed. That file
is the portal's record of which upstream release each library's docs came from;
the version selector and `pnpm run check:freshness` both read it.

#### API reference

A library's generated API reference (TypeDoc, Sphinx) is not imported when its
import config sets `apiReferenceUrl`. The `api/` tree is dropped, the sidebar
gets one external link, and links into `api/` are rewritten to that URL. Old
portal URLs are redirected in `public/_redirects`.

Only set `apiReferenceUrl` when the library's own docs site documents the same
release line the portal imports. If the site is built from the default branch
and that is ahead of the latest stable release, leave it unset so the API
reference keeps coming from the release bundle.

## Import Command

The full import entry point is:

```bash
pnpm run import:docs
```

That command runs:

1. `pnpm run import:release`
2. `IMPORT_GITHUB=true astro sync`
3. `pnpm run sidebar:generate`
4. `pnpm run lint:fix`

## Automation

### Import automation

Remote docs are refreshed by:

- `.github/workflows/import-docs.yml`

This workflow runs `pnpm run import:docs` daily and opens or updates a PR with the imported changes. It authenticates with the DevPortal GitHub App (`BOT_ID` / `BOT_SK`), as `update-opcodes.yml` and `sync-to-production.yml` do.

An import source that fails makes the whole run fail. A library whose latest stable release has no docs bundle is skipped without failing the run (its committed docs are left as they are) and is listed in the run log.

### Freshness check

- `.github/workflows/check-freshness.yml`

Runs weekly and fails when imported docs or the TEAL opcode dataset are behind upstream. It makes no changes. Its purpose is to make a stalled import visible: imported docs are committed, so nothing else notices when the import stops producing PRs.

That means imported docs are normally committed into this repo before deployment.

### Deploy automation

The site is deployed by:

- `.github/workflows/publish.yaml`

That workflow runs:

```bash
pnpm run build
```

and publishes `dist/` to Cloudflare Pages.

### Branch promotion

There is also a promotion workflow:

- `.github/workflows/sync-to-production.yml`

It creates or updates a PR from `main` to `main-dist` when changes need to be promoted to prod.

## Upstream Publishing

For artifact-based libraries, this repo provides the shared publishing logic:

- `.github/actions/publish-devportal-docs/action.yml`
- `scripts/library-templates/publish-devportal-docs.yml`

- `.github/actions/publish-devportal-docs/action.yml`
  Reusable action that builds `devportal-docs.tar.gz` and publishes it to GitHub Releases
- `scripts/library-templates/publish-devportal-docs.yml`
  Template workflow for library repos

Preferred pattern:

- create a library workflow that calls the reusable action

Fallback pattern:

- copy and adapt the template workflow

A library should use one approach or the other, not both.

## Versioning

There are two layers of versioning:

- upstream artifact versioning
- DevPortal-exposed versioning

For artifact-based libraries, upstream can publish:

- a rolling `docs-latest` release
- version-tagged releases such as `v8.0.3`

The shared publishing action handles that split:

- non-tag runs update `docs-latest`
- tag pushes publish to the matching release tag

DevPortal only exposes versions that are explicitly listed in the library config. For example:

```ts
versions: [{ slug: 'latest', label: 'Latest' }];
```

That means the portal only exposes `latest`.

For artifact-based imports, mapping works like this:

- version slug `latest` -> the repo's latest **stable** release (GitHub's "latest release", which excludes pre-releases, so the rolling `docs-latest` build is never used)
- any other version slug -> GitHub Release tag with the same name

So the portal documents what users can install, not unreleased work on the default branch. If the latest stable release has no `devportal-docs.tar.gz` (it was cut before the library adopted the publishing action), that library is skipped and keeps its committed docs until a release ships a bundle.

If a library config were changed to:

```ts
versions: [
  { slug: 'latest', label: 'Latest' },
  { slug: 'v8.0.3', label: 'v8.0.3' },
];
```

then DevPortal would import and expose both the latest stable release and `v8.0.3`.

In practice, most libraries are currently configured as `latest` only.

### Example: `algokit-utils-ts`

`algokit-utils-ts` is an example of the artifact flow:

- it has a `publish-devportal-docs.yml` workflow
- it attaches `devportal-docs.tar.gz` to each version release (this is what the portal imports)
- it also publishes a rolling `docs-latest` pre-release from the default branch (not imported)

One piece of technical debt is easy to miss:

- the upstream library workflow has its own trigger branch
- the reusable DevPortal action also has its own branch reference

Those are separate settings.

That means changing the upstream workflow to run on `main` does not automatically change which branch of `devportal` provides the shared action.

The simpler end state is:

- the upstream workflow triggers on `main`
- the upstream workflow references the reusable action on `devportal` `main`

Until then, both branch settings need to be checked when troubleshooting or cleaning up the artifact publishing flow.

## Files To Read

If you need to trace the system, start here:

1. `package.json`
2. `imports/configs/index.ts`
3. `imports/configs/<library>/import.config.ts`
4. `scripts/import-release-docs.ts`
5. `src/content/config.ts`
6. `.github/workflows/import-docs.yml`
7. `.github/workflows/publish.yaml`
8. `.github/workflows/sync-to-production.yml`
