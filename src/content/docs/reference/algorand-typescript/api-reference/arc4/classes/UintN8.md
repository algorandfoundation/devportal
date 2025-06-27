---
title: 'UintN8'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/reference/readme) / UintN8

# Class: UintN8

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:156](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L156)

An alias for UintN<8>

## Extends

- [`UintN`](/reference/algorand-typescript/uintn)\<`8`\>

## Constructors

### new UintN8()

> **new UintN8**(`v`?): [`UintN8`](/reference/algorand-typescript/uintn8)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:136](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L136)

Create a new UintN instance

#### Parameters

##### v?

[`Uint64Compat`](/index/type-aliases/uint64compat)

The native uint64 or biguint value to initialize this UintN from

#### Returns

[`UintN8`](/reference/algorand-typescript/uintn8)

#### Inherited from

[`UintN`](/reference/algorand-typescript/uintn).[`constructor`](/reference/algorand-typescript/uintn#constructors)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:97](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L97)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/index/type-aliases/bytes)

#### Inherited from

[`UintN`](/reference/algorand-typescript/uintn).[`bytes`](/reference/algorand-typescript/uintn#bytes)

---

### native

#### Get Signature

> **get** **native**(): [`NativeForArc4Int`](/reference/-internal-/type-aliases/nativeforarc4int)\<`N`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:143](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L143)

Retrieve the decoded native uint64 or biguint

##### Returns

[`NativeForArc4Int`](/reference/-internal-/type-aliases/nativeforarc4int)\<`N`\>

#### Inherited from

[`UintN`](/reference/algorand-typescript/uintn).[`native`](/reference/algorand-typescript/uintn#native)
