---
editUrl: false
next: false
prev: false
title: "AssetOptOutParams"
---

> **AssetOptOutParams** = [`CommonTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/commontransactionparams/) & `object`

Defined in: [src/types/composer.ts:311](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L311)

Parameters to define an asset opt-out transaction.

## Type Declaration

### assetId

> **assetId**: `bigint`

ID of the asset that will be opted-out of.

### creator

> **creator**: `string` \| `Address`

The address of the asset creator account to close the asset
  position to (any remaining asset units will be sent to this account).
