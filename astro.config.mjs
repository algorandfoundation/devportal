import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import d2 from 'astro-d2';
import rehypeExternalLinks from 'rehype-external-links';
import { resolve } from 'path';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLinksValidator from 'starlight-links-validator';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

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
        starlightOpenAPI([
          {
            base: 'reference/rest-api/algod',
            label: 'algod',
            schema:
              'https://raw.githubusercontent.com/algorand/go-algorand/refs/heads/master/daemon/algod/api/algod.oas3.yml',
            collapsed: true,
          },
          {
            base: 'reference/rest-api/indexer',
            label: 'indexer',
            schema:
              'https://raw.githubusercontent.com/algorand/indexer/refs/heads/main/api/indexer.oas3.yml',
            collapsed: true,
          },
          {
            base: 'reference/rest-api/kmd',
            label: 'kmd',
            schema:
              'https://raw.githubusercontent.com/algorand/go-algorand/ad578576ab5f5bfe58a590164903617ecef379e4/daemon/kmd/api/swagger.json',
            collapsed: true,
          },
        ]),
      ],
      head: [
        {
          tag: 'script',
          attrs: {
            defer: true,
            'data-domain': 'staging.developer.algorand.co',
            src: 'https://plausible.io/js/script.hash.outbound-links.tagged-events.js',
          },
        },
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
              link: 'getting-started/blockchain-101',
              badge: 'Owner',
            },
            {
              label: 'Why Algorand?',
              link: 'getting-started/why-algorand',
            },
            {
              label: 'Deploy Your First Smart Contract',
              link: 'getting-started/algokit-quick-start',
            },
          ],
        },
        {
          label: 'Concepts',
          collapsed: false,
          items: [
            {
              label: 'Accounts',
              collapsed: true,
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
              collapsed: true,
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
              collapsed: true,
              badge: 'WIP',
              items: [
                {
                  label: 'Overview',
                  link: 'concepts/assets/overview',
                  badge: 'WIP',
                },
                {
                  label: 'Creating Assets',
                  link: 'concepts/assets/create',
                  badge: 'WIP',
                },
                {
                  label: 'Opting In & Out',
                  link: 'concepts/assets/opt-in-out',
                  badge: 'WIP',
                },
                {
                  label: 'Updating Assets',
                  link: 'concepts/assets/update',
                  badge: 'WIP',
                },
                {
                  label: 'Transferring Assets',
                  link: 'concepts/assets/transfer',
                  badge: 'WIP',
                },
                {
                  label: 'Deleting Assets',
                  link: 'concepts/assets/delete',
                  badge: 'WIP',
                },
                {
                  label: 'Clawing Back Assets',
                  link: 'concepts/assets/clawback',
                  badge: 'WIP',
                },
                {
                  label: 'Freezing Assets',
                  link: 'concepts/assets/freeze',
                  badge: 'WIP',
                },
                {
                  label: 'Known Assets',
                  link: 'concepts/assets/known-assets',
                  badge: 'WIP',
                },
              ],
            },
            {
              label: 'Smart Contracts',
              collapsed: true,
              items: [
                {
                  label: 'Overview',
                  link: 'concepts/smart-contracts/overview',
                },
                {
                  label: 'Languages',
                  collapsed: false,
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
                  collapsed: true,
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
                {
                  label: 'Deployment',
                  link: 'concepts/smart-contracts/deployment',
                },
              ],
            },
          ],
        },        
        {
          label: 'Build With AlgoKit',
          collapsed: false,
          items: [
            {
              label: 'Intro to AlgoKit',
              link: 'algokit/algokit-intro',
              badge: 'Owner',
            },
            {
              label: 'CLI Tools',
              collapsed: true,
              items: [
                {
                  label: 'Overview',
                  link: 'algokit/algokit-cli/overview',
                },
                {
                  label: 'Compile',
                  link: 'algokit/algokit-cli/compile',
                },
                {
                  label: 'Completions',
                  link: 'algokit/algokit-cli/completions',
                },
                {
                  label: 'Config',
                  link: 'algokit/algokit-cli/config',
                },
                {
                  label: 'TestNet Dispenser',
                  link: 'algokit/algokit-cli/dispenser',
                },
                {
                  label: 'Doctor',
                  link: 'algokit/algokit-cli/doctor',
                },
                {
                  label: 'Explore',
                  link: 'algokit/algokit-cli/explore',
                },
                {
                  label: 'Generate',
                  link: 'algokit/algokit-cli/generate',
                },
                {
                  label: 'Goal',
                  link: 'algokit/algokit-cli/goal',
                },
                {
                  label: 'Init',
                  link: 'algokit/algokit-cli/init',
                },
                {
                  label: 'Localnet',
                  link: 'algokit/algokit-cli/localnet',
                },
                {
                  label: 'Project',
                  collapsed: false,
                  items: [
                    {
                      label: 'Overview',
                      link: 'algokit/algokit-cli/project/',
                    },
                    {
                      label: 'Bootstrap',
                      link: 'algokit/algokit-cli/project/bootstrap',
                    },
                    {
                      label: 'Deploy',
                      link: 'algokit/algokit-cli/project/deploy',
                    },
                    {
                      label: 'Link',
                      link: 'algokit/algokit-cli/project/link',
                    },
                    {
                      label: 'List',
                      link: 'algokit/algokit-cli/project/list',
                    },
                    {
                      label: 'Run',
                      link: 'algokit/algokit-cli/project/run',
                    },
                  ],
                },
                {
                  label: 'Tasks',
                  collapsed: false,
                  items: [
                    {
                      label: 'Overview',
                      link: 'algokit/algokit-cli/tasks',
                    },
                    {
                      label: 'Analyze',
                      link: 'algokit/algokit-cli/tasks/analyze',
                    },
                    {
                      label: 'IPFS',
                      link: 'algokit/algokit-cli/tasks/ipfs',
                    },
                    {
                      label: 'Mint',
                      link: 'algokit/algokit-cli/tasks/mint',
                    },
                    {
                      label: 'NFD Lookup',
                      link: 'algokit/algokit-cli/tasks/nfd',
                    },
                    {
                      label: 'Asset opt-(in|out)',
                      link: 'algokit/algokit-cli/tasks/opt',
                    },
                    {
                      label: 'Send',
                      link: 'algokit/algokit-cli/tasks/send',
                    },
                    {
                      label: 'Sign',
                      link: 'algokit/algokit-cli/tasks/sign',
                    },
                    {
                      label: 'Transfer',
                      link: 'algokit/algokit-cli/tasks/transfer',
                    },
                    {
                      label: 'Vanity Address',
                      link: 'algokit/algokit-cli/tasks/vanity-address',
                    },
                    {
                      label: 'Wallet',
                      link: 'algokit/algokit-cli/tasks/wallet',
                    },
                  ],
                },
              ],
            },
            {
              label: "LORA the Explorer",
              collapsed: true,
              items: [
                {
                  label: "Overview",
                  link: "",
                },
              ],
            },
            {
              label: "Project Templates",
              collapsed: true,
              items: [
                {
                  label: "Project Structure",
                  link: "algokit/project-structure",
                },
                {
                  label: "Official AlgoKit Templates",
                  link: "algokit/official-algokit-templates",
                },
                {
                  label: "Custom AlgoKit Templates",
                  link: "algokit/custom-algokit-templates",
                },
              ],
            },
            {
              label: "AlgoKit Utils",
              collapsed: true,
              items: [
                {
                  label: "AlgoKit Utils TypeScript",
                  link: "",
                },
                {
                  label: "AlgoKit Utils Python",
                  link: "",
                },
              ],
            },
            {
              label: "Smart Contract Languages",
              collapsed: true,
              items: [
                {
                  label: "Algorand TypeScript",
                  link: "",
                },
                {
                  label: "Algorand Python",
                  link: "",
                },
              ],
            },
            {
              label: "Unit Testing",
              collapsed: true,
              items: [
                {
                  label: "TypeScript Unit Testing ",
                  link: "",
                },
                {
                  label: "Python Unit Testing",
                  link: "",
                },
              ],
            },
            {
              label: "AVM Debugger",
              collapsed: true,
              items: [
                {
                  label: "Overview",
                  link: "",
                },
              ],
            },
            {
              label: "Subscriber",
              collapsed: true,
              items: [
                {
                  label: "Subscriber TypeScript",
                  link: "",
                },
                {
                  label: "Subscriber Python",
                  link: "",
                }
              ]
            },
            {
              label: "Testnet Dispenser",
              collapsed: true,
              items: [
                {
                  label: "Overview",
                  link: "",
                },
              ],
            },
            {
              label: "Client Generators",
              collapsed: true,
              items: [
                {
                  label: "Overview",
                  link: "",
                },
              ],
            },
          ],
        },
        {
          label: 'Running A Node',
          collapsed: true,
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
              collapsed: true,
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
              collapsed: true,
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
              collapsed: true,
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
              link: 'nodes/nodekit-reference/commands',
            },
          ],
        },
        {
          label: 'Consensus Protocol',
          collapsed: true,
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
          collapsed: true,
          items: [
            {
              label: 'AlgoKit CLI',
              collapsed: true,
              items: [
                {
                  label: 'Algokit CLI Reference',
                  link: 'reference/algokit-cli/cli-reference',
                },
              ],
            },
            {
              label: 'Algorand Python',
              collapsed: true,
              items: [
                {
                  label: 'API Reference',
                  items: [
                    {
                      label: 'algopy.arc4',
                      link: 'reference/algorand-python/api-reference/algopy-arc4',
                    },
                    {
                      label: 'algopy.gtxn',
                      link: 'reference/algorand-python/api-reference/algopy-gtxn',
                    },
                    {
                      label: 'algopy.itxn',
                      link: 'reference/algorand-python/api-reference/algopy-itxn',
                    },
                    {
                      label: 'algopy.op',
                      link: 'reference/algorand-python/api-reference/algopy-op',
                    },
                    {
                      label: 'algopy',
                      link: 'reference/algorand-python/api-reference/algopy',
                    },
                  ],
                },
                {
                  label: 'Overview',
                  link: 'reference/algorand-python/overview',
                },
              ],
            },
            {
              label: 'Algorand Typescript',
              collapsed: true,
              items: [
                {
                  label: 'API Reference',
                  items: [],
                },
                {
                  label: 'Overview',
                  link: 'reference/algorand-typescript/overview',
                },
              ],
            },
            {
              label: 'AlgoKit Utils (Python)',
              collapsed: true,
              items: [
                {
                  label: 'API Reference',
                  items: [],
                },
                {
                  label: 'Overview',
                  link: 'reference/algokit-utils-py/overview',
                },
              ],
            },
            {
              label: 'AlgoKit Utils (Typescript)',
              collapsed: true,
              items: [
                {
                  label: 'API Reference',
                  items: [],
                },
                {
                  label: 'Overview',
                  link: 'reference/algokit-utils-ts/overview',
                },
              ],
            },
            {
              label: 'Opcodes',
              collapsed: true,
              items: [
                {
                  label: 'Opcodes List',
                  link: 'reference/opcodes/opcodes-list',
                },
                {
                  label: 'Overview',
                  link: 'reference/opcodes/overview',
                },
              ],
            },
            {
              label: 'REST API',
              collapsed: true,
              items: [
                {
                  label: 'Overview',
                  link: 'reference/rest-api/overview',
                },
                {
                  label: 'API Endpoints',
                  items: openAPISidebarGroups,
                },
              ],
            },
            {
              label: 'Standards and Practices',
              collapsed: true,
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
        '@diagrams': resolve('./src/assets/diagrams/svg'),
      },
    },
  },
});
