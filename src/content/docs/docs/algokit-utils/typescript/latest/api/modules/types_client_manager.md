---
title: types/client-manager
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / types/client-manager



## Table of contents

### Classes

- [ClientManager](/docs/algokit-utils/typescript/latest/api/classes/types_client_managerclientmanager/)

### Interfaces

- [AlgoSdkClients](/docs/algokit-utils/typescript/latest/api/interfaces/types_client_manageralgosdkclients/)
- [TypedAppClient](/docs/algokit-utils/typescript/latest/api/interfaces/types_client_managertypedappclient/)
- [TypedAppFactory](/docs/algokit-utils/typescript/latest/api/interfaces/types_client_managertypedappfactory/)

### Type Aliases

- [ClientAppClientByNetworkParams](/docs/algokit-utils/typescript/latest/api/modules/types_client_manager/#clientappclientbynetworkparams)
- [ClientAppClientParams](/docs/algokit-utils/typescript/latest/api/modules/types_client_manager/#clientappclientparams)
- [ClientAppFactoryParams](/docs/algokit-utils/typescript/latest/api/modules/types_client_manager/#clientappfactoryparams)
- [ClientResolveAppClientByCreatorAndNameParams](/docs/algokit-utils/typescript/latest/api/modules/types_client_manager/#clientresolveappclientbycreatorandnameparams)
- [ClientTypedAppClientByCreatorAndNameParams](/docs/algokit-utils/typescript/latest/api/modules/types_client_manager/#clienttypedappclientbycreatorandnameparams)
- [ClientTypedAppClientByNetworkParams](/docs/algokit-utils/typescript/latest/api/modules/types_client_manager/#clienttypedappclientbynetworkparams)
- [ClientTypedAppClientParams](/docs/algokit-utils/typescript/latest/api/modules/types_client_manager/#clienttypedappclientparams)
- [ClientTypedAppFactoryParams](/docs/algokit-utils/typescript/latest/api/modules/types_client_manager/#clienttypedappfactoryparams)

## Type Aliases

### ClientAppClientByNetworkParams

Ƭ **ClientAppClientByNetworkParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`AppClientParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientparams/), ``"algorand"`` \| ``"appId"``\>\>

Params to get an app client by network from `ClientManager`.

#### Defined in

[src/types/client-manager.ts:33](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L33)

___

### ClientAppClientParams

Ƭ **ClientAppClientParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`AppClientParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientparams/), ``"algorand"``\>\>

Params to get an app client by ID from `ClientManager`.

#### Defined in

[src/types/client-manager.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L30)

___

### ClientAppFactoryParams

Ƭ **ClientAppFactoryParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`AppFactoryParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_factoryappfactoryparams/), ``"algorand"``\>\>

Params to get an app factory from `ClientManager`.

#### Defined in

[src/types/client-manager.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L24)

___

### ClientResolveAppClientByCreatorAndNameParams

Ƭ **ClientResolveAppClientByCreatorAndNameParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`ResolveAppClientByCreatorAndName`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#resolveappclientbycreatorandname), ``"algorand"``\>\>

Params to get an app client by creator address and name from `ClientManager`.

#### Defined in

[src/types/client-manager.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L27)

___

### ClientTypedAppClientByCreatorAndNameParams

Ƭ **ClientTypedAppClientByCreatorAndNameParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`ResolveAppClientByCreatorAndName`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#resolveappclientbycreatorandname), ``"algorand"`` \| ``"appSpec"``\>\>

Params to get a typed app client by creator address and name from `ClientManager`.

#### Defined in

[src/types/client-manager.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L36)

___

### ClientTypedAppClientByNetworkParams

Ƭ **ClientTypedAppClientByNetworkParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`AppClientParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientparams/), ``"algorand"`` \| ``"appSpec"`` \| ``"appId"``\>\>

Params to get a typed app client by network from `ClientManager`.

#### Defined in

[src/types/client-manager.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L42)

___

### ClientTypedAppClientParams

Ƭ **ClientTypedAppClientParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`AppClientParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientparams/), ``"algorand"`` \| ``"appSpec"``\>\>

Params to get a typed app client by ID from `ClientManager`.

#### Defined in

[src/types/client-manager.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L39)

___

### ClientTypedAppFactoryParams

Ƭ **ClientTypedAppFactoryParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`AppFactoryParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_factoryappfactoryparams/), ``"algorand"`` \| ``"appSpec"``\>\>

Params to get a typed app factory from `ClientManager`.

#### Defined in

[src/types/client-manager.ts:45](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L45)