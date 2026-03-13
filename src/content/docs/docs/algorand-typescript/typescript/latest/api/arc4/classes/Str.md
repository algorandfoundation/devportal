---
editUrl: false
next: false
prev: false
title: "Str"
---

Defined in: [arc4/encoded-types.ts:110](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L110)

A utf8 encoded string prefixed with its length expressed as a 2 byte uint

## Extends

- [`ARC4Encoded`](/algorand-typescript/api/arc4/classes/arc4encoded/)

## Constructors

### Constructor

> **new Str**(`s?`): `Str`

Defined in: [arc4/encoded-types.ts:118](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L118)

Create a new Str instance

#### Parameters

##### s?

`string`

The native string to initialize this Str from

#### Returns

`Str`

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

***

### native

#### Get Signature

> **get** **native**(): `string`

Defined in: [arc4/encoded-types.ts:125](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L125)

Retrieve the decoded native string

##### Returns

`string`
