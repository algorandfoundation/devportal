---
title: 'ecdsaVerify'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / ecdsaVerify

# Function: ecdsaVerify()

> **ecdsaVerify**(`v`, `a`, `b`, `c`, `d`, `e`): `boolean`

Defined in: [packages/algo-ts/src/op.ts:849](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L849)

for (data A, signature B, C and pubkey D, E) verify the signature of the data against the pubkey => {0 or 1}
The 32 byte Y-component of a public key is the last element on the stack, preceded by X-component of a pubkey, preceded by S and R components of a signature, preceded by the data that is fifth element on the stack. All values are big-endian encoded. The signed data must be 32 bytes long, and signatures in lower-S form are only accepted.

## Parameters

### v

[`Ecdsa`](/reference/enumerations/ecdsa)

### a

[`bytes`](/index/type-aliases/bytes)

### b

[`bytes`](/index/type-aliases/bytes)

### c

[`bytes`](/index/type-aliases/bytes)

### d

[`bytes`](/index/type-aliases/bytes)

### e

[`bytes`](/index/type-aliases/bytes)

## Returns

`boolean`

## See

Native TEAL opcode: [`ecdsa_verify`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ecdsa_verify)
Min AVM version: 5
