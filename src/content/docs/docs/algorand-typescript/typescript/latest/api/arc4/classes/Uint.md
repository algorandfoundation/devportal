---
title: Uint
type: class
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/README/) / Uint

Defined in: [arc4/encoded-types.ts:133](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L133)

A fixed bit size unsigned int

## Extends

- [`ARC4Encoded`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/ARC4Encoded/)

## Extended by

- [`Byte`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Byte/)
- [`Uint8`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Uint8/)
- [`Uint16`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Uint16/)
- [`Uint32`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Uint32/)
- [`Uint64`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Uint64/)
- [`Uint128`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Uint128/)
- [`Uint256`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Uint256/)

## Type Parameters

### N

`N` _extends_ [`BitSize`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/BitSize/)

## Constructors

### Constructor

> **new Uint**\<`N`\>(`v?`): `Uint`\<`N`\>

Defined in: [arc4/encoded-types.ts:141](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L141)

Create a new UintN instance

#### Parameters

##### v?

[`CompatForArc4Int`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/type-aliases/CompatForArc4Int/)\<`N`\>

The native uint64 or biguint value to initialize this UintN from

#### Returns

`Uint`\<`N`\>

#### Overrides

[`ARC4Encoded`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/ARC4Encoded/).[`constructor`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/ARC4Encoded/#constructor)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:102](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L102)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### Inherited from

[`ARC4Encoded`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/ARC4Encoded/).[`bytes`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/ARC4Encoded/#bytes)

## Methods

### asBigUint()

> **asBigUint**(): [`biguint`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/biguint/)

Defined in: [arc4/encoded-types.ts:155](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L155)

Retrieve the decoded native biguint

#### Returns

[`biguint`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/biguint/)

---

### asUint64()

> **asUint64**(): [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [arc4/encoded-types.ts:148](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L148)

Retrieve the decoded native uint64

#### Returns

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)
