---
editUrl: false
next: false
prev: false
title: "executePaginatedRequest"
---

> **executePaginatedRequest**\<`TResult`, `TRequest`\>(`extractItems`, `buildRequest`): `Promise`\<`TResult`[]\>

Defined in: [src/indexer-lookup.ts:145](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/indexer-lookup.ts#L145)

## Type Parameters

### TResult

`TResult`

### TRequest

`TRequest` *extends* `object`

## Parameters

### extractItems

(`response`) => `TResult`[]

### buildRequest

(`nextToken?`) => `TRequest`

## Returns

`Promise`\<`TResult`[]\>
