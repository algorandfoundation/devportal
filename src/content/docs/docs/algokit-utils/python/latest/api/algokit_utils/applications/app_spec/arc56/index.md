---
title: "algokit_utils.applications.app_spec.arc56"
---

<div class="api-ref">

## Classes

| [`StructField`](#class-structfield)             | Represents a field in a struct type.                                   |
|-------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`CallEnum`](#class-callenum)                   | Enum representing different call types for application transactions.   |
| [`CreateEnum`](#class-createenum)               | Enum representing different create types for application transactions. |
| [`BareActions`](#class-bareactions)             | Represents bare call and create actions for an application.            |
| [`ByteCode`](#class-bytecode)                   | Represents the approval and clear program bytecode.                    |
| [`Compiler`](#class-compiler)                   | Enum representing different compiler types.                            |
| [`CompilerVersion`](#class-compilerversion)     | Represents compiler version information.                               |
| [`CompilerInfo`](#class-compilerinfo)           | Information about the compiler used.                                   |
| [`Network`](#class-network)                     | Network-specific application information.                              |
| [`ScratchVariables`](#class-scratchvariables)   | Information about scratch space variables.                             |
| [`Source`](#class-source)                       | Source code for approval and clear programs.                           |
| [`Global`](#class-global)                       | Global state schema.                                                   |
| [`Local`](#class-local)                         | Local state schema.                                                    |
| [`Schema`](#class-schema)                       | Application state schema.                                              |
| [`TemplateVariables`](#class-templatevariables) | Template variable information.                                         |
| [`EventArg`](#class-eventarg)                   | Event argument information.                                            |
| [`Event`](#class-event)                         | Event information.                                                     |
| [`Actions`](#class-actions)                     | Method actions information.                                            |
| [`DefaultValue`](#class-defaultvalue)           | Default value information for method arguments.                        |
| [`MethodArg`](#class-methodarg)                 | Method argument information.                                           |
| [`Boxes`](#class-boxes)                         | Box storage requirements.                                              |
| [`Recommendations`](#class-recommendations)     | Method execution recommendations.                                      |
| [`Returns`](#class-returns)                     | Method return information.                                             |
| [`Method`](#class-method)                       | Method information.                                                    |
| [`PcOffsetMethod`](#class-pcoffsetmethod)       | PC offset method types.                                                |
| [`SourceInfo`](#class-sourceinfo)               | Source code location information.                                      |
| [`StorageKey`](#class-storagekey)               | Storage key information.                                               |
| [`StorageMap`](#class-storagemap)               | Storage map information.                                               |
| [`Keys`](#class-keys)                           | Storage keys for different storage types.                              |
| [`Maps`](#class-maps)                           | Storage maps for different storage types.                              |
| [`State`](#class-state)                         | Application state information.                                         |
| [`ProgramSourceInfo`](#class-programsourceinfo) | Program source information.                                            |
| [`SourceInfoModel`](#class-sourceinfomodel)     | Source information for approval and clear programs.                    |
| [`Arc56Contract`](#class-arc56contract)         | ARC-0056 application specification.                                    |

## Module Contents

### *class* StructField

Represents a field in a struct type.

#### name *: str*

The name of the struct field

#### type *: list[[StructField](#class-structfield)] | str*

The type of the struct field, either a string or list of StructFields

#### *static* from_dict(data: dict[str, Any]) → [StructField](#class-structfield)

### *class* CallEnum

Bases: `str`, `enum.Enum`

Enum representing different call types for application transactions.

#### CLEAR_STATE *= 'ClearState'*

#### CLOSE_OUT *= 'CloseOut'*

#### DELETE_APPLICATION *= 'DeleteApplication'*

#### NO_OP *= 'NoOp'*

#### OPT_IN *= 'OptIn'*

#### UPDATE_APPLICATION *= 'UpdateApplication'*

### *class* CreateEnum

Bases: `str`, `enum.Enum`

Enum representing different create types for application transactions.

#### DELETE_APPLICATION *= 'DeleteApplication'*

#### NO_OP *= 'NoOp'*

#### OPT_IN *= 'OptIn'*

### *class* BareActions

Represents bare call and create actions for an application.

#### call *: list[[CallEnum](#class-callenum)]*

The list of allowed call actions

#### create *: list[[CreateEnum](#class-createenum)]*

The list of allowed create actions

#### *static* from_dict(data: dict[str, Any]) → [BareActions](#class-bareactions)

### *class* ByteCode

Represents the approval and clear program bytecode.

#### approval *: str*

The base64 encoded approval program bytecode

#### clear *: str*

The base64 encoded clear program bytecode

#### *static* from_dict(data: dict[str, Any]) → [ByteCode](#class-bytecode)

### *class* Compiler

Bases: `str`, `enum.Enum`

Enum representing different compiler types.

#### ALGOD *= 'algod'*

#### PUYA *= 'puya'*

### *class* CompilerVersion

Represents compiler version information.

#### commit_hash *: str | None* *= None*

The git commit hash of the compiler

#### major *: int | None* *= None*

The major version number

#### minor *: int | None* *= None*

The minor version number

#### patch *: int | None* *= None*

The patch version number

#### *static* from_dict(data: dict[str, Any]) → [CompilerVersion](#class-compilerversion)

### *class* CompilerInfo

Information about the compiler used.

#### compiler *: [Compiler](#class-compiler)*

The type of compiler used

#### compiler_version *: [CompilerVersion](#class-compilerversion)*

Version information for the compiler

#### *static* from_dict(data: dict[str, Any]) → [CompilerInfo](#class-compilerinfo)

### *class* Network

Network-specific application information.

#### app_id *: int*

The application ID on the network

#### *static* from_dict(data: dict[str, Any]) → [Network](#class-network)

### *class* ScratchVariables

Information about scratch space variables.

#### slot *: int*

The scratch slot number

#### type *: str*

The type of the scratch variable

#### *static* from_dict(data: dict[str, Any]) → [ScratchVariables](#class-scratchvariables)

### *class* Source

Source code for approval and clear programs.

#### approval *: str*

The base64 encoded approval program source

#### clear *: str*

The base64 encoded clear program source

#### *static* from_dict(data: dict[str, Any]) → [Source](#class-source)

#### get_decoded_approval() → str

Get decoded approval program source.

* **Returns:**
  Decoded approval program source code

#### get_decoded_clear() → str

Get decoded clear program source.

* **Returns:**
  Decoded clear program source code

### *class* Global

Global state schema.

#### bytes *: int*

The number of byte slices in global state

#### ints *: int*

The number of integers in global state

#### *static* from_dict(data: dict[str, Any]) → [Global](#class-global)

### *class* Local

Local state schema.

#### bytes *: int*

The number of byte slices in local state

#### ints *: int*

The number of integers in local state

#### *static* from_dict(data: dict[str, Any]) → [Local](#class-local)

### *class* Schema

Application state schema.

#### global_state *: [Global](#class-global)*

The global state schema

#### local_state *: [Local](#class-local)*

The local state schema

#### *static* from_dict(data: dict[str, Any]) → [Schema](#class-schema)

### *class* TemplateVariables

Template variable information.

#### type *: str*

The type of the template variable

#### value *: str | None* *= None*

The optional value of the template variable

#### *static* from_dict(data: dict[str, Any]) → [TemplateVariables](#class-templatevariables)

### *class* EventArg

Event argument information.

#### type *: str*

The type of the event argument

#### desc *: str | None* *= None*

The optional description of the argument

#### name *: str | None* *= None*

The optional name of the argument

#### struct *: str | None* *= None*

The optional struct type name

#### *static* from_dict(data: dict[str, Any]) → [EventArg](#class-eventarg)

### *class* Event

Event information.

#### args *: list[[EventArg](#class-eventarg)]*

The list of event arguments

#### name *: str*

The name of the event

#### desc *: str | None* *= None*

The optional description of the event

#### *static* from_dict(data: dict[str, Any]) → [Event](#class-event)

### *class* Actions

Method actions information.

#### call *: list[[CallEnum](#class-callenum)] | None* *= None*

The optional list of allowed call actions

#### create *: list[[CreateEnum](#class-createenum)] | None* *= None*

The optional list of allowed create actions

#### *static* from_dict(data: dict[str, Any]) → [Actions](#class-actions)

### *class* DefaultValue

Default value information for method arguments.

#### data *: str*

The default value data

#### source *: Literal['box', 'global', 'local', 'literal', 'method']*

The source of the default value

#### type *: str | None* *= None*

The optional type of the default value

#### *static* from_dict(data: dict[str, Any]) → [DefaultValue](#class-defaultvalue)

### *class* MethodArg

Method argument information.

#### type *: str*

The type of the argument

#### default_value *: [DefaultValue](#class-defaultvalue) | None* *= None*

The optional default value

#### desc *: str | None* *= None*

The optional description

#### name *: str | None* *= None*

The optional name

#### struct *: str | None* *= None*

The optional struct type name

#### *static* from_dict(data: dict[str, Any]) → [MethodArg](#class-methodarg)

### *class* Boxes

Box storage requirements.

#### key *: str*

The box key

#### read_bytes *: int*

The number of bytes to read

#### write_bytes *: int*

The number of bytes to write

#### app *: int | None* *= None*

The optional application ID

#### *static* from_dict(data: dict[str, Any]) → [Boxes](#class-boxes)

### *class* Recommendations

Method execution recommendations.

#### accounts *: list[str] | None* *= None*

The optional list of accounts

#### apps *: list[int] | None* *= None*

The optional list of applications

#### assets *: list[int] | None* *= None*

The optional list of assets

#### boxes *: [Boxes](#class-boxes) | None* *= None*

The optional box storage requirements

#### inner_transaction_count *: int | None* *= None*

The optional inner transaction count

#### *static* from_dict(data: dict[str, Any]) → [Recommendations](#class-recommendations)

### *class* Returns

Method return information.

#### type *: str*

The type of the return value

#### desc *: str | None* *= None*

The optional description

#### struct *: str | None* *= None*

The optional struct type name

#### *static* from_dict(data: dict[str, Any]) → [Returns](#class-returns)

### *class* Method

Method information.

#### actions *: [Actions](#class-actions)*

The allowed actions

#### args *: list[[MethodArg](#class-methodarg)]*

The method arguments

#### name *: str*

The method name

#### returns *: [Returns](#class-returns)*

The return information

#### desc *: str | None* *= None*

The optional description

#### events *: list[[Event](#class-event)] | None* *= None*

The optional list of events

#### readonly *: bool | None* *= None*

The optional readonly flag

#### recommendations *: [Recommendations](#class-recommendations) | None* *= None*

The optional execution recommendations

#### to_abi_method() → algosdk.abi.Method

Convert to ABI method.

* **Raises:**
  **ValueError** – If underlying ABI method is not initialized
* **Returns:**
  ABI method

#### *static* from_dict(data: dict[str, Any]) → [Method](#class-method)

### *class* PcOffsetMethod

Bases: `str`, `enum.Enum`

PC offset method types.

#### CBLOCKS *= 'cblocks'*

#### NONE *= 'none'*

### *class* SourceInfo

Source code location information.

#### pc *: list[int]*

The list of program counter values

#### error_message *: str | None* *= None*

The optional error message

#### source *: str | None* *= None*

The optional source code

#### teal *: int | None* *= None*

The optional TEAL version

#### *static* from_dict(data: dict[str, Any]) → [SourceInfo](#class-sourceinfo)

### *class* StorageKey

Storage key information.

#### key *: str*

The storage key

#### key_type *: str*

The type of the key

#### value_type *: str*

The type of the value

#### desc *: str | None* *= None*

The optional description

#### *static* from_dict(data: dict[str, Any]) → [StorageKey](#class-storagekey)

### *class* StorageMap

Storage map information.

#### key_type *: str*

The type of the map keys

#### value_type *: str*

The type of the map values

#### desc *: str | None* *= None*

The optional description

#### prefix *: str | None* *= None*

The optional key prefix

#### *static* from_dict(data: dict[str, Any]) → [StorageMap](#class-storagemap)

### *class* Keys

Storage keys for different storage types.

#### box *: dict[str, [StorageKey](#class-storagekey)]*

The box storage keys

#### global_state *: dict[str, [StorageKey](#class-storagekey)]*

The global state storage keys

#### local_state *: dict[str, [StorageKey](#class-storagekey)]*

The local state storage keys

#### *static* from_dict(data: dict[str, Any]) → [Keys](#class-keys)

### *class* Maps

Storage maps for different storage types.

#### box *: dict[str, [StorageMap](#class-storagemap)]*

The box storage maps

#### global_state *: dict[str, [StorageMap](#class-storagemap)]*

The global state storage maps

#### local_state *: dict[str, [StorageMap](#class-storagemap)]*

The local state storage maps

#### *static* from_dict(data: dict[str, Any]) → [Maps](#class-maps)

### *class* State

Application state information.

#### keys *: [Keys](#class-keys)*

The storage keys

#### maps *: [Maps](#class-maps)*

The storage maps

#### schema *: [Schema](#class-schema)*

The state schema

#### *static* from_dict(data: dict[str, Any]) → [State](#class-state)

### *class* ProgramSourceInfo

Program source information.

#### pc_offset_method *: [PcOffsetMethod](#class-pcoffsetmethod)*

The PC offset method

#### source_info *: list[[SourceInfo](#class-sourceinfo)]*

The list of source info entries

#### *static* from_dict(data: dict[str, Any]) → [ProgramSourceInfo](#class-programsourceinfo)

### *class* SourceInfoModel

Source information for approval and clear programs.

#### approval *: [ProgramSourceInfo](#class-programsourceinfo)*

The approval program source info

#### clear *: [ProgramSourceInfo](#class-programsourceinfo)*

The clear program source info

#### *static* from_dict(data: dict[str, Any]) → [SourceInfoModel](#class-sourceinfomodel)

### *class* Arc56Contract

ARC-0056 application specification.

See [https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0056.md](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0056.md)

#### arcs *: list[int]*

The list of supported ARC version numbers

#### bare_actions *: [BareActions](#class-bareactions)*

The bare call and create actions

#### methods *: list[[Method](#class-method)]*

The list of contract methods

#### name *: str*

The contract name

#### state *: [State](#class-state)*

The contract state information

#### structs *: dict[str, list[[StructField](#class-structfield)]]*

The contract struct definitions

#### byte_code *: [ByteCode](#class-bytecode) | None* *= None*

The optional bytecode for approval and clear programs

#### compiler_info *: [CompilerInfo](#class-compilerinfo) | None* *= None*

The optional compiler information

#### desc *: str | None* *= None*

The optional contract description

#### events *: list[[Event](#class-event)] | None* *= None*

The optional list of contract events

#### networks *: dict[str, [Network](#class-network)] | None* *= None*

The optional network deployment information

#### scratch_variables *: dict[str, [ScratchVariables](#class-scratchvariables)] | None* *= None*

The optional scratch variable information

#### source *: [Source](#class-source) | None* *= None*

The optional source code

#### source_info *: [SourceInfoModel](#class-sourceinfomodel) | None* *= None*

The optional source code information

#### template_variables *: dict[str, [TemplateVariables](#class-templatevariables)] | None* *= None*

The optional template variable information

#### *static* from_dict(application_spec: dict) → [Arc56Contract](#class-arc56contract)

Create Arc56Contract from dictionary.

* **Parameters:**
  **application_spec** – Dictionary containing contract specification
* **Returns:**
  Arc56Contract instance

#### *static* from_json(application_spec: str) → [Arc56Contract](#class-arc56contract)

#### *static* from_arc32(arc32_application_spec: str | [Arc32Contract](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc32/#class-arc32contract)) → [Arc56Contract](#class-arc56contract)

#### *static* get_abi_struct_from_abi_tuple(decoded_tuple: Any, struct_fields: list[[StructField](#class-structfield)], structs: dict[str, list[[StructField](#class-structfield)]]) → dict[str, Any]

#### to_json(indent: int | None = None) → str

#### dictify() → dict

#### get_arc56_method(method_name_or_signature: str) → [Method](#class-method)


</div>
