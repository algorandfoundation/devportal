---
editUrl: false
next: false
prev: false
title: "SendTransactionResult"
---

Defined in: [src/types/transaction.ts:53](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L53)

The result of sending a transaction

## Extended by

- [`AppCallTransactionResultOfType`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appcalltransactionresultoftype/)
- [`ConfirmedTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/confirmedtransactionresult/)
- [`ConfirmedTransactionResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/confirmedtransactionresults/)

## Properties

### confirmation?

> `optional` **confirmation?**: `PendingTransactionResponse`

Defined in: [src/types/transaction.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L57)

The response if the transaction was sent and waited for

***

### transaction

> **transaction**: `Transaction`

Defined in: [src/types/transaction.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L55)

The transaction
