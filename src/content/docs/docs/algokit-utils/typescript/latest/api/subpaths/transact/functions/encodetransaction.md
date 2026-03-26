---
editUrl: false
next: false
prev: false
title: 'encodeTransaction'
---

> **encodeTransaction**(`transaction`): `Uint8Array`

Defined in: [packages/transact/src/transactions/transaction.ts:391](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L391)

Encode the transaction with the domain separation (e.g. "TX") prefix

## Parameters

### transaction

[`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)

The transaction to encode

## Returns

`Uint8Array`

The MsgPack encoded bytes or an error if encoding fails.
