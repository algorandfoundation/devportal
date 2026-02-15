---
title: select
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [op](/docs/algorand-typescript/typescript/latest/api/op/readme/) / select

## Call Signature

> **select**(`a`, `b`, `c`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [op.ts:4107](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4107)

selects one of two values based on top-of-stack: B if C != 0, else A

### Parameters

#### a

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### b

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### c

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

## Call Signature

> **select**(`a`, `b`, `c`): [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [op.ts:4112](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4112)

selects one of two values based on top-of-stack: B if C != 0, else A

### Parameters

#### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

#### b

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

#### c

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

### Returns

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)
