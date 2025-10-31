---
title: addw
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [op](docs/_md/op/README) / addw

> **addw**(`a`, `b`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\]

Defined in: [op.ts:179](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L179)

A plus B as a 128-bit result. X is the carry-bit, Y is the low-order 64 bits.

## Parameters

### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\]

## See

Native TEAL opcode: [`addw`](https://dev.algorand.co/reference/algorand-teal/opcodes#addw)
Min AVM version: 2
