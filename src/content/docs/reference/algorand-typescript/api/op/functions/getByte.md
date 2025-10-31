---
title: getByte
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / getByte

> **getByte**(`a`, `b`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [op.ts:973](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L973)

Bth byte of A, as an integer. If B is greater than or equal to the array length, the program fails

## Parameters

### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## See

Native TEAL opcode: [`getbyte`](https://dev.algorand.co/reference/algorand-teal/opcodes#getbyte)
Min AVM version: 3
