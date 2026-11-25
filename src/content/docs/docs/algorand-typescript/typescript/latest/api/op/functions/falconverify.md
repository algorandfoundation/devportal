---
editUrl: false
next: false
prev: false
title: "falconVerify"
---

> **falconVerify**(`a`, `b`, `c`): `boolean`

Defined in: [op.ts:1103](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L1103)

for (data A, deterministic FALCON-1024 compressed-format signature B, pubkey C) verify the signature of data against the pubkey => {0 or 1}
Signature B is variable-length, with maximum size 1423 bytes.

## Parameters

### a

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

### b

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

### c

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/) | [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`1793`\>

## Returns

`boolean`

## See

Native TEAL opcode: [`falcon_verify`](https://dev.algorand.co/reference/algorand-teal/opcodes#falcon_verify)
Min AVM version: 12
