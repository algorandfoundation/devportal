---
editUrl: false
next: false
prev: false
title: "getSenderTransactionSigner"
---

> **getSenderTransactionSigner**(`val`): `TransactionSigner`

Defined in: [src/transaction/transaction.ts:168](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/transaction/transaction.ts#L168)

:::caution[Deprecated]
Use `TransactionSignerAccount` instead of `SendTransactionFrom` or use
`algosdk.makeBasicAccountTransactionSigner` / `algosdk.makeLogicSigAccountTransactionSigner`.

Returns a `TransactionSigner` for the given transaction sender.
This function has memoization, so will return the same transaction signer for a given sender.
:::

## Parameters

### val

`SendTransactionFrom`

## Returns

`TransactionSigner`

A transaction signer
