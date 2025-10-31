---
title: extractUint64
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / extractUint64

> **extractUint64**(`a`, `b`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [op.ts:935](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L935)

A uint64 formed from a range of big-endian bytes from A starting at B up to but not including B+8. If B+8 is larger than the array length, the program fails

## Parameters

### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## See

Native TEAL opcode: [`extract_uint64`](https://dev.algorand.co/reference/algorand-teal/opcodes#extract_uint64)
Min AVM version: 5
