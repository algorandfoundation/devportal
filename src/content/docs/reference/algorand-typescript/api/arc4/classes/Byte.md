---
title: Byte
type: class
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](docs/_md/arc4/README) / Byte

Defined in: [arc4/encoded-types.ts:163](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L163)

An alias for Uint<8>

## Extends

- [`Uint`](Uint)\<`8`\>

## Constructors

### Constructor

> **new Byte**(`v?`): `Byte`

Defined in: [arc4/encoded-types.ts:141](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L141)

Create a new UintN instance

#### Parameters

##### v?

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

The native uint64 or biguint value to initialize this UintN from

#### Returns

`Byte`

#### Inherited from

[`Uint`](Uint).[`constructor`](Uint#constructor)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:102](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L102)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Inherited from

[`Uint`](Uint).[`bytes`](Uint#bytes)

## Methods

### asBigUint()

> **asBigUint**(): [`biguint`](/reference/algorand-typescript/api/index/type-aliases/biguint/)

Defined in: [arc4/encoded-types.ts:155](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L155)

Retrieve the decoded native biguint

#### Returns

[`biguint`](/reference/algorand-typescript/api/index/type-aliases/biguint/)

#### Inherited from

[`Uint`](Uint).[`asBigUint`](Uint#asbiguint)

---

### asUint64()

> **asUint64**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [arc4/encoded-types.ts:148](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L148)

Retrieve the decoded native uint64

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Inherited from

[`Uint`](Uint).[`asUint64`](Uint#asuint64)
