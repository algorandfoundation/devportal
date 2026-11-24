---
editUrl: false
next: false
prev: false
title: "AssetTransferParams"
---

> **AssetTransferParams** = [`CommonTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/commontransactionparams/) & `object`

Defined in: [src/types/composer.ts:283](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L283)

Parameters to define an asset transfer transaction.

## Type Declaration

### amount

> **amount**: `bigint`

Amount of the asset to transfer (in smallest divisible (decimal) units).

### assetId

> **assetId**: `bigint`

ID of the asset to transfer.

### clawbackTarget?

> `optional` **clawbackTarget?**: `string` \| `Address`

Optional address of an account to clawback the asset from.

Requires the sender to be the clawback account.

**Warning:** Be careful with this parameter as it can lead to unexpected loss of funds if not used correctly.

### closeAssetTo?

> `optional` **closeAssetTo?**: `string` \| `Address`

Optional address of an account to close the asset position to.

**Warning:** Be careful with this parameter as it can lead to loss of funds if not used correctly.

### receiver

> **receiver**: `string` \| `Address`

The address of the account that will receive the asset unit(s).
