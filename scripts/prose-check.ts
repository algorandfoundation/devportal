#!/usr/bin/env tsx

import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';
import OpenAI from 'openai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: '.env.local', quiet: true });
config({ quiet: true });

// ── ANSI helpers ──────────────────────────────────────────
const esc = (code: string) => `\x1b[${code}m`;
const c = {
  reset: esc('0'),
  bold: esc('1'),
  dim: esc('2'),
  red: esc('31'),
  green: esc('32'),
  yellow: esc('33'),
  cyan: esc('36'),
  white: esc('37'),
  bgRed: esc('41'),
  bgGreen: esc('42'),
  redBright: esc('91'),
  greenBright: esc('92'),
  yellowBright: esc('93'),
};

// ── Spinner ───────────────────────────────────────────────
const SPINNER_FRAMES = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

class Spinner {
  private frameIndex = 0;
  private interval: ReturnType<typeof setInterval> | null = null;
  private message = '';

  start(message: string) {
    this.message = message;
    this.frameIndex = 0;
    process.stdout.write(`\n  ${c.cyan}${SPINNER_FRAMES[0]}${c.reset} ${c.dim}${message}${c.reset}`);
    this.interval = setInterval(() => {
      this.frameIndex = (this.frameIndex + 1) % SPINNER_FRAMES.length;
      process.stdout.write(`\r  ${c.cyan}${SPINNER_FRAMES[this.frameIndex]}${c.reset} ${c.dim}${this.message}${c.reset}`);
    }, 80);
  }

  stop(success = true) {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    const icon = success ? `${c.green}✓${c.reset}` : `${c.yellow}⚠${c.reset}`;
    process.stdout.write(`\r  ${icon} ${c.dim}${this.message}${c.reset}\n`);
  }

  clear() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    // Clear the line completely
    process.stdout.write(`\r${' '.repeat(80)}\r`);
  }
}

// ── Box drawing ───────────────────────────────────────────
const BOX_WIDTH = 72;
const line = (ch: string = '─') => ch.repeat(BOX_WIDTH);

function header() {
  console.log('');
  console.log(`${c.cyan}${c.bold}  ┌${line()}┐${c.reset}`);
  console.log(`${c.cyan}${c.bold}  │${' '.repeat(14)}Checking grammar and writing style...${' '.repeat(21)}│${c.reset}`);
  console.log(`${c.cyan}${c.bold}  └${line()}┘${c.reset}`);
}

function fileHeader(filePath: string, issueCount: number) {
  const badge = `${c.bgRed}${c.white}${c.bold} ${issueCount} issue${issueCount !== 1 ? 's' : ''} ${c.reset}`;
  console.log('');
  console.log(`  ${c.cyan}${c.bold}${filePath}${c.reset}  ${badge}`);
  console.log(`  ${c.dim}${line()}${c.reset}`);
}

function issueCard(issue: ProseIssue, index: number, total: number) {
  const lineLabel = `${c.yellowBright}${c.bold}Line ${issue.line}${c.reset}`;
  const counter = `${c.dim}[${index + 1}/${total}]${c.reset}`;

  console.log('');
  console.log(`  ${lineLabel}  ${counter}`);
  console.log(`  ${c.white}${issue.reason}${c.reset}`);
  console.log('');
  console.log(`  ${c.red}${c.bold}  - ${c.reset}${c.red}${issue.text}${c.reset}`);
  console.log(`  ${c.green}${c.bold}  + ${c.reset}${c.green}${issue.suggestion}${c.reset}`);
}

function fileDivider() {
  console.log('');
  console.log(`  ${c.dim}${line()}${c.reset}`);
}

function summary(totalIssues: number, totalFiles: number, filesWithIssues: number, mode: string) {
  const isFail = mode === 'fail';
  const statusColor = isFail ? c.red : c.yellow;
  const statusIcon = isFail ? '✖' : '⚠';
  const modeLabel = isFail ? 'fail — commit blocked' : 'warn — commit will proceed';

  console.log('');
  console.log(`  ${c.dim}${'═'.repeat(BOX_WIDTH)}${c.reset}`);
  console.log('');
  console.log(`  ${statusColor}${c.bold}${statusIcon} ${totalIssues} issue${totalIssues !== 1 ? 's' : ''} found${c.reset}  ${c.dim}in ${filesWithIssues} of ${totalFiles} file${totalFiles !== 1 ? 's' : ''}${c.reset}`);
  console.log(`  ${c.dim}Mode: ${modeLabel}${c.reset}`);
  console.log('');
}

function passedSummary(totalFiles: number) {
  console.log('');
  console.log(`  ${c.dim}${'═'.repeat(BOX_WIDTH)}${c.reset}`);
  console.log('');
  console.log(`  ${c.green}${c.bold}✔ No issues found${c.reset}  ${c.dim}${totalFiles} file${totalFiles !== 1 ? 's' : ''} checked${c.reset}`);
  console.log('');
}

// ── Prompt & types ────────────────────────────────────────
const PROMPT_PATH = join(__dirname, 'prose-review-instructions.md');
const SYSTEM_PROMPT = readFileSync(PROMPT_PATH, 'utf-8');

interface ProseIssue {
  line: number;
  text: string;
  suggestion: string;
  reason: string;
}

interface ProseResponse {
  issues: ProseIssue[];
}

// ── Main logic ────────────────────────────────────────────
const enabled = (process.env.PROSE_CHECK_ENABLED ?? 'true').toLowerCase() !== 'false';
if (!enabled) {
  process.exit(0);
}

const apiKey = process.env.OPENAI_API_KEY;
const mode = (process.env.PROSE_CHECK_MODE ?? 'warn').toLowerCase();
const model = process.env.PROSE_CHECK_MODEL ?? 'gpt-4o-mini';
const sensitivity = (process.env.PROSE_CHECK_SENSITIVITY ?? 'medium').toLowerCase();
const excludePaths = (process.env.PROSE_CHECK_EXCLUDE ?? '')
  .split(',')
  .map((p) => p.trim())
  .filter(Boolean);

// Filter out excluded paths
const allFiles = process.argv.slice(2);
const files = allFiles.filter((file) => !excludePaths.some((exclude) => file.includes(exclude)));

// Map sensitivity to temperature (lower temp = more deterministic/strict)
// Some models (o1, o3, gpt-5) don't support custom temperature
const temperatureMap: Record<string, number> = {
  low: 0.1,    // Only flag obvious issues
  medium: 0.2, // Balanced
  high: 0.3,   // Catch more subtle issues
};
const temperature = temperatureMap[sensitivity] ?? 0.2;
const modelsWithoutTemperature = ['o1', 'o1-mini', 'o1-preview', 'o3', 'o3-mini', 'gpt-5', 'gpt-5-mini'];
const supportsTemperature = !modelsWithoutTemperature.some((m) => model.startsWith(m));

// Sensitivity instruction appended to prompt
const sensitivityInstructions: Record<string, string> = {
  low: '\n\nBe conservative — only flag clear, unambiguous errors. Skip anything that could be considered a style preference or minor issue.',
  medium: '',
  high: '\n\nBe thorough — flag subtle issues like awkward phrasing, redundant words, and unclear antecedents in addition to obvious errors.',
};
const sensitivitySuffix = sensitivityInstructions[sensitivity] ?? '';

if (files.length === 0) {
  process.exit(0);
}

if (!apiKey) {
  console.warn(`\n  ${c.yellow}⚠ OPENAI_API_KEY not set in .env.local — skipping prose check${c.reset}\n`);
  process.exit(0);
}

const client = new OpenAI({ apiKey });

async function checkFile(filePath: string): Promise<ProseIssue[]> {
  const content = readFileSync(filePath, 'utf-8');

  if (content.trim().length < 50) {
    return [];
  }

  const numberedContent = content
    .split('\n')
    .map((line, i) => `${i + 1}: ${line}`)
    .join('\n');

  const response = await client.chat.completions.create({
    model,
    ...(supportsTemperature && { temperature }),
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: SYSTEM_PROMPT + sensitivitySuffix },
      { role: 'user', content: numberedContent },
    ],
  });

  const text = response.choices[0]?.message?.content;
  if (!text) return [];

  try {
    const parsed: ProseResponse = JSON.parse(text);
    return parsed.issues ?? [];
  } catch {
    return [];
  }
}

async function main() {
  header();

  const spinner = new Spinner();
  let totalIssues = 0;
  let filesWithIssues = 0;
  const fileResults: { file: string; issues: ProseIssue[] }[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const shortName = file.replace('src/content/docs/', '');
    spinner.start(`Checking ${shortName} (${i + 1}/${files.length})`);

    try {
      const issues = await checkFile(file);
      if (issues.length > 0) {
        spinner.stop(false);
        totalIssues += issues.length;
        filesWithIssues++;
        fileResults.push({ file, issues });
      } else {
        spinner.stop(true);
      }
    } catch (error) {
      spinner.stop(false);
      const msg = error instanceof Error ? error.message : String(error);
      console.log(`  ${c.yellow}⚠ ${msg}${c.reset}`);
    }
  }

  // Display all issues after all files are processed
  for (const { file, issues } of fileResults) {
    fileHeader(file, issues.length);
    issues.forEach((issue, i) => issueCard(issue, i, issues.length));
    fileDivider();
  }

  if (totalIssues > 0) {
    summary(totalIssues, files.length, filesWithIssues, mode);
    if (mode === 'fail') {
      process.exit(1);
    }
  } else {
    passedSummary(files.length);
  }
}

main();
