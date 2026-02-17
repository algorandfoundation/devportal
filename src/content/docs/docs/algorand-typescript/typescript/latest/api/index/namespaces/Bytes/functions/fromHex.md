---
title: fromHex
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [index](/docs/algorand-typescript/typescript/latest/api/index/README/) / [Bytes](/docs/algorand-typescript/typescript/latest/api/index/namespaces/Bytes/README/) / fromHex

## Call Signature

> **fromHex**(`hex`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\>

Defined in: [primitives.ts:306](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L306)

Create a new bytes value from a hexadecimal encoded string

### Parameters

#### hex

`string`

A literal string of hexadecimal characters

### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\>

## Call Signature

> **fromHex**\<`TLength`\>(`hex`, `options`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`TLength`\>

Defined in: [primitives.ts:312](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L312)

Create a new bytes value from a hexadecimal encoded string

### Type Parameters

#### TLength

`TLength` _extends_ [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

### Parameters

#### hex

`string`

A literal string of hexadecimal characters

#### options

[`ToFixedBytesOptions`](/docs/algorand-typescript/typescript/latest/api/index/-internal-/type-aliases/ToFixedBytesOptions/)\<`TLength`\>

Options for bounded bytes

### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`TLength`\>
