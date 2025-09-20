---
title: ABIReturn
---
#### *class* algokit_utils.applications.abi.ABIReturn(result: algosdk.atomic_transaction_composer.ABIResult)

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

#### get_arc56_value(method: [algokit_utils.applications.app_spec.arc56.Method](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/applications/app_spec/arc56/method/#algokit_utils.applications.app_spec.arc56.Method) | algosdk.abi.method.Method, structs: dict[str, list[[algokit_utils.applications.app_spec.arc56.StructField](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/applications/app_spec/arc56/structfield/#algokit_utils.applications.app_spec.arc56.StructField)]]) → Arc56ReturnValueType

Gets the ARC-56 formatted return value.

* **Parameters:**
  * **method** – The ABI method definition
  * **structs** – Dictionary of struct definitions
* **Returns:**
  The decoded return value in ARC-56 format