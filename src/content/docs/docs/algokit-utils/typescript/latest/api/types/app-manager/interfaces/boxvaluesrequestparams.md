---
editUrl: false
next: false
prev: false
title: "BoxValuesRequestParams"
---

Defined in: [src/types/app-manager.ts:90](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L90)

Parameters to get and decode a box value as an ABI type.

## Properties

### appId

> **appId**: `bigint`

Defined in: [src/types/app-manager.ts:92](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L92)

The ID of the app return box names for

***

### boxNames

> **boxNames**: [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/)[]

Defined in: [src/types/app-manager.ts:94](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L94)

The names of the boxes to return either as a string, binary array or BoxName`

***

### type

> **type**: `ABIType`

Defined in: [src/types/app-manager.ts:96](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L96)

The ABI type to decode the value using
