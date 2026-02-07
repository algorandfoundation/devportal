import { readFileSync } from 'fs'
import { join } from 'path'

const IGNORE_FILE = '.nomonicignore'

/**
 * Read ignore patterns from the `.nomonicignore` file in the given directory.
 *
 * Returns an empty array if the file does not exist. Lines starting with `#`
 * are treated as comments and stripped, and blank lines are discarded.
 *
 * @param cwd - Working directory to look for `.nomonicignore` (defaults to `process.cwd()`).
 * @returns An array of glob pattern strings.
 */
export function loadIgnorePatterns(cwd: string = process.cwd()): string[] {
  try {
    const content = readFileSync(join(cwd, IGNORE_FILE), 'utf-8')
    return content
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith('#'))
  } catch {
    return []
  }
}

/**
 * Compile a `.nomonicignore` glob pattern into a regular expression.
 *
 * Supported glob syntax:
 * - `*` matches any characters except `/`
 * - `**` matches zero or more directories
 * - `?` matches a single character except `/`
 * - Leading `/` anchors the pattern to the repository root
 * - Trailing `/` matches a directory and everything inside it
 *
 * @param pattern - A glob pattern string (e.g. `"drizzle/**"`).
 * @returns A compiled {@link RegExp} that can be passed to {@link isIgnored}.
 *
 * @example
 * ```ts
 * const re = compilePattern('drizzle/**')
 * re.test('drizzle/migrations/001.sql') // true
 * ```
 */
export function compilePattern(pattern: string): RegExp {
  let anchored = false
  let p = pattern

  if (p.startsWith('/')) {
    anchored = true
    p = p.slice(1)
  }

  if (p.endsWith('/')) {
    p = p + '**'
  }

  // Build regex character by character, handling glob tokens
  let regex = ''
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '*' && p[i + 1] === '*') {
      if (p[i + 2] === '/') {
        // **/ = zero or more directories
        regex += '(?:.+/)?'
        i += 2 // skip **/
      } else {
        // ** at end or mid = match everything
        regex += '.*'
        i += 1 // skip **
      }
    } else if (p[i] === '*') {
      regex += '[^/]*'
    } else if (p[i] === '?') {
      regex += '[^/]'
    } else if ('.+^${}()|[]\\'.includes(p[i])) {
      regex += '\\' + p[i]
    } else {
      regex += p[i]
    }
  }

  if (anchored) {
    return new RegExp('^' + regex + '$')
  }
  return new RegExp('(?:^|/)' + regex + '$')
}

/**
 * Test whether a file path matches any of the compiled ignore patterns.
 *
 * A leading `./` prefix is automatically stripped before matching.
 *
 * @param filePath - The relative file path to test.
 * @param patterns - Compiled patterns from {@link compilePattern}.
 * @returns `true` if the path matches at least one pattern.
 */
export function isIgnored(filePath: string, patterns: RegExp[]): boolean {
  const normalized = filePath.startsWith('./') ? filePath.slice(2) : filePath
  for (const pat of patterns) {
    if (pat.test(normalized)) return true
  }
  return false
}
