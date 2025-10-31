---
title: fromHex
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / [Bytes](/reference/algorand-typescript/api/index/namespaces/bytes/readme/) / fromHex

## Call Signature

> **fromHex**(`hex`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [primitives.ts:306](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L306)

Create a new bytes value from a hexadecimal encoded string

### Parameters

#### hex

`string`

A literal string of hexadecimal characters

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

## Call Signature

> **fromHex**\<`TLength`\>(`hex`, `options`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

Defined in: [primitives.ts:312](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L312)

Create a new bytes value from a hexadecimal encoded string

### Type Parameters

#### TLength

`TLength` _extends_ [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### Parameters

#### hex

`string`

A literal string of hexadecimal characters

#### options

[`ToFixedBytesOptions`](/reference/algorand-typescript/api/index/-internal-/type-aliases/tofixedbytesoptions/)\<`TLength`\>

Options for bounded bytes

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>
