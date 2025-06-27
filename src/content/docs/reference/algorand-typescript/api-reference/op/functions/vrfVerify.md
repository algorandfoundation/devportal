---
title: 'vrfVerify'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [op](/reference/readme) / vrfVerify

# Function: vrfVerify()

> **vrfVerify**(`s`, `a`, `b`, `c`): readonly \[[`bytes`](/index/type-aliases/bytes), `boolean`\]

Defined in: [packages/algo-ts/src/op.ts:4025](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4025)

Verify the proof B of message A against pubkey C. Returns vrf output and verification flag.
`VrfAlgorand` is the VRF used in Algorand. It is ECVRF-ED25519-SHA512-Elligator2, specified in the IETF internet draft [draft-irtf-cfrg-vrf-03](https://datatracker.ietf.org/doc/draft-irtf-cfrg-vrf/03/).

## Parameters

### s

[`VrfAlgorand`](/reference/enumerations/vrfverify#vrfalgorand)

### a

[`bytes`](/index/type-aliases/bytes)

### b

[`bytes`](/index/type-aliases/bytes)

### c

[`bytes`](/index/type-aliases/bytes)

## Returns

readonly \[[`bytes`](/index/type-aliases/bytes), `boolean`\]

## See

Native TEAL opcode: [`vrf_verify`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#vrf_verify)
Min AVM version: 7
