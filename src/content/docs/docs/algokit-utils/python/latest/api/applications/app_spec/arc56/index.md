---
title: applications.app_spec.arc56
sidebar:
  label: Index
  order: 0
---
## Classes

| [`StructField`](#algokit_utils.applications.app_spec.arc56.StructField)             | Represents a field in a struct type.                                   |
|-------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`CallEnum`](#algokit_utils.applications.app_spec.arc56.CallEnum)                   | Enum representing different call types for application transactions.   |
| [`CreateEnum`](#algokit_utils.applications.app_spec.arc56.CreateEnum)               | Enum representing different create types for application transactions. |
| [`BareActions`](#algokit_utils.applications.app_spec.arc56.BareActions)             | Represents bare call and create actions for an application.            |
| [`ByteCode`](#algokit_utils.applications.app_spec.arc56.ByteCode)                   | Represents the approval and clear program bytecode.                    |
| [`Compiler`](#algokit_utils.applications.app_spec.arc56.Compiler)                   | Enum representing different compiler types.                            |
| [`CompilerVersion`](#algokit_utils.applications.app_spec.arc56.CompilerVersion)     | Represents compiler version information.                               |
| [`CompilerInfo`](#algokit_utils.applications.app_spec.arc56.CompilerInfo)           | Information about the compiler used.                                   |
| [`Network`](#algokit_utils.applications.app_spec.arc56.Network)                     | Network-specific application information.                              |
| [`ScratchVariables`](#algokit_utils.applications.app_spec.arc56.ScratchVariables)   | Information about scratch space variables.                             |
| [`Source`](#algokit_utils.applications.app_spec.arc56.Source)                       | Source code for approval and clear programs.                           |
| [`Global`](#algokit_utils.applications.app_spec.arc56.Global)                       | Global state schema.                                                   |
| [`Local`](#algokit_utils.applications.app_spec.arc56.Local)                         | Local state schema.                                                    |
| [`Schema`](#algokit_utils.applications.app_spec.arc56.Schema)                       | Application state schema.                                              |
| [`TemplateVariables`](#algokit_utils.applications.app_spec.arc56.TemplateVariables) | Template variable information.                                         |
| [`EventArg`](#algokit_utils.applications.app_spec.arc56.EventArg)                   | Event argument information.                                            |
| [`Event`](#algokit_utils.applications.app_spec.arc56.Event)                         | Event information.                                                     |
| [`Actions`](#algokit_utils.applications.app_spec.arc56.Actions)                     | Method actions information.                                            |
| [`DefaultValue`](#algokit_utils.applications.app_spec.arc56.DefaultValue)           | Default value information for method arguments.                        |
| [`MethodArg`](#algokit_utils.applications.app_spec.arc56.MethodArg)                 | Method argument information.                                           |
| [`Boxes`](#algokit_utils.applications.app_spec.arc56.Boxes)                         | Box storage requirements.                                              |
| [`Recommendations`](#algokit_utils.applications.app_spec.arc56.Recommendations)     | Method execution recommendations.                                      |
| [`Returns`](#algokit_utils.applications.app_spec.arc56.Returns)                     | Method return information.                                             |
| [`Method`](#algokit_utils.applications.app_spec.arc56.Method)                       | Method information.                                                    |
| [`PcOffsetMethod`](#algokit_utils.applications.app_spec.arc56.PcOffsetMethod)       | PC offset method types.                                                |
| [`SourceInfo`](#algokit_utils.applications.app_spec.arc56.SourceInfo)               | Source code location information.                                      |
| [`StorageKey`](#algokit_utils.applications.app_spec.arc56.StorageKey)               | Storage key information.                                               |
| [`StorageMap`](#algokit_utils.applications.app_spec.arc56.StorageMap)               | Storage map information.                                               |
| [`Keys`](#algokit_utils.applications.app_spec.arc56.Keys)                           | Storage keys for different storage types.                              |
| [`Maps`](#algokit_utils.applications.app_spec.arc56.Maps)                           | Storage maps for different storage types.                              |
| [`State`](#algokit_utils.applications.app_spec.arc56.State)                         | Application state information.                                         |
| [`ProgramSourceInfo`](#algokit_utils.applications.app_spec.arc56.ProgramSourceInfo) | Program source information.                                            |
| [`SourceInfoModel`](#algokit_utils.applications.app_spec.arc56.SourceInfoModel)     | Source information for approval and clear programs.                    |
| [`Arc56Contract`](#algokit_utils.applications.app_spec.arc56.Arc56Contract)         | ARC-0056 application specification.                                    |

## Module Contents

### *class* algokit_utils.applications.app_spec.arc56.StructField

Represents a field in a struct type.

#### name *: str*

The name of the struct field

#### type *: list[[StructField](#algokit_utils.applications.app_spec.arc56.StructField)] | str*

The type of the struct field, either a string or list of StructFields

#### *static* from_dict(data: dict[str, Any]) → [StructField](#algokit_utils.applications.app_spec.arc56.StructField)

### *class* algokit_utils.applications.app_spec.arc56.CallEnum

Bases: `str`, `enum.Enum`

Enum representing different call types for application transactions.

#### CLEAR_STATE *= 'ClearState'*

#### CLOSE_OUT *= 'CloseOut'*

#### DELETE_APPLICATION *= 'DeleteApplication'*

#### NO_OP *= 'NoOp'*

#### OPT_IN *= 'OptIn'*

#### UPDATE_APPLICATION *= 'UpdateApplication'*

### *class* algokit_utils.applications.app_spec.arc56.CreateEnum

Bases: `str`, `enum.Enum`

Enum representing different create types for application transactions.

#### DELETE_APPLICATION *= 'DeleteApplication'*

#### NO_OP *= 'NoOp'*

#### OPT_IN *= 'OptIn'*

### *class* algokit_utils.applications.app_spec.arc56.BareActions

Represents bare call and create actions for an application.

#### call *: list[[CallEnum](#algokit_utils.applications.app_spec.arc56.CallEnum)]*

The list of allowed call actions

#### create *: list[[CreateEnum](#algokit_utils.applications.app_spec.arc56.CreateEnum)]*

The list of allowed create actions

#### *static* from_dict(data: dict[str, Any]) → [BareActions](#algokit_utils.applications.app_spec.arc56.BareActions)

### *class* algokit_utils.applications.app_spec.arc56.ByteCode

Represents the approval and clear program bytecode.

#### approval *: str*

The base64 encoded approval program bytecode

#### clear *: str*

The base64 encoded clear program bytecode

#### *static* from_dict(data: dict[str, Any]) → [ByteCode](#algokit_utils.applications.app_spec.arc56.ByteCode)

### *class* algokit_utils.applications.app_spec.arc56.Compiler

Bases: `str`, `enum.Enum`

Enum representing different compiler types.

#### ALGOD *= 'algod'*

#### PUYA *= 'puya'*

### *class* algokit_utils.applications.app_spec.arc56.CompilerVersion

Represents compiler version information.

#### commit_hash *: str | None* *= None*

The git commit hash of the compiler

#### major *: int | None* *= None*

The major version number

#### minor *: int | None* *= None*

The minor version number

#### patch *: int | None* *= None*

The patch version number

#### *static* from_dict(data: dict[str, Any]) → [CompilerVersion](#algokit_utils.applications.app_spec.arc56.CompilerVersion)

### *class* algokit_utils.applications.app_spec.arc56.CompilerInfo

Information about the compiler used.

#### compiler *: [Compiler](#algokit_utils.applications.app_spec.arc56.Compiler)*

The type of compiler used

#### compiler_version *: [CompilerVersion](#algokit_utils.applications.app_spec.arc56.CompilerVersion)*

Version information for the compiler

#### *static* from_dict(data: dict[str, Any]) → [CompilerInfo](#algokit_utils.applications.app_spec.arc56.CompilerInfo)

### *class* algokit_utils.applications.app_spec.arc56.Network

Network-specific application information.

#### app_id *: int*

The application ID on the network

#### *static* from_dict(data: dict[str, Any]) → [Network](#algokit_utils.applications.app_spec.arc56.Network)

### *class* algokit_utils.applications.app_spec.arc56.ScratchVariables

Information about scratch space variables.

#### slot *: int*

The scratch slot number

#### type *: str*

The type of the scratch variable

#### *static* from_dict(data: dict[str, Any]) → [ScratchVariables](#algokit_utils.applications.app_spec.arc56.ScratchVariables)

### *class* algokit_utils.applications.app_spec.arc56.Source

Source code for approval and clear programs.

#### approval *: str*

The base64 encoded approval program source

#### clear *: str*

The base64 encoded clear program source

#### *static* from_dict(data: dict[str, Any]) → [Source](#algokit_utils.applications.app_spec.arc56.Source)

#### get_decoded_approval() → str

Get decoded approval program source.

* **Returns:**
  Decoded approval program source code

#### get_decoded_clear() → str

Get decoded clear program source.

* **Returns:**
  Decoded clear program source code

### *class* algokit_utils.applications.app_spec.arc56.Global

Global state schema.

#### bytes *: int*

The number of byte slices in global state

#### ints *: int*

The number of integers in global state

#### *static* from_dict(data: dict[str, Any]) → [Global](#algokit_utils.applications.app_spec.arc56.Global)

### *class* algokit_utils.applications.app_spec.arc56.Local

Local state schema.

#### bytes *: int*

The number of byte slices in local state

#### ints *: int*

The number of integers in local state

#### *static* from_dict(data: dict[str, Any]) → [Local](#algokit_utils.applications.app_spec.arc56.Local)

### *class* algokit_utils.applications.app_spec.arc56.Schema

Application state schema.

#### global_state *: [Global](#algokit_utils.applications.app_spec.arc56.Global)*

The global state schema

#### local_state *: [Local](#algokit_utils.applications.app_spec.arc56.Local)*

The local state schema

#### *static* from_dict(data: dict[str, Any]) → [Schema](#algokit_utils.applications.app_spec.arc56.Schema)

### *class* algokit_utils.applications.app_spec.arc56.TemplateVariables

Template variable information.

#### type *: str*

The type of the template variable

#### value *: str | None* *= None*

The optional value of the template variable

#### *static* from_dict(data: dict[str, Any]) → [TemplateVariables](#algokit_utils.applications.app_spec.arc56.TemplateVariables)

### *class* algokit_utils.applications.app_spec.arc56.EventArg

Event argument information.

#### type *: str*

The type of the event argument

#### desc *: str | None* *= None*

The optional description of the argument

#### name *: str | None* *= None*

The optional name of the argument

#### struct *: str | None* *= None*

The optional struct type name

#### *static* from_dict(data: dict[str, Any]) → [EventArg](#algokit_utils.applications.app_spec.arc56.EventArg)

### *class* algokit_utils.applications.app_spec.arc56.Event

Event information.

#### args *: list[[EventArg](#algokit_utils.applications.app_spec.arc56.EventArg)]*

The list of event arguments

#### name *: str*

The name of the event

#### desc *: str | None* *= None*

The optional description of the event

#### *static* from_dict(data: dict[str, Any]) → [Event](#algokit_utils.applications.app_spec.arc56.Event)

### *class* algokit_utils.applications.app_spec.arc56.Actions

Method actions information.

#### call *: list[[CallEnum](#algokit_utils.applications.app_spec.arc56.CallEnum)] | None* *= None*

The optional list of allowed call actions

#### create *: list[[CreateEnum](#algokit_utils.applications.app_spec.arc56.CreateEnum)] | None* *= None*

The optional list of allowed create actions

#### *static* from_dict(data: dict[str, Any]) → [Actions](#algokit_utils.applications.app_spec.arc56.Actions)

### *class* algokit_utils.applications.app_spec.arc56.DefaultValue

Default value information for method arguments.

#### data *: str*

The default value data

#### source *: Literal['box', 'global', 'local', 'literal', 'method']*

The source of the default value

#### type *: str | None* *= None*

The optional type of the default value

#### *static* from_dict(data: dict[str, Any]) → [DefaultValue](#algokit_utils.applications.app_spec.arc56.DefaultValue)

### *class* algokit_utils.applications.app_spec.arc56.MethodArg

Method argument information.

#### type *: str*

The type of the argument

#### default_value *: [DefaultValue](#algokit_utils.applications.app_spec.arc56.DefaultValue) | None* *= None*

The optional default value

#### desc *: str | None* *= None*

The optional description

#### name *: str | None* *= None*

The optional name

#### struct *: str | None* *= None*

The optional struct type name

#### *static* from_dict(data: dict[str, Any]) → [MethodArg](#algokit_utils.applications.app_spec.arc56.MethodArg)

### *class* algokit_utils.applications.app_spec.arc56.Boxes

Box storage requirements.

#### key *: str*

The box key

#### read_bytes *: int*

The number of bytes to read

#### write_bytes *: int*

The number of bytes to write

#### app *: int | None* *= None*

The optional application ID

#### *static* from_dict(data: dict[str, Any]) → [Boxes](#algokit_utils.applications.app_spec.arc56.Boxes)

### *class* algokit_utils.applications.app_spec.arc56.Recommendations

Method execution recommendations.

#### accounts *: list[str] | None* *= None*

The optional list of accounts

#### apps *: list[int] | None* *= None*

The optional list of applications

#### assets *: list[int] | None* *= None*

The optional list of assets

#### boxes *: [Boxes](#algokit_utils.applications.app_spec.arc56.Boxes) | None* *= None*

The optional box storage requirements

#### inner_transaction_count *: int | None* *= None*

The optional inner transaction count

#### *static* from_dict(data: dict[str, Any]) → [Recommendations](#algokit_utils.applications.app_spec.arc56.Recommendations)

### *class* algokit_utils.applications.app_spec.arc56.Returns

Method return information.

#### type *: str*

The type of the return value

#### desc *: str | None* *= None*

The optional description

#### struct *: str | None* *= None*

The optional struct type name

#### *static* from_dict(data: dict[str, Any]) → [Returns](#algokit_utils.applications.app_spec.arc56.Returns)

### *class* algokit_utils.applications.app_spec.arc56.Method

Method information.

#### actions *: [Actions](#algokit_utils.applications.app_spec.arc56.Actions)*

The allowed actions

#### args *: list[[MethodArg](#algokit_utils.applications.app_spec.arc56.MethodArg)]*

The method arguments

#### name *: str*

The method name

#### returns *: [Returns](#algokit_utils.applications.app_spec.arc56.Returns)*

The return information

#### desc *: str | None* *= None*

The optional description

#### events *: list[[Event](#algokit_utils.applications.app_spec.arc56.Event)] | None* *= None*

The optional list of events

#### readonly *: bool | None* *= None*

The optional readonly flag

#### recommendations *: [Recommendations](#algokit_utils.applications.app_spec.arc56.Recommendations) | None* *= None*

The optional execution recommendations

#### to_abi_method() → algosdk.abi.Method

Convert to ABI method.

* **Raises:**
  **ValueError** – If underlying ABI method is not initialized
* **Returns:**
  ABI method

#### *static* from_dict(data: dict[str, Any]) → [Method](#algokit_utils.applications.app_spec.arc56.Method)

### *class* algokit_utils.applications.app_spec.arc56.PcOffsetMethod

Bases: `str`, `enum.Enum`

PC offset method types.

#### CBLOCKS *= 'cblocks'*

#### NONE *= 'none'*

### *class* algokit_utils.applications.app_spec.arc56.SourceInfo

Source code location information.

#### pc *: list[int]*

The list of program counter values

#### error_message *: str | None* *= None*

The optional error message

#### source *: str | None* *= None*

The optional source code

#### teal *: int | None* *= None*

The optional TEAL version

#### *static* from_dict(data: dict[str, Any]) → [SourceInfo](#algokit_utils.applications.app_spec.arc56.SourceInfo)

### *class* algokit_utils.applications.app_spec.arc56.StorageKey

Storage key information.

#### key *: str*

The storage key

#### key_type *: str*

The type of the key

#### value_type *: str*

The type of the value

#### desc *: str | None* *= None*

The optional description

#### *static* from_dict(data: dict[str, Any]) → [StorageKey](#algokit_utils.applications.app_spec.arc56.StorageKey)

### *class* algokit_utils.applications.app_spec.arc56.StorageMap

Storage map information.

#### key_type *: str*

The type of the map keys

#### value_type *: str*

The type of the map values

#### desc *: str | None* *= None*

The optional description

#### prefix *: str | None* *= None*

The optional key prefix

#### *static* from_dict(data: dict[str, Any]) → [StorageMap](#algokit_utils.applications.app_spec.arc56.StorageMap)

### *class* algokit_utils.applications.app_spec.arc56.Keys

Storage keys for different storage types.

#### box *: dict[str, [StorageKey](#algokit_utils.applications.app_spec.arc56.StorageKey)]*

The box storage keys

#### global_state *: dict[str, [StorageKey](#algokit_utils.applications.app_spec.arc56.StorageKey)]*

The global state storage keys

#### local_state *: dict[str, [StorageKey](#algokit_utils.applications.app_spec.arc56.StorageKey)]*

The local state storage keys

#### *static* from_dict(data: dict[str, Any]) → [Keys](#algokit_utils.applications.app_spec.arc56.Keys)

### *class* algokit_utils.applications.app_spec.arc56.Maps

Storage maps for different storage types.

#### box *: dict[str, [StorageMap](#algokit_utils.applications.app_spec.arc56.StorageMap)]*

The box storage maps

#### global_state *: dict[str, [StorageMap](#algokit_utils.applications.app_spec.arc56.StorageMap)]*

The global state storage maps

#### local_state *: dict[str, [StorageMap](#algokit_utils.applications.app_spec.arc56.StorageMap)]*

The local state storage maps

#### *static* from_dict(data: dict[str, Any]) → [Maps](#algokit_utils.applications.app_spec.arc56.Maps)

### *class* algokit_utils.applications.app_spec.arc56.State

Application state information.

#### keys *: [Keys](#algokit_utils.applications.app_spec.arc56.Keys)*

The storage keys

#### maps *: [Maps](#algokit_utils.applications.app_spec.arc56.Maps)*

The storage maps

#### schema *: [Schema](#algokit_utils.applications.app_spec.arc56.Schema)*

The state schema

#### *static* from_dict(data: dict[str, Any]) → [State](#algokit_utils.applications.app_spec.arc56.State)

### *class* algokit_utils.applications.app_spec.arc56.ProgramSourceInfo

Program source information.

#### pc_offset_method *: [PcOffsetMethod](#algokit_utils.applications.app_spec.arc56.PcOffsetMethod)*

The PC offset method

#### source_info *: list[[SourceInfo](#algokit_utils.applications.app_spec.arc56.SourceInfo)]*

The list of source info entries

#### *static* from_dict(data: dict[str, Any]) → [ProgramSourceInfo](#algokit_utils.applications.app_spec.arc56.ProgramSourceInfo)

### *class* algokit_utils.applications.app_spec.arc56.SourceInfoModel

Source information for approval and clear programs.

#### approval *: [ProgramSourceInfo](#algokit_utils.applications.app_spec.arc56.ProgramSourceInfo)*

The approval program source info

#### clear *: [ProgramSourceInfo](#algokit_utils.applications.app_spec.arc56.ProgramSourceInfo)*

The clear program source info

#### *static* from_dict(data: dict[str, Any]) → [SourceInfoModel](#algokit_utils.applications.app_spec.arc56.SourceInfoModel)

### *class* algokit_utils.applications.app_spec.arc56.Arc56Contract

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

#### *static* from_arc32(arc32_application_spec: str | [algokit_utils.applications.app_spec.arc32.Arc32Contract](/docs/algokit-utils/python/latest/api/applications/app_spec/arc32/#algokit_utils.applications.app_spec.arc32.Arc32Contract)) → [Arc56Contract](#algokit_utils.applications.app_spec.arc56.Arc56Contract)

#### *static* get_abi_struct_from_abi_tuple(decoded_tuple: Any, struct_fields: list[[StructField](#algokit_utils.applications.app_spec.arc56.StructField)], structs: dict[str, list[[StructField](#algokit_utils.applications.app_spec.arc56.StructField)]]) → dict[str, Any]

#### to_json(indent: int | None = None) → str

#### dictify() → dict

#### get_arc56_method(method_name_or_signature: str) → [Method](#algokit_utils.applications.app_spec.arc56.Method)