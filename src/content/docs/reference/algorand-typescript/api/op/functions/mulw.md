---
title: mulw
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / mulw

> **mulw**(`a`, `b`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\]

Defined in: [op.ts:3402](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3402)

A times B as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low

## Parameters

### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\]

## See

Native TEAL opcode: [`mulw`](https://dev.algorand.co/reference/algorand-teal/opcodes#mulw)
Min AVM version: 1
