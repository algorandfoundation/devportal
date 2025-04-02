---
editUrl: false
next: false
prev: false
title: "getSenderAddress"
---

> **getSenderAddress**(`sender`): `string`

Defined in: [src/transaction/transaction.ts:108](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/transaction/transaction.ts#L108)

:::caution[Deprecated]
Use `algorand.client` to interact with accounts, and use `.addr` to get the address
and/or move from using `SendTransactionFrom` to `TransactionSignerAccount` and use `.addr` instead.

Returns the public address of the given transaction sender.
:::

## Parameters

### sender

A transaction sender

`string` | `SendTransactionFrom`

## Returns

`string`

The public address
