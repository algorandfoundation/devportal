---
title: 'interpretAsArc4'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/reference/readme) / interpretAsArc4

# Function: interpretAsArc4()

> **interpretAsArc4**\<`T`\>(`bytes`, `prefix`): `T`

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:560](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L560)

Interpret the provided bytes as an ARC4 encoded type with no validation

## Type Parameters

• **T** _extends_ [`ARC4Encoded`](/reference/classes/arc4encoded)

## Parameters

### bytes

[`BytesCompat`](/index/type-aliases/bytescompat)

An arc4 encoded bytes value

### prefix

The prefix (if any), present in the bytes value. This prefix will be validated and removed

`"log"` | `"none"`

## Returns

`T`
