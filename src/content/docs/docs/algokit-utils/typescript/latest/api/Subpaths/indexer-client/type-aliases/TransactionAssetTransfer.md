---
editUrl: false
next: false
prev: false
title: "TransactionAssetTransfer"
---

> **TransactionAssetTransfer** = `object`

Defined in: [packages/indexer\_client/src/models/transaction-asset-transfer.ts:10](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-asset-transfer.ts#L10)

Fields for an asset transfer transaction.

Definition:
data/transactions/asset.go : AssetTransferTxnFields

## Properties

### amount

> **amount**: `bigint`

Defined in: [packages/indexer\_client/src/models/transaction-asset-transfer.ts:14](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-asset-transfer.ts#L14)

\[aamt\] Amount of asset to transfer. A zero amount transferred to self allocates that asset in the account's Assets map.

***

### assetId

> **assetId**: `bigint`

Defined in: [packages/indexer\_client/src/models/transaction-asset-transfer.ts:19](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-asset-transfer.ts#L19)

\[xaid\] ID of the asset being transferred.

***

### closeAmount?

> `optional` **closeAmount**: `bigint`

Defined in: [packages/indexer\_client/src/models/transaction-asset-transfer.ts:24](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-asset-transfer.ts#L24)

Number of assets transferred to the close-to account as part of the transaction.

***

### closeTo?

> `optional` **closeTo**: `string`

Defined in: [packages/indexer\_client/src/models/transaction-asset-transfer.ts:29](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-asset-transfer.ts#L29)

\[aclose\] Indicates that the asset should be removed from the account's Assets map, and specifies where the remaining asset holdings should be transferred.  It's always valid to transfer remaining asset holdings to the creator account.

***

### receiver

> **receiver**: `string`

Defined in: [packages/indexer\_client/src/models/transaction-asset-transfer.ts:34](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-asset-transfer.ts#L34)

\[arcv\] Recipient address of the transfer.

***

### sender?

> `optional` **sender**: `string`

Defined in: [packages/indexer\_client/src/models/transaction-asset-transfer.ts:39](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-asset-transfer.ts#L39)

\[asnd\] The effective sender during a clawback transactions. If this is not a zero value, the real transaction sender must be the Clawback address from the AssetParams.
