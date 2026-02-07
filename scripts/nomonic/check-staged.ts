import { execFileSync } from 'child_process'
import { detectBip39Sequences } from './detect'
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

const isTTY = process.stderr.isTTY ?? false
const RED = isTTY ? '\x1b[0;31m' : ''
const GREEN = isTTY ? '\x1b[0;32m' : ''
const YELLOW = isTTY ? '\x1b[0;33m' : ''
const BOLD = isTTY ? '\x1b[1m' : ''
const NC = isTTY ? '\x1b[0m' : ''

interface FileViolation {
  file: string
  lineNumber: number
  matchedWords: string[]
}

const ignorePatterns = loadIgnorePatterns().map(compilePattern)

export function getBasename(filePath: string): string {
  return filePath.split('/').pop() ?? filePath
}

export function getStagedFiles(): string[] {
  try {
    const output = execFileSync(
      'git',
      ['diff', '--cached', '--name-only', '--diff-filter=d'],
      { encoding: 'utf-8' },
    )
    return output
      .trim()
      .split('\n')
      .filter(Boolean)
      .filter((f) => !LOCK_FILES.has(getBasename(f)))
      .filter((f) => !isIgnored(f, ignorePatterns))
  } catch {
    return []
  }
}

export function getStagedDiff(file: string): string {
  try {
    return execFileSync('git', ['diff', '--cached', '--', file], {
      encoding: 'utf-8',
    })
  } catch {
    return ''
  }
}

/** A single added line extracted from a unified diff. */
export interface AddedLine {
  /** The 1-based line number in the new (post-patch) file. */
  fileLineNumber: number
  /** The text content of the added line (without the leading `+`). */
  text: string
}

/**
 * Parse a unified diff and extract the added lines with their file line numbers.
 *
 * Tracks hunk headers (`@@ ... @@`) to maintain accurate line numbering.
 * Removed lines (`-`) do not advance the line counter; context lines do.
 *
 * @param diff - A unified diff string (e.g. from `git diff --cached`).
 * @returns An array of {@link AddedLine} objects for each `+` line in the diff.
 */
export function extractAddedLines(diff: string): AddedLine[] {
  const result: AddedLine[] = []
  let currentLine = 0

  for (const line of diff.split('\n')) {
    // Parse hunk headers: @@ -old,count +new,count @@
    const hunkMatch = line.match(/^@@\s+-\d+(?:,\d+)?\s+\+(\d+)(?:,\d+)?\s+@@/)
    if (hunkMatch) {
      currentLine = parseInt(hunkMatch[1], 10)
      continue
    }

    // Skip file headers
    if (line.startsWith('+++') || line.startsWith('---')) continue

    if (line.startsWith('+')) {
      result.push({ fileLineNumber: currentLine, text: line.slice(1) })
      currentLine++
    } else if (line.startsWith('-')) {
      // Removed line — does not advance the new-file line counter
    } else {
      // Context line — advances the counter
      currentLine++
    }
  }

  return result
}

/** A reassembled block of added content with a mapping back to original file line numbers. */
export interface ContentBlock {
  /** The concatenated text of all added lines, with sentinel lines between non-contiguous chunks. */
  content: string
  /** Maps each line index in {@link content} to its original file line number (`-1` for sentinel lines). */
  lineMap: number[]
}

/**
 * Build a content block from added lines, inserting empty sentinel lines
 * between non-contiguous lines so cross-line detection does not span gaps.
 *
 * Sentinel lines (`---nomonic-sentinel---`) ensure that the BIP39 detector
 * cannot accidentally join words from unrelated hunks.
 *
 * @param addedLines - Added lines extracted by {@link extractAddedLines}.
 * @returns A {@link ContentBlock} with the reassembled content and line mapping.
 */
export function buildContentBlock(addedLines: AddedLine[]): ContentBlock {
  const contentLines: string[] = []
  const lineMap: number[] = []

  for (let i = 0; i < addedLines.length; i++) {
    // Insert empty sentinel between non-contiguous lines
    if (
      i > 0 &&
      addedLines[i].fileLineNumber !== addedLines[i - 1].fileLineNumber + 1
    ) {
      contentLines.push('---nomonic-sentinel---')
      lineMap.push(-1)
    }
    contentLines.push(addedLines[i].text)
    lineMap.push(addedLines[i].fileLineNumber)
  }

  return { content: contentLines.join('\n'), lineMap }
}

export function getThreshold(): number {
  const env = process.env.BIP39_THRESHOLD
  if (env === undefined) return 5
  const parsed = parseInt(env, 10)
  if (Number.isNaN(parsed) || parsed < 1) {
    process.stderr.write(
      `${YELLOW}⚠ Invalid BIP39_THRESHOLD="${env}", using default (5)${NC}\n`,
    )
    return 5
  }
  return parsed
}

export function main(): void {
  const threshold = getThreshold()
  const files = getStagedFiles()
  if (files.length === 0) {
    process.stderr.write(
      `${GREEN}✓ No BIP39 seed phrases detected in staged files${NC}\n`,
    )
    process.exit(0)
  }

  const allViolations: FileViolation[] = []

  for (const file of files) {
    const diff = getStagedDiff(file)
    if (!diff) continue

    const addedLines = extractAddedLines(diff)
    if (addedLines.length === 0) continue

    const { content, lineMap } = buildContentBlock(addedLines)
    const violations = detectBip39Sequences(content, threshold)
    for (const v of violations) {
      const blockIndex = v.lineNumber - 1
      const fileLineNumber =
        blockIndex < lineMap.length
          ? lineMap[blockIndex]
          : lineMap[lineMap.length - 1]
      allViolations.push({
        file,
        lineNumber: fileLineNumber,
        matchedWords: v.matchedWords,
      })
    }
  }

  if (allViolations.length > 0) {
    process.stderr.write('\n')
    if (isTTY) {
      process.stderr.write(
        `${RED}${BOLD}╔══════════════════════════════════════════════════════════════╗${NC}\n`,
      )
      process.stderr.write(
        `${RED}${BOLD}║  BIP39 SEED PHRASE DETECTED — COMMIT BLOCKED                 ║${NC}\n`,
      )
      process.stderr.write(
        `${RED}${BOLD}╚══════════════════════════════════════════════════════════════╝${NC}\n`,
      )
    } else {
      process.stderr.write(
        '=== BIP39 SEED PHRASE DETECTED — COMMIT BLOCKED ===\n',
      )
    }

    for (const v of allViolations) {
      process.stderr.write('\n')
      process.stderr.write(`  ${YELLOW}File: ${v.file}:${v.lineNumber}${NC}\n`)
      process.stderr.write(
        `  ${RED}Found ${v.matchedWords.length} consecutive BIP39 words:${NC}\n`,
      )
      process.stderr.write(`  ${RED}  → ${v.matchedWords.join(' ')}${NC}\n`)
    }

    process.stderr.write('\n')
    process.stderr.write(
      `${RED}${BOLD}Commit blocked.${NC} ${RED}Remove seed phrases before committing.${NC}\n`,
    )
    process.stderr.write(
      `${RED}Use ${BOLD}git commit --no-verify${NC} ${RED}to bypass (not recommended).${NC}\n`,
    )
    process.stderr.write('\n')
    process.exit(1)
  } else {
    process.stderr.write(
      `${GREEN}✓ No BIP39 seed phrases detected in staged files${NC}\n`,
    )
    process.exit(0)
  }
}

// Only run when executed directly (not when imported for testing)
const isDirectRun =
  process.argv[1]?.endsWith('check-staged.ts') ||
  process.argv[1]?.endsWith('check-staged')

if (isDirectRun) {
  main()
}
