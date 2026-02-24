// tests/components/remote-markdown.test.ts
import { describe, it, expect } from 'vitest';
import { extractSection } from '../../src/components/RemoteMarkdown.js';

describe('extractSection', () => {
  const markdown = [
    '# Top Level',
    'Top content',
    '## Section A',
    'A content line 1',
    'A content line 2',
    '## Section B',
    'B content',
    '### Subsection B1',
    'B1 content',
    '## Section C',
    'C content',
  ].join('\n');

  it('should extract section by H2 heading', () => {
    const result = extractSection(markdown, 'Section A');

    expect(result).toContain('A content line 1');
    expect(result).toContain('A content line 2');
    expect(result).not.toContain('B content');
  });

  it('should extract section including nested subheadings', () => {
    const result = extractSection(markdown, 'Section B');

    expect(result).toContain('B content');
    expect(result).toContain('### Subsection B1');
    expect(result).toContain('B1 content');
    expect(result).not.toContain('C content');
  });

  it('should extract H1 section including all nested headings', () => {
    const result = extractSection(markdown, 'Top Level');

    expect(result).toContain('Top content');
    // H2s are nested under H1, so they are included
    expect(result).toContain('A content line 1');
    expect(result).toContain('B content');
    expect(result).toContain('C content');
  });

  it('should return null when section is not found', () => {
    expect(extractSection(markdown, 'Nonexistent')).toBeNull();
  });

  it('should extract last section (no next heading)', () => {
    const result = extractSection(markdown, 'Section C');

    expect(result).toContain('C content');
  });

  it('should handle empty content', () => {
    expect(extractSection('', 'Anything')).toBeNull();
  });
});
