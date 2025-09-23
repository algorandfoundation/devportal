---
title: BoxValuesRequestParams
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app-manager](/reference/algokit-utils-ts/api/modules/types_app_manager/) / BoxValuesRequestParams

[types/app-manager](/reference/algokit-utils-ts/api/modules/types_app_manager/).BoxValuesRequestParams

Parameters to get and decode a box value as an ABI type.

## Table of contents

### Properties

- [appId](#appid)
- [boxNames](#boxnames)
- [type](#type)

## Properties

### appId

• **appId**: `bigint`

The ID of the app return box names for

#### Defined in

[src/types/app-manager.ts:90](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L90)

---

### boxNames

• **boxNames**: [`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier)[]

The names of the boxes to return either as a string, binary array or BoxName`

#### Defined in

[src/types/app-manager.ts:92](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L92)

---

### type

• **type**: `ABIType`

The ABI type to decode the value using

#### Defined in

[src/types/app-manager.ts:94](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L94)
