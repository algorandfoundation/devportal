---
editUrl: false
next: false
prev: false
title: "lookupTransactionById"
---

> **lookupTransactionById**(`transactionId`, `indexer`): `Promise`\<`TransactionResponse`\>

Defined in: [src/indexer-lookup.ts:15](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/indexer-lookup.ts#L15)

:::caution[Deprecated]
Use `indexer.lookupTransactionByID(transactionId).do()`.
Looks up a transaction by ID using Indexer.
:::

## Parameters

### transactionId

`string`

The ID of the transaction to look up

### indexer

`IndexerClient`

An indexer client

## Returns

`Promise`\<`TransactionResponse`\>

The result of the look-up
