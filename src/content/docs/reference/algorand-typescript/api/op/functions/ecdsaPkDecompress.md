---
title: ecdsaPkDecompress
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / ecdsaPkDecompress

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
