---
title: "algokit_utils.models.application"
---

<div class="api-ref">

## Classes

| [`AppState`](#class-appstate)                         |                                     |
|----------------------------------------------------------------------------------|-------------------------------------|
| [`AppInformation`](#class-appinformation)             |                                     |
| [`CompiledTeal`](#class-compiledteal)                 | The compiled teal code              |
| [`AppCompilationResult`](#class-appcompilationresult) | The compiled teal code              |
| [`AppSourceMaps`](#class-appsourcemaps)               | The source maps for the application |

## Module Contents

### *class* AppState

#### key_raw *: bytes*

The key of the state as raw bytes

#### key_base64 *: str*

The key of the state

#### value_raw *: bytes | None*

The value of the state as raw bytes

#### value_base64 *: str | None*

The value of the state as base64 encoded string

#### value *: str | int*

The value of the state as a string or integer

### *class* AppInformation

#### app_id *: int*

The ID of the application

#### app_address *: str*

The address of the application

#### approval_program *: bytes*

The approval program

#### clear_state_program *: bytes*

The clear state program

#### creator *: str*

The creator of the application

#### global_state *: dict[str, [AppState](#class-appstate)]*

The global state of the application

#### local_ints *: int*

The number of local ints

#### local_byte_slices *: int*

The number of local byte slices

#### global_ints *: int*

The number of global ints

#### global_byte_slices *: int*

The number of global byte slices

#### extra_program_pages *: int | None*

The number of extra program pages

### *class* CompiledTeal

The compiled teal code

#### teal *: str*

The teal code

#### compiled *: str*

The compiled teal code

#### compiled_hash *: str*

The compiled hash

#### compiled_base64_to_bytes *: bytes*

The compiled base64 to bytes

#### source_map *: algosdk.source_map.SourceMap | None*

### *class* AppCompilationResult

The compiled teal code

#### compiled_approval *: [CompiledTeal](#class-compiledteal)*

The compiled approval program

#### compiled_clear *: [CompiledTeal](#class-compiledteal)*

The compiled clear state program

### *class* AppSourceMaps

The source maps for the application

#### approval_source_map *: algosdk.source_map.SourceMap | None* *= None*

The source map for the approval program

#### clear_source_map *: algosdk.source_map.SourceMap | None* *= None*

The source map for the clear state program


</div>
