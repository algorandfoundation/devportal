---
title: divw
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / divw

> **divw**(`a`, `b`, `c`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [op.ts:755](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L755)

A,B / C. Fail if C == 0 or if result overflows.
The notation A,B indicates that A and B are interpreted as a uint128 value, with A as the high uint64 and B the low.

## Parameters

### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### c

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## See

Native TEAL opcode: [`divw`](https://dev.algorand.co/reference/algorand-teal/opcodes#divw)
Min AVM version: 6
