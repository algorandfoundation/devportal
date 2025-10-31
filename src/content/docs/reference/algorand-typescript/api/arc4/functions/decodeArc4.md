---
title: decodeArc4
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](docs/_md/arc4/README) / decodeArc4

> **decodeArc4**\<`T`\>(`bytes`, `prefix`): `T`

Defined in: [arc4/index.ts:244](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L244)

Decode the provided bytes to a native Algorand TypeScript value

## Type Parameters

### T

`T`

## Parameters

### bytes

[`BytesCompat`](/reference/algorand-typescript/api/index/type-aliases/bytescompat/)

An arc4 encoded bytes value

### prefix

The prefix (if any), present in the bytes value. This prefix will be validated and removed

`"log"` | `"none"`

## Returns

`T`
