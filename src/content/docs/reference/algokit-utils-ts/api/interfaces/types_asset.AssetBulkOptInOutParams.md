---
title: AssetBulkOptInOutParams
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/asset](/reference/algokit-utils-ts/api/modules/types_asset/) / AssetBulkOptInOutParams



[types/asset](/reference/algokit-utils-ts/api/modules/types_asset/).AssetBulkOptInOutParams

**`Deprecated`**

Parameters for `assetBulkOptIn` / `assetBulkOptOut` call.

## Table of contents

### Properties

- [account](#account)
- [assetIds](#assetids)
- [maxFee](#maxfee)
- [note](#note)
- [suppressLog](#suppresslog)
- [transactionParams](#transactionparams)
- [validateBalances](#validatebalances)

## Properties

### account

• **account**: [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The account to opt in/out for

#### Defined in

[src/types/asset.ts:94](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L94)

___

### assetIds

• **assetIds**: `number`[]

The IDs of the assets to opt in for / out of

#### Defined in

[src/types/asset.ts:96](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L96)

___

### maxFee

• `Optional` **maxFee**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The maximum fee that you are happy to pay per transaction (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

#### Defined in

[src/types/asset.ts:104](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L104)

___

### note

• `Optional` **note**: [`TransactionNote`](/reference/algokit-utils-ts/api/modules/types_transaction/#transactionnote)

The (optional) transaction note

#### Defined in

[src/types/asset.ts:102](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L102)

___

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress

#### Defined in

[src/types/asset.ts:106](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L106)

___

### transactionParams

• `Optional` **transactionParams**: `SuggestedParams`

Optional transaction parameters

#### Defined in

[src/types/asset.ts:100](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L100)

___

### validateBalances

• `Optional` **validateBalances**: `boolean`

Whether or not to validate the opt-in/out is valid before issuing transactions; default = true

#### Defined in

[src/types/asset.ts:98](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L98)