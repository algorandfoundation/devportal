---
editUrl: false
next: false
prev: false
title: 'vrfVerify'
---

> **vrfVerify**(`s`, `a`, `b`, `c`): readonly \[[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`64`\>, `boolean`\]

Defined in: [op.ts:4087](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4087)

Verify the proof B of message A against pubkey C. Returns vrf output and verification flag.
`VrfAlgorand` is the VRF used in Algorand. It is ECVRF-ED25519-SHA512-Elligator2, specified in the IETF internet draft [draft-irtf-cfrg-vrf-03](https://datatracker.ietf.org/doc/draft-irtf-cfrg-vrf/03/).

## Parameters

### s

[`VrfAlgorand`](/algorand-typescript/api/op/enumerations/vrfverify/#vrfalgorand)

### a

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

### b

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) | [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`80`\>

### c

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) | [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

## Returns

readonly \[[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`64`\>, `boolean`\]

## See

Native TEAL opcode: [`vrf_verify`](https://dev.algorand.co/reference/algorand-teal/opcodes#vrf_verify)
Min AVM version: 7
