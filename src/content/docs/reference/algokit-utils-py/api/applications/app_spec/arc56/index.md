---
title: applications.app_spec.arc56
sidebar:
  label: Index
  order: 0
---

## Classes

| [`StructField`](#algokit_utils.applications.app_spec.arc56.StructField)             | Represents a field in a struct type.                                   |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
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

### _class_ algokit_utils.applications.app_spec.arc56.StructField

Represents a field in a struct type.

#### name _: str_

The name of the struct field

#### type _: list[[StructField](#algokit_utils.applications.app_spec.arc56.StructField)] | str_

The type of the struct field, either a string or list of StructFields

#### _static_ from_dict(data: dict[str, Any]) → [StructField](#algokit_utils.applications.app_spec.arc56.StructField)

### _class_ algokit_utils.applications.app_spec.arc56.CallEnum

Bases: `str`, `enum.Enum`

Enum representing different call types for application transactions.

#### CLEAR_STATE _= 'ClearState'_

#### CLOSE_OUT _= 'CloseOut'_

#### DELETE_APPLICATION _= 'DeleteApplication'_

#### NO_OP _= 'NoOp'_

#### OPT_IN _= 'OptIn'_

#### UPDATE_APPLICATION _= 'UpdateApplication'_

### _class_ algokit_utils.applications.app_spec.arc56.CreateEnum

Bases: `str`, `enum.Enum`

Enum representing different create types for application transactions.

#### DELETE_APPLICATION _= 'DeleteApplication'_

#### NO_OP _= 'NoOp'_

#### OPT_IN _= 'OptIn'_

### _class_ algokit_utils.applications.app_spec.arc56.BareActions

Represents bare call and create actions for an application.

#### call _: list[[CallEnum](#algokit_utils.applications.app_spec.arc56.CallEnum)]_

The list of allowed call actions

#### create _: list[[CreateEnum](#algokit_utils.applications.app_spec.arc56.CreateEnum)]_

The list of allowed create actions

#### _static_ from_dict(data: dict[str, Any]) → [BareActions](#algokit_utils.applications.app_spec.arc56.BareActions)

### _class_ algokit_utils.applications.app_spec.arc56.ByteCode

Represents the approval and clear program bytecode.

#### approval _: str_

The base64 encoded approval program bytecode

#### clear _: str_

The base64 encoded clear program bytecode

#### _static_ from_dict(data: dict[str, Any]) → [ByteCode](#algokit_utils.applications.app_spec.arc56.ByteCode)

### _class_ algokit_utils.applications.app_spec.arc56.Compiler

Bases: `str`, `enum.Enum`

Enum representing different compiler types.

#### ALGOD _= 'algod'_

#### PUYA _= 'puya'_

### _class_ algokit_utils.applications.app_spec.arc56.CompilerVersion

Represents compiler version information.

#### commit_hash _: str | None_ _= None_

The git commit hash of the compiler

#### major _: int | None_ _= None_

The major version number

#### minor _: int | None_ _= None_

The minor version number

#### patch _: int | None_ _= None_

The patch version number

#### _static_ from_dict(data: dict[str, Any]) → [CompilerVersion](#algokit_utils.applications.app_spec.arc56.CompilerVersion)

### _class_ algokit_utils.applications.app_spec.arc56.CompilerInfo

Information about the compiler used.

#### compiler _: [Compiler](#algokit_utils.applications.app_spec.arc56.Compiler)_

The type of compiler used

#### compiler_version _: [CompilerVersion](#algokit_utils.applications.app_spec.arc56.CompilerVersion)_

Version information for the compiler

#### _static_ from_dict(data: dict[str, Any]) → [CompilerInfo](#algokit_utils.applications.app_spec.arc56.CompilerInfo)

### _class_ algokit_utils.applications.app_spec.arc56.Network

Network-specific application information.

#### app_id _: int_

The application ID on the network

#### _static_ from_dict(data: dict[str, Any]) → [Network](#algokit_utils.applications.app_spec.arc56.Network)

### _class_ algokit_utils.applications.app_spec.arc56.ScratchVariables

Information about scratch space variables.

#### slot _: int_

The scratch slot number

#### type _: str_

The type of the scratch variable

#### _static_ from_dict(data: dict[str, Any]) → [ScratchVariables](#algokit_utils.applications.app_spec.arc56.ScratchVariables)

### _class_ algokit_utils.applications.app_spec.arc56.Source

Source code for approval and clear programs.

#### approval _: str_

The base64 encoded approval program source

#### clear _: str_

The base64 encoded clear program source

#### _static_ from_dict(data: dict[str, Any]) → [Source](#algokit_utils.applications.app_spec.arc56.Source)

#### get_decoded_approval() → str

Get decoded approval program source.

- **Returns:**
  Decoded approval program source code

#### get_decoded_clear() → str

Get decoded clear program source.

- **Returns:**
  Decoded clear program source code

### _class_ algokit_utils.applications.app_spec.arc56.Global

Global state schema.

#### bytes _: int_

The number of byte slices in global state

#### ints _: int_

The number of integers in global state

#### _static_ from_dict(data: dict[str, Any]) → [Global](#algokit_utils.applications.app_spec.arc56.Global)

### _class_ algokit_utils.applications.app_spec.arc56.Local

Local state schema.

#### bytes _: int_

The number of byte slices in local state

#### ints _: int_

The number of integers in local state

#### _static_ from_dict(data: dict[str, Any]) → [Local](#algokit_utils.applications.app_spec.arc56.Local)

### _class_ algokit_utils.applications.app_spec.arc56.Schema

Application state schema.

#### global_state _: [Global](#algokit_utils.applications.app_spec.arc56.Global)_

The global state schema

#### local_state _: [Local](#algokit_utils.applications.app_spec.arc56.Local)_

The local state schema

#### _static_ from_dict(data: dict[str, Any]) → [Schema](#algokit_utils.applications.app_spec.arc56.Schema)

### _class_ algokit_utils.applications.app_spec.arc56.TemplateVariables

Template variable information.

#### type _: str_

The type of the template variable

#### value _: str | None_ _= None_

The optional value of the template variable

#### _static_ from_dict(data: dict[str, Any]) → [TemplateVariables](#algokit_utils.applications.app_spec.arc56.TemplateVariables)

### _class_ algokit_utils.applications.app_spec.arc56.EventArg

Event argument information.

#### type _: str_

The type of the event argument

#### desc _: str | None_ _= None_

The optional description of the argument

#### name _: str | None_ _= None_

The optional name of the argument

#### struct _: str | None_ _= None_

The optional struct type name

#### _static_ from_dict(data: dict[str, Any]) → [EventArg](#algokit_utils.applications.app_spec.arc56.EventArg)

### _class_ algokit_utils.applications.app_spec.arc56.Event

Event information.

#### args _: list[[EventArg](#algokit_utils.applications.app_spec.arc56.EventArg)]_

The list of event arguments

#### name _: str_

The name of the event

#### desc _: str | None_ _= None_

The optional description of the event

#### _static_ from_dict(data: dict[str, Any]) → [Event](#algokit_utils.applications.app_spec.arc56.Event)

### _class_ algokit_utils.applications.app_spec.arc56.Actions

Method actions information.

#### call _: list[[CallEnum](#algokit_utils.applications.app_spec.arc56.CallEnum)] | None_ _= None_

The optional list of allowed call actions

#### create _: list[[CreateEnum](#algokit_utils.applications.app_spec.arc56.CreateEnum)] | None_ _= None_

The optional list of allowed create actions

#### _static_ from_dict(data: dict[str, Any]) → [Actions](#algokit_utils.applications.app_spec.arc56.Actions)

### _class_ algokit_utils.applications.app_spec.arc56.DefaultValue

Default value information for method arguments.

#### data _: str_

The default value data

#### source _: Literal['box', 'global', 'local', 'literal', 'method']_

The source of the default value

#### type _: str | None_ _= None_

The optional type of the default value

#### _static_ from_dict(data: dict[str, Any]) → [DefaultValue](#algokit_utils.applications.app_spec.arc56.DefaultValue)

### _class_ algokit_utils.applications.app_spec.arc56.MethodArg

Method argument information.

#### type _: str_

The type of the argument

#### default_value _: [DefaultValue](#algokit_utils.applications.app_spec.arc56.DefaultValue) | None_ _= None_

The optional default value

#### desc _: str | None_ _= None_

The optional description

#### name _: str | None_ _= None_

The optional name

#### struct _: str | None_ _= None_

The optional struct type name

#### _static_ from_dict(data: dict[str, Any]) → [MethodArg](#algokit_utils.applications.app_spec.arc56.MethodArg)

### _class_ algokit_utils.applications.app_spec.arc56.Boxes

Box storage requirements.

#### key _: str_

The box key

#### read_bytes _: int_

The number of bytes to read

#### write_bytes _: int_

The number of bytes to write

#### app _: int | None_ _= None_

The optional application ID

#### _static_ from_dict(data: dict[str, Any]) → [Boxes](#algokit_utils.applications.app_spec.arc56.Boxes)

### _class_ algokit_utils.applications.app_spec.arc56.Recommendations

Method execution recommendations.

#### accounts _: list[str] | None_ _= None_

The optional list of accounts

#### apps _: list[int] | None_ _= None_

The optional list of applications

#### assets _: list[int] | None_ _= None_

The optional list of assets

#### boxes _: [Boxes](#algokit_utils.applications.app_spec.arc56.Boxes) | None_ _= None_

The optional box storage requirements

#### inner_transaction_count _: int | None_ _= None_

The optional inner transaction count

#### _static_ from_dict(data: dict[str, Any]) → [Recommendations](#algokit_utils.applications.app_spec.arc56.Recommendations)

### _class_ algokit_utils.applications.app_spec.arc56.Returns

Method return information.

#### type _: str_

The type of the return value

#### desc _: str | None_ _= None_

The optional description

#### struct _: str | None_ _= None_

The optional struct type name

#### _static_ from_dict(data: dict[str, Any]) → [Returns](#algokit_utils.applications.app_spec.arc56.Returns)

### _class_ algokit_utils.applications.app_spec.arc56.Method

Method information.

#### actions _: [Actions](#algokit_utils.applications.app_spec.arc56.Actions)_

The allowed actions

#### args _: list[[MethodArg](#algokit_utils.applications.app_spec.arc56.MethodArg)]_

The method arguments

#### name _: str_

The method name

#### returns _: [Returns](#algokit_utils.applications.app_spec.arc56.Returns)_

The return information

#### desc _: str | None_ _= None_

The optional description

#### events _: list[[Event](#algokit_utils.applications.app_spec.arc56.Event)] | None_ _= None_

The optional list of events

#### readonly _: bool | None_ _= None_

The optional readonly flag

#### recommendations _: [Recommendations](#algokit_utils.applications.app_spec.arc56.Recommendations) | None_ _= None_

The optional execution recommendations

#### to_abi_method() → algosdk.abi.Method

Convert to ABI method.

- **Raises:**
  **ValueError** – If underlying ABI method is not initialized
- **Returns:**
  ABI method

#### _static_ from_dict(data: dict[str, Any]) → [Method](#algokit_utils.applications.app_spec.arc56.Method)

### _class_ algokit_utils.applications.app_spec.arc56.PcOffsetMethod

Bases: `str`, `enum.Enum`

PC offset method types.

#### CBLOCKS _= 'cblocks'_

#### NONE _= 'none'_

### _class_ algokit_utils.applications.app_spec.arc56.SourceInfo

Source code location information.

#### pc _: list[int]_

The list of program counter values

#### error_message _: str | None_ _= None_

The optional error message

#### source _: str | None_ _= None_

The optional source code

#### teal _: int | None_ _= None_

The optional TEAL version

#### _static_ from_dict(data: dict[str, Any]) → [SourceInfo](#algokit_utils.applications.app_spec.arc56.SourceInfo)

### _class_ algokit_utils.applications.app_spec.arc56.StorageKey

Storage key information.

#### key _: str_

The storage key

#### key_type _: str_

The type of the key

#### value_type _: str_

The type of the value

#### desc _: str | None_ _= None_

The optional description

#### _static_ from_dict(data: dict[str, Any]) → [StorageKey](#algokit_utils.applications.app_spec.arc56.StorageKey)

### _class_ algokit_utils.applications.app_spec.arc56.StorageMap

Storage map information.

#### key_type _: str_

The type of the map keys

#### value_type _: str_

The type of the map values

#### desc _: str | None_ _= None_

The optional description

#### prefix _: str | None_ _= None_

The optional key prefix

#### _static_ from_dict(data: dict[str, Any]) → [StorageMap](#algokit_utils.applications.app_spec.arc56.StorageMap)

### _class_ algokit_utils.applications.app_spec.arc56.Keys

Storage keys for different storage types.

#### box _: dict[str, [StorageKey](#algokit_utils.applications.app_spec.arc56.StorageKey)]_

The box storage keys

#### global_state _: dict[str, [StorageKey](#algokit_utils.applications.app_spec.arc56.StorageKey)]_

The global state storage keys

#### local_state _: dict[str, [StorageKey](#algokit_utils.applications.app_spec.arc56.StorageKey)]_

The local state storage keys

#### _static_ from_dict(data: dict[str, Any]) → [Keys](#algokit_utils.applications.app_spec.arc56.Keys)

### _class_ algokit_utils.applications.app_spec.arc56.Maps

Storage maps for different storage types.

#### box _: dict[str, [StorageMap](#algokit_utils.applications.app_spec.arc56.StorageMap)]_

The box storage maps

#### global_state _: dict[str, [StorageMap](#algokit_utils.applications.app_spec.arc56.StorageMap)]_

The global state storage maps

#### local_state _: dict[str, [StorageMap](#algokit_utils.applications.app_spec.arc56.StorageMap)]_

The local state storage maps

#### _static_ from_dict(data: dict[str, Any]) → [Maps](#algokit_utils.applications.app_spec.arc56.Maps)

### _class_ algokit_utils.applications.app_spec.arc56.State

Application state information.

#### keys _: [Keys](#algokit_utils.applications.app_spec.arc56.Keys)_

The storage keys

#### maps _: [Maps](#algokit_utils.applications.app_spec.arc56.Maps)_

The storage maps

#### schema _: [Schema](#algokit_utils.applications.app_spec.arc56.Schema)_

The state schema

#### _static_ from_dict(data: dict[str, Any]) → [State](#algokit_utils.applications.app_spec.arc56.State)

### _class_ algokit_utils.applications.app_spec.arc56.ProgramSourceInfo

Program source information.

#### pc_offset_method _: [PcOffsetMethod](#algokit_utils.applications.app_spec.arc56.PcOffsetMethod)_

The PC offset method

#### source_info _: list[[SourceInfo](#algokit_utils.applications.app_spec.arc56.SourceInfo)]_

The list of source info entries

#### _static_ from_dict(data: dict[str, Any]) → [ProgramSourceInfo](#algokit_utils.applications.app_spec.arc56.ProgramSourceInfo)

### _class_ algokit_utils.applications.app_spec.arc56.SourceInfoModel

Source information for approval and clear programs.

#### approval _: [ProgramSourceInfo](#algokit_utils.applications.app_spec.arc56.ProgramSourceInfo)_

The approval program source info

#### clear _: [ProgramSourceInfo](#algokit_utils.applications.app_spec.arc56.ProgramSourceInfo)_

The clear program source info

#### _static_ from_dict(data: dict[str, Any]) → [SourceInfoModel](#algokit_utils.applications.app_spec.arc56.SourceInfoModel)

### _class_ algokit_utils.applications.app_spec.arc56.Arc56Contract

ARC-0056 application specification.

See [https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0056.md](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0056.md)

#### arcs _: list[int]_

The list of supported ARC version numbers

#### bare_actions _: [BareActions](#algokit_utils.applications.app_spec.arc56.BareActions)_

The bare call and create actions

#### methods _: list[[Method](#algokit_utils.applications.app_spec.arc56.Method)]_

The list of contract methods

#### name _: str_

The contract name

#### state _: [State](#algokit_utils.applications.app_spec.arc56.State)_

The contract state information

#### structs _: dict[str, list[[StructField](#algokit_utils.applications.app_spec.arc56.StructField)]]_

The contract struct definitions

#### byte_code _: [ByteCode](#algokit_utils.applications.app_spec.arc56.ByteCode) | None_ _= None_

The optional bytecode for approval and clear programs

#### compiler_info _: [CompilerInfo](#algokit_utils.applications.app_spec.arc56.CompilerInfo) | None_ _= None_

The optional compiler information

#### desc _: str | None_ _= None_

The optional contract description

#### events _: list[[Event](#algokit_utils.applications.app_spec.arc56.Event)] | None_ _= None_

The optional list of contract events

#### networks _: dict[str, [Network](#algokit_utils.applications.app_spec.arc56.Network)] | None_ _= None_

The optional network deployment information

#### scratch_variables _: dict[str, [ScratchVariables](#algokit_utils.applications.app_spec.arc56.ScratchVariables)] | None_ _= None_

The optional scratch variable information

#### source _: [Source](#algokit_utils.applications.app_spec.arc56.Source) | None_ _= None_

The optional source code

#### source_info _: [SourceInfoModel](#algokit_utils.applications.app_spec.arc56.SourceInfoModel) | None_ _= None_

The optional source code information

#### template_variables _: dict[str, [TemplateVariables](#algokit_utils.applications.app_spec.arc56.TemplateVariables)] | None_ _= None_

The optional template variable information

#### _static_ from_dict(application_spec: dict) → [Arc56Contract](#algokit_utils.applications.app_spec.arc56.Arc56Contract)

Create Arc56Contract from dictionary.

- **Parameters:**
  **application_spec** – Dictionary containing contract specification
- **Returns:**
  Arc56Contract instance

#### _static_ from_json(application_spec: str) → [Arc56Contract](#algokit_utils.applications.app_spec.arc56.Arc56Contract)

#### _static_ from_arc32(arc32_application_spec: str | [algokit_utils.applications.app_spec.arc32.Arc32Contract](/reference/algokit-utils-py/api/applications/app_spec/arc32/#algokit_utils.applications.app_spec.arc32.Arc32Contract)) → [Arc56Contract](#algokit_utils.applications.app_spec.arc56.Arc56Contract)

#### _static_ get_abi_struct_from_abi_tuple(decoded_tuple: Any, struct_fields: list[[StructField](#algokit_utils.applications.app_spec.arc56.StructField)], structs: dict[str, list[[StructField](#algokit_utils.applications.app_spec.arc56.StructField)]]) → dict[str, Any]

#### to_json(indent: int | None = None) → str

#### dictify() → dict

#### get_arc56_method(method_name_or_signature: str) → [Method](#algokit_utils.applications.app_spec.arc56.Method)
