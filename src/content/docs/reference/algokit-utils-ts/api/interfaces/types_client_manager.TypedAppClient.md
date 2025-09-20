---
title: TypedAppClient\<TClient\>
slug: reference/algokit-utils-ts/api/interfaces/types_client_managertypedappclient
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/client-manager](/reference/algokit-utils-ts/api/modules/types_client_manager/) / TypedAppClient

[types/client-manager](/reference/algokit-utils-ts/api/modules/types_client_manager/).TypedAppClient

Interface to identify a typed client that can be used to interact with an application.

## Type parameters

| Name      |
| :-------- |
| `TClient` |

## Table of contents

### Constructors

- [constructor](#constructor)

### Methods

- [fromCreatorAndName](#fromcreatorandname)
- [fromNetwork](#fromnetwork)

## Constructors

### constructor

• **new TypedAppClient**(`params`): `TClient`

#### Parameters

| Name     | Type                                                                                                                    |
| :------- | :---------------------------------------------------------------------------------------------------------------------- |
| `params` | `Omit`\<[`AppClientParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientparams/), `"appSpec"`\> |

#### Returns

`TClient`

#### Defined in

[src/types/client-manager.ts:694](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L694)

## Methods

### fromCreatorAndName

▸ **fromCreatorAndName**(`params`): `Promise`\<`TClient`\>

#### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `params` | `Omit`\<\{ `algorand`: [`AlgorandClient`](/reference/algokit-utils-ts/api/classes/types_algorand_clientalgorandclient/) ; `appLookupCache?`: [`AppLookup`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerapplookup/) ; `appName?`: `string` ; `appSpec`: `string` \| [`Arc56Contract`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56arc56contract/) \| [`AppSpec`](/reference/algokit-utils-ts/api/interfaces/types_app_specappspec/) ; `approvalSourceMap?`: `ProgramSourceMap` ; `clearSourceMap?`: `ProgramSourceMap` ; `creatorAddress`: `string` \| `Address` ; `defaultSender?`: `string` \| `Address` ; `defaultSigner?`: `TransactionSigner` ; `ignoreCache?`: `boolean` }, `"appSpec"`\> |

#### Returns

`Promise`\<`TClient`\>

#### Defined in

[src/types/client-manager.ts:696](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L696)

---

### fromNetwork

▸ **fromNetwork**(`params`): `Promise`\<`TClient`\>

#### Parameters

| Name     | Type                                                                                                                                 |
| :------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `params` | `Omit`\<[`AppClientParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientparams/), `"appId"` \| `"appSpec"`\> |

#### Returns

`Promise`\<`TClient`\>

#### Defined in

[src/types/client-manager.ts:695](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L695)
