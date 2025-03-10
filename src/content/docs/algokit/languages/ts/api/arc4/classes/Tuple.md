---
title: Class: Tuple\<TTuple\>
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [arc4](../README) / Tuple



Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:400](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L400)

An arc4 encoded tuple of values

## Extends

- [`ARC4Encoded`](ARC4Encoded)

## Type Parameters

• **TTuple** *extends* \[[`ARC4Encoded`](ARC4Encoded), `...ARC4Encoded[]`\]

A type representing the native tuple of item types

## Constructors

### new Tuple()

> **new Tuple**\<`TTuple`\>(...`items`): [`Tuple`](Tuple)\<`TTuple`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:408](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L408)

Create a new Tuple with the specified items

#### Parameters

##### items

...`TTuple`

The tuple items

#### Returns

[`Tuple`](Tuple)\<`TTuple`\>

#### Overrides

[`ARC4Encoded`](ARC4Encoded).[`constructor`](ARC4Encoded#constructors)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](../../index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:97](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L97)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](../../index/type-aliases/bytes)

#### Inherited from

[`ARC4Encoded`](ARC4Encoded).[`bytes`](ARC4Encoded#bytes)

***

### length

#### Get Signature

> **get** **length**(): `TTuple`\[`"length"`\] & `object` & `number`

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:423](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L423)

Returns the length of this tuple

##### Returns

`TTuple`\[`"length"`\] & `object` & `number`

***

### native

#### Get Signature

> **get** **native**(): `TTuple`

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:430](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L430)

Returns the decoded native tuple (with arc4 encoded items)

##### Returns

`TTuple`

## Methods

### at()

> **at**\<`TIndex`\>(`index`): `TTuple`\[`TIndex`\]

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:416](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L416)

Returns the item at the specified index

#### Type Parameters

• **TIndex** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### index

`TIndex`

The index of the item to get. Must be a positive literal representing a tuple index

#### Returns

`TTuple`\[`TIndex`\]