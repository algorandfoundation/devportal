import { describe, it, expectTypeOf } from 'vitest';
import type { DevportalSidebarConfig, SidebarItem } from '../src/types.js';

describe('DevportalSidebarConfig', () => {
  it('accepts a sidebar array with autogenerate entries', () => {
    const config: DevportalSidebarConfig = {
      sidebar: [{ label: 'Guides', autogenerate: { directory: 'guides' } }],
    };
    expectTypeOf(config.sidebar).toBeArray();
  });

  it('accepts optional devportalFallbacks', () => {
    const config: DevportalSidebarConfig = {
      sidebar: [],
      devportalFallbacks: [
        { label: 'API', autogenerate: { directory: 'api' } },
      ],
    };
    expectTypeOf(config.devportalFallbacks).toEqualTypeOf<
      SidebarItem[] | undefined
    >();
  });

  it('accepts link entries', () => {
    const config: DevportalSidebarConfig = {
      sidebar: [{ label: 'Home', link: '/' }],
    };
    expectTypeOf(config.sidebar[0]).toMatchTypeOf<SidebarItem>();
  });
});
