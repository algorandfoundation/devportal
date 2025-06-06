---
editUrl: false
next: false
prev: false
title: "executePaginatedRequest"
---

> **executePaginatedRequest**\<`TResult`, `TRequest`\>(`extractItems`, `buildRequest`): `Promise`\<`TResult`[]\>

Defined in: [src/indexer-lookup.ts:145](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/indexer-lookup.ts#L145)

## Type Parameters

• **TResult**

• **TRequest** *extends* `object`

## Parameters

### extractItems

(`response`) => `TResult`[]

### buildRequest

(`nextToken`?) => `TRequest`

## Returns

`Promise`\<`TResult`[]\>
