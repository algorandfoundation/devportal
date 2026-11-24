---
editUrl: false
next: false
prev: false
title: "AssetDestroyParams"
---

> **AssetDestroyParams** = [`CommonTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/commontransactionparams/) & `object`

Defined in: [src/types/composer.ts:277](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L277)

Parameters to define an asset destroy transaction.

Created assets can be destroyed only by the asset manager account. All of the assets must be owned by the creator of the asset before the asset can be deleted.

## Type Declaration

### assetId

> **assetId**: `bigint`

ID of the asset to destroy
