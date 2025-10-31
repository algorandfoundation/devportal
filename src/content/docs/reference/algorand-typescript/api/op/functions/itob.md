---
title: itob
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [op](docs/_md/op/README) / itob

> **itob**(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`8`\>

Defined in: [op.ts:2299](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L2299)

converts uint64 A to big-endian byte array, always of length 8

## Parameters

### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`8`\>

## See

Native TEAL opcode: [`itob`](https://dev.algorand.co/reference/algorand-teal/opcodes#itob)
Min AVM version: 1
