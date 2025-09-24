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

- [AppDeployParams](types_app_deployer.md#appdeployparams)
- [AppDeployResult](types_app_deployer.md#appdeployresult)
- [DeployAppDeleteMethodCall](types_app_deployer.md#deployappdeletemethodcall)
- [DeployAppDeleteParams](types_app_deployer.md#deployappdeleteparams)
- [DeployAppUpdateMethodCall](types_app_deployer.md#deployappupdatemethodcall)
- [DeployAppUpdateParams](types_app_deployer.md#deployappupdateparams)

## Type Aliases

### AppDeployParams

Ƭ **AppDeployParams**: [`Expand`](types_expand.md#expand)\<[`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) & \{ `createParams`: [`AppCreateParams`](types_composer.md#appcreateparams) \| [`AppCreateMethodCall`](types_composer.md#appcreatemethodcall) ; `deleteParams`: [`DeployAppDeleteParams`](types_app_deployer.md#deployappdeleteparams) \| [`DeployAppDeleteMethodCall`](types_app_deployer.md#deployappdeletemethodcall) ; `deployTimeParams?`: [`TealTemplateParams`](/reference/algokit-utils-ts/api/interfaces/types_apptealtemplateparams/) ; `existingDeployments?`: [`AppLookup`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerapplookup/) ; `ignoreCache?`: `boolean` ; `metadata`: [`AppDeployMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/) ; `onSchemaBreak?`: `"replace"` \| `"fail"` \| `"append"` \| [`OnSchemaBreak`](/reference/algokit-utils-ts/api/enums/types_apponschemabreak/) ; `onUpdate?`: `"update"` \| `"replace"` \| `"fail"` \| `"append"` \| [`OnUpdate`](/reference/algokit-utils-ts/api/enums/types_apponupdate/) ; `updateParams`: [`DeployAppUpdateParams`](types_app_deployer.md#deployappupdateparams) \| [`DeployAppUpdateMethodCall`](types_app_deployer.md#deployappupdatemethodcall) }\>

The parameters to idempotently deploy an app

#### Defined in

[src/types/app-deployer.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L39)

---

### AppDeployResult

Ƭ **AppDeployResult**: [`Expand`](types_expand.md#expand)\<\{ `operationPerformed`: `"create"` } & `Omit`\<[`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata/), `"appId"` \| `"appAddress"`\> & [`SendAppCreateTransactionResult`](types_app.md#sendappcreatetransactionresult)\> \| [`Expand`](types_expand.md#expand)\<\{ `operationPerformed`: `"update"` } & [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata/) & [`SendAppUpdateTransactionResult`](types_app.md#sendappupdatetransactionresult)\> \| [`Expand`](types_expand.md#expand)\<\{ `operationPerformed`: `"replace"` } & `Omit`\<[`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata/), `"appId"` \| `"appAddress"`\> & [`SendAppCreateTransactionResult`](types_app.md#sendappcreatetransactionresult) & \{ `deleteResult`: [`ConfirmedTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresult/) ; `deleteReturn?`: [`ABIReturn`](types_app.md#abireturn) }\> \| [`Expand`](types_expand.md#expand)\<\{ `operationPerformed`: `"nothing"` } & [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata/)\>

#### Defined in

[src/types/app-deployer.ts:99](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L99)

---

### DeployAppDeleteMethodCall

Ƭ **DeployAppDeleteMethodCall**: [`Expand`](types_expand.md#expand)\<`Omit`\<[`AppDeleteMethodCall`](types_composer.md#appdeletemethodcall), `"appId"`\>\>

Params to specify a delete method call for an app deployment

#### Defined in

[src/types/app-deployer.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L36)

---

### DeployAppDeleteParams

Ƭ **DeployAppDeleteParams**: [`Expand`](types_expand.md#expand)\<`Omit`\<[`AppDeleteParams`](types_composer.md#appdeleteparams), `"appId"`\>\>

Params to specify a transaction for an app deployment

#### Defined in

[src/types/app-deployer.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L34)

---

### DeployAppUpdateMethodCall

Ƭ **DeployAppUpdateMethodCall**: [`Expand`](types_expand.md#expand)\<`Omit`\<[`AppUpdateMethodCall`](types_composer.md#appupdatemethodcall), `"appId"` \| `"approvalProgram"` \| `"clearStateProgram"`\>\>

Params to specify an update method call for an app deployment

#### Defined in

[src/types/app-deployer.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L32)

---

### DeployAppUpdateParams

Ƭ **DeployAppUpdateParams**: [`Expand`](types_expand.md#expand)\<`Omit`\<[`AppUpdateParams`](types_composer.md#appupdateparams), `"appId"` \| `"approvalProgram"` \| `"clearStateProgram"`\>\>

Params to specify an update transaction for an app deployment

#### Defined in

[src/types/app-deployer.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L30)
