---
title: BoxMap
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / BoxMap

> **BoxMap**\<`TKey`, `TValue`\>(`options`): [`BoxMap`](/reference/algorand-typescript/api/index/type-aliases/boxmap/)\<`TKey`, `TValue`\>

Defined in: [box.ts:151](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L151)

Creates a BoxMap proxy object offering methods of getting and setting a set of values stored in individual boxes indexed by a common key type

## Type Parameters

### TKey

`TKey`

The type of the value used to key each box. This key will be encoded to bytes and prefixed with `keyPrefix`

### TValue

`TValue`

The type of the data stored in the box. This value will be encoded to bytes when stored and decoded on retrieval.

## Parameters

### options

[`CreateBoxMapOptions`](/reference/algorand-typescript/api/index/-internal-/interfaces/createboxmapoptions/)

Options for creating the BoxMap proxy

## Returns

[`BoxMap`](/reference/algorand-typescript/api/index/type-aliases/boxmap/)\<`TKey`, `TValue`\>
