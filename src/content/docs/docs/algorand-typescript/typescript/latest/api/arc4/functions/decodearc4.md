---
editUrl: false
next: false
prev: false
title: 'decodeArc4'
---

> **decodeArc4**\<`T`\>(`bytes`, `prefix?`): `T`

Defined in: [arc4/index.ts:253](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L253)

Decode the provided bytes to a native Algorand TypeScript value

## Type Parameters

### T

`T`

## Parameters

### bytes

[`BytesCompat`](/algorand-typescript/api/index/type-aliases/bytescompat/)

An arc4 encoded bytes value

### prefix?

The prefix (if any), present in the bytes value. This prefix will be validated and removed

`"none"` | `"log"`

## Returns

`T`
