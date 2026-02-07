import { BIP39_WORDS } from './wordlist'

/** Default minimum number of consecutive BIP39 words to trigger a violation. */
export const DEFAULT_THRESHOLD = 8

/** A detected sequence of consecutive BIP39 mnemonic words in scanned content. */
export interface Bip39Violation {
  /** The 1-based line number where the violation was found. */
  lineNumber: number
  /** The consecutive BIP39 words that triggered the violation. */
  matchedWords: string[]
  /** The full text of the line where the violation starts. */
  line: string
}

/**
 * Strip surrounding non-alphabetic characters from a token and classify it.
 * Returns the stripped word if the core is pure alpha, or null if it contains
 * interior punctuation (e.g. "they're", "open-source") or digits in the
 * stripped portions (e.g. "board[0]", "abandon123").
 * Returns 'skip' for tokens that are entirely non-alpha (e.g. "1.", "//", "2)").
 */
function stripToken(token: string): string | null | 'skip' {
  // Strip leading non-alpha
  const start = token.search(/[a-z]/)
  if (start === -1) return 'skip' // entirely non-alpha (e.g. "1.", "//", "---")

  // Strip trailing non-alpha
  let end = token.length - 1
  while (end >= start && !/[a-z]/.test(token[end])) end--

  const core = token.slice(start, end + 1)

  // If core contains any non-alpha character, it has interior punctuation
  if (!/^[a-z]+$/.test(core)) return null

  // If stripped leading/trailing portions contain digits, the token is
  // likely a code construct (e.g. board[0], abandon123) — disqualify it.
  if (/\d/.test(token.slice(0, start)) || /\d/.test(token.slice(end + 1)))
    return null

  return core
}

/**
 * Annotation tokens commonly used to label seed phrase words.
 * Treated as transparent (SKIP) in both single-line and cross-line detection.
 */
const ANNOTATION_TOKENS = new Set([
  'word',
  'words',
  'mnemonic',
  'seed',
  'phrase',
  'key',
  'backup',
  'recovery',
  'secret',
  'passphrase',
])

/**
 * Analyze a single line's tokens and return the BIP39 words found,
 * along with whether the line is "BIP39-pure" (every non-skip token is BIP39).
 */
function analyzeLine(line: string): {
  bip39Words: string[]
  isBip39Pure: boolean
} {
  const tokens = line
    .split(/\s+/)
    .filter(Boolean)
    .map((t) => t.toLowerCase())

  if (tokens.length === 0) {
    return { bip39Words: [], isBip39Pure: false }
  }

  const bip39Words: string[] = []
  let hasNonBip39Word = false
  let hasAnyWord = false

  for (const token of tokens) {
    const stripped = stripToken(token)

    if (stripped === 'skip') continue // numbering, punctuation — ignore

    // Annotation tokens (word, mnemonic, seed, etc.) — treat as transparent
    if (stripped !== null && ANNOTATION_TOKENS.has(stripped)) continue

    hasAnyWord = true
    if (stripped !== null && BIP39_WORDS.has(stripped)) {
      bip39Words.push(stripped)
    } else {
      hasNonBip39Word = true
    }
  }

  return {
    bip39Words,
    isBip39Pure: hasAnyWord && !hasNonBip39Word,
  }
}

/**
 * Detect sequences of consecutive BIP39 mnemonic words in text content.
 * Returns violations where `threshold` or more consecutive BIP39 words appear.
 *
 * Detection operates in two modes:
 * 1. **Single-line**: finds sequences of BIP39 words within a line (handles mixed content).
 * 2. **Cross-line**: accumulates words across consecutive "BIP39-pure" lines (where every
 *    non-skip token is a BIP39 word). Blank or whitespace-only lines are transparent and do
 *    not break the sequence. Catches one-per-line, numbered lists, formatted blocks, and grids.
 *
 * Tokens are stripped of surrounding punctuation (quotes, commas, brackets, etc.)
 * before matching. Interior punctuation (hyphens, apostrophes) still disqualifies a token.
 * Purely non-alphabetic tokens (like "1.", "2)", "//") are skipped without breaking a sequence.
 *
 * @param content - The text content to scan for BIP39 sequences.
 * @param threshold - Minimum number of consecutive BIP39 words to trigger a violation (default: {@link DEFAULT_THRESHOLD}).
 * @returns An array of {@link Bip39Violation} objects, one per detected sequence.
 *
 * @example
 * ```ts
 * const violations = detectBip39Sequences(
 *   'abandon ability able about above absent absorb abstract absurd abuse access accident',
 * )
 * // violations[0].matchedWords.length === 12
 * ```
 */
export function detectBip39Sequences(
  content: string,
  threshold: number = DEFAULT_THRESHOLD,
): Bip39Violation[] {
  if (!content) return []

  const violations: Bip39Violation[] = []
  const lines = content.split('\n')

  // Track which lines are already reported by single-line detection
  const reportedLines = new Set<number>()

  // ── Pass 1: Single-line detection ──────────────────────────────────
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const tokens = line
      .split(/\s+/)
      .filter(Boolean)
      .map((t) => t.toLowerCase())

    let consecutive = 0
    const matchedWords: string[] = []

    for (let j = 0; j < tokens.length; j++) {
      const stripped = stripToken(tokens[j])

      if (stripped === 'skip') continue

      // Annotation tokens — transparent, don't break or contribute to sequence
      if (stripped !== null && ANNOTATION_TOKENS.has(stripped)) continue

      if (stripped !== null && BIP39_WORDS.has(stripped)) {
        consecutive++
        matchedWords.push(stripped)
      } else {
        if (consecutive >= threshold) {
          violations.push({
            lineNumber: i + 1,
            matchedWords: matchedWords.slice(-consecutive),
            line: line,
          })
          reportedLines.add(i)
        }
        consecutive = 0
        matchedWords.length = 0
      }
    }

    if (consecutive >= threshold) {
      violations.push({
        lineNumber: i + 1,
        matchedWords: matchedWords.slice(-consecutive),
        line: line,
      })
      reportedLines.add(i)
    }
  }

  // ── Pass 2: Cross-line detection ───────────────────────────────────
  // Accumulate BIP39 words across consecutive BIP39-pure lines.
  let crossLineWords: string[] = []
  let crossLineStart = -1

  function flushCrossLine() {
    if (crossLineWords.length >= threshold) {
      violations.push({
        lineNumber: crossLineStart + 1,
        matchedWords: [...crossLineWords],
        line: lines[crossLineStart],
      })
    }
    crossLineWords = []
    crossLineStart = -1
  }

  for (let i = 0; i < lines.length; i++) {
    // Skip lines already fully reported by single-line detection
    if (reportedLines.has(i)) {
      flushCrossLine()
      continue
    }

    // Blank/whitespace-only lines are transparent — skip without flushing
    if (lines[i].trim().length === 0) continue

    const { bip39Words, isBip39Pure } = analyzeLine(lines[i])

    if (isBip39Pure && bip39Words.length > 0) {
      if (crossLineStart === -1) crossLineStart = i
      crossLineWords.push(...bip39Words)
    } else {
      flushCrossLine()
    }
  }

  // Flush any remaining cross-line accumulation
  flushCrossLine()

  return violations
}
