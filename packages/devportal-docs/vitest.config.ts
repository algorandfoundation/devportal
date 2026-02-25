import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    passWithNoTests: true,
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
  },
});
