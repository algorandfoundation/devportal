---
editUrl: false
next: false
prev: false
title: "getSenderAddress"
---

> **getSenderAddress**(`sender`): `string`

Defined in: [src/transaction/transaction.ts:117](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L117)

:::caution[Deprecated]
Use `algorand.client` to interact with accounts, and use `.addr` to get the address
and/or move from using `SendTransactionFrom` to `TransactionSignerAccount` and use `.addr` instead.

Returns the public address of the given transaction sender.
:::

## Parameters

### sender

`string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

A transaction sender

## Returns

`string`

The public address
