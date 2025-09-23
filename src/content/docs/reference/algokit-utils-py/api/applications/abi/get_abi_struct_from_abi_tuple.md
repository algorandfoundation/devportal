---
title: algokit_utils.applications.abi.get_abi_struct_from_abi_tuple
---

#### algokit_utils.applications.abi.get_abi_struct_from_abi_tuple(decoded_tuple: Any, struct_fields: list[[algokit_utils.applications.app_spec.arc56.StructField](/reference/algokit-utils-py/api/applications/app_spec/arc56/structfield/#algokit_utils.applications.app_spec.arc56.StructField)], structs: dict[str, list[[algokit_utils.applications.app_spec.arc56.StructField](/reference/algokit-utils-py/api/applications/app_spec/arc56/structfield/#algokit_utils.applications.app_spec.arc56.StructField)]]) → dict[str, Any]

Converts a decoded tuple to an ABI struct.

- **Parameters:**
  - **decoded_tuple** – The tuple to convert
  - **struct_fields** – List of struct field definitions
  - **structs** – Dictionary of struct definitions
- **Returns:**
  The tuple as a struct dictionary
