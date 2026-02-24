import type { TransformContext } from '@larkiny/astro-github-loader';

/**
 * Minimal mock for @larkiny/astro-github-loader's TransformContext.
 * Only includes fields actually read by devportal transforms.
 */
export function makeContext(overrides: {
  path?: string;
  owner?: string;
  repo?: string;
  ref?: string;
} = {}): TransformContext {
  const path = overrides.path ?? 'docs/example.md';
  return {
    id: path,
    path,
    options: {
      owner: overrides.owner ?? 'test-owner',
      repo: overrides.repo ?? 'test-repo',
      ref: overrides.ref ?? 'main',
    },
  } as TransformContext;
}
