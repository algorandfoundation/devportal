---
editUrl: false
next: false
prev: false
title: 'extractUint32'
---

> **extractUint32**(`a`, `b`): [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [op.ts:926](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L926)

A uint32 formed from a range of big-endian bytes from A starting at B up to but not including B+4. If B+4 is larger than the array length, the program fails

## Parameters

### a

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

### b

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

## Returns

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

## See

Native TEAL opcode: [`extract_uint32`](https://dev.algorand.co/reference/algorand-teal/opcodes#extract_uint32)
Min AVM version: 5
