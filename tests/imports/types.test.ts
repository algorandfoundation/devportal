import { describe, it, expect } from 'vitest';
import { isArtifactVariant } from '../../imports/types.js';
import type { GithubLoaderConfig, GithubArtifactConfig } from '../../imports/types.js';

describe('isArtifactVariant', () => {
  it('should return true for GithubArtifactConfig', () => {
    const config: GithubArtifactConfig = {
      source: 'github-artifact',
      language: 'TypeScript',
      versions: [],
      owner: 'test',
      repo: 'test',
    };

    expect(isArtifactVariant(config)).toBe(true);
  });

  it('should return false for GithubLoaderConfig with explicit source', () => {
    const config: GithubLoaderConfig = {
      source: 'github-loader',
      language: 'Python',
      versions: [],
      owner: 'test',
      repo: 'test',
      ref: 'main',
      pattern: 'docs/**',
      outputDir: 'out',
    };

    expect(isArtifactVariant(config)).toBe(false);
  });

  it('should return false for GithubLoaderConfig without source field', () => {
    const config: GithubLoaderConfig = {
      language: 'Python',
      versions: [],
      owner: 'test',
      repo: 'test',
      ref: 'main',
      pattern: 'docs/**',
      outputDir: 'out',
    };

    expect(isArtifactVariant(config)).toBe(false);
  });
});
