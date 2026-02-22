---
editUrl: false
next: false
prev: false
title: "MiniAssetHolding"
---

> **MiniAssetHolding** = `object`

Defined in: [packages/indexer\_client/src/models/mini-asset-holding.ts:7](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/mini-asset-holding.ts#L7)

A simplified version of AssetHolding

## Properties

### address

> **address**: `string`

Defined in: [packages/indexer\_client/src/models/mini-asset-holding.ts:8](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/mini-asset-holding.ts#L8)

***

### amount

> **amount**: `bigint`

Defined in: [packages/indexer\_client/src/models/mini-asset-holding.ts:9](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/mini-asset-holding.ts#L9)

***

### deleted?

> `optional` **deleted**: `boolean`

Defined in: [packages/indexer\_client/src/models/mini-asset-holding.ts:15](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/mini-asset-holding.ts#L15)

Whether or not this asset holding is currently deleted from its account.

***

### isFrozen

> **isFrozen**: `boolean`

Defined in: [packages/indexer\_client/src/models/mini-asset-holding.ts:10](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/mini-asset-holding.ts#L10)

***

### optedInAtRound?

> `optional` **optedInAtRound**: `bigint`

Defined in: [packages/indexer\_client/src/models/mini-asset-holding.ts:20](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/mini-asset-holding.ts#L20)

Round during which the account opted into the asset.

***

### optedOutAtRound?

> `optional` **optedOutAtRound**: `bigint`

Defined in: [packages/indexer\_client/src/models/mini-asset-holding.ts:25](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/mini-asset-holding.ts#L25)

Round during which the account opted out of the asset.
