---
editUrl: false
next: false
prev: false
title: 'Uint256'
---

Defined in: [arc4/encoded-types.ts:193](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L193)

An alias for Uint<256>

## Extends

- [`Uint`](/algorand-typescript/api/arc4/classes/uint/)\<`256`\>

## Constructors

### Constructor

> **new Uint256**(`v?`): `Uint256`

Defined in: [arc4/encoded-types.ts:141](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L141)

Create a new UintN instance

#### Parameters

##### v?

[`BigUintCompat`](/algorand-typescript/api/index/type-aliases/biguintcompat/)

The native uint64 or biguint value to initialize this UintN from

#### Returns

`Uint256`

#### Inherited from

[`Uint`](/algorand-typescript/api/arc4/classes/uint/).[`constructor`](/algorand-typescript/api/arc4/classes/uint/#constructor)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:102](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L102)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

#### Inherited from

[`Uint`](/algorand-typescript/api/arc4/classes/uint/).[`bytes`](/algorand-typescript/api/arc4/classes/uint/#bytes)

## Methods

### asBigUint()

> **asBigUint**(): [`biguint`](/algorand-typescript/api/index/type-aliases/biguint/)

Defined in: [arc4/encoded-types.ts:155](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L155)

Retrieve the decoded native biguint

#### Returns

[`biguint`](/algorand-typescript/api/index/type-aliases/biguint/)

#### Inherited from

[`Uint`](/algorand-typescript/api/arc4/classes/uint/).[`asBigUint`](/algorand-typescript/api/arc4/classes/uint/#asbiguint)

---

### asUint64()

> **asUint64**(): [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [arc4/encoded-types.ts:148](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L148)

Retrieve the decoded native uint64

#### Returns

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

#### Inherited from

[`Uint`](/algorand-typescript/api/arc4/classes/uint/).[`asUint64`](/algorand-typescript/api/arc4/classes/uint/#asuint64)
