---
title: 'UintN'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/reference/readme) / UintN

# Class: UintN\<N\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:128](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L128)

A fixed bit size unsigned int

## Extends

- [`ARC4Encoded`](/reference/algorand-typescript/arc4encoded)

## Extended by

- [`Byte`](/reference/algorand-typescript/byte)
- [`UintN8`](/reference/algorand-typescript/uintn8)
- [`UintN16`](/reference/algorand-typescript/uintn16)
- [`UintN32`](/reference/algorand-typescript/uintn32)
- [`UintN64`](/reference/algorand-typescript/uintn64)
- [`UintN128`](/reference/algorand-typescript/uintn128)
- [`UintN256`](/reference/algorand-typescript/uintn256)

## Type Parameters

• **N** _extends_ [`BitSize`](/reference/type-aliases/bitsize)

## Constructors

### new UintN()

> **new UintN**\<`N`\>(`v`?): [`UintN`](/reference/algorand-typescript/uintn)\<`N`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:136](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L136)

Create a new UintN instance

#### Parameters

##### v?

[`CompatForArc4Int`](/reference/-internal-/type-aliases/compatforarc4int)\<`N`\>

The native uint64 or biguint value to initialize this UintN from

#### Returns

[`UintN`](/reference/algorand-typescript/uintn)\<`N`\>

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

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:143](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L143)

Retrieve the decoded native uint64 or biguint

##### Returns

[`NativeForArc4Int`](/reference/-internal-/type-aliases/nativeforarc4int)\<`N`\>
