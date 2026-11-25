---
editUrl: false
next: false
prev: false
title: "SendAtomicTransactionComposerResults"
---

Defined in: [src/types/transaction.ts:71](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L71)

The result of preparing and/or sending multiple transactions using an `AtomicTransactionComposer`

## Extends

- [`SendTransactionResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresults/)

## Properties

### confirmations

> **confirmations**: `PendingTransactionResponse`[]

Defined in: [src/types/transaction.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L81)

The responses if the transactions were sent and waited for,
the index of the confirmation will match the index of the underlying transaction

#### Overrides

[`SendTransactionResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresults/).[`confirmations`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresults/#confirmations)

***

### groupId

> **groupId**: `string`

Defined in: [src/types/transaction.ts:73](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L73)

base64 encoded representation of the group ID of the atomic group

***

### returns?

> `optional` **returns?**: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/)[]

Defined in: [src/types/transaction.ts:77](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L77)

If ABI method(s) were called the processed return values

***

### transactions

> **transactions**: `Transaction`[]

Defined in: [src/types/transaction.ts:63](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L63)

The transactions that have been prepared and/or sent

#### Inherited from

[`SendTransactionResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresults/).[`transactions`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresults/#transactions)

***

### txIds

> **txIds**: `string`[]

Defined in: [src/types/transaction.ts:75](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L75)

The transaction IDs that have been prepared and/or sent
