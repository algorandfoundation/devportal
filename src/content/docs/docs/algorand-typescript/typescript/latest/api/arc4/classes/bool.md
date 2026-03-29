---
editUrl: false
next: false
prev: false
title: 'Bool'
---

Defined in: [arc4/encoded-types.ts:214](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L214)

A boolean value

## Extends

- [`ARC4Encoded`](/algorand-typescript/api/arc4/classes/arc4encoded/)

## Constructors

### Constructor

> **new Bool**(`v?`): `Bool`

Defined in: [arc4/encoded-types.ts:222](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L222)

Create a new Bool value

#### Parameters

##### v?

`boolean`

The native boolean to initialize this value from

#### Returns

`Bool`

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

---

### native

#### Get Signature

> **get** **native**(): `boolean`

Defined in: [arc4/encoded-types.ts:229](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L229)

Get the decoded native boolean for this value

##### Returns

`boolean`
