# macOS Case-Insensitive Filename Fix — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix PascalCase-to-lowercase renames so git tracks them correctly on macOS (case-insensitive APFS with `core.ignorecase=true`).

**Architecture:** Two self-contained fixes — one in `normalize-links.ts` (two-step rename + best-effort `git mv`), one in `import-release-docs.ts` (post-extract git index reconciliation). No shared imports between them. All new git interactions use `execFileSync` (not shell-based exec) to avoid injection risks.

**Tech Stack:** Node.js `fs`, `child_process.execFileSync`, git CLI, vitest

---

### Task 1: Add `caseRename` helper and test to `normalize-links.ts`

**Files:**
- Modify: `packages/devportal-docs/src/commands/normalize-links.ts:1,35-66`
- Modify: `packages/devportal-docs/tests/commands/normalize-links.test.ts:30-60`

**Step 1: Write the failing test**

In `packages/devportal-docs/tests/commands/normalize-links.test.ts`, add a new
test inside the existing `describe('lowercaseContentPaths', ...)` block, after
the last test (line 59):

```typescript
  it('uses two-step rename for case-only changes', () => {
    const dir = makeTmpDir();
    writeFileSync(join(dir, 'MyFile.md'), '# Content');
    lowercaseContentPaths(dir);
    // On any filesystem (case-sensitive or not), the file should be lowercase
    const files = readdirSync(dir);
    expect(files).toContain('myfile.md');
    expect(files).not.toContain('MyFile.md');
    // Content is preserved
    expect(readFileSync(join(dir, 'myfile.md'), 'utf-8')).toBe('# Content');
  });
```

**Step 2: Run test to verify it passes (existing behavior already handles this in /tmp)**

Run: `cd packages/devportal-docs && pnpm test -- --reporter=verbose 2>&1 | head -60`
Expected: PASS (the existing `renameSync` works in /tmp on macOS because it's
case-preserving — the test validates the contract, not the git fix specifically)

**Step 3: Add `caseRename` helper and update `lowercaseContentPaths`**

In `packages/devportal-docs/src/commands/normalize-links.ts`:

a) Add `execFileSync` to the imports (line 1 area):

```typescript
import { execFileSync } from 'node:child_process';
```

b) Add `caseRename` function after the `targetName` function (after line 33),
before `lowercaseContentPaths`:

```typescript
function caseRename(dir: string, oldName: string, newName: string): void {
  const oldPath = join(dir, oldName);
  const newPath = join(dir, newName);

  // Two-step rename via temp name — safe on case-insensitive filesystems
  // where renameSync('FooBar.md', 'foobar.md') may not update git's index.
  const tmpPath = join(dir, `${oldName}.__tmp__`);
  renameSync(oldPath, tmpPath);
  renameSync(tmpPath, newPath);

  // Best-effort: update git index so the case change is tracked.
  // Silently ignored if git is unavailable or the file is untracked.
  try {
    execFileSync('git', ['mv', '-f', oldPath, newPath], { stdio: 'pipe' });
  } catch {
    // Not in a git repo, or file not tracked — filesystem rename is enough.
  }
}
```

c) In `lowercaseContentPaths`, replace the `renameSync` call (line 60):

Change:
```typescript
      renameSync(join(dir, name), join(dir, target));
```

To:
```typescript
      caseRename(dir, name, target);
```

**Step 4: Run tests to verify everything passes**

Run: `cd packages/devportal-docs && pnpm test -- --reporter=verbose 2>&1 | head -60`
Expected: All tests PASS (including the new one)

**Step 5: Commit**

```bash
git add packages/devportal-docs/src/commands/normalize-links.ts packages/devportal-docs/tests/commands/normalize-links.test.ts
git commit -m "fix: use two-step rename + git mv for case-insensitive FS in normalize-links

On macOS (core.ignorecase=true), renameSync('FooBar.md', 'foobar.md')
doesn't update git's index. Use a two-step rename via temp name and
best-effort git mv -f to ensure git tracks the case change."
```

---

### Task 2: Add `fixGitCaseMismatches` to `import-release-docs.ts`

**Files:**
- Modify: `scripts/import-release-docs.ts:21,104-116,325-330`

**Step 1: Add `execFileSync` import**

In `scripts/import-release-docs.ts`, update the `child_process` import (line 21):

Change:
```typescript
import { execSync } from 'child_process';
```

To:
```typescript
import { execFileSync, execSync } from 'child_process';
```

Note: The existing `execSync` calls for `tar` and `cp` use hardcoded commands
with quoted paths — they are retained as-is. New git interactions use
`execFileSync` with array arguments to avoid shell injection.

**Step 2: Add `fixGitCaseMismatches` function**

Add after the `walkFiles` function (after line 116), before
`applyPostImportTransforms`:

```typescript
/**
 * Fix case-only mismatches between git's index and the filesystem.
 *
 * On macOS (core.ignorecase=true), after rmSync + cp -R with correctly-cased
 * content from a tarball, git's index may still track the old PascalCase
 * names. This function detects mismatches and uses git mv -f to reconcile.
 */
function fixGitCaseMismatches(dir: string): void {
  let trackedFiles: string[];
  try {
    const output = execFileSync('git', ['ls-files', dir], {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    trackedFiles = output.trim().split('\n').filter(Boolean);
  } catch {
    // Not in a git repo — nothing to fix.
    return;
  }

  if (trackedFiles.length === 0) return;

  // Build a map from lowercase path to actual filesystem path
  const fsFiles = walkFiles(dir);
  const fsMap = new Map<string, string>();
  for (const f of fsFiles) {
    fsMap.set(f.toLowerCase(), f);
  }

  let fixCount = 0;
  for (const tracked of trackedFiles) {
    const fsPath = fsMap.get(tracked.toLowerCase());
    if (!fsPath || fsPath === tracked) continue;

    // Case mismatch: git tracks 'FooBar.md' but filesystem has 'foobar.md'
    try {
      execFileSync('git', ['mv', '-f', tracked, fsPath], { stdio: 'pipe' });
      fixCount++;
    } catch {
      // File may have been deleted or is otherwise not fixable — skip.
    }
  }

  if (fixCount > 0) {
    console.log(`  Fixed ${fixCount} case mismatch(es) in git index`);
  }
}
```

**Step 3: Call `fixGitCaseMismatches` after content extraction**

In `downloadAndUnpack`, after step 6 (the `cp -R` block, around line 330) and
before step 7 (sidebar.json copy), add:

```typescript
    // 6b. Fix case mismatches between git index and extracted content.
    //     On macOS, git may still track PascalCase names from a prior import.
    fixGitCaseMismatches(destDir);
```

**Step 4: Verify the script still works**

Run: `pnpm run import:release:dry-run 2>&1 | head -20`
Expected: Dry run output listing configured variants (no errors)

**Step 5: Commit**

```bash
git add scripts/import-release-docs.ts
git commit -m "fix: reconcile git index case mismatches after tarball extraction

On macOS (core.ignorecase=true), after rmSync + cp -R with lowercase
content from a tarball, git's index may still track old PascalCase names.
After extraction, compare git ls-files against the filesystem and use
git mv -f to fix any case-only mismatches."
```

---

### Task 3: Run full test suite and verify

**Files:** None (verification only)

**Step 1: Run devportal-docs tests**

Run: `cd packages/devportal-docs && pnpm test -- --reporter=verbose`
Expected: All tests PASS

**Step 2: Run lint**

Run: `pnpm run lint 2>&1 | tail -20`
Expected: No new errors

**Step 3: Run dry-run import to verify no regressions**

Run: `pnpm run import:release:dry-run 2>&1 | head -20`
Expected: Lists configured variants without errors
