---
title: 'divmodw'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / divmodw

# Function: divmodw()

> **divmodw**(`a`, `b`, `c`, `d`): readonly \[[`uint64`](/index/type-aliases/uint64), [`uint64`](/index/type-aliases/uint64), [`uint64`](/index/type-aliases/uint64), [`uint64`](/index/type-aliases/uint64)\]

Defined in: [packages/algo-ts/src/op.ts:736](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L736)

W,X = (A,B / C,D); Y,Z = (A,B modulo C,D)
The notation J,K indicates that two uint64 values J and K are interpreted as a uint128 value, with J as the high uint64 and K the low.

## Parameters

### a

[`uint64`](/index/type-aliases/uint64)

### b

[`uint64`](/index/type-aliases/uint64)

### c

[`uint64`](/index/type-aliases/uint64)

### d

[`uint64`](/index/type-aliases/uint64)

## Returns

readonly \[[`uint64`](/index/type-aliases/uint64), [`uint64`](/index/type-aliases/uint64), [`uint64`](/index/type-aliases/uint64), [`uint64`](/index/type-aliases/uint64)\]

## See

Native TEAL opcode: [`divmodw`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#divmodw)
Min AVM version: 4
