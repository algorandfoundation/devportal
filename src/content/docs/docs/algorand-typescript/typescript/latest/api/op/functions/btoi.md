---
editUrl: false
next: false
prev: false
title: "btoi"
---

> **btoi**(`a`): [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [op.ts:716](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L716)

converts big-endian byte array A to uint64. Fails if len(A) > 8. Padded by leading 0s if len(A) < 8.
`btoi` fails if the input is longer than 8 bytes.

## Parameters

### a

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

## Returns

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

## See

Native TEAL opcode: [`btoi`](https://dev.algorand.co/reference/algorand-teal/opcodes#btoi)
Min AVM version: 1
