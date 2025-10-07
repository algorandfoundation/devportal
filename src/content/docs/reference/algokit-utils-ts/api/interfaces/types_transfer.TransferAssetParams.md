---
title: TransferAssetParams
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/transfer](/reference/algokit-utils-ts/api/modules/types_transfer/) / TransferAssetParams

[types/transfer](/reference/algokit-utils-ts/api/modules/types_transfer/).TransferAssetParams

**`Deprecated`**

Parameters for `transferAsset` call.

## Hierarchy

- [`SendTransactionParams`](types_transaction.SendTransactionParams.md)

  ↳ **`TransferAssetParams`**

## Table of contents

### Properties

- [amount](types_transfer.TransferAssetParams.md#amount)
- [assetId](types_transfer.TransferAssetParams.md#assetid)
- [atc](types_transfer.TransferAssetParams.md#atc)
- [clawbackFrom](types_transfer.TransferAssetParams.md#clawbackfrom)
- [fee](types_transfer.TransferAssetParams.md#fee)
- [from](types_transfer.TransferAssetParams.md#from)
- [lease](types_transfer.TransferAssetParams.md#lease)
- [maxFee](types_transfer.TransferAssetParams.md#maxfee)
- [maxRoundsToWaitForConfirmation](types_transfer.TransferAssetParams.md#maxroundstowaitforconfirmation)
- [note](types_transfer.TransferAssetParams.md#note)
- [populateAppCallResources](types_transfer.TransferAssetParams.md#populateappcallresources)
- [skipSending](types_transfer.TransferAssetParams.md#skipsending)
- [skipWaiting](types_transfer.TransferAssetParams.md#skipwaiting)
- [suppressLog](types_transfer.TransferAssetParams.md#suppresslog)
- [to](types_transfer.TransferAssetParams.md#to)
- [transactionParams](types_transfer.TransferAssetParams.md#transactionparams)

## Properties

### amount

• **amount**: `number` \| `bigint`

The amount to send as the smallest divisible unit value

#### Defined in

[src/types/transfer.ts:64](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L64)

---

### assetId

• **assetId**: `number`

The asset id that will be transfered

#### Defined in

[src/types/transfer.ts:62](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L62)

---

### atc

• `Optional` **atc**: `AtomicTransactionComposer`

An optional `AtomicTransactionComposer` to add the transaction to, if specified then `skipSending: undefined` has the same effect as `skipSending: true`

#### Inherited from

[SendTransactionParams](types_transaction.SendTransactionParams.md).[atc](types_transaction.SendTransactionParams.md#atc)

#### Defined in

[src/types/transaction.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L36)

---

### clawbackFrom

• `Optional` **clawbackFrom**: `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

An address of a target account from which to perform a clawback operation. Please note, in such cases senderAccount must be equal to clawback field on ASA metadata.

#### Defined in

[src/types/transfer.ts:68](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L68)

---

### fee

• `Optional` **fee**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Inherited from

[SendTransactionParams](types_transaction.SendTransactionParams.md).[fee](types_transaction.SendTransactionParams.md#fee)

#### Defined in

[src/types/transaction.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L40)

---

### from

• **from**: [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The account that will send the asset

#### Defined in

[src/types/transfer.ts:58](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L58)

---

### lease

• `Optional` **lease**: `string` \| `Uint8Array`

An (optional) [transaction lease](https://dev.algorand.co/concepts/transactions/leases) to apply

#### Defined in

[src/types/transfer.ts:72](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L72)

---

### maxFee

• `Optional` **maxFee**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The maximum fee that you are happy to pay (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

#### Inherited from

[SendTransactionParams](types_transaction.SendTransactionParams.md).[maxFee](types_transaction.SendTransactionParams.md#maxfee)

#### Defined in

[src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

---

### maxRoundsToWaitForConfirmation

• `Optional` **maxRoundsToWaitForConfirmation**: `number`

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

#### Inherited from

[SendTransactionParams](types_transaction.SendTransactionParams.md).[maxRoundsToWaitForConfirmation](types_transaction.SendTransactionParams.md#maxroundstowaitforconfirmation)

#### Defined in

[src/types/transaction.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L44)

---

### note

• `Optional` **note**: [`TransactionNote`](/reference/algokit-utils-ts/api/modules/types_transaction/#transactionnote)

The (optional) transaction note

#### Defined in

[src/types/transfer.ts:70](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L70)

---

### populateAppCallResources

• `Optional` **populateAppCallResources**: `boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

#### Inherited from

[SendTransactionParams](types_transaction.SendTransactionParams.md).[populateAppCallResources](types_transaction.SendTransactionParams.md#populateappcallresources)

#### Defined in

[src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

---

### skipSending

• `Optional` **skipSending**: `boolean`

Whether to skip signing and sending the transaction to the chain (default: transaction signed and sent to chain, unless `atc` specified)
and instead just return the raw transaction, e.g. so you can add it to a group of transactions

#### Inherited from

[SendTransactionParams](types_transaction.SendTransactionParams.md).[skipSending](types_transaction.SendTransactionParams.md#skipsending)

#### Defined in

[src/types/transaction.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L32)

---

### skipWaiting

• `Optional` **skipWaiting**: `boolean`

Whether to skip waiting for the submitted transaction (only relevant if `skipSending` is `false` or unset)

#### Inherited from

[SendTransactionParams](types_transaction.SendTransactionParams.md).[skipWaiting](types_transaction.SendTransactionParams.md#skipwaiting)

#### Defined in

[src/types/transaction.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L34)

---

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress

#### Inherited from

[SendTransactionParams](types_transaction.SendTransactionParams.md).[suppressLog](types_transaction.SendTransactionParams.md#suppresslog)

#### Defined in

[src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)

---

### to

• **to**: `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The account / account address that will receive the asset

#### Defined in

[src/types/transfer.ts:60](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L60)

---

### transactionParams

• `Optional` **transactionParams**: `SuggestedParams`

Optional transaction parameters

#### Defined in

[src/types/transfer.ts:66](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L66)
