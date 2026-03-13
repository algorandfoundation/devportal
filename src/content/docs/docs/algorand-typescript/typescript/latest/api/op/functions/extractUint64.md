---
editUrl: false
next: false
prev: false
title: "extractUint64"
---

> **extractUint64**(`a`, `b`): [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [op.ts:935](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L935)

A uint64 formed from a range of big-endian bytes from A starting at B up to but not including B+8. If B+8 is larger than the array length, the program fails

## Parameters

### a

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

### b

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

## Returns

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

## See

Native TEAL opcode: [`extract_uint64`](https://dev.algorand.co/reference/algorand-teal/opcodes#extract_uint64)
Min AVM version: 5
