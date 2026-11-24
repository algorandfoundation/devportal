---
editUrl: false
next: false
prev: false
title: "AppClientCompilationParams"
---

Defined in: [src/types/app-client.ts:226](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L226)

## Properties

### deletable?

> `optional` **deletable?**: `boolean`

Defined in: [src/types/app-client.ts:232](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L232)

Whether or not the contract should have deploy-time permanence control set, undefined = ignore

***

### deployTimeParams?

> `optional` **deployTimeParams?**: [`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/tealtemplateparams/)

Defined in: [src/types/app-client.ts:228](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L228)

Any deploy-time parameters to replace in the TEAL code

***

### updatable?

> `optional` **updatable?**: `boolean`

Defined in: [src/types/app-client.ts:230](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L230)

Whether or not the contract should have deploy-time immutability control set, undefined = ignore
