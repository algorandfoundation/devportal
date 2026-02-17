---
title: Scratch
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [op](/docs/algorand-typescript/typescript/latest/api/op/README/) / Scratch

> `const` **Scratch**: `object`

Defined in: [op.ts:3346](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L3346)

Load or store scratch values

## Type declaration

### loadBytes()

> **loadBytes**(`a`): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Ath scratch space value. All scratch spaces are 0 at program start.

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

Ath scratch space value. All scratch spaces are 0 at program start.

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
