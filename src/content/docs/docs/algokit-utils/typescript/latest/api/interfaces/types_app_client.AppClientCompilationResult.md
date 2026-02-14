---
title: AppClientCompilationResult
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/app-client](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/) / AppClientCompilationResult



[types/app-client](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/).AppClientCompilationResult

The result of asking an `AppClient` to compile a program.

Always contains the compiled bytecode, and may contain the result of compiling TEAL (including sourcemap) if it was available.

## Hierarchy

- `Partial`\<[`AppCompilationResult`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappcompilationresult/)\>

  ↳ **`AppClientCompilationResult`**

## Table of contents

### Properties

- [approvalProgram](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientcompilationresult/#approvalprogram)
- [clearStateProgram](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientcompilationresult/#clearstateprogram)
- [compiledApproval](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientcompilationresult/#compiledapproval)
- [compiledClear](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientcompilationresult/#compiledclear)

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

• `Optional` **compiledApproval**: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcompiledteal/)

The result of compiling the approval program

#### Inherited from

Partial.compiledApproval

#### Defined in

[src/types/app.ts:335](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L335)

___

### compiledClear

• `Optional` **compiledClear**: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcompiledteal/)

The result of compiling the clear state program

#### Inherited from

Partial.compiledClear

#### Defined in

[src/types/app.ts:337](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L337)