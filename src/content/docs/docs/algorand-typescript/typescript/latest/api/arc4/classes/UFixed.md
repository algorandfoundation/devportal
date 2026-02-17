---
title: UFixed
type: class
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/README/) / UFixed

Defined in: [arc4/encoded-types.ts:198](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L198)

A fixed bit size, fixed decimal unsigned value

## Extends

- [`ARC4Encoded`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/ARC4Encoded/)

## Type Parameters

### N

`N` _extends_ [`BitSize`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/BitSize/)

### M

`M` _extends_ `number`

## Constructors

### Constructor

> **new UFixed**\<`N`, `M`\>(`v?`): `UFixed`\<`N`, `M`\>

Defined in: [arc4/encoded-types.ts:206](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L206)

Create a new UFixed value

#### Parameters

##### v?

`` `${number}.${number}` ``

A string representing the integer and fractional portion of the number

#### Returns

`UFixed`\<`N`, `M`\>

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
