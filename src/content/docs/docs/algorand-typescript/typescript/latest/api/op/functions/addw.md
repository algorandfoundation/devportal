---
title: addw
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [op](/docs/algorand-typescript/typescript/latest/api/op/readme/) / addw

> **addw**(`a`, `b`): readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\]

Defined in: [op.ts:179](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L179)

A plus B as a 128-bit result. X is the carry-bit, Y is the low-order 64 bits.

## Parameters

### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

### b

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

## Returns

readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\]

## See

Native TEAL opcode: [`addw`](https://dev.algorand.co/reference/algorand-teal/opcodes#addw)
Min AVM version: 2
