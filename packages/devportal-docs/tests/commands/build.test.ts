import { describe, it, expect, vi } from 'vitest';

// Mock the sub-commands so we don't need real filesystem structure
vi.mock('../../src/commands/normalize-links.js', () => ({
  run: vi.fn(),
}));
vi.mock('../../src/commands/build-sidebar.js', () => ({
  run: vi.fn(),
}));
vi.mock('../../src/commands/build-manifest.js', () => ({
  run: vi.fn(),
}));

import { run } from '../../src/commands/build.js';
import { run as normalizeLinks } from '../../src/commands/normalize-links.js';
import { run as buildSidebar } from '../../src/commands/build-sidebar.js';
import { run as buildManifest } from '../../src/commands/build-manifest.js';

describe('build', () => {
  it('calls all three sub-commands in order', async () => {
    const callOrder: string[] = [];
    vi.mocked(normalizeLinks).mockImplementation(() => {
      callOrder.push('normalize-links');
    });
    vi.mocked(buildSidebar).mockImplementation(async () => {
      callOrder.push('build-sidebar');
    });
    vi.mocked(buildManifest).mockImplementation(() => {
      callOrder.push('build-manifest');
    });

    await run([], '/tmp/docs');

    expect(callOrder).toEqual(['normalize-links', 'build-sidebar', 'build-manifest']);
  });

  it('passes args and docsDir to sub-commands', async () => {
    vi.mocked(normalizeLinks).mockImplementation(() => {});
    vi.mocked(buildSidebar).mockImplementation(async () => {});
    vi.mocked(buildManifest).mockImplementation(() => {});

    const args = ['--base', '/test'];
    await run(args, '/my/docs');

    expect(normalizeLinks).toHaveBeenCalledWith(args, '/my/docs');
    expect(buildSidebar).toHaveBeenCalledWith(args, '/my/docs');
    expect(buildManifest).toHaveBeenCalledWith(args, '/my/docs');
  });
});
