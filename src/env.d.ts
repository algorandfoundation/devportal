/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference path="../node_modules/@astrojs/starlight/virtual.d.ts"/>

interface ImportMetaEnv {
  readonly TSTRUCT_TOKEN: string;
  readonly PUBLIC_D2_LAYOUT: string;
  readonly PUBLIC_D2_THEME?: string;
  readonly PUBLIC_KAPA_INTEGRATION_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
