---
editUrl: false
next: false
prev: false
title: "PendingTransactionResponse"
---

> **PendingTransactionResponse** = `object`

Defined in: [packages/algod\_client/src/models/pending-transaction-response.ts:20](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/pending-transaction-response.ts#L20)

Details about a pending transaction. If the transaction was recently confirmed, includes confirmation details like the round and reward details.

## Properties

### appId?

> `optional` **appId**: `bigint`

Defined in: [packages/algod\_client/src/models/pending-transaction-response.ts:29](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/pending-transaction-response.ts#L29)

The application index if the transaction was found and it created an application.

***

### assetClosingAmount?

> `optional` **assetClosingAmount**: `bigint`

Defined in: [packages/algod\_client/src/models/pending-transaction-response.ts:44](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/pending-transaction-response.ts#L44)

The number of the asset's unit that were transferred to the close-to address.

***

### assetId?

> `optional` **assetId**: `bigint`

Defined in: [packages/algod\_client/src/models/pending-transaction-response.ts:24](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/pending-transaction-response.ts#L24)

The asset index if the transaction was found and it created an asset.

***

### closeRewards?

> `optional` **closeRewards**: `bigint`

Defined in: [packages/algod\_client/src/models/pending-transaction-response.ts:34](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/pending-transaction-response.ts#L34)

Rewards in microalgos applied to the close remainder to account.

***

### closingAmount?

> `optional` **closingAmount**: `bigint`

Defined in: [packages/algod\_client/src/models/pending-transaction-response.ts:39](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/pending-transaction-response.ts#L39)

Closing amount for the transaction.

***

### confirmedRound?

> `optional` **confirmedRound**: `bigint`

Defined in: [packages/algod\_client/src/models/pending-transaction-response.ts:49](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/pending-transaction-response.ts#L49)

The round where this transaction was confirmed, if present.

***

### globalStateDelta?

> `optional` **globalStateDelta**: [`StateDelta`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/statedelta/)

Defined in: [packages/algod\_client/src/models/pending-transaction-response.ts:70](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/pending-transaction-response.ts#L70)

***

### innerTxns?

> `optional` **innerTxns**: `PendingTransactionResponse`[]

Defined in: [packages/algod\_client/src/models/pending-transaction-response.ts:80](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/pending-transaction-response.ts#L80)

Inner transactions produced by application execution.

***

### localStateDelta?

> `optional` **localStateDelta**: [`AccountStateDelta`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/accountstatedelta/)[]

Defined in: [packages/algod\_client/src/models/pending-transaction-response.ts:69](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/pending-transaction-response.ts#L69)

Local state key/value changes for the application being executed by this transaction.

***

### logs?

> `optional` **logs**: `Uint8Array`[]

Defined in: [packages/algod\_client/src/models/pending-transaction-response.ts:75](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/pending-transaction-response.ts#L75)

Logs for the application being executed by this transaction.

***

### poolError

> **poolError**: `string`

Defined in: [packages/algod\_client/src/models/pending-transaction-response.ts:54](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/pending-transaction-response.ts#L54)

Indicates that the transaction was kicked out of this node's transaction pool (and specifies why that happened).  An empty string indicates the transaction wasn't kicked out of this node's txpool due to an error.

***

### receiverRewards?

> `optional` **receiverRewards**: `bigint`

Defined in: [packages/algod\_client/src/models/pending-transaction-response.ts:59](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/pending-transaction-response.ts#L59)

Rewards in microalgos applied to the receiver account.

***

### senderRewards?

> `optional` **senderRewards**: `bigint`

Defined in: [packages/algod\_client/src/models/pending-transaction-response.ts:64](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/pending-transaction-response.ts#L64)

Rewards in microalgos applied to the sender account.

***

### txn

> **txn**: [`SignedTransaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/signedtransaction/)

Defined in: [packages/algod\_client/src/models/pending-transaction-response.ts:85](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/pending-transaction-response.ts#L85)

The raw signed transaction.
