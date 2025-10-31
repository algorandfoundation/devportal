---
title: ecdsaPkRecover
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / ecdsaPkRecover

> **ecdsaPkRecover**(`v`, `a`, `b`, `c`, `d`): readonly \[[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>, [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>\]

Defined in: [op.ts:848](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L848)

for (data A, recovery id B, signature C, D) recover a public key
S (top) and R elements of a signature, recovery id and data (bottom) are expected on the stack and used to deriver a public key. All values are big-endian encoded. The signed data must be 32 bytes long.

## Parameters

### v

[`Ecdsa`](/reference/algorand-typescript/api/op/enumerations/ecdsa/)

### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\> | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### c

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\> | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### d

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\> | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

## Returns

readonly \[[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>, [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>\]

## See

Native TEAL opcode: [`ecdsa_pk_recover`](https://dev.algorand.co/reference/algorand-teal/opcodes#ecdsa_pk_recover)
Min AVM version: 5
