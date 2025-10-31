---
title: bzero
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [op](docs/_md/op/README) / bzero

> **bzero**\<`TLength`\>(`a`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

Defined in: [op.ts:725](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L725)

zero filled byte-array of length A

## Type Parameters

### TLength

`TLength` _extends_ [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) = [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## Parameters

### a

`TLength`

## Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

## See

Native TEAL opcode: [`bzero`](https://dev.algorand.co/reference/algorand-teal/opcodes#bzero)
Min AVM version: 4
