---
editUrl: false
next: false
prev: false
title: "substring"
---

> **substring**(`a`, `b`, `c`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [op.ts:3671](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3671)

A range of bytes from A starting at B up to but not including C. If C < B, or either is larger than the array length, the program fails

## Parameters

### a

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

### b

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

### c

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

## Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

## See

Native TEAL opcode: [`substring3`](https://dev.algorand.co/reference/algorand-teal/opcodes#substring3)
Min AVM version: 2
