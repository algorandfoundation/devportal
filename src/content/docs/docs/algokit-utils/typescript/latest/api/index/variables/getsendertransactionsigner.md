---
editUrl: false
next: false
prev: false
title: "getSenderTransactionSigner"
---

> `const` **getSenderTransactionSigner**: (`val`) => `TransactionSigner`

Defined in: [src/transaction/transaction.ts:175](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L175)

:::caution[Deprecated]
Use `TransactionSignerAccount` instead of `SendTransactionFrom` or use
`algosdk.makeBasicAccountTransactionSigner` / `algosdk.makeLogicSigAccountTransactionSigner`.

Returns a `TransactionSigner` for the given transaction sender.
This function has memoization, so will return the same transaction signer for a given sender.
:::

## Parameters

### val

[`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

## Returns

`TransactionSigner`

A transaction signer
