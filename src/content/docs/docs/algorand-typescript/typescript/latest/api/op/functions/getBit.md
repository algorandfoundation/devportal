---
editUrl: false
next: false
prev: false
title: "getBit"
---

> **getBit**(`a`, `b`): `boolean`

Defined in: [op.ts:964](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L964)

Bth bit of (byte-array or integer) A. If B is greater than or equal to the bit length of the value (8*byte length), the program fails
see explanation of bit ordering in setbit

## Parameters

### a

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

### b

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

## Returns

`boolean`

## See

Native TEAL opcode: [`getbit`](https://dev.algorand.co/reference/algorand-teal/opcodes#getbit)
Min AVM version: 3
