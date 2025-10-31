---
title: exp
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [op](docs/_md/op/README) / exp

> **exp**(`a`, `b`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [op.ts:899](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L899)

A raised to the Bth power. Fail if A == B == 0 and on overflow

## Parameters

### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## See

Native TEAL opcode: [`exp`](https://dev.algorand.co/reference/algorand-teal/opcodes#exp)
Min AVM version: 4
