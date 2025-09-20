---
title: ResolveAppByIdBase
slug: reference/algokit-utils-ts/api/interfaces/types_app_clientresolveappbyidbase
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/) / ResolveAppByIdBase



[types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/).ResolveAppByIdBase

Configuration to resolve app by ID

## Hierarchy

- **`ResolveAppByIdBase`**

  ↳ [`ResolveAppById`](/reference/algokit-utils-ts/api/interfaces/types_app_clientresolveappbyid/)

## Table of contents

### Properties

- [id](#id)
- [name](#name)

## Properties

### id

• **id**: `number` \| `bigint`

The id of an existing app to call using this client, or 0 if the app hasn't been created yet

#### Defined in

[src/types/app-client.ts:115](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L115)

___

### name

• `Optional` **name**: `string`

The optional name to use to mark the app when deploying `ApplicationClient.deploy` (default: uses the name in the ABI contract)

#### Defined in

[src/types/app-client.ts:117](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L117)