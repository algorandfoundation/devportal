---
editUrl: false
next: false
prev: false
title: "LookupAssetHoldingsOptions"
---

Defined in: [src/types/indexer.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L23)

Options when looking up an asset's account holdings, https://dev.algorand.co/reference/rest-api/indexer#get-v2assetsasset-idbalances

## Properties

### currencyGreaterThan?

> `optional` **currencyGreaterThan?**: `number` \| `bigint`

Defined in: [src/types/indexer.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L27)

Results should have a decimal units amount greater than this value.

***

### currencyLessThan?

> `optional` **currencyLessThan?**: `number` \| `bigint`

Defined in: [src/types/indexer.ts:25](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L25)

Results should have a decimal units amount less than this value.

***

### includeAll?

> `optional` **includeAll?**: `boolean`

Defined in: [src/types/indexer.ts:29](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L29)

Include all items including closed accounts and opted-out asset holdings.
