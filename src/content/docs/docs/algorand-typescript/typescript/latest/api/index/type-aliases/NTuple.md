---
editUrl: false
next: false
prev: false
title: "NTuple"
---

> **NTuple**\<`T`, `N`\> = `N` *extends* `N` ? `number` *extends* `N` ? `T`[] : `_TupleOf`\<`T`, `N`, readonly \[\]\> : `never`

Defined in: [primitives.ts:364](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L364)

Declare a homogeneous tuple with the item type T and length N.

Eg.
NTuple<uint64, 3> === [uint64, uint64, uint64]

## Type Parameters

### T

`T`

### N

`N` *extends* `number`
