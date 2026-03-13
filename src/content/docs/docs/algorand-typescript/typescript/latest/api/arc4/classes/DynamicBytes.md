---
editUrl: false
next: false
prev: false
title: "DynamicBytes"
---

Defined in: [arc4/encoded-types.ts:504](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L504)

A variable length sequence of bytes prefixed with its length expressed as a 2 byte uint

## Extends

- `Arc4ArrayBase`\<[`Byte`](/algorand-typescript/api/arc4/classes/byte/)\>

## Indexable

\[`index`: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)\]: [`Byte`](/algorand-typescript/api/arc4/classes/byte/)

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

`string` | [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

#### Returns

`DynamicBytes`

#### Overrides

`Arc4ArrayBase<Byte>.constructor`

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:102](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L102)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

#### Inherited from

`Arc4ArrayBase.bytes`

***

### length

#### Get Signature

> **get** **length**(): [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [arc4/encoded-types.ts:245](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L245)

Returns the current length of this array

##### Returns

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

#### Inherited from

`Arc4ArrayBase.length`

***

### native

#### Get Signature

> **get** **native**(): [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:519](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L519)

Get the native bytes value (excludes the length prefix)

##### Returns

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<[`Byte`](/algorand-typescript/api/arc4/classes/byte/)\>

Defined in: [arc4/encoded-types.ts:292](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L292)

Returns an iterator for the items in this array

#### Returns

`IterableIterator`\<[`Byte`](/algorand-typescript/api/arc4/classes/byte/)\>

#### Inherited from

`Arc4ArrayBase.[iterator]`

***

### at()

> **at**(`index`): [`Byte`](/algorand-typescript/api/arc4/classes/byte/)

Defined in: [arc4/encoded-types.ts:254](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L254)

Returns the item at the given index.
Negative indexes are taken from the end.

#### Parameters

##### index

[`Uint64Compat`](/algorand-typescript/api/index/type-aliases/uint64compat/)

The index of the item to retrieve

#### Returns

[`Byte`](/algorand-typescript/api/arc4/classes/byte/)

#### Inherited from

`Arc4ArrayBase.at`

***

### concat()

> **concat**(`other`): `DynamicBytes`

Defined in: [arc4/encoded-types.ts:527](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L527)

Returns a dynamic bytes object containing all bytes from _this_ and _other_

#### Parameters

##### other

`Arc4ArrayBase`\<[`Byte`](/algorand-typescript/api/arc4/classes/byte/)\>

Another array of bytes to concat with this one

#### Returns

`DynamicBytes`

***

### entries()

> **entries**(): `IterableIterator`\<readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), [`Byte`](/algorand-typescript/api/arc4/classes/byte/)\]\>

Defined in: [arc4/encoded-types.ts:299](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L299)

Returns an iterator for a tuple of the indexes and items in this array

#### Returns

`IterableIterator`\<readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), [`Byte`](/algorand-typescript/api/arc4/classes/byte/)\]\>

#### Inherited from

`Arc4ArrayBase.entries`

***

### ~~join()~~

> **join**(`separator?`): `string`

Defined in: [arc4/encoded-types.ts:285](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L285)

Creates a string by concatenating all the items in the array delimited by the
specified separator (or ',' by default)

:::caution[Deprecated]
Join is not supported in Algorand TypeScript
:::

#### Parameters

##### separator?

`string`

#### Returns

`string`

#### Inherited from

`Arc4ArrayBase.join`

***

### keys()

> **keys**(): `IterableIterator`\<[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [arc4/encoded-types.ts:306](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L306)

Returns an iterator for the indexes in this array

#### Returns

`IterableIterator`\<[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)\>

#### Inherited from

`Arc4ArrayBase.keys`

***

### ~~slice()~~

#### Call Signature

> **slice**(): [`Byte`](/algorand-typescript/api/arc4/classes/byte/)[]

Defined in: [arc4/encoded-types.ts:261](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L261)

:::caution[Deprecated]
Array slicing is not yet supported in Algorand TypeScript
Create a new Dynamic array with all items from this array
:::

##### Returns

[`Byte`](/algorand-typescript/api/arc4/classes/byte/)[]

##### Inherited from

`Arc4ArrayBase.slice`

#### Call Signature

> **slice**(`end`): [`Byte`](/algorand-typescript/api/arc4/classes/byte/)[]

Defined in: [arc4/encoded-types.ts:267](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L267)

:::caution[Deprecated]
Array slicing is not yet supported in Algorand TypeScript
Create a new DynamicArray with all items up till `end`.
Negative indexes are taken from the end.
:::

##### Parameters

###### end

[`Uint64Compat`](/algorand-typescript/api/index/type-aliases/uint64compat/)

An index in which to stop copying items.

##### Returns

[`Byte`](/algorand-typescript/api/arc4/classes/byte/)[]

##### Inherited from

`Arc4ArrayBase.slice`

#### Call Signature

> **slice**(`start`, `end`): [`Byte`](/algorand-typescript/api/arc4/classes/byte/)[]

Defined in: [arc4/encoded-types.ts:274](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L274)

:::caution[Deprecated]
Array slicing is not yet supported in Algorand TypeScript
Create a new DynamicArray with items from `start`, up until `end`
Negative indexes are taken from the end.
:::

##### Parameters

###### start

[`Uint64Compat`](/algorand-typescript/api/index/type-aliases/uint64compat/)

An index in which to start copying items.

###### end

[`Uint64Compat`](/algorand-typescript/api/index/type-aliases/uint64compat/)

An index in which to stop copying items

##### Returns

[`Byte`](/algorand-typescript/api/arc4/classes/byte/)[]

##### Inherited from

`Arc4ArrayBase.slice`
