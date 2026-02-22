---
editUrl: false
next: false
prev: false
title: "searchTransactions"
---

> **searchTransactions**(`indexer`, `searchCriteria`, `paginationLimit?`): `Promise`\<[`TransactionsResponse`](/algokit-utils-ts/api/subpaths/indexer-client/type-aliases/transactionsresponse/)\>

Defined in: [src/indexer-client/indexer-lookup.ts:86](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/indexer-client/indexer-lookup.ts#L86)

Allows transactions to be searched for the given criteria.

## Parameters

### indexer

[`IndexerClient`](/algokit-utils-ts/api/subpaths/indexer-client/classes/indexerclient/)

An indexer client

### searchCriteria

[`SearchForTransactionsCriteria`](/algokit-utils-ts/api/subpaths/indexer-client/type-aliases/searchfortransactionscriteria/)

The criteria to search for

### paginationLimit?

`number`

The number of records to return per paginated request, default 1000

## Returns

`Promise`\<[`TransactionsResponse`](/algokit-utils-ts/api/subpaths/indexer-client/type-aliases/transactionsresponse/)\>

The search results
