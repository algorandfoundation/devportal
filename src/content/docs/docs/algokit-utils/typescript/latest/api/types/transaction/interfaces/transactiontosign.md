---
editUrl: false
next: false
prev: false
title: "TransactionToSign"
---

Defined in: [src/types/transaction.ts:111](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L111)

Defines an unsigned transaction that will appear in a group of transactions along with its signing information

## Properties

### signer

> **signer**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/transaction.ts:115](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L115)

The account to use to sign the transaction, either an account (with private key loaded) or a logic signature account

***

### transaction

> **transaction**: `Transaction`

Defined in: [src/types/transaction.ts:113](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L113)

The unsigned transaction to sign and send
