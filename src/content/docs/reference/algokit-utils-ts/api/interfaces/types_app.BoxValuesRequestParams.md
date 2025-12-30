---
title: BoxValuesRequestParams
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app](/reference/algokit-utils-ts/api/modules/types_app/) / BoxValuesRequestParams

[types/app](/reference/algokit-utils-ts/api/modules/types_app/).BoxValuesRequestParams

**`Deprecated`**

Use `types/app-manager/BoxValuesRequestParams` instead.
Parameters to get and decode a box value as an ABI type.

## Table of contents

### Properties

- [appId](/reference/algokit-utils-ts/api/interfaces/types_appboxvaluesrequestparams/#appid)
- [boxNames](/reference/algokit-utils-ts/api/interfaces/types_appboxvaluesrequestparams/#boxnames)
- [type](/reference/algokit-utils-ts/api/interfaces/types_appboxvaluesrequestparams/#type)

## Properties

### appId

• **appId**: `number`

The ID of the app return box names for

#### Defined in

[src/types/app.ts:413](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L413)

---

### boxNames

• **boxNames**: (`string` \| `Uint8Array` \| [`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/))[]

The names of the boxes to return either as a string, binary array or BoxName`

#### Defined in

[src/types/app.ts:415](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L415)

---

### type

• **type**: `ABIType`

The ABI type to decode the value using

#### Defined in

[src/types/app.ts:417](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L417)
