---
editUrl: false
next: false
prev: false
title: 'executePaginatedRequest'
---

> **executePaginatedRequest**\<`TResult`, `TRequest`\>(`extractItems`, `buildRequest`): `Promise`\<`TResult`[]\>

Defined in: [src/indexer-client/indexer-lookup.ts:120](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/indexer-client/indexer-lookup.ts#L120)

## Type Parameters

### TResult

`TResult`

### TRequest

`TRequest` _extends_ `Promise`\<`any`\>

## Parameters

### extractItems

(`response`) => `TResult`[]

### buildRequest

(`nextToken?`) => `TRequest`

## Returns

`Promise`\<`TResult`[]\>
