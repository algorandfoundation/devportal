---
title: 'setByte'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / setByte

# Function: setByte()

> **setByte**(`a`, `b`, `c`): [`bytes`](/index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/op.ts:3376](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3376)

Copy of A with the Bth byte set to small integer (between 0..255) C. If B is greater than or equal to the array length, the program fails

## Parameters

### a

[`bytes`](/index/type-aliases/bytes)

### b

[`uint64`](/index/type-aliases/uint64)

### c

[`uint64`](/index/type-aliases/uint64)

## Returns

[`bytes`](/index/type-aliases/bytes)

## See

Native TEAL opcode: [`setbyte`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#setbyte)
Min AVM version: 3
