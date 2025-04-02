---
editUrl: false
next: false
prev: false
title: "signTransaction"
---

> **signTransaction**(`transaction`, `signer`): `Promise`\<`Uint8Array`\>

Defined in: [src/transaction/transaction.ts:184](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/transaction/transaction.ts#L184)

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
