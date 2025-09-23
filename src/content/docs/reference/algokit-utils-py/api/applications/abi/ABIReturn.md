---
title: algokit_utils.applications.abi.ABIReturn
---

#### _class_ algokit_utils.applications.abi.ABIReturn(result: algosdk.atomic_transaction_composer.ABIResult)

Represents the return value from an ABI method call.

Wraps the raw return value and decoded value along with any decode errors.

#### raw_value _: bytes | None_ _= None_

The raw return value from the method call

#### value _: ABIValue | None_ _= None_

The decoded return value from the method call

#### method _: algosdk.abi.method.Method | None_ _= None_

The ABI method definition

#### decode_error _: Exception | None_ _= None_

The exception that occurred during decoding, if any

#### tx_info _: dict[str, Any] | None_ _= None_

The transaction info for the method call from raw algosdk ABIResult

#### _property_ is_success _: bool_

Returns True if the ABI call was successful (no decode error)

- **Returns:**
  True if no decode error occurred, False otherwise

#### get_arc56_value(method: [algokit_utils.applications.app_spec.arc56.Method](/reference/algokit-utils-py/api/applications/app_spec/arc56/method/#algokit_utils.applications.app_spec.arc56.Method) | algosdk.abi.method.Method, structs: dict[str, list[[algokit_utils.applications.app_spec.arc56.StructField](/reference/algokit-utils-py/api/applications/app_spec/arc56/structfield/#algokit_utils.applications.app_spec.arc56.StructField)]]) → Arc56ReturnValueType

Gets the ARC-56 formatted return value.

- **Parameters:**
  - **method** – The ABI method definition
  - **structs** – Dictionary of struct definitions
- **Returns:**
  The decoded return value in ARC-56 format
