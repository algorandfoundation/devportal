---
title: bytes
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [index](docs/_md/index/README) / bytes

> **bytes**\<`TLength`\> = `object`

Defined in: [primitives.ts:121](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L121)

A sequence of zero or more bytes (ie. byte[])

## Type Parameters

### TLength

`TLength` _extends_ [`uint64`](uint64) = [`uint64`](uint64)

The static length of this byte array

## Properties

### length

> `readonly` **length**: [`uint64`](uint64)

Defined in: [primitives.ts:125](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L125)

Retrieve the length of the byte sequence

## Methods

### at()

> **at**(`i`): `bytes`

Defined in: [primitives.ts:132](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L132)

Retrieve the byte at the index i

#### Parameters

##### i

[`Uint64Compat`](Uint64Compat)

The index to read. Can be negative to read from the end

#### Returns

`bytes`

The byte found at the index, or an empty bytes value

---

### bitwiseAnd()

#### Call Signature

> **bitwiseAnd**(`other`): `bytes`\<`TLength`\>

Defined in: [primitives.ts:148](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L148)

Perform a bitwise AND operation with this bytes value and another bytes value
of the same length.

##### Parameters

###### other

`bytes`\<`TLength`\>

The other bytes value

##### Returns

`bytes`\<`TLength`\>

The bitwise operation result

#### Call Signature

> **bitwiseAnd**(`other`): `bytes`

Defined in: [primitives.ts:157](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L157)

Perform a bitwise AND operation with this bytes value and another bytes value.

The shorter of the two values will be zero-left extended to the larger length.

##### Parameters

###### other

[`BytesCompat`](BytesCompat)

The other bytes value

##### Returns

`bytes`

The bitwise operation result

---

### bitwiseInvert()

> **bitwiseInvert**(): `bytes`\<`TLength`\>

Defined in: [primitives.ts:199](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L199)

Perform a bitwise INVERT operation with this bytes value

#### Returns

`bytes`\<`TLength`\>

The bitwise operation result

---

### bitwiseOr()

#### Call Signature

> **bitwiseOr**(`other`): `bytes`\<`TLength`\>

Defined in: [primitives.ts:166](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L166)

Perform a bitwise OR operation with this bytes value and another bytes value
of the same length.

##### Parameters

###### other

`bytes`\<`TLength`\>

The other bytes value

##### Returns

`bytes`\<`TLength`\>

The bitwise operation result

#### Call Signature

> **bitwiseOr**(`other`): `bytes`

Defined in: [primitives.ts:175](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L175)

Perform a bitwise OR operation with this bytes value and another bytes value

The shorter of the two values will be zero-left extended to the larger length.

##### Parameters

###### other

[`BytesCompat`](BytesCompat)

The other bytes value

##### Returns

`bytes`

The bitwise operation result

---

### bitwiseXor()

#### Call Signature

> **bitwiseXor**(`other`): `bytes`\<`TLength`\>

Defined in: [primitives.ts:184](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L184)

Perform a bitwise XOR operation with this bytes value and another bytes value
of the same length.

##### Parameters

###### other

`bytes`\<`TLength`\>

The other bytes value

##### Returns

`bytes`\<`TLength`\>

The bitwise operation result

#### Call Signature

> **bitwiseXor**(`other`): `bytes`

Defined in: [primitives.ts:193](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L193)

Perform a bitwise XOR operation with this bytes value and another bytes value.

The shorter of the two values will be zero-left extended to the larger length.

##### Parameters

###### other

[`BytesCompat`](BytesCompat)

The other bytes value

##### Returns

`bytes`

The bitwise operation result

---

### concat()

> **concat**(`other`): `bytes`

Defined in: [primitives.ts:139](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L139)

Concatenate this bytes value with another bytes value

#### Parameters

##### other

[`BytesCompat`](BytesCompat)

The other bytes value

#### Returns

`bytes`

The concatenation result

---

### equals()

> **equals**(`other`): `boolean`

Defined in: [primitives.ts:206](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L206)

Compares this bytes value with another.

#### Parameters

##### other

[`BytesCompat`](BytesCompat)

The other bytes value

#### Returns

`boolean`

True if both values represent the same byte sequence

---

### slice()

#### Call Signature

> **slice**(): `bytes`\<`TLength`\>

Defined in: [primitives.ts:211](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L211)

Returns a copy of this bytes sequence

##### Returns

`bytes`\<`TLength`\>

#### Call Signature

> **slice**(`start`): `bytes`

Defined in: [primitives.ts:216](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L216)

Returns a slice of this bytes sequence from the specified start to the end

##### Parameters

###### start

[`Uint64Compat`](Uint64Compat)

The index to start slicing from. Can be negative to count from the end.

##### Returns

`bytes`

#### Call Signature

> **slice**(`start`, `end`): `bytes`

Defined in: [primitives.ts:222](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L222)

Returns a slice of this bytes sequence from the specified start to the specified end

##### Parameters

###### start

[`Uint64Compat`](Uint64Compat)

The index to start slicing from. Can be negative to count from the end.

###### end

[`Uint64Compat`](Uint64Compat)

The index to end the slice. Can be negative to count from the end.

##### Returns

`bytes`

---

### toFixed()

> **toFixed**\<`TNewLength`\>(`options`): `bytes`\<`TNewLength`\>

Defined in: [primitives.ts:237](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L237)

Change this unbounded bytes instance into a bounded one

#### Type Parameters

##### TNewLength

`TNewLength` _extends_ [`uint64`](uint64)

#### Parameters

##### options

[`ToFixedBytesOptions`](/reference/algorand-typescript/api/index/-internal-/type-aliases/tofixedbytesoptions/)\<`TNewLength`\>

Options for the conversion

#### Returns

`bytes`\<`TNewLength`\>

---

### toString()

> **toString**(): `string`

Defined in: [primitives.ts:231](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L231)

Interpret this byte sequence as a utf-8 string

#### Returns

`string`
