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
          exclude: ['**/reference/rest-api/**', '**/reference/sdk/**', 'http://localhost**'],
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
        PageTitle: './src/components/PageTitle.astro',
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
              label: 'AlgoKit 3.0 Video Course',
              link: 'https://youtube.com/playlist?list=PLwRyHoehE4356E8tPKxC2XJtFEyLOHHEB&si=kfoKgu0jVObIJGWO',
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
                      label: 'Language Guide',
                      link: 'algokit/languages/typescript/language-guide',
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
                      link: 'algokit/languages/typescript/guiding-principles',
                    },
                    {
                      label: 'Migration Guides',
                      link: 'algokit/languages/typescript/migration-guides',
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
                      label: 'Migration Guide v4.x to 5.0',
                      link: 'algokit/languages/python/lg-migration-4-5',
                    },
                    {
                      label: 'Language Guide',
                      link: 'algokit/languages/python/language-guide',
                    },
                    {
                      label: 'Guiding Principles',
                      link: 'algokit/languages/python/principles',
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
                      label: 'Python Built-Ins',
                      link: 'algokit/languages/python/lg-builtins',
                    },
                    {
                      label: 'Error Handling and Assertions',
                      link: 'algokit/languages/python/lg-errors',
                    },
                    {
                      label: 'Data Structures',
                      link: 'algokit/languages/python/lg-data-structures',
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
              label: 'Language Servers',
              collapsed: true,
              items: [
                {
                  label: 'Algorand Python',
                  link: 'algokit/language-servers/algorand-python',
                },
                {
                  label: 'Algorand TypeScript',
                  link: 'algokit/language-servers/algorand-typescript',
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
                      link: 'algokit/subscriber/typescript/overview',
                    },
                    {
                      label: 'Subscriber',
                      link: 'algokit/subscriber/typescript/subscriber',
                    },
                    {
                      label: 'Subscriptions',
                      link: 'algokit/subscriber/typescript/subscriptions',
                    },
                    {
                      label: 'v3 Migration Guide',
                      link: 'algokit/subscriber/typescript/v3-migration',
                    },
                  ],
                },
                {
                  label: 'Subscriber Python',
                  items: [
                    {
                      label: 'Overview',
                      link: 'algokit/subscriber/python/overview',
                    },
                    {
                      label: 'Subsciber',
                      link: 'algokit/subscriber/python/subscriber',
                    },
                    {
                      label: 'Subscriptions',
                      link: 'algokit/subscriber/python/subscriptions',
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
                {
                  label: 'Configuring P2P',
                  link: 'nodes/management/p2p-config',
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
                  label: 'Repeater Node Configuration',
                  link: 'nodes/reference/repeater-config',
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
              autogenerate: {
                directory: 'reference/algorand-python/api',
              },
            },
            {
              label: 'Algorand Typescript',
              autogenerate: {
                directory: 'reference/algorand-typescript/api',
              },
              collapsed: true,
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
              autogenerate: {
                directory: 'reference/algokit-utils-py/api',
              },
            },
            {
              label: 'AlgoKit Utils (Typescript)',
              collapsed: true,
              autogenerate: {
                directory: 'reference/algokit-utils-ts/api',
              },
            },
            // {
            //   label: 'AlgoKit Subscriber (Typescript)',
            //   collapsed: true,
            //   autogenerate: {
            //     directory: 'reference/algokit-subscriber-ts/api',
            //   },
            // },
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
          label: 'Bulletins',
          collapsed: true,

          autogenerate: {
            directory: 'bulletins',
          },
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
              label: 'Liquid Auth',
              link: 'resources/liquid-auth',
            },
            {
              label: 'Algorand Specifications',
              link: 'https://specs.algorand.co',
              attrs: { target: '_blank', rel: 'noopener' },
            },
            {
              label: 'Configuring P2P on FUNC',
              link: 'resources/p2p-func',
            },
          ],
        },
      ],
    }),
    icon(),
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
        '@components': resolve('./src/components'),
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
