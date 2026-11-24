---
editUrl: false
next: false
prev: false
title: "TypedAppClient"
---

Defined in: [src/types/client-manager.ts:693](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L693)

Interface to identify a typed client that can be used to interact with an application.

## Type Parameters

### TClient

`TClient`

## Constructors

### Constructor

> **new TypedAppClient**(`params`): `TClient`

Defined in: [src/types/client-manager.ts:694](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L694)

#### Parameters

##### params

`Omit`\<[`AppClientParams`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/appclientparams/), `"appSpec"`\>

#### Returns

`TClient`

## Methods

### fromCreatorAndName()

> **fromCreatorAndName**(`params`): `Promise`\<`TClient`\>

Defined in: [src/types/client-manager.ts:696](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L696)

#### Parameters

##### params

`Omit`\<[`ResolveAppClientByCreatorAndName`](/docs/algokit-utils/typescript/latest/api/types/app-client/type-aliases/resolveappclientbycreatorandname/), `"appSpec"`\>

#### Returns

`Promise`\<`TClient`\>

***

### fromNetwork()

> **fromNetwork**(`params`): `Promise`\<`TClient`\>

Defined in: [src/types/client-manager.ts:695](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L695)

#### Parameters

##### params

`Omit`\<[`AppClientParams`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/appclientparams/), `"appId"` \| `"appSpec"`\>

#### Returns

`Promise`\<`TClient`\>
