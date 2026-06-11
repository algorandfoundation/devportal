---
editUrl: false
next: false
prev: false
title: 'replace'
---

> **replace**(`a`, `b`, `c`): [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [op.ts:3421](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3421)

Copy of A with the bytes starting at B replaced by the bytes of C. Fails if B+len(C) exceeds len(A)
`replace3` can be called using `replace` with no immediates.

## Parameters

### a

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

### b

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

### c

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

## Returns

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

## See

Native TEAL opcode: [`replace3`](https://dev.algorand.co/reference/algorand-teal/opcodes#replace3)
Min AVM version: 7
