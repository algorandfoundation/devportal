---
title: log
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / log

> **log**(...`args`): `void`

Defined in: [util.ts:10](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L10)

Write one or more values to the transaction log.

Each value is converted to bytes and concatenated

## Parameters

### args

...(`string` \| `number` \| `bigint` \| `boolean` \| [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\> \| [`BytesBacked`](/reference/algorand-typescript/api/index/interfaces/bytesbacked/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>)[]

The values to write

## Returns

`void`
