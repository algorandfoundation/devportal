---
title: expw
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / expw

> **expw**(`a`, `b`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\]

Defined in: [op.ts:908](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L908)

A raised to the Bth power as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low. Fail if A == B == 0 or if the results exceeds 2^128-1

## Parameters

### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\]

## See

Native TEAL opcode: [`expw`](https://dev.algorand.co/reference/algorand-teal/opcodes#expw)
Min AVM version: 4
