---
editUrl: false
next: false
prev: false
title: "lookupAccountByAddress"
---

> **lookupAccountByAddress**(`accountAddress`, `indexer`): `Promise`\<`AccountResponse`\>

Defined in: [src/indexer-lookup.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/indexer-lookup.ts#L26)

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
