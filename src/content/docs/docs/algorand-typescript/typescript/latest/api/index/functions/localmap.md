---
editUrl: false
next: false
prev: false
title: "LocalMap"
---

> **LocalMap**\<`TKey`, `TValue`\>(`options?`): [`LocalMap`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/localmap/)\<`TKey`, `TValue`\>

Defined in: [state.ts:181](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L181)

Creates a LocalMap proxy object offering methods of getting and setting a set of values stored in individual local state fields indexed by a common key type
Adequate space must be allocated for the application on creation (see options parameter of contract decorator).

## Type Parameters

### TKey

`TKey`

The type of the value used to key each local state value. This key will be encoded to bytes and prefixed with `keyPrefix`

### TValue

`TValue`

The type of the data stored in the local state. This value will be encoded to bytes when stored and decoded on retrieval.

## Parameters

### options?

`CreateLocalMapOptions`

Options for creating the LocalMap proxy

## Returns

[`LocalMap`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/localmap/)\<`TKey`, `TValue`\>
