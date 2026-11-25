---
editUrl: false
next: false
prev: false
title: "extract"
---

## Call Signature

> **extract**(`a`, `b`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [op.ts:4272](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4272)

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

Defined in: [op.ts:4277](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L4277)

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
