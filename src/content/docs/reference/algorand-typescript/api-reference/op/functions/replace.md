---
title: 'replace'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / replace

# Function: replace()

> **replace**(`a`, `b`, `c`): [`bytes`](/index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/op.ts:3367](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3367)

Copy of A with the bytes starting at B replaced by the bytes of C. Fails if B+len(C) exceeds len(A)
`replace3` can be called using `replace` with no immediates.

## Parameters

### a

[`bytes`](/index/type-aliases/bytes)

### b

[`uint64`](/index/type-aliases/uint64)

### c

[`bytes`](/index/type-aliases/bytes)

## Returns

[`bytes`](/index/type-aliases/bytes)

## See

Native TEAL opcode: [`replace3`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#replace3)
Min AVM version: 7
