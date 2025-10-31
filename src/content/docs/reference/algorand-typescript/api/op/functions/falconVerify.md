---
title: falconVerify
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / falconVerify

> **falconVerify**(`a`, `b`, `c`): `boolean`

Defined in: [op.ts:944](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L944)

for (data A, compressed-format signature B, pubkey C) verify the signature of data against the pubkey => {0 or 1}

## Parameters

### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### b

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/) | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`1232`\>

### c

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/) | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`1793`\>

## Returns

`boolean`

## See

Native TEAL opcode: [`falcon_verify`](https://dev.algorand.co/reference/algorand-teal/opcodes#falcon_verify)
Min AVM version: 12
