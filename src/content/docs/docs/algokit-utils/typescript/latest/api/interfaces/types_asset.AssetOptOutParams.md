---
title: AssetOptOutParams
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/asset](/docs/algokit-utils/typescript/latest/api/modules/types_asset/) / AssetOptOutParams

[types/asset](/docs/algokit-utils/typescript/latest/api/modules/types_asset/).AssetOptOutParams

**`Deprecated`**

Parameters for `assetOptOut` call.

## Hierarchy

- [`AssetOptInParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/)

  ↳ **`AssetOptOutParams`**

## Table of contents

### Properties

- [account](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptoutparams/#account)
- [assetCreatorAddress](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptoutparams/#assetcreatoraddress)
- [assetId](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptoutparams/#assetid)
- [atc](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptoutparams/#atc)
- [ensureZeroBalance](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptoutparams/#ensurezerobalance)
- [fee](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptoutparams/#fee)
- [lease](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptoutparams/#lease)
- [maxFee](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptoutparams/#maxfee)
- [maxRoundsToWaitForConfirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptoutparams/#maxroundstowaitforconfirmation)
- [note](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptoutparams/#note)
- [populateAppCallResources](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptoutparams/#populateappcallresources)
- [skipSending](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptoutparams/#skipsending)
- [skipWaiting](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptoutparams/#skipwaiting)
- [suppressLog](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptoutparams/#suppresslog)
- [transactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptoutparams/#transactionparams)

## Properties

### account

• **account**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom)

The account to opt in/out for

#### Inherited from

[AssetOptInParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/).[account](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/#account)

#### Defined in

[src/types/asset.ts:72](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L72)

---

### assetCreatorAddress

• `Optional` **assetCreatorAddress**: `string`

The address of the creator account for the asset; if unspecified then it looks it up using algod

#### Defined in

[src/types/asset.ts:86](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L86)

---

### assetId

• **assetId**: `number`

The ID of the assets to opt in for / out of

#### Inherited from

[AssetOptInParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/).[assetId](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/#assetid)

#### Defined in

[src/types/asset.ts:74](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L74)

---

### atc

• `Optional` **atc**: `AtomicTransactionComposer`

An optional `AtomicTransactionComposer` to add the transaction to, if specified then `skipSending: undefined` has the same effect as `skipSending: true`

#### Inherited from

[AssetOptInParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/).[atc](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/#atc)

#### Defined in

[src/types/transaction.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L36)

---

### ensureZeroBalance

• `Optional` **ensureZeroBalance**: `boolean`

Whether or not to validate the account has a zero-balance before issuing the opt-out; default = true

#### Defined in

[src/types/asset.ts:88](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L88)

---

### fee

• `Optional` **fee**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amountalgoamount/)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Inherited from

[AssetOptInParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/).[fee](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/#fee)

#### Defined in

[src/types/transaction.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L40)

---

### lease

• `Optional` **lease**: `string` \| `Uint8Array`

An (optional) [transaction lease](https://dev.algorand.co/concepts/transactions/leases) to apply

#### Inherited from

[AssetOptInParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/).[lease](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/#lease)

#### Defined in

[src/types/asset.ts:80](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L80)

---

### maxFee

• `Optional` **maxFee**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amountalgoamount/)

The maximum fee that you are happy to pay (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

#### Inherited from

[AssetOptInParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/).[maxFee](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/#maxfee)

#### Defined in

[src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

---

### maxRoundsToWaitForConfirmation

• `Optional` **maxRoundsToWaitForConfirmation**: `number`

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

#### Inherited from

[AssetOptInParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/).[maxRoundsToWaitForConfirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/#maxroundstowaitforconfirmation)

#### Defined in

[src/types/transaction.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L44)

---

### note

• `Optional` **note**: [`TransactionNote`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#transactionnote)

The (optional) transaction note

#### Inherited from

[AssetOptInParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/).[note](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/#note)

#### Defined in

[src/types/asset.ts:78](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L78)

---

### populateAppCallResources

• `Optional` **populateAppCallResources**: `boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

#### Inherited from

[AssetOptInParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/).[populateAppCallResources](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/#populateappcallresources)

#### Defined in

[src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

---

### skipSending

• `Optional` **skipSending**: `boolean`

Whether to skip signing and sending the transaction to the chain (default: transaction signed and sent to chain, unless `atc` specified)
and instead just return the raw transaction, e.g. so you can add it to a group of transactions

#### Inherited from

[AssetOptInParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/).[skipSending](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/#skipsending)

#### Defined in

[src/types/transaction.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L32)

---

### skipWaiting

• `Optional` **skipWaiting**: `boolean`

Whether to skip waiting for the submitted transaction (only relevant if `skipSending` is `false` or unset)

#### Inherited from

[AssetOptInParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/).[skipWaiting](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/#skipwaiting)

#### Defined in

[src/types/transaction.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L34)

---

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress

#### Inherited from

[AssetOptInParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/).[suppressLog](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/#suppresslog)

#### Defined in

[src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)

---

### transactionParams

• `Optional` **transactionParams**: `SuggestedParams`

Optional transaction parameters

#### Inherited from

[AssetOptInParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/).[transactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_assetassetoptinparams/#transactionparams)

#### Defined in

[src/types/asset.ts:76](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L76)
