---
title: SendParams
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/) / SendParams

[types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/).SendParams

Parameters to configure transaction sending.

## Hierarchy

- **`SendParams`**

  ↳ [`AtomicTransactionComposerToSend`]()

## Table of contents

### Properties

- [coverAppCallInnerTransactionFees](#coverappcallinnertransactionfees)
- [maxRoundsToWaitForConfirmation](#maxroundstowaitforconfirmation)
- [populateAppCallResources](#populateappcallresources)
- [suppressLog](#suppresslog)

## Properties

### coverAppCallInnerTransactionFees

• `Optional` **coverAppCallInnerTransactionFees**: `boolean`

Whether to use simulate to automatically calculate required app call inner transaction fees and cover them in the parent app call transaction fee

#### Defined in

[src/types/transaction.ts:142](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L142)

---

### maxRoundsToWaitForConfirmation

• `Optional` **maxRoundsToWaitForConfirmation**: `number`

The number of rounds to wait for confirmation. By default until the latest lastValid has past.

#### Defined in

[src/types/transaction.ts:136](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L136)

---

### populateAppCallResources

• `Optional` **populateAppCallResources**: `boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to `Config.populateAppCallResources`.

#### Defined in

[src/types/transaction.ts:140](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L140)

---

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress.

#### Defined in

[src/types/transaction.ts:138](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L138)
