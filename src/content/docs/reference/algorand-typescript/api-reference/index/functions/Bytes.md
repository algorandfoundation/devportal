---
title: 'Bytes'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / Bytes

# Function: Bytes()

## Call Signature

> **Bytes**(`value`, ...`replacements`): [`bytes`](/reference/type-aliases/bytes)

Defined in: [packages/algo-ts/src/primitives.ts:192](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L192)

Create a byte array from a string interpolation template and compatible replacements

### Parameters

#### value

[`TemplateStringsArray`](/reference/-internal-/interfaces/templatestringsarray)

#### replacements

...[`BytesCompat`](/reference/type-aliases/bytescompat)[]

### Returns

[`bytes`](/reference/type-aliases/bytes)

## Call Signature

> **Bytes**(`value`): [`bytes`](/reference/type-aliases/bytes)

Defined in: [packages/algo-ts/src/primitives.ts:196](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L196)

Create a byte array from a utf8 string

### Parameters

#### value

`string`

### Returns

[`bytes`](/reference/type-aliases/bytes)

## Call Signature

> **Bytes**(`value`): [`bytes`](/reference/type-aliases/bytes)

Defined in: [packages/algo-ts/src/primitives.ts:200](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L200)

No op, returns the provided byte array.

### Parameters

#### value

[`bytes`](/reference/type-aliases/bytes)

### Returns

[`bytes`](/reference/type-aliases/bytes)

## Call Signature

> **Bytes**(`value`): [`bytes`](/reference/type-aliases/bytes)

Defined in: [packages/algo-ts/src/primitives.ts:204](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L204)

Create a byte array from a biguint value encoded as a variable length big-endian number

### Parameters

#### value

[`biguint`](/reference/type-aliases/biguint)

### Returns

[`bytes`](/reference/type-aliases/bytes)

## Call Signature

> **Bytes**(`value`): [`bytes`](/reference/type-aliases/bytes)

Defined in: [packages/algo-ts/src/primitives.ts:208](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L208)

Create a byte array from a uint64 value encoded as a fixed length 64-bit number

### Parameters

#### value

[`uint64`](/reference/type-aliases/uint64)

### Returns

[`bytes`](/reference/type-aliases/bytes)

## Call Signature

> **Bytes**(`value`): [`bytes`](/reference/type-aliases/bytes)

Defined in: [packages/algo-ts/src/primitives.ts:212](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L212)

Create a byte array from an Iterable<uint64> where each item is interpreted as a single byte and must be between 0 and 255 inclusively

### Parameters

#### value

[`Iterable`](/reference/-internal-/interfaces/iterable)\<[`uint64`](/reference/type-aliases/uint64)\>

### Returns

[`bytes`](/reference/type-aliases/bytes)

## Call Signature

> **Bytes**(): [`bytes`](/reference/type-aliases/bytes)

Defined in: [packages/algo-ts/src/primitives.ts:216](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L216)

Create an empty byte array

### Returns

[`bytes`](/reference/type-aliases/bytes)
