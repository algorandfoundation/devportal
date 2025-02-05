import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import d2 from 'astro-d2';
import rehypeExternalLinks from 'rehype-external-links';
import { resolve } from 'path';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLinksValidator from 'starlight-links-validator';
import markDrafts from './plugins/mark-draft-docs';
import excludeDraftDocsIntegration from './integrations/exclude-draft-docs';
import { filterSidebarItems } from './scripts/filterSidebar.js';
import { sidebarConfig } from './sidebar.config.js';

// Filter sidebar items (feature flag)
const filteredSidebar = filterSidebarItems(sidebarConfig);

export default defineConfig({
  output: 'static',
  viewTransitions: true,
  integrations: [
    starlight({
      title: 'Algorand Developer Portal',
      plugins: [
        starlightImageZoom(),
        // starlightLinksValidator({
        //   errorOnRelativeLinks: false,
        //   exclude: ['**[FUTURELINK]*', '**/reference/**'],
        // }),
      ],
      components: {
        ThemeProvider: './src/components/CustomThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      logo: {
        light: '/src/assets/images/portal-logo-light-mode.svg',
        dark: '/src/assets/images/portal-logo-dark-mode.svg',
        alt: 'Algorand Developer Portal',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/algorandfoundation/devportal',
      },
      favicon: '/favicon.png',
      customCss: ['/src/styles/global.css'],
      sidebar: filteredSidebar,
    }),
    excludeDraftDocsIntegration(), // Excludes draft docs from the build
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    // https://astro-d2.vercel.app/configuration
    d2({
      sketch: true,
      layout: 'dagre',
    }),
  ],
  markdown: {
    remarkPlugins: [markDrafts],
    // Rehype plugin that adds target="_blank" and rel="noopener noreferrer" to external links
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: 'noopener noreferrer' }]],
  },
  vite: {
    resolve: {
      alias: {
        '@assets': resolve('./src/assets'),
        '@images': resolve('./src/assets/images'),
      },
    },
  },
});
