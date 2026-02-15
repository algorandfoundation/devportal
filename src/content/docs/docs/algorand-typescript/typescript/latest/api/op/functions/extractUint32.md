---
title: extractUint32
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [op](/docs/algorand-typescript/typescript/latest/api/op/readme/) / extractUint32

> **extractUint32**(`a`, `b`): [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [op.ts:926](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L926)

A uint32 formed from a range of big-endian bytes from A starting at B up to but not including B+4. If B+4 is larger than the array length, the program fails

## Parameters

### a

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

### b

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

## Returns

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

## See

Native TEAL opcode: [`extract_uint32`](https://dev.algorand.co/reference/algorand-teal/opcodes#extract_uint32)
Min AVM version: 5
