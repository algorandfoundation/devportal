---
title: Uint
type: class
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](/reference/algorand-typescript/api/arc4/readme/) / Uint

Defined in: [arc4/encoded-types.ts:133](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L133)

A fixed bit size unsigned int

## Extends

- [`ARC4Encoded`](ARC4Encoded)

## Extended by

- [`Byte`](Byte)
- [`Uint8`](Uint8)
- [`Uint16`](Uint16)
- [`Uint32`](Uint32)
- [`Uint64`](Uint64)
- [`Uint128`](Uint128)
- [`Uint256`](Uint256)

## Type Parameters

### N

`N` _extends_ [`BitSize`](/reference/algorand-typescript/api/arc4/type-aliases/bitsize/)

## Constructors

### Constructor

> **new Uint**\<`N`\>(`v?`): `Uint`\<`N`\>

Defined in: [arc4/encoded-types.ts:141](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L141)

Create a new UintN instance

#### Parameters

##### v?

[`CompatForArc4Int`](/reference/algorand-typescript/api/arc4/-internal-/type-aliases/compatforarc4int/)\<`N`\>

The native uint64 or biguint value to initialize this UintN from

#### Returns

`Uint`\<`N`\>

#### Overrides

[`ARC4Encoded`](ARC4Encoded).[`constructor`](ARC4Encoded#constructor)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:102](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L102)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Inherited from

[`ARC4Encoded`](ARC4Encoded).[`bytes`](ARC4Encoded#bytes)

## Methods

### asBigUint()

> **asBigUint**(): [`biguint`](/reference/algorand-typescript/api/index/type-aliases/biguint/)

Defined in: [arc4/encoded-types.ts:155](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L155)

Retrieve the decoded native biguint

#### Returns

[`biguint`](/reference/algorand-typescript/api/index/type-aliases/biguint/)

---

### asUint64()

> **asUint64**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [arc4/encoded-types.ts:148](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L148)

Retrieve the decoded native uint64

#### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)
