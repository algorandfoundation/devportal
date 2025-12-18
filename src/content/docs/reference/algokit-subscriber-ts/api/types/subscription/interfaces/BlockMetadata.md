---
title: 'Interface: BlockMetadata'
---

[**@algorandfoundation/algokit-subscriber**](../../../README.md)

---

[@algorandfoundation/algokit-subscriber](../../../modules.md) / [types/subscription](../README.md) / BlockMetadata

Defined in: [src/types/subscription.ts:33](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L33)

Metadata about a block that was retrieved from algod.

## Properties

### fullTransactionCount

> **fullTransactionCount**: `number`

Defined in: [src/types/subscription.ts:53](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L53)

Full count of transactions and inner transactions (recursively) in this block.

---

### genesisHash

> **genesisHash**: `string`

Defined in: [src/types/subscription.ts:43](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L43)

The base64 genesis hash of the chain.

---

### genesisId

> **genesisId**: `string`

Defined in: [src/types/subscription.ts:41](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L41)

The genesis ID of the chain.

---

### hash?

> `optional` **hash**: `string`

Defined in: [src/types/subscription.ts:35](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L35)

The base64 block hash.

---

### parentTransactionCount

> **parentTransactionCount**: `number`

Defined in: [src/types/subscription.ts:51](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L51)

Count of parent transactions in this block

---

### participationUpdates?

> `optional` **participationUpdates**: [`ParticipationUpdates`](ParticipationUpdates.md)

Defined in: [src/types/subscription.ts:68](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L68)

Participation account data that needs to be checked/acted on by the network.

---

### previousBlockHash?

> `optional` **previousBlockHash**: `string`

Defined in: [src/types/subscription.ts:45](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L45)

The base64 previous block hash.

---

### proposer?

> `optional` **proposer**: `string`

Defined in: [src/types/subscription.ts:70](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L70)

Address of the proposer of this block

---

### rewards?

> `optional` **rewards**: [`BlockRewards`](BlockRewards.md)

Defined in: [src/types/subscription.ts:49](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L49)

Fields relating to rewards

---

### round

> **round**: `bigint`

Defined in: [src/types/subscription.ts:37](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L37)

The round of the block.

---

### seed

> **seed**: `string`

Defined in: [src/types/subscription.ts:47](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L47)

The base64 seed of the block.

---

### stateProofTracking?

> `optional` **stateProofTracking**: [`BlockStateProofTracking`](BlockStateProofTracking.md)[]

Defined in: [src/types/subscription.ts:64](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L64)

Tracks the status of state proofs.

---

### timestamp

> **timestamp**: `number`

Defined in: [src/types/subscription.ts:39](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L39)

Block creation timestamp in seconds since epoch

---

### transactionsRoot

> **transactionsRoot**: `string`

Defined in: [src/types/subscription.ts:58](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L58)

TransactionsRoot authenticates the set of transactions appearing in the block. More specifically, it's the root of a merkle tree whose leaves are the block's Txids, in lexicographic order. For the empty block, it's 0. Note that the TxnRoot does not authenticate the signatures on the transactions, only the transactions themselves. Two blocks with the same transactions but in a different order and with different signatures will have the same TxnRoot.
Pattern : "^(?:[A-Za-z0-9+/]{4})\*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"

---

### transactionsRootSha256

> **transactionsRootSha256**: `string`

Defined in: [src/types/subscription.ts:60](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L60)

TransactionsRootSHA256 is an auxiliary TransactionRoot, built using a vector commitment instead of a merkle tree, and SHA256 hash function instead of the default SHA512_256. This commitment can be used on environments where only the SHA256 function exists.

---

### txnCounter

> **txnCounter**: `bigint`

Defined in: [src/types/subscription.ts:55](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L55)

Number of the next transaction that will be committed after this block. It is 0 when no transactions have ever been committed (since TxnCounter started being supported).

---

### upgradeState?

> `optional` **upgradeState**: [`BlockUpgradeState`](BlockUpgradeState.md)

Defined in: [src/types/subscription.ts:62](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L62)

Fields relating to a protocol upgrade.

---

### upgradeVote?

> `optional` **upgradeVote**: [`BlockUpgradeVote`](BlockUpgradeVote.md)

Defined in: [src/types/subscription.ts:66](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L66)

Fields relating to voting for a protocol upgrade.
