---
editUrl: false
next: false
prev: false
title: "AssetBulkOptInOutParams"
---

Defined in: [src/types/asset.ts:92](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L92)

:::caution[Deprecated]
Parameters for `assetBulkOptIn` / `assetBulkOptOut` call.
:::

## Properties

### ~~account~~

> **account**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/asset.ts:94](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L94)

The account to opt in/out for

***

### ~~assetIds~~

> **assetIds**: `number`[]

Defined in: [src/types/asset.ts:96](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L96)

The IDs of the assets to opt in for / out of

***

### ~~maxFee?~~

> `optional` **maxFee?**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/asset.ts:104](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L104)

The maximum fee that you are happy to pay per transaction (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

***

### ~~note?~~

> `optional` **note?**: [`TransactionNote`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/transactionnote/)

Defined in: [src/types/asset.ts:102](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L102)

The (optional) transaction note

***

### ~~suppressLog?~~

> `optional` **suppressLog?**: `boolean`

Defined in: [src/types/asset.ts:106](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L106)

Whether to suppress log messages from transaction send, default: do not suppress

***

### ~~transactionParams?~~

> `optional` **transactionParams?**: `SuggestedParams`

Defined in: [src/types/asset.ts:100](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L100)

Optional transaction parameters

***

### ~~validateBalances?~~

> `optional` **validateBalances?**: `boolean`

Defined in: [src/types/asset.ts:98](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L98)

Whether or not to validate the opt-in/out is valid before issuing transactions; default = true
