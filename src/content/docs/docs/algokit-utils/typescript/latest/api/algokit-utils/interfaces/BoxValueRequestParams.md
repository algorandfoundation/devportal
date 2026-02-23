---
editUrl: false
next: false
prev: false
title: 'BoxValueRequestParams'
---

Defined in: [src/app-manager.ts:78](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-manager.ts#L78)

Parameters to get and decode a box value as an ABI type.

## Properties

### appId

> **appId**: `bigint`

Defined in: [src/app-manager.ts:80](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-manager.ts#L80)

The ID of the app return box names for

---

### boxName

> **boxName**: [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/boxidentifier/)

Defined in: [src/app-manager.ts:82](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-manager.ts#L82)

The name of the box to return either as a string, binary array or `BoxName`

---

### type

> **type**: [`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/)

Defined in: [src/app-manager.ts:84](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app-manager.ts#L84)

The ABI type to decode the value using
