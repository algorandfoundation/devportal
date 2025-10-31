---
title: substring
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / substring

> **substring**(`a`, `b`, `c`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [op.ts:3493](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3493)

A range of bytes from A starting at B up to but not including C. If C < B, or either is larger than the array length, the program fails

## Parameters

### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### c

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

## See

Native TEAL opcode: [`substring3`](https://dev.algorand.co/reference/algorand-teal/opcodes#substring3)
Min AVM version: 2
