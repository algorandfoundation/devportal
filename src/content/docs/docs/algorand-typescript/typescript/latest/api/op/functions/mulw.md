---
title: mulw
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [op](/docs/algorand-typescript/typescript/latest/api/op/README/) / mulw

> **mulw**(`a`, `b`): readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\]

Defined in: [op.ts:3402](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3402)

A times B as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low

## Parameters

### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

### b

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

## Returns

readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\]

## See

Native TEAL opcode: [`mulw`](https://dev.algorand.co/reference/algorand-teal/opcodes#mulw)
Min AVM version: 1
