---
title: 'substring'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / substring

# Function: substring()

> **substring**(`a`, `b`, `c`): [`bytes`](/index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/op.ts:3439](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3439)

A range of bytes from A starting at B up to but not including C. If C < B, or either is larger than the array length, the program fails

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

Native TEAL opcode: [`substring3`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#substring3)
Min AVM version: 2
