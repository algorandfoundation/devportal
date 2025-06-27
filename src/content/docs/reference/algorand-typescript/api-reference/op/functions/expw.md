---
title: 'expw'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / expw

# Function: expw()

> **expw**(`a`, `b`): readonly \[[`uint64`](/index/type-aliases/uint64), [`uint64`](/index/type-aliases/uint64)\]

Defined in: [packages/algo-ts/src/op.ts:886](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L886)

A raised to the Bth power as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low. Fail if A == B == 0 or if the results exceeds 2^128-1

## Parameters

### a

[`uint64`](/index/type-aliases/uint64)

### b

[`uint64`](/index/type-aliases/uint64)

## Returns

readonly \[[`uint64`](/index/type-aliases/uint64), [`uint64`](/index/type-aliases/uint64)\]

## See

Native TEAL opcode: [`expw`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#expw)
Min AVM version: 4
