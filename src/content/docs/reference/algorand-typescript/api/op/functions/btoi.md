---
title: btoi
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / btoi

> **btoi**(`a`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [op.ts:716](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L716)

converts big-endian byte array A to uint64. Fails if len(A) > 8. Padded by leading 0s if len(A) < 8.
`btoi` fails if the input is longer than 8 bytes.

## Parameters

### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

## Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## See

Native TEAL opcode: [`btoi`](https://dev.algorand.co/reference/algorand-teal/opcodes#btoi)
Min AVM version: 1
