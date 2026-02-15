---
title: extract
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [op](/docs/algorand-typescript/typescript/latest/api/op/readme/) / extract

## Call Signature

> **extract**(`a`, `b`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [op.ts:4094](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4094)

A range of bytes from A starting at B up to the end of the sequence

### Parameters

#### a

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### b

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

## Call Signature

> **extract**(`a`, `b`, `c`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [op.ts:4099](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4099)

A range of bytes from A starting at B up to but not including B+C. If B+C is larger than the array length, the program fails

### Parameters

#### a

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### b

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

#### c

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)
