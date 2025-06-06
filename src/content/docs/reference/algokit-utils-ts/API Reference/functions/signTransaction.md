---
editUrl: false
next: false
prev: false
title: "signTransaction"
---

> **signTransaction**(`transaction`, `signer`): `Promise`\<`Uint8Array`\>

Defined in: [src/transaction/transaction.ts:186](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/transaction/transaction.ts#L186)

:::caution[Deprecated]
Use `AlgorandClient` / `TransactionComposer` to sign transactions
or use the relevant underlying `account.signTxn` / `algosdk.signLogicSigTransactionObject`
/ `multiSigAccount.sign` / `TransactionSigner` methods directly.

Signs a single transaction by the given signer.
:::

## Parameters

### transaction

`Transaction`

The transaction to sign

### signer

`SendTransactionFrom`

The signer to sign

## Returns

`Promise`\<`Uint8Array`\>

The signed transaction as a `Uint8Array`
