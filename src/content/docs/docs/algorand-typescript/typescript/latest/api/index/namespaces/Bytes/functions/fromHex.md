---
editUrl: false
next: false
prev: false
title: "fromHex"
---

## Call Signature

> **fromHex**(`hex`): [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [primitives.ts:306](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L306)

Create a new bytes value from a hexadecimal encoded string

### Parameters

#### hex

`string`

A literal string of hexadecimal characters

### Returns

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)\>

## Call Signature

> **fromHex**\<`TLength`\>(`hex`, `options`): [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

Defined in: [primitives.ts:312](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L312)

Create a new bytes value from a hexadecimal encoded string

### Type Parameters

#### TLength

`TLength` *extends* [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

### Parameters

#### hex

`string`

A literal string of hexadecimal characters

#### options

`ToFixedBytesOptions`\<`TLength`\>

Options for bounded bytes

### Returns

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>
