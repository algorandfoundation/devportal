---
editUrl: false
next: false
prev: false
title: "getSenderAddress"
---

> **getSenderAddress**(`sender`): `string`

Defined in: [src/transaction/transaction.ts:110](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/transaction/transaction.ts#L110)

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
