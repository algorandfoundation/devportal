---
title: StructBase
type: class
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](/reference/algorand-typescript/api/arc4/readme/) / [\<internal\>](/reference/algorand-typescript/api/arc4/-internal-/readme/) / StructBase

Defined in: [arc4/encoded-types.ts:474](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L474)

The base type for arc4 structs

## Extends

- [`ARC4Encoded`](/reference/algorand-typescript/api/arc4/classes/arc4encoded/)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new StructBase**\<`T`\>(): `StructBase`\<`T`\>

#### Returns

`StructBase`\<`T`\>

#### Inherited from

[`ARC4Encoded`](/reference/algorand-typescript/api/arc4/classes/arc4encoded/).[`constructor`](/reference/algorand-typescript/api/arc4/classes/arc4encoded/#constructor)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:102](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L102)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Inherited from

[`ARC4Encoded`](/reference/algorand-typescript/api/arc4/classes/arc4encoded/).[`bytes`](/reference/algorand-typescript/api/arc4/classes/arc4encoded/#bytes)

---

### native

#### Get Signature

> **get** **native**(): `T`

Defined in: [arc4/encoded-types.ts:478](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L478)

##### Returns

`T`
