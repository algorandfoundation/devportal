---
editUrl: false
next: false
prev: false
title: "ConfirmedTransactionResult"
---

Defined in: [src/transaction/types.ts:81](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L81)

The result of sending and confirming a transaction

## Extends

- [`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresult/)

## Properties

### confirmation

> **confirmation**: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)

Defined in: [src/transaction/types.ts:83](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L83)

The response from sending and waiting for the transaction

#### Overrides

[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresult/).[`confirmation`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresult/#confirmation)

***

### transaction

> **transaction**: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)

Defined in: [src/transaction/types.ts:51](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L51)

The transaction

#### Inherited from

[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresult/).[`transaction`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresult/#transaction)
