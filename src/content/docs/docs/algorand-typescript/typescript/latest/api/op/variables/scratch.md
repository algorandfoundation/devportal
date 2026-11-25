---
editUrl: false
next: false
prev: false
title: "Scratch"
---

> `const` **Scratch**: `object`

Defined in: [op.ts:3505](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3505)

Load or store scratch values

## Type Declaration

### loadBytes()

> **loadBytes**(`a`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Ath scratch space value.  All scratch spaces are 0 at program start.

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

#### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### See

Native TEAL opcode: [`loads`](https://dev.algorand.co/reference/algorand-teal/opcodes#loads)
Min AVM version: 5

### loadUint64()

> **loadUint64**(`a`): [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Ath scratch space value.  All scratch spaces are 0 at program start.

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

#### Returns

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

#### See

Native TEAL opcode: [`loads`](https://dev.algorand.co/reference/algorand-teal/opcodes#loads)
Min AVM version: 5

### store()

> **store**(`a`, `b`): `void`

store B to the Ath scratch space

#### Parameters

##### a

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

##### b

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) | [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### Returns

`void`

#### See

Native TEAL opcode: [`stores`](https://dev.algorand.co/reference/algorand-teal/opcodes#stores)
Min AVM version: 5
