---
editUrl: false
next: false
prev: false
title: "ABIStructType"
---

Defined in: [packages/abi/src/abi-type.ts:730](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L730)

A struct ABI type with named fields.

## Extends

- [`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/)

## Constructors

### Constructor

> **new ABIStructType**(`structName`, `structFields`): `ABIStructType`

Defined in: [packages/abi/src/abi-type.ts:736](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L736)

Creates a new struct type.

#### Parameters

##### structName

`string`

The name of the struct

##### structFields

[`ABIStructField`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abistructfield/)[]

The fields of the struct

#### Returns

`ABIStructType`

#### Overrides

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`constructor`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#constructor)

## Properties

### structFields

> `readonly` **structFields**: [`ABIStructField`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abistructfield/)[]

Defined in: [packages/abi/src/abi-type.ts:738](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L738)

The fields of the struct

***

### structName

> `readonly` **structName**: `string`

Defined in: [packages/abi/src/abi-type.ts:737](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L737)

The name of the struct

## Accessors

### displayName

#### Get Signature

> **get** **displayName**(): `string`

Defined in: [packages/abi/src/abi-type.ts:748](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L748)

Returns a user-friendly display name for this type.

##### Returns

`string`

The display name for this type

#### Overrides

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`displayName`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#displayname)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [packages/abi/src/abi-type.ts:743](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L743)

Returns the ARC-4 type name string representation.

##### Returns

`string`

The ARC-4 type string

#### Overrides

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`name`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#name)

## Methods

### byteLen()

> **byteLen**(): `number`

Defined in: [packages/abi/src/abi-type.ts:774](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L774)

Gets the byte length of the encoded type for static types.

#### Returns

`number`

The number of bytes needed to encode this type

#### Throws

Error if the type is dynamic

#### Overrides

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`byteLen`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#bytelen)

***

### decode()

> **decode**(`bytes`): `ABIStructValue`

Defined in: [packages/abi/src/abi-type.ts:849](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L849)

Decodes bytes according to this ABI type.

#### Parameters

##### bytes

`Uint8Array`

The bytes to decode

#### Returns

`ABIStructValue`

The decoded value

#### Overrides

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`decode`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#decode)

***

### encode()

> **encode**(`value`): `Uint8Array`

Defined in: [packages/abi/src/abi-type.ts:835](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L835)

Encodes a value according to this ABI type.

#### Parameters

##### value

[`ABIValue`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abivalue/)

The value to encode

#### Returns

`Uint8Array`

The encoded bytes

#### Overrides

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`encode`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#encode)

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [packages/abi/src/abi-type.ts:752](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L752)

Checks if this ABI type is equal to another.

#### Parameters

##### other

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/)

The other ABI type to compare with

#### Returns

`boolean`

True if the types are equal, false otherwise

#### Overrides

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`equals`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#equals)

***

### isDynamic()

> **isDynamic**(): `boolean`

Defined in: [packages/abi/src/abi-type.ts:769](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L769)

Checks if this ABI type is dynamic (variable-length).

#### Returns

`boolean`

True if the type is dynamic, false otherwise

#### Overrides

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`isDynamic`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#isdynamic)

***

### toABITupleType()

> **toABITupleType**(): [`ABITupleType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitupletype/)

Defined in: [packages/abi/src/abi-type.ts:783](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L783)

Converts this struct type to an equivalent tuple type.

#### Returns

[`ABITupleType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitupletype/)

The equivalent tuple type

***

### toString()

> **toString**(): `string`

Defined in: [packages/abi/src/abi-type.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L57)

Returns the ARC-4 type name string representation.

#### Returns

`string`

The ARC-4 type string

#### Inherited from

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`toString`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#tostring)

***

### from()

> `static` **from**(`str`): [`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/)

Defined in: [packages/abi/src/abi-type.ts:100](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L100)

Creates an ABI type from an ARC-4 type string.

#### Parameters

##### str

`string`

The ARC-4 type string (e.g., "uint256", "bool", "(uint8,address)")

#### Returns

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/)

The corresponding ABI type

#### Inherited from

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`from`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#from)

***

### fromStruct()

> `static` **fromStruct**(`structName`, `structs`): `ABIStructType`

Defined in: [packages/abi/src/abi-type.ts:804](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L804)

Creates an ABIStructType from struct name and struct definitions.

#### Parameters

##### structName

`string`

The name of the struct

##### structs

`Record`\<`string`, [`StructField`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/structfield/)[]\>

A record of struct definitions

#### Returns

`ABIStructType`

The struct type
