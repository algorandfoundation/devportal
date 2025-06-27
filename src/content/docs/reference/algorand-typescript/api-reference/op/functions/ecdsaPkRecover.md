---
title: 'ecdsaPkRecover'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / ecdsaPkRecover

# Function: ecdsaPkRecover()

> **ecdsaPkRecover**(`v`, `a`, `b`, `c`, `d`): readonly \[[`bytes`](/index/type-aliases/bytes), [`bytes`](/index/type-aliases/bytes)\]

Defined in: [packages/algo-ts/src/op.ts:839](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L839)

for (data A, recovery id B, signature C, D) recover a public key
S (top) and R elements of a signature, recovery id and data (bottom) are expected on the stack and used to deriver a public key. All values are big-endian encoded. The signed data must be 32 bytes long.

## Parameters

### v

[`Ecdsa`](/reference/enumerations/ecdsa)

### a

[`bytes`](/index/type-aliases/bytes)

### b

[`uint64`](/index/type-aliases/uint64)

### c

[`bytes`](/index/type-aliases/bytes)

### d

[`bytes`](/index/type-aliases/bytes)

## Returns

readonly \[[`bytes`](/index/type-aliases/bytes), [`bytes`](/index/type-aliases/bytes)\]

## See

Native TEAL opcode: [`ecdsa_pk_recover`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ecdsa_pk_recover)
Min AVM version: 5
