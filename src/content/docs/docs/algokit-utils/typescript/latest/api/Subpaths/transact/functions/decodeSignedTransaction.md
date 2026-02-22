---
editUrl: false
next: false
prev: false
title: "decodeSignedTransaction"
---

> **decodeSignedTransaction**(`encodedSignedTransaction`): [`SignedTransaction`](/algokit-utils-ts/api/subpaths/transact/type-aliases/signedtransaction/)

Defined in: [packages/transact/src/transactions/signed-transaction.ts:138](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L138)

Decodes MsgPack bytes into a signed transaction.

## Parameters

### encodedSignedTransaction

`Uint8Array`

The MsgPack encoded signed transaction bytes

## Returns

[`SignedTransaction`](/algokit-utils-ts/api/subpaths/transact/type-aliases/signedtransaction/)

The decoded SignedTransaction or an error if decoding fails.
