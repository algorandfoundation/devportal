---
editUrl: false
next: false
prev: false
title: "encodeTransactions"
---

> **encodeTransactions**(`transactions`): `Uint8Array`\<`ArrayBufferLike`\>[]

Defined in: [packages/transact/src/transactions/transaction.ts:405](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L405)

Encode transactions with the domain separation (e.g. "TX") prefix

## Parameters

### transactions

[`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]

A collection of transactions to encode

## Returns

`Uint8Array`\<`ArrayBufferLike`\>[]

A collection of MsgPack encoded bytes or an error if encoding fails.
