---
title: convertBytes
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](/reference/algorand-typescript/api/arc4/readme/) / convertBytes

> **convertBytes**\<`T`\>(`bytes`, `options`): `T`

Defined in: [arc4/index.ts:232](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L232)

Interpret the provided bytes as an ARC4 encoded type

## Type Parameters

### T

`T` _extends_ [`ARC4Encoded`](/reference/algorand-typescript/api/arc4/classes/arc4encoded/)

## Parameters

### bytes

[`BytesCompat`](/reference/algorand-typescript/api/index/type-aliases/bytescompat/)

An arc4 encoded bytes value

### options

Options for how the bytes should be converted

#### prefix?

`"log"` \| `"none"`

The prefix (if any), present in the bytes value. This prefix will be validated and removed

#### strategy

`"validate"` \| `"unsafe-cast"`

The strategy used for converting bytes.
`unsafe-cast`: Reinterpret the value as an ARC4 encoded type without validation
`validate`: Asserts the encoding of the raw bytes matches the expected type

## Returns

`T`
