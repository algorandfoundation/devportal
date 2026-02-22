---
editUrl: false
next: false
prev: false
title: "decodeTransactions"
---

> **decodeTransactions**(`encoded_transactions`): [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]

Defined in: [packages/transact/src/transactions/transaction.ts:507](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L507)

Decodes a collection of MsgPack bytes into a transaction collection.

# Parameters
* `encoded_transaction` - A collection of MsgPack encoded bytes, each representing a transaction.

# Returns
A collection of decoded transactions or an error if decoding fails.

## Parameters

### encoded\_transactions

`Uint8Array`\<`ArrayBufferLike`\>[]

## Returns

[`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]
