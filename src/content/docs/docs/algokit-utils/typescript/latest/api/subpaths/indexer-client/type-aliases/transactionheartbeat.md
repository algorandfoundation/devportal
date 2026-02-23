---
editUrl: false
next: false
prev: false
title: "TransactionHeartbeat"
---

> **TransactionHeartbeat** = `object`

Defined in: [packages/indexer\_client/src/models/transaction-heartbeat.ts:12](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-heartbeat.ts#L12)

Fields for a heartbeat transaction.

Definition:
data/transactions/heartbeat.go : HeartbeatTxnFields

## Properties

### hbAddress

> **hbAddress**: `string`

Defined in: [packages/indexer\_client/src/models/transaction-heartbeat.ts:16](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-heartbeat.ts#L16)

\[hbad\] HbAddress is the account this txn is proving onlineness for.

***

### hbKeyDilution

> **hbKeyDilution**: `bigint`

Defined in: [packages/indexer\_client/src/models/transaction-heartbeat.ts:32](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-heartbeat.ts#L32)

\[hbkd\] HbKeyDilution must match HbAddress account's current KeyDilution.

***

### hbProof

> **hbProof**: [`HbProofFields`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/hbprooffields/)

Defined in: [packages/indexer\_client/src/models/transaction-heartbeat.ts:17](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-heartbeat.ts#L17)

***

### hbSeed

> **hbSeed**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/transaction-heartbeat.ts:22](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-heartbeat.ts#L22)

\[hbsd\] HbSeed must be the block seed for the this transaction's firstValid block.

***

### hbVoteId

> **hbVoteId**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/transaction-heartbeat.ts:27](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-heartbeat.ts#L27)

\[hbvid\] HbVoteID must match the HbAddress account's current VoteID.
