---
title: ecdsaVerify
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [op](/docs/algorand-typescript/typescript/latest/api/op/readme/) / ecdsaVerify

> **ecdsaVerify**(`v`, `a`, `b`, `c`, `d`, `e`): `boolean`

Defined in: [op.ts:864](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L864)

for (data A, signature B, C and pubkey D, E) verify the signature of the data against the pubkey => {0 or 1}
The 32 byte Y-component of a public key is the last element on the stack, preceded by X-component of a pubkey, preceded by S and R components of a signature, preceded by the data that is fifth element on the stack. All values are big-endian encoded. The signed data must be 32 bytes long, and signatures in lower-S form are only accepted.

## Parameters

### v

[`Ecdsa`](/docs/algorand-typescript/typescript/latest/api/op/enumerations/ecdsa/)

### a

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\> | [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

### b

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\> | [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

### c

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\> | [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

### d

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\> | [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

### e

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\> | [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

## Returns

`boolean`

## See

Native TEAL opcode: [`ecdsa_verify`](https://dev.algorand.co/reference/algorand-teal/opcodes#ecdsa_verify)
Min AVM version: 5
