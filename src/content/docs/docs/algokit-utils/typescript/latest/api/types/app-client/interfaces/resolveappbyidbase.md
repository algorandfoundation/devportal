---
editUrl: false
next: false
prev: false
title: "ResolveAppByIdBase"
---

Defined in: [src/types/app-client.ts:113](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L113)

Configuration to resolve app by ID

## Extended by

- [`ResolveAppById`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/resolveappbyid/)

## Properties

### id

> **id**: `number` \| `bigint`

Defined in: [src/types/app-client.ts:115](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L115)

The id of an existing app to call using this client, or 0 if the app hasn't been created yet

***

### name?

> `optional` **name?**: `string`

Defined in: [src/types/app-client.ts:117](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L117)

The optional name to use to mark the app when deploying `ApplicationClient.deploy` (default: uses the name in the ABI contract)
