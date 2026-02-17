---
title: ResolveAppById
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/app-client](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/) / ResolveAppById

[types/app-client](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/).ResolveAppById

Configuration to resolve app by ID

## Hierarchy

- [`ResolveAppByIdBase`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.ResolveAppByIdBase/)

  ↳ **`ResolveAppById`**

## Table of contents

### Properties

- [id](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.ResolveAppById/#id)
- [name](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.ResolveAppById/#name)
- [resolveBy](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.ResolveAppById/#resolveby)

## Properties

### id

• **id**: `number` \| `bigint`

The id of an existing app to call using this client, or 0 if the app hasn't been created yet

#### Inherited from

[ResolveAppByIdBase](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.ResolveAppByIdBase/).[id](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.ResolveAppByIdBase/#id)

#### Defined in

[src/types/app-client.ts:115](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L115)

---

### name

• `Optional` **name**: `string`

The optional name to use to mark the app when deploying `ApplicationClient.deploy` (default: uses the name in the ABI contract)

#### Inherited from

[ResolveAppByIdBase](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.ResolveAppByIdBase/).[name](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.ResolveAppByIdBase/#name)

#### Defined in

[src/types/app-client.ts:117](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L117)

---

### resolveBy

• **resolveBy**: `"id"`

How the app ID is resolved, either by `'id'` or `'creatorAndName'`; must be `'creatorAndName'` if you want to use `deploy`

#### Defined in

[src/types/app-client.ts:122](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L122)
