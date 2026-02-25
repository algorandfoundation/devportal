---
editUrl: false
next: false
prev: false
title: 'lookupAccountCreatedApplicationByAddress'
---

> **lookupAccountCreatedApplicationByAddress**(`indexer`, `address`, `getAll`, `paginationLimit?`): `Promise`\<[`Application`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/application/)[]\>

Defined in: [src/indexer-client/indexer-lookup.ts:23](https://github.com/larkiny/algokit-utils-ts/blob/main/src/indexer-client/indexer-lookup.ts#L23)

Looks up applications that were created by the given address; will automatically paginate through all data.

## Parameters

### indexer

[`IndexerClient`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/classes/indexerclient/)

An indexer instance

### address

The address of the creator to look up

`string` | [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

### getAll

`boolean` = `true`

Whether or not to include deleted applications. Default true.

### paginationLimit?

`number`

The number of records to return per paginated request, default 1000

## Returns

`Promise`\<[`Application`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/application/)[]\>

The list of application results
