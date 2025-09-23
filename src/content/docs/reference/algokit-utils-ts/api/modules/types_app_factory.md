---
title: types/app-factory
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / types/app-factory

## Table of contents

### Classes

- [AppFactory](/reference/algokit-utils-ts/api/classes/types_app_factoryappfactory/)

### Interfaces

- [AppFactoryParams](/reference/algokit-utils-ts/api/interfaces/types_app_factoryappfactoryparams/)

### Type Aliases

- [AppFactoryAppClientParams](#appfactoryappclientparams)
- [AppFactoryCreateMethodCallParams](#appfactorycreatemethodcallparams)
- [AppFactoryCreateParams](#appfactorycreateparams)
- [AppFactoryDeployParams](#appfactorydeployparams)
- [AppFactoryResolveAppClientByCreatorAndNameParams](#appfactoryresolveappclientbycreatorandnameparams)
- [CreateOnComplete](#createoncomplete)
- [CreateSchema](#createschema)

## Type Aliases

### AppFactoryAppClientParams

Ƭ **AppFactoryAppClientParams**: [`Expand`](#expand)\<`Omit`\<[`AppClientParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientparams/), `"algorand"` \| `"appSpec"`\>\>

Params to get an app client by ID from an app factory.

#### Defined in

[src/types/app-factory.ts:134](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L134)

---

### AppFactoryCreateMethodCallParams

Ƭ **AppFactoryCreateMethodCallParams**: [`Expand`](#expand)\<[`AppClientMethodCallParams`](#appclientmethodcallparams) & [`AppClientCompilationParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcompilationparams/) & [`CreateOnComplete`](#createoncomplete) & [`CreateSchema`](#createschema)\>

Params to specify a create method call for an app

#### Defined in

[src/types/app-factory.ts:129](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L129)

---

### AppFactoryCreateParams

Ƭ **AppFactoryCreateParams**: [`Expand`](#expand)\<[`AppClientBareCallParams`](#appclientbarecallparams) & [`AppClientCompilationParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcompilationparams/) & [`CreateOnComplete`](#createoncomplete) & [`CreateSchema`](#createschema)\>

Params to specify a bare (raw) create call for an app

#### Defined in

[src/types/app-factory.ts:126](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L126)

---

### AppFactoryDeployParams

Ƭ **AppFactoryDeployParams**: [`Expand`](#expand)\<`Omit`\<[`AppDeployParams`](#appdeployparams), `"createParams"` \| `"updateParams"` \| `"deleteParams"` \| `"metadata"`\> & \{ `appName?`: `string` ; `createParams?`: [`Expand`](#expand)\<[`AppClientMethodCallParams`](#appclientmethodcallparams) & [`CreateOnComplete`](#createoncomplete) & [`CreateSchema`](#createschema)\> \| [`Expand`](#expand)\<[`AppClientBareCallParams`](#appclientbarecallparams) & [`CreateOnComplete`](#createoncomplete) & [`CreateSchema`](#createschema)\> ; `deletable?`: `boolean` ; `deleteParams?`: [`AppClientMethodCallParams`](#appclientmethodcallparams) \| [`AppClientBareCallParams`](#appclientbarecallparams) ; `updatable?`: `boolean` ; `updateParams?`: [`AppClientMethodCallParams`](#appclientmethodcallparams) \| [`AppClientBareCallParams`](#appclientbarecallparams) }\>

Parameters to define a deployment for an `AppFactory`

#### Defined in

[src/types/app-factory.ts:140](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L140)

---

### AppFactoryResolveAppClientByCreatorAndNameParams

Ƭ **AppFactoryResolveAppClientByCreatorAndNameParams**: [`Expand`](#expand)\<`Omit`\<[`ResolveAppClientByCreatorAndName`](#resolveappclientbycreatorandname), `"algorand"` \| `"appSpec"`\>\>

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
