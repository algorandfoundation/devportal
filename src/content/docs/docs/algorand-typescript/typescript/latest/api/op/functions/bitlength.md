---
editUrl: false
next: false
prev: false
title: 'bitLength'
---

> **bitLength**(`a`): [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [op.ts:566](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L566)

The highest set bit in A. If A is a byte-array, it is interpreted as a big-endian unsigned integer. bitlen of 0 is 0, bitlen of 8 is 4
bitlen interprets arrays as big-endian integers, unlike setbit/getbit

## Parameters

### a

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) | [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

## Returns

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

## See

Native TEAL opcode: [`bitlen`](https://dev.algorand.co/reference/algorand-teal/opcodes#bitlen)
Min AVM version: 4
