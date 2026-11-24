---
editUrl: false
next: false
prev: false
title: "AppCallTransactionResultOfType"
---

Defined in: [src/types/app.ts:226](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L226)

The result of preparing and/or sending multiple transactions

## Extends

- [`SendTransactionResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresults/).[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/)

## Type Parameters

### T

`T`

## Properties

### confirmation?

> `optional` **confirmation?**: `PendingTransactionResponse`

Defined in: [src/types/transaction.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L57)

The response if the transaction was sent and waited for

#### Inherited from

[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/).[`confirmation`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/#confirmation)

***

### confirmations?

> `optional` **confirmations?**: `PendingTransactionResponse`[]

Defined in: [src/types/transaction.ts:67](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L67)

The responses if the transactions were sent and waited for,
the index of the confirmation will match the index of the underlying transaction

#### Inherited from

[`SendTransactionResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresults/).[`confirmations`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresults/#confirmations)

***

### return?

> `optional` **return?**: `T`

Defined in: [src/types/app.ts:228](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L228)

If an ABI method was called the processed return value

***

### transaction

> **transaction**: `Transaction`

Defined in: [src/types/transaction.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L55)

The transaction

#### Inherited from

[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/).[`transaction`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/#transaction)

***

### transactions

> **transactions**: `Transaction`[]

Defined in: [src/types/transaction.ts:63](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L63)

The transactions that have been prepared and/or sent

#### Inherited from

[`SendTransactionResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresults/).[`transactions`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresults/#transactions)
