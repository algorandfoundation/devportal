---
editUrl: false
next: false
prev: false
title: 'fromBase32'
---

## Call Signature

> **fromBase32**(`b32`): [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [primitives.ts:336](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L336)

Create a new bytes value from a base 32 encoded string

### Parameters

#### b32

`string`

A literal string of b32 encoded characters

### Returns

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)\>

## Call Signature

> **fromBase32**\<`TLength`\>(`b32`, `options`): [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

Defined in: [primitives.ts:342](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L342)

Create a new bytes value from a base 32 encoded string

### Type Parameters

#### TLength

`TLength` _extends_ [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

### Parameters

#### b32

`string`

A literal string of b32 encoded characters

#### options

`ToFixedBytesOptions`\<`TLength`\>

Options for bounded bytes

### Returns

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>
