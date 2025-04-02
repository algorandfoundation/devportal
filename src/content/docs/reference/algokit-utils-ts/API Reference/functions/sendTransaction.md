---
editUrl: false
next: false
prev: false
title: "sendTransaction"
---

> **sendTransaction**(`send`, `algod`): `Promise`\<`SendTransactionResult`\>

Defined in: [src/transaction/transaction.ts:207](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/transaction/transaction.ts#L207)

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

`SendTransactionFrom`

#### sendParams

`SendTransactionParams`

#### transaction

`Transaction`

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`SendTransactionResult`\>

An object with transaction (`transaction`) and (if `skipWaiting` is `false` or `undefined`) confirmation (`confirmation`)
