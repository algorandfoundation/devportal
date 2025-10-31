---
title: concat
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [op](/reference/algorand-typescript/api/op/readme/) / concat

> **concat**(`a`, `b`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [op.ts:735](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L735)

join A and B
`concat` fails if the result would be greater than 4096 bytes.

## Parameters

### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### b

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

## Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

## See

Native TEAL opcode: [`concat`](https://dev.algorand.co/reference/algorand-teal/opcodes#concat)
Min AVM version: 2
