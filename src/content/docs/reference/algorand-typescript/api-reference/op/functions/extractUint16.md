---
title: 'extractUint16'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / extractUint16

# Function: extractUint16()

> **extractUint16**(`a`, `b`): [`uint64`](/index/type-aliases/uint64)

Defined in: [packages/algo-ts/src/op.ts:895](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L895)

A uint16 formed from a range of big-endian bytes from A starting at B up to but not including B+2. If B+2 is larger than the array length, the program fails

## Parameters

### a

[`bytes`](/index/type-aliases/bytes)

### b

[`uint64`](/index/type-aliases/uint64)

## Returns

[`uint64`](/index/type-aliases/uint64)

## See

Native TEAL opcode: [`extract_uint16`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#extract_uint16)
Min AVM version: 5
