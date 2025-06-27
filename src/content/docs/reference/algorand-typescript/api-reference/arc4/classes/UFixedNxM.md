---
title: 'UFixedNxM'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/reference/readme) / UFixedNxM

# Class: UFixedNxM\<N, M\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:186](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L186)

A fixed bit size, fixed decimal unsigned value

## Extends

- [`ARC4Encoded`](/reference/algorand-typescript/arc4encoded)

## Type Parameters

• **N** _extends_ [`BitSize`](/reference/type-aliases/bitsize)

• **M** _extends_ `number`

## Constructors

### new UFixedNxM()

> **new UFixedNxM**\<`N`, `M`\>(`v`): [`UFixedNxM`](/reference/algorand-typescript/ufixednxm)\<`N`, `M`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:194](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L194)

Create a new UFixedNxM value

#### Parameters

##### v

`` `${number}.${number}` ``

A string representing the integer and fractional portion of the number

#### Returns

[`UFixedNxM`](/reference/algorand-typescript/ufixednxm)\<`N`, `M`\>

#### Overrides

[`ARC4Encoded`](/reference/algorand-typescript/arc4encoded).[`constructor`](/reference/algorand-typescript/arc4encoded#constructors)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:97](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L97)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/index/type-aliases/bytes)

#### Inherited from

[`ARC4Encoded`](/reference/algorand-typescript/arc4encoded).[`bytes`](/reference/algorand-typescript/arc4encoded#bytes)

---

### native

#### Get Signature

> **get** **native**(): [`NativeForArc4Int`](/reference/-internal-/type-aliases/nativeforarc4int)\<`N`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:201](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L201)

Retrieve the decoded native uint64 or biguint where the returned integer represents the fixed decimal value \* (10 ^ M)

##### Returns

[`NativeForArc4Int`](/reference/-internal-/type-aliases/nativeforarc4int)\<`N`\>
