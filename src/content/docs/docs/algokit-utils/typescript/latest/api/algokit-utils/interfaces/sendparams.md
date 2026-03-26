---
editUrl: false
next: false
prev: false
title: 'SendParams'
---

Defined in: [src/transaction/types.ts:124](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L124)

Parameters to configure transaction sending.

## Extended by

- [`TransactionComposerToSend`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/transactioncomposertosend/)

## Properties

### coverAppCallInnerTransactionFees?

> `optional` **coverAppCallInnerTransactionFees**: `boolean`

Defined in: [src/transaction/types.ts:132](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L132)

Whether to use simulate to automatically calculate required app call inner transaction fees and cover them in the parent app call transaction fee

---

### maxRoundsToWaitForConfirmation?

> `optional` **maxRoundsToWaitForConfirmation**: `number`

Defined in: [src/transaction/types.ts:126](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L126)

The number of rounds to wait for confirmation. By default until the latest lastValid has past.

---

### populateAppCallResources?

> `optional` **populateAppCallResources**: `boolean`

Defined in: [src/transaction/types.ts:130](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L130)

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to `Config.populateAppCallResources`.

---

### suppressLog?

> `optional` **suppressLog**: `boolean`

Defined in: [src/transaction/types.ts:128](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L128)

Whether to suppress log messages from transaction send, default: do not suppress.
