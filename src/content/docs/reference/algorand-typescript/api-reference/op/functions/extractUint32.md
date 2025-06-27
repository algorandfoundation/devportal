---
title: 'extractUint32'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / extractUint32

# Function: extractUint32()

> **extractUint32**(`a`, `b`): [`uint64`](/index/type-aliases/uint64)

Defined in: [packages/algo-ts/src/op.ts:904](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L904)

A uint32 formed from a range of big-endian bytes from A starting at B up to but not including B+4. If B+4 is larger than the array length, the program fails

## Parameters

### a

[`bytes`](/index/type-aliases/bytes)

### b

[`uint64`](/index/type-aliases/uint64)

## Returns

[`uint64`](/index/type-aliases/uint64)

## See

Native TEAL opcode: [`extract_uint32`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#extract_uint32)
Min AVM version: 5
