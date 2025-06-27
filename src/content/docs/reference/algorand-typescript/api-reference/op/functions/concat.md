---
title: 'concat'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / concat

# Function: concat()

> **concat**(`a`, `b`): [`bytes`](/index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/op.ts:726](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L726)

join A and B
`concat` fails if the result would be greater than 4096 bytes.

## Parameters

### a

[`bytes`](/index/type-aliases/bytes)

### b

[`bytes`](/index/type-aliases/bytes)

## Returns

[`bytes`](/index/type-aliases/bytes)

## See

Native TEAL opcode: [`concat`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#concat)
Min AVM version: 2
