---
editUrl: false
next: false
prev: false
title: "convertBytes"
---

> **convertBytes**\<`T`\>(`bytes`, `options`): `T`

Defined in: [arc4/index.ts:241](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L241)

Interpret the provided bytes as an ARC4 encoded type

## Type Parameters

### T

`T` *extends* [`ARC4Encoded`](/algorand-typescript/api/arc4/classes/arc4encoded/)

## Parameters

### bytes

[`BytesCompat`](/algorand-typescript/api/index/type-aliases/bytescompat/)

An arc4 encoded bytes value

### options

Options for how the bytes should be converted

#### prefix?

`"none"` \| `"log"`

The prefix (if any), present in the bytes value. This prefix will be validated and removed

#### strategy

`"unsafe-cast"` \| `"validate"`

The strategy used for converting bytes.
        `unsafe-cast`: Reinterpret the value as an ARC4 encoded type without validation
        `validate`: Asserts the encoding of the raw bytes matches the expected type

## Returns

`T`
