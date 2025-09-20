---
title: get_abi_tuple_type_from_abi_struct_definition
---
#### algokit_utils.applications.abi.get_abi_tuple_type_from_abi_struct_definition(struct_def: list[[algokit_utils.applications.app_spec.arc56.StructField](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/applications/app_spec/arc56/structfield/#algokit_utils.applications.app_spec.arc56.StructField)], structs: dict[str, list[[algokit_utils.applications.app_spec.arc56.StructField](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/applications/app_spec/arc56/structfield/#algokit_utils.applications.app_spec.arc56.StructField)]]) → algosdk.abi.TupleType

Creates a TupleType from a struct definition.

* **Parameters:**
  * **struct_def** – The struct field definitions
  * **structs** – Dictionary of struct definitions
* **Raises:**
  **ValueError** – If a field type is invalid
* **Returns:**
  The TupleType representing the struct