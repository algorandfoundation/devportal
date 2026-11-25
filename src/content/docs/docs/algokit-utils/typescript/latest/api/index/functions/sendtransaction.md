---
editUrl: false
next: false
prev: false
title: "sendTransaction"
---

> **sendTransaction**(`send`, `algod`): `Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/)\>

Defined in: [src/transaction/transaction.ts:216](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L216)

:::caution[Deprecated]
Use `AlgorandClient` / `TransactionComposer` to send transactions.

Prepares a transaction for sending and then (if instructed) signs and sends the given transaction to the chain.
:::

## Parameters

### send

The details for the transaction to prepare/send, including:
  * `transaction`: The unsigned transaction
  * `from`: The account to sign the transaction with: either an account with private key loaded or a logic signature account
  * `config`: The sending configuration for this transaction

#### from

[`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

#### sendParams?

[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/)

#### transaction

`Transaction`

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/)\>

An object with transaction (`transaction`) and (if `skipWaiting` is `false` or `undefined`) confirmation (`confirmation`)
