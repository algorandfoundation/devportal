---
title: BoxMap
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / BoxMap

> **BoxMap**\<`TKey`, `TValue`\> = [`Box`](Box)\<`TValue`\>

Defined in: [box.ts:151](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L151)

Creates a BoxMap proxy object offering methods of getting and setting a set of values stored in individual boxes indexed by a common key type

## Param

Options for creating the BoxMap proxy

## Type Parameters

### TKey

`TKey`

The type of the value used to key each box. This key will be encoded to bytes and prefixed with `keyPrefix`

### TValue

`TValue`

The type of the data stored in the box. This value will be encoded to bytes when stored and decoded on retrieval.

> **BoxMap**(`key`): [`Box`](Box)\<`TValue`\>

Defined in: [box.ts:113](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L113)

Get a Box proxy for a single item in the BoxMap

## Parameters

### key

`TKey`

The key of the box to retrieve a proxy for

## Returns

[`Box`](Box)\<`TValue`\>

## Properties

### keyPrefix

> `readonly` **keyPrefix**: [`bytes`](bytes)

Defined in: [box.ts:107](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L107)

Get the bytes used to prefix each key
