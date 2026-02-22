---
editUrl: false
next: false
prev: false
title: "ABIUfixedType"
---

Defined in: [packages/abi/src/abi-type.ts:225](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L225)

A fixed-point number ABI type of a specific bit size and precision.

## Extends

- [`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/)

## Constructors

### Constructor

> **new ABIUfixedType**(`bitSize`, `precision`): `ABIUfixedType`

Defined in: [packages/abi/src/abi-type.ts:231](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L231)

Creates a new fixed-point type.

#### Parameters

##### bitSize

`number`

The bit size (must be a multiple of 8, between 8 and 512)

##### precision

`number`

The decimal precision (must be between 1 and 160)

#### Returns

`ABIUfixedType`

#### Overrides

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`constructor`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#constructor)

## Properties

### bitSize

> `readonly` **bitSize**: `number`

Defined in: [packages/abi/src/abi-type.ts:232](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L232)

The bit size (must be a multiple of 8, between 8 and 512)

***

### precision

> `readonly` **precision**: `number`

Defined in: [packages/abi/src/abi-type.ts:233](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L233)

The decimal precision (must be between 1 and 160)

## Accessors

### displayName

#### Get Signature

> **get** **displayName**(): `string`

Defined in: [packages/abi/src/abi-type.ts:49](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L49)

Returns a user-friendly display name for this type.

##### Returns

`string`

The display name for this type

#### Inherited from

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`displayName`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#displayname)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [packages/abi/src/abi-type.ts:244](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L244)

Returns the ARC-4 type name string representation.

##### Returns

`string`

The ARC-4 type string

#### Overrides

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`name`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#name)

## Methods

### byteLen()

> **byteLen**(): `number`

Defined in: [packages/abi/src/abi-type.ts:256](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L256)

Gets the byte length of the encoded type for static types.

#### Returns

`number`

The number of bytes needed to encode this type

#### Throws

Error if the type is dynamic

#### Overrides

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`byteLen`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#bytelen)

***

### decode()

> **decode**(`bytes`): [`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)

Defined in: [packages/abi/src/abi-type.ts:273](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L273)

Decodes bytes according to this ABI type.

#### Parameters

##### bytes

`Uint8Array`

The bytes to decode

#### Returns

[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)

The decoded value

#### Overrides

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`decode`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#decode)

***

### encode()

> **encode**(`value`): `Uint8Array`

Defined in: [packages/abi/src/abi-type.ts:260](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L260)

Encodes a value according to this ABI type.

#### Parameters

##### value

[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)

The value to encode

#### Returns

`Uint8Array`

The encoded bytes

#### Overrides

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`encode`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#encode)

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [packages/abi/src/abi-type.ts:248](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L248)

Checks if this ABI type is equal to another.

#### Parameters

##### other

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/)

The other ABI type to compare with

#### Returns

`boolean`

True if the types are equal, false otherwise

#### Overrides

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`equals`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#equals)

***

### isDynamic()

> **isDynamic**(): `boolean`

Defined in: [packages/abi/src/abi-type.ts:252](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L252)

Checks if this ABI type is dynamic (variable-length).

#### Returns

`boolean`

True if the type is dynamic, false otherwise

#### Overrides

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`isDynamic`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#isdynamic)

***

### toString()

> **toString**(): `string`

Defined in: [packages/abi/src/abi-type.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L57)

Returns the ARC-4 type name string representation.

#### Returns

`string`

The ARC-4 type string

#### Inherited from

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`toString`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#tostring)

***

### from()

> `static` **from**(`str`): [`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/)

Defined in: [packages/abi/src/abi-type.ts:100](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L100)

Creates an ABI type from an ARC-4 type string.

#### Parameters

##### str

`string`

The ARC-4 type string (e.g., "uint256", "bool", "(uint8,address)")

#### Returns

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/)

The corresponding ABI type

#### Inherited from

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`from`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#from)
