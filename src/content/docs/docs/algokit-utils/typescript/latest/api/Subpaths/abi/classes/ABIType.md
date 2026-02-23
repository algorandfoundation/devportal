---
editUrl: false
next: false
prev: false
title: 'ABIType'
---

Defined in: [packages/abi/src/abi-type.ts:38](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L38)

Represents an Algorand ABI type for encoding and decoding values as defined in [ARC-0004](https://arc.algorand.foundation/ARCs/arc-0004#types).

This is the abstract base class for all ABI types.

## Extended by

- [`ABIAddressType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abiaddresstype/)
- [`ABIArrayDynamicType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abiarraydynamictype/)
- [`ABIArrayStaticType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abiarraystatictype/)
- [`ABIBoolType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abibooltype/)
- [`ABIByteType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abibytetype/)
- [`ABIStringType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abistringtype/)
- [`ABIStructType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abistructtype/)
- [`ABITupleType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitupletype/)
- [`ABIUfixedType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abiufixedtype/)
- [`ABIUintType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abiuinttype/)

## Constructors

### Constructor

> **new ABIType**(): `ABIType`

#### Returns

`ABIType`

## Accessors

### displayName

#### Get Signature

> **get** **displayName**(): `string`

Defined in: [packages/abi/src/abi-type.ts:49](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L49)

Returns a user-friendly display name for this type.

##### Returns

`string`

The display name for this type

---

### name

#### Get Signature

> **get** `abstract` **name**(): `string`

Defined in: [packages/abi/src/abi-type.ts:43](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L43)

Returns the ARC-4 type name string representation.

##### Returns

`string`

The ARC-4 type string

## Methods

### byteLen()

> `abstract` **byteLen**(): `number`

Defined in: [packages/abi/src/abi-type.ts:79](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L79)

Gets the byte length of the encoded type for static types.

#### Returns

`number`

The number of bytes needed to encode this type

#### Throws

Error if the type is dynamic

---

### decode()

> `abstract` **decode**(`bytes`): [`ABIValue`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abivalue/)

Defined in: [packages/abi/src/abi-type.ts:93](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L93)

Decodes bytes according to this ABI type.

#### Parameters

##### bytes

`Uint8Array`

The bytes to decode

#### Returns

[`ABIValue`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abivalue/)

The decoded value

---

### encode()

> `abstract` **encode**(`value`): `Uint8Array`

Defined in: [packages/abi/src/abi-type.ts:86](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L86)

Encodes a value according to this ABI type.

#### Parameters

##### value

[`ABIValue`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abivalue/)

The value to encode

#### Returns

`Uint8Array`

The encoded bytes

---

### equals()

> `abstract` **equals**(`other`): `boolean`

Defined in: [packages/abi/src/abi-type.ts:66](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L66)

Checks if this ABI type is equal to another.

#### Parameters

##### other

`ABIType`

The other ABI type to compare with

#### Returns

`boolean`

True if the types are equal, false otherwise

---

### isDynamic()

> `abstract` **isDynamic**(): `boolean`

Defined in: [packages/abi/src/abi-type.ts:72](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L72)

Checks if this ABI type is dynamic (variable-length).

#### Returns

`boolean`

True if the type is dynamic, false otherwise

---

### toString()

> **toString**(): `string`

Defined in: [packages/abi/src/abi-type.ts:57](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L57)

Returns the ARC-4 type name string representation.

#### Returns

`string`

The ARC-4 type string

---

### from()

> `static` **from**(`str`): `ABIType`

Defined in: [packages/abi/src/abi-type.ts:100](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L100)

Creates an ABI type from an ARC-4 type string.

#### Parameters

##### str

`string`

The ARC-4 type string (e.g., "uint256", "bool", "(uint8,address)")

#### Returns

`ABIType`

The corresponding ABI type
