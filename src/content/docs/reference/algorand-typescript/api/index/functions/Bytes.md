---
title: Bytes
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [index](docs/_md/index/README) / Bytes

## Call Signature

> **Bytes**(`value`, ...`replacements`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [primitives.ts:245](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L245)

Create a byte array from a string interpolation template and compatible replacements

### Parameters

#### value

`TemplateStringsArray`

#### replacements

...[`BytesCompat`](/reference/algorand-typescript/api/index/type-aliases/bytescompat/)[]

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

## Call Signature

> **Bytes**(`value`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [primitives.ts:249](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L249)

Create a byte array from a utf8 string

### Parameters

#### value

`string`

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

## Call Signature

> **Bytes**\<`TLength`\>(`value`, `options`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

Defined in: [primitives.ts:253](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L253)

Create a byte array from a utf8 string

### Type Parameters

#### TLength

`TLength` _extends_ [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### Parameters

#### value

`string`

#### options

[`ToFixedBytesOptions`](/reference/algorand-typescript/api/index/-internal-/type-aliases/tofixedbytesoptions/)\<`TLength`\>

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

## Call Signature

> **Bytes**(`value`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [primitives.ts:257](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L257)

No op, returns the provided byte array.

### Parameters

#### value

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

## Call Signature

> **Bytes**\<`TLength`\>(`value`, `options`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

Defined in: [primitives.ts:261](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L261)

No op, returns the provided byte array.

### Type Parameters

#### TLength

`TLength` _extends_ [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### Parameters

#### value

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### options

[`ToFixedBytesOptions`](/reference/algorand-typescript/api/index/-internal-/type-aliases/tofixedbytesoptions/)\<`TLength`\>

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

## Call Signature

> **Bytes**(`value`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [primitives.ts:265](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L265)

Create a byte array from a biguint value encoded as a variable length big-endian number

### Parameters

#### value

[`biguint`](/reference/algorand-typescript/api/index/type-aliases/biguint/)

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

## Call Signature

> **Bytes**\<`TLength`\>(`value`, `options`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

Defined in: [primitives.ts:269](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L269)

Create a byte array from a biguint value encoded as a variable length big-endian number

### Type Parameters

#### TLength

`TLength` _extends_ [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### Parameters

#### value

[`biguint`](/reference/algorand-typescript/api/index/type-aliases/biguint/)

#### options

[`ToFixedBytesOptions`](/reference/algorand-typescript/api/index/-internal-/type-aliases/tofixedbytesoptions/)\<`TLength`\>

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

## Call Signature

> **Bytes**(`value`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [primitives.ts:273](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L273)

Create a byte array from a uint64 value encoded as a a variable length 64-bit number

### Parameters

#### value

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

## Call Signature

> **Bytes**\<`TLength`\>(`value`, `options`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

Defined in: [primitives.ts:277](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L277)

Create a byte array from a uint64 value encoded as a a variable length 64-bit number

### Type Parameters

#### TLength

`TLength` _extends_ [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) = `8`

### Parameters

#### value

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### options

[`ToFixedBytesOptions`](/reference/algorand-typescript/api/index/-internal-/type-aliases/tofixedbytesoptions/)\<`TLength`\>

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

## Call Signature

> **Bytes**(`value`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [primitives.ts:281](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L281)

Create a byte array from an Iterable<uint64> where each item is interpreted as a single byte and must be between 0 and 255 inclusively

### Parameters

#### value

`Iterable`\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

## Call Signature

> **Bytes**\<`TLength`\>(`value`, `options`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

Defined in: [primitives.ts:285](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L285)

Create a byte array from an Iterable<uint64> where each item is interpreted as a single byte and must be between 0 and 255 inclusively

### Type Parameters

#### TLength

`TLength` _extends_ [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### Parameters

#### value

`Iterable`\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

#### options

[`ToFixedBytesOptions`](/reference/algorand-typescript/api/index/-internal-/type-aliases/tofixedbytesoptions/)\<`TLength`\>

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

## Call Signature

> **Bytes**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [primitives.ts:289](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L289)

Create an empty byte array

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

## Call Signature

> **Bytes**\<`TLength`\>(`options`): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>

Defined in: [primitives.ts:293](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L293)

Create an empty byte array

### Type Parameters

#### TLength

`TLength` _extends_ [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) = [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

### Parameters

#### options

[`ToFixedBytesOptions`](/reference/algorand-typescript/api/index/-internal-/type-aliases/tofixedbytesoptions/)\<`TLength`\>

### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`TLength`\>
