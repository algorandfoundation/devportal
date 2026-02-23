---
editUrl: false
next: false
prev: false
title: "lookupAssetHoldings"
---

> **lookupAssetHoldings**(`indexer`, `assetId`, `options?`, `paginationLimit?`): `Promise`\<[`MiniAssetHolding`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/miniassetholding/)[]\>

Defined in: [src/indexer-client/indexer-lookup.ts:54](https://github.com/larkiny/algokit-utils-ts/blob/main/src/indexer-client/indexer-lookup.ts#L54)

Looks up asset holdings for the given asset; will automatically paginate through all data.

## Parameters

### indexer

[`IndexerClient`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerclient/)

An indexer instance

### assetId

The ID of the asset to look up holdings for

`number` | `bigint`

### options?

[`LookupAssetHoldingsOptions`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/lookupassetholdingsoptions/)

Optional options to control the lookup

### paginationLimit?

`number`

The number of records to return per paginated request, default 1000

## Returns

`Promise`\<[`MiniAssetHolding`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/miniassetholding/)[]\>

The list of application results
