---
editUrl: false
next: false
prev: false
title: "signTransaction"
---

> **signTransaction**(`transaction`, `signer`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [src/transaction/transaction.ts:193](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L193)

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

[`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

The signer to sign

## Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The signed transaction as a `Uint8Array`
