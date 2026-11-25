---
editUrl: false
next: false
prev: false
title: "lookupAssetHoldings"
---

> **lookupAssetHoldings**(`indexer`, `assetId`, `options?`, `paginationLimit?`): `Promise`\<`MiniAssetHolding`[]\>

Defined in: [src/indexer-lookup.ts:72](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/indexer-lookup.ts#L72)

Looks up asset holdings for the given asset; will automatically paginate through all data.

## Parameters

### indexer

`IndexerClient`

An indexer instance

### assetId

`number` \| `bigint`

The ID of the asset to look up holdings for

### options?

[`LookupAssetHoldingsOptions`](/docs/algokit-utils/typescript/latest/api/types/indexer/interfaces/lookupassetholdingsoptions/)

Optional options to control the lookup

### paginationLimit?

`number`

The number of records to return per paginated request, default 1000

## Returns

`Promise`\<`MiniAssetHolding`[]\>

The list of application results
