import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import d2 from 'astro-d2';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Algorand Developer Portal',
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
              collapsed: true,
              items: [
                {
                  label: 'What is AlgoKit?',
                  link: '/build/algokit/overview',
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
                  label: 'Utils',
                  collapsed: true,
                  items: [
                    {
                      label: 'Python',
                      autogenerate: {
                        directory: 'build/algokit/utils/python',
                      },
                    },
                    {
                      label: 'Typescript',
                      autogenerate: {
                        directory: 'build/algokit/utils/ts',
                      },
                    },
                  ],
                },
              ],
            },
            {
              label: 'Accounts',
              collapsed: true,
              autogenerate: {
                directory: 'build/accounts',
              },
            },
            {
              label: 'Assets',
              collapsed: true,
              autogenerate: {
                directory: 'build/assets',
              },
            },
            {
              label: 'Transactions',
              collapsed: true,
              autogenerate: {
                directory: 'build/transactions',
              },
            },
            {
              label: 'Smart Contracts',
              collapsed: true,
              autogenerate: {
                directory: 'build/smart_contracts',
              },
            },
          ],
        },
        {
          label: 'Protocol',
          collapsed: true,
          badge: {
            text: 'todo',
            variant: 'danger',
          },
          items: [
            {
              label: 'Consensus',
              badge: {
                text: 'todo',
                variant: 'danger',
              },
              autogenerate: {
                directory: 'protocol/consensus',
              },
            },
            {
              label: 'Node',
              badge: {
                text: 'todo',
                variant: 'danger',
              },
              autogenerate: {
                directory: 'protocol/node',
              },
            },
            {
              label: 'APIs',
              badge: {
                text: 'todo',
                variant: 'danger',
              },
              autogenerate: {
                directory: 'protocol/api',
              },
            },
            {
              label: 'State Proofs',
              badge: {
                text: 'todo',
                variant: 'danger',
              },
              autogenerate: {
                directory: 'protocol/state-proofs',
              },
            },
            {
              label: 'Features',
              badge: {
                text: 'todo',
                variant: 'danger',
              },
              autogenerate: {
                directory: 'protocol/features',
              },
            },
            {
              label: 'AVM',
              badge: {
                text: 'todo',
                variant: 'danger',
              },
              autogenerate: {
                directory: 'protocol/avm',
              },
            },
          ],
        },
        {
          label: 'Reference',
          collapsed: true,
          badge: {
            text: 'todo',
            variant: 'danger',
          },
          autogenerate: {
            directory: 'reference',
          },
        },
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
    // Rehype plugin to add target="_blank" and rel="noopener noreferrer" to external links
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: 'noopener noreferrer' }]],
  },
});
