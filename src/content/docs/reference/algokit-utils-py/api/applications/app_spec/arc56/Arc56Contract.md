---
title: Arc56Contract
---

#### _class_ algokit_utils.applications.app_spec.arc56.Arc56Contract

ARC-0056 application specification.

See [https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0056.md](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0056.md)

#### arcs _: list[int]_

The list of supported ARC version numbers

#### bare*actions *: [BareActions](/reference/algokit-utils-py/api/applications/app_spec/arc56/bareactions/#algokit_utils.applications.app_spec.arc56.BareActions)\_

The bare call and create actions

#### methods _: list[[Method](/reference/algokit-utils-py/api/applications/app_spec/arc56/method/#algokit_utils.applications.app_spec.arc56.Method)]_

The list of contract methods

#### name _: str_

The contract name

#### state _: [State](/reference/algokit-utils-py/api/applications/app_spec/arc56/state/#algokit_utils.applications.app_spec.arc56.State)_

The contract state information

#### structs _: dict[str, list[[StructField](/reference/algokit-utils-py/api/applications/app_spec/arc56/structfield/#algokit_utils.applications.app_spec.arc56.StructField)]]_

The contract struct definitions

#### byte*code *: [ByteCode](/reference/algokit-utils-py/api/applications/app_spec/arc56/bytecode/#algokit_utils.applications.app_spec.arc56.ByteCode) | None\_ _= None_

The optional bytecode for approval and clear programs

#### compiler*info *: [CompilerInfo](/reference/algokit-utils-py/api/applications/app_spec/arc56/compilerinfo/#algokit_utils.applications.app_spec.arc56.CompilerInfo) | None\_ _= None_

The optional compiler information

#### desc _: str | None_ _= None_

The optional contract description

#### events _: list[[Event](/reference/algokit-utils-py/api/applications/app_spec/arc56/event/#algokit_utils.applications.app_spec.arc56.Event)] | None_ _= None_

The optional list of contract events

#### networks _: dict[str, [Network](/reference/algokit-utils-py/api/applications/app_spec/arc56/network/#algokit_utils.applications.app_spec.arc56.Network)] | None_ _= None_

The optional network deployment information

#### scratch*variables *: dict[str, [ScratchVariables](/reference/algokit-utils-py/api/applications/app_spec/arc56/scratchvariables/#algokit_utils.applications.app_spec.arc56.ScratchVariables)] | None\_ _= None_

The optional scratch variable information

#### source _: [Source](/reference/algokit-utils-py/api/applications/app_spec/arc56/source/#algokit_utils.applications.app_spec.arc56.Source) | None_ _= None_

The optional source code

#### source*info *: [SourceInfoModel](/reference/algokit-utils-py/api/applications/app_spec/arc56/sourceinfomodel/#algokit_utils.applications.app_spec.arc56.SourceInfoModel) | None\_ _= None_

The optional source code information

#### template*variables *: dict[str, [TemplateVariables](/reference/algokit-utils-py/api/applications/app_spec/arc56/templatevariables/#algokit_utils.applications.app_spec.arc56.TemplateVariables)] | None\_ _= None_

The optional template variable information

#### _static_ from_dict(application_spec: dict) → [Arc56Contract](#algokit_utils.applications.app_spec.arc56.Arc56Contract)

Create Arc56Contract from dictionary.

- **Parameters:**
  **application_spec** – Dictionary containing contract specification
- **Returns:**
  Arc56Contract instance

#### _static_ from_json(application_spec: str) → [Arc56Contract](#algokit_utils.applications.app_spec.arc56.Arc56Contract)

#### _static_ from_arc32(arc32_application_spec: str | [algokit_utils.applications.app_spec.arc32.Arc32Contract](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/applications/app_spec/arc32/arc32contract/#algokit_utils.applications.app_spec.arc32.Arc32Contract)) → [Arc56Contract](#algokit_utils.applications.app_spec.arc56.Arc56Contract)

#### _static_ get_abi_struct_from_abi_tuple(decoded_tuple: Any, struct_fields: list[[StructField](/reference/algokit-utils-py/api/applications/app_spec/arc56/structfield/#algokit_utils.applications.app_spec.arc56.StructField)], structs: dict[str, list[[StructField](/reference/algokit-utils-py/api/applications/app_spec/arc56/structfield/#algokit_utils.applications.app_spec.arc56.StructField)]]) → dict[str, Any]

#### to_json(indent: int | None = None) → str

#### dictify() → dict

#### get_arc56_method(method_name_or_signature: str) → [Method](/reference/algokit-utils-py/api/applications/app_spec/arc56/method/#algokit_utils.applications.app_spec.arc56.Method)
