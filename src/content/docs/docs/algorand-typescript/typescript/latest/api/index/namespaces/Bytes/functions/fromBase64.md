---
title: fromBase64
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [index](/docs/algorand-typescript/typescript/latest/api/index/readme/) / [Bytes](/docs/algorand-typescript/typescript/latest/api/index/namespaces/bytes/readme/) / fromBase64

## Call Signature

> **fromBase64**(`b64`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\>

Defined in: [primitives.ts:321](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L321)

Create a new bytes value from a base 64 encoded string

### Parameters

#### b64

`string`

A literal string of b64 encoded characters

### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\>

## Call Signature

> **fromBase64**\<`TLength`\>(`b64`, `options`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`TLength`\>

Defined in: [primitives.ts:327](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L327)

Create a new bytes value from a base 64 encoded string

### Type Parameters

#### TLength

`TLength` _extends_ [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

### Parameters

#### b64

`string`

A literal string of b64 encoded characters

#### options

[`ToFixedBytesOptions`](/docs/algorand-typescript/typescript/latest/api/index/-internal-/type-aliases/tofixedbytesoptions/)\<`TLength`\>

Options for bounded bytes

### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`TLength`\>
