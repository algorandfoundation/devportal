---
title: NTuple
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / NTuple

> **NTuple**\<`T`, `N`\> = `N` _extends_ `N` ? `number` _extends_ `N` ? `T`[] : [`_TupleOf`](/reference/algorand-typescript/api/index/-internal-/type-aliases/tupleof/)\<`T`, `N`, readonly \[\]\> : `never`

Defined in: [primitives.ts:364](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L364)

Declare a homogeneous tuple with the item type T and length N.

Eg.
NTuple<uint64, 3> === [uint64, uint64, uint64]

## Type Parameters

### T

`T`

### N

`N` _extends_ `number`
