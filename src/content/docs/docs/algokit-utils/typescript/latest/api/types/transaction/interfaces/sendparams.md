---
editUrl: false
next: false
prev: false
title: "SendParams"
---

Defined in: [src/types/transaction.ts:134](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L134)

Parameters to configure transaction sending.

## Extended by

- [`AtomicTransactionComposerToSend`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/atomictransactioncomposertosend/)

## Properties

### coverAppCallInnerTransactionFees?

> `optional` **coverAppCallInnerTransactionFees?**: `boolean`

Defined in: [src/types/transaction.ts:142](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L142)

Whether to use simulate to automatically calculate required app call inner transaction fees and cover them in the parent app call transaction fee

***

### maxRoundsToWaitForConfirmation?

> `optional` **maxRoundsToWaitForConfirmation?**: `number`

Defined in: [src/types/transaction.ts:136](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L136)

The number of rounds to wait for confirmation. By default until the latest lastValid has past.

***

### populateAppCallResources?

> `optional` **populateAppCallResources?**: `boolean`

Defined in: [src/types/transaction.ts:140](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L140)

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to `Config.populateAppCallResources`.

***

### suppressLog?

> `optional` **suppressLog?**: `boolean`

Defined in: [src/types/transaction.ts:138](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L138)

Whether to suppress log messages from transaction send, default: do not suppress.
