---
editUrl: false
next: false
prev: false
title: "getSenderTransactionSigner"
---

> **getSenderTransactionSigner**(`val`): `TransactionSigner`

Defined in: [src/transaction/transaction.ts:166](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/transaction/transaction.ts#L166)

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
