---
title: "algokit_utils.applications.abi"
---

<div class="api-ref">

## Attributes

| [`ABIValue`](#type-abivalue--bool--int--str--bytes--bytearray--listabivalue--tupleabivalue--dictstr-abivalue)                         |    |
|--------------------------------------------------------------------------------|----|
| [`ABIStruct`](#type-abistruct--dictstr-listdictstr-abivalue)                       |    |
| [`Arc56ReturnValueType`](#type-arc56returnvaluetype--abivalue--abistruct--none) |    |
| [`ABIType`](#type-abitype--algosdkabiabitype)                           |    |
| [`ABIArgumentType`](#type-abiargumenttype--algosdkabiabitype--algosdkabiabitransactiontype--algosdkabiabireferencetype)           |    |

## Classes

| [`ABIReturn`](#class-abireturn)     | Represents the return value from an ABI method call.   |
|--------------------------------------------------------------|--------------------------------------------------------|
| [`BoxABIValue`](#class-boxabivalue) | Represents an ABI value stored in a box.               |

## Functions

| [`get_arc56_value`](#get_arc56_valueabi_return-abireturn-method-method--algosdkabimethodmethod-structs-dictstr-liststructfield--arc56returnvaluetype)(→ Arc56ReturnValueType)                                          | Gets the ARC-56 formatted return value from an ABI return.   |
|---------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`get_abi_encoded_value`](#get_abi_encoded_valuevalue-any-type_str-str-structs-dictstr-liststructfield--bytes)(→ bytes)                                             | Encodes a value according to its ABI type.                   |
| [`get_abi_decoded_value`](#get_abi_decoded_valuevalue-bytes--int--str-type_str-str--abiargumenttype-structs-dictstr-liststructfield--abivalue)(→ ABIValue)                                          | Decodes a value according to its ABI type.                   |
| [`get_abi_tuple_from_abi_struct`](#get_abi_tuple_from_abi_structstruct_value-dictstr-any-struct_fields-liststructfield-structs-dictstr-liststructfield--listany)(→ list[Any])                         | Converts an ABI struct to a tuple representation.            |
| [`get_abi_tuple_type_from_abi_struct_definition`](#get_abi_tuple_type_from_abi_struct_definitionstruct_def-liststructfield-structs-dictstr-liststructfield--algosdkabitupletype)(...) | Creates a TupleType from a struct definition.                |
| [`get_abi_struct_from_abi_tuple`](#get_abi_struct_from_abi_tupledecoded_tuple-any-struct_fields-liststructfield-structs-dictstr-liststructfield--dictstr-any)(→ dict[str, Any])                    | Converts a decoded tuple to an ABI struct.                   |

## Module Contents

### *type* ABIValue *= bool | int | str | bytes | bytearray | list['ABIValue'] | tuple['ABIValue'] | dict[str, 'ABIValue']*

### *type* ABIStruct *= dict[str, list[dict[str, 'ABIValue']]]*

### *type* Arc56ReturnValueType *= ABIValue | ABIStruct | None*

### *type* ABIType *= algosdk.abi.ABIType*

### *type* ABIArgumentType *= algosdk.abi.ABIType | algosdk.abi.ABITransactionType | algosdk.abi.ABIReferenceType*

### *class* ABIReturn
Represents the return value from an ABI method call.

Wraps the raw return value and decoded value along with any decode errors.

#### raw_value *: bytes | None* *= None*

The raw return value from the method call

#### value *: ABIValue | None* *= None*

The decoded return value from the method call

#### method *: algosdk.abi.method.Method | None* *= None*

The ABI method definition

#### decode_error *: Exception | None* *= None*

The exception that occurred during decoding, if any

#### tx_info *: dict[str, Any] | None* *= None*

The transaction info for the method call from raw algosdk ABIResult

#### *property* is_success *: bool*

Returns True if the ABI call was successful (no decode error)

* **Returns:**
  True if no decode error occurred, False otherwise

#### get_arc56_value(method: [Method](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-method) | algosdk.abi.method.Method, structs: dict[str, list[[StructField](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-structfield)]]) → Arc56ReturnValueType

Gets the ARC-56 formatted return value.

* **Parameters:**
  * **method** – The ABI method definition
  * **structs** – Dictionary of struct definitions
* **Returns:**
  The decoded return value in ARC-56 format

### get_arc56_value(abi_return: [ABIReturn](#class-abireturn), method: [Method](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-method) | algosdk.abi.method.Method, structs: dict[str, list[[StructField](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-structfield)]]) → Arc56ReturnValueType

Gets the ARC-56 formatted return value from an ABI return.

* **Parameters:**
  * **abi_return** – The ABI return value to decode
  * **method** – The ABI method definition
  * **structs** – Dictionary of struct definitions
* **Raises:**
  **ValueError** – If there was an error decoding the return value
* **Returns:**
  The decoded return value in ARC-56 format

### get_abi_encoded_value(value: Any, type_str: str, structs: dict[str, list[[StructField](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-structfield)]]) → bytes

Encodes a value according to its ABI type.

* **Parameters:**
  * **value** – The value to encode
  * **type_str** – The ABI type string
  * **structs** – Dictionary of struct definitions
* **Raises:**
  **ValueError** – If the value cannot be encoded for the given type
* **Returns:**
  The ABI encoded bytes

### get_abi_decoded_value(value: bytes | int | str, type_str: str | ABIArgumentType, structs: dict[str, list[[StructField](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-structfield)]]) → ABIValue

Decodes a value according to its ABI type.

* **Parameters:**
  * **value** – The value to decode
  * **type_str** – The ABI type string or type object
  * **structs** – Dictionary of struct definitions
* **Returns:**
  The decoded ABI value

### get_abi_tuple_from_abi_struct(struct_value: dict[str, Any], struct_fields: list[[StructField](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-structfield)], structs: dict[str, list[[StructField](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-structfield)]]) → list[Any]

Converts an ABI struct to a tuple representation.

* **Parameters:**
  * **struct_value** – The struct value as a dictionary
  * **struct_fields** – List of struct field definitions
  * **structs** – Dictionary of struct definitions
* **Raises:**
  **ValueError** – If a required field is missing from the struct
* **Returns:**
  The struct as a tuple

### get_abi_tuple_type_from_abi_struct_definition(struct_def: list[[StructField](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-structfield)], structs: dict[str, list[[StructField](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-structfield)]]) → algosdk.abi.TupleType

Creates a TupleType from a struct definition.

* **Parameters:**
  * **struct_def** – The struct field definitions
  * **structs** – Dictionary of struct definitions
* **Raises:**
  **ValueError** – If a field type is invalid
* **Returns:**
  The TupleType representing the struct

### get_abi_struct_from_abi_tuple(decoded_tuple: Any, struct_fields: list[[StructField](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-structfield)], structs: dict[str, list[[StructField](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-structfield)]]) → dict[str, Any]

Converts a decoded tuple to an ABI struct.

* **Parameters:**
  * **decoded_tuple** – The tuple to convert
  * **struct_fields** – List of struct field definitions
  * **structs** – Dictionary of struct definitions
* **Returns:**
  The tuple as a struct dictionary

### *class* BoxABIValue

Represents an ABI value stored in a box.

#### name *: [BoxName](/docs/algokit-utils/python/latest/api/algokit_utils/models/state/#class-boxname)*

The name of the box

#### value *: ABIValue*

The ABI value stored in the box


</div>
