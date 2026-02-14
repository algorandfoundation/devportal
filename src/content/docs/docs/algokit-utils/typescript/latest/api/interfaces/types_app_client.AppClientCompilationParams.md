---
title: AppClientCompilationParams
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/app-client](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/) / AppClientCompilationParams

[types/app-client](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/).AppClientCompilationParams

## Table of contents

### Properties

- [deletable](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientcompilationparams/#deletable)
- [deployTimeParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientcompilationparams/#deploytimeparams)
- [updatable](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientcompilationparams/#updatable)

## Properties

### deletable

• `Optional` **deletable**: `boolean`

Whether or not the contract should have deploy-time permanence control set, undefined = ignore

#### Defined in

[src/types/app-client.ts:232](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L232)

---

### deployTimeParams

• `Optional` **deployTimeParams**: [`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_apptealtemplateparams/)

Any deploy-time parameters to replace in the TEAL code

#### Defined in

[src/types/app-client.ts:228](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L228)

---

### updatable

• `Optional` **updatable**: `boolean`

Whether or not the contract should have deploy-time immutability control set, undefined = ignore

#### Defined in

[src/types/app-client.ts:230](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L230)
