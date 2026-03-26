---
editUrl: false
next: false
prev: false
title: 'ecdsaVerify'
---

> **ecdsaVerify**(`v`, `a`, `b`, `c`, `d`, `e`): `boolean`

Defined in: [op.ts:864](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L864)

for (data A, signature B, C and pubkey D, E) verify the signature of the data against the pubkey => {0 or 1}
The 32 byte Y-component of a public key is the last element on the stack, preceded by X-component of a pubkey, preceded by S and R components of a signature, preceded by the data that is fifth element on the stack. All values are big-endian encoded. The signed data must be 32 bytes long, and signatures in lower-S form are only accepted.

## Parameters

### v

[`Ecdsa`](/algorand-typescript/api/op/enumerations/ecdsa/)

### a

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) | [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### b

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) | [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### c

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) | [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### d

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) | [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

### e

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) | [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

## Returns

`boolean`

## See

Native TEAL opcode: [`ecdsa_verify`](https://dev.algorand.co/reference/algorand-teal/opcodes#ecdsa_verify)
Min AVM version: 5
