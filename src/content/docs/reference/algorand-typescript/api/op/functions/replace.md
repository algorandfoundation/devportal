---
title: replace
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / replace

> **replace**(`a`, `b`, `c`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [op.ts:3421](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3421)

Copy of A with the bytes starting at B replaced by the bytes of C. Fails if B+len(C) exceeds len(A)
`replace3` can be called using `replace` with no immediates.

## Parameters

### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### c

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

## Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

## See

Native TEAL opcode: [`replace3`](https://dev.algorand.co/reference/algorand-teal/opcodes#replace3)
Min AVM version: 7
