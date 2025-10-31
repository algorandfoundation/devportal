---
title: ToFixedBytesOptions
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [index](docs/_md/index/README) / [\<internal\>](/reference/algorand-typescript/api/index/-internal-/readme/) / ToFixedBytesOptions

> **ToFixedBytesOptions**\<`TLength`\> = `object`

Defined in: [primitives.ts:101](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L101)

## Type Parameters

### TLength

`TLength` _extends_ [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) = [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## Properties

### length

> **length**: `TLength`

Defined in: [primitives.ts:105](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L105)

The length for the bounded type

---

### strategy?

> `optional` **strategy**: `"assert-length"` \| `"unsafe-cast"`

Defined in: [primitives.ts:114](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L114)

The strategy to use for converting to a fixed length bytes type (default: 'assert-length')

- 'assert-length': Asserts that the byte sequence has the specified length and fails if it differs
- 'unsafe-cast': Reinterprets the byte sequence as a fixed length type without any checks. This will succeed even if the value
  is not of the specified length but will result in undefined behaviour for any code that makes use of this value.
