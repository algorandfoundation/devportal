---
title: itob
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [op](/docs/algorand-typescript/typescript/latest/api/op/README/) / itob

> **itob**(`a`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`8`\>

Defined in: [op.ts:2299](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L2299)

converts uint64 A to big-endian byte array, always of length 8

## Parameters

### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

## Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`8`\>

## See

Native TEAL opcode: [`itob`](https://dev.algorand.co/reference/algorand-teal/opcodes#itob)
Min AVM version: 1
