---
title: types/app-factory
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / types/app-factory

## Table of contents

### Classes

- [AppFactory](/docs/algokit-utils/typescript/latest/api/classes/types_app_factory.AppFactory/)

### Interfaces

- [AppFactoryParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_factory.AppFactoryParams/)

### Type Aliases

- [AppFactoryAppClientParams](/docs/algokit-utils/typescript/latest/api/modules/types_app_factory/#appfactoryappclientparams)
- [AppFactoryCreateMethodCallParams](/docs/algokit-utils/typescript/latest/api/modules/types_app_factory/#appfactorycreatemethodcallparams)
- [AppFactoryCreateParams](/docs/algokit-utils/typescript/latest/api/modules/types_app_factory/#appfactorycreateparams)
- [AppFactoryDeployParams](/docs/algokit-utils/typescript/latest/api/modules/types_app_factory/#appfactorydeployparams)
- [AppFactoryResolveAppClientByCreatorAndNameParams](/docs/algokit-utils/typescript/latest/api/modules/types_app_factory/#appfactoryresolveappclientbycreatorandnameparams)
- [CreateOnComplete](/docs/algokit-utils/typescript/latest/api/modules/types_app_factory/#createoncomplete)
- [CreateSchema](/docs/algokit-utils/typescript/latest/api/modules/types_app_factory/#createschema)

## Type Aliases

### AppFactoryAppClientParams

Ƭ **AppFactoryAppClientParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`AppClientParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientParams/), `"algorand"` \| `"appSpec"`\>\>

Params to get an app client by ID from an app factory.

#### Defined in

[src/types/app-factory.ts:134](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L134)

---

### AppFactoryCreateMethodCallParams

Ƭ **AppFactoryCreateMethodCallParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<[`AppClientMethodCallParams`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientmethodcallparams) & [`AppClientCompilationParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientCompilationParams/) & [`CreateOnComplete`](/docs/algokit-utils/typescript/latest/api/modules/types_app_factory/#createoncomplete) & [`CreateSchema`](/docs/algokit-utils/typescript/latest/api/modules/types_app_factory/#createschema)\>

Params to specify a create method call for an app

#### Defined in

[src/types/app-factory.ts:129](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L129)

---

### AppFactoryCreateParams

Ƭ **AppFactoryCreateParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<[`AppClientBareCallParams`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientbarecallparams) & [`AppClientCompilationParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_client.AppClientCompilationParams/) & [`CreateOnComplete`](/docs/algokit-utils/typescript/latest/api/modules/types_app_factory/#createoncomplete) & [`CreateSchema`](/docs/algokit-utils/typescript/latest/api/modules/types_app_factory/#createschema)\>

Params to specify a bare (raw) create call for an app

#### Defined in

[src/types/app-factory.ts:126](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L126)

---

### AppFactoryDeployParams

Ƭ **AppFactoryDeployParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`AppDeployParams`](/docs/algokit-utils/typescript/latest/api/modules/types_app_deployer/#appdeployparams), `"createParams"` \| `"updateParams"` \| `"deleteParams"` \| `"metadata"`\> & \{ `appName?`: `string` ; `createParams?`: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<[`AppClientMethodCallParams`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientmethodcallparams) & [`CreateOnComplete`](/docs/algokit-utils/typescript/latest/api/modules/types_app_factory/#createoncomplete) & [`CreateSchema`](/docs/algokit-utils/typescript/latest/api/modules/types_app_factory/#createschema)\> \| [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<[`AppClientBareCallParams`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientbarecallparams) & [`CreateOnComplete`](/docs/algokit-utils/typescript/latest/api/modules/types_app_factory/#createoncomplete) & [`CreateSchema`](/docs/algokit-utils/typescript/latest/api/modules/types_app_factory/#createschema)\> ; `deletable?`: `boolean` ; `deleteParams?`: [`AppClientMethodCallParams`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientmethodcallparams) \| [`AppClientBareCallParams`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientbarecallparams) ; `updatable?`: `boolean` ; `updateParams?`: [`AppClientMethodCallParams`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientmethodcallparams) \| [`AppClientBareCallParams`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#appclientbarecallparams) }\>

Parameters to define a deployment for an `AppFactory`

#### Defined in

[src/types/app-factory.ts:140](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L140)

---

### AppFactoryResolveAppClientByCreatorAndNameParams

Ƭ **AppFactoryResolveAppClientByCreatorAndNameParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`ResolveAppClientByCreatorAndName`](/docs/algokit-utils/typescript/latest/api/modules/types_app_client/#resolveappclientbycreatorandname), `"algorand"` \| `"appSpec"`\>\>

Params to get an app client by creator address and name from an app factory.

#### Defined in

[src/types/app-factory.ts:137](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L137)

---

### CreateOnComplete

Ƭ **CreateOnComplete**: `Object`

onComplete parameter for a create app call

#### Type declaration

| Name          | Type                                                                       |
| :------------ | :------------------------------------------------------------------------- |
| `onComplete?` | `Exclude`\<`OnApplicationComplete`, `OnApplicationComplete.ClearStateOC`\> |

#### Defined in

[src/types/app-factory.ts:102](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L102)

---

### CreateSchema

Ƭ **CreateSchema**: `Object`

Specifies a schema used for creating an app

#### Type declaration

| Name                      | Type                                                                                                             | Description                                                                                                                                                               |
| :------------------------ | :--------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `extraProgramPages?`      | `number`                                                                                                         | Number of extra pages required for the programs. Defaults to the number needed for the programs in this call if not specified. This is immutable once the app is created. |
| `schema?`                 | \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number` } | The state schema for the app. This is immutable once the app is created. By default uses the ARC32/ARC-56 spec.                                                           |
| `schema.globalByteSlices` | `number`                                                                                                         | The number of byte slices saved in global state.                                                                                                                          |
| `schema.globalInts`       | `number`                                                                                                         | The number of integers saved in global state.                                                                                                                             |
| `schema.localByteSlices`  | `number`                                                                                                         | The number of byte slices saved in local state.                                                                                                                           |
| `schema.localInts`        | `number`                                                                                                         | The number of integers saved in local state.                                                                                                                              |

#### Defined in

[src/types/app-factory.ts:107](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L107)
