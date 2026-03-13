---
editUrl: false
next: false
prev: false
title: "fromBase64"
---

## Call Signature

> **fromBase64**(`b64`): [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [primitives.ts:321](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L321)

Create a new bytes value from a base 64 encoded string

### Parameters

#### b64

`string`

A literal string of b64 encoded characters

### Returns

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)\>

## Call Signature

> **fromBase64**\<`TLength`\>(`b64`, `options`): [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

Defined in: [primitives.ts:327](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L327)

Create a new bytes value from a base 64 encoded string

### Type Parameters

#### TLength

`TLength` *extends* [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

### Parameters

#### b64

`string`

A literal string of b64 encoded characters

#### options

`ToFixedBytesOptions`\<`TLength`\>

Options for bounded bytes

### Returns

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>
