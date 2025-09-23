---
title: types/app-deployer
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / types/app-deployer

## Table of contents

### Classes

- [AppDeployer](/reference/algokit-utils-ts/api/classes/types_app_deployerappdeployer/)

### Interfaces

- [AppLookup](/reference/algokit-utils-ts/api/interfaces/types_app_deployerapplookup/)
- [AppMetadata](/reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata/)

### Type Aliases

- [AppDeployParams](#appdeployparams)
- [AppDeployResult](#appdeployresult)
- [DeployAppDeleteMethodCall](#deployappdeletemethodcall)
- [DeployAppDeleteParams](#deployappdeleteparams)
- [DeployAppUpdateMethodCall](#deployappupdatemethodcall)
- [DeployAppUpdateParams](#deployappupdateparams)

## Type Aliases

### AppDeployParams

Ƭ **AppDeployParams**: [`Expand`](#expand)\<[`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) & \{ `createParams`: [`AppCreateParams`](#appcreateparams) \| [`AppCreateMethodCall`](#appcreatemethodcall) ; `deleteParams`: [`DeployAppDeleteParams`](#deployappdeleteparams) \| [`DeployAppDeleteMethodCall`](#deployappdeletemethodcall) ; `deployTimeParams?`: [`TealTemplateParams`](/reference/algokit-utils-ts/api/interfaces/types_apptealtemplateparams/) ; `existingDeployments?`: [`AppLookup`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerapplookup/) ; `ignoreCache?`: `boolean` ; `metadata`: [`AppDeployMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/) ; `onSchemaBreak?`: `"replace"` \| `"fail"` \| `"append"` \| [`OnSchemaBreak`](/reference/algokit-utils-ts/api/enums/types_apponschemabreak/) ; `onUpdate?`: `"update"` \| `"replace"` \| `"fail"` \| `"append"` \| [`OnUpdate`](/reference/algokit-utils-ts/api/enums/types_apponupdate/) ; `updateParams`: [`DeployAppUpdateParams`](#deployappupdateparams) \| [`DeployAppUpdateMethodCall`](#deployappupdatemethodcall) }\>

The parameters to idempotently deploy an app

#### Defined in

[src/types/app-deployer.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L39)

---

### AppDeployResult

Ƭ **AppDeployResult**: [`Expand`](#expand)\<\{ `operationPerformed`: `"create"` } & `Omit`\<[`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata/), `"appId"` \| `"appAddress"`\> & [`SendAppCreateTransactionResult`](#sendappcreatetransactionresult)\> \| [`Expand`](#expand)\<\{ `operationPerformed`: `"update"` } & [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata/) & [`SendAppUpdateTransactionResult`](#sendappupdatetransactionresult)\> \| [`Expand`](#expand)\<\{ `operationPerformed`: `"replace"` } & `Omit`\<[`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata/), `"appId"` \| `"appAddress"`\> & [`SendAppCreateTransactionResult`](#sendappcreatetransactionresult) & \{ `deleteResult`: [`ConfirmedTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresult/) ; `deleteReturn?`: [`ABIReturn`](#abireturn) }\> \| [`Expand`](#expand)\<\{ `operationPerformed`: `"nothing"` } & [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata/)\>

#### Defined in

[src/types/app-deployer.ts:99](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L99)

---

### DeployAppDeleteMethodCall

Ƭ **DeployAppDeleteMethodCall**: [`Expand`](#expand)\<`Omit`\<[`AppDeleteMethodCall`](#appdeletemethodcall), `"appId"`\>\>

Params to specify a delete method call for an app deployment

#### Defined in

[src/types/app-deployer.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L36)

---

### DeployAppDeleteParams

Ƭ **DeployAppDeleteParams**: [`Expand`](#expand)\<`Omit`\<[`AppDeleteParams`](#appdeleteparams), `"appId"`\>\>

Params to specify a transaction for an app deployment

#### Defined in

[src/types/app-deployer.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L34)

---

### DeployAppUpdateMethodCall

Ƭ **DeployAppUpdateMethodCall**: [`Expand`](#expand)\<`Omit`\<[`AppUpdateMethodCall`](#appupdatemethodcall), `"appId"` \| `"approvalProgram"` \| `"clearStateProgram"`\>\>

Params to specify an update method call for an app deployment

#### Defined in

[src/types/app-deployer.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L32)

---

### DeployAppUpdateParams

Ƭ **DeployAppUpdateParams**: [`Expand`](#expand)\<`Omit`\<[`AppUpdateParams`](#appupdateparams), `"appId"` \| `"approvalProgram"` \| `"clearStateProgram"`\>\>

Params to specify an update transaction for an app deployment

#### Defined in

[src/types/app-deployer.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L30)
