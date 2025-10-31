---
title: ARC4Encoded
type: class
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](/reference/algorand-typescript/api/arc4/readme/) / ARC4Encoded

Defined in: [arc4/encoded-types.ts:87](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L87)

A base type for ARC4 encoded values

## Extended by

- [`Str`](Str)
- [`Uint`](Uint)
- [`UFixed`](UFixed)
- [`Bool`](Bool)
- [`Tuple`](Tuple)
- [`Arc4ArrayBase`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/)
- [`StructBase`](/reference/algorand-typescript/api/arc4/-internal-/classes/structbase/)

## Implements

- [`BytesBacked`](/reference/algorand-typescript/api/index/interfaces/bytesbacked/)

## Constructors

### Constructor

> **new ARC4Encoded**(): `ARC4Encoded`

#### Returns

`ARC4Encoded`

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:102](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L102)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Implementation of

[`BytesBacked`](/reference/algorand-typescript/api/index/interfaces/bytesbacked/).[`bytes`](/reference/algorand-typescript/api/index/interfaces/bytesbacked/#bytes)
