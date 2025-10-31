---
title: getBit
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [op](docs/_md/op/README) / getBit

> **getBit**(`a`, `b`): `boolean`

Defined in: [op.ts:964](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L964)

Bth bit of (byte-array or integer) A. If B is greater than or equal to the bit length of the value (8\*byte length), the program fails
see explanation of bit ordering in setbit

## Parameters

### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## Returns

`boolean`

## See

Native TEAL opcode: [`getbit`](https://dev.algorand.co/reference/algorand-teal/opcodes#getbit)
Min AVM version: 3
