import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const COMPOSITE_ACTION = 'algorandfoundation/devportal/.github/actions/publish-devportal-docs';
const DEFAULT_SCRIPT = 'astro build && devportal-docs build';
const THEME_IMPORT = '@algorandfoundation/devportal-docs/theme';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function findRepoRoot(startDir: string): string | null {
  let dir = startDir;
  while (true) {
    if (existsSync(join(dir, '.git'))) return dir;
    const parent = dirname(dir);
    if (parent === dir) return null;
    dir = parent;
  }
}

// ---------------------------------------------------------------------------
// Check: docs:devportal script
// ---------------------------------------------------------------------------

export interface ScriptCheckResult {
  status: 'ok' | 'added' | 'warn' | 'error';
  message: string;
}

export function checkDocScript(docsDir: string, dryRun: boolean): ScriptCheckResult {
  const pkgPath = join(docsDir, 'package.json');
  if (!existsSync(pkgPath)) {
    return { status: 'error', message: 'No package.json found in docs directory' };
  }

  let pkg: Record<string, unknown>;
  try {
    pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
  } catch (err) {
    return { status: 'error', message: `Failed to read package.json: ${(err as Error).message}` };
  }
  const scripts = (pkg.scripts ?? {}) as Record<string, string>;
  const existing = scripts['docs:devportal'];

  if (existing === DEFAULT_SCRIPT) {
    return { status: 'ok', message: 'docs:devportal script is correct' };
  }

  if (existing && !existing.endsWith('devportal-docs build')) {
    return {
      status: 'warn',
      message: `docs:devportal script exists but does not end with "devportal-docs build": "${existing}"`,
    };
  }

  if (existing && existing.endsWith('devportal-docs build')) {
    return { status: 'ok', message: 'docs:devportal script is correct (custom prefix)' };
  }

  // Script missing — add it
  if (!dryRun) {
    scripts['docs:devportal'] = DEFAULT_SCRIPT;
    pkg.scripts = scripts;
    writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  }

  return {
    status: 'added',
    message: dryRun
      ? `Would add docs:devportal script: "${DEFAULT_SCRIPT}"`
      : `Added docs:devportal script: "${DEFAULT_SCRIPT}"`,
  };
}

// ---------------------------------------------------------------------------
// Check: workflow references composite action
// ---------------------------------------------------------------------------

export interface WorkflowCheckResult {
  actionFound: boolean;
  permissionsFound: boolean;
  workflowFile: string | null;
}

export function checkWorkflow(repoRoot: string): WorkflowCheckResult {
  const workflowDir = join(repoRoot, '.github', 'workflows');
  if (!existsSync(workflowDir)) {
    return { actionFound: false, permissionsFound: false, workflowFile: null };
  }

  const files = readdirSync(workflowDir).filter(
    (f) => f.endsWith('.yml') || f.endsWith('.yaml'),
  );

  for (const file of files) {
    const content = readFileSync(join(workflowDir, file), 'utf-8');
    if (content.includes(COMPOSITE_ACTION)) {
      return {
        actionFound: true,
        permissionsFound: content.includes('contents: write'),
        workflowFile: file,
      };
    }
  }

  return { actionFound: false, permissionsFound: false, workflowFile: null };
}

// ---------------------------------------------------------------------------
// Check: Tailwind CSS v4
// ---------------------------------------------------------------------------

export interface TailwindCheckResult {
  status: 'ok' | 'warn' | 'error';
  message: string;
}

export function checkTailwind(docsDir: string): TailwindCheckResult {
  const pkgPath = join(docsDir, 'package.json');
  if (!existsSync(pkgPath)) {
    return { status: 'error', message: 'No package.json found — cannot check Tailwind' };
  }

  let pkg: Record<string, unknown>;
  try {
    pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
  } catch {
    return { status: 'error', message: 'Failed to parse package.json — cannot check Tailwind' };
  }
  const deps = (pkg.dependencies ?? {}) as Record<string, string>;
  const devDeps = (pkg.devDependencies ?? {}) as Record<string, string>;
  const allDeps = { ...deps, ...devDeps };
  const twRange = allDeps['tailwindcss'];

  if (!twRange) {
    return { status: 'error', message: 'tailwindcss not found in dependencies — install tailwindcss v4+' };
  }

  // Extract the first numeric version from the range (e.g. "^4.2.1" → 4, "~3.4.0" → 3)
  const majorMatch = twRange.match(/(\d+)/);
  if (!majorMatch) {
    return { status: 'warn', message: `tailwindcss found but could not parse version range: "${twRange}"` };
  }

  const major = parseInt(majorMatch[1], 10);
  if (major < 4) {
    return { status: 'error', message: `tailwindcss v${major}.x found — theme requires v4+` };
  }

  return { status: 'ok', message: `tailwindcss v4 found (${twRange})` };
}

// ---------------------------------------------------------------------------
// Scaffold: theme CSS in astro.config.mjs
// ---------------------------------------------------------------------------

export interface ThemeCheckResult {
  status: 'ok' | 'added' | 'error';
  message: string;
}

const THEME_IMPORT_LINE = `import { css, fonts } from '${THEME_IMPORT}';`;

export function ensureThemeInConfig(docsDir: string, dryRun: boolean): ThemeCheckResult {
  const configPath = join(docsDir, 'astro.config.mjs');
  if (!existsSync(configPath)) {
    return { status: 'error', message: 'No astro.config.mjs found' };
  }

  let content = readFileSync(configPath, 'utf-8');

  // Already present
  if (content.includes(THEME_IMPORT)) {
    return { status: 'ok', message: 'Theme CSS already referenced in astro.config.mjs' };
  }

  if (dryRun) {
    return { status: 'added', message: 'Would add theme CSS import and customCss entries to astro.config.mjs' };
  }

  // 1. Add import statement after the last existing import
  const lines = content.split('\n');
  let lastImportIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^import\s/.test(lines[i])) lastImportIndex = i;
  }
  if (lastImportIndex >= 0) {
    lines.splice(lastImportIndex + 1, 0, THEME_IMPORT_LINE);
  } else {
    lines.unshift(THEME_IMPORT_LINE);
  }
  content = lines.join('\n');

  // 2. Add css, fonts to customCss array
  content = content.replace(
    /customCss:\s*\[/,
    'customCss: [\n        css,\n        fonts,',
  );

  writeFileSync(configPath, content);
  return { status: 'added', message: 'Added theme CSS import and customCss entries to astro.config.mjs' };
}

// ---------------------------------------------------------------------------
// Command entry point
// ---------------------------------------------------------------------------

export function run(args: string[], docsDir: string): void {
  const dryRun = args.includes('--dry-run');

  // Verify we're in a Starlight docs directory
  if (!existsSync(join(docsDir, 'astro.config.mjs'))) {
    console.error('Error: No astro.config.mjs found. Run this from your library\'s docs/ directory.');
    process.exit(1);
  }

  const repoRoot = findRepoRoot(docsDir);
  if (!repoRoot) {
    console.error('Error: Could not find .git directory. Are you in a git repository?');
    process.exit(1);
  }

  console.log(dryRun ? '=== devportal-docs init (dry run) ===\n' : '=== devportal-docs init ===\n');

  // 1. Check docs:devportal script
  const scriptResult = checkDocScript(docsDir, dryRun);
  const scriptIcon =
    scriptResult.status === 'ok' || scriptResult.status === 'added' ? '\u2713' : '\u26A0';
  console.log(`${scriptIcon} ${scriptResult.message}`);

  // 2. Check workflow
  const workflowResult = checkWorkflow(repoRoot);
  if (workflowResult.actionFound) {
    console.log(`\u2713 Composite action found in .github/workflows/${workflowResult.workflowFile}`);
    if (workflowResult.permissionsFound) {
      console.log('\u2713 permissions.contents: write present');
    } else {
      console.log('\u26A0 permissions.contents: write not found in workflow \u2014 add it for release publishing');
    }
  } else {
    console.log('\u2717 No workflow references the devportal composite action');
    console.log('  Add: uses: algorandfoundation/devportal/.github/actions/publish-devportal-docs@main');
  }

  // 3. Check Tailwind v4
  const twResult = checkTailwind(docsDir);
  const twIcon = twResult.status === 'ok' ? '\u2713' : twResult.status === 'warn' ? '\u26A0' : '\u2717';
  console.log(`${twIcon} ${twResult.message}`);

  // 4. Ensure theme CSS
  const themeResult = ensureThemeInConfig(docsDir, dryRun);
  const themeIcon = themeResult.status === 'ok' || themeResult.status === 'added' ? '\u2713' : '\u26A0';
  console.log(`${themeIcon} ${themeResult.message}`);

  // Exit code
  const failed = !workflowResult.actionFound || scriptResult.status === 'error' || twResult.status === 'error';
  if (failed) {
    process.exit(1);
  }
}
