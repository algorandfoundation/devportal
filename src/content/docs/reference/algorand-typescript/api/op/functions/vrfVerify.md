---
title: vrfVerify
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [op](docs/_md/op/README) / vrfVerify

> **vrfVerify**(`s`, `a`, `b`, `c`): readonly \[[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`64`\>, `boolean`\]

Defined in: [op.ts:4087](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4087)

Verify the proof B of message A against pubkey C. Returns vrf output and verification flag.
`VrfAlgorand` is the VRF used in Algorand. It is ECVRF-ED25519-SHA512-Elligator2, specified in the IETF internet draft [draft-irtf-cfrg-vrf-03](https://datatracker.ietf.org/doc/draft-irtf-cfrg-vrf/03/).

## Parameters

### s

[`VrfAlgorand`](/reference/algorand-typescript/api/op/enumerations/vrfverify/#vrfalgorand)

### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### b

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/) | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`80`\>

### c

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\> | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

## Returns

readonly \[[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`64`\>, `boolean`\]

## See

Native TEAL opcode: [`vrf_verify`](https://dev.algorand.co/reference/algorand-teal/opcodes#vrf_verify)
Min AVM version: 7
