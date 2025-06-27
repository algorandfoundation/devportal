---
title: 'StructBase'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/readme) / [\<internal\>](/reference/readme) / StructBase

# Class: StructBase\<T\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:466](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L466)

The base type for arc4 structs

## Extends

- [`ARC4Encoded`](/classes/arc4encoded)

## Type Parameters

• **T**

## Constructors

### new StructBase()

> **new StructBase**\<`T`\>(): [`StructBase`](/reference/algorand-typescript/structbase)\<`T`\>

#### Returns

[`StructBase`](/reference/algorand-typescript/structbase)\<`T`\>

#### Inherited from

[`ARC4Encoded`](/classes/arc4encoded).[`constructor`](/classes/arc4encoded#constructors)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:97](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L97)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/index/type-aliases/bytes)

#### Inherited from

[`ARC4Encoded`](/classes/arc4encoded).[`bytes`](/classes/arc4encoded#bytes)

---

### native

#### Get Signature

> **get** **native**(): `T`

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:470](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L470)

##### Returns

`T`
