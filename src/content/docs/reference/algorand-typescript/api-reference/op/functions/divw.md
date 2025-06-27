---
title: 'divw'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / divw

# Function: divw()

> **divw**(`a`, `b`, `c`): [`uint64`](/index/type-aliases/uint64)

Defined in: [packages/algo-ts/src/op.ts:746](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L746)

A,B / C. Fail if C == 0 or if result overflows.
The notation A,B indicates that A and B are interpreted as a uint128 value, with A as the high uint64 and B the low.

## Parameters

### a

[`uint64`](/index/type-aliases/uint64)

### b

[`uint64`](/index/type-aliases/uint64)

### c

[`uint64`](/index/type-aliases/uint64)

## Returns

[`uint64`](/index/type-aliases/uint64)

## See

Native TEAL opcode: [`divw`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#divw)
Min AVM version: 6
