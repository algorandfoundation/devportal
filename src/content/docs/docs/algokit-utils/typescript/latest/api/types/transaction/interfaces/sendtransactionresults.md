---
editUrl: false
next: false
prev: false
title: "SendTransactionResults"
---

Defined in: [src/types/transaction.ts:61](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L61)

The result of preparing and/or sending multiple transactions

## Extended by

- [`AppCallTransactionResultOfType`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appcalltransactionresultoftype/)
- [`SendAtomicTransactionComposerResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendatomictransactioncomposerresults/)
- [`ConfirmedTransactionResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/confirmedtransactionresults/)

## Properties

### confirmations?

> `optional` **confirmations?**: `PendingTransactionResponse`[]

Defined in: [src/types/transaction.ts:67](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L67)

The responses if the transactions were sent and waited for,
the index of the confirmation will match the index of the underlying transaction

***

### transactions

> **transactions**: `Transaction`[]

Defined in: [src/types/transaction.ts:63](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L63)

The transactions that have been prepared and/or sent
