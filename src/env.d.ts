/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference path="../node_modules/@astrojs/starlight/virtual.d.ts"/>
/// <reference path="../node_modules/@astrojs/starlight/virtual-internal.d.ts"/>

interface ImportMetaEnv {
  readonly PUBLIC_D2_LAYOUT: string;
  readonly PUBLIC_D2_THEME?: string;
  readonly PUBLIC_KAPA_INTEGRATION_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.svg?raw' {
  const content: string;
  export default content;
}
