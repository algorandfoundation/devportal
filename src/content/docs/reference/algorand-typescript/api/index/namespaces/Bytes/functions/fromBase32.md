---
title: fromBase32
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [index](docs/_md/index/README) / [Bytes](/reference/algorand-typescript/api/index/namespaces/bytes/readme/) / fromBase32

## Call Signature

> **fromBase32**(`b32`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [primitives.ts:336](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L336)

Create a new bytes value from a base 32 encoded string

### Parameters

#### b32

`string`

A literal string of b32 encoded characters

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

## Call Signature

> **fromBase32**\<`TLength`\>(`b32`, `options`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

Defined in: [primitives.ts:342](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L342)

Create a new bytes value from a base 32 encoded string

### Type Parameters

#### TLength

`TLength` _extends_ [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### Parameters

#### b32

`string`

A literal string of b32 encoded characters

#### options

[`ToFixedBytesOptions`](/reference/algorand-typescript/api/index/-internal-/type-aliases/tofixedbytesoptions/)\<`TLength`\>

Options for bounded bytes

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>
