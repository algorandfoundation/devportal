---
title: 'ARC4Encoded'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/reference/readme) / ARC4Encoded

# Class: `abstract` ARC4Encoded

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:90](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L90)

A base type for ARC4 encoded values

## Extended by

- [`Str`](/reference/algorand-typescript/str)
- [`UintN`](/reference/algorand-typescript/uintn)
- [`UFixedNxM`](/reference/algorand-typescript/ufixednxm)
- [`Bool`](/reference/algorand-typescript/bool)
- [`Tuple`](/reference/algorand-typescript/tuple)
- [`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase)
- [`StructBase`](/reference/-internal-/classes/structbase)

## Implements

- [`BytesBacked`](/index/interfaces/bytesbacked)

## Constructors

### new ARC4Encoded()

> **new ARC4Encoded**(): [`ARC4Encoded`](/reference/algorand-typescript/arc4encoded)

#### Returns

[`ARC4Encoded`](/reference/algorand-typescript/arc4encoded)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:97](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L97)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/index/type-aliases/bytes)

#### Implementation of

[`BytesBacked`](/index/interfaces/bytesbacked).[`bytes`](/index/interfaces/bytesbacked#bytes)
