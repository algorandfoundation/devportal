---
editUrl: false
next: false
prev: false
title: "lookupAssetHoldings"
---

> **lookupAssetHoldings**(`indexer`, `assetId`, `options`?, `paginationLimit`?): `Promise`\<`algosdk.indexerModels.MiniAssetHolding`[]\>

Defined in: [src/indexer-lookup.ts:72](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/indexer-lookup.ts#L72)

Looks up asset holdings for the given asset; will automatically paginate through all data.

## Parameters

### indexer

`IndexerClient`

An indexer instance

### assetId

The ID of the asset to look up holdings for

`number` | `bigint`

### options?

`LookupAssetHoldingsOptions`

Optional options to control the lookup

### paginationLimit?

`number`

The number of records to return per paginated request, default 1000

## Returns

`Promise`\<`algosdk.indexerModels.MiniAssetHolding`[]\>

The list of application results
