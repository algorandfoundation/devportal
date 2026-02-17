---
title: AlgoRekeyParams
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/transfer](/docs/algokit-utils/typescript/latest/api/modules/types_transfer/) / AlgoRekeyParams

[types/transfer](/docs/algokit-utils/typescript/latest/api/modules/types_transfer/).AlgoRekeyParams

**`Deprecated`**

Parameters for `rekeyAccount` call.

## Hierarchy

- [`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/)

  ↳ **`AlgoRekeyParams`**

## Table of contents

### Properties

- [atc](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.AlgoRekeyParams/#atc)
- [fee](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.AlgoRekeyParams/#fee)
- [from](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.AlgoRekeyParams/#from)
- [lease](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.AlgoRekeyParams/#lease)
- [maxFee](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.AlgoRekeyParams/#maxfee)
- [maxRoundsToWaitForConfirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.AlgoRekeyParams/#maxroundstowaitforconfirmation)
- [note](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.AlgoRekeyParams/#note)
- [populateAppCallResources](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.AlgoRekeyParams/#populateappcallresources)
- [rekeyTo](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.AlgoRekeyParams/#rekeyto)
- [skipSending](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.AlgoRekeyParams/#skipsending)
- [skipWaiting](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.AlgoRekeyParams/#skipwaiting)
- [suppressLog](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.AlgoRekeyParams/#suppresslog)
- [transactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.AlgoRekeyParams/#transactionparams)

## Properties

### atc

• `Optional` **atc**: `AtomicTransactionComposer`

An optional `AtomicTransactionComposer` to add the transaction to, if specified then `skipSending: undefined` has the same effect as `skipSending: true`

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/).[atc](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#atc)

#### Defined in

[src/types/transaction.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L36)

---

### fee

• `Optional` **fee**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amount.AlgoAmount/)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/).[fee](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#fee)

#### Defined in

[src/types/transaction.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L40)

---

### from

• **from**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom)

The account that will be rekeyed

#### Defined in

[src/types/transfer.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L26)

---

### lease

• `Optional` **lease**: `string` \| `Uint8Array`

An (optional) [transaction lease](https://dev.algorand.co/concepts/transactions/leases) to apply

#### Defined in

[src/types/transfer.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L34)

---

### maxFee

• `Optional` **maxFee**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amount.AlgoAmount/)

The maximum fee that you are happy to pay (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/).[maxFee](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#maxfee)

#### Defined in

[src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

---

### maxRoundsToWaitForConfirmation

• `Optional` **maxRoundsToWaitForConfirmation**: `number`

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/).[maxRoundsToWaitForConfirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#maxroundstowaitforconfirmation)

#### Defined in

[src/types/transaction.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L44)

---

### note

• `Optional` **note**: [`TransactionNote`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#transactionnote)

The (optional) transaction note

#### Defined in

[src/types/transfer.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L32)

---

### populateAppCallResources

• `Optional` **populateAppCallResources**: `boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/).[populateAppCallResources](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#populateappcallresources)

#### Defined in

[src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

---

### rekeyTo

• **rekeyTo**: `string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom)

The account / account address that will have the private key that is authorised to transact on behalf of the from account from now on

#### Defined in

[src/types/transfer.ts:28](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L28)

---

### skipSending

• `Optional` **skipSending**: `boolean`

Whether to skip signing and sending the transaction to the chain (default: transaction signed and sent to chain, unless `atc` specified)
and instead just return the raw transaction, e.g. so you can add it to a group of transactions

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/).[skipSending](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#skipsending)

#### Defined in

[src/types/transaction.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L32)

---

### skipWaiting

• `Optional` **skipWaiting**: `boolean`

Whether to skip waiting for the submitted transaction (only relevant if `skipSending` is `false` or unset)

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/).[skipWaiting](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#skipwaiting)

#### Defined in

[src/types/transaction.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L34)

---

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/).[suppressLog](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#suppresslog)

#### Defined in

[src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)

---

### transactionParams

• `Optional` **transactionParams**: `SuggestedParams`

Optional transaction parameters

#### Defined in

[src/types/transfer.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L30)
