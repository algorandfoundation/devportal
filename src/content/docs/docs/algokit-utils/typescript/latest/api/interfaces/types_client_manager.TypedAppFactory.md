---
title: TypedAppFactory\<TClient\>
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/client-manager](/docs/algokit-utils/typescript/latest/api/modules/types_client_manager/) / TypedAppFactory

[types/client-manager](/docs/algokit-utils/typescript/latest/api/modules/types_client_manager/).TypedAppFactory

Interface to identify a typed factory that can be used to create and deploy an application.

## Type parameters

| Name      |
| :-------- |
| `TClient` |

## Table of contents

### Constructors

- [constructor](/docs/algokit-utils/typescript/latest/api/interfaces/types_client_managertypedappfactory/#constructor)

## Constructors

### constructor

• **new TypedAppFactory**(`params`): `TClient`

#### Parameters

| Name     | Type                                                                                                                                 |
| :------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `params` | `Omit`\<[`AppFactoryParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_factoryappfactoryparams/), `"appSpec"`\> |

#### Returns

`TClient`

#### Defined in

[src/types/client-manager.ts:703](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/client-manager.ts#L703)
