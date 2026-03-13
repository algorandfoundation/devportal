---
editUrl: false
next: false
prev: false
title: "divw"
---

> **divw**(`a`, `b`, `c`): [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [op.ts:755](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L755)

A,B / C. Fail if C == 0 or if result overflows.
The notation A,B indicates that A and B are interpreted as a uint128 value, with A as the high uint64 and B the low.

## Parameters

### a

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

### b

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

### c

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

## Returns

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

## See

Native TEAL opcode: [`divw`](https://dev.algorand.co/reference/algorand-teal/opcodes#divw)
Min AVM version: 6
