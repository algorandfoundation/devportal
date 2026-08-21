---
editUrl: false
next: false
prev: false
title: 'TypedAppClient'
---

Defined in: [src/client-manager.ts:703](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/client-manager.ts#L703)

Interface to identify a typed client that can be used to interact with an application.

## Type Parameters

### TClient

`TClient`

## Constructors

### Constructor

> **new TypedAppClient**(`params`): `TClient`

Defined in: [src/client-manager.ts:704](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/client-manager.ts#L704)

#### Parameters

##### params

`Omit`\<[`AppClientParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/appclientparams/), `"appSpec"`\>

#### Returns

`TClient`

## Methods

### fromCreatorAndName()

> **fromCreatorAndName**(`params`): `Promise`\<`TClient`\>

Defined in: [src/client-manager.ts:706](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/client-manager.ts#L706)

#### Parameters

##### params

`Omit`\<[`ResolveAppClientByCreatorAndName`](/docs/algokit-utils/typescript/latest/api/algokit-utils/type-aliases/resolveappclientbycreatorandname/), `"appSpec"`\>

#### Returns

`Promise`\<`TClient`\>

---

### fromNetwork()

> **fromNetwork**(`params`): `Promise`\<`TClient`\>

Defined in: [src/client-manager.ts:705](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/client-manager.ts#L705)

#### Parameters

##### params

`Omit`\<[`AppClientParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/appclientparams/), `"appId"` \| `"appSpec"`\>

#### Returns

`Promise`\<`TClient`\>
