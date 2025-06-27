---
title: 'ed25519verifyBare'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / ed25519verifyBare

# Function: ed25519verifyBare()

> **ed25519verifyBare**(`a`, `b`, `c`): `boolean`

Defined in: [packages/algo-ts/src/op.ts:868](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L868)

for (data A, signature B, pubkey C) verify the signature of the data against the pubkey => {0 or 1}

## Parameters

### a

[`bytes`](/index/type-aliases/bytes)

### b

[`bytes`](/index/type-aliases/bytes)

### c

[`bytes`](/index/type-aliases/bytes)

## Returns

`boolean`

## See

Native TEAL opcode: [`ed25519verify_bare`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ed25519verify_bare)
Min AVM version: 7
