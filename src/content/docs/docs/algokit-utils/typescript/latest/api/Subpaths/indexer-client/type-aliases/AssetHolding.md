---
editUrl: false
next: false
prev: false
title: "AssetHolding"
---

> **AssetHolding** = `object`

Defined in: [packages/indexer\_client/src/models/asset-holding.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-holding.ts#L10)

Describes an asset held by an account.

Definition:
data/basics/userBalance.go : AssetHolding

## Properties

### amount

> **amount**: `bigint`

Defined in: [packages/indexer\_client/src/models/asset-holding.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-holding.ts#L14)

number of units held.

***

### assetId

> **assetId**: `bigint`

Defined in: [packages/indexer\_client/src/models/asset-holding.ts:19](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-holding.ts#L19)

Asset ID of the holding.

***

### deleted?

> `optional` **deleted**: `boolean`

Defined in: [packages/indexer\_client/src/models/asset-holding.ts:29](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-holding.ts#L29)

Whether or not the asset holding is currently deleted from its account.

***

### isFrozen

> **isFrozen**: `boolean`

Defined in: [packages/indexer\_client/src/models/asset-holding.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-holding.ts#L24)

whether or not the holding is frozen.

***

### optedInAtRound?

> `optional` **optedInAtRound**: `bigint`

Defined in: [packages/indexer\_client/src/models/asset-holding.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-holding.ts#L34)

Round during which the account opted into this asset holding.

***

### optedOutAtRound?

> `optional` **optedOutAtRound**: `bigint`

Defined in: [packages/indexer\_client/src/models/asset-holding.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-holding.ts#L39)

Round during which the account opted out of this asset holding.
