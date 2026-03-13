---
editUrl: false
next: false
prev: false
title: "ecdsaPkDecompress"
---

> **ecdsaPkDecompress**(`v`, `a`): readonly \[[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>, [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>\]

Defined in: [op.ts:838](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L838)

decompress pubkey A into components X, Y
The 33 byte public key in a compressed form to be decompressed into X and Y (top) components. All values are big-endian encoded.

## Parameters

### v

[`Ecdsa`](/algorand-typescript/api/op/enumerations/ecdsa/)

### a

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) | [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`33`\>

## Returns

readonly \[[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>, [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>\]

## See

Native TEAL opcode: [`ecdsa_pk_decompress`](https://dev.algorand.co/reference/algorand-teal/opcodes#ecdsa_pk_decompress)
Min AVM version: 5
