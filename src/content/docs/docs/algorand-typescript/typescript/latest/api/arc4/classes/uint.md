---
editUrl: false
next: false
prev: false
title: 'Uint'
---

Defined in: [arc4/encoded-types.ts:133](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L133)

A fixed bit size unsigned int

## Extends

- [`ARC4Encoded`](/algorand-typescript/api/arc4/classes/arc4encoded/)

## Extended by

- [`Byte`](/algorand-typescript/api/arc4/classes/byte/)
- [`Uint8`](/algorand-typescript/api/arc4/classes/uint8/)
- [`Uint16`](/algorand-typescript/api/arc4/classes/uint16/)
- [`Uint32`](/algorand-typescript/api/arc4/classes/uint32/)
- [`Uint64`](/algorand-typescript/api/arc4/classes/uint64/)
- [`Uint128`](/algorand-typescript/api/arc4/classes/uint128/)
- [`Uint256`](/algorand-typescript/api/arc4/classes/uint256/)

## Type Parameters

### N

`N` _extends_ [`BitSize`](/algorand-typescript/api/arc4/type-aliases/bitsize/)

## Constructors

### Constructor

> **new Uint**\<`N`\>(`v?`): `Uint`\<`N`\>

Defined in: [arc4/encoded-types.ts:141](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L141)

Create a new UintN instance

#### Parameters

##### v?

`CompatForArc4Int`\<`N`\>

The native uint64 or biguint value to initialize this UintN from

#### Returns

`Uint`\<`N`\>

#### Overrides

[`ARC4Encoded`](/algorand-typescript/api/arc4/classes/arc4encoded/).[`constructor`](/algorand-typescript/api/arc4/classes/arc4encoded/#constructor)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:102](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L102)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

#### Inherited from

[`ARC4Encoded`](/algorand-typescript/api/arc4/classes/arc4encoded/).[`bytes`](/algorand-typescript/api/arc4/classes/arc4encoded/#bytes)

## Methods

### asBigUint()

> **asBigUint**(): [`biguint`](/algorand-typescript/api/index/type-aliases/biguint/)

Defined in: [arc4/encoded-types.ts:155](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L155)

Retrieve the decoded native biguint

#### Returns

[`biguint`](/algorand-typescript/api/index/type-aliases/biguint/)

---

### asUint64()

> **asUint64**(): [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [arc4/encoded-types.ts:148](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L148)

Retrieve the decoded native uint64

#### Returns

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)
