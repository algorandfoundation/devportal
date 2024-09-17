import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from "eslint-config-prettier";
export default [
  {
    ignores: ["examples/*", "dist/*", ".astro", "src/env.d.ts", "src/global.d.ts"],
  },
  eslintConfigPrettier,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,



  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn"
    }
  }
];