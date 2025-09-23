---
title: algokit_utils.applications.app_spec.arc56.Arc56Contract
---
#### *class* algokit_utils.applications.app_spec.arc56.Arc56Contract

ARC-0056 application specification.

See [https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0056.md](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0056.md)

#### arcs *: list[int]*

The list of supported ARC version numbers

#### bare_actions *: [BareActions](#algokit_utils.applications.app_spec.arc56.BareActions)*

The bare call and create actions

#### methods *: list[[Method](#algokit_utils.applications.app_spec.arc56.Method)]*

The list of contract methods

#### name *: str*

The contract name

#### state *: [State](#algokit_utils.applications.app_spec.arc56.State)*

The contract state information

#### structs *: dict[str, list[[StructField](#algokit_utils.applications.app_spec.arc56.StructField)]]*

The contract struct definitions

#### byte_code *: [ByteCode](#algokit_utils.applications.app_spec.arc56.ByteCode) | None* *= None*

The optional bytecode for approval and clear programs

#### compiler_info *: [CompilerInfo](#algokit_utils.applications.app_spec.arc56.CompilerInfo) | None* *= None*

The optional compiler information

#### desc *: str | None* *= None*

The optional contract description

#### events *: list[[Event](#algokit_utils.applications.app_spec.arc56.Event)] | None* *= None*

The optional list of contract events

#### networks *: dict[str, [Network](#algokit_utils.applications.app_spec.arc56.Network)] | None* *= None*

The optional network deployment information

#### scratch_variables *: dict[str, [ScratchVariables](#algokit_utils.applications.app_spec.arc56.ScratchVariables)] | None* *= None*

The optional scratch variable information

#### source *: [Source](#algokit_utils.applications.app_spec.arc56.Source) | None* *= None*

The optional source code

#### source_info *: [SourceInfoModel](#algokit_utils.applications.app_spec.arc56.SourceInfoModel) | None* *= None*

The optional source code information

#### template_variables *: dict[str, [TemplateVariables](#algokit_utils.applications.app_spec.arc56.TemplateVariables)] | None* *= None*

The optional template variable information

#### *static* from_dict(application_spec: dict) → [Arc56Contract](#algokit_utils.applications.app_spec.arc56.Arc56Contract)

Create Arc56Contract from dictionary.

* **Parameters:**
  **application_spec** – Dictionary containing contract specification
* **Returns:**
  Arc56Contract instance

#### *static* from_json(application_spec: str) → [Arc56Contract](#algokit_utils.applications.app_spec.arc56.Arc56Contract)

#### *static* from_arc32(arc32_application_spec: str | [algokit_utils.applications.app_spec.arc32.Arc32Contract](/reference/algokit-utils-py/api/applications/app_spec/arc32/arc32contract/#algokit_utils.applications.app_spec.arc32.Arc32Contract)) → [Arc56Contract](#algokit_utils.applications.app_spec.arc56.Arc56Contract)

#### *static* get_abi_struct_from_abi_tuple(decoded_tuple: Any, struct_fields: list[[StructField](#algokit_utils.applications.app_spec.arc56.StructField)], structs: dict[str, list[[StructField](#algokit_utils.applications.app_spec.arc56.StructField)]]) → dict[str, Any]

#### to_json(indent: int | None = None) → str

#### dictify() → dict

#### get_arc56_method(method_name_or_signature: str) → [Method](#algokit_utils.applications.app_spec.arc56.Method)