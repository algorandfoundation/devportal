---
title: ed25519verifyBare
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / ed25519verifyBare

> **ed25519verifyBare**(`a`, `b`, `c`): `boolean`

Defined in: [op.ts:890](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L890)

for (data A, signature B, pubkey C) verify the signature of the data against the pubkey => {0 or 1}

## Parameters

### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### b

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/) | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`64`\>

### c

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\> | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

## Returns

`boolean`

## See

Native TEAL opcode: [`ed25519verify_bare`](https://dev.algorand.co/reference/algorand-teal/opcodes#ed25519verify_bare)
Min AVM version: 7
