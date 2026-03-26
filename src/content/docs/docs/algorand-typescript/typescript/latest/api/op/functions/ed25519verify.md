---
editUrl: false
next: false
prev: false
title: 'ed25519verify'
---

> **ed25519verify**(`a`, `b`, `c`): `boolean`

Defined in: [op.ts:881](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L881)

for (data A, signature B, pubkey C) verify the signature of ("ProgData" || program_hash || data) against the pubkey => {0 or 1}
The 32 byte public key is the last element on the stack, preceded by the 64 byte signature at the second-to-last element on the stack, preceded by the data which was signed at the third-to-last element on the stack.

## Parameters

### a

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

### b

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) | [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`64`\>

### c

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) | [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

## Returns

`boolean`

## See

Native TEAL opcode: [`ed25519verify`](https://dev.algorand.co/reference/algorand-teal/opcodes#ed25519verify)
Min AVM version: 1
