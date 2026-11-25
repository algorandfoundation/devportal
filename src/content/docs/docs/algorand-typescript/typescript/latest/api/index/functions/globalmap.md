---
editUrl: false
next: false
prev: false
title: "GlobalMap"
---

> **GlobalMap**\<`TKey`, `TValue`\>(`options?`): [`GlobalMap`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/globalmap/)\<`TKey`, `TValue`\>

Defined in: [state.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L85)

Creates a GlobalMap proxy object offering methods of getting and setting a set of values stored in individual global state fields indexed by a common key type
Adequate space must be allocated for the application on creation (see options parameter of contract decorator).

## Type Parameters

### TKey

`TKey`

The type of the value used to key each global state value. This key will be encoded to bytes and prefixed with `keyPrefix`

### TValue

`TValue`

The type of the data stored in the global state. This value will be encoded to bytes when stored and decoded on retrieval.

## Parameters

### options?

`CreateGlobalMapOptions`

Options for creating the GlobalMap proxy

## Returns

[`GlobalMap`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/globalmap/)\<`TKey`, `TValue`\>
