---
title: BoxValueRequestParams
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/app-manager](/docs/algokit-utils/typescript/latest/api/modules/types_app_manager/) / BoxValueRequestParams

[types/app-manager](/docs/algokit-utils/typescript/latest/api/modules/types_app_manager/).BoxValueRequestParams

Parameters to get and decode a box value as an ABI type.

## Table of contents

### Properties

- [appId](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_managerboxvaluerequestparams/#appid)
- [boxName](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_managerboxvaluerequestparams/#boxname)
- [type](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_managerboxvaluerequestparams/#type)

## Properties

### appId

• **appId**: `bigint`

The ID of the app return box names for

#### Defined in

[src/types/app-manager.ts:78](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L78)

---

### boxName

• **boxName**: [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/modules/types_app_manager/#boxidentifier)

The name of the box to return either as a string, binary array or `BoxName`

#### Defined in

[src/types/app-manager.ts:80](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L80)

---

### type

• **type**: `ABIType`

The ABI type to decode the value using

#### Defined in

[src/types/app-manager.ts:82](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-manager.ts#L82)
