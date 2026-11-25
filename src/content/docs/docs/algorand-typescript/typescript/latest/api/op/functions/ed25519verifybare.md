---
editUrl: false
next: false
prev: false
title: "ed25519verifyBare"
---

> **ed25519verifyBare**(`a`, `b`, `c`): `boolean`

Defined in: [op.ts:1048](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L1048)

for (data A, signature B, pubkey C) verify the signature of the data against the pubkey => {0 or 1}

## Parameters

### a

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

### b

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/) | [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`64`\>

### c

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/) | [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

## Returns

`boolean`

## See

Native TEAL opcode: [`ed25519verify_bare`](https://dev.algorand.co/reference/algorand-teal/opcodes#ed25519verify_bare)
Min AVM version: 7
