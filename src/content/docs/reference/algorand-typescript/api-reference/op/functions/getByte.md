---
title: 'getByte'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / getByte

# Function: getByte()

> **getByte**(`a`, `b`): [`uint64`](/index/type-aliases/uint64)

Defined in: [packages/algo-ts/src/op.ts:951](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L951)

Bth byte of A, as an integer. If B is greater than or equal to the array length, the program fails

## Parameters

### a

[`bytes`](/index/type-aliases/bytes)

### b

[`uint64`](/index/type-aliases/uint64)

## Returns

[`uint64`](/index/type-aliases/uint64)

## See

Native TEAL opcode: [`getbyte`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#getbyte)
Min AVM version: 3
