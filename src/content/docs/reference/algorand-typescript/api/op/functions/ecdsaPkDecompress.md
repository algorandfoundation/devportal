---
title: ecdsaPkDecompress
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [op](docs/_md/op/README) / ecdsaPkDecompress

> **ecdsaPkDecompress**(`v`, `a`): readonly \[[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>, [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>\]

Defined in: [op.ts:838](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L838)

decompress pubkey A into components X, Y
The 33 byte public key in a compressed form to be decompressed into X and Y (top) components. All values are big-endian encoded.

## Parameters

### v

[`Ecdsa`](/reference/algorand-typescript/api/op/enumerations/ecdsa/)

### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/) | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`33`\>

## Returns

readonly \[[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>, [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>\]

## See

Native TEAL opcode: [`ecdsa_pk_decompress`](https://dev.algorand.co/reference/algorand-teal/opcodes#ecdsa_pk_decompress)
Min AVM version: 5
