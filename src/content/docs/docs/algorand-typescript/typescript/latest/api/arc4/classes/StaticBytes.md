---
title: StaticBytes
type: class
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/readme/) / StaticBytes

Defined in: [arc4/encoded-types.ts:535](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L535)

A fixed length sequence of bytes

## Extends

- [`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/)\<[`Byte`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/byte/)\>

## Type Parameters

### TLength

`TLength` _extends_ [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) = `0`

## Indexable

\[`index`: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\]: [`Byte`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/byte/)

Get or set the item at the specified index.
Negative indexes are not supported

## Constructors

### Constructor

> **new StaticBytes**\<`TLength`\>(`value`): `StaticBytes`\<`TLength`\>

Defined in: [arc4/encoded-types.ts:543](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L543)

Create a new StaticBytes instance from native fixed sized bytes

#### Parameters

##### value

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`TLength`\>

The bytes

#### Returns

`StaticBytes`\<`TLength`\>

#### Overrides

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`constructor`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#constructor)

### Constructor

> **new StaticBytes**\<`TLength`\>(`value`): `StaticBytes`\<`TLength`\>

Defined in: [arc4/encoded-types.ts:548](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L548)

Create a new StaticBytes instance from native bytes

#### Parameters

##### value

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

The bytes

#### Returns

`StaticBytes`\<`TLength`\>

#### Overrides

`Arc4ArrayBase<Byte>.constructor`

### Constructor

> **new StaticBytes**\<`TLength`\>(`value`): `StaticBytes`\<`TLength`\>

Defined in: [arc4/encoded-types.ts:553](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L553)

Create a new StaticBytes instance from a utf8 string

#### Parameters

##### value

`string`

A string

#### Returns

`StaticBytes`\<`TLength`\>

#### Overrides

`Arc4ArrayBase<Byte>.constructor`

### Constructor

> **new StaticBytes**\<`TLength`\>(): `StaticBytes`\<`TLength`\>

Defined in: [arc4/encoded-types.ts:557](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L557)

Create a new StaticBytes instance of length 0

#### Returns

`StaticBytes`\<`TLength`\>

#### Overrides

`Arc4ArrayBase<Byte>.constructor`

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:102](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L102)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`bytes`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#bytes)

---

### length

#### Get Signature

> **get** **length**(): [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [arc4/encoded-types.ts:580](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L580)

Returns the statically declared length of this byte array

##### Returns

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

#### Overrides

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`length`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#length)

---

### native

#### Get Signature

> **get** **native**(): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`TLength`\>

Defined in: [arc4/encoded-types.ts:565](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L565)

Get the native bytes value

##### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`TLength`\>

## Methods

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<[`Byte`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/byte/)\>

Defined in: [arc4/encoded-types.ts:292](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L292)

Returns an iterator for the items in this array

#### Returns

`IterableIterator`\<[`Byte`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/byte/)\>

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`[iterator]`](../-internal-/classes/Arc4ArrayBase.md#iterator)

---

### at()

> **at**(`index`): [`Byte`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/byte/)

Defined in: [arc4/encoded-types.ts:254](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L254)

Returns the item at the given index.
Negative indexes are taken from the end.

#### Parameters

##### index

[`Uint64Compat`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64compat/)

The index of the item to retrieve

#### Returns

[`Byte`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/byte/)

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`at`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#at)

---

### concat()

> **concat**(`other`): [`DynamicBytes`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/dynamicbytes/)

Defined in: [arc4/encoded-types.ts:573](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L573)

Returns a dynamic bytes object containing all bytes from _this_ and _other_

#### Parameters

##### other

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/)\<[`Byte`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/byte/)\>

Another array of bytes to concat with this one

#### Returns

[`DynamicBytes`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/dynamicbytes/)

---

### entries()

> **entries**(): `IterableIterator`\<readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), [`Byte`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/byte/)\]\>

Defined in: [arc4/encoded-types.ts:299](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L299)

Returns an iterator for a tuple of the indexes and items in this array

#### Returns

`IterableIterator`\<readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), [`Byte`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/byte/)\]\>

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`entries`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#entries)

---

### ~~join()~~

> **join**(`separator?`): `string`

Defined in: [arc4/encoded-types.ts:285](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L285)

Creates a string by concatenating all the items in the array delimited by the
specified separator (or ',' by default)

#### Parameters

##### separator?

`string`

#### Returns

`string`

#### Deprecated

Join is not supported in Algorand TypeScript

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`join`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#join)

---

### keys()

> **keys**(): `IterableIterator`\<[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\>

Defined in: [arc4/encoded-types.ts:306](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L306)

Returns an iterator for the indexes in this array

#### Returns

`IterableIterator`\<[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\>

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`keys`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#keys)

---

### ~~slice()~~

#### Call Signature

> **slice**(): [`Byte`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/byte/)[]

Defined in: [arc4/encoded-types.ts:261](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L261)

##### Returns

[`Byte`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/byte/)[]

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new Dynamic array with all items from this array

##### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`slice`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#slice)

#### Call Signature

> **slice**(`end`): [`Byte`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/byte/)[]

Defined in: [arc4/encoded-types.ts:267](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L267)

##### Parameters

###### end

[`Uint64Compat`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64compat/)

An index in which to stop copying items.

##### Returns

[`Byte`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/byte/)[]

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new DynamicArray with all items up till `end`.
Negative indexes are taken from the end.

##### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`slice`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#slice)

#### Call Signature

> **slice**(`start`, `end`): [`Byte`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/byte/)[]

Defined in: [arc4/encoded-types.ts:274](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L274)

##### Parameters

###### start

[`Uint64Compat`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64compat/)

An index in which to start copying items.

###### end

[`Uint64Compat`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64compat/)

An index in which to stop copying items

##### Returns

[`Byte`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/byte/)[]

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new DynamicArray with items from `start`, up until `end`
Negative indexes are taken from the end.

##### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`slice`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#slice)
