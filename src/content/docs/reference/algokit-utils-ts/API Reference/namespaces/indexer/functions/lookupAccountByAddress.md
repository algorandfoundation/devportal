---
editUrl: false
next: false
prev: false
title: "lookupAccountByAddress"
---

> **lookupAccountByAddress**(`accountAddress`, `indexer`): `Promise`\<`AccountResponse`\>

Defined in: [src/indexer-lookup.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/indexer-lookup.ts#L26)

:::caution[Deprecated]
Use `indexer.lookupAccountByID(accountAddress).do()`.
Looks up an account by address using Indexer.
:::

## Parameters

### accountAddress

The address of the account to look up

`string` | `Address`

### indexer

`IndexerClient`

An indexer client

## Returns

`Promise`\<`AccountResponse`\>

The result of the look-up
