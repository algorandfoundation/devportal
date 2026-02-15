---
title: log
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [index](/docs/algorand-typescript/typescript/latest/api/index/readme/) / log

> **log**(...`args`): `void`

Defined in: [util.ts:10](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L10)

Write one or more values to the transaction log.

Each value is converted to bytes and concatenated

## Parameters

### args

...(`string` \| `number` \| `bigint` \| `boolean` \| [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\> \| [`BytesBacked`](/docs/algorand-typescript/typescript/latest/api/index/interfaces/bytesbacked/)\<[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\>)[]

The values to write

## Returns

`void`
