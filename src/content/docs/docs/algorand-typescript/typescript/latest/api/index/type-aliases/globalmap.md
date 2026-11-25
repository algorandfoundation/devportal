---
editUrl: false
next: false
prev: false
title: "GlobalMap"
---

> **GlobalMap**\<`TKey`, `TValue`\> = [`GlobalState`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/globalstate/)\<`TValue`\>

Defined in: [state.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L85)

A GlobalMap proxy

## Type Parameters

### TKey

`TKey`

The type of the value used to key each global state value.

### TValue

`TValue`

The type of the data stored in the global state.

> **GlobalMap**(`key`): [`GlobalState`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/globalstate/)\<`TValue`\>

Get a GlobalState proxy for a single item in the GlobalMap

## Parameters

### key

`TKey`

The key of the global state value to retrieve a proxy for

## Returns

[`GlobalState`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/globalstate/)\<`TValue`\>

## Properties

### keyPrefix

> `readonly` **keyPrefix**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [state.ts:57](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L57)

Get the bytes used to prefix each key
