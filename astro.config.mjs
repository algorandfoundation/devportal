import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import icon from 'astro-icon';
import d2 from 'astro-d2';
import rehypeExternalLinks from 'rehype-external-links';
import { resolve } from 'path';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLinksValidator from 'starlight-links-validator';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

import tailwindcss from '@tailwindcss/vite';

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
                        sidebar: {
                            collapsed: true,
                            operations: { badges: false, labels: 'operationId', sort: 'alphabetical' },
                            tags: { sort: 'alphabetical' },
                        },
                    },
                    {
                        base: 'reference/rest-api/indexer',
                        label: 'indexer',
                        schema:
                            'https://raw.githubusercontent.com/algorand/indexer/refs/heads/main/api/indexer.oas3.yml',
                        sidebar: {
                            collapsed: true,
                            operations: { badges: false, labels: 'operationId', sort: 'alphabetical' },
                            tags: { sort: 'alphabetical' },
                        },
                    },
                    {
                        base: 'reference/rest-api/kmd',
                        label: 'kmd',
                        schema:
                            'https://raw.githubusercontent.com/algorand/go-algorand/ad578576ab5f5bfe58a590164903617ecef379e4/daemon/kmd/api/swagger.json',
                        sidebar: {
                            collapsed: true,
                            operations: { badges: false, labels: 'operationId', sort: 'alphabetical' },
                            tags: { sort: 'alphabetical' },
                        },
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
                {
                    tag: 'script',
                    attrs: {
                        src: 'https://widget.kapa.ai/kapa-widget.bundle.js',
                        'data-website-id': '6e799942-b20a-4203-8103-93582a2611e1',
                        'data-project-name': 'Algorand',
                        'data-project-color': '#2CB7BC',
                        'data-project-logo': '/src/assets/images/algorand-logo.png',
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
                                    link: 'concepts/transactions/transactions',
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
                                    label: 'Inner Transactions',
                                    link: 'concepts/smart-contracts/inner-txn',
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
                            label: 'LORA the Explorer',
                            collapsed: true,
                            items: [
                                {
                                    label: 'Overview',
                                    link: '',
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
                                    label: 'AlgoKit Utils TypeScript',
                                    link: '',
                                },
                                {
                                    label: 'AlgoKit Utils Python',
                                    link: '',
                                },
                            ],
                        },
                        {
                            label: 'Smart Contract Languages',
                            collapsed: true,
                            items: [
                                {
                                    label: 'Algorand TypeScript',
                                    link: '',
                                },
                                {
                                    label: 'Algorand Python',
                                    link: '',
                                },
                            ],
                        },
                        {
                            label: 'Unit Testing',
                            collapsed: true,
                            items: [
                                {
                                    label: 'TypeScript Unit Testing ',
                                    link: '',
                                },
                                {
                                    label: 'Python Unit Testing',
                                    link: '',
                                },
                            ],
                        },
                        {
                            label: 'AVM Debugger',
                            collapsed: true,
                            items: [
                                {
                                    label: 'Overview',
                                    link: '',
                                },
                            ],
                        },
                        {
                            label: 'Subscriber',
                            collapsed: true,
                            items: [
                                {
                                    label: 'Subscriber TypeScript',
                                    link: '',
                                },
                                {
                                    label: 'Subscriber Python',
                                    link: '',
                                },
                            ],
                        },
                        {
                            label: 'Testnet Dispenser',
                            collapsed: true,
                            items: [
                                {
                                    label: 'Overview',
                                    link: '',
                                },
                            ],
                        },
                        {
                            label: 'Client Generators',
                            collapsed: true,
                            items: [
                                {
                                    label: 'Overview',
                                    link: '',
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
                                                                }
                                                            ]
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
                                                                }
                                                            ]
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
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    label: 'classes',
                                                    items: [
                                                        {
                                                            label: 'Address',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/address'
                                                        },
                                                        {
                                                            label: 'ARC4Encoded',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/arc4encoded'
                                                        },
                                                        {
                                                            label: 'Bool',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/bool'
                                                        },
                                                        {
                                                            label: 'Byte',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/byte'
                                                        },
                                                        {
                                                            label: 'Contract',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/contract'
                                                        },
                                                        {
                                                            label: 'DynamicArray',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/dynamicarray'
                                                        },
                                                        {
                                                            label: 'DynamicBytes',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/DynamicBytes'
                                                        },
                                                        {
                                                            label: 'StaticArray',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/staticarray'
                                                        },
                                                        {
                                                            label: 'StaticBytes',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/staticbytes'
                                                        },
                                                        {
                                                            label: 'Str',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/str'
                                                        },
                                                        {
                                                            label: 'Tuple',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/tuple'
                                                        },
                                                        {
                                                            label: 'UFixedNxM',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/ufixednxm'
                                                        },
                                                        {
                                                            label: 'UintN',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/uintn'
                                                        },
                                                        {
                                                            label: 'UintN8',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/uintn8'
                                                        },
                                                        {
                                                            label: 'UintN16',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/uintn16'
                                                        },
                                                        {
                                                            label: 'UintN32',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/uintn32'
                                                        },
                                                        {
                                                            label: 'UintN64',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/uintn64'
                                                        },
                                                        {
                                                            label: 'UintN128',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/uintn128'
                                                        },
                                                        {
                                                            label: 'UintN256',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/classes/uintn256'
                                                        },
                                                    ]
                                                },
                                                {
                                                    label: 'enumerations',
                                                    items: [
                                                        {
                                                            label: 'OnCompleteAction',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/enumerations/oncompleteaction',
                                                        }
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
                                                        }
                                                    ]
                                                },
                                                {
                                                    label: 'variables',
                                                    items: [
                                                        {
                                                            label: 'Struct',
                                                            link: 'reference/algorand-typescript/api-reference/arc4/variables/struct',
                                                        }
                                                    ]
                                                },
                                            ]
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
                                                                    label: 'KeyRegistration',
                                                                    link: 'reference/algorand-typescript/api-reference/index/-internal-/interfaces/keyregistration',
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
                                                            ]
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
                                                            ]
                                                        }
                                                    ]
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
                                                        }
                                                    ]
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
                                                    ]
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
                                                    ]
                                                },
                                                {
                                                    label: 'interfaces',
                                                    items: [
                                                        {
                                                            label: 'BytesBacked',
                                                            link: 'reference/algorand-typescript/api-reference/index/interfaces/bytesbacked',
                                                        },
                                                    ]
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
                                                                    ]
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
                                                                    ]
                                                                },
                                                                {
                                                                    label: 'type-aliases',
                                                                    items: [
                                                                        {
                                                                            label: 'Transaction',
                                                                            link: 'reference/algorand-typescript/api-reference/index/namespaces/gtxn/type-aliases/transaction'
                                                                        }
                                                                    ]
                                                                }

                                                            ]
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
                                                                    ]
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
                                                                    ]
                                                                },
                                                                {
                                                                    label: 'type-aliases',
                                                                    items: [
                                                                        {
                                                                            label: 'InnerTransaction',
                                                                            link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/type-aliases/innertransaction'
                                                                        },
                                                                        {
                                                                            label: 'InnerTxnList',
                                                                            link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/type-aliases/innertxnlist'
                                                                        },
                                                                        {
                                                                            label: 'TxnFor',
                                                                            link: 'reference/algorand-typescript/api-reference/index/namespaces/itxn/type-aliases/txnfor'
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                        }
                                                    ]
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
                                                            label: 'CompiledLogicSigOptions',
                                                            link: 'reference/algorand-typescript/api-reference/index/type-aliases/compiledlogicsigoptions',
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
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            label: 'op',
                                            items: [
                                                {
                                                    label: 'enumerations',
                                                    items: [
                                                        {
                                                            label: 'Base64',
                                                            link: 'reference/algorand-typescript/api-reference/op/enumerations/base64'
                                                        },
                                                        {
                                                            label: 'Ec',
                                                            link: 'reference/algorand-typescript/api-reference/op/enumerations/ec'
                                                        },
                                                        {
                                                            label: 'Ecdsa',
                                                            link: 'reference/algorand-typescript/api-reference/op/enumerations/ecdsa'
                                                        },
                                                        {
                                                            label: 'MimcConfigurations',
                                                            link: 'reference/algorand-typescript/api-reference/op/enumerations/mimcconfigurations'
                                                        },
                                                        {
                                                            label: 'VrfVerify',
                                                            link: 'reference/algorand-typescript/api-reference/op/enumerations/vrfverify'
                                                        }
                                                    ]
                                                },
                                                {
                                                    label: 'functions',
                                                    items: [
                                                        {
                                                            label: 'addw',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/addw'
                                                        },
                                                        {
                                                            label: 'appOptedIn',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/appoptedin'
                                                        },
                                                        {
                                                            label: 'arg',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/arg'
                                                        },
                                                        {
                                                            label: 'balance',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/balance'
                                                        },
                                                        {
                                                            label: 'base64Decode',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/base64decode'
                                                        },
                                                        {
                                                            label: 'bitLength',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/bitlength'
                                                        },
                                                        {
                                                            label: 'bsqrt',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/bsqrt'
                                                        },
                                                        {
                                                            label: 'btoi',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/btoi'
                                                        },
                                                        {
                                                            label: 'bzero',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/bzero'
                                                        },
                                                        {
                                                            label: 'concat',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/concat'
                                                        },
                                                        {
                                                            label: 'divmodw',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/divmodw'
                                                        },
                                                        {
                                                            label: 'divw',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/divw'
                                                        },
                                                        {
                                                            label: 'ecdsaPkDecompress',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/ecdsapkdecompress'
                                                        },
                                                        {
                                                            label: 'ecdsaPkRecover',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/ecdsapkrecover'
                                                        },
                                                        {
                                                            label: 'ecdsaVerify',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/ecdsaverify'
                                                        },
                                                        {
                                                            label: 'ed25519verify',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/ed25519verify'
                                                        },
                                                        {
                                                            label: 'ed25519verifyBare',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/ed25519verifybare'
                                                        },
                                                        {
                                                            label: 'exp',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/exp'
                                                        },
                                                        {
                                                            label: 'expw',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/expw'
                                                        },
                                                        {
                                                            label: 'extract',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/extract'
                                                        },
                                                        {
                                                            label: 'extractUint16',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/extractuint16'
                                                        },
                                                        {
                                                            label: 'extractUint32',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/extractuint32'
                                                        },
                                                        {
                                                            label: 'extractUint64',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/extractuint64'
                                                        },
                                                        {
                                                            label: 'falconVerify',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/falconverify'
                                                        },
                                                        {
                                                            label: 'gaid',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/gaid'
                                                        },
                                                        {
                                                            label: 'getBit',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/getbit'
                                                        },
                                                        {
                                                            label: 'getByte',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/getbyte'
                                                        },
                                                        {
                                                            label: 'getloadByte',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/getloadbyte'
                                                        },
                                                        {
                                                            label: 'getloadBytes',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/getloadbytes'
                                                        },
                                                        {
                                                            label: 'itob',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/itob'
                                                        },
                                                        {
                                                            label: 'keccak256',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/keccak256'
                                                        },
                                                        {
                                                            label: 'len',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/len'
                                                        },
                                                        {
                                                            label: 'mimc',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/mimc'
                                                        },
                                                        {
                                                            label: 'minBalance',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/minbalance'
                                                        },
                                                        {
                                                            label: 'mulw',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/mulw'
                                                        },
                                                        {
                                                            label: 'onlineStake',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/onlinestake'
                                                        },
                                                        {
                                                            label: 'replace',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/replace'
                                                        },
                                                        {
                                                            label: 'select',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/select'
                                                        },
                                                        {
                                                            label: 'setBit',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/setbit'
                                                        },
                                                        {
                                                            label: 'setByte',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/setbyte'
                                                        },
                                                        {
                                                            label: 'sha3_256',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/sha3_256'
                                                        },
                                                        {
                                                            label: 'sha256',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/sha256'
                                                        },
                                                        {
                                                            label: 'sha512_256',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/sha512_256'
                                                        },
                                                        {
                                                            label: 'shl',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/shl'
                                                        },
                                                        {
                                                            label: 'shr',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/shr'
                                                        },
                                                        {
                                                            label: 'sqrt',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/sqrt'
                                                        },
                                                        {
                                                            label: 'substring',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/substring'
                                                        },
                                                        {
                                                            label: 'sumhash',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/sumhash'
                                                        },
                                                        {
                                                            label: 'vrfVerify',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/vrfverify'
                                                        },
                                                        {
                                                            label: '',
                                                            link: 'reference/algorand-typescript/api-reference/op/functions/'
                                                        },

                                                    ]
                                                },
                                                {
                                                    label: 'variables',
                                                    items: [
                                                        {
                                                            label: 'AcctParams',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/acctparams'
                                                        },
                                                        {
                                                            label: 'AppGlobal',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/appglobal'
                                                        },
                                                        {
                                                            label: 'AppLocal',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/applocal'
                                                        },
                                                        {
                                                            label: 'AppParams',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/appparams'
                                                        },
                                                        {
                                                            label: 'AssetHolding',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/assetholding'
                                                        },
                                                        {
                                                            label: 'AssetParams',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/assetparams'
                                                        },
                                                        {
                                                            label: 'Block',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/block'
                                                        },
                                                        {
                                                            label: 'Box',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/box'
                                                        },
                                                        {
                                                            label: 'EllipticCurve',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/ellipticcurve'
                                                        },
                                                        {
                                                            label: 'GITxn',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/gitxn'
                                                        },
                                                        {
                                                            label: 'Global',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/global'
                                                        },
                                                        {
                                                            label: 'GTxn',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/gtxn'
                                                        },
                                                        {
                                                            label: 'ITxn',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/itxn'
                                                        },
                                                        {
                                                            label: 'ITxnCreate',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/itxncreate'
                                                        },
                                                        {
                                                            label: 'JsonRef',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/jsonref'
                                                        },
                                                        {
                                                            label: 'Scratch',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/scratch'
                                                        },
                                                        {
                                                            label: 'Txn',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/txn'
                                                        },
                                                        {
                                                            label: 'VoterParams',
                                                            link: 'reference/algorand-typescript/api-reference/op/variables/voterparams'
                                                        },
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
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
                                    items: [
                                        {
                                            label: 'algokit_utils._debugging',
                                            link: 'reference/algokit-utils-py/api-reference/algokit_utils/algokit_utils__debugging',
                                        },
                                        {
                                            label: 'algokit_utils._ensure_funded',
                                            link: 'reference/algokit-utils-py/api-reference/algokit_utils/algokit_utils__ensure_funded',
                                        },
                                        {
                                            label: 'algokit_utils._transfer',
                                            link: 'reference/algokit-utils-py/api-reference/algokit_utils/algokit_utils__transfer',
                                        },
                                        {
                                            label: 'algokit_utils.account',
                                            link: 'reference/algokit-utils-py/api-reference/algokit_utils/algokit_utils_account',
                                        },
                                        {
                                            label: 'algokit_utils._debugging',
                                            link: 'reference/algokit-utils-py/api-reference/algokit_utils/algokit_utils__debugging',
                                        },
                                        {
                                            label: 'algokit_utils.application_client',
                                            link: 'reference/algokit-utils-py/api-reference/algokit_utils/algokit_utils_application_client',
                                        },
                                        {
                                            label: 'algokit_utils.application_specification',
                                            link: 'reference/algokit-utils-py/api-reference/algokit_utils/algokit_utils_application_specification',
                                        },
                                        {
                                            label: 'algokit_utils.asset',
                                            link: 'reference/algokit-utils-py/api-reference/algokit_utils/algokit_utils_asset',
                                        },
                                        {
                                            label: 'algokit_utils.common',
                                            link: 'reference/algokit-utils-py/api-reference/algokit_utils/algokit_utils_common',
                                        },
                                        {
                                            label: 'algokit_utils.config',
                                            link: 'reference/algokit-utils-py/api-reference/algokit_utils/algokit_utils_config',
                                        },
                                        {
                                            label: 'algokit_utils.deploy',
                                            link: 'reference/algokit-utils-py/api-reference/algokit_utils/algokit_utils_deploy',
                                        },
                                        {
                                            label: 'algokit_utils.dispenser_api',
                                            link: 'reference/algokit-utils-py/api-reference/algokit_utils/algokit_utils_dispenser_api',
                                        },
                                        {
                                            label: 'algokit_utils.logic_error',
                                            link: 'reference/algokit-utils-py/api-reference/algokit_utils/algokit_utils_logic_error',
                                        },
                                        {
                                            label: 'algokit_utils.models',
                                            link: 'reference/algokit-utils-py/api-reference/algokit_utils/algokit_utils_models',
                                        },
                                        {
                                            label: 'algokit_utils.network_clients',
                                            link: 'reference/algokit-utils-py/api-reference/algokit_utils/algokit_utils_network_clients',
                                        },
                                        {
                                            label: 'algokit_utils',
                                            link: 'reference/algokit-utils-py/api-reference/algokit_utils/algokit_utils',
                                        },
                                    ],
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
                                    collapsed: false,
                                    items: [
                                        {
                                            label: 'classes',
                                            items: [
                                                {
                                                    label: 'AlgorandClient',
                                                    link: 'reference/algokit-utils-ts/api-reference/classes/algorandclient',
                                                },
                                            ]
                                        },
                                        {
                                            label: 'enumerations',
                                            items: [
                                                {
                                                    label: 'EventType',
                                                    link: 'reference/algokit-utils-ts/api-reference/enumerations/eventtype',
                                                }
                                            ]
                                        },
                                        {
                                            label: 'functions',
                                            items: [
                                                {
                                                    label: 'algo',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/algo',
                                                },
                                                {
                                                    label: 'algos',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/algos',
                                                },
                                                {
                                                    label: 'assetBulkOptIn',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/assetbulkoptin',
                                                },
                                                {
                                                    label: 'assetBulkOptOut',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/assetbulkoptout',
                                                },
                                                {
                                                    label: 'assetOptIn',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/assetoptin',
                                                },
                                                {
                                                    label: 'assetOptOut',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/assetoptout',
                                                },
                                                {
                                                    label: 'callApp',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/callapp',
                                                },
                                                {
                                                    label: 'capTransactionFee',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/captransactionfee',
                                                },
                                                {
                                                    label: 'compileTeal',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/compileteal',
                                                },
                                                {
                                                    label: 'controlFees',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/controlfees',
                                                },
                                                {
                                                    label: 'createApp',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/createApp',
                                                },
                                                {
                                                    label: 'createAsset',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/createasset',
                                                },
                                                {
                                                    label: 'decodeAppState',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/decodeappstate',
                                                },
                                                {
                                                    label: 'deployApp',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/deployapp',
                                                },
                                                {
                                                    label: 'encodeLease',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/encodelease',
                                                },
                                                {
                                                    label: 'ensureFunded',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/encodetransactionnote',
                                                },
                                                {
                                                    label: 'getABIMethodSignature',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getabimethodsignature',
                                                },
                                                {
                                                    label: 'getABIReturn',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getabireturn',
                                                },
                                                {
                                                    label: 'getAccount',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getaccount',
                                                },
                                                {
                                                    label: 'getAccountAddressAsString',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getaccountaddressasstring',
                                                },
                                                {
                                                    label: 'getAccountAddressAsUint8Array',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getaccountaddressasuint8array',
                                                },
                                                {
                                                    label: 'getAccountAssetInformation',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getaccountassetinformation',
                                                },
                                                {
                                                    label: 'getAlgodConfigFromEnvironment',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getalgodconfigfromenvironment',
                                                },
                                                {
                                                    label: 'getAlgoIndexerClient',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getalgoindexerclient',
                                                },
                                                {
                                                    label: 'getAlgoNodeConfig',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getalgonodeconfig',
                                                },
                                                {
                                                    label: 'getAppArgsForABICall',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getappargsforabicall',
                                                },
                                                {
                                                    label: 'getAppArgsForTransaction',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getappargsfortransaction',
                                                },
                                                {
                                                    label: 'getAppBoxNames',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getappboxnames',
                                                },
                                                {
                                                    label: 'getAppBoxValue',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getappboxvalue',
                                                },
                                                {
                                                    label: 'getAppBoxValueFromABIType',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getappboxvaluefromabitype',
                                                },
                                                {
                                                    label: 'getAppBoxValues',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getappboxvalues',
                                                },
                                                {
                                                    label: 'getAppBoxValuesFromABIType',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getappboxvaluesfromabitype',
                                                },
                                                {
                                                    label: 'getAppById',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getappbyid',
                                                },
                                                {
                                                    label: 'getAppClient',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getappclient',
                                                },
                                                {
                                                    label: 'getAppClientByCreatorAndName',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getappclientbycreatorandname',
                                                },
                                                {
                                                    label: 'getAppClientById',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getappclientbyid',
                                                },
                                                {
                                                    label: 'getAppDeploymentTransactionNote',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getappdeploymenttransactionnote',
                                                },
                                                {
                                                    label: 'getAppGlobalState',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getappglobalstate',
                                                },
                                                {
                                                    label: 'getAppLocalState',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getapplocalstate',
                                                },
                                                {
                                                    label: 'getAppOnComlpeteAction',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getapponcomlpeteaction',
                                                },
                                                {
                                                    label: 'getAtomicTransactionComposeTransactions',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getatomictransactioncomposetransactions',
                                                },
                                                {
                                                    label: 'getBoxReference',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getboxreference',
                                                },
                                                {
                                                    label: 'getConfigFromEnvOrDefaults',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getconfigfromenvordefaults',
                                                },
                                                {
                                                    label: 'getCreatorAppsByName',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getcreatorappsbyname',
                                                },
                                                {
                                                    label: 'getDefaultLocalNetConfig',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getdefaultlocalnetconfig',
                                                },
                                                {
                                                    label: 'getDispenserAccount',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getdispenseraccount',
                                                },
                                                {
                                                    label: 'getIndexerConfigFromEnvironment',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getindexerconfigfromenvironment',
                                                },
                                                {
                                                    label: 'getKmdWaletAccount',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getkmdwaletaccount',
                                                },
                                                {
                                                    label: 'getLocalNetDispenserAccount',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getlocalnetdispenseraccount',
                                                },
                                                {
                                                    label: 'getOrCreateKmdWalletAccount',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getorcreatekmdwalletaccount',
                                                },
                                                {
                                                    label: 'getSenderAddress',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getsenderaddress',
                                                },
                                                {
                                                    label: 'getSenderTransactionSigner',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/getsendertransactionsigner',
                                                },
                                                {
                                                    label: 'getTestNetDispenserApiClient',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/gettestnetdispenserapiclient',
                                                },
                                                {
                                                    label: 'getTransactionParams',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/gettransactionparams',
                                                },
                                                {
                                                    label: 'getTransactionWithSigner',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/gettransactionwithsigner',
                                                },
                                                {
                                                    label: 'isLocalNet',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/islocalnet',
                                                },
                                                {
                                                    label: 'isMainNet',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/ismainnet',
                                                },
                                                {
                                                    label: 'isSchemaIsBroken',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/isschemaisbroken',
                                                },
                                                {
                                                    label: 'isTestNet',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/istestnet',
                                                },
                                                {
                                                    label: 'microAlgo',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/microalgo',
                                                },
                                                {
                                                    label: 'microAlgos',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/microalgos',
                                                },
                                                {
                                                    label: 'mnemonicAccount',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/mnemonicaccount',
                                                },
                                                {
                                                    label: 'mnemonicAccountFromEnvironment',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/mnemonicaccountfromenvironment',
                                                },
                                                {
                                                    label: 'multisigAccount',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/multisigaccount',
                                                },
                                                {
                                                    label: 'performAtomicTransactionComposerSimulate',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/performatomictransactioncomposersimulate',
                                                },
                                                {
                                                    label: 'performTemplateSubstitution',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/performtemplatesubstitution',
                                                },
                                                {
                                                    label: 'performTemplateSubstitutionAndCompile',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/performtemplatesubstitutionandcompile',
                                                },
                                                {
                                                    label: 'persistSourceMaps',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/persistsourcemaps',
                                                },
                                                {
                                                    label: 'populateAppCallResources',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/populateappcallresources',
                                                },
                                                {
                                                    label: 'randomAccount',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/randomaccount',
                                                },
                                                {
                                                    label: 'relayAccount',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/relayaccount',
                                                },
                                                {
                                                    label: 'rekeyedAccount',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/rekeyedaccount',
                                                },
                                                {
                                                    label: 'replaceDeployTimeControlParams',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/replaceDeploytimecontrolparams',
                                                },
                                                {
                                                    label: 'sendAtomicTransactionComposer',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/sendatomictransactioncomposer',
                                                },
                                                {
                                                    label: 'sendGroupOfTransactions',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/sendgroupoftransactions',
                                                },
                                                {
                                                    label: 'sendTransaction',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/sendtransaction',
                                                },
                                                {
                                                    label: 'signTransaction',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/signtransaction',
                                                },
                                                {
                                                    label: 'stripTealComments',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/striptealcomments',
                                                },
                                                {
                                                    label: 'transactionFees',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/transactionfees',
                                                },
                                                {
                                                    label: 'transactionSignerAccount',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/transactionsigneraccount',
                                                },
                                                {
                                                    label: 'transferAlgos',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/transferalgos',
                                                },
                                                {
                                                    label: 'transferAsset',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/transferasset',
                                                },
                                                {
                                                    label: 'updateApp',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/updateapp',
                                                },
                                                {
                                                    label: 'waitForConfirmation',
                                                    link: 'reference/algokit-utils-ts/api-reference/functions/waitforconfirmation',
                                                },
                                            ],
                                        },
                                        {
                                            label: 'interfaces',
                                            items: [
                                                {
                                                    label: 'AVMTracesEventData',
                                                    link: 'reference/algokit-utils-ts/api-reference/interfaces/avmtraceseventdata',
                                                },
                                                {
                                                    label: 'TealSourceDebugEventData',
                                                    link: 'reference/algokit-utils-ts/api-reference/interfaces/tealsourcedebugeventdata',
                                                },
                                                {
                                                    label: 'TealSourcesDebugEventData',
                                                    link: 'reference/algokit-utils-ts/api-reference/interfaces/tealsourcesdebugeventdata',
                                                },
                                            ]
                                        },
                                        {
                                            label: 'namespaces',
                                            items: [
                                                {
                                                    label: 'indexer',
                                                    items: [
                                                        {
                                                            label: 'functions',
                                                            items: [
                                                                {
                                                                    label: 'executePaginatedRequest',
                                                                    link: 'reference/algokit-utils-ts/api-reference/namespaces/indexer/functions/executepaginatedrequest',
                                                                },
                                                                {
                                                                    label: 'lookupAccountByAddress',
                                                                    link: 'reference/algokit-utils-ts/api-reference/namespaces/indexer/functions/lookupaccountbyaddress',
                                                                },
                                                                {
                                                                    label: 'lookupAccountCreatedApplicationByAddress',
                                                                    link: 'reference/algokit-utils-ts/api-reference/namespaces/indexer/functions/lookupaccountcreatedapplicationbyaddress',
                                                                },
                                                                {
                                                                    label: 'lookupAssetHoldings',
                                                                    link: 'reference/algokit-utils-ts/api-reference/namespaces/indexer/functions/lookupassetholdings',
                                                                },
                                                                {
                                                                    label: 'lookupTransactionById',
                                                                    link: 'reference/algokit-utils-ts/api-reference/namespaces/indexer/functions/lookuptransactionbyid',
                                                                },
                                                                {
                                                                    label: 'searchTransactions',
                                                                    link: 'reference/algokit-utils-ts/api-reference/namespaces/indexer/functions/searchtransactions',
                                                                },
                                                            ]
                                                        },
                                                        {
                                                            label: 'type-aliases',
                                                            items: [
                                                                {
                                                                    label: 'SearchForTransactions',
                                                                    link: 'reference/algokit-utils-ts/api-reference/namespaces/indexer/type-aliases/searchfortransactions',
                                                                },
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ],
                                        },
                                        {
                                            label: 'type-aliases',
                                            items: [
                                                {
                                                    label: 'AccountInformation',
                                                    link: 'reference/algokit-utils-ts/api-reference/type-aliases/accountinformation',
                                                },
                                                {
                                                    label: 'EventDataMap',
                                                    link: 'reference/algokit-utils-ts/api-reference/type-aliases/eventdatamap',
                                                },
                                                {
                                                    label: 'NumberConverter',
                                                    link: 'reference/algokit-utils-ts/api-reference/type-aliases/numberconverter',
                                                }
                                            ]
                                        },
                                        {
                                            label: 'variables',
                                            items: [
                                                {
                                                    label: 'ALGOKIT_DIR',
                                                    link: 'reference/algokit-utils-ts/api-reference/variables/algokit_dir',
                                                },
                                                {
                                                    label: 'ALGORAND_MIN_TX_FEE',
                                                    link: 'reference/algokit-utils-ts/api-reference/variables/algorand_min_tx_fee',
                                                },
                                                {
                                                    label: 'Config',
                                                    link: 'reference/algokit-utils-ts/api-reference/variables/config',
                                                },
                                                {
                                                    label: 'DEFAULT_MAX_SEARCH_DEPTH',
                                                    link: 'reference/algokit-utils-ts/api-reference/variables/default_max_search_depth',
                                                },
                                                {
                                                    label: 'MAX_APP_CALL_ACCOUNT_REFERENCES',
                                                    link: 'reference/algokit-utils-ts/api-reference/variables/max_app_call_account_references',
                                                },
                                                {
                                                    label: 'MAX_APP_CALL_FOREIGN_REFERENCES',
                                                    link: 'reference/algokit-utils-ts/api-reference/variables/max_app_call_foreign_references',
                                                },
                                                {
                                                    label: 'MAX_TRANSACTION_GROUP_SIZE',
                                                    link: 'reference/algokit-utils-ts/api-reference/variables/max_transaction_group_size',
                                                },
                                                {
                                                    label: 'SOURCES_DIR',
                                                    link: 'reference/algokit-utils-ts/api-reference/variables/sources_dir',
                                                },
                                                {
                                                    label: 'TEAL_FILE_EXT',
                                                    link: 'reference/algokit-utils-ts/api-reference/variables/teal_file_ext',
                                                },
                                                {
                                                    label: 'TEAL_SOURCEMAP_EXT',
                                                    link: 'reference/algokit-utils-ts/api-reference/variables/teal_sourcemap_ext',
                                                },
                                            ]
                                        }
                                    ],
                                },
                                {
                                    label: 'Overview',
                                    link: 'reference/algokit-utils-ts/overview',
                                },
                            ],
                        },
                        {
                            label: 'Algorand Teal',
                            collapsed: true,
                            items: [
                                {
                                    label: 'Opcodes List',
                                    link: 'reference/algorand-teal/opcodes-list'
                                },
                            ],
                        },
                        {
                            label: 'SDK',
                            collapsed: true,
                            items: [
                                {
                                    label: 'Algorand SDK List',
                                    link: 'reference/sdk/sdk-list'
                                },
                                // {
                                //   label: '.net',
                                //   items: [],
                                //   badge: 'Community',
                                // },
                                // {
                                //   label: 'C#',
                                //   items: [],
                                //   badge: 'Community',
                                // },
                                // {
                                //   label: 'C++',
                                //   items: [],
                                //   badge: 'Community',
                                // },
                                // {
                                //   label: 'Dart',
                                //   items: [],
                                //   badge: 'Community',
                                // },
                                // {
                                //   label: 'GO',
                                //   items: [],
                                // },
                                // {
                                //   label: 'Java',
                                //   items: [],
                                // },
                                // {
                                //   label: 'JS',
                                //   items: [],
                                // },
                                // {
                                //   label: 'PHP',
                                //   items: [],
                                //   badge: 'Community',
                                // },
                                // {
                                //   label: 'Python',
                                //   items: [],
                                // },
                                // {
                                //   label: 'Rust',
                                //   items: [],
                                //   badge: 'Community',
                                // },
                                // {
                                //   label: 'Swift',
                                //   items: [],
                                //   badge: 'Community',
                                // },
                                // {
                                //   label: 'Unity',
                                //   items: [],
                                //   badge: 'Community',
                                // },
                                // {
                                //   label: 'Unreal',
                                //   items: [],
                                //   badge: 'Community',
                                // },
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
                                ...openAPISidebarGroups,
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

        plugins: [tailwindcss()],
    },
});