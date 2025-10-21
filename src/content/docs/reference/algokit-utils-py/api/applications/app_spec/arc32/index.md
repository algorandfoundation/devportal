---
title: applications.app_spec.arc32
sidebar:
  label: Index
  order: 0
---

## Attributes

| [`AppSpecStateDict`](#algokit_utils.applications.app_spec.arc32.AppSpecStateDict)         | Type defining Application Specification state entries                                                           |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`OnCompleteActionName`](#algokit_utils.applications.app_spec.arc32.OnCompleteActionName) | String literals representing on completion transaction types                                                    |
| [`MethodConfigDict`](#algokit_utils.applications.app_spec.arc32.MethodConfigDict)         | Dictionary of dict[OnCompletionActionName, CallConfig] representing allowed actions for each on completion type |
| [`DefaultArgumentType`](#algokit_utils.applications.app_spec.arc32.DefaultArgumentType)   | Literal values describing the types of default argument sources                                                 |
| [`StateDict`](#algokit_utils.applications.app_spec.arc32.StateDict)                       |                                                                                                                 |

## Classes

| [`CallConfig`](#algokit_utils.applications.app_spec.arc32.CallConfig)                   | Describes the type of calls a method can be used for based on {py:class}\`algosdk.transaction.OnComplete\` type |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`StructArgDict`](#algokit_utils.applications.app_spec.arc32.StructArgDict)             | dict() -> new empty dictionary                                                                                  |
| [`DefaultArgumentDict`](#algokit_utils.applications.app_spec.arc32.DefaultArgumentDict) | DefaultArgument is a container for any arguments that may                                                       |
| [`MethodHints`](#algokit_utils.applications.app_spec.arc32.MethodHints)                 | MethodHints provides hints to the caller about how to call the method                                           |
| [`Arc32Contract`](#algokit_utils.applications.app_spec.arc32.Arc32Contract)             | ARC-0032 application specification                                                                              |

## Module Contents

### _type_ algokit_utils.applications.app_spec.arc32.AppSpecStateDict _= dict[str, dict[str, dict]]_

Type defining Application Specification state entries

### _class_ algokit_utils.applications.app_spec.arc32.CallConfig

Bases: `enum.IntFlag`

Describes the type of calls a method can be used for based on {py:class}\`algosdk.transaction.OnComplete\` type

#### NEVER _= 0_

Never handle the specified on completion type

#### CALL _= 1_

Only handle the specified on completion type for application calls

#### CREATE _= 2_

Only handle the specified on completion type for application create calls

#### ALL _= 3_

Handle the specified on completion type for both create and normal application calls

### _class_ algokit_utils.applications.app_spec.arc32.StructArgDict

Bases: `TypedDict`

dict() -> new empty dictionary
dict(mapping) -> new dictionary initialized from a mapping object’s

> (key, value) pairs

dict(iterable) -> new dictionary initialized as if via:
: d = {}
for k, v in iterable:

{' '}
<br />> d[k] = v

dict(

```
**
```

kwargs) -> new dictionary initialized with the name=value pairs
: in the keyword argument list. For example: dict(one=1, two=2)

#### name _: str_

#### elements _: list[list[str]]_

### _type_ algokit_utils.applications.app_spec.arc32.OnCompleteActionName _= Literal['no_op', 'opt_in', 'close_out', 'clear_state', 'update_application', 'delete_application']_

String literals representing on completion transaction types

### _type_ algokit_utils.applications.app_spec.arc32.MethodConfigDict _= dict[OnCompleteActionName, [CallConfig](#algokit_utils.applications.app_spec.arc32.CallConfig)]_

Dictionary of dict[OnCompletionActionName, CallConfig] representing allowed actions for each on completion type

### _type_ algokit_utils.applications.app_spec.arc32.DefaultArgumentType _= Literal['abi-method', 'local-state', 'global-state', 'constant']_

Literal values describing the types of default argument sources

### _class_ algokit_utils.applications.app_spec.arc32.DefaultArgumentDict

Bases: `TypedDict`

DefaultArgument is a container for any arguments that may
be resolved prior to calling some target method

#### source _: DefaultArgumentType_

#### data _: int | str | bytes | algosdk.abi.method.MethodDict_

### algokit_utils.applications.app_spec.arc32.StateDict

### _class_ algokit_utils.applications.app_spec.arc32.MethodHints

MethodHints provides hints to the caller about how to call the method

#### read_only _: bool_ _= False_

#### structs _: dict[str, [StructArgDict](#algokit_utils.applications.app_spec.arc32.StructArgDict)]_

#### default_arguments _: dict[str, [DefaultArgumentDict](#algokit_utils.applications.app_spec.arc32.DefaultArgumentDict)]_

#### call_config _: MethodConfigDict_

#### empty() → bool

#### dictify() → dict[str, Any]

#### _static_ undictify(data: dict[str, Any]) → [MethodHints](#algokit_utils.applications.app_spec.arc32.MethodHints)

### _class_ algokit_utils.applications.app_spec.arc32.Arc32Contract

ARC-0032 application specification

See <[https://github.com/algorandfoundation/ARCs/pull/150](https://github.com/algorandfoundation/ARCs/pull/150)>

#### approval_program _: str_

#### clear_program _: str_

#### contract _: algosdk.abi.Contract_

#### hints _: dict[str, [MethodHints](#algokit_utils.applications.app_spec.arc32.MethodHints)]_

#### schema _: StateDict_

#### global_state_schema _: algosdk.transaction.StateSchema_

#### local_state_schema _: algosdk.transaction.StateSchema_

#### bare_call_config _: MethodConfigDict_

#### dictify() → dict

#### to_json(indent: int | None = None) → str

#### _static_ from_json(application_spec: str) → [Arc32Contract](#algokit_utils.applications.app_spec.arc32.Arc32Contract)

#### export(directory: pathlib.Path | str | None = None) → None

Write out the artifacts generated by the application to disk.

Writes the approval program, clear program, contract specification and application specification
to files in the specified directory.

- **Parameters:**
  **directory** – Path to the directory where the artifacts should be written. If not specified,
  uses the current working directory
