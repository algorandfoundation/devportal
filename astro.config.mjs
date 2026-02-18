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
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { sidebarEntries as algokitUtilsSidebar } from './imports/configs/algokit-utils/sidebar.config.js';
import { sidebarEntries as algokitCliSidebar } from './imports/configs/algokit-cli/sidebar.config.js';
import { sidebarEntries as algorandPythonSidebar } from './imports/configs/algorand-python/sidebar.config.js';
import { sidebarEntries as algorandTypescriptSidebar } from './imports/configs/algorand-typescript/sidebar.config.js';
import { sidebarEntries as algokitSubscriberSidebar } from './imports/configs/algokit-subscriber/sidebar.config.js';
import { sidebarEntries as nodekitSidebar } from './imports/configs/nodekit/sidebar.config.js';

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
          errorOnRelativeLinks: true,
          errorOnInvalidHashes: false,
          errorOnLocalLinks: false,
          exclude: ({ link, slug }) => {
            // --- Page-level excludes (all links on these pages) ---
            if (slug.startsWith('reference/rest-api/')) return true;
            if (slug.startsWith('reference/sdk/')) return true;

            // --- Link-level excludes (imported content artifacts) ---

            // Empty links from Sphinx/MkDocs conversion: [text]()
            if (!link || link.trim() === '') return true;

            // TypeDoc HTML cross-refs and source file refs
            if (/\.html(#|$)/.test(link)) return true;
            if (link.startsWith('src/')) return true;
            if (link.includes('-internal-')) return true;

            // Internal repo paths (not site pages)
            if (link.startsWith('docs/markdown/autoapi/')) return true;
            if (link.startsWith('docs/architecture-decisions/')) return true;
            if (link.startsWith('docs/abi-routing')) return true;
            if (link.startsWith('docs/_build/')) return true;
            if (/(?:^|\/)README(#|$)/.test(link)) return true;

            // Malformed markdown links: [https://...](https://...)
            if (link.startsWith('[http')) return true;

            // External spec reference in opcodes page
            if (link === 'jsonspec.md') return true;

            // Links TO OpenAPI-generated pages (hashes can't be validated)
            if (link.startsWith('/reference/rest-api/')) return true;

            // TypeDoc code module refs in imported guides
            if (link.includes('/code/modules/')) return true;

            // Subscriber docs — heavily cross-linked imported pages
            if (
              slug.startsWith('algokit/subscriber/') ||
              slug.startsWith('docs/algokit-subscriber/')
            )
              return true;

            // Unit-testing docs — references unimported sibling pages
            if (slug.startsWith('algokit/unit-testing/')) return true;

            // AlgoKit Utils legacy guides — untransformed autoapi refs
            if (slug.startsWith('algokit/utils/')) return true;

            // Algorand TypeScript API docs — TypeDoc cross-refs
            if (/^docs\/algorand-typescript\/.*\/api\//.test(slug)) return true;

            // ARC standards — cross-references between ARC spec pages
            if (slug.startsWith('arc-standards/') && /^\.\/arc-\d+/.test(link)) return true;

            return false;
          },
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
              paths: ['docs/algorand-typescript/typescript/latest/api/**'],
            },
            {
              label: 'Python - Reference',
              description: 'Algorand Developer Portal - Python Reference Docs',
              paths: ['docs/algorand-python/python/latest/api/**'],
            },
            {
              label: 'Typescript',
              description: 'Algorand Developer Portal - Typescript Docs',
              paths: ['docs/algorand-typescript/typescript/latest/**'],
            },
            {
              label: 'Python',
              description: 'Algorand Developer Portal - Python Docs',
              paths: ['docs/algorand-python/python/latest/**'],
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
          content: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5XBZ7HB');`,
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
        Sidebar: './src/components/Sidebar.astro',
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
            { slug: 'getting-started/portal-guide' },
            { slug: 'getting-started/algokit-quick-start' },
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
            { slug: 'getting-started/why-algorand' },
            { slug: 'getting-started/ethereum-to-algorand' },
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
                { slug: 'concepts/accounts/overview' },
                { slug: 'concepts/accounts/create' },
                { slug: 'concepts/accounts/funding' },
                { slug: 'concepts/accounts/keys-signing' },
                { slug: 'concepts/accounts/rekeying' },
                { slug: 'concepts/accounts/multisig' },
              ],
            },
            {
              label: 'Transactions',
              collapsed: true,
              items: [
                { slug: 'concepts/transactions/overview' },
                { slug: 'concepts/transactions/types' },
                { slug: 'concepts/transactions/fees' },
                { slug: 'concepts/transactions/atomic-txn-groups' },
                { slug: 'concepts/transactions/signing' },
                { slug: 'concepts/transactions/blocks' },
                { slug: 'concepts/transactions/leases' },
                { slug: 'concepts/transactions/uri-scheme' },
                { slug: 'concepts/transactions/reference' },
              ],
            },
            {
              label: 'Assets',
              collapsed: true,
              items: [
                { slug: 'concepts/assets/overview' },
                { slug: 'concepts/assets/asset-operations' },
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
                { slug: 'concepts/smart-contracts/overview' },
                { slug: 'concepts/smart-contracts/avm' },
                {
                  label: 'Languages',
                  collapsed: false,
                  items: [
                    { slug: 'concepts/smart-contracts/languages/python' },
                    { slug: 'concepts/smart-contracts/languages/typescript' },
                    { slug: 'concepts/smart-contracts/languages/teal' },
                  ],
                },
                { slug: 'concepts/smart-contracts/apps' },
                { slug: 'concepts/smart-contracts/abi' },
                { slug: 'concepts/smart-contracts/control-flow' },
                { slug: 'concepts/smart-contracts/inner-txn' },
                { slug: 'concepts/smart-contracts/resource-usage' },
                { slug: 'concepts/smart-contracts/opcodes-overview' },
                { slug: 'concepts/smart-contracts/logic-sigs' },
                { slug: 'concepts/smart-contracts/costs-constraints' },
                {
                  label: 'Data Storage',
                  collapsed: true,
                  items: [
                    { slug: 'concepts/smart-contracts/storage/overview' },
                    { slug: 'concepts/smart-contracts/storage/local' },
                    { slug: 'concepts/smart-contracts/storage/global' },
                    { slug: 'concepts/smart-contracts/storage/box' },
                    { slug: 'concepts/smart-contracts/storage/scratch' },
                    { slug: 'concepts/smart-contracts/storage/encoding-decoding' },
                  ],
                },
                { slug: 'concepts/smart-contracts/cryptographic-tools' },
                { slug: 'concepts/smart-contracts/lifecycle' },
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
                { slug: 'concepts/protocol/overview' },
                { slug: 'concepts/protocol/protocol-parameters' },
                { slug: 'concepts/protocol/partkey-management' },
                { slug: 'concepts/protocol/registration' },
                { slug: 'concepts/protocol/staking-rewards' },
                { slug: 'concepts/protocol/state-proofs' },
                { slug: 'concepts/protocol/networks' },
                { slug: 'concepts/protocol/randomness' },
              ],
            },
          ],
        },
        {
          label: 'Build With AlgoKit',
          collapsed: false,
          items: [
            { slug: 'algokit/algokit-intro' },
            {
              label: 'CLI Tools',
              collapsed: true,
              items: [
                { slug: 'algokit/cli/overview' },
                { slug: 'algokit/cli/compile' },
                { slug: 'algokit/cli/completions' },
                { slug: 'algokit/cli/config' },
                { slug: 'algokit/cli/dispenser' },
                { slug: 'algokit/cli/doctor' },
                { slug: 'algokit/cli/explore' },
                { slug: 'algokit/cli/generate' },
                { slug: 'algokit/cli/goal' },
                { slug: 'algokit/cli/init' },
                { slug: 'algokit/cli/localnet' },
                {
                  label: 'Project',
                  collapsed: true,
                  items: [
                    { slug: 'algokit/cli/project' },
                    { slug: 'algokit/cli/project/bootstrap' },
                    { slug: 'algokit/cli/project/deploy' },
                    { slug: 'algokit/cli/project/link' },
                    { slug: 'algokit/cli/project/list' },
                    { slug: 'algokit/cli/project/run' },
                  ],
                },
                {
                  label: 'Tasks',
                  collapsed: true,
                  items: [
                    { slug: 'algokit/cli/tasks' },
                    { slug: 'algokit/cli/tasks/analyze' },
                    { slug: 'algokit/cli/tasks/ipfs' },
                    { slug: 'algokit/cli/tasks/mint' },
                    { slug: 'algokit/cli/tasks/nfd' },
                    { slug: 'algokit/cli/tasks/opt' },
                    { slug: 'algokit/cli/tasks/send' },
                    { slug: 'algokit/cli/tasks/sign' },
                    { slug: 'algokit/cli/tasks/transfer' },
                    { slug: 'algokit/cli/tasks/vanity_address' },
                    { slug: 'algokit/cli/tasks/wallet' },
                  ],
                },
              ],
            },
            {
              label: 'LORA the Explorer',
              collapsed: true,
              items: [{ slug: 'algokit/lora/overview' }],
            },
            {
              label: 'Project Templates',
              collapsed: true,
              items: [
                { slug: 'algokit/project-structure' },
                { slug: 'algokit/official-algokit-templates' },
                { slug: 'algokit/custom-algokit-templates' },
              ],
            },
            {
              label: 'AlgoKit Utils',
              collapsed: true,
              items: [
                { slug: 'algokit/utils/algokit-clients' },
                {
                  label: 'TypeScript',
                  items: [
                    { slug: 'algokit/utils/typescript/overview' },
                    { slug: 'algokit/utils/typescript/account' },
                    { slug: 'algokit/utils/typescript/algorand-client' },
                    { slug: 'algokit/utils/typescript/amount' },
                    { slug: 'algokit/utils/typescript/app-client' },
                    { slug: 'algokit/utils/typescript/app-deploy' },
                    { slug: 'algokit/utils/typescript/asset' },
                    { slug: 'algokit/utils/typescript/client' },
                    { slug: 'algokit/utils/typescript/debugging' },
                    { slug: 'algokit/utils/typescript/dispenser-client' },
                    { slug: 'algokit/utils/typescript/event-emitter' },
                    { slug: 'algokit/utils/typescript/indexer' },
                    { slug: 'algokit/utils/typescript/dispenser-client' },
                    { slug: 'algokit/utils/typescript/testing' },
                    { slug: 'algokit/utils/typescript/transaction-composer' },
                    { slug: 'algokit/utils/typescript/transaction' },
                    { slug: 'algokit/utils/typescript/transfer' },
                    { slug: 'algokit/utils/typescript/typed-app-clients' },
                    { slug: 'algokit/utils/typescript/v7-migration' },
                    { slug: 'algokit/utils/typescript/v8-migration' },
                  ],
                },
                {
                  label: 'Python',
                  items: [
                    { slug: 'algokit/utils/python/overview' },
                    { slug: 'algokit/utils/python/account' },
                    { slug: 'algokit/utils/python/algorand-client' },
                    { slug: 'algokit/utils/python/amount' },
                    { slug: 'algokit/utils/python/app-client' },
                    { slug: 'algokit/utils/python/app-deploy' },
                    { slug: 'algokit/utils/python/app' },
                    { slug: 'algokit/utils/python/asset' },
                    { slug: 'algokit/utils/python/client' },
                    { slug: 'algokit/utils/python/debugging' },
                    { slug: 'algokit/utils/python/dispenser-client' },
                    { slug: 'algokit/utils/python/testing' },
                    { slug: 'algokit/utils/python/transaction-composer' },
                    { slug: 'algokit/utils/python/transaction' },
                    { slug: 'algokit/utils/python/transfer' },
                    { slug: 'algokit/utils/python/typed-app-clients' },
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
                    { slug: 'algokit/languages/typescript/overview' },
                    { slug: 'algokit/languages/typescript/language-guide' },
                    { slug: 'algokit/languages/typescript/lg-program-structure' },
                    { slug: 'algokit/languages/typescript/lg-types' },
                    { slug: 'algokit/languages/typescript/lg-storage' },
                    { slug: 'algokit/languages/typescript/lg-ops' },
                    { slug: 'algokit/languages/typescript/guiding-principles' },
                    { slug: 'algokit/languages/typescript/migration-guides' },
                  ],
                },
                {
                  label: 'Algorand Python',
                  items: [
                    { slug: 'algokit/languages/python/overview' },
                    { slug: 'algokit/languages/python/lg-migration-4-5' },
                    { slug: 'algokit/languages/python/language-guide' },
                    { slug: 'algokit/languages/python/principles' },
                    { slug: 'algokit/languages/python/lg-structure' },
                    { slug: 'algokit/languages/python/lg-types' },
                    { slug: 'algokit/languages/python/lg-control' },
                    { slug: 'algokit/languages/python/lg-modules' },
                    { slug: 'algokit/languages/python/lg-builtins' },
                    { slug: 'algokit/languages/python/lg-errors' },
                    { slug: 'algokit/languages/python/lg-data-structures' },
                    { slug: 'algokit/languages/python/lg-storage' },
                    { slug: 'algokit/languages/python/lg-logs' },
                    { slug: 'algokit/languages/python/lg-transactions' },
                    { slug: 'algokit/languages/python/lg-ops' },
                    { slug: 'algokit/languages/python/lg-opcode-budget' },
                    { slug: 'algokit/languages/python/lg-arc4' },
                    { slug: 'algokit/languages/python/lg-arc28' },
                    { slug: 'algokit/languages/python/lg-calling-apps' },
                    { slug: 'algokit/languages/python/overview' },
                    { slug: 'algokit/languages/python/lg-unsupported-python-features' },
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
                    { slug: 'algokit/unit-testing/typescript/overview' },
                    { slug: 'algokit/unit-testing/typescript/concepts' },
                    { slug: 'algokit/unit-testing/typescript/avm-types' },
                    { slug: 'algokit/unit-testing/typescript/arc4-types' },
                    { slug: 'algokit/unit-testing/typescript/transactions' },
                    { slug: 'algokit/unit-testing/typescript/contract-testing' },
                    { slug: 'algokit/unit-testing/typescript/signature-testing' },
                    { slug: 'algokit/unit-testing/typescript/state-management' },
                    { slug: 'algokit/unit-testing/typescript/opcodes' },
                  ],
                },
                {
                  label: 'Python Unit Testing',
                  items: [
                    { slug: 'algokit/unit-testing/python/overview' },
                    { slug: 'algokit/unit-testing/python/concepts' },
                    { slug: 'algokit/unit-testing/python/avm-types' },
                    { slug: 'algokit/unit-testing/python/arc4-types' },
                    { slug: 'algokit/unit-testing/python/transactions' },
                    { slug: 'algokit/unit-testing/python/contract-testing' },
                    { slug: 'algokit/unit-testing/python/signature-testing' },
                    { slug: 'algokit/unit-testing/python/state-management' },
                    { slug: 'algokit/unit-testing/python/subroutines' },
                    { slug: 'algokit/unit-testing/python/opcodes' },
                  ],
                },
              ],
            },
            {
              label: 'AVM Debugger',
              collapsed: true,
              items: [{ slug: 'algokit/avm-debugger' }],
            },
            {
              label: 'Language Servers',
              collapsed: true,
              items: [
                { slug: 'algokit/language-servers/algorand-python' },
                { slug: 'algokit/language-servers/algorand-typescript' },
              ],
            },
            {
              label: 'Subscriber',
              collapsed: true,
              items: [
                {
                  label: 'Subscriber TypeScript',
                  items: [
                    { slug: 'algokit/subscriber/typescript/overview' },
                    { slug: 'algokit/subscriber/typescript/subscriber' },
                    { slug: 'algokit/subscriber/typescript/subscriptions' },
                    // { slug: 'algokit/subscriber/typescript/v3-migration' }, // content not in source repo
                  ],
                },
                {
                  label: 'Subscriber Python',
                  items: [
                    { slug: 'algokit/subscriber/python/overview' },
                    { slug: 'algokit/subscriber/python/subscriber' },
                    { slug: 'algokit/subscriber/python/subscriptions' },
                  ],
                },
              ],
            },
            {
              label: 'Client Generators',
              collapsed: true,
              items: [
                { slug: 'algokit/client-generator/typescript' },
                { slug: 'algokit/client-generator/python' },
              ],
            },
          ],
        },
        {
          label: 'Running A Node',
          collapsed: false,
          items: [
            { slug: 'nodes/overview' },
            { slug: 'nodes/nodekit-overview' },
            { slug: 'nodes/nodekit-quick-start' },
            { slug: 'nodes/types' },
            {
              label: 'Direct Installation',
              collapsed: true,
              items: [
                { slug: 'nodes/installation/manual-installation' },
                { slug: 'nodes/installation/catchup-status' },
                { slug: 'nodes/installation/indexer-installation' },
                { slug: 'nodes/installation/conduit-installation' },
                { slug: 'nodes/installation/troubleshooting' },
              ],
            },
            {
              label: 'Node Management',
              collapsed: true,
              items: [
                { slug: 'nodes/management/best-practices' },
                { slug: 'nodes/management/software-updates' },
                { slug: 'nodes/management/switch-networks' },
                { slug: 'nodes/management/p2p-config' },
              ],
            },
            {
              label: 'Node Reference',
              collapsed: true,
              items: [
                { slug: 'nodes/reference/artifacts' },
                { slug: 'nodes/reference/config-settings' },
                { slug: 'nodes/reference/repeater-config' },
                { slug: 'nodes/reference/telemetry-config' },
              ],
            },
            { slug: 'docs/nodekit/go/latest/commands' },
          ],
        },
        {
          label: 'Reference',
          collapsed: true,
          items: [
            {
              label: 'Algorand TEAL',
              collapsed: true,
              items: [{ slug: 'reference/algorand-teal/opcodes' }],
            },
            {
              label: 'SDK',
              collapsed: true,
              items: [{ slug: 'reference/sdk/sdk-list' }],
            },
            {
              label: 'REST API',
              collapsed: true,
              items: [
                { slug: 'reference/rest-api/overview' },
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
            { slug: 'resources/overview' },
            { slug: 'resources/liquid-auth' },
            { slug: 'resources/bridging' },
            {
              label: 'Algorand Specifications',
              link: 'https://specs.algorand.co',
              attrs: { target: '_blank', rel: 'noopener' },
            },
            { slug: 'resources/p2p-func' },
          ],
        },
        // Library sidebars — consumed by LibraryDocsSidebar, hidden from main sidebar
        ...algokitUtilsSidebar,
        ...algokitCliSidebar,
        ...algorandPythonSidebar,
        ...algorandTypescriptSidebar,
        ...algokitSubscriberSidebar,
        ...nodekitSidebar,
      ],
    }),
    icon(),
    d2({
      sketch: true,
      layout: 'dagre',
    }),
    sitemap(),
    react(),
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
