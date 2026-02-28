# macOS Case-Insensitive Filename Fix

## Problem

On macOS (case-insensitive APFS), two scripts fail to produce git-visible case
changes when renaming PascalCase filenames to lowercase:

1. **`packages/devportal-docs/src/commands/normalize-links.ts`** —
   `lowercaseContentPaths()` uses `renameSync()` which changes the on-disk name
   (APFS is case-preserving) but git's `core.ignorecase=true` prevents the index
   from updating. Files stay PascalCase in git.

2. **`scripts/import-release-docs.ts`** — after `rmSync` + `cp -R` with
   correctly-lowercased tarball content, git's index still tracks the old
   PascalCase entries. `git add` doesn't detect the case-only change.

On Linux (CI), both scripts work correctly because the filesystem is
case-sensitive.

## Approach

Git-aware renames in each script. Each fix is self-contained — no shared imports
between the two scripts.

## Design

### Fix 1: `normalize-links.ts`

Add a local `caseRename` helper in
`packages/devportal-docs/src/commands/normalize-links.ts`.

Replace the current `renameSync(old, new)` call in `lowercaseContentPaths` with
`caseRename(dir, name, target)`.

**`caseRename(dir, oldName, newName)` behavior:**

1. Two-step filesystem rename: `oldName` -> `oldName.__tmp__` -> `newName`
   (safe on case-insensitive filesystems where a direct rename is a no-op)
2. Best-effort `execFileSync('git', ['mv', '-f', old, new])` to update the git
   index (uses execFileSync, not execSync, to avoid shell injection)
3. If git is unavailable or the file is untracked, fall back silently
   (the filesystem rename already succeeded)

### Fix 2: `import-release-docs.ts`

Add a local `fixGitCaseMismatches(dir)` function in
`scripts/import-release-docs.ts`. Called after content extraction (after the
`cp -R` step, before link normalization).

**`fixGitCaseMismatches(dir)` behavior:**

1. Run `git ls-files <dir>` (via execFileSync) to get tracked filenames with
   their index case
2. Walk the filesystem to get actual filenames
3. For case-only mismatches, run `git mv -f <old-case> <new-case>`
4. Best-effort — if git unavailable, skip silently (Linux CI doesn't need this)

### Tests

- Add a test for the two-step rename in `normalize-links.test.ts` verifying the
  temp-name approach
- Existing `lowercaseContentPaths` tests use `/tmp` dirs and continue passing
- No test changes for `import-release-docs.ts` (no existing test suite)

## Files Modified

- `packages/devportal-docs/src/commands/normalize-links.ts` — add `caseRename`
  helper, update `lowercaseContentPaths` to use it
- `scripts/import-release-docs.ts` — add `fixGitCaseMismatches`, call it after
  extraction
- `packages/devportal-docs/tests/commands/normalize-links.test.ts` — add test
  for two-step rename
