---
title: AppClientCompilationResult
slug: reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcompilationresult
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/) / AppClientCompilationResult



[types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/).AppClientCompilationResult

The result of asking an `AppClient` to compile a program.

Always contains the compiled bytecode, and may contain the result of compiling TEAL (including sourcemap) if it was available.

## Hierarchy

- `Partial`\<[`AppCompilationResult`](/reference/algokit-utils-ts/api/interfaces/types_appappcompilationresult/)\>

  ↳ **`AppClientCompilationResult`**

## Table of contents

### Properties

- [approvalProgram](#approvalprogram)
- [clearStateProgram](#clearstateprogram)
- [compiledApproval](#compiledapproval)
- [compiledClear](#compiledclear)

## Properties

### approvalProgram

• **approvalProgram**: `Uint8Array`

The compiled bytecode of the approval program, ready to deploy to algod

#### Defined in

[src/types/app-client.ts:285](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L285)

___

### clearStateProgram

• **clearStateProgram**: `Uint8Array`

The compiled bytecode of the clear state program, ready to deploy to algod

#### Defined in

[src/types/app-client.ts:287](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L287)

___

### compiledApproval

• `Optional` **compiledApproval**: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/)

The result of compiling the approval program

#### Inherited from

Partial.compiledApproval

#### Defined in

[src/types/app.ts:335](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L335)

___

### compiledClear

• `Optional` **compiledClear**: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/)

The result of compiling the clear state program

#### Inherited from

Partial.compiledClear

#### Defined in

[src/types/app.ts:337](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L337)