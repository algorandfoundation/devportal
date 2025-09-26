---
title: types/client-manager
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / types/client-manager

## Table of contents

### Classes

- [ClientManager](/reference/algokit-utils-ts/api/classes/types_client_managerclientmanager/)

### Interfaces

- [AlgoSdkClients](/reference/algokit-utils-ts/api/interfaces/types_client_manageralgosdkclients/)
- [TypedAppClient](/reference/algokit-utils-ts/api/interfaces/types_client_managertypedappclient/)
- [TypedAppFactory](/reference/algokit-utils-ts/api/interfaces/types_client_managertypedappfactory/)

### Type Aliases

- [ClientAppClientByNetworkParams](types_client_manager.md#clientappclientbynetworkparams)
- [ClientAppClientParams](types_client_manager.md#clientappclientparams)
- [ClientAppFactoryParams](types_client_manager.md#clientappfactoryparams)
- [ClientResolveAppClientByCreatorAndNameParams](types_client_manager.md#clientresolveappclientbycreatorandnameparams)
- [ClientTypedAppClientByCreatorAndNameParams](types_client_manager.md#clienttypedappclientbycreatorandnameparams)
- [ClientTypedAppClientByNetworkParams](types_client_manager.md#clienttypedappclientbynetworkparams)
- [ClientTypedAppClientParams](types_client_manager.md#clienttypedappclientparams)
- [ClientTypedAppFactoryParams](types_client_manager.md#clienttypedappfactoryparams)

## Type Aliases

### ClientAppClientByNetworkParams

Ƭ **ClientAppClientByNetworkParams**: [`Expand`](types_expand.md#expand)\<`Omit`\<[`AppClientParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientparams/), `"algorand"` \| `"appId"`\>\>

Params to get an app client by network from `ClientManager`.

#### Defined in

[src/types/client-manager.ts:33](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L33)

---

### ClientAppClientParams

Ƭ **ClientAppClientParams**: [`Expand`](types_expand.md#expand)\<`Omit`\<[`AppClientParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientparams/), `"algorand"`\>\>

Params to get an app client by ID from `ClientManager`.

#### Defined in

[src/types/client-manager.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L30)

---

### ClientAppFactoryParams

Ƭ **ClientAppFactoryParams**: [`Expand`](types_expand.md#expand)\<`Omit`\<[`AppFactoryParams`](/reference/algokit-utils-ts/api/interfaces/types_app_factoryappfactoryparams/), `"algorand"`\>\>

Params to get an app factory from `ClientManager`.

#### Defined in

[src/types/client-manager.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L24)

---

### ClientResolveAppClientByCreatorAndNameParams

Ƭ **ClientResolveAppClientByCreatorAndNameParams**: [`Expand`](types_expand.md#expand)\<`Omit`\<[`ResolveAppClientByCreatorAndName`](types_app_client.md#resolveappclientbycreatorandname), `"algorand"`\>\>

Params to get an app client by creator address and name from `ClientManager`.

#### Defined in

[src/types/client-manager.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L27)

---

### ClientTypedAppClientByCreatorAndNameParams

Ƭ **ClientTypedAppClientByCreatorAndNameParams**: [`Expand`](types_expand.md#expand)\<`Omit`\<[`ResolveAppClientByCreatorAndName`](types_app_client.md#resolveappclientbycreatorandname), `"algorand"` \| `"appSpec"`\>\>

Params to get a typed app client by creator address and name from `ClientManager`.

#### Defined in

[src/types/client-manager.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L36)

---

### ClientTypedAppClientByNetworkParams

Ƭ **ClientTypedAppClientByNetworkParams**: [`Expand`](types_expand.md#expand)\<`Omit`\<[`AppClientParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientparams/), `"algorand"` \| `"appSpec"` \| `"appId"`\>\>

Params to get a typed app client by network from `ClientManager`.

#### Defined in

[src/types/client-manager.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L42)

---

### ClientTypedAppClientParams

Ƭ **ClientTypedAppClientParams**: [`Expand`](types_expand.md#expand)\<`Omit`\<[`AppClientParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientparams/), `"algorand"` \| `"appSpec"`\>\>

Params to get a typed app client by ID from `ClientManager`.

#### Defined in

[src/types/client-manager.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L39)

---

### ClientTypedAppFactoryParams

Ƭ **ClientTypedAppFactoryParams**: [`Expand`](types_expand.md#expand)\<`Omit`\<[`AppFactoryParams`](/reference/algokit-utils-ts/api/interfaces/types_app_factoryappfactoryparams/), `"algorand"` \| `"appSpec"`\>\>

Params to get a typed app factory from `ClientManager`.

#### Defined in

[src/types/client-manager.ts:45](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L45)
