---
title: Tuple
type: class
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](docs/_md/arc4/README) / Tuple

Defined in: [arc4/encoded-types.ts:408](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L408)

An arc4 encoded tuple of values

## Extends

- [`ARC4Encoded`](ARC4Encoded)

## Type Parameters

### TTuple

`TTuple` _extends_ readonly \[[`ARC4Encoded`](ARC4Encoded), `...ARC4Encoded[]`\]

A type representing the native tuple of item types

## Constructors

### Constructor

> **new Tuple**\<`TTuple`\>(): `Tuple`\<`TTuple`\>

Defined in: [arc4/encoded-types.ts:415](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L415)

Create a new Tuple with the default zero values for items

#### Returns

`Tuple`\<`TTuple`\>

#### Overrides

[`ARC4Encoded`](ARC4Encoded).[`constructor`](ARC4Encoded#constructor)

### Constructor

> **new Tuple**\<`TTuple`\>(...`items`): `Tuple`\<`TTuple`\>

Defined in: [arc4/encoded-types.ts:420](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L420)

Create a new Tuple with the specified items

#### Parameters

##### items

...`TTuple`

The tuple items

#### Returns

`Tuple`\<`TTuple`\>

#### Overrides

`ARC4Encoded.constructor`

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

---

### length

#### Get Signature

> **get** **length**(): `TTuple`\[`"length"`\] & `object` & `number`

Defined in: [arc4/encoded-types.ts:436](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L436)

Returns the length of this tuple

##### Returns

`TTuple`\[`"length"`\] & `object` & `number`

---

### native

#### Get Signature

> **get** **native**(): `TTuple`

Defined in: [arc4/encoded-types.ts:443](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L443)

Returns the decoded native tuple (with arc4 encoded items)

##### Returns

`TTuple`

## Methods

### at()

> **at**\<`TIndex`\>(`index`): `TTuple`\[`TIndex`\]

Defined in: [arc4/encoded-types.ts:429](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L429)

Returns the item at the specified index

#### Type Parameters

##### TIndex

`TIndex` _extends_ `string` \| `number` \| `symbol`

#### Parameters

##### index

`TIndex`

The index of the item to get. Must be a positive literal representing a tuple index

#### Returns

`TTuple`\[`TIndex`\]
