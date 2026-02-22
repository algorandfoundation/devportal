---
editUrl: false
next: false
prev: false
title: "AssetHolding"
---

> **AssetHolding** = `object`

Defined in: [packages/algod\_client/src/models/asset-holding.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/asset-holding.ts#L10)

Describes an asset held by an account.

Definition:
data/basics/userBalance.go : AssetHolding

## Properties

### amount

> **amount**: `bigint`

Defined in: [packages/algod\_client/src/models/asset-holding.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/asset-holding.ts#L14)

\[a\] number of units held.

***

### assetId

> **assetId**: `bigint`

Defined in: [packages/algod\_client/src/models/asset-holding.ts:19](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/asset-holding.ts#L19)

Asset ID of the holding.

***

### isFrozen

> **isFrozen**: `boolean`

Defined in: [packages/algod\_client/src/models/asset-holding.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/asset-holding.ts#L24)

\[f\] whether or not the holding is frozen.
