---
title: BytesBacked
type: interface
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / BytesBacked

Defined in: [primitives.ts:351](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L351)

An interface for types which are backed by the AVM bytes type

## Type Parameters

### TLength

`TLength` _extends_ [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) = [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

Defined in: [primitives.ts:355](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L355)

Retrieve the underlying bytes representing this value

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>
