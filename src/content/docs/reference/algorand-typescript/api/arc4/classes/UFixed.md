---
title: UFixed
type: class
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](/reference/algorand-typescript/api/arc4/readme/) / UFixed

Defined in: [arc4/encoded-types.ts:198](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L198)

A fixed bit size, fixed decimal unsigned value

## Extends

- [`ARC4Encoded`](ARC4Encoded)

## Type Parameters

### N

`N` _extends_ [`BitSize`](/reference/algorand-typescript/api/arc4/type-aliases/bitsize/)

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

[`ARC4Encoded`](ARC4Encoded).[`constructor`](ARC4Encoded#constructor)

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
