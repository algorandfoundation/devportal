---
title: divmodw
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / divmodw

> **divmodw**(`a`, `b`, `c`, `d`): readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\]

Defined in: [op.ts:745](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L745)

W,X = (A,B / C,D); Y,Z = (A,B modulo C,D)
The notation J,K indicates that two uint64 values J and K are interpreted as a uint128 value, with J as the high uint64 and K the low.

## Parameters

### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### c

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### d

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## Returns

readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\]

## See

Native TEAL opcode: [`divmodw`](https://dev.algorand.co/reference/algorand-teal/opcodes#divmodw)
Min AVM version: 4
