---
title: Str
type: class
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/README/) / Str

Defined in: [arc4/encoded-types.ts:110](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L110)

A utf8 encoded string prefixed with its length expressed as a 2 byte uint

## Extends

- [`ARC4Encoded`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/ARC4Encoded/)

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

---

### native

#### Get Signature

> **get** **native**(): `string`

Defined in: [arc4/encoded-types.ts:125](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L125)

Retrieve the decoded native string

##### Returns

`string`
