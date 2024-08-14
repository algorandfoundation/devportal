import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mocha from '@catppuccin/vscode/themes/mocha.json'
import latte from '@catppuccin/vscode/themes/latte.json'
// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Algorand Developer Portal",
			social: {
				github: "https://github.com/withastro/starlight",
			},
			sidebar: [
				{
					label: "Build",
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: "Accounts",
							collapsed: true,
							items: [
								{
									label: "overview",
									badge: { text: "todo", variant: "danger" },
									autogenerate: { directory: "build/accounts/overview" },
								},
								{
									label: "create",
									badge: { text: "todo", variant: "danger" },
									autogenerate: { directory: "build/accounts/create" },
								},
								{
									label: "fund",
									badge: { text: "todo", variant: "danger" },
									autogenerate: { directory: "build/accounts/fund" },
								},
								{
									label: "rekey",
									link: "#",
									badge: { text: "todo", variant: "danger" },
								},
								{
									label: "signing",
									badge: { text: "todo", variant: "danger" },
									autogenerate: { directory: "build/accounts/signing" },
								},
							],
						},
						{
							label: "Assets",
							collapsed: true,
							items: [
								{
									label: "overview",
									badge: { text: "todo", variant: "danger" },
									link: "build/accounts/overview",
								},
								{
									label: "create",
									badge: { text: "todo", variant: "danger" },
									link: "build/accounts/create",
								},
								{
									label: "clawback",
									badge: { text: "todo", variant: "danger" },
									link: "build/assets/clawback",
								},
								{
									label: "delete",
									badge: { text: "todo", variant: "danger" },
									link: "build/assets/delete",
								},
								{
									label: "freeze",
									badge: { text: "todo", variant: "danger" },
									link: "build/assets/freeze",
								},
								{
									label: "opt_out",
									badge: { text: "todo", variant: "danger" },
									link: "build/assets/opt_out",
								},
								{
									label: "update",
									badge: { text: "todo", variant: "danger" },
									link: "build/assets/update",
								},
								{
									label: "Asset Transfers",
									badge: { text: "todo", variant: "danger" },
									autogenerate: {
										directory: "build/assets/transferring_assets",
									},
								},
							],
						},
						{
							label: "Smart Contracts",
							collapsed: true,
							items: [
								{
									label: "Overview",
									badge: { text: "todo", variant: "danger" },
									autogenerate: { directory: "build/smart_contracts/overview" },
								},
								{
									label: "Applications",
									badge: { text: "todo", variant: "danger" },
									autogenerate: { directory: "build/smart_contracts/apps" },
								},
								{
									label: "ABI",
									badge: { text: "todo", variant: "danger" },
									link: "build/smart_contracts/abi",
								},
								{
									label: "Logic Signatures",
									badge: { text: "todo", variant: "danger" },
									link: "build/smart_contracts/logic_sigs",
								},
								{
									label: "Resource Usage",
									badge: { text: "todo", variant: "danger" },
									link: "build/smart_contracts/resource_usage",
								},
								{
									label: "Storage",
									badge: { text: "todo", variant: "danger" },
									autogenerate: {
										directory: "build/smart_contracts/storage",
									},
								},
								{
									label: "Python",
									badge: { text: "todo", variant: "danger" },
									autogenerate: {
										directory: "build/smart_contracts/storage",
									},
								},
								{
									label: "TypeScript",
									badge: { text: "todo", variant: "danger" },
									autogenerate: {
										directory: "build/smart_contracts/storage",
									},
								},
								{
									label: "Teal",
									badge: { text: "todo", variant: "danger" },
									autogenerate: {
										directory: "build/smart_contracts/storage",
									},
								},
							],
						},
						{
							label: "Assets",
							collapsed: true,
							items: [
								{
									label: "overview",
									badge: { text: "todo", variant: "danger" },
									autogenerate: { directory: "build/transactions/overview" },
								},
								{
									label: "Txn Types",
									badge: { text: "todo", variant: "danger" },
									autogenerate: {
										directory: "build/transactions/transaction_types",
									},
								},
								{
									label: "atomic_txn_groups",
									badge: { text: "todo", variant: "danger" },
									link: "build/transactions/atomic_txn_groups",
								},
								{
									label: "blocks",
									badge: { text: "todo", variant: "danger" },
									link: "build/transactions/blocks",
								},
								{
									label: "leases",
									badge: { text: "todo", variant: "danger" },
									link: "build/transactions/leases",
								},
								{
									label: "networks",
									badge: { text: "todo", variant: "danger" },
									link: "build/transactions/networks",
								},
								{
									label: "sign",
									badge: { text: "todo", variant: "danger" },
									link: "build/transactions/sign",
								},
								{
									label: "uri_scheme",
									badge: { text: "todo", variant: "danger" },
									link: "build/transactions/uri_scheme",
								},
							],
						},
					],
				},
				{
					label: "Algorand Protocol",
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: "Consensus",
							items: [
								{
									label: "High Level",
									badge: { text: "todo", variant: "danger" },
									collapsed: true,
									items: [
										{
											label: "Genesis State",
											link: "protocol/consensus/high_level/genesis_state",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Proposal",
											link: "protocol/consensus/high_level/proposal",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Vote",
											link: "protocol/consensus/high_level/vote",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Certification",
											link: "protocol/consensus/high_level/certification",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Recovery",
											link: "protocol/consensus/high_level/recovery",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Upgrade",
											link: "protocol/consensus/high_level/upgrade",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Rewards",
											link: "protocol/consensus/high_level/rewards",
											badge: { text: "todo", variant: "danger" },
										},
									],
								},
								{
									label: "Configurations",
									link: "protocol/high_level/configurations",
									badge: { text: "todo", variant: "danger" },
								},
							],
						},
						{
							label: "Node",
							items: [
								{
									label: "State Machine",
									link: "protocol/node/state_machine",
									badge: { text: "todo", variant: "danger" },
								},
								{
									label: "Messaging",
									link: "protocol/node/messaging",
									badge: { text: "todo", variant: "danger" },
								},
								{
									label: "Transactions",
									badge: { text: "todo", variant: "danger" },
									collapsed: true,
									items: [
										{
											label: "Priority Queue",
											link: "protocol/node/transactions/txn_priority_queue",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Validation",
											link: "protocol/node/transactions/txn_validation",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Pooling",
											link: "protocol/node/transactions/txn_pooling",
											badge: { text: "todo", variant: "danger" },
										},
									],
								},
								{
									label: "Blocks",
									badge: { text: "todo", variant: "danger" },
									collapsed: true,
									items: [
										{
											label: "assembly",
											link: "protocol/node/blocks/assembly",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "validation",
											link: "protocol/node/blocks/validation",
											badge: { text: "todo", variant: "danger" },
										},
									],
								},
								{
									label: "Ledger and Account Table",
									link: "protocol/node/ledger_acct_table",
									badge: { text: "todo", variant: "danger" },
								},
								{
									label: "Key Management",
									link: "protocol/node/key_mgmt",
									badge: { text: "todo", variant: "danger" },
								},
								{
									label: "APIs",
									link: "protocol/node/api",
									badge: { text: "todo", variant: "danger" },
								},
								{
									label: "Networking",
									badge: { text: "todo", variant: "danger" },
									collapsed: true,
									items: [
										{
											label: "Topologies",
											link: "protocol/node/networking/topologies",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Peer discovery rules",
											link: "protocol/node/networking/peer_discovery",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Synchronization",
											link: "protocol/node/networking/synchronization",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Fast Catchup",
											link: "protocol/node/networking/fast_catchup",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Examples",
											link: "protocol/node/networking/examples",
											badge: { text: "todo", variant: "danger" },
										},
									],
								},
								{
									label: "AVM",
									badge: { text: "todo", variant: "danger" },
									collapsed: true,
									items: [
										{
											label: "Architecture",
											link: "protocol/node/avm/architecture",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Run-Times",
											link: "protocol/node/avm/runtimes",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Op-Codes",
											link: "protocol/node/avm/opcodes",
											badge: { text: "todo", variant: "danger" },
										},
									],
								},
								{
									label: "State Proofs",
									badge: { text: "todo", variant: "danger" },
									collapsed: true,
									items: [
										{
											label: "Generation",
											link: "protocol/node/stateproofs/generation",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Verification",
											link: "protocol/node/stateproofs/verification",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Examples",
											link: "protocol/node/stateproofs/examples",
											badge: { text: "todo", variant: "danger" },
										},
									],
								},
								{
									label: "Cryptography",
									badge: { text: "todo", variant: "danger" },
									collapsed: true,
									items: [
										{
											label: "LibSodium",
											link: "protocol/node/crypto/libsodium",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Canonical Msgpack",
											link: "protocol/node/crypto/canonical_msgpack",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Hash Functions",
											link: "protocol/node/crypto/hash_functions",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "VRF",
											link: "protocol/node/crypto/vrf",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Signatures",
											badge: { text: "todo", variant: "danger" },
											items: [
												{
													label: "ed25519",
													link: "protocol/node/crypto/signatures/ed25519",
													badge: { text: "todo", variant: "danger" },
												},
												{
													label: "FALCON",
													link: "protocol/node/crypto/signatures/falcon",
													badge: { text: "todo", variant: "danger" },
												},
											],
										},
										{
											label: "Merkle Tree",
											link: "protocol/node/crypto/merkle_tree",
											badge: { text: "todo", variant: "danger" },
										},
									],
								},
								{
									label: "Contribute",
									badge: { text: "todo", variant: "danger" },
									collapsed: true,
									items: [
										{
											label: "Fork",
											link: "protocol/node/contribute/fork",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "New Op-Codes",
											link: "protocol/node/contribute/new_opcodes",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "New APIs",
											link: "protocol/node/contribute/new_api",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "Tests and Acceptance Criteria",
											link: "protocol/node/contribute/test_acceptance",
											badge: { text: "todo", variant: "danger" },
										},
										{
											label: "CI/CD",
											link: "protocol/node/contribute/cicd",
											badge: { text: "todo", variant: "danger" },
										},
									],
								},
							],
						},
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
				{
					label: "Run a node",
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: "overview",
							link: "node_running/overview",
							badge: { text: "todo", variant: "danger" },
						},
						{
							label: "types",
							link: "node_running/type",
							badge: { text: "todo", variant: "danger" },
						},
						{
							label: "participation",
							link: "node_running/participation",
							badge: { text: "todo", variant: "danger" },
						},
						{
							label: "archival",
							link: "node_running/archival",
							badge: { text: "todo", variant: "danger" },
						},
						{
							label: "follower",
							link: "node_running/follower",
							badge: { text: "todo", variant: "danger" },
						},

						{
							label: "relay",
							link: "node_running/relay",
							badge: { text: "todo", variant: "danger" },
						},
					],
				},
				{
					label: "Tools",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Example Guide", link: "/tools/example/" },
					],
				},
			],
			expressiveCode: {
				themes: [mocha, latte],
			},
		}),
	],
});
