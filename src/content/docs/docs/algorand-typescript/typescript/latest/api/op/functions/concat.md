---
editUrl: false
next: false
prev: false
title: "concat"
---

> **concat**(`a`, `b`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [op.ts:893](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L893)

join A and B
`concat` fails if the result would be greater than 4096 bytes.

## Parameters

### a

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

### b

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

## Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

## See

Native TEAL opcode: [`concat`](https://dev.algorand.co/reference/algorand-teal/opcodes#concat)
Min AVM version: 2
