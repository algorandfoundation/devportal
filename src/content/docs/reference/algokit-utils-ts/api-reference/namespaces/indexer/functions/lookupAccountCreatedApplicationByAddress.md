---
editUrl: false
next: false
prev: false
title: "lookupAccountCreatedApplicationByAddress"
---

> **lookupAccountCreatedApplicationByAddress**(`indexer`, `address`, `getAll`, `paginationLimit`?): `Promise`\<`algosdk.indexerModels.Application`[]\>

Defined in: [src/indexer-lookup.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/indexer-lookup.ts#L38)

Looks up applications that were created by the given address; will automatically paginate through all data.

## Parameters

### indexer

`IndexerClient`

An indexer instance

### address

The address of the creator to look up

`string` | `Address`

### getAll

Whether or not to include deleted applications

`undefined` | `boolean`

### paginationLimit?

`number`

The number of records to return per paginated request, default 1000

## Returns

`Promise`\<`algosdk.indexerModels.Application`[]\>

The list of application results
