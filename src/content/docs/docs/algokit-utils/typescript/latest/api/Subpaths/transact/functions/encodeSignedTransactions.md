---
editUrl: false
next: false
prev: false
title: "encodeSignedTransactions"
---

> **encodeSignedTransactions**(`signedTransactions`): `Uint8Array`\<`ArrayBufferLike`\>[]

Defined in: [packages/transact/src/transactions/signed-transaction.ts:128](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L128)

Encode signed transactions to MsgPack for sending on the network.

 This method performs canonical encoding. No domain separation prefix is applicable.

## Parameters

### signedTransactions

[`SignedTransaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/signedtransaction/)[]

A collection of signed transactions to encode

## Returns

`Uint8Array`\<`ArrayBufferLike`\>[]

A collection of MsgPack encoded bytes or an error if encoding fails.
