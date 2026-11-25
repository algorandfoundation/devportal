---
editUrl: false
next: false
prev: false
title: "getTransactionWithSigner"
---

> **getTransactionWithSigner**(`transaction`, `defaultSender?`): `Promise`\<`TransactionWithSigner`\>

Defined in: [src/transaction/transaction.ts:134](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L134)

:::caution[Deprecated]
Use `AlgorandClient` / `TransactionComposer` to construct transactions instead or
construct an `algosdk.TransactionWithSigner` manually instead.

Given a transaction in a variety of supported formats, returns a TransactionWithSigner object ready to be passed to an
AtomicTransactionComposer's addTransaction method.
:::

## Parameters

### transaction

`Transaction` \| `TransactionWithSigner` \| [`TransactionToSign`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/transactiontosign/) \| `Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/)\>

One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the
signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by
one of algokit utils' helpers (signer is obtained from the defaultSender parameter)

### defaultSender?

[`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

The default sender to be used to obtain a signer where the object provided to the transaction parameter does not
include a signer.

## Returns

`Promise`\<`TransactionWithSigner`\>

A TransactionWithSigner object.
