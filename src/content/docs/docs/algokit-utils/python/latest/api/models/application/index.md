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

#### key*raw *: bytes\_

The key of the state as raw bytes

#### key*base64 *: str\_

The key of the state

#### value*raw *: bytes | None\_

The value of the state as raw bytes

#### value*base64 *: str | None\_

The value of the state as base64 encoded string

#### value _: str | int_

The value of the state as a string or integer

### _class_ algokit_utils.models.application.AppInformation

#### app*id *: int\_

The ID of the application

#### app*address *: str\_

The address of the application

#### approval*program *: bytes\_

The approval program

#### clear*state_program *: bytes\_

The clear state program

#### creator _: str_

The creator of the application

#### global*state *: dict[str, [AppState](#algokit_utils.models.application.AppState)]\_

The global state of the application

#### local*ints *: int\_

The number of local ints

#### local*byte_slices *: int\_

The number of local byte slices

#### global*ints *: int\_

The number of global ints

#### global*byte_slices *: int\_

The number of global byte slices

#### extra*program_pages *: int | None\_

The number of extra program pages

### _class_ algokit_utils.models.application.CompiledTeal

The compiled teal code

#### teal _: str_

The teal code

#### compiled _: str_

The compiled teal code

#### compiled*hash *: str\_

The compiled hash

#### compiled*base64_to_bytes *: bytes\_

The compiled base64 to bytes

#### source*map *: algosdk.source*map.SourceMap | None*

### _class_ algokit_utils.models.application.AppCompilationResult

The compiled teal code

#### compiled*approval *: [CompiledTeal](#algokit_utils.models.application.CompiledTeal)\_

The compiled approval program

#### compiled*clear *: [CompiledTeal](#algokit_utils.models.application.CompiledTeal)\_

The compiled clear state program

### _class_ algokit_utils.models.application.AppSourceMaps

The source maps for the application

#### approval*source_map *: algosdk.source*map.SourceMap | None* _= None_

The source map for the approval program

#### clear*source_map *: algosdk.source*map.SourceMap | None* _= None_

The source map for the clear state program
