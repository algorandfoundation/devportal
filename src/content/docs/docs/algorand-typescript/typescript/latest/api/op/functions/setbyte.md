---
editUrl: false
next: false
prev: false
title: 'setByte'
---

> **setByte**(`a`, `b`, `c`): [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [op.ts:3430](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3430)

Copy of A with the Bth byte set to small integer (between 0..255) C. If B is greater than or equal to the array length, the program fails

## Parameters

### a

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

### b

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

### c

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

## Returns

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

## See

Native TEAL opcode: [`setbyte`](https://dev.algorand.co/reference/algorand-teal/opcodes#setbyte)
Min AVM version: 3
