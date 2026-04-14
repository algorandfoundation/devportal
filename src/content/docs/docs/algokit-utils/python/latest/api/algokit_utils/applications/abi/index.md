---
title: 'algokit_utils.applications.abi'
---

<div class="api-ref">

# algokit_utils.applications.abi

## Attributes

| [`ABIValue`](#algokit_utils.applications.abi.ABIValue)                         |     |
| ------------------------------------------------------------------------------ | --- |
| [`ABIStruct`](#algokit_utils.applications.abi.ABIStruct)                       |     |
| [`Arc56ReturnValueType`](#algokit_utils.applications.abi.Arc56ReturnValueType) |     |
| [`ABIType`](#algokit_utils.applications.abi.ABIType)                           |     |
| [`ABIArgumentType`](#algokit_utils.applications.abi.ABIArgumentType)           |     |

## Classes

| [`ABIReturn`](#algokit_utils.applications.abi.ABIReturn)     | Represents the return value from an ABI method call.                 |
| ------------------------------------------------------------ | -------------------------------------------------------------------- |
| [`ABIResult`](#algokit_utils.applications.abi.ABIResult)     | Deprecated wrapper that previously carried tx context plus ABI data. |
| [`BoxABIValue`](#algokit_utils.applications.abi.BoxABIValue) | Represents an ABI value stored in a box.                             |

## Functions

| [`extract_abi_return_from_logs`](#algokit_utils.applications.abi.extract_abi_return_from_logs)(→ ABIReturn) | Decode ABI return value from a transaction confirmation log. |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`parse_abi_method_result`](#algokit_utils.applications.abi.parse_abi_method_result)(→ ABIResult)           | Deprecated: use extract_abi_return_from_logs instead.        |
| [`get_arc56_value`](#algokit_utils.applications.abi.get_arc56_value)(→ Arc56ReturnValueType)                | Deprecated: use ABIReturn.value instead.                     |
| [`get_abi_encoded_value`](#algokit_utils.applications.abi.get_abi_encoded_value)(→ bytes)                   | Encodes a value according to its ABI type.                   |
| [`get_abi_decoded_value`](#algokit_utils.applications.abi.get_abi_decoded_value)(→ ABIValue)                | Decodes a value according to its ABI type.                   |

## Module Contents

### _type_ ABIValue _= bool | int | str | bytes | bytearray | list['ABIValue'] | tuple['ABIValue'] | dict[str, 'ABIValue'] | object_

### _type_ ABIStruct _= dict[str, list[dict[str, 'ABIValue']]] | object_

### _type_ Arc56ReturnValueType _= ABIValue | ABIStruct | None_

### _type_ ABIType _= abi.ABIType_

### _type_ ABIArgumentType _= abi.ABIType | arc56.TransactionType | arc56.ReferenceType_

### _class_ ABIReturn(\*, method: Arc56Method | None, raw_value: bytes = b'', value: ABIValue | None = None, decode_error: Exception | None = None, tx_info: ConfirmationResponse | None = None)

Represents the return value from an ABI method call.

Aligns with the Rust model: always carries the method, raw bytes, decoded value (if available),
and any decode error. Transaction context should live on the send result, not here.

#### method _: Arc56Method | None_

#### raw*value *: bytes\_

#### value _: ABIValue | None_

#### decode*error *: Exception | None\_

#### _property_ is*success *: bool\_

Returns True if the ABI call was decoded successfully.

#### _property_ tx*info *: ConfirmationResponse | None\_

Deprecated: transaction info now lives on the send result.

#### get_arc56_value(method: Method, structs: dict[str, object] | None = None) → Arc56ReturnValueType

Deprecated: use value directly.

### _class_ ABIResult(\*, tx_id: str | None = None, raw_value: bytes = b'', value: ABIValue | None = None, decode_error: Exception | None = None, tx_info: ConfirmationResponse | None = None, method: Arc56Method | None = None)

Bases: [`ABIReturn`](#algokit_utils.applications.abi.ABIReturn)

Deprecated wrapper that previously carried tx context plus ABI data.

#### tx*id *: str | None\_ _= None_

#### _classmethod_ from_abireturn(abi_return: [ABIReturn](#algokit_utils.applications.abi.ABIReturn), tx_id: str | None = None) → [ABIResult](#algokit_utils.applications.abi.ABIResult)

### extract_abi_return_from_logs(confirmation: ConfirmationResponse, method: Arc56Method) → [ABIReturn](#algokit_utils.applications.abi.ABIReturn)

Decode ABI return value from a transaction confirmation log.

### parse_abi_method_result(method: Arc56Method, tx_id: str, txn: ConfirmationResponse) → [ABIResult](#algokit_utils.applications.abi.ABIResult)

Deprecated: use extract_abi_return_from_logs instead.

### get_arc56_value(abi_return: [ABIReturn](#algokit_utils.applications.abi.ABIReturn), method: Method, structs: dict[str, object] | None = None) → Arc56ReturnValueType

Deprecated: use ABIReturn.value instead.

### get_abi_encoded_value(value: object, abi_type: ABIType | AVMType) → bytes

Encodes a value according to its ABI type.

- **Parameters:**
  - **value** – The value to encode
  - **abi_type** – The ABI or AVM type
- **Returns:**
  The ABI encoded bytes

### get_abi_decoded_value(value: bytes | int | str, decode_type: AVMType | ABIType | ReferenceType) → ABIValue

Decodes a value according to its ABI type.

- **Parameters:**
  - **value** – The value to decode
  - **decode_type** – The ABI type string or type object
- **Returns:**
  The decoded ABI value

### _class_ BoxABIValue

Represents an ABI value stored in a box.

#### name _: [BoxName](/docs/algokit-utils/python/latest/api/algokit_utils/models/state/#algokit_utils.models.state.BoxName)_

The name of the box

#### value _: ABIValue_

The ABI value stored in the box

</div>
