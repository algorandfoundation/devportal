---
title: get_abi_decoded_value
---

#### algokit_utils.applications.abi.get_abi_decoded_value(value: bytes | int | str, type_str: str | ABIArgumentType, structs: dict[str, list[[algokit_utils.applications.app_spec.arc56.StructField](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/applications/app_spec/arc56/structfield/#algokit_utils.applications.app_spec.arc56.StructField)]]) → ABIValue

Decodes a value according to its ABI type.

- **Parameters:**
  - **value** – The value to decode
  - **type_str** – The ABI type string or type object
  - **structs** – Dictionary of struct definitions
- **Returns:**
  The decoded ABI value
