---
title: select
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [op](docs/_md/op/README) / select

## Call Signature

> **select**(`a`, `b`, `c`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [op.ts:4107](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4107)

selects one of two values based on top-of-stack: B if C != 0, else A

### Parameters

#### a

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### b

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### c

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

## Call Signature

> **select**(`a`, `b`, `c`): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [op.ts:4112](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4112)

selects one of two values based on top-of-stack: B if C != 0, else A

### Parameters

#### a

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### b

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### c

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)
