---
title: DynamicBytes
type: class
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](/reference/algorand-typescript/api/arc4/readme/) / DynamicBytes

Defined in: [arc4/encoded-types.ts:504](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L504)

A variable length sequence of bytes prefixed with its length expressed as a 2 byte uint

## Extends

- [`Arc4ArrayBase`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/)\<[`Byte`](Byte)\>

## Indexable

\[`index`: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\]: [`Byte`](Byte)

Get or set the item at the specified index.
Negative indexes are not supported

## Constructors

### Constructor

> **new DynamicBytes**(`value?`): `DynamicBytes`

Defined in: [arc4/encoded-types.ts:512](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L512)

Create a new DynamicBytes instance

#### Parameters

##### value?

The bytes or utf8 interpreted string to initialize this type

`string` | [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`DynamicBytes`

#### Overrides

[`Arc4ArrayBase`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/).[`constructor`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/#constructor)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:102](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L102)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Inherited from

[`Arc4ArrayBase`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/).[`bytes`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/#bytes)

---

### length

#### Get Signature

> **get** **length**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [arc4/encoded-types.ts:245](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L245)

Returns the current length of this array

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Inherited from

[`Arc4ArrayBase`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/).[`length`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/#length)

---

### native

#### Get Signature

> **get** **native**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:519](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L519)

Get the native bytes value (excludes the length prefix)

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<[`Byte`](Byte)\>

Defined in: [arc4/encoded-types.ts:292](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L292)

Returns an iterator for the items in this array

#### Returns

`IterableIterator`\<[`Byte`](Byte)\>

#### Inherited from

[`Arc4ArrayBase`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/).[`[iterator]`](../-internal-/classes/Arc4ArrayBase.md#iterator)

---

### at()

> **at**(`index`): [`Byte`](Byte)

Defined in: [arc4/encoded-types.ts:254](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L254)

Returns the item at the given index.
Negative indexes are taken from the end.

#### Parameters

##### index

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

The index of the item to retrieve

#### Returns

[`Byte`](Byte)

#### Inherited from

[`Arc4ArrayBase`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/).[`at`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/#at)

---

### concat()

> **concat**(`other`): `DynamicBytes`

Defined in: [arc4/encoded-types.ts:527](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L527)

Returns a dynamic bytes object containing all bytes from _this_ and _other_

#### Parameters

##### other

[`Arc4ArrayBase`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/)\<[`Byte`](Byte)\>

Another array of bytes to concat with this one

#### Returns

`DynamicBytes`

---

### entries()

> **entries**(): `IterableIterator`\<readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), [`Byte`](Byte)\]\>

Defined in: [arc4/encoded-types.ts:299](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L299)

Returns an iterator for a tuple of the indexes and items in this array

#### Returns

`IterableIterator`\<readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), [`Byte`](Byte)\]\>

#### Inherited from

[`Arc4ArrayBase`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/).[`entries`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/#entries)

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

[`Arc4ArrayBase`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/).[`join`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/#join)

---

### keys()

> **keys**(): `IterableIterator`\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [arc4/encoded-types.ts:306](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L306)

Returns an iterator for the indexes in this array

#### Returns

`IterableIterator`\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

#### Inherited from

[`Arc4ArrayBase`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/).[`keys`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/#keys)

---

### ~~slice()~~

#### Call Signature

> **slice**(): [`Byte`](Byte)[]

Defined in: [arc4/encoded-types.ts:261](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L261)

##### Returns

[`Byte`](Byte)[]

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new Dynamic array with all items from this array

##### Inherited from

[`Arc4ArrayBase`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/).[`slice`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/#slice)

#### Call Signature

> **slice**(`end`): [`Byte`](Byte)[]

Defined in: [arc4/encoded-types.ts:267](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L267)

##### Parameters

###### end

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

An index in which to stop copying items.

##### Returns

[`Byte`](Byte)[]

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new DynamicArray with all items up till `end`.
Negative indexes are taken from the end.

##### Inherited from

[`Arc4ArrayBase`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/).[`slice`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/#slice)

#### Call Signature

> **slice**(`start`, `end`): [`Byte`](Byte)[]

Defined in: [arc4/encoded-types.ts:274](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L274)

##### Parameters

###### start

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

An index in which to start copying items.

###### end

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

An index in which to stop copying items

##### Returns

[`Byte`](Byte)[]

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new DynamicArray with items from `start`, up until `end`
Negative indexes are taken from the end.

##### Inherited from

[`Arc4ArrayBase`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/).[`slice`](/reference/algorand-typescript/api/arc4/-internal-/classes/arc4arraybase/#slice)
