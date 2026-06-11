---
editUrl: false
next: false
prev: false
title: 'encodeSignedTransactionToJson'
---

> **encodeSignedTransactionToJson**(`signedTransaction`, `space?`): `string`

Defined in: [packages/transact/src/transactions/signed-transaction.ts:184](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L184)

Encode a signed transaction to wire-format JSON string.

Wire format uses short keys (e.g., `amt`, `fv`, `snd`) matching the Algorand protocol.
Useful for debugging, logging, or any scenario requiring human-readable JSON
that preserves the canonical field names.

## Parameters

### signedTransaction

[`SignedTransaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/signedtransaction/)

The signed transaction to encode

### space?

`number`

Optional indentation for pretty-printing

## Returns

`string`

JSON string in wire format
