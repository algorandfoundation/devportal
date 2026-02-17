---
title: Uint128
type: class
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/README/) / Uint128

Defined in: [arc4/encoded-types.ts:188](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L188)

An alias for Uint<128>

## Extends

- [`Uint`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Uint/)\<`128`\>

## Constructors

### Constructor

> **new Uint128**(`v?`): `Uint128`

Defined in: [arc4/encoded-types.ts:141](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L141)

Create a new UintN instance

#### Parameters

##### v?

[`BigUintCompat`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/BigUintCompat/)

The native uint64 or biguint value to initialize this UintN from

#### Returns

`Uint128`

#### Inherited from

[`Uint`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Uint/).[`constructor`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Uint/#constructor)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:102](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L102)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### Inherited from

[`Uint`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Uint/).[`bytes`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Uint/#bytes)

## Methods

### asBigUint()

> **asBigUint**(): [`biguint`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/biguint/)

Defined in: [arc4/encoded-types.ts:155](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L155)

Retrieve the decoded native biguint

#### Returns

[`biguint`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/biguint/)

#### Inherited from

[`Uint`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Uint/).[`asBigUint`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Uint/#asbiguint)

---

### asUint64()

> **asUint64**(): [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [arc4/encoded-types.ts:148](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L148)

Retrieve the decoded native uint64

#### Returns

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

#### Inherited from

[`Uint`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Uint/).[`asUint64`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/Uint/#asuint64)
