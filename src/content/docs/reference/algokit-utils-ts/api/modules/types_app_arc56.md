---
title: types/app-arc56
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / types/app-arc56

## Table of contents

### Classes

- [Arc56Method](/reference/algokit-utils-ts/api/classes/types_app_arc56arc56method/)

### Interfaces

- [Arc56Contract](/reference/algokit-utils-ts/api/interfaces/types_app_arc56arc56contract/)
- [Event](/reference/algokit-utils-ts/api/interfaces/types_app_arc56event/)
- [Method](/reference/algokit-utils-ts/api/interfaces/types_app_arc56method/)
- [ProgramSourceInfo](/reference/algokit-utils-ts/api/interfaces/types_app_arc56programsourceinfo/)
- [StorageKey](/reference/algokit-utils-ts/api/interfaces/types_app_arc56storagekey/)
- [StorageMap](/reference/algokit-utils-ts/api/interfaces/types_app_arc56storagemap/)
- [StructField](/reference/algokit-utils-ts/api/interfaces/types_app_arc56structfield/)

### Type Aliases

- [ABIStruct](#abistruct)
- [ABIType](#abitype)
- [AVMBytes](#avmbytes)
- [AVMString](#avmstring)
- [AVMType](#avmtype)
- [AVMUint64](#avmuint64)
- [Arc56MethodArg](#arc56methodarg)
- [Arc56MethodReturnType](#arc56methodreturntype)
- [StructName](#structname)

### Functions

- [getABIDecodedValue](#getabidecodedvalue)
- [getABIEncodedValue](#getabiencodedvalue)
- [getABIStructFromABITuple](#getabistructfromabituple)
- [getABITupleFromABIStruct](#getabituplefromabistruct)
- [getABITupleTypeFromABIStructDefinition](#getabitupletypefromabistructdefinition)
- [getArc56Method](#getarc56method)
- [getArc56ReturnValue](#getarc56returnvalue)

## Type Aliases

### ABIStruct

Ƭ **ABIStruct**: `Object`

Decoded ARC-56 struct as a struct rather than a tuple.

#### Index signature

▪ [key: `string`]: [`ABIStruct`](#abistruct) \| `algosdk.ABIValue`

#### Defined in

[src/types/app-arc56.ts:122](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L122)

---

### ABIType

Ƭ **ABIType**: `string`

An ABI-encoded type

#### Defined in

[src/types/app-arc56.ts:453](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L453)

---

### AVMBytes

Ƭ **AVMBytes**: `"AVMBytes"`

Raw byteslice without the length prefixed that is specified in ARC-4

#### Defined in

[src/types/app-arc56.ts:459](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L459)

---

### AVMString

Ƭ **AVMString**: `"AVMString"`

A utf-8 string without the length prefix that is specified in ARC-4

#### Defined in

[src/types/app-arc56.ts:462](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L462)

---

### AVMType

Ƭ **AVMType**: [`AVMBytes`](#avmbytes) \| [`AVMString`](#avmstring) \| [`AVMUint64`](#avmuint64)

A native AVM type

#### Defined in

[src/types/app-arc56.ts:468](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L468)

---

### AVMUint64

Ƭ **AVMUint64**: `"AVMUint64"`

A 64-bit unsigned integer

#### Defined in

[src/types/app-arc56.ts:465](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L465)

---

### Arc56MethodArg

Ƭ **Arc56MethodArg**: [`Expand`](#expand)\<`Omit`\<[`Method`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56method/)[`"args"`][`number`], `"type"`\> & \{ `type`: `algosdk.ABIArgumentType` }\>

Type to describe an argument within an `Arc56Method`.

#### Defined in

[src/types/app-arc56.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L7)

---

### Arc56MethodReturnType

Ƭ **Arc56MethodReturnType**: [`Expand`](#expand)\<`Omit`\<[`Method`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56method/)[``"returns"``], `"type"`\> & \{ `type`: `algosdk.ABIReturnType` }\>

Type to describe a return type within an `Arc56Method`.

#### Defined in

[src/types/app-arc56.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L14)

---

### StructName

Ƭ **StructName**: `string`

The name of a defined struct

#### Defined in

[src/types/app-arc56.ts:456](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L456)

## Functions

### getABIDecodedValue

▸ **getABIDecodedValue**(`value`, `type`, `structs`): `algosdk.ABIValue` \| [`ABIStruct`](#abistruct)

Returns the decoded ABI value (or struct for a struct type)
for the given raw Algorand value given an ARC-56 type and defined ARC-56 structs.

#### Parameters

| Name      | Type                                                                                                            | Description                                                  |
| :-------- | :-------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| `value`   | `number` \| `bigint` \| `Uint8Array`                                                                            | The raw Algorand value (bytes or uint64)                     |
| `type`    | `string`                                                                                                        | The ARC-56 type - either an ABI Type string or a struct name |
| `structs` | `Record`\<`string`, [`StructField`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56structfield/)[]\> | The defined ARC-56 structs                                   |

#### Returns

`algosdk.ABIValue` \| [`ABIStruct`](#abistruct)

The decoded ABI value or struct

#### Defined in

[src/types/app-arc56.ts:134](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L134)

---

### getABIEncodedValue

▸ **getABIEncodedValue**(`value`, `type`, `structs`): `Uint8Array`

Returns the ABI-encoded value for the given value.

#### Parameters

| Name      | Type                                                                                                            | Description                                                                                                       |
| :-------- | :-------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| `value`   | `ABIValue` \| [`ABIStruct`](#abistruct)                                                                         | The value to encode either already in encoded binary form (`Uint8Array`), a decoded ABI value or an ARC-56 struct |
| `type`    | `string`                                                                                                        | The ARC-56 type - either an ABI Type string or a struct name                                                      |
| `structs` | `Record`\<`string`, [`StructField`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56structfield/)[]\> | The defined ARC-56 structs                                                                                        |

#### Returns

`Uint8Array`

The binary ABI-encoded value

#### Defined in

[src/types/app-arc56.ts:159](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L159)

---

### getABIStructFromABITuple

▸ **getABIStructFromABITuple**\<`TReturn`\>(`decodedABITuple`, `structFields`, `structs`): `TReturn`

Converts a decoded ABI tuple as a struct.

#### Type parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `TReturn` | extends [`ABIStruct`](#abistruct) = `Record`\<`string`, `any`\> |

#### Parameters

| Name              | Type                                                                                                            | Description                               |
| :---------------- | :-------------------------------------------------------------------------------------------------------------- | :---------------------------------------- |
| `decodedABITuple` | `ABIValue`[]                                                                                                    | The decoded ABI tuple value               |
| `structFields`    | [`StructField`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56structfield/)[]                       | The struct fields from an ARC-56 app spec |
| `structs`         | `Record`\<`string`, [`StructField`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56structfield/)[]\> | -                                         |

#### Returns

`TReturn`

The struct as a Record<string, any>

#### Defined in

[src/types/app-arc56.ts:71](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L71)

---

### getABITupleFromABIStruct

▸ **getABITupleFromABIStruct**(`struct`, `structFields`, `structs`): `algosdk.ABIValue`[]

Converts an ARC-56 struct as an ABI tuple.

#### Parameters

| Name           | Type                                                                                                            | Description                               |
| :------------- | :-------------------------------------------------------------------------------------------------------------- | :---------------------------------------- |
| `struct`       | [`ABIStruct`](#abistruct)                                                                                       | The struct to convert                     |
| `structFields` | [`StructField`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56structfield/)[]                       | The struct fields from an ARC-56 app spec |
| `structs`      | `Record`\<`string`, [`StructField`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56structfield/)[]\> | -                                         |

#### Returns

`algosdk.ABIValue`[]

The struct as a decoded ABI tuple

#### Defined in

[src/types/app-arc56.ts:108](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L108)

---

### getABITupleTypeFromABIStructDefinition

▸ **getABITupleTypeFromABIStructDefinition**(`struct`, `structs`): `algosdk.ABITupleType`

Returns the `ABITupleType` for the given ARC-56 struct definition

#### Parameters

| Name      | Type                                                                                                            | Description                  |
| :-------- | :-------------------------------------------------------------------------------------------------------------- | :--------------------------- |
| `struct`  | [`StructField`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56structfield/)[]                       | The ARC-56 struct definition |
| `structs` | `Record`\<`string`, [`StructField`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56structfield/)[]\> | -                            |

#### Returns

`algosdk.ABITupleType`

The `ABITupleType`

#### Defined in

[src/types/app-arc56.ts:49](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L49)

---

### getArc56Method

▸ **getArc56Method**(`methodNameOrSignature`, `appSpec`): [`Arc56Method`](/reference/algokit-utils-ts/api/classes/types_app_arc56arc56method/)

Returns the ARC-56 ABI method object for a given method name or signature and ARC-56 app spec.

#### Parameters

| Name                    | Type                                                                                        | Description                                                                                                                      |
| :---------------------- | :------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------- |
| `methodNameOrSignature` | `string`                                                                                    | The method name or method signature to call if an ABI call is being emitted. e.g. `my_method` or `my_method(unit64,string)bytes` |
| `appSpec`               | [`Arc56Contract`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56arc56contract/) | The app spec for the app                                                                                                         |

#### Returns

[`Arc56Method`](/reference/algokit-utils-ts/api/classes/types_app_arc56arc56method/)

The `Arc56Method`

#### Defined in

[src/types/app-arc56.ts:189](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L189)

---

### getArc56ReturnValue

▸ **getArc56ReturnValue**\<`TReturn`\>(`returnValue`, `method`, `structs`): `TReturn`

Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type

#### Type parameters

| Name      | Type                                                           |
| :-------- | :------------------------------------------------------------- |
| `TReturn` | extends `undefined` \| `ABIValue` \| [`ABIStruct`](#abistruct) |

#### Parameters

| Name          | Type                                                                                                                                                                  | Description                         |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------- |
| `returnValue` | `undefined` \| [`ABIReturn`](#abireturn)                                                                                                                              | The smart contract response         |
| `method`      | [`Method`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56method/) \| [`Arc56Method`](/reference/algokit-utils-ts/api/classes/types_app_arc56arc56method/) | The method that was called          |
| `structs`     | `Record`\<`string`, [`StructField`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56structfield/)[]\>                                                       | The struct fields from the app spec |

#### Returns

`TReturn`

The smart contract response with an updated return value

#### Defined in

[src/types/app-arc56.ts:220](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L220)
