// tests/components/remote-code.test.ts
import { describe, it, expect } from 'vitest';
import { dedentCode, convertRawToGitHubUrl } from '../../src/components/RemoteCode.js';

// ─── dedentCode ──────────────────────────────────────────────────────

describe('dedentCode', () => {
  it('should remove uniform indentation', () => {
    const lines = ['    line1', '    line2', '    line3'];

    expect(dedentCode(lines)).toBe('line1\nline2\nline3');
  });

  it('should handle mixed indentation levels', () => {
    const lines = ['    outer', '        inner', '    outer'];

    expect(dedentCode(lines)).toBe('outer\n    inner\nouter');
  });

  it('should return empty string for empty array', () => {
    expect(dedentCode([])).toBe('');
  });

  it('should preserve empty lines', () => {
    const lines = ['    a', '', '    b'];

    const result = dedentCode(lines);

    expect(result).toBe('a\n\nb');
  });

  it('should return as-is when no indentation', () => {
    const lines = ['no indent', 'at all'];

    expect(dedentCode(lines)).toBe('no indent\nat all');
  });

  it('should handle single line', () => {
    expect(dedentCode(['  single'])).toBe('single');
  });
});

// ─── convertRawToGitHubUrl ───────────────────────────────────────────

describe('convertRawToGitHubUrl', () => {
  it('should convert raw.githubusercontent.com URL to GitHub blob URL', () => {
    const raw = 'https://raw.githubusercontent.com/algorand/js-algorand-sdk/main/src/client.ts';

    const result = convertRawToGitHubUrl(raw);

    expect(result.toString()).toBe(
      'https://github.com/algorand/js-algorand-sdk/blob/main/src/client.ts',
    );
  });

  it('should handle branch names with dots', () => {
    const raw = 'https://raw.githubusercontent.com/org/repo/v1.0.0/file.ts';

    const result = convertRawToGitHubUrl(raw);

    expect(result.toString()).toBe(
      'https://github.com/org/repo/blob/v1.0.0/file.ts',
    );
  });

  it('should throw for non-raw.githubusercontent.com URLs', () => {
    expect(() => convertRawToGitHubUrl('https://github.com/org/repo')).toThrow(
      'Not a valid raw.githubusercontent.com URL',
    );
  });

  it('should throw for URLs with insufficient path segments', () => {
    expect(() =>
      convertRawToGitHubUrl('https://raw.githubusercontent.com/org'),
    ).toThrow('URL does not contain the required components');
  });
});
