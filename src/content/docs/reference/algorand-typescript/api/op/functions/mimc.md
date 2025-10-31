---
title: mimc
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / mimc

> **mimc**(`c`, `a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [op.ts:3382](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3382)

MiMC hash of scalars A, using curve and parameters specified by configuration C
A is a list of concatenated 32 byte big-endian unsigned integer scalars. Fail if A's length is not a multiple of 32 or any element exceeds the curve modulus.
The MiMC hash function has known collisions since any input which is a multiple of the elliptic curve modulus will hash to the same value. MiMC is thus not a general purpose hash function, but meant to be used in zero knowledge applications to match a zk-circuit implementation.

## Parameters

### c

[`MimcConfigurations`](/reference/algorand-typescript/api/op/enumerations/mimcconfigurations/)

### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

## Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

## See

Native TEAL opcode: [`mimc`](https://dev.algorand.co/reference/algorand-teal/opcodes#mimc)
Min AVM version: 11
