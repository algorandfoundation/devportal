---
editUrl: false
next: false
prev: false
title: "Block"
---

> **Block** = `object`

Defined in: [packages/indexer\_client/src/models/block.ts:31](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L31)

Block information.

Definition:
data/bookkeeping/block.go : Block

## Properties

### bonus?

> `optional` **bonus**: `number`

Defined in: [packages/indexer\_client/src/models/block.ts:45](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L45)

the potential bonus payout for this block.

***

### feesCollected?

> `optional` **feesCollected**: `number`

Defined in: [packages/indexer\_client/src/models/block.ts:40](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L40)

the sum of all fees paid by transactions in this block.

***

### genesisHash

> **genesisHash**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/block.ts:55](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L55)

\[gh\] hash to which this block belongs.

***

### genesisId

> **genesisId**: `string`

Defined in: [packages/indexer\_client/src/models/block.ts:60](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L60)

\[gen\] ID to which this block belongs.

***

### participationUpdates

> **participationUpdates**: [`ParticipationUpdates`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/participationupdates/)

Defined in: [packages/indexer\_client/src/models/block.ts:121](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L121)

***

### previousBlockHash

> **previousBlockHash**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/block.ts:65](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L65)

\[prev\] Previous block hash.

***

### previousBlockHash512?

> `optional` **previousBlockHash512**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/block.ts:70](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L70)

\[prev512\] Previous block hash, using SHA-512.

***

### proposer?

> `optional` **proposer**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/indexer\_client/src/models/block.ts:35](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L35)

the proposer of this block.

***

### proposerPayout?

> `optional` **proposerPayout**: `number`

Defined in: [packages/indexer\_client/src/models/block.ts:50](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L50)

the actual amount transferred to the proposer from the fee sink.

***

### rewards

> **rewards**: [`BlockRewards`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/blockrewards/)

Defined in: [packages/indexer\_client/src/models/block.ts:71](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L71)

***

### round

> **round**: `bigint`

Defined in: [packages/indexer\_client/src/models/block.ts:76](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L76)

\[rnd\] Current round on which this block was appended to the chain.

***

### seed

> **seed**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/block.ts:81](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L81)

\[seed\] Sortition seed.

***

### stateProofTracking?

> `optional` **stateProofTracking**: [`StateProofTracking`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/stateprooftracking/)[]

Defined in: [packages/indexer\_client/src/models/block.ts:86](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L86)

Tracks the status of state proofs.

***

### timestamp

> **timestamp**: `number`

Defined in: [packages/indexer\_client/src/models/block.ts:91](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L91)

\[ts\] Block creation timestamp in seconds since epoch

***

### transactions

> **transactions**: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transaction/)[]

Defined in: [packages/indexer\_client/src/models/block.ts:96](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L96)

\[txns\] list of transactions corresponding to a given round.

***

### transactionsRoot

> **transactionsRoot**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/block.ts:101](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L101)

\[txn\] TransactionsRoot authenticates the set of transactions appearing in the block. More specifically, it's the root of a merkle tree whose leaves are the block's Txids, in lexicographic order. For the empty block, it's 0. Note that the TxnRoot does not authenticate the signatures on the transactions, only the transactions themselves. Two blocks with the same transactions but in a different order and with different signatures will have the same TxnRoot.

***

### transactionsRootSha256?

> `optional` **transactionsRootSha256**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/block.ts:106](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L106)

\[txn256\] TransactionsRootSHA256 is an auxiliary TransactionRoot, built using a vector commitment instead of a merkle tree, and SHA256 hash function instead of the default SHA512_256. This commitment can be used on environments where only the SHA256 function exists.

***

### transactionsRootSha512?

> `optional` **transactionsRootSha512**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/block.ts:111](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L111)

\[txn512\] TransactionsRootSHA512 is an auxiliary TransactionRoot, built using a vector commitment instead of a merkle tree, and SHA512 hash function instead of the default SHA512_256.

***

### txnCounter?

> `optional` **txnCounter**: `number`

Defined in: [packages/indexer\_client/src/models/block.ts:118](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L118)

\[tc\] TxnCounter counts the number of transactions committed in the ledger, from the time at which support for this feature was introduced.

Specifically, TxnCounter is the number of the next transaction that will be committed after this block.  It is 0 when no transactions have ever been committed (since TxnCounter started being supported).

***

### upgradeState

> **upgradeState**: [`BlockUpgradeState`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/blockupgradestate/)

Defined in: [packages/indexer\_client/src/models/block.ts:119](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L119)

***

### upgradeVote?

> `optional` **upgradeVote**: [`BlockUpgradeVote`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/blockupgradevote/)

Defined in: [packages/indexer\_client/src/models/block.ts:120](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block.ts#L120)
