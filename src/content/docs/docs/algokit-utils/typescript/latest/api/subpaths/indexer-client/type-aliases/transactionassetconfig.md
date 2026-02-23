---
editUrl: false
next: false
prev: false
title: "TransactionAssetConfig"
---

> **TransactionAssetConfig** = `object`

Defined in: [packages/indexer\_client/src/models/transaction-asset-config.ts:16](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-asset-config.ts#L16)

Fields for asset allocation, re-configuration, and destruction.

A zero value for asset-id indicates asset creation.
A zero value for the params indicates asset destruction.

Definition:
data/transactions/asset.go : AssetConfigTxnFields

## Properties

### assetId?

> `optional` **assetId**: `bigint`

Defined in: [packages/indexer\_client/src/models/transaction-asset-config.ts:20](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-asset-config.ts#L20)

\[xaid\] ID of the asset being configured or empty if creating.

***

### params?

> `optional` **params**: [`AssetParams`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/assetparams/)

Defined in: [packages/indexer\_client/src/models/transaction-asset-config.ts:21](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-asset-config.ts#L21)
