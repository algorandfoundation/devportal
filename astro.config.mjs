import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import d2 from 'astro-d2';
import rehypeExternalLinks from 'rehype-external-links';
import { resolve } from 'path';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
  output: 'static',
  viewTransitions: true,
  integrations: [
    starlight({
      title: 'Algorand Developer Portal',
      plugins: [
        starlightImageZoom(),
        starlightLinksValidator({
          errorOnRelativeLinks: false,
          exclude: ['**[FUTURELINK]*', '**/reference/**'],
        }),
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
      sidebar: [
        {
          label: 'Getting Started',
          collapsed: false,
          items: [
            {
              label: 'Blockchain 101',
              link: 'concepts/blockchain-101',
              badge: 'Owner',
            },
            {
              label: 'Why Algorand?',
              link: 'concepts/why-algorand',
            },
            {
              label: 'Intro To AlgoKit',
              link: 'concepts/algokit-intro',
            },
          ],
        },
        {
          label: 'Concepts',
          collapsed: false,
          items: [
            {
              label: 'Accounts',
              collapsed: false,
              items: [
                {
                  label: 'Overview',
                  link: 'concepts/accounts/overview',
                },
                {
                  label: 'Creating Accounts',
                  link: 'concepts/accounts/create',
                },
                {
                  label: 'Funding Accounts',
                  link: 'concepts/accounts/funding',
                },
                {
                  label: 'Keys & Signing',
                  link: 'concepts/accounts/keys-signing',
                },
                {
                  label: 'Rekeying Accounts',
                  link: 'concepts/accounts/rekeying',
                },
                {
                  label: 'Multisignature Accounts',
                  link: 'concepts/accounts/multisig',
                },
              ],
            },
            {
              label: 'Transactions',
              collapsed: false,
              items: [
                {
                  label: 'Overview',
                  link: 'concepts/transactions/overview',
                },
                {
                  label: 'Transaction Types',
                  link: 'concepts/transactions/types',
                },
                {
                  label: 'Atomic Transaction Groups',
                  link: 'concepts/transactions/atomic-txn-groups',
                },
                {
                  label: 'Signing Transactions',
                  link: 'concepts/transactions/signing',
                },
                {
                  label: 'Blocks',
                  link: 'concepts/transactions/blocks',
                },
                {
                  label: 'Leases',
                  link: 'concepts/transactions/leases',
                },
                {
                  label: 'URI Scheme',
                  link: 'concepts/transactions/uri-scheme',
                },
              ],
            },
            {
              label: 'Assets',
              collapsed: false,
              items: [
                {
                  label: 'Overview',
                  link: 'concepts/assets/overview',
                },
                {
                  label: 'Creating Assets',
                  link: 'concepts/assets/create',
                },
                {
                  label: 'Opting In & Out',
                  link: 'concepts/assets/opt-in-out',
                },
                {
                  label: 'Updating Assets',
                  link: 'concepts/assets/update',
                },
                {
                  label: 'Transferring Assets',
                  link: 'concepts/assets/transfer',
                },
                {
                  label: 'Deleting Assets',
                  link: 'concepts/assets/delete',
                },
                {
                  label: 'Clawing Back Assets',
                  link: 'concepts/assets/clawback',
                },
                {
                  label: 'Freezing Assets',
                  link: 'concepts/assets/freeze',
                },
                {
                  label: 'Known Assets',
                  link: 'concepts/assets/known-assets',
                },
              ],
            },
            {
              label: 'Smart Contracts',
              collapsed: false,
              items: [
                {
                  label: 'Overview',
                  link: 'concepts/smart-contracts/overview',
                },
                {
                  label: 'Languages',
                  items: [
                    {
                      label: 'Python',
                      link: 'concepts/smart-contracts/languages/python',
                    },
                    {
                      label: 'Typescript',
                      link: 'concepts/smart-contracts/languages/typescript',
                    },
                    {
                      label: 'TEAL',
                      link: 'concepts/smart-contracts/languages/teal',
                    },
                  ],
                },
                {
                  label: 'Applications',
                  link: 'concepts/smart-contracts/apps',
                },
                {
                  label: 'ABI',
                  link: 'concepts/smart-contracts/abi',
                },
                {
                  label: 'Control Flow',
                  link: 'concepts/smart-contracts/control-flow',
                },
                {
                  label: 'Resource Usage',
                  link: 'concepts/smart-contracts/resource-usage',
                },
                {
                  label: 'Costs & Constraints',
                  link: 'concepts/smart-contracts/costs-constraints',
                },
                {
                  label: 'Data Storage',
                  collapsed: false,
                  items: [
                    {
                      label: 'Overview',
                      link: 'concepts/smart-contracts/storage/overview',
                    },
                    {
                      label: 'Local Storage',
                      link: 'concepts/smart-contracts/storage/local',
                    },
                    {
                      label: 'Global Storage',
                      link: 'concepts/smart-contracts/storage/global',
                    },
                    {
                      label: 'Box Storage',
                      link: 'concepts/smart-contracts/storage/box',
                    },
                    {
                      label: 'Scratch Space',
                      link: 'concepts/smart-contracts/storage/scratch',
                    },
                    {
                      label: 'Encoding/Decoding',
                      link: 'concepts/smart-contracts/storage/encoding-decoding',
                    },
                  ],
                },
                {
                  label: 'Development Lifecycle',
                  link: 'concepts/smart-contracts/lifecycle',
                },
              ],
            },
          ],
        },
        {
          label: 'Running A Node',
          collapsed: false,
          items: [
            {
              label: 'Overview',
              link: 'nodes/overview',
            },
            {
              label: 'NodeKit Overview',
              link: 'nodes/nodekit-overview',
            },
            {
              label: 'NodeKit Quick Start',
              link: 'nodes/nodekit-quick-start',
            },
            {
              label: 'Node Types',
              link: 'nodes/types',
            },
            {
              label: 'Direct Installation',
              items: [
                {
                  label: 'Manual Installation',
                  link: 'nodes/installation/manual-installation',
                },
                {
                  label: 'Catchup & Status',
                  link: 'nodes/installation/catchup-status',
                },
                {
                  label: 'Indexer Installation',
                  link: 'nodes/installation/indexer-installation',
                },
                {
                  label: 'Conduit Installation',
                  link: 'nodes/installation/conduit-installation',
                },
                {
                  label: 'Node Troubleshooting',
                  link: 'nodes/installation/troubleshooting',
                },
              ],
            },
            {
              label: 'Node Management',
              items: [
                {
                  label: 'Best Practices',
                  link: 'nodes/management/best-practices',
                },
                {
                  label: 'Software Updates',
                  link: 'nodes/management/software-updates',
                },
                {
                  label: 'Switching Networks',
                  link: 'nodes/management/switch-networks',
                },
              ],
            },
            {
              label: 'Node Reference',
              items: [
                {
                  label: 'Node Artifacts',
                  link: 'nodes/reference/artifacts',
                },
                {
                  label: 'Configuration Settings',
                  link: 'nodes/reference/config-settings',
                },
                {
                  label: 'Relay Node Configuration',
                  link: 'nodes/reference/relay-config',
                },
                {
                  label: 'Telemetry Configuration',
                  link: 'nodes/reference/telemetry-config',
                },
              ],
            },
            {
              label: 'NodeKit Reference',
              collapsed: false,
              items: [
                {
                  label: 'Commands',
                  collapsed: false,
                  autogenerate: { directory: 'nodes/nodekit-reference/commands' },
                },
              ],
            },
          ],
        },
        {
          label: 'Consensus Protocol',
          collapsed: false,
          items: [
            {
              label: 'Overview',
              link: 'protocol/overview',
            },
            {
              label: 'Participation Key Management',
              link: 'protocol/partkey-management',
            },
            {
              label: 'Account Registration',
              link: 'protocol/registration',
            },
            {
              label: 'Staking Rewards',
              link: 'protocol/staking-rewards',
            },
            {
              label: 'State Proofs',
              link: 'protocol/state-proofs',
            },
            {
              label: 'Networks',
              link: 'protocol/networks',
            },
          ],
        },
        // {
        //   label: 'How-To',
        //   collapsed: false,
        //   items: [],
        // },
        // {
        //   label: 'Tutorials',
        //   collapsed: false,
        //   items: [
        //     {
        //       label: 'Getting Started With AlgoKit',
        //       link: 'tutorials/getting-started',
        //     },
        //   ],
        // },
        {
          label: 'Reference',
          collapsed: false,
          items: [
            {
              label: 'AlgoKit CLI',
              collapsed: false,
              items: [
                {
                  label: 'Project Tools',
                  link: 'reference/algokit-cli/project-tools',
                },
                {
                  label: 'Configuration',
                  link: 'reference/algokit-cli/config',
                },
                {
                  label: 'App Compilation',
                  link: 'reference/algokit-cli/compilation',
                },
                {
                  label: 'Client Generation',
                  link: 'reference/algokit-cli/client-generation',
                },
                {
                  label: 'Testnet Funding',
                  link: 'reference/algokit-cli/testnet-funding',
                },
                {
                  label: 'Explorer',
                  link: 'reference/algokit-cli/explorer',
                },
                {
                  label: 'Node Operations',
                  link: 'reference/algokit-cli/node-ops',
                },
                {
                  label: 'Tasks',
                  link: 'reference/algokit-cli/tasks',
                },
                {
                  label: 'CLI Reference',
                  link: 'reference/algokit-cli/reference',
                },
              ],
            },
            {
              label: 'Algorand Python',
              collapsed: false,
              items: [],
            },
            {
              label: 'Algorand Typescript',
              collapsed: false,
              items: [],
            },
            {
              label: 'Algorand TEAL',
              collapsed: false,
              items: [],
            },
            {
              label: 'AlgoKit Utils (Python)',
              collapsed: false,
              items: [
                {
                  label: 'Fundamentals',
                  items: [
                    {
                      label: 'Client',
                      link: 'reference/algokit-utils-py/fundamentals/client',
                    },
                    {
                      label: 'Transactions',
                      link: 'reference/algokit-utils-py/fundamentals/transactions',
                    },
                    {
                      label: 'Accounts',
                      link: 'reference/algokit-utils-py/fundamentals/accounts',
                    },
                    {
                      label: 'Assets',
                      link: 'reference/algokit-utils-py/fundamentals/assets',
                    },
                    {
                      label: 'Amount Handling',
                      link: 'reference/algokit-utils-py/fundamentals/amount-handling',
                    },
                  ],
                },
                {
                  label: 'Smart Contracts',
                  items: [
                    {
                      label: 'App Clients',
                      link: 'reference/algokit-utils-py/smart-contracts/app-clients',
                    },
                    {
                      label: 'Interactions & State',
                      link: 'reference/algokit-utils-py/smart-contracts/interactions-state',
                    },
                    {
                      label: 'Deployment',
                      link: 'reference/algokit-utils-py/smart-contracts/deployment',
                    },
                  ],
                },
                {
                  label: 'Network',
                  items: [
                    {
                      label: 'Environments',
                      link: 'reference/algokit-utils-py/network/environments',
                    },
                    {
                      label: 'Network Clients',
                      link: 'reference/algokit-utils-py/network/clients',
                    },
                    {
                      label: 'Testnet Dispenser',
                      link: 'reference/algokit-utils-py/network/testnet-dispenser',
                    },
                    {
                      label: 'Indexer Operations',
                      link: 'reference/algokit-utils-py/network/indexer',
                    },
                  ],
                },
                {
                  label: 'Development Tools',
                  items: [
                    {
                      label: 'Testing',
                      link: 'reference/algokit-utils-py/dev-tools/testing',
                    },
                    {
                      label: 'Debugging',
                      link: 'reference/algokit-utils-py/dev-tools/debugging',
                    },
                    {
                      label: 'Logging',
                      link: 'reference/algokit-utils-py/dev-tools/logging',
                    },
                  ],
                },
              ],
            },
            {
              label: 'AlgoKit Utils (Typescript)',
              collapsed: false,
              items: [
                {
                  label: 'Fundamentals',
                  items: [
                    {
                      label: 'Client',
                      link: 'reference/algokit-utils-ts/fundamentals/client',
                    },
                    {
                      label: 'Transactions',
                      link: 'reference/algokit-utils-ts/fundamentals/transactions',
                    },
                    {
                      label: 'Accounts',
                      link: 'reference/algokit-utils-ts/fundamentals/accounts',
                    },
                    {
                      label: 'Assets',
                      link: 'reference/algokit-utils-ts/fundamentals/assets',
                    },
                    {
                      label: 'Amount Handling',
                      link: 'reference/algokit-utils-ts/fundamentals/amount-handling',
                    },
                  ],
                },
                {
                  label: 'Smart Contracts',
                  items: [
                    {
                      label: 'App Clients',
                      link: 'reference/algokit-utils-ts/smart-contracts/app-clients',
                    },
                    {
                      label: 'Interactions & State',
                      link: 'reference/algokit-utils-ts/smart-contracts/interactions-state',
                    },
                    {
                      label: 'Deployment',
                      link: 'reference/algokit-utils-ts/smart-contracts/deployment',
                    },
                  ],
                },
                {
                  label: 'Network',
                  items: [
                    {
                      label: 'Environments',
                      link: 'reference/algokit-utils-ts/network/environments',
                    },
                    {
                      label: 'Network Clients',
                      link: 'reference/algokit-utils-ts/network/clients',
                    },
                    {
                      label: 'Testnet Dispenser',
                      link: 'reference/algokit-utils-ts/network/testnet-dispenser',
                    },
                    {
                      label: 'Indexer Operations',
                      link: 'reference/algokit-utils-ts/network/indexer',
                    },
                  ],
                },
                {
                  label: 'Development Tools',
                  items: [
                    {
                      label: 'Testing',
                      link: 'reference/algokit-utils-ts/dev-tools/testing',
                    },
                    {
                      label: 'Debugging',
                      link: 'reference/algokit-utils-ts/dev-tools/debugging',
                    },
                    {
                      label: 'Logging',
                      link: 'reference/algokit-utils-ts/dev-tools/logging',
                    },
                  ],
                },
              ],
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
