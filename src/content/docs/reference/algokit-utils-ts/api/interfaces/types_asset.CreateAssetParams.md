---
title: CreateAssetParams
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/asset](/reference/algokit-utils-ts/api/modules/types_asset/) / CreateAssetParams

[types/asset](/reference/algokit-utils-ts/api/modules/types_asset/).CreateAssetParams

**`Deprecated`**

Parameters for `createAsset` call.

## Hierarchy

- [`SendTransactionParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/)

  ↳ **`CreateAssetParams`**

## Table of contents

### Properties

- [atc](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#atc)
- [clawbackAccount](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#clawbackaccount)
- [creator](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#creator)
- [decimals](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#decimals)
- [fee](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#fee)
- [freezeAccount](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#freezeaccount)
- [frozenByDefault](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#frozenbydefault)
- [lease](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#lease)
- [manager](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#manager)
- [maxFee](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#maxfee)
- [maxRoundsToWaitForConfirmation](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#maxroundstowaitforconfirmation)
- [metadataHash](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#metadatahash)
- [name](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#name)
- [note](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#note)
- [populateAppCallResources](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#populateappcallresources)
- [reserveAccount](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#reserveaccount)
- [skipSending](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#skipsending)
- [skipWaiting](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#skipwaiting)
- [suppressLog](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#suppresslog)
- [total](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#total)
- [transactionParams](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#transactionparams)
- [unit](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#unit)
- [url](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/#url)

## Properties

### atc

• `Optional` **atc**: `AtomicTransactionComposer`

An optional `AtomicTransactionComposer` to add the transaction to, if specified then `skipSending: undefined` has the same effect as `skipSending: true`

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[atc](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#atc)

#### Defined in

[src/types/transaction.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L36)

---

### clawbackAccount

• `Optional` **clawbackAccount**: `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The optional account that can clawback holdings of this asset. If empty, clawback is not permitted.
If not set at asset creation or subsequently set to empty by the manager the field is permanently empty.

#### Defined in

[src/types/asset.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L57)

---

### creator

• **creator**: [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The account to create the asset.

This account automatically is opted in to the asset and holds all units after creation.

#### Defined in

[src/types/asset.ts:11](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L11)

---

### decimals

• **decimals**: `number`

The number of digits to use after the decimal point when displaying the asset.
If 0, the asset is not divisible.
If 1, the base unit of the asset is in tenths.
If 2, the base unit of the asset is in hundredths.
If 3, the base unit of the asset is in thousandths, and so on up to 19 decimal places.
This field can only be specified upon asset creation.

#### Defined in

[src/types/asset.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L26)

---

### fee

• `Optional` **fee**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[fee](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#fee)

#### Defined in

[src/types/transaction.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L40)

---

### freezeAccount

• `Optional` **freezeAccount**: `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The optional account that can be used to freeze holdings of this asset. If empty, freezing is not permitted.
If not set at asset creation or subsequently set to empty by the manager the field is permanently empty.

#### Defined in

[src/types/asset.ts:53](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L53)

---

### frozenByDefault

• `Optional` **frozenByDefault**: `boolean`

Whether to freeze holdings for this asset by default. If `true` then for anyone apart from the creator to hold the asset it needs to be unfrozen per account using `freeze`. Defaults to `false`.

#### Defined in

[src/types/asset.ts:59](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L59)

---

### lease

• `Optional` **lease**: `string` \| `Uint8Array`

An (optional) [transaction lease](https://dev.algorand.co/concepts/transactions/leases) to apply

#### Defined in

[src/types/asset.ts:66](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L66)

---

### manager

• `Optional` **manager**: `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The optional account that can manage the configuration of the asset and destroy it.
If not set at asset creation or subsequently set to empty by the manager the asset becomes immutable.

#### Defined in

[src/types/asset.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L43)

---

### maxFee

• `Optional` **maxFee**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The maximum fee that you are happy to pay (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[maxFee](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#maxfee)

#### Defined in

[src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

---

### maxRoundsToWaitForConfirmation

• `Optional` **maxRoundsToWaitForConfirmation**: `number`

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[maxRoundsToWaitForConfirmation](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#maxroundstowaitforconfirmation)

#### Defined in

[src/types/transaction.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L44)

---

### metadataHash

• `Optional` **metadataHash**: `string` \| `Uint8Array`

This field is intended to be a 32-byte hash of some metadata that is relevant to your asset and/or asset holders.
The format of this metadata is up to the application. This field can only be specified upon asset creation.

#### Defined in

[src/types/asset.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L39)

---

### name

• `Optional` **name**: `string`

The optional name of the asset. Max size if 32 bytes. This field can only be specified upon asset creation.

#### Defined in

[src/types/asset.ts:29](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L29)

---

### note

• `Optional` **note**: [`TransactionNote`](/reference/algokit-utils-ts/api/modules/types_transaction/#transactionnote)

The (optional) transaction note

#### Defined in

[src/types/asset.ts:64](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L64)

---

### populateAppCallResources

• `Optional` **populateAppCallResources**: `boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[populateAppCallResources](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#populateappcallresources)

#### Defined in

[src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

---

### reserveAccount

• `Optional` **reserveAccount**: `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The optional account that holds the reserve (non-minted) units of the asset. This address has no specific authority in the protocol itself and is informational.
Some standards like [ARC-19](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0019.md) rely on this field to hold meaningful data.
It is used in the case where you want to signal to holders of your asset that the non-minted units of the asset reside in an account that is different from the default creator account.
If not set at asset creation or subsequently set to empty by the manager the field is permanently empty.

#### Defined in

[src/types/asset.ts:49](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L49)

---

### skipSending

• `Optional` **skipSending**: `boolean`

Whether to skip signing and sending the transaction to the chain (default: transaction signed and sent to chain, unless `atc` specified)
and instead just return the raw transaction, e.g. so you can add it to a group of transactions

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[skipSending](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#skipsending)

#### Defined in

[src/types/transaction.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L32)

---

### skipWaiting

• `Optional` **skipWaiting**: `boolean`

Whether to skip waiting for the submitted transaction (only relevant if `skipSending` is `false` or unset)

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[skipWaiting](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#skipwaiting)

#### Defined in

[src/types/transaction.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L34)

---

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[suppressLog](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#suppresslog)

#### Defined in

[src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)

---

### total

• **total**: `number` \| `bigint`

The total number of base (decimal) units of the asset to create.
If decimal is, say, 2, then for every 100 `total` there would be 1 whole unit.
This field can only be specified upon asset creation.

#### Defined in

[src/types/asset.ts:17](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L17)

---

### transactionParams

• `Optional` **transactionParams**: `SuggestedParams`

Optional transaction parameters

#### Defined in

[src/types/asset.ts:62](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L62)

---

### unit

• `Optional` **unit**: `string`

The optional name of the unit of this asset. Max size is 8 bytes. This field can only be specified upon asset creation.

#### Defined in

[src/types/asset.ts:31](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L31)

---

### url

• `Optional` **url**: `string`

Specifies an optional URL where more information about the asset can be retrieved. Max size is 96 bytes.
This field can only be specified upon asset creation.

#### Defined in

[src/types/asset.ts:35](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L35)
