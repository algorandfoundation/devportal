---
editUrl: false
next: false
prev: false
title: 'TransactionComposerToSend'
---

Defined in: [src/transaction/types.ts:142](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L142)

An `TransactionComposer` with transactions to send.

## Extends

- [`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

## Properties

### coverAppCallInnerTransactionFees?

> `optional` **coverAppCallInnerTransactionFees**: `boolean`

Defined in: [src/transaction/types.ts:132](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L132)

Whether to use simulate to automatically calculate required app call inner transaction fees and cover them in the parent app call transaction fee

#### Inherited from

[`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/).[`coverAppCallInnerTransactionFees`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/#coverappcallinnertransactionfees)

---

### maxRoundsToWaitForConfirmation?

> `optional` **maxRoundsToWaitForConfirmation**: `number`

Defined in: [src/transaction/types.ts:126](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L126)

The number of rounds to wait for confirmation. By default until the latest lastValid has past.

#### Inherited from

[`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/).[`maxRoundsToWaitForConfirmation`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/#maxroundstowaitforconfirmation)

---

### populateAppCallResources?

> `optional` **populateAppCallResources**: `boolean`

Defined in: [src/transaction/types.ts:130](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L130)

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to `Config.populateAppCallResources`.

#### Inherited from

[`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/).[`populateAppCallResources`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/#populateappcallresources)

---

### suppressLog?

> `optional` **suppressLog**: `boolean`

Defined in: [src/transaction/types.ts:128](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L128)

Whether to suppress log messages from transaction send, default: do not suppress.

#### Inherited from

[`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/).[`suppressLog`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/#suppresslog)

---

### transactionComposer

> **transactionComposer**: [`TransactionComposer`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/transactioncomposer/)

Defined in: [src/transaction/types.ts:144](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L144)

The `TransactionComposer` with transactions loaded to send
