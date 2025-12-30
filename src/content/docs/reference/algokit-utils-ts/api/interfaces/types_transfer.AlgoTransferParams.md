---
title: AlgoTransferParams
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/transfer](/reference/algokit-utils-ts/api/modules/types_transfer/) / AlgoTransferParams

[types/transfer](/reference/algokit-utils-ts/api/modules/types_transfer/).AlgoTransferParams

**`Deprecated`**

Parameters for `transferAlgos` call.

## Hierarchy

- [`SendTransactionParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/)

  ↳ **`AlgoTransferParams`**

## Table of contents

### Properties

- [amount](/reference/algokit-utils-ts/api/interfaces/types_transferalgotransferparams/#amount)
- [atc](/reference/algokit-utils-ts/api/interfaces/types_transferalgotransferparams/#atc)
- [fee](/reference/algokit-utils-ts/api/interfaces/types_transferalgotransferparams/#fee)
- [from](/reference/algokit-utils-ts/api/interfaces/types_transferalgotransferparams/#from)
- [lease](/reference/algokit-utils-ts/api/interfaces/types_transferalgotransferparams/#lease)
- [maxFee](/reference/algokit-utils-ts/api/interfaces/types_transferalgotransferparams/#maxfee)
- [maxRoundsToWaitForConfirmation](/reference/algokit-utils-ts/api/interfaces/types_transferalgotransferparams/#maxroundstowaitforconfirmation)
- [note](/reference/algokit-utils-ts/api/interfaces/types_transferalgotransferparams/#note)
- [populateAppCallResources](/reference/algokit-utils-ts/api/interfaces/types_transferalgotransferparams/#populateappcallresources)
- [skipSending](/reference/algokit-utils-ts/api/interfaces/types_transferalgotransferparams/#skipsending)
- [skipWaiting](/reference/algokit-utils-ts/api/interfaces/types_transferalgotransferparams/#skipwaiting)
- [suppressLog](/reference/algokit-utils-ts/api/interfaces/types_transferalgotransferparams/#suppresslog)
- [to](/reference/algokit-utils-ts/api/interfaces/types_transferalgotransferparams/#to)
- [transactionParams](/reference/algokit-utils-ts/api/interfaces/types_transferalgotransferparams/#transactionparams)

## Properties

### amount

• **amount**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The amount to send

#### Defined in

[src/types/transfer.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L14)

---

### atc

• `Optional` **atc**: `AtomicTransactionComposer`

An optional `AtomicTransactionComposer` to add the transaction to, if specified then `skipSending: undefined` has the same effect as `skipSending: true`

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[atc](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#atc)

#### Defined in

[src/types/transaction.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L36)

---

### fee

• `Optional` **fee**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[fee](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#fee)

#### Defined in

[src/types/transaction.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L40)

---

### from

• **from**: [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The account that will send the Algo

#### Defined in

[src/types/transfer.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L10)

---

### lease

• `Optional` **lease**: `string` \| `Uint8Array`

An (optional) [transaction lease](https://dev.algorand.co/concepts/transactions/leases) to apply

#### Defined in

[src/types/transfer.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L20)

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

### note

• `Optional` **note**: [`TransactionNote`](/reference/algokit-utils-ts/api/modules/types_transaction/#transactionnote)

The (optional) transaction note

#### Defined in

[src/types/transfer.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L18)

---

### populateAppCallResources

• `Optional` **populateAppCallResources**: `boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[populateAppCallResources](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#populateappcallresources)

#### Defined in

[src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

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

### to

• **to**: `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The account / account address that will receive the Algo

#### Defined in

[src/types/transfer.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L12)

---

### transactionParams

• `Optional` **transactionParams**: `SuggestedParams`

Optional transaction parameters

#### Defined in

[src/types/transfer.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L16)
