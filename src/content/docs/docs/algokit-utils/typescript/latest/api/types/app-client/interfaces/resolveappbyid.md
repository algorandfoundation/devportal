---
editUrl: false
next: false
prev: false
title: "ResolveAppById"
---

Defined in: [src/types/app-client.ts:120](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L120)

Configuration to resolve app by ID

## Extends

- [`ResolveAppByIdBase`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/resolveappbyidbase/)

## Properties

### id

> **id**: `number` \| `bigint`

Defined in: [src/types/app-client.ts:115](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L115)

The id of an existing app to call using this client, or 0 if the app hasn't been created yet

#### Inherited from

[`ResolveAppByIdBase`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/resolveappbyidbase/).[`id`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/resolveappbyidbase/#id)

***

### name?

> `optional` **name?**: `string`

Defined in: [src/types/app-client.ts:117](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L117)

The optional name to use to mark the app when deploying `ApplicationClient.deploy` (default: uses the name in the ABI contract)

#### Inherited from

[`ResolveAppByIdBase`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/resolveappbyidbase/).[`name`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/resolveappbyidbase/#name)

***

### resolveBy

> **resolveBy**: `"id"`

Defined in: [src/types/app-client.ts:122](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L122)

How the app ID is resolved, either by `'id'` or `'creatorAndName'`; must be `'creatorAndName'` if you want to use `deploy`
