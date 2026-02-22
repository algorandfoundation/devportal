---
editUrl: false
next: false
prev: false
title: "SendTransactionResults"
---

Defined in: [src/transaction/types.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L57)

The result of preparing and/or sending multiple transactions

## Extended by

- [`ConfirmedTransactionResults`](/algokit-utils-ts/api/algokit-utils/interfaces/confirmedtransactionresults/)

## Properties

### confirmations?

> `optional` **confirmations**: [`PendingTransactionResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]

Defined in: [src/transaction/types.ts:63](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L63)

The responses if the transactions were sent and waited for,
the index of the confirmation will match the index of the underlying transaction

***

### transactions

> **transactions**: [`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)[]

Defined in: [src/transaction/types.ts:59](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L59)

The transactions that have been prepared and/or sent
