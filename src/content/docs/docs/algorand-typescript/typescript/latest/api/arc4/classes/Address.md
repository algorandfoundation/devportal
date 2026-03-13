---
editUrl: false
next: false
prev: false
title: "Address"
---

Defined in: [arc4/encoded-types.ts:451](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L451)

A 32 byte Algorand Address

## Extends

- `Arc4ArrayBase`\<[`Byte`](/algorand-typescript/api/arc4/classes/byte/)\>

## Indexable

\[`index`: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)\]: [`Byte`](/algorand-typescript/api/arc4/classes/byte/)

Get or set the item at the specified index.
Negative indexes are not supported

## Constructors

### Constructor

> **new Address**(`value?`): `Address`

Defined in: [arc4/encoded-types.ts:459](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L459)

Create a new Address instance

#### Parameters

##### value?

An Account, base 32 address string, or the address bytes

`string` | [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) | [`Account`](/algorand-typescript/api/index/type-aliases/account/)

#### Returns

`Address`

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

> **get** **native**(): [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [arc4/encoded-types.ts:466](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L466)

Returns an Account instance for this Address

##### Returns

[`Account`](/algorand-typescript/api/index/type-aliases/account/)

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
