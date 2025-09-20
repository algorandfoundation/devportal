---
title: AssetOptOutParams
slug: reference/algokit-utils-ts/api/interfaces/types_assetassetoptoutparams
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/asset](/reference/algokit-utils-ts/api/modules/types_asset/) / AssetOptOutParams



[types/asset](/reference/algokit-utils-ts/api/modules/types_asset/).AssetOptOutParams

**`Deprecated`**

Parameters for `assetOptOut` call.

## Hierarchy

- [`AssetOptInParams`](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/)

  ↳ **`AssetOptOutParams`**

## Table of contents

### Properties

- [account](#account)
- [assetCreatorAddress](#assetcreatoraddress)
- [assetId](#assetid)
- [atc](#atc)
- [ensureZeroBalance](#ensurezerobalance)
- [fee](#fee)
- [lease](#lease)
- [maxFee](#maxfee)
- [maxRoundsToWaitForConfirmation](#maxroundstowaitforconfirmation)
- [note](#note)
- [populateAppCallResources](#populateappcallresources)
- [skipSending](#skipsending)
- [skipWaiting](#skipwaiting)
- [suppressLog](#suppresslog)
- [transactionParams](#transactionparams)

## Properties

### account

• **account**: [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The account to opt in/out for

#### Inherited from

[AssetOptInParams](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/).[account](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/#account)

#### Defined in

[src/types/asset.ts:72](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L72)

___

### assetCreatorAddress

• `Optional` **assetCreatorAddress**: `string`

The address of the creator account for the asset; if unspecified then it looks it up using algod

#### Defined in

[src/types/asset.ts:86](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L86)

___

### assetId

• **assetId**: `number`

The ID of the assets to opt in for / out of

#### Inherited from

[AssetOptInParams](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/).[assetId](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/#assetid)

#### Defined in

[src/types/asset.ts:74](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L74)

___

### atc

• `Optional` **atc**: `AtomicTransactionComposer`

An optional `AtomicTransactionComposer` to add the transaction to, if specified then `skipSending: undefined` has the same effect as `skipSending: true`

#### Inherited from

[AssetOptInParams](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/).[atc](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/#atc)

#### Defined in

[src/types/transaction.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L36)

___

### ensureZeroBalance

• `Optional` **ensureZeroBalance**: `boolean`

Whether or not to validate the account has a zero-balance before issuing the opt-out; default = true

#### Defined in

[src/types/asset.ts:88](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L88)

___

### fee

• `Optional` **fee**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Inherited from

[AssetOptInParams](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/).[fee](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/#fee)

#### Defined in

[src/types/transaction.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L40)

___

### lease

• `Optional` **lease**: `string` \| `Uint8Array`

An (optional) [transaction lease](https://dev.algorand.co/concepts/transactions/leases) to apply

#### Inherited from

[AssetOptInParams](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/).[lease](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/#lease)

#### Defined in

[src/types/asset.ts:80](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L80)

___

### maxFee

• `Optional` **maxFee**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The maximum fee that you are happy to pay (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

#### Inherited from

[AssetOptInParams](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/).[maxFee](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/#maxfee)

#### Defined in

[src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

___

### maxRoundsToWaitForConfirmation

• `Optional` **maxRoundsToWaitForConfirmation**: `number`

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

#### Inherited from

[AssetOptInParams](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/).[maxRoundsToWaitForConfirmation](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/#maxroundstowaitforconfirmation)

#### Defined in

[src/types/transaction.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L44)

___

### note

• `Optional` **note**: [`TransactionNote`](/reference/algokit-utils-ts/api/modules/types_transaction/#transactionnote)

The (optional) transaction note

#### Inherited from

[AssetOptInParams](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/).[note](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/#note)

#### Defined in

[src/types/asset.ts:78](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L78)

___

### populateAppCallResources

• `Optional` **populateAppCallResources**: `boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

#### Inherited from

[AssetOptInParams](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/).[populateAppCallResources](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/#populateappcallresources)

#### Defined in

[src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

___

### skipSending

• `Optional` **skipSending**: `boolean`

Whether to skip signing and sending the transaction to the chain (default: transaction signed and sent to chain, unless `atc` specified)
and instead just return the raw transaction, e.g. so you can add it to a group of transactions

#### Inherited from

[AssetOptInParams](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/).[skipSending](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/#skipsending)

#### Defined in

[src/types/transaction.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L32)

___

### skipWaiting

• `Optional` **skipWaiting**: `boolean`

Whether to skip waiting for the submitted transaction (only relevant if `skipSending` is `false` or unset)

#### Inherited from

[AssetOptInParams](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/).[skipWaiting](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/#skipwaiting)

#### Defined in

[src/types/transaction.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L34)

___

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress

#### Inherited from

[AssetOptInParams](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/).[suppressLog](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/#suppresslog)

#### Defined in

[src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)

___

### transactionParams

• `Optional` **transactionParams**: `SuggestedParams`

Optional transaction parameters

#### Inherited from

[AssetOptInParams](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/).[transactionParams](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/#transactionparams)

#### Defined in

[src/types/asset.ts:76](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L76)