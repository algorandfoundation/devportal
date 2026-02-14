---
title: models.application
sidebar:
  label: Index
  order: 0
---

## Classes

| [`AppState`](#algokit_utils.models.application.AppState)                         |                                     |
| -------------------------------------------------------------------------------- | ----------------------------------- |
| [`AppInformation`](#algokit_utils.models.application.AppInformation)             |                                     |
| [`CompiledTeal`](#algokit_utils.models.application.CompiledTeal)                 | The compiled teal code              |
| [`AppCompilationResult`](#algokit_utils.models.application.AppCompilationResult) | The compiled teal code              |
| [`AppSourceMaps`](#algokit_utils.models.application.AppSourceMaps)               | The source maps for the application |

## Module Contents

### _class_ algokit_utils.models.application.AppState

#### key_raw _: bytes_

The key of the state as raw bytes

#### key_base64 _: str_

The key of the state

#### value_raw _: bytes | None_

The value of the state as raw bytes

#### value_base64 _: str | None_

The value of the state as base64 encoded string

#### value _: str | int_

The value of the state as a string or integer

### _class_ algokit_utils.models.application.AppInformation

#### app_id _: int_

The ID of the application

#### app_address _: str_

The address of the application

#### approval_program _: bytes_

The approval program

#### clear_state_program _: bytes_

The clear state program

#### creator _: str_

The creator of the application

#### global_state _: dict[str, [AppState](#algokit_utils.models.application.AppState)]_

The global state of the application

#### local_ints _: int_

The number of local ints

#### local_byte_slices _: int_

The number of local byte slices

#### global_ints _: int_

The number of global ints

#### global_byte_slices _: int_

The number of global byte slices

#### extra_program_pages _: int | None_

The number of extra program pages

### _class_ algokit_utils.models.application.CompiledTeal

The compiled teal code

#### teal _: str_

The teal code

#### compiled _: str_

The compiled teal code

#### compiled_hash _: str_

The compiled hash

#### compiled_base64_to_bytes _: bytes_

The compiled base64 to bytes

#### source_map _: algosdk.source_map.SourceMap | None_

### _class_ algokit_utils.models.application.AppCompilationResult

The compiled teal code

#### compiled_approval _: [CompiledTeal](#algokit_utils.models.application.CompiledTeal)_

The compiled approval program

#### compiled_clear _: [CompiledTeal](#algokit_utils.models.application.CompiledTeal)_

The compiled clear state program

### _class_ algokit_utils.models.application.AppSourceMaps

The source maps for the application

#### approval_source_map _: algosdk.source_map.SourceMap | None_ _= None_

The source map for the approval program

#### clear_source_map _: algosdk.source_map.SourceMap | None_ _= None_

The source map for the clear state program
