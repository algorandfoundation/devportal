---
title: BoxValueRequestParams
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/) / BoxValueRequestParams



[types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/).BoxValueRequestParams

**`Deprecated`**

Use `types/app-manager/BoxValueRequestParams` instead.
Parameters to get and decode a box value as an ABI type.

## Table of contents

### Properties

- [appId](/docs/algokit-utils/typescript/latest/api/interfaces/types_appboxvaluerequestparams/#appid)
- [boxName](/docs/algokit-utils/typescript/latest/api/interfaces/types_appboxvaluerequestparams/#boxname)
- [type](/docs/algokit-utils/typescript/latest/api/interfaces/types_appboxvaluerequestparams/#type)

## Properties

### appId

• **appId**: `number` \| `bigint`

The ID of the app return box names for

#### Defined in

[src/types/app.ts:400](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L400)

___

### boxName

• **boxName**: `string` \| `Uint8Array` \| [`BoxName`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appboxname/)

The name of the box to return either as a string, binary array or `BoxName`

#### Defined in

[src/types/app.ts:402](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L402)

___

### type

• **type**: `ABIType`

The ABI type to decode the value using

#### Defined in

[src/types/app.ts:404](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L404)