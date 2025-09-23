---
title: algokit_utils.applications.abi.get_abi_encoded_value
---

#### algokit_utils.applications.abi.get_abi_encoded_value(value: Any, type_str: str, structs: dict[str, list[[algokit_utils.applications.app_spec.arc56.StructField](/reference/algokit-utils-py/api/applications/app_spec/arc56/structfield/#algokit_utils.applications.app_spec.arc56.StructField)]]) → bytes

Encodes a value according to its ABI type.

- **Parameters:**
  - **value** – The value to encode
  - **type_str** – The ABI type string
  - **structs** – Dictionary of struct definitions
- **Raises:**
  **ValueError** – If the value cannot be encoded for the given type
- **Returns:**
  The ABI encoded bytes
