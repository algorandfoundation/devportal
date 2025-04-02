---
editUrl: false
next: false
prev: false
title: "searchTransactions"
---

> **searchTransactions**(`indexer`, `searchCriteria`, `paginationLimit`?): `Promise`\<`algosdk.indexerModels.TransactionsResponse`\>

Defined in: [src/indexer-lookup.ts:111](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/indexer-lookup.ts#L111)

Allows transactions to be searched for the given criteria.

## Parameters

### indexer

`IndexerClient`

An indexer client

### searchCriteria

(`s`) => `SearchForTransactions`

The criteria to search for

### paginationLimit?

`number`

The number of records to return per paginated request, default 1000

## Returns

`Promise`\<`algosdk.indexerModels.TransactionsResponse`\>

The search results
