import { readFileSync, readdirSync, statSync } from 'fs'
import { execFileSync } from 'child_process'
import { join } from 'path'
import { DEFAULT_THRESHOLD, detectBip39Sequences } from './detect'
import { loadIgnorePatterns, compilePattern, isIgnored } from './ignore'

const LOCK_FILES = new Set([
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',
  'bun.lockb',
  'Cargo.lock',
  'Gemfile.lock',
  'poetry.lock',
  'composer.lock',
])

/** A BIP39 violation tied to a specific file, produced by {@link scanFiles}. */
export interface ScanViolation {
  /** The file path where the violation was found. */
  file: string
  /** The 1-based line number within the file. */
  lineNumber: number
  /** The consecutive BIP39 words that triggered the violation. */
  matchedWords: string[]
  /** The full text of the line where the violation starts. */
  line: string
}

export function getBasename(filePath: string): string {
  return filePath.split('/').pop() ?? filePath
}

export function isBinary(content: string): boolean {
  return content.includes('\0')
}

function getGitFiles(): string[] {
  try {
    const output = execFileSync('git', ['ls-files'], { encoding: 'utf-8' })
    return output.trim().split('\n').filter(Boolean)
  } catch {
    return []
  }
}

function getGitFilesInDir(dir: string): string[] | null {
  try {
    const output = execFileSync('git', ['ls-files', dir], { encoding: 'utf-8' })
    return output.trim().split('\n').filter(Boolean)
  } catch {
    return null
  }
}

export function getFilesRecursive(dir: string): string[] {
  const results: string[] = []
  const entries = readdirSync(dir)

  for (const entry of entries) {
    if (entry === '.git' || entry === 'node_modules') continue
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)
    if (stat.isDirectory()) {
      results.push(...getFilesRecursive(fullPath))
    } else {
      results.push(fullPath)
    }
  }

  return results
}

/**
 * Scan an array of file paths for BIP39 mnemonic sequences.
 *
 * Each file is read as UTF-8 text. Binary files (containing null bytes) are
 * silently skipped. Files that cannot be read are also skipped.
 *
 * @param files - Absolute or relative file paths to scan.
 * @param threshold - Minimum consecutive BIP39 words to trigger a violation (default: {@link DEFAULT_THRESHOLD}).
 * @returns An array of {@link ScanViolation} objects across all scanned files.
 */
export function scanFiles(
  files: string[],
  threshold: number = DEFAULT_THRESHOLD,
): ScanViolation[] {
  const violations: ScanViolation[] = []

  for (const file of files) {
    let content: string
    try {
      content = readFileSync(file, 'utf-8')
    } catch {
      continue
    }

    if (isBinary(content)) continue

    const detected = detectBip39Sequences(content, threshold)
    for (const v of detected) {
      violations.push({
        file,
        lineNumber: v.lineNumber,
        matchedWords: v.matchedWords,
        line: v.line,
      })
    }
  }

  return violations
}

// ── CLI ──────────────────────────────────────────────────────────────

const isTTY = process.stderr.isTTY ?? false
const RED = isTTY ? '\x1b[0;31m' : ''
const GREEN = isTTY ? '\x1b[0;32m' : ''
const YELLOW = isTTY ? '\x1b[0;33m' : ''
const BOLD = isTTY ? '\x1b[1m' : ''
const NC = isTTY ? '\x1b[0m' : ''

export function main(): void {
  const args = process.argv.slice(2)

  let mode: 'git' | 'dir' = 'git'
  let dirPath = '.'
  let includeLockfiles = false
  let threshold = DEFAULT_THRESHOLD
  let jsonOutput = false
  const extraIgnorePatterns: string[] = []

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--git':
        mode = 'git'
        break
      case '--dir':
        mode = 'dir'
        dirPath = args[++i]
        break
      case '--include-lockfiles':
        includeLockfiles = true
        break
      case '--threshold':
        threshold = parseInt(args[++i], 10)
        break
      case '--json':
        jsonOutput = true
        break
      case '--ignore':
        extraIgnorePatterns.push(args[++i])
        break
    }
  }

  let files: string[]
  if (mode === 'dir') {
    files = getGitFilesInDir(dirPath) ?? getFilesRecursive(dirPath)
  } else {
    files = getGitFiles()
  }

  if (!includeLockfiles) {
    files = files.filter((f) => !LOCK_FILES.has(getBasename(f)))
  }

  const allIgnorePatterns = [...loadIgnorePatterns(), ...extraIgnorePatterns]
  const compiled = allIgnorePatterns.map(compilePattern)
  files = files.filter((f) => !isIgnored(f, compiled))

  const violations = scanFiles(files, threshold)

  if (jsonOutput) {
    process.stdout.write(JSON.stringify(violations, null, 2) + '\n')
    process.exit(violations.length > 0 ? 1 : 0)
  }

  if (violations.length > 0) {
    process.stderr.write('\n')
    if (isTTY) {
      process.stderr.write(
        `${RED}${BOLD}╔══════════════════════════════════════════════════════════════╗${NC}\n`,
      )
      process.stderr.write(
        `${RED}${BOLD}║  BIP39 SEED PHRASE DETECTED                                  ║${NC}\n`,
      )
      process.stderr.write(
        `${RED}${BOLD}╚══════════════════════════════════════════════════════════════╝${NC}\n`,
      )
    } else {
      process.stderr.write('=== BIP39 SEED PHRASE DETECTED ===\n')
    }

    for (const v of violations) {
      process.stderr.write('\n')
      process.stderr.write(`  ${YELLOW}File: ${v.file}:${v.lineNumber}${NC}\n`)
      process.stderr.write(
        `  ${RED}Found ${v.matchedWords.length} consecutive BIP39 words:${NC}\n`,
      )
      process.stderr.write(`  ${RED}  → ${v.matchedWords.join(' ')}${NC}\n`)
    }

    process.stderr.write('\n')
    process.exit(1)
  } else {
    process.stderr.write(`${GREEN}✓ No BIP39 seed phrases detected${NC}\n`)
    process.exit(0)
  }
}

// Only run when executed directly (not when imported for testing)
const isDirectRun =
  process.argv[1]?.endsWith('scan-repo.ts') ||
  process.argv[1]?.endsWith('scan-repo')

if (isDirectRun) {
  main()
}
