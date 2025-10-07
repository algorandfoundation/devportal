---
title: get_abi_tuple_from_abi_struct
sidebar:
  label: get_abi_tuple_from_abi_struct
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### algokit_utils.applications.abi.get_abi_tuple_from_abi_struct(struct_value: dict[str, Any], struct_fields: list[[algokit_utils.applications.app_spec.arc56.StructField](/reference/algokit-utils-py/api/applications/app_spec/arc56/structfield/#algokit_utils.applications.app_spec.arc56.StructField)], structs: dict[str, list[[algokit_utils.applications.app_spec.arc56.StructField](/reference/algokit-utils-py/api/applications/app_spec/arc56/structfield/#algokit_utils.applications.app_spec.arc56.StructField)]]) → list[Any]

Converts an ABI struct to a tuple representation.

- **Parameters:**
  - **struct_value** – The struct value as a dictionary
  - **struct_fields** – List of struct field definitions
  - **structs** – Dictionary of struct definitions
- **Raises:**
  **ValueError** – If a required field is missing from the struct
- **Returns:**
  The struct as a tuple
