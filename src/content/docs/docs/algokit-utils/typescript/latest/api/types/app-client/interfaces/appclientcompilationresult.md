---
editUrl: false
next: false
prev: false
title: "AppClientCompilationResult"
---

Defined in: [src/types/app-client.ts:283](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L283)

The result of asking an `AppClient` to compile a program.

Always contains the compiled bytecode, and may contain the result of compiling TEAL (including sourcemap) if it was available.

## Extends

- `Partial`\<[`AppCompilationResult`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appcompilationresult/)\>

## Properties

### approvalProgram

> **approvalProgram**: `Uint8Array`

Defined in: [src/types/app-client.ts:285](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L285)

The compiled bytecode of the approval program, ready to deploy to algod

***

### clearStateProgram

> **clearStateProgram**: `Uint8Array`

Defined in: [src/types/app-client.ts:287](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L287)

The compiled bytecode of the clear state program, ready to deploy to algod

***

### compiledApproval?

> `optional` **compiledApproval?**: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/)

Defined in: [src/types/app.ts:335](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L335)

The result of compiling the approval program

#### Inherited from

[`AppCompilationResult`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appcompilationresult/).[`compiledApproval`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appcompilationresult/#compiledapproval)

***

### compiledClear?

> `optional` **compiledClear?**: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/)

Defined in: [src/types/app.ts:337](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L337)

The result of compiling the clear state program

#### Inherited from

[`AppCompilationResult`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appcompilationresult/).[`compiledClear`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appcompilationresult/#compiledclear)
