---
title: ResolveAppById
slug: reference/algokit-utils-ts/api/interfaces/types_app_clientresolveappbyid
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/) / ResolveAppById

[types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/).ResolveAppById

Configuration to resolve app by ID

## Hierarchy

- [`ResolveAppByIdBase`](/reference/algokit-utils-ts/api/interfaces/types_app_clientresolveappbyidbase/)

  ↳ **`ResolveAppById`**

## Table of contents

### Properties

- [id](#id)
- [name](#name)
- [resolveBy](#resolveby)

## Properties

### id

• **id**: `number` \| `bigint`

The id of an existing app to call using this client, or 0 if the app hasn't been created yet

#### Inherited from

[ResolveAppByIdBase](/reference/algokit-utils-ts/api/interfaces/types_app_clientresolveappbyidbase/).[id](/reference/algokit-utils-ts/api/interfaces/types_app_clientresolveappbyidbase/#id)

#### Defined in

[src/types/app-client.ts:115](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L115)

---

### name

• `Optional` **name**: `string`

The optional name to use to mark the app when deploying `ApplicationClient.deploy` (default: uses the name in the ABI contract)

#### Inherited from

[ResolveAppByIdBase](/reference/algokit-utils-ts/api/interfaces/types_app_clientresolveappbyidbase/).[name](/reference/algokit-utils-ts/api/interfaces/types_app_clientresolveappbyidbase/#name)

#### Defined in

[src/types/app-client.ts:117](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L117)

---

### resolveBy

• **resolveBy**: `"id"`

How the app ID is resolved, either by `'id'` or `'creatorAndName'`; must be `'creatorAndName'` if you want to use `deploy`

#### Defined in

[src/types/app-client.ts:122](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L122)
