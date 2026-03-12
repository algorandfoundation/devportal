---
editUrl: false
next: false
prev: false
title: "SendTransactionResult"
---

Defined in: [src/transaction/types.ts:49](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L49)

The result of sending a transaction

## Extended by

- [`ConfirmedTransactionResult`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/confirmedtransactionresult/)
- [`ConfirmedTransactionResults`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/confirmedtransactionresults/)

## Properties

### confirmation?

> `optional` **confirmation**: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)

Defined in: [src/transaction/types.ts:53](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L53)

The response if the transaction was sent and waited for

***

### transaction

> **transaction**: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)

Defined in: [src/transaction/types.ts:51](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L51)

The transaction
