---
editUrl: false
next: false
prev: false
title: "AssetFreezeParams"
---

> **AssetFreezeParams** = [`CommonTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/commontransactionparams/) & `object`

Defined in: [src/types/composer.ts:264](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L264)

Parameters to define an asset freeze transaction.

## Type Declaration

### account

> **account**: `string` \| `Address`

The address of the account to freeze or unfreeze

### assetId

> **assetId**: `bigint`

The ID of the asset to freeze/unfreeze

### frozen

> **frozen**: `boolean`

Whether the assets in the account should be frozen
