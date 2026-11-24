# Contributing

The project currently does not use Conventional Commits or any specific conventions.
Work is branched
and merged from [main](https://github.com/algorandfoundation/devportal/tree/devrel-content) as the main trunk.

For the internal devrel guide,
see the [Solas documentation](https://solas.algorand.foundation/doc/content-development-workflow-dPylBlDwdm#h-feature-branches)

## Get Started

### Setup Repository

Clone the repository if it has not been done already.
This only has to be done once to set up the project

```shell showLineNumbers=false frame=none
git clone git@github.com:algorandfoundation/devportal.git
```

Update the latest changes from the remote repository

```shell showLineNumbers=false frame=none
git fetch
```

#### Feature branches

Please use the following convention when naming branches for clarity:

```
{feat/fix/chore/change}/topicgroup-section-page
```

For example:

```shell showLineNumbers=false frame=none
git checkout feat/algokit-utils-client
```

### Submitting Changes

Provide a descriptive commit message that outlines the changes.
Changes must be done via a Pull Request (PR).

Ensure the following acceptance criteria are met before submitting a PR:

- Ensure there are no typos in the content
- Ensure `pnpm run lint` passes
- Ensure `pnpm run check:version-claims` passes (see [Version-specific information](#version-specific-information))
- Ensure `pnpm run build` passes

> **Troubleshooting:** If `pnpm run build` fails with `Cannot find module .../dist/chunks/*.mjs`, clear stale build artifacts and retry: `rm -rf dist node_modules/.vite .astro`. This is a cached-chunk issue from a previous build, not a problem with your changes.

### Version-specific information

Most of what this portal describes is owned by another repository: AlgoKit, the SDKs, go-algorand, the ARCs. Anything we restate about the _current_ state of those projects becomes wrong when they release, and nobody is told. The rule is to not hold a copy when we can point at the source.

**In hand-written pages:**

- Do not state a current version ("the latest version is 9.2.0", a "Current Version" column). Link to the project's `/releases/latest` page or package registry instead.
- Do not state a value as "currently N" or date a claim "as of March 2026". Link to the source of truth, or say which release or consensus version the value belongs to.
- Historical facts are fine and stay true: "introduced in AVM v12", "as of go-algorand 3.4.2".
- For the current AVM/TEAL version, use the `<AvmVersion />` component. It reads the opcode dataset, which is kept in sync with go-algorand.
- State each minimum requirement once. Tool prerequisites (Python, Node.js, Docker) live in the Prerequisites section of `algokit/algokit-intro.mdx`; node hardware requirements live in `nodes/types.mdx`. Link to those sections instead of repeating the numbers.
- Do not link to a specific commit or release tag of an `algorand/*` or `algorandfoundation/*` repo unless the page is about that release. Link to a branch (`main`, `rel/stable`) so the link follows the code.
- Do not paste command output that embeds version numbers. Use `x.y.z`.
- Do not copy code that calls a library API into `examples/`. Use `<RemoteCode>` to pull a tested snippet from [devportal-code-examples](https://github.com/algorandfoundation/devportal-code-examples), or link to the library's docs.

`pnpm run check:version-claims` enforces the patterns it can detect and runs in CI. It only fails on new claims; existing accepted ones are listed in `scripts/version-claims-baseline.json`. If a claim is deliberate, put a comment on the line above it:

```mdx
{/* version-claim-ok: this page is about the v5.0.0 release */}
```

**Imported library docs** (`src/content/docs/docs/`, `src/content/docs/arc-standards/`) are overwritten by the import. Do not edit them here; fix them in the source repository. See [DEPLOYMENT.md](./DEPLOYMENT.md) for how imports work.

### Publishing [TBD]

Production deployment from `main-dist` branch to CloudFlare Pages. PRs can be previewed in CF Pages as well.
