---
editUrl: false
next: false
prev: false
title: "AssetBalancesResponse"
---

> **AssetBalancesResponse** = `object`

Defined in: [packages/indexer\_client/src/models/asset-balances-response.ts:6](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-balances-response.ts#L6)

## Properties

### balances

> **balances**: [`MiniAssetHolding`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/miniassetholding/)[]

Defined in: [packages/indexer\_client/src/models/asset-balances-response.ts:7](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-balances-response.ts#L7)

***

### currentRound

> **currentRound**: `bigint`

Defined in: [packages/indexer\_client/src/models/asset-balances-response.ts:12](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-balances-response.ts#L12)

Round at which the results were computed.

***

### nextToken?

> `optional` **nextToken**: `string`

Defined in: [packages/indexer\_client/src/models/asset-balances-response.ts:17](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/asset-balances-response.ts#L17)

Used for pagination, when making another request provide this token with the next parameter.
