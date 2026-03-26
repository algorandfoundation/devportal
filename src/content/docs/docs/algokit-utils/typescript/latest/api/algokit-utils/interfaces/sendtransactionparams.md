---
editUrl: false
next: false
prev: false
title: 'SendTransactionParams'
---

Defined in: [src/transaction/types.ts:25](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L25)

The sending configuration for a transaction

## Properties

### fee?

> `optional` **fee**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algoamount/)

Defined in: [src/transaction/types.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L36)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

---

### maxFee?

> `optional` **maxFee**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/algoamount/)

Defined in: [src/transaction/types.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L38)

The maximum fee that you are happy to pay (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

---

### maxRoundsToWaitForConfirmation?

> `optional` **maxRoundsToWaitForConfirmation**: `number`

Defined in: [src/transaction/types.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L40)

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

---

### populateAppCallResources?

> `optional` **populateAppCallResources**: `boolean`

Defined in: [src/transaction/types.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L42)

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

---

### skipSending?

> `optional` **skipSending**: `boolean`

Defined in: [src/transaction/types.ts:28](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L28)

Whether to skip signing and sending the transaction to the chain (default: transaction signed and sent to chain, unless `atc` specified)
and instead just return the raw transaction, e.g. so you can add it to a group of transactions

---

### skipWaiting?

> `optional` **skipWaiting**: `boolean`

Defined in: [src/transaction/types.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L30)

Whether to skip waiting for the submitted transaction (only relevant if `skipSending` is `false` or unset)

---

### suppressLog?

> `optional` **suppressLog**: `boolean`

Defined in: [src/transaction/types.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L34)

Whether to suppress log messages from transaction send, default: do not suppress

---

### transactionComposer?

> `optional` **transactionComposer**: [`TransactionComposer`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/transactioncomposer/)

Defined in: [src/transaction/types.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L32)

An optional `TransactionComposer` to add the transaction to, if specified then `skipSending: undefined` has the same effect as `skipSending: true`
