---
editUrl: false
next: false
prev: false
title: "poseidon2"
---

> **poseidon2**(`c`, `a`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [op.ts:3581](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3581)

Poseidon2 hash of scalars A, using curve and parameters specified by configuration C
A is a non-empty list of concatenated 32 byte big-endian unsigned integer scalars. Fail if A's length is not a multiple of 32 or any element is greater than or equal to the scalar field modulus.
Poseidon2 hashes field elements, not arbitrary byte strings; reducing external inputs modulo the scalar field modulus makes congruent inputs hash identically. Poseidon2 is thus not a general purpose hash function, but meant to be used in zero knowledge applications to match a zk-circuit implementation.

## Parameters

### c

[`Poseidon2Configurations`](/docs/algorand-typescript/typescript/latest/api/op/enumerations/poseidon2configurations/)

### a

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

## Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

## See

Native TEAL opcode: [`poseidon2`](https://dev.algorand.co/reference/algorand-teal/opcodes#poseidon2)
Min AVM version: 13
