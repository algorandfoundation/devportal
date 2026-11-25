---
editUrl: false
next: false
prev: false
title: "UFixed"
---

Defined in: [arc4/encoded-types.ts:198](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L198)

A fixed bit size, fixed decimal unsigned value

## Extends

- [`ARC4Encoded`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/arc4encoded/)

## Type Parameters

### N

`N` *extends* [`BitSize`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/bitsize/)

### M

`M` *extends* `number`

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

[`ARC4Encoded`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/arc4encoded/).[`constructor`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/arc4encoded/#constructor)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:102](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L102)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### Inherited from

[`ARC4Encoded`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/arc4encoded/).[`bytes`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/arc4encoded/#bytes)
