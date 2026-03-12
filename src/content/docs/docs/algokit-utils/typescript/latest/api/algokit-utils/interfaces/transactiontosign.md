---
editUrl: false
next: false
prev: false
title: "TransactionToSign"
---

Defined in: [src/transaction/types.ts:101](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L101)

Defines an unsigned transaction that will appear in a group of transactions along with its signing information

## Properties

### signer

> **signer**: [`AddressWithTransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| [`TransactionSigner`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/transactionsigner/)

Defined in: [src/transaction/types.ts:105](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L105)

The account to use to sign the transaction, either an account (with private key loaded) or a logic signature account

***

### transaction

> **transaction**: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)

Defined in: [src/transaction/types.ts:103](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/types.ts#L103)

The unsigned transaction to sign and send
