---
title: TypedAppClient\<TClient\>
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/client-manager](/reference/algokit-utils-ts/api/modules/types_client_manager/) / TypedAppClient

[types/client-manager](/reference/algokit-utils-ts/api/modules/types_client_manager/).TypedAppClient

Interface to identify a typed client that can be used to interact with an application.

## Type parameters

| Name      |
| :-------- |
| `TClient` |

## Table of contents

### Constructors

- [constructor](types_client_manager.TypedAppClient.md#constructor)

### Methods

- [fromCreatorAndName](types_client_manager.TypedAppClient.md#fromcreatorandname)
- [fromNetwork](types_client_manager.TypedAppClient.md#fromnetwork)

## Constructors

### constructor

• **new TypedAppClient**(`params`): `TClient`

#### Parameters

| Name     | Type                                                                            |
| :------- | :------------------------------------------------------------------------------ |
| `params` | `Omit`\<[`AppClientParams`](types_app_client.AppClientParams.md), `"appSpec"`\> |

#### Returns

`TClient`

#### Defined in

[src/types/client-manager.ts:694](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L694)

## Methods

### fromCreatorAndName

▸ **fromCreatorAndName**(`params`): `Promise`\<`TClient`\>

#### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `params` | `Omit`\<\{ `algorand`: [`AlgorandClient`](/reference/algokit-utils-ts/api/classes/types_algorand_clientalgorandclient/) ; `appLookupCache?`: [`AppLookup`](types_app_deployer.AppLookup.md) ; `appName?`: `string` ; `appSpec`: `string` \| [`Arc56Contract`](types_app_arc56.Arc56Contract.md) \| [`AppSpec`](types_app_spec.AppSpec.md) ; `approvalSourceMap?`: `ProgramSourceMap` ; `clearSourceMap?`: `ProgramSourceMap` ; `creatorAddress`: `string` \| `Address` ; `defaultSender?`: `string` \| `Address` ; `defaultSigner?`: `TransactionSigner` ; `ignoreCache?`: `boolean` }, `"appSpec"`\> |

#### Returns

`Promise`\<`TClient`\>

#### Defined in

[src/types/client-manager.ts:696](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L696)

---

### fromNetwork

▸ **fromNetwork**(`params`): `Promise`\<`TClient`\>

#### Parameters

| Name     | Type                                                                                         |
| :------- | :------------------------------------------------------------------------------------------- |
| `params` | `Omit`\<[`AppClientParams`](types_app_client.AppClientParams.md), `"appId"` \| `"appSpec"`\> |

#### Returns

`Promise`\<`TClient`\>

#### Defined in

[src/types/client-manager.ts:695](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L695)
