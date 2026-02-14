---
title: TypedAppClient\<TClient\>
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/client-manager](/docs/algokit-utils/typescript/latest/api/modules/types_client_manager/) / TypedAppClient



[types/client-manager](/docs/algokit-utils/typescript/latest/api/modules/types_client_manager/).TypedAppClient

Interface to identify a typed client that can be used to interact with an application.

## Type parameters

| Name |
| :------ |
| `TClient` |

## Table of contents

### Constructors

- [constructor](/docs/algokit-utils/typescript/latest/api/interfaces/types_client_managertypedappclient/#constructor)

### Methods

- [fromCreatorAndName](/docs/algokit-utils/typescript/latest/api/interfaces/types_client_managertypedappclient/#fromcreatorandname)
- [fromNetwork](/docs/algokit-utils/typescript/latest/api/interfaces/types_client_managertypedappclient/#fromnetwork)

## Constructors

### constructor

• **new TypedAppClient**(`params`): `TClient`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Omit`\<[`AppClientParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientparams/), ``"appSpec"``\> |

#### Returns

`TClient`

#### Defined in

[src/types/client-manager.ts:694](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L694)

## Methods

### fromCreatorAndName

▸ **fromCreatorAndName**(`params`): `Promise`\<`TClient`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Omit`\<\{ `algorand`: [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/classes/types_algorand_clientalgorandclient/) ; `appLookupCache?`: [`AppLookup`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerapplookup/) ; `appName?`: `string` ; `appSpec`: `string` \| [`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_arc56arc56contract/) \| [`AppSpec`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_specappspec/) ; `approvalSourceMap?`: `ProgramSourceMap` ; `clearSourceMap?`: `ProgramSourceMap` ; `creatorAddress`: `string` \| `Address` ; `defaultSender?`: `string` \| `Address` ; `defaultSigner?`: `TransactionSigner` ; `ignoreCache?`: `boolean`  }, ``"appSpec"``\> |

#### Returns

`Promise`\<`TClient`\>

#### Defined in

[src/types/client-manager.ts:696](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L696)

___

### fromNetwork

▸ **fromNetwork**(`params`): `Promise`\<`TClient`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Omit`\<[`AppClientParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_clientappclientparams/), ``"appId"`` \| ``"appSpec"``\> |

#### Returns

`Promise`\<`TClient`\>

#### Defined in

[src/types/client-manager.ts:695](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L695)