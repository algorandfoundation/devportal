---
title: 'UintN32'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/reference/readme) / UintN32

# Class: UintN32

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:166](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L166)

An alias for UintN<32>

## Extends

- [`UintN`](/reference/algorand-typescript/uintn)\<`32`\>

## Constructors

### new UintN32()

> **new UintN32**(`v`?): [`UintN32`](/reference/algorand-typescript/uintn32)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:136](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L136)

Create a new UintN instance

#### Parameters

##### v?

[`Uint64Compat`](/index/type-aliases/uint64compat)

The native uint64 or biguint value to initialize this UintN from

#### Returns

[`UintN32`](/reference/algorand-typescript/uintn32)

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
