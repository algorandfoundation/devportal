---
editUrl: false
next: false
prev: false
title: "encodeTransactionNote"
---

> **encodeTransactionNote**(`note`?): `Uint8Array` \| `undefined`

Defined in: [src/transaction/transaction.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/transaction/transaction.ts#L48)

:::caution[Deprecated]
Convert your data to a `string` or `Uint8Array`, if using ARC-2 use `TransactionComposer.arc2Note`.

Encodes a transaction note into a byte array ready to be included in an Algorand transaction.
:::

## Parameters

### note?

`TransactionNote`

The transaction note

## Returns

`Uint8Array` \| `undefined`

the transaction note ready for inclusion in a transaction

 Case on the value of `data` this either be:
  * `null` | `undefined`: `undefined`
  * `string`: The string value
  * Uint8Array: passthrough
  * Arc2TransactionNote object: ARC-0002 compatible transaction note
  * Else: The object/value converted into a JSON string representation
