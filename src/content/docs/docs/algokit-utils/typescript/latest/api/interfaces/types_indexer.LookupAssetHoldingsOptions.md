---
title: LookupAssetHoldingsOptions
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/indexer](/docs/algokit-utils/typescript/latest/api/modules/types_indexer/) / LookupAssetHoldingsOptions

[types/indexer](/docs/algokit-utils/typescript/latest/api/modules/types_indexer/).LookupAssetHoldingsOptions

Options when looking up an asset's account holdings, https://dev.algorand.co/reference/rest-apis/indexer#get-v2assetsasset-idbalances

## Table of contents

### Properties

- [currencyGreaterThan](/docs/algokit-utils/typescript/latest/api/interfaces/types_indexerlookupassetholdingsoptions/#currencygreaterthan)
- [currencyLessThan](/docs/algokit-utils/typescript/latest/api/interfaces/types_indexerlookupassetholdingsoptions/#currencylessthan)
- [includeAll](/docs/algokit-utils/typescript/latest/api/interfaces/types_indexerlookupassetholdingsoptions/#includeall)

## Properties

### currencyGreaterThan

• `Optional` **currencyGreaterThan**: `number` \| `bigint`

Results should have a decimal units amount greater than this value.

#### Defined in

[src/types/indexer.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L27)

---

### currencyLessThan

• `Optional` **currencyLessThan**: `number` \| `bigint`

Results should have a decimal units amount less than this value.

#### Defined in

[src/types/indexer.ts:25](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L25)

---

### includeAll

• `Optional` **includeAll**: `boolean`

Include all items including closed accounts and opted-out asset holdings.

#### Defined in

[src/types/indexer.ts:29](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L29)
