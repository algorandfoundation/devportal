---
editUrl: false
next: false
prev: false
title: "AssetHoldingsResponse"
---

> **AssetHoldingsResponse** = `object`

Defined in: [packages/indexer\_client/src/models/asset-holdings-response.ts:6](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-holdings-response.ts#L6)

## Properties

### assets

> **assets**: [`AssetHolding`](/algokit-utils-ts/api/subpaths/indexer-client/type-aliases/assetholding/)[]

Defined in: [packages/indexer\_client/src/models/asset-holdings-response.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-holdings-response.ts#L16)

***

### currentRound

> **currentRound**: `bigint`

Defined in: [packages/indexer\_client/src/models/asset-holdings-response.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-holdings-response.ts#L10)

Round at which the results were computed.

***

### nextToken?

> `optional` **nextToken**: `string`

Defined in: [packages/indexer\_client/src/models/asset-holdings-response.ts:15](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-holdings-response.ts#L15)

Used for pagination, when making another request provide this token with the next parameter.
