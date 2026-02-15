---
title: getByte
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [op](/docs/algorand-typescript/typescript/latest/api/op/readme/) / getByte

> **getByte**(`a`, `b`): [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [op.ts:973](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L973)

Bth byte of A, as an integer. If B is greater than or equal to the array length, the program fails

## Parameters

### a

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

### b

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

## Returns

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

## See

Native TEAL opcode: [`getbyte`](https://dev.algorand.co/reference/algorand-teal/opcodes#getbyte)
Min AVM version: 3
