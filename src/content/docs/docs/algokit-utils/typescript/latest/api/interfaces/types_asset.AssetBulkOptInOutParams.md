---
title: AssetBulkOptInOutParams
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/asset](/docs/algokit-utils/typescript/latest/api/modules/types_asset/) / AssetBulkOptInOutParams

[types/asset](/docs/algokit-utils/typescript/latest/api/modules/types_asset/).AssetBulkOptInOutParams

**`Deprecated`**

Parameters for `assetBulkOptIn` / `assetBulkOptOut` call.

## Table of contents

### Properties

- [account](/docs/algokit-utils/typescript/latest/api/interfaces/types_asset.AssetBulkOptInOutParams/#account)
- [assetIds](/docs/algokit-utils/typescript/latest/api/interfaces/types_asset.AssetBulkOptInOutParams/#assetids)
- [maxFee](/docs/algokit-utils/typescript/latest/api/interfaces/types_asset.AssetBulkOptInOutParams/#maxfee)
- [note](/docs/algokit-utils/typescript/latest/api/interfaces/types_asset.AssetBulkOptInOutParams/#note)
- [suppressLog](/docs/algokit-utils/typescript/latest/api/interfaces/types_asset.AssetBulkOptInOutParams/#suppresslog)
- [transactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_asset.AssetBulkOptInOutParams/#transactionparams)
- [validateBalances](/docs/algokit-utils/typescript/latest/api/interfaces/types_asset.AssetBulkOptInOutParams/#validatebalances)

## Properties

### account

• **account**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom)

The account to opt in/out for

#### Defined in

[src/types/asset.ts:94](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L94)

---

### assetIds

• **assetIds**: `number`[]

The IDs of the assets to opt in for / out of

#### Defined in

[src/types/asset.ts:96](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L96)

---

### maxFee

• `Optional` **maxFee**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amount.AlgoAmount/)

The maximum fee that you are happy to pay per transaction (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

#### Defined in

[src/types/asset.ts:104](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L104)

---

### note

• `Optional` **note**: [`TransactionNote`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#transactionnote)

The (optional) transaction note

#### Defined in

[src/types/asset.ts:102](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L102)

---

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress

#### Defined in

[src/types/asset.ts:106](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L106)

---

### transactionParams

• `Optional` **transactionParams**: `SuggestedParams`

Optional transaction parameters

#### Defined in

[src/types/asset.ts:100](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L100)

---

### validateBalances

• `Optional` **validateBalances**: `boolean`

Whether or not to validate the opt-in/out is valid before issuing transactions; default = true

#### Defined in

[src/types/asset.ts:98](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L98)
