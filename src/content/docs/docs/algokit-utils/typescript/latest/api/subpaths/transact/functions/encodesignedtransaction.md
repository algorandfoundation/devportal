---
editUrl: false
next: false
prev: false
title: "encodeSignedTransaction"
---

> **encodeSignedTransaction**(`signedTransaction`): `Uint8Array`

Defined in: [packages/transact/src/transactions/signed-transaction.ts:115](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L115)

Encode signed transactions to MsgPack for sending on the network.

This method performs canonical encoding. No domain separation prefix is applicable.

## Parameters

### signedTransaction

[`SignedTransaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/signedtransaction/)

The signed transaction to encode

## Returns

`Uint8Array`

The MsgPack encoded bytes or an error if encoding fails.
