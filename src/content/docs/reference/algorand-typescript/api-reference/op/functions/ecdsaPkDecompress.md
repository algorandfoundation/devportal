---
title: 'ecdsaPkDecompress'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / ecdsaPkDecompress

# Function: ecdsaPkDecompress()

> **ecdsaPkDecompress**(`v`, `a`): readonly \[[`bytes`](/index/type-aliases/bytes), [`bytes`](/index/type-aliases/bytes)\]

Defined in: [packages/algo-ts/src/op.ts:829](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L829)

decompress pubkey A into components X, Y
The 33 byte public key in a compressed form to be decompressed into X and Y (top) components. All values are big-endian encoded.

## Parameters

### v

[`Ecdsa`](/reference/enumerations/ecdsa)

### a

[`bytes`](/index/type-aliases/bytes)

## Returns

readonly \[[`bytes`](/index/type-aliases/bytes), [`bytes`](/index/type-aliases/bytes)\]

## See

Native TEAL opcode: [`ecdsa_pk_decompress`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ecdsa_pk_decompress)
Min AVM version: 5
