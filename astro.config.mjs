import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import d2 from 'astro-d2';
import rehypeExternalLinks from 'rehype-external-links';
import { resolve } from 'path';
import starlightImageZoom from 'starlight-image-zoom';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Algorand Developer Portal',
      plugins: [starlightImageZoom()],
      components: {
        ThemeProvider: './src/components/CustomThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        Header: './src/components/Header.astro',
      },
      logo: {
        light: '/src/assets/images/portal-logo-light-mode.svg',
        dark: '/src/assets/images/portal-logo-dark-mode.svg',
        alt: 'Algorand Developer Portal',
        replacesTitle: true,
      },
      favicon: '/favicon.png',
      customCss: ['/src/styles/global.css'],
      sidebar: [
        {
          label: 'Build',
          items: [
            {
              label: 'AlgoKit',
              items: [
                {
                  label: 'What is AlgoKit?',
                  link: '/build/algokit/what-is-algokit',
                },
                {
                  label: 'Getting Started',
                  link: '/build/algokit/getting-started',
                },
                {
                  label: 'Project Structure',
                  link: '/build/algokit/project-structure',
                },
                {
                  label: 'AlgoKit Templates',
                  link: '/build/algokit/algokit-templates',
                },
                {
                  label: 'CLI',
                  items: [
                    {
                      label: 'Overview',
                      link: '/build/algokit/cli/overview',
                    },
                    {
                      label: 'Features',
                      collapsed: true,
                      autogenerate: {
                        directory: 'build/algokit/cli/features',
                      },
                    },
                  ],
                },
                {
                  label: 'Utils',
                  items: [
                    {
                      label: 'AlgoKit Utils Clients',
                      link: 'build/algokit/utils/algokit-utils-clients',
                    },
                    {
                      label: 'Python',
                      collapsed: true,
                      autogenerate: {
                        directory: 'build/algokit/utils/python',
                      },
                    },
                    {
                      label: 'Typescript',
                      collapsed: true,
                      autogenerate: {
                        directory: 'build/algokit/utils/ts',
                      },
                    },
                  ],
                },
              ],
            },
            // {
            //   label: 'Accounts',
            //   collapsed: true,
            //   autogenerate: {
            //     directory: 'build/accounts',
            //   },
            // },
            // {
            //   label: 'Assets',
            //   collapsed: true,
            //   autogenerate: {
            //     directory: 'build/assets',
            //   },
            // },
            // {
            //   label: 'Transactions',
            //   collapsed: true,
            //   autogenerate: {
            //     directory: 'build/transactions',
            //   },
            // },
            {
              label: 'Smart Contracts',
              collapsed: true,
              autogenerate: {
                directory: 'build/smart_contracts',
              },
            },
          ],
        },
        // {
        //   label: 'Protocol',
        //   collapsed: true,
        //   badge: {
        //     text: 'todo',
        //     variant: 'danger',
        //   },
        //   items: [
        //     {
        //       label: 'Consensus',
        //       badge: {
        //         text: 'todo',
        //         variant: 'danger',
        //       },
        //       autogenerate: {
        //         directory: 'protocol/consensus',
        //       },
        //     },
        //     {
        //       label: 'Node',
        //       badge: {
        //         text: 'todo',
        //         variant: 'danger',
        //       },
        //       autogenerate: {
        //         directory: 'protocol/node',
        //       },
        //     },
        //     {
        //       label: 'APIs',
        //       badge: {
        //         text: 'todo',
        //         variant: 'danger',
        //       },
        //       autogenerate: {
        //         directory: 'protocol/api',
        //       },
        //     },
        //     {
        //       label: 'State Proofs',
        //       badge: {
        //         text: 'todo',
        //         variant: 'danger',
        //       },
        //       autogenerate: {
        //         directory: 'protocol/state-proofs',
        //       },
        //     },
        //     {
        //       label: 'Features',
        //       badge: {
        //         text: 'todo',
        //         variant: 'danger',
        //       },
        //       autogenerate: {
        //         directory: 'protocol/features',
        //       },
        //     },
        //     {
        //       label: 'AVM',
        //       badge: {
        //         text: 'todo',
        //         variant: 'danger',
        //       },
        //       autogenerate: {
        //         directory: 'protocol/avm',
        //       },
        //     },
        //   ],
        // },
        // {
        //   label: 'Reference',
        //   collapsed: true,
        //   badge: {
        //     text: 'todo',
        //     variant: 'danger',
        //   },
        //   autogenerate: {
        //     directory: 'reference',
        //   },
        // },
        {
          label: 'Node Running',
          collapsed: true,
          badge: {
            text: 'todo',
            variant: 'danger',
          },
          autogenerate: {
            directory: 'node_running',
          },
        },
        {
          label: 'Standards and Practices',
          collapsed: true,
          badge: {
            text: 'todo',
            variant: 'danger',
          },
          items: [
            {
              label: 'ARCs',
              collapsed: true,
              autogenerate: {
                directory: 'standards/arcs',
              },
            },
          ],
        },
      ],
    }),
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
