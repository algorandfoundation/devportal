---
editUrl: false
next: false
prev: false
title: 'LookupAssetHoldingsOptions'
---

Defined in: [src/indexer.ts:2](https://github.com/larkiny/algokit-utils-ts/blob/main/src/indexer.ts#L2)

Options when looking up an asset's account holdings, https://dev.algorand.co/reference/rest-apis/indexer#get-v2assetsasset-idbalances

## Properties

### currencyGreaterThan?

> `optional` **currencyGreaterThan**: `number` \| `bigint`

Defined in: [src/indexer.ts:6](https://github.com/larkiny/algokit-utils-ts/blob/main/src/indexer.ts#L6)

Results should have a decimal units amount greater than this value.

---

### currencyLessThan?

> `optional` **currencyLessThan**: `number` \| `bigint`

Defined in: [src/indexer.ts:4](https://github.com/larkiny/algokit-utils-ts/blob/main/src/indexer.ts#L4)

Results should have a decimal units amount less than this value.

---

### includeAll?

> `optional` **includeAll**: `boolean`

Defined in: [src/indexer.ts:8](https://github.com/larkiny/algokit-utils-ts/blob/main/src/indexer.ts#L8)

Include all items including closed accounts and opted-out asset holdings.
