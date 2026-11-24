---
editUrl: false
next: false
prev: false
title: "ConfirmedTransactionResults"
---

Defined in: [src/types/transaction.ts:91](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L91)

The result of sending and confirming one or more transactions, but where there is a primary transaction of interest

## Extends

- [`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/).[`SendTransactionResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresults/)

## Properties

### confirmation

> **confirmation**: `PendingTransactionResponse`

Defined in: [src/types/transaction.ts:93](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L93)

The response from sending and waiting for the primary transaction

#### Overrides

[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/).[`confirmation`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/#confirmation)

***

### confirmations

> **confirmations**: `PendingTransactionResponse`[]

Defined in: [src/types/transaction.ts:95](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L95)

The response from sending and waiting for the transactions

#### Overrides

[`SendTransactionResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresults/).[`confirmations`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresults/#confirmations)

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
