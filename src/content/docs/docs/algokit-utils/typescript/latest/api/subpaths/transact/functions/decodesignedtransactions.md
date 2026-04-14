---
editUrl: false
next: false
prev: false
title: 'decodeSignedTransactions'
---

> **decodeSignedTransactions**(`encodedSignedTransactions`): [`SignedTransaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/signedtransaction/)[]

Defined in: [packages/transact/src/transactions/signed-transaction.ts:149](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L149)

Decodes a collection of MsgPack bytes into a signed transaction collection.

## Parameters

### encodedSignedTransactions

`Uint8Array`\<`ArrayBufferLike`\>[]

A collection of MsgPack encoded bytes, each representing a signed transaction.

## Returns

[`SignedTransaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/signedtransaction/)[]

A collection of decoded signed transactions or an error if decoding fails.
