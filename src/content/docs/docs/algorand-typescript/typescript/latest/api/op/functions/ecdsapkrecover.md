---
editUrl: false
next: false
prev: false
title: "ecdsaPkRecover"
---

> **ecdsaPkRecover**(`v`, `a`, `b`, `c`, `d`): readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>, [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>\]

Defined in: [op.ts:1006](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L1006)

for (data A, recovery id B, signature C, D) recover a public key
S (top) and R elements of a signature, recovery id and data (bottom) are expected on the stack and used to deriver a public key. All values are big-endian encoded. The signed data must be 32 bytes long.

## Parameters

### v

[`Ecdsa`](/docs/algorand-typescript/typescript/latest/api/op/enumerations/ecdsa/)

### a

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/) | [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

### b

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

### c

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/) | [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

### d

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/) | [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

## Returns

readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>, [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>\]

## See

Native TEAL opcode: [`ecdsa_pk_recover`](https://dev.algorand.co/reference/algorand-teal/opcodes#ecdsa_pk_recover)
Min AVM version: 5
