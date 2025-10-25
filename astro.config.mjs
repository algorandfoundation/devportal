import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import icon from 'astro-icon';
import d2 from 'astro-d2';
import rehypeExternalLinks from 'rehype-external-links';
import { resolve } from 'path';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLinksValidator from 'starlight-links-validator';
import rehypeAstroRelativeMarkdownLinks from 'astro-rehype-relative-markdown-links';
import tailwindcss from '@tailwindcss/vite';
import starlightLlmsTxt from 'starlight-llms-txt';
import starlightAutoSidebar from 'starlight-auto-sidebar';
import starlightOpenAPI, { createOpenAPISidebarGroup } from 'starlight-openapi';
import { fileURLToPath, URL } from 'node:url';

const algodAPIDocsSidebarGroup = createOpenAPISidebarGroup();
const indexerAPIDocsSidebarGroup = createOpenAPISidebarGroup();
const kmdAPIDocsSidebarGroup = createOpenAPISidebarGroup();

export default defineConfig({
  site: 'https://dev.algorand.co',
  description:
    'The Algorand Developer Portal is the go-to resource for developers building on Algorand.',
  output: 'static',
  viewTransitions: true,
  integrations: [
    starlight({
      title: 'Algorand Developer Portal',
      plugins: [
        starlightImageZoom(),
        starlightLinksValidator({
          errorOnRelativeLinks: false,
          errorOnInvalidHashes: false,
          exclude: [
            '**[FUTURELINK]*',
            '**/reference/algorand-python/**',
            '**/reference/algorand-teal/**',
            '**/reference/algorand-typescript/**',
            '**/reference/rest-api/**',
            '**/reference/sdk/**',
          ],
        }),
        starlightLlmsTxt({
          minify: {
            customSelectors: [':any-link'],
          },
          customSets: [
            {
              label: 'Reference',
              description: 'Algorand Developer Portal - Reference Docs',
              paths: ['reference/**'],
            },
            {
              label: 'Typescript - Reference',
              description: 'Algorand Developer Portal - Typescript Reference Docs',
              paths: ['reference/algorand-typescript/**'],
            },
            {
              label: 'Python - Reference',
              description: 'Algorand Developer Portal - Python Reference Docs',
              paths: ['reference/algorand-python/**'],
            },
            {
              label: 'Typescript',
              description: 'Algorand Developer Portal - Typescript Docs',
              paths: ['algokit/languages/typescript/**'],
            },
            {
              label: 'Python',
              description: 'Algorand Developer Portal - Python Docs',
              paths: ['algokit/languages/python/**'],
            },
          ],
        }),
        starlightAutoSidebar(),
        starlightOpenAPI([
          {
            base: 'reference/rest-api/algod',
            schema:
              'https://raw.githubusercontent.com/algorand/go-algorand/refs/heads/master/daemon/algod/api/algod.oas3.yml',
            sidebar: {
              label: 'algod',
              group: algodAPIDocsSidebarGroup,
              operations: { badges: false, labels: 'operationId', sort: 'alphabetical' },
              tags: { sort: 'alphabetical' },
            },
          },
          {
            base: 'reference/rest-api/indexer',
            schema:
              'https://raw.githubusercontent.com/algorand/indexer/refs/heads/main/api/indexer.oas3.yml',
            sidebar: {
              label: 'indexer',
              group: indexerAPIDocsSidebarGroup,
              operations: { badges: false, labels: 'operationId', sort: 'alphabetical' },
              tags: { sort: 'alphabetical' },
            },
          },
          {
            base: 'reference/rest-api/kmd',
            schema:
              'https://raw.githubusercontent.com/algorand/go-algorand/ad578576ab5f5bfe58a590164903617ecef379e4/daemon/kmd/api/swagger.json',
            sidebar: {
              label: 'kmd',
              group: kmdAPIDocsSidebarGroup,
              operations: { badges: false, labels: 'operationId', sort: 'alphabetical' },
              tags: { sort: 'alphabetical' },
            },
          },
        ]),
      ],
      head: [
        {
          tag: 'script',
          content: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5T5V43DW');`,
        },
        {
          tag: 'script',
          attrs: {
            src: 'https://widget.kapa.ai/kapa-widget.bundle.js',
            'data-website-id': '6e799942-b20a-4203-8103-93582a2611e1',
            'data-project-name': 'Algorand',
            'data-project-color': '#99A1A7',
            'data-modal-header-bg-color': '#17cac6',
            'data-font-family': 'Inter, sans-serif',
            'data-modal-title-color': '#ffffff',
            'data-modal-title': 'Ask AI',
            'data-modal-body-bg-color': '#f6f6f6',
            'data-project-logo': '/algorand-logo.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: '/devportal-og.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:width',
            content: '1920',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:height',
            content: '1080',
          },
        },
      ],
      components: {
        Footer: './src/components/Footer.astro',
        Header: './src/components/Header.astro',
        Hero: './src/components/Hero.astro',
        SiteTitle: './src/components/SiteTitle.astro',
        ThemeProvider: './src/components/CustomThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      logo: {
        light: '/src/assets/images/portal-logo-light-mode.svg',
        dark: '/src/assets/images/portal-logo-dark-mode.svg',
        alt: 'Algorand Developer Portal',
        replacesTitle: true,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/algorandfoundation/devportal',
        },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/algorand' },
        { icon: 'x.com', label: 'X', href: 'https://x.com/algodevs' },
        { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@algodevs' },
      ],
      favicon: '/favicon.png',
      customCss: ['/src/styles/global.css'],
      sidebar: [
        {
          label: 'Getting Started',
          collapsed: false,
          items: [
            { label: 'Introduction', link: '/getting-started/introduction' },
            {
              label: 'Tutorial: Your First Smart Contract',
              link: 'getting-started/algokit-quick-start',
            },
            {
              label: 'AlgoKit Examples Gallery',
              link: 'https://examples.dev.algorand.co',
              attrs: { target: '_blank', rel: 'noopener' },
            },
            {
              label: 'Interactive AlgoKit Code Tutorials',
              link: 'https://tutorials.dev.algorand.co',
              attrs: { target: '_blank', rel: 'noopener' },
            },
            {
              label: 'Why Algorand?',
              link: 'getting-started/why-algorand',
            },
            {
              label: 'From Ethereum to Algorand',
              link: 'getting-started/ethereum-to-algorand',
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
                  label: 'Fees',
                  link: 'concepts/transactions/fees',
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
                {
                  label: 'Transaction Reference',
                  link: 'concepts/transactions/reference',
                },
              ],
            },
            {
              label: 'Assets',
              collapsed: true,
              items: [
                {
                  label: 'Overview',
                  link: 'concepts/assets/overview',
                },
                {
                  label: 'Asset Operations',
                  link: 'concepts/assets/asset-operations',
                },
                // {
                //   label: 'Assets Metadata',
                //   link: 'concepts/assets/asset-metadata',
                // },
                // {
                //   label: 'Known Assets',
                //   link: 'concepts/assets/known-assets',
                // },
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
                  label: 'Algorand Virtual Machine',
                  link: 'concepts/smart-contracts/avm',
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
                  label: 'Inner Transactions',
                  link: 'concepts/smart-contracts/inner-txn',
                },
                {
                  label: 'Resource Usage',
                  link: 'concepts/smart-contracts/resource-usage',
                },
                {
                  label: 'Opcodes Overview',
                  link: 'concepts/smart-contracts/opcodes-overview',
                },
                {
                  label: 'Logic Signatures',
                  link: 'concepts/smart-contracts/logic-sigs',
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
                  label: 'Cryptographic Tools',
                  link: 'concepts/smart-contracts/cryptographic-tools',
                },
                {
                  label: 'Development Lifecycle',
                  link: 'concepts/smart-contracts/lifecycle',
                },
                // {
                //   label: 'Deployment',
                //   link: 'concepts/smart-contracts/deployment',
                // },
              ],
            },
            {
              label: 'Consensus Protocol',
              collapsed: true,
              items: [
                {
                  label: 'Overview',
                  link: 'concepts/protocol/overview',
                },
                {
                  label: 'Protocol Parameters',
                  link: 'concepts/protocol/protocol-parameters',
                },
                {
                  label: 'Participation Key Management',
                  link: 'concepts/protocol/partkey-management',
                },
                {
                  label: 'Account Registration',
                  link: 'concepts/protocol/registration',
                },
                {
                  label: 'Staking Rewards',
                  link: 'concepts/protocol/staking-rewards',
                },
                {
                  label: 'State Proofs',
                  link: 'concepts/protocol/state-proofs',
                },
                {
                  label: 'Networks',
                  link: 'concepts/protocol/networks',
                },
                {
                  label: 'Randomness',
                  link: 'concepts/protocol/randomness',
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
            },
            {
              label: 'CLI Tools',
              collapsed: true,
              items: [
                {
                  label: 'Overview',
                  link: 'algokit/cli/overview',
                },
                {
                  label: 'Compile',
                  link: 'algokit/cli/compile',
                },
                {
                  label: 'Completions',
                  link: 'algokit/cli/completions',
                },
                {
                  label: 'Config',
                  link: 'algokit/cli/config',
                },
                {
                  label: 'TestNet Dispenser',
                  link: 'algokit/cli/dispenser',
                },
                {
                  label: 'Doctor',
                  link: 'algokit/cli/doctor',
                },
                {
                  label: 'Explore',
                  link: 'algokit/cli/explore',
                },
                {
                  label: 'Generate',
                  link: 'algokit/cli/generate',
                },
                {
                  label: 'Goal',
                  link: 'algokit/cli/goal',
                },
                {
                  label: 'Init',
                  link: 'algokit/cli/init',
                },
                {
                  label: 'Localnet',
                  link: 'algokit/cli/localnet',
                },
                {
                  label: 'Project',
                  collapsed: true,
                  items: [
                    {
                      label: 'Overview',
                      link: 'algokit/cli/project',
                    },
                    {
                      label: 'Bootstrap',
                      link: 'algokit/cli/project/bootstrap',
                    },
                    {
                      label: 'Deploy',
                      link: 'algokit/cli/project/deploy',
                    },
                    {
                      label: 'Link',
                      link: 'algokit/cli/project/link',
                    },
                    {
                      label: 'List',
                      link: 'algokit/cli/project/list',
                    },
                    {
                      label: 'Run',
                      link: 'algokit/cli/project/run',
                    },
                  ],
                },
                {
                  label: 'Tasks',
                  collapsed: true,
                  items: [
                    {
                      label: 'Overview',
                      link: 'algokit/cli/tasks',
                    },
                    {
                      label: 'Analyze',
                      link: 'algokit/cli/tasks/analyze',
                    },
                    {
                      label: 'IPFS',
                      link: 'algokit/cli/tasks/ipfs',
                    },
                    {
                      label: 'Mint',
                      link: 'algokit/cli/tasks/mint',
                    },
                    {
                      label: 'NFD Lookup',
                      link: 'algokit/cli/tasks/nfd',
                    },
                    {
                      label: 'Asset opt-(in|out)',
                      link: 'algokit/cli/tasks/opt',
                    },
                    {
                      label: 'Send',
                      link: 'algokit/cli/tasks/send',
                    },
                    {
                      label: 'Sign',
                      link: 'algokit/cli/tasks/sign',
                    },
                    {
                      label: 'Transfer',
                      link: 'algokit/cli/tasks/transfer',
                    },
                    {
                      label: 'Vanity Address',
                      link: 'algokit/cli/tasks/vanity_address',
                    },
                    {
                      label: 'Wallet',
                      link: 'algokit/cli/tasks/wallet',
                    },
                  ],
                },
              ],
            },
            {
              label: 'LORA the Explorer',
              collapsed: true,
              items: [
                {
                  label: 'Overview',
                  link: 'algokit/lora/overview',
                },
              ],
            },
            {
              label: 'Project Templates',
              collapsed: true,
              items: [
                {
                  label: 'Project Structure',
                  link: 'algokit/project-structure',
                },
                {
                  label: 'Official AlgoKit Templates',
                  link: 'algokit/official-algokit-templates',
                },
                {
                  label: 'Custom AlgoKit Templates',
                  link: 'algokit/custom-algokit-templates',
                },
              ],
            },
            {
              label: 'AlgoKit Utils',
              collapsed: true,
              items: [
                {
                  label: 'AlgoKit Clients',
                  link: 'algokit/utils/algokit-clients',
                },
                {
                  label: 'TypeScript',
                  items: [
                    {
                      label: 'Overview',
                      link: 'algokit/utils/typescript/overview',
                    },
                    {
                      label: 'Account Management',
                      link: 'algokit/utils/typescript/account',
                    },
                    {
                      label: 'Algorand Client',
                      link: 'algokit/utils/typescript/algorand-client',
                    },
                    {
                      label: 'Amount',
                      link: 'algokit/utils/typescript/amount',
                    },
                    {
                      label: 'App Client',
                      link: 'algokit/utils/typescript/app-client',
                    },
                    {
                      label: 'App Deployment',
                      link: 'algokit/utils/typescript/app-deploy',
                    },
                    {
                      label: 'Asset',
                      link: 'algokit/utils/typescript/asset',
                    },
                    {
                      label: 'Client',
                      link: 'algokit/utils/typescript/client',
                    },
                    {
                      label: 'Debugging',
                      link: 'algokit/utils/typescript/debugging',
                    },
                    {
                      label: 'Dispenser Client',
                      link: 'algokit/utils/typescript/dispenser-client',
                    },
                    {
                      label: 'Event Emitter',
                      link: 'algokit/utils/typescript/event-emitter',
                    },
                    {
                      label: 'Indexer',
                      link: 'algokit/utils/typescript/indexer',
                    },
                    {
                      label: 'Testnet Dispenser Client',
                      link: 'algokit/utils/typescript/dispenser-client',
                    },
                    {
                      label: 'Testing',
                      link: 'algokit/utils/typescript/testing',
                    },
                    {
                      label: 'Transaction Composer',
                      link: 'algokit/utils/typescript/transaction-composer',
                    },
                    {
                      label: 'Transaction',
                      link: 'algokit/utils/typescript/transaction',
                    },
                    {
                      label: 'Transfer',
                      link: 'algokit/utils/typescript/transfer',
                    },
                    {
                      label: 'Typed Clients',
                      link: 'algokit/utils/typescript/typed-app-clients',
                    },
                    {
                      label: 'v7 Migration Guide',
                      link: 'algokit/utils/typescript/v7-migration',
                    },
                    {
                      label: 'v8 Migration Guide',
                      link: 'algokit/utils/typescript/v8-migration',
                    },
                  ],
                },
                {
                  label: 'Python',
                  items: [
                    {
                      label: 'Overview',
                      link: 'algokit/utils/python/overview',
                    },
                    {
                      label: 'Account Management',
                      link: 'algokit/utils/python/account',
                    },
                    {
                      label: 'Algorand Client',
                      link: 'algokit/utils/python/algorand-client',
                    },
                    {
                      label: 'Algo Amount Handling',
                      link: 'algokit/utils/python/amount',
                    },
                    {
                      label: 'App Client and Factory',
                      link: 'algokit/utils/python/app-client',
                    },
                    {
                      label: 'App Deployment',
                      link: 'algokit/utils/python/app-deploy',
                    },
                    {
                      label: 'App Management',
                      link: 'algokit/utils/python/app',
                    },
                    {
                      label: 'Assets',
                      link: 'algokit/utils/python/asset',
                    },
                    {
                      label: 'Client Management',
                      link: 'algokit/utils/python/client',
                    },
                    {
                      label: 'Debugger',
                      link: 'algokit/utils/python/debugging',
                    },
                    {
                      label: 'Testnet Dispenser Client',
                      link: 'algokit/utils/python/dispenser-client',
                    },
                    {
                      label: 'Testing',
                      link: 'algokit/utils/python/testing',
                    },
                    {
                      label: 'Transaction Composer',
                      link: 'algokit/utils/python/transaction-composer',
                    },
                    {
                      label: 'Transaction Management',
                      link: 'algokit/utils/python/transaction',
                    },
                    {
                      label: 'Algo Transfers (Payments)',
                      link: 'algokit/utils/python/transfer',
                    },
                    {
                      label: 'Typed Application Clients',
                      link: 'algokit/utils/python/typed-app-clients',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Smart Contract Languages',
              collapsed: true,
              items: [
                {
                  label: 'Algorand TypeScript',
                  items: [
                    {
                      label: 'Overview',
                      link: 'algokit/languages/typescript/overview',
                    },
                    {
                      label: 'Program Structure',
                      link: 'algokit/languages/typescript/lg-program-structure',
                    },
                    {
                      label: 'Basic Types',
                      link: 'algokit/languages/typescript/lg-types',
                    },
                    {
                      label: 'Storage',
                      link: 'algokit/languages/typescript/lg-storage',
                    },
                    {
                      label: 'Ops',
                      link: 'algokit/languages/typescript/lg-ops',
                    },
                    {
                      label: 'Guiding Principles',
                      link: 'algokit/languages/typescript/lg-guiding-principles',
                    },
                  ],
                },
                {
                  label: 'Algorand Python',
                  items: [
                    {
                      label: 'Overview',
                      link: 'algokit/languages/python/overview',
                    },
                    {
                      label: 'Program Structure',
                      link: 'algokit/languages/python/lg-structure',
                    },
                    {
                      label: 'Types',
                      link: 'algokit/languages/python/lg-types',
                    },
                    {
                      label: 'Control Flow Structures',
                      link: 'algokit/languages/python/lg-control',
                    },
                    {
                      label: 'Module Level Constructs',
                      link: 'algokit/languages/python/lg-modules',
                    },
                    {
                      label: 'Overview',
                      link: 'algokit/languages/python/lg-modules',
                    },
                    {
                      label: 'Python Built-Ins',
                      link: 'algokit/languages/python/lg-builtins',
                    },
                    {
                      label: 'Error Handling and Assertions',
                      link: 'algokit/languages/python/lg-errors',
                    },
                    {
                      label: 'Data Structures',
                      link: 'algokit/languages/python/lg-structure',
                    },
                    {
                      label: 'Storing Data On-Chain',
                      link: 'algokit/languages/python/lg-storage',
                    },
                    {
                      label: 'Logging',
                      link: 'algokit/languages/python/lg-logs',
                    },
                    {
                      label: 'Transactions',
                      link: 'algokit/languages/python/lg-transactions',
                    },
                    {
                      label: 'AVM Operations',
                      link: 'algokit/languages/python/lg-ops',
                    },
                    {
                      label: 'Opcode Budgets',
                      link: 'algokit/languages/python/lg-opcode-budget',
                    },
                    {
                      label: 'ARC-4: Application Binary Interface',
                      link: 'algokit/languages/python/lg-arc4',
                    },
                    {
                      label: 'ARC-28: Structured Event Logging',
                      link: 'algokit/languages/python/lg-arc28',
                    },
                    {
                      label: 'Calling Other Applicaitons',
                      link: 'algokit/languages/python/lg-calling-apps',
                    },
                    {
                      label: 'Compiling to AVM bytecode',
                      link: 'algokit/languages/python/overview',
                    },
                    {
                      label: 'Unsupported Python Features',
                      link: 'algokit/languages/python/lg-unsupported-python-features',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Unit Testing',
              collapsed: true,
              items: [
                {
                  label: 'TypeScript Unit Testing ',
                  items: [
                    {
                      label: 'Overview',
                      link: 'algokit/unit-testing/typescript/overview',
                    },
                    {
                      label: 'Concepts',
                      link: 'algokit/unit-testing/typescript/concepts',
                    },
                    {
                      label: 'AVM Types',
                      link: 'algokit/unit-testing/typescript/avm-types',
                    },
                    {
                      label: 'ARC4 Types',
                      link: 'algokit/unit-testing/typescript/arc4-types',
                    },
                    {
                      label: 'Transactions',
                      link: 'algokit/unit-testing/typescript/transactions',
                    },
                    {
                      label: 'Smart Contract Testing',
                      link: 'algokit/unit-testing/typescript/contract-testing',
                    },
                    {
                      label: 'Smart Signature Testing',
                      link: 'algokit/unit-testing/typescript/signature-testing',
                    },
                    {
                      label: 'State Management',
                      link: 'algokit/unit-testing/typescript/state-management',
                    },
                    {
                      label: 'AVM Opcodes',
                      link: 'algokit/unit-testing/typescript/opcodes',
                    },
                  ],
                },
                {
                  label: 'Python Unit Testing',
                  items: [
                    {
                      label: 'Overview',
                      link: 'algokit/unit-testing/python/overview',
                    },
                    {
                      label: 'Concepts',
                      link: 'algokit/unit-testing/python/concepts',
                    },
                    {
                      label: 'AVM Types',
                      link: 'algokit/unit-testing/python/avm-types',
                    },
                    {
                      label: 'ARC4 Types',
                      link: 'algokit/unit-testing/python/arc4-types',
                    },
                    {
                      label: 'Transactions',
                      link: 'algokit/unit-testing/python/transactions',
                    },
                    {
                      label: 'Smart Contract Testing',
                      link: 'algokit/unit-testing/python/contract-testing',
                    },
                    {
                      label: 'Smart Signature Testing',
                      link: 'algokit/unit-testing/python/signature-testing',
                    },
                    {
                      label: 'State Management',
                      link: 'algokit/unit-testing/python/state-management',
                    },
                    {
                      label: 'Subroutines',
                      link: 'algokit/unit-testing/python/subroutines',
                    },
                    {
                      label: 'AVM Opcodes',
                      link: 'algokit/unit-testing/python/opcodes',
                    },
                  ],
                },
              ],
            },
            {
              label: 'AVM Debugger',
              collapsed: true,
              items: [
                {
                  label: 'Overview',
                  link: 'algokit/avm-debugger',
                },
              ],
            },
            {
              label: 'Subscriber',
              collapsed: true,
              items: [
                {
                  label: 'Subscriber TypeScript',
                  items: [
                    {
                      label: 'Overview',
                      link: 'algokit/subscribers/typescript/overview',
                    },
                    {
                      label: 'Subsciber',
                      link: 'algokit/subscribers/typescript/subscriber',
                    },
                    {
                      label: 'Subscriptions',
                      link: 'algokit/subscribers/typescript/subscriptions',
                    },
                  ],
                },
                {
                  label: 'Subscriber Python',
                  items: [
                    {
                      label: 'Overview',
                      link: 'algokit/subscribers/python/overview',
                    },
                    {
                      label: 'Subsciber',
                      link: 'algokit/subscribers/python/subscriber',
                    },
                    {
                      label: 'Subscriptions',
                      link: 'algokit/subscribers/python/subscriptions',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Client Generators',
              collapsed: true,
              items: [
                {
                  label: 'Typescript',
                  link: 'algokit/client-generator/typescript',
                },
                {
                  label: 'Python',
                  link: 'algokit/client-generator/python',
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
          label: 'Reference',
          collapsed: true,
          items: [
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
                  items: [
                    {
                      label: 'arc4',
                      items: [
                        {
                          label: '-internal-',
                          items: [
                            {
                              label: 'classes',
                              items: [
                                {
                                  label: 'Arc4ArrayBase',
                                  link: 'reference/algorand-typescript/api-reference/arc4/-internal-/classes/arc4arraybase',
                                },
                                {
                                  label: 'StructBase',
                                  link: 'reference/algorand-typescript/api-reference/arc4/-internal-/classes/structbase',
                                },
                              ],
                            },
                            {
                              label: 'interfaces',
                              items: [
                                {
                                  label: 'classMethodDecoratorContext',
                                  link: 'reference/algorand-typescript/api-reference/arc4/-internal-/interfaces/classmethoddecoratorcontext',
                                },
                                {
                                  label: 'IterableIterator',
                                  link: 'reference/algorand-typescript/api-reference/arc4/-internal-/interfaces/iterableiterator',
                                },
                              ],
                            },
                            {
                              label: 'type-aliases',
                              items: [
                                {
                                  label: 'BigUintBitSize',
                                  link: 'reference/algorand-typescript/api-reference/arc4/-internal-/type-aliases/biguintbitsize',
                                },
                                {
                                  label: 'CompatForArc4Int',
                                  link: 'reference/algorand-typescript/api-reference/arc4/-internal-/type-aliases/compatforarc4int',
                                },
                                {
                                  label: 'ContractMethod',
                                  link: 'reference/algorand-typescript/api-reference/arc4/-internal-/type-aliases/contractmethod',
                                },
                                {
                                  label: 'NativeForArc4Int',
                                  link: 'reference/algorand-typescript/api-reference/arc4/-internal-/type-aliases/nativeforarc4int',
                                },
                                {
                                  label: 'Readonly',
                                  link: 'reference/algorand-typescript/api-reference/arc4/-internal-/type-aliases/readonly',
                                },
                                {
                                  label: 'StructConstructor',
                                  link: 'reference/algorand-typescript/api-reference/arc4/-internal-/type-aliases/structconstructor',
                                },
                                {
                                  label: 'UintBitSize',
                                  link: 'reference/algorand-typescript/api-reference/arc4/-internal-/type-aliases/uintbitsize',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          label: 'classes',
                          items: [
                            {
                              label: 'Address',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/address',
                            },
                            {
                              label: 'ARC4Encoded',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/arc4encoded',
                            },
                            {
                              label: 'Bool',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/bool',
                            },
                            {
                              label: 'Byte',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/byte',
                            },
                            {
                              label: 'Contract',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/contract',
                            },
                            {
                              label: 'DynamicArray',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/dynamicarray',
                            },
                            {
                              label: 'DynamicBytes',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/dynamicbytes',
                            },
                            {
                              label: 'StaticArray',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/staticarray',
                            },
                            {
                              label: 'StaticBytes',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/staticbytes',
                            },
                            {
                              label: 'Str',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/str',
                            },
                            {
                              label: 'Tuple',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/tuple',
                            },
                            {
                              label: 'UFixedNxM',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/ufixednxm',
                            },
                            {
                              label: 'UintN',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/uintn',
                            },
                            {
                              label: 'UintN8',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/uintn8',
                            },
                            {
                              label: 'UintN16',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/uintn16',
                            },
                            {
                              label: 'UintN32',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/uintn32',
                            },
                            {
                              label: 'UintN64',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/uintn64',
                            },
                            {
                              label: 'UintN128',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/uintn128',
                            },
                            {
                              label: 'UintN256',
                              link: 'reference/algorand-typescript/api-reference/arc4/classes/uintn256',
                            },
                          ],
                        },
                        {
                          label: 'enumerations',
                          items: [
                            {
                              label: 'OnCompleteAction',
                              link: 'reference/algorand-typescript/api-reference/arc4/enumerations/oncompleteaction',
                            },
                          ],
                        },
                        {
                          label: 'functions',
                          items: [
                            {
                              label: 'abimethod',
                              link: 'reference/algorand-typescript/api-reference/arc4/functions/abimethod',
                            },
                            {
                              label: 'baremethod',
                              link: 'reference/algorand-typescript/api-reference/arc4/functions/baremethod',
                            },
                            {
                              label: 'decodeArc4',
                              link: 'reference/algorand-typescript/api-reference/arc4/functions/decodearc4',
                            },
                            {
                              label: 'encodeArc4',
                              link: 'reference/algorand-typescript/api-reference/arc4/functions/encodearc4',
                            },
                            {
                              label: 'interpretAsArc4',
                              link: 'reference/algorand-typescript/api-reference/arc4/functions/interpretasarc4',
                            },
                            {
                              label: 'methodSelector',
                              link: 'reference/algorand-typescript/api-reference/arc4/functions/methodselector',
                            },
                          ],
                        },
                        {
                          label: 'type-aliases',
                          items: [
                            {
                              label: 'AbiMethodConfig',
                              link: 'reference/algorand-typescript/api-reference/arc4/type-aliases/abimethodconfig',
                            },
                            {
                              label: 'BareMethodConfig',
                              link: 'reference/algorand-typescript/api-reference/arc4/type-aliases/baremethodconfig',
                            },
                            {
                              label: 'BitSize',
                              link: 'reference/algorand-typescript/api-reference/arc4/type-aliases/bitsize',
                            },
                            {
                              label: 'CreateOptions',
                              link: 'reference/algorand-typescript/api-reference/arc4/type-aliases/createoptions',
                            },
                            {
                              label: 'DefaultArgument',
                              link: 'reference/algorand-typescript/api-reference/arc4/type-aliases/defaultargument',
                            },
                            {
                              label: 'OnCompleteActionStr',
                              link: 'reference/algorand-typescript/api-reference/arc4/type-aliases/oncompleteactionstr',
                            },
                          ],
                        },
                        {
                          label: 'variables',
                          items: [
                            {
                              label: 'Struct',
                              link: 'reference/algorand-typescript/api-reference/arc4/variables/struct',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'index',
                      items: [
                        {
                          label: '-internal-',
                          items: [
                            {
                              label: 'interfaces',
                              items: [
                                {
                                  label: 'ApplicationTxn',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/applicationtxn',
                                },
                                {
                                  label: 'ArrayIterator',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/arrayiterator',
                                },
                                {
                                  label: 'AssetConfigTxn',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/assetconfigtxn',
                                },
                                {
                                  label: 'AssetFreezeTxn',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/assetfreezetxn',
                                },
                                {
                                  label: 'AssetTransferTxn',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/assettransfertxn',
                                },
                                {
                                  label: 'ClassDecoratorContext',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/classdecoratorcontext',
                                },
                                {
                                  label: 'ConcatArray',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/concatarray',
                                },
                                {
                                  label: 'CreateBoxMapOptions',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/createboxmapoptions',
                                },
                                {
                                  label: 'CreateBoxOptions',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/createboxoptions',
                                },
                                {
                                  label: 'CreateBoxRefOptions',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/createboxrefoptions',
                                },
                                {
                                  label: 'Iterable',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/iterable',
                                },
                                {
                                  label: 'IteratorReturnResult',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/iteratorreturnresult',
                                },
                                {
                                  label: 'IteratorYieldResult',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/iteratoryieldresult',
                                },
                                {
                                  label: 'KeyRegistrationTxn',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/keyregistrationtxn',
                                },
                                {
                                  label: 'PaymentTxn',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/paymenttxn',
                                },
                                {
                                  label: 'TemplateStringsArray',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/templatestringsarray',
                                },
                                {
                                  label: 'TransactionBase',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/transactionbase',
                                },
                              ],
                            },
                            {
                              label: 'type-aliases',
                              items: [
                                {
                                  label: 'AccountInput',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/accountinput',
                                },
                                {
                                  label: 'ApplicationInput',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/applicationinput',
                                },
                                {
                                  label: 'AssetInput',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/assetinput',
                                },
                                {
                                  label: 'BuiltinIteratorReturn',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/builtiniteratorreturn',
                                },
                                {
                                  label: 'ComparisonFor',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/comparisonfor',
                                },
                                {
                                  label: 'ConstructorFor',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/constructorfor',
                                },
                                {
                                  label: 'ContractOptions',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/contractoptions',
                                },
                                {
                                  label: 'DecoratorMetadataObject',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/decoratormetadataobject',
                                },
                                {
                                  label: 'DeliberateAny',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/deliberateany',
                                },
                                {
                                  label: 'FlatArray',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/flatarray',
                                },
                                {
                                  label: 'IteratorResult',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/iteratorresult',
                                },
                                {
                                  label: 'LogicSigOptions',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/logicsigoptions',
                                },
                                {
                                  label: 'MatchTest',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/matchtest',
                                },
                                {
                                  label: 'NumberRange',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/numberrange',
                                },
                                {
                                  label: 'NumericComparison',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/numericcomparison',
                                },
                                {
                                  label: 'Partial',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/partial',
                                },
                                {
                                  label: 'PropertyKey',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/propertykey',
                                },
                                {
                                  label: 'Record',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/record',
                                },
                                {
                                  label: 'StateTotals',
                                  link: 'reference/algorand-typescript/api-reference/index/-internal-/type-aliases/statetotals',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          label: 'classes',
                          items: [
                            {
                              label: 'BaseContract',
                              link: 'reference/algorand-typescript/api-reference/index/classes/basecontract',
                            },
                            {
                              label: 'LogicSig',
                              link: 'reference/algorand-typescript/api-reference/index/classes/logicsig',
                            },
                            {
                              label: 'MutableArray',
                              link: 'reference/algorand-typescript/api-reference/index/classes/mutablearray',
                            },
                          ],
                        },
                        {
                          label: 'enumerations',
                          items: [
                            {
                              label: 'OpUpFeeSource',
                              link: 'reference/algorand-typescript/api-reference/index/enumerations/opupfeesource',
                            },
                            {
                              label: 'TransactionType',
                              link: 'reference/algorand-typescript/api-reference/index/enumerations/transactiontype',
                            },
                          ],
                        },
                        {
                          label: 'functions',
                          items: [
                            {
                              label: 'Account',
                              link: 'reference/algorand-typescript/api-reference/index/functions/account',
                            },
                            {
                              label: 'Application',
                              link: 'reference/algorand-typescript/api-reference/index/functions/application',
                            },
                            {
                              label: 'assert',
                              link: 'reference/algorand-typescript/api-reference/index/functions/assert',
                            },
                            {
                              label: 'assertMatch',
                              link: 'reference/algorand-typescript/api-reference/index/functions/assertmatch',
                            },
                            {
                              label: 'Asset',
                              link: 'reference/algorand-typescript/api-reference/index/functions/asset',
                            },
                            {
                              label: 'BigUint',
                              link: 'reference/algorand-typescript/api-reference/index/functions/biguint',
                            },
                            {
                              label: 'Box',
                              link: 'reference/algorand-typescript/api-reference/index/functions/box',
                            },
                            {
                              label: 'BoxMap',
                              link: 'reference/algorand-typescript/api-reference/index/functions/boxmap',
                            },
                            {
                              label: 'BoxRef',
                              link: 'reference/algorand-typescript/api-reference/index/functions/boxref',
                            },
                            {
                              label: 'Bytes',
                              link: 'reference/algorand-typescript/api-reference/index/functions/bytes',
                            },
                            {
                              label: 'compile',
                              link: 'reference/algorand-typescript/api-reference/index/functions/compile',
                            },
                            {
                              label: 'contract',
                              link: 'reference/algorand-typescript/api-reference/index/functions/contract',
                            },
                            {
                              label: 'emit',
                              link: 'reference/algorand-typescript/api-reference/index/functions/emit',
                            },
                            {
                              label: 'ensureBudget',
                              link: 'reference/algorand-typescript/api-reference/index/functions/ensurebudget',
                            },
                            {
                              label: 'err',
                              link: 'reference/algorand-typescript/api-reference/index/functions/err',
                            },
                            {
                              label: 'GlobalState',
                              link: 'reference/algorand-typescript/api-reference/index/functions/globalstate',
                            },
                            {
                              label: 'log',
                              link: 'reference/algorand-typescript/api-reference/index/functions/log',
                            },
                            {
                              label: 'logicsig',
                              link: 'reference/algorand-typescript/api-reference/index/functions/logicsig',
                            },
                            {
                              label: 'match',
                              link: 'reference/algorand-typescript/api-reference/index/functions/match',
                            },
                            {
                              label: 'TemplateVar',
                              link: 'reference/algorand-typescript/api-reference/index/functions/templatevar',
                            },
                            {
                              label: 'Uint64',
                              link: 'reference/algorand-typescript/api-reference/index/functions/uint64',
                            },
                            {
                              label: 'urange',
                              link: 'reference/algorand-typescript/api-reference/index/functions/urange',
                            },
                          ],
                        },
                        {
                          label: 'interfaces',
                          items: [
                            {
                              label: 'BytesBacked',
                              link: 'reference/algorand-typescript/api-reference/index/interfaces/bytesbacked',
                            },
                          ],
                        },
                        {
                          label: 'namespaces',
                          items: [
                            {
                              label: 'gtxn',
                              items: [
                                {
                                  label: 'functions',
                                  items: [
                                    {
                                      label: 'ApplicationTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/gtxn/functions/applicationtxn',
                                    },
                                    {
                                      label: 'AssetConfigTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/gtxn/functions/assetconfigtxn',
                                    },
                                    {
                                      label: 'AssetFreezeTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/gtxn/functions/assetfreezetxn',
                                    },
                                    {
                                      label: 'AssetTransferTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/gtxn/functions/assettransfertxn',
                                    },
                                    {
                                      label: 'KeyRegistrationTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/gtxn/functions/keyregistrationtxn',
                                    },
                                    {
                                      label: 'PaymentTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/gtxn/functions/paymenttxn',
                                    },
                                    {
                                      label: 'Transaction',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/gtxn/functions/transaction',
                                    },
                                  ],
                                },
                                {
                                  label: 'interfaces',
                                  items: [
                                    {
                                      label: 'ApplicationTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/gtxn/interfaces/applicationtxn',
                                    },
                                    {
                                      label: 'AssetConfigTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/gtxn/interfaces/assetconfigtxn',
                                    },
                                    {
                                      label: 'AssetFreezeTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/gtxn/interfaces/assetfreezetxn',
                                    },
                                    {
                                      label: 'AssetTransferTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/gtxn/interfaces/assettransfertxn',
                                    },
                                    {
                                      label: 'KeyRegistrationTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/gtxn/interfaces/keyregistrationtxn',
                                    },
                                    {
                                      label: 'PaymentTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/gtxn/interfaces/paymenttxn',
                                    },
                                  ],
                                },
                                {
                                  label: 'type-aliases',
                                  items: [
                                    {
                                      label: 'Transaction',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/gtxn/type-aliases/transaction',
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              label: 'itxn',
                              items: [
                                {
                                  label: 'functions',
                                  items: [
                                    {
                                      label: 'ApplicationCall',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/functions/applicationcall',
                                    },
                                    {
                                      label: 'AssetConfig',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/functions/assetconfig',
                                    },
                                    {
                                      label: 'AssetFreeze',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/functions/assetfreeze',
                                    },
                                    {
                                      label: 'AssetTransfer',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/functions/assettransfer',
                                    },
                                    {
                                      label: 'KeyRegistration',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/functions/keyregistration',
                                    },
                                    {
                                      label: 'Payment',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/functions/payment',
                                    },
                                    {
                                      label: 'SubmitGroup',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/functions/submitgroup',
                                    },
                                  ],
                                },
                                {
                                  label: 'interfaces',
                                  items: [
                                    {
                                      label: 'ApplicationCallFields',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/applicationcallfields',
                                    },
                                    {
                                      label: 'ApplicationCallItxnParams',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/applicationcallitxnparams',
                                    },
                                    {
                                      label: 'ApplicationInnerTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/applicationinnertxn',
                                    },
                                    {
                                      label: 'AssetConfigFields',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/assetconfigfields',
                                    },
                                    {
                                      label: 'AssetConfigItxnParams',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/assetconfigitxnparams',
                                    },
                                    {
                                      label: 'AssetConfigInnerTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/assetconfiginnertxn',
                                    },
                                    {
                                      label: 'AssetFreezeField',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/assetfreezetxn',
                                    },
                                    {
                                      label: 'AssetFreezeInnerTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/assetfreezeinnertxn',
                                    },
                                    {
                                      label: 'AssetFreezeItxnParams',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/assetfreezeitxnparams',
                                    },
                                    {
                                      label: 'AssetTransferFields',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/assettransferfields',
                                    },
                                    {
                                      label: 'AssetTransferInnerTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/assettransferinnertxn',
                                    },
                                    {
                                      label: 'AssetTransferItxnParams',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/assettransferitxnparams',
                                    },
                                    {
                                      label: 'CommonTransactionFields',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/commontransactionfields',
                                    },
                                    {
                                      label: 'KeyRegistrationFields',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/keyregistrationfields',
                                    },
                                    {
                                      label: 'KeyRegistrationInnerTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/keyregistrationinnertxn',
                                    },
                                    {
                                      label: 'KeyRegistrationItxnParams',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/keyregistrationitxnparams',
                                    },
                                    {
                                      label: 'PaymentFields',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/paymentfields',
                                    },
                                    {
                                      label: 'PaymentInnerTxn',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/paymentinnertxn',
                                    },
                                    {
                                      label: 'PaymentItxnParams',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/interfaces/paymentitxnparams',
                                    },
                                  ],
                                },
                                {
                                  label: 'type-aliases',
                                  items: [
                                    {
                                      label: 'InnerTransaction',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/type-aliases/innertransaction',
                                    },
                                    {
                                      label: 'InnerTxnList',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/type-aliases/innertxnlist',
                                    },
                                    {
                                      label: 'TxnFor',
                                      link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/type-aliases/txnfor',
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          label: 'type-aliases',
                          items: [
                            {
                              label: 'Account',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/account',
                            },
                            {
                              label: 'Application',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/application',
                            },
                            {
                              label: 'Asset',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/asset',
                            },
                            {
                              label: 'biguint',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/biguint',
                            },
                            {
                              label: 'BigUintCompat',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/biguintcompat',
                            },
                            {
                              label: 'Box',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/box',
                            },
                            {
                              label: 'BoxMap',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/boxmap',
                            },
                            {
                              label: 'BoxRef',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/boxref',
                            },
                            {
                              label: 'bytes',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/bytes',
                            },
                            {
                              label: 'bytesCompat',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/bytescompat',
                            },
                            {
                              label: 'CompileContractOptions',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/compilecontractoptions',
                            },
                            {
                              label: 'CompiledContract',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/compiledcontract',
                            },
                            {
                              label: 'CompiledLogicSig',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/compiledlogicsig',
                            },
                            {
                              label: 'CompileLogicSigOptions',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/compilelogicsigoptions',
                            },
                            {
                              label: 'GlobalState',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/globalstate',
                            },
                            {
                              label: 'GlobalStateOptions',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/globalstateoptions',
                            },
                            {
                              label: 'LocalState',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/localstate',
                            },
                            {
                              label: 'LocalStateForAccount',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/localstateforaccount',
                            },
                            {
                              label: 'LocalStateOptions',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/localstateoptions',
                            },
                            {
                              label: 'StringCompat',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/stringcompat',
                            },
                            {
                              label: 'uint64',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/uint64',
                            },
                            {
                              label: 'Uint64Compat',
                              link: 'reference/algorand-typescript/api-reference/index/type-aliases/uint64compat',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'op',
                      items: [
                        {
                          label: 'enumerations',
                          items: [
                            {
                              label: 'Base64',
                              link: 'reference/algorand-typescript/api-reference/op/enumerations/base64',
                            },
                            {
                              label: 'Ec',
                              link: 'reference/algorand-typescript/api-reference/op/enumerations/ec',
                            },
                            {
                              label: 'Ecdsa',
                              link: 'reference/algorand-typescript/api-reference/op/enumerations/ecdsa',
                            },
                            {
                              label: 'MimcConfigurations',
                              link: 'reference/algorand-typescript/api-reference/op/enumerations/mimcconfigurations',
                            },
                            {
                              label: 'VrfVerify',
                              link: 'reference/algorand-typescript/api-reference/op/enumerations/vrfverify',
                            },
                          ],
                        },
                        {
                          label: 'functions',
                          items: [
                            {
                              label: 'addw',
                              link: 'reference/algorand-typescript/api-reference/op/functions/addw',
                            },
                            {
                              label: 'appOptedIn',
                              link: 'reference/algorand-typescript/api-reference/op/functions/appoptedin',
                            },
                            {
                              label: 'arg',
                              link: 'reference/algorand-typescript/api-reference/op/functions/arg',
                            },
                            {
                              label: 'balance',
                              link: 'reference/algorand-typescript/api-reference/op/functions/balance',
                            },
                            {
                              label: 'base64Decode',
                              link: 'reference/algorand-typescript/api-reference/op/functions/base64decode',
                            },
                            {
                              label: 'bitLength',
                              link: 'reference/algorand-typescript/api-reference/op/functions/bitlength',
                            },
                            {
                              label: 'bsqrt',
                              link: 'reference/algorand-typescript/api-reference/op/functions/bsqrt',
                            },
                            {
                              label: 'btoi',
                              link: 'reference/algorand-typescript/api-reference/op/functions/btoi',
                            },
                            {
                              label: 'bzero',
                              link: 'reference/algorand-typescript/api-reference/op/functions/bzero',
                            },
                            {
                              label: 'concat',
                              link: 'reference/algorand-typescript/api-reference/op/functions/concat',
                            },
                            {
                              label: 'divmodw',
                              link: 'reference/algorand-typescript/api-reference/op/functions/divmodw',
                            },
                            {
                              label: 'divw',
                              link: 'reference/algorand-typescript/api-reference/op/functions/divw',
                            },
                            {
                              label: 'ecdsaPkDecompress',
                              link: 'reference/algorand-typescript/api-reference/op/functions/ecdsapkdecompress',
                            },
                            {
                              label: 'ecdsaPkRecover',
                              link: 'reference/algorand-typescript/api-reference/op/functions/ecdsapkrecover',
                            },
                            {
                              label: 'ecdsaVerify',
                              link: 'reference/algorand-typescript/api-reference/op/functions/ecdsaverify',
                            },
                            {
                              label: 'ed25519verify',
                              link: 'reference/algorand-typescript/api-reference/op/functions/ed25519verify',
                            },
                            {
                              label: 'ed25519verifyBare',
                              link: 'reference/algorand-typescript/api-reference/op/functions/ed25519verifybare',
                            },
                            {
                              label: 'exp',
                              link: 'reference/algorand-typescript/api-reference/op/functions/exp',
                            },
                            {
                              label: 'expw',
                              link: 'reference/algorand-typescript/api-reference/op/functions/expw',
                            },
                            {
                              label: 'extract',
                              link: 'reference/algorand-typescript/api-reference/op/functions/extract',
                            },
                            {
                              label: 'extractUint16',
                              link: 'reference/algorand-typescript/api-reference/op/functions/extractuint16',
                            },
                            {
                              label: 'extractUint32',
                              link: 'reference/algorand-typescript/api-reference/op/functions/extractuint32',
                            },
                            {
                              label: 'extractUint64',
                              link: 'reference/algorand-typescript/api-reference/op/functions/extractuint64',
                            },
                            {
                              label: 'falconVerify',
                              link: 'reference/algorand-typescript/api-reference/op/functions/falconverify',
                            },
                            {
                              label: 'gaid',
                              link: 'reference/algorand-typescript/api-reference/op/functions/gaid',
                            },
                            {
                              label: 'getBit',
                              link: 'reference/algorand-typescript/api-reference/op/functions/getbit',
                            },
                            {
                              label: 'getByte',
                              link: 'reference/algorand-typescript/api-reference/op/functions/getbyte',
                            },
                            {
                              label: 'gloadBytes',
                              link: 'reference/algorand-typescript/api-reference/op/functions/gloadbytes',
                            },
                            {
                              label: 'itob',
                              link: 'reference/algorand-typescript/api-reference/op/functions/itob',
                            },
                            {
                              label: 'keccak256',
                              link: 'reference/algorand-typescript/api-reference/op/functions/keccak256',
                            },
                            {
                              label: 'len',
                              link: 'reference/algorand-typescript/api-reference/op/functions/len',
                            },
                            {
                              label: 'mimc',
                              link: 'reference/algorand-typescript/api-reference/op/functions/mimc',
                            },
                            {
                              label: 'minBalance',
                              link: 'reference/algorand-typescript/api-reference/op/functions/minbalance',
                            },
                            {
                              label: 'mulw',
                              link: 'reference/algorand-typescript/api-reference/op/functions/mulw',
                            },
                            {
                              label: 'onlineStake',
                              link: 'reference/algorand-typescript/api-reference/op/functions/onlinestake',
                            },
                            {
                              label: 'replace',
                              link: 'reference/algorand-typescript/api-reference/op/functions/replace',
                            },
                            {
                              label: 'select',
                              link: 'reference/algorand-typescript/api-reference/op/functions/select',
                            },
                            {
                              label: 'setBit',
                              link: 'reference/algorand-typescript/api-reference/op/functions/setbit',
                            },
                            {
                              label: 'setByte',
                              link: 'reference/algorand-typescript/api-reference/op/functions/setbyte',
                            },
                            {
                              label: 'sha3_256',
                              link: 'reference/algorand-typescript/api-reference/op/functions/sha3_256',
                            },
                            {
                              label: 'sha256',
                              link: 'reference/algorand-typescript/api-reference/op/functions/sha256',
                            },
                            {
                              label: 'sha512_256',
                              link: 'reference/algorand-typescript/api-reference/op/functions/sha512_256',
                            },
                            {
                              label: 'shl',
                              link: 'reference/algorand-typescript/api-reference/op/functions/shl',
                            },
                            {
                              label: 'shr',
                              link: 'reference/algorand-typescript/api-reference/op/functions/shr',
                            },
                            {
                              label: 'sqrt',
                              link: 'reference/algorand-typescript/api-reference/op/functions/sqrt',
                            },
                            {
                              label: 'substring',
                              link: 'reference/algorand-typescript/api-reference/op/functions/substring',
                            },
                            {
                              label: 'sumhash512',
                              link: 'reference/algorand-typescript/api-reference/op/functions/sumhash512',
                            },
                            {
                              label: 'vrfVerify',
                              link: 'reference/algorand-typescript/api-reference/op/functions/vrfverify',
                            },
                          ],
                        },
                        {
                          label: 'variables',
                          items: [
                            {
                              label: 'AcctParams',
                              link: 'reference/algorand-typescript/api-reference/op/variables/acctparams',
                            },
                            {
                              label: 'AppGlobal',
                              link: 'reference/algorand-typescript/api-reference/op/variables/appglobal',
                            },
                            {
                              label: 'AppLocal',
                              link: 'reference/algorand-typescript/api-reference/op/variables/applocal',
                            },
                            {
                              label: 'AppParams',
                              link: 'reference/algorand-typescript/api-reference/op/variables/appparams',
                            },
                            {
                              label: 'AssetHolding',
                              link: 'reference/algorand-typescript/api-reference/op/variables/assetholding',
                            },
                            {
                              label: 'AssetParams',
                              link: 'reference/algorand-typescript/api-reference/op/variables/assetparams',
                            },
                            {
                              label: 'Block',
                              link: 'reference/algorand-typescript/api-reference/op/variables/block',
                            },
                            {
                              label: 'Box',
                              link: 'reference/algorand-typescript/api-reference/op/variables/box',
                            },
                            {
                              label: 'EllipticCurve',
                              link: 'reference/algorand-typescript/api-reference/op/variables/ellipticcurve',
                            },
                            {
                              label: 'GITxn',
                              link: 'reference/algorand-typescript/api-reference/op/variables/gitxn',
                            },
                            {
                              label: 'Global',
                              link: 'reference/algorand-typescript/api-reference/op/variables/global',
                            },
                            {
                              label: 'GTxn',
                              link: 'reference/algorand-typescript/api-reference/op/variables/gtxn',
                            },
                            {
                              label: 'ITxn',
                              link: 'reference/algorand-typescript/api-reference/op/variables/itxn',
                            },
                            {
                              label: 'ITxnCreate',
                              link: 'reference/algorand-typescript/api-reference/op/variables/itxncreate',
                            },
                            {
                              label: 'JsonRef',
                              link: 'reference/algorand-typescript/api-reference/op/variables/jsonref',
                            },
                            {
                              label: 'Scratch',
                              link: 'reference/algorand-typescript/api-reference/op/variables/scratch',
                            },
                            {
                              label: 'Txn',
                              link: 'reference/algorand-typescript/api-reference/op/variables/txn',
                            },
                            {
                              label: 'VoterParams',
                              link: 'reference/algorand-typescript/api-reference/op/variables/voterparams',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Overview',
                  link: 'reference/algorand-typescript/overview',
                },
              ],
            },
            {
              label: 'AlgoKit CLI',
              collapsed: true,
              items: [
                {
                  label: 'Command Reference',
                  link: 'reference/algokit-cli',
                },
              ],
            },
            {
              label: 'AlgoKit Utils (Python)',
              collapsed: true,
              items: [
                {
                  label: 'API Reference',
                  autogenerate: {
                    directory: 'reference/algokit-utils-py/api',
                  },
                },
              ],
            },
            {
              label: 'AlgoKit Utils (Typescript)',
              collapsed: true,
              items: [
                {
                  label: 'API Reference',
                  autogenerate: {
                    directory: 'reference/algokit-utils-ts/api',
                  },
                },
              ],
            },
            {
              label: 'Algorand TEAL',
              collapsed: true,
              items: [
                {
                  label: 'AVM Opcodes',
                  link: 'reference/algorand-teal/opcodes',
                },
              ],
            },
            {
              label: 'SDK',
              collapsed: true,
              items: [
                {
                  label: 'Algorand SDK List',
                  link: 'reference/sdk/sdk-list',
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
                algodAPIDocsSidebarGroup,
                indexerAPIDocsSidebarGroup,
                kmdAPIDocsSidebarGroup,
              ],
            },
            {
              label: 'ARC Standards',
              collapsed: true,
              autogenerate: {
                directory: 'arc-standards',
              },
            },
          ],
        },
        {
          label: 'Additional Resources',
          collapsed: true,
          items: [
            {
              label: 'Overview',
              link: 'resources/overview',
            },
            {
              label: 'Algorand Specifications',
              link: 'https://specs.algorand.co',
              attrs: { target: '_blank', rel: 'noopener' },
            },
          ],
        },
      ],
    }),
    icon(),
    // https://astro-d2.vercel.app/configuration
    d2({
      sketch: true,
      layout: 'dagre',
    }),
  ],
  markdown: {
    rehypePlugins: [
      [rehypeAstroRelativeMarkdownLinks, { collectionBase: false }],
      [rehypeExternalLinks, { target: '_blank', rel: 'noopener noreferrer' }],
    ],
  },
  vite: {
    resolve: {
      alias: {
        '@assets': resolve('./src/assets'),
        '@images': resolve('./src/assets/images'),
        '@diagrams': resolve('./src/assets/diagrams/svg'),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      },
    },
    plugins: [
      tailwindcss({
        content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
      }),
    ],
    ssr: {
      noExternal: ['@astrojs/starlight-tailwind'],
    },
  },
});
