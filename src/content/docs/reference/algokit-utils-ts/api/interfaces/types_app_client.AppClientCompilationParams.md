---
title: AppClientCompilationParams
slug: reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcompilationparams
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/) / AppClientCompilationParams

[types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/).AppClientCompilationParams

## Table of contents

### Properties

- [deletable](#deletable)
- [deployTimeParams](#deploytimeparams)
- [updatable](#updatable)

## Properties

### deletable

• `Optional` **deletable**: `boolean`

Whether or not the contract should have deploy-time permanence control set, undefined = ignore

#### Defined in

[src/types/app-client.ts:232](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L232)

---

### deployTimeParams

• `Optional` **deployTimeParams**: [`TealTemplateParams`](/reference/algokit-utils-ts/api/interfaces/types_apptealtemplateparams/)

Any deploy-time parameters to replace in the TEAL code

#### Defined in

[src/types/app-client.ts:228](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L228)

---

### updatable

• `Optional` **updatable**: `boolean`

Whether or not the contract should have deploy-time immutability control set, undefined = ignore

#### Defined in

[src/types/app-client.ts:230](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L230)
