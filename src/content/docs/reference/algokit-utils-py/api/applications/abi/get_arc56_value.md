---
title: get_arc56_value
---

#### algokit_utils.applications.abi.get_arc56_value(abi_return: [ABIReturn](/reference/algokit-utils-py/api/applications/abi/abireturn/#algokit_utils.applications.abi.ABIReturn), method: [algokit_utils.applications.app_spec.arc56.Method](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/applications/app_spec/arc56/method/#algokit_utils.applications.app_spec.arc56.Method) | algosdk.abi.method.Method, structs: dict[str, list[[algokit_utils.applications.app_spec.arc56.StructField](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/applications/app_spec/arc56/structfield/#algokit_utils.applications.app_spec.arc56.StructField)]]) → Arc56ReturnValueType

Gets the ARC-56 formatted return value from an ABI return.

- **Parameters:**
  - **abi_return** – The ABI return value to decode
  - **method** – The ABI method definition
  - **structs** – Dictionary of struct definitions
- **Raises:**
  **ValueError** – If there was an error decoding the return value
- **Returns:**
  The decoded return value in ARC-56 format
