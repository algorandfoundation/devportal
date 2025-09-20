---
title: types/app-deployer
slug: reference/algokit-utils-ts/api/modules/types_app_deployer
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / types/app-deployer



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

Ƭ **AppDeployParams**: [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<[`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) & \{ `createParams`: [`AppCreateParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appcreateparams) \| [`AppCreateMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appcreatemethodcall) ; `deleteParams`: [`DeployAppDeleteParams`](#deployappdeleteparams) \| [`DeployAppDeleteMethodCall`](#deployappdeletemethodcall) ; `deployTimeParams?`: [`TealTemplateParams`](/reference/algokit-utils-ts/api/interfaces/types_apptealtemplateparams/) ; `existingDeployments?`: [`AppLookup`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerapplookup/) ; `ignoreCache?`: `boolean` ; `metadata`: [`AppDeployMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/) ; `onSchemaBreak?`: ``"replace"`` \| ``"fail"`` \| ``"append"`` \| [`OnSchemaBreak`](/reference/algokit-utils-ts/api/enums/types_apponschemabreak/) ; `onUpdate?`: ``"update"`` \| ``"replace"`` \| ``"fail"`` \| ``"append"`` \| [`OnUpdate`](/reference/algokit-utils-ts/api/enums/types_apponupdate/) ; `updateParams`: [`DeployAppUpdateParams`](#deployappupdateparams) \| [`DeployAppUpdateMethodCall`](#deployappupdatemethodcall)  }\>

The parameters to idempotently deploy an app

#### Defined in

[src/types/app-deployer.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L39)

___

### AppDeployResult

Ƭ **AppDeployResult**: [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<\{ `operationPerformed`: ``"create"``  } & `Omit`\<[`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata/), ``"appId"`` \| ``"appAddress"``\> & [`SendAppCreateTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#sendappcreatetransactionresult)\> \| [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<\{ `operationPerformed`: ``"update"``  } & [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata/) & [`SendAppUpdateTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#sendappupdatetransactionresult)\> \| [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<\{ `operationPerformed`: ``"replace"``  } & `Omit`\<[`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata/), ``"appId"`` \| ``"appAddress"``\> & [`SendAppCreateTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#sendappcreatetransactionresult) & \{ `deleteResult`: [`ConfirmedTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresult/) ; `deleteReturn?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)  }\> \| [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<\{ `operationPerformed`: ``"nothing"``  } & [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata/)\>

#### Defined in

[src/types/app-deployer.ts:99](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L99)

___

### DeployAppDeleteMethodCall

Ƭ **DeployAppDeleteMethodCall**: [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<`Omit`\<[`AppDeleteMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appdeletemethodcall), ``"appId"``\>\>

Params to specify a delete method call for an app deployment

#### Defined in

[src/types/app-deployer.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L36)

___

### DeployAppDeleteParams

Ƭ **DeployAppDeleteParams**: [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<`Omit`\<[`AppDeleteParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appdeleteparams), ``"appId"``\>\>

Params to specify a transaction for an app deployment

#### Defined in

[src/types/app-deployer.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L34)

___

### DeployAppUpdateMethodCall

Ƭ **DeployAppUpdateMethodCall**: [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<`Omit`\<[`AppUpdateMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appupdatemethodcall), ``"appId"`` \| ``"approvalProgram"`` \| ``"clearStateProgram"``\>\>

Params to specify an update method call for an app deployment

#### Defined in

[src/types/app-deployer.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L32)

___

### DeployAppUpdateParams

Ƭ **DeployAppUpdateParams**: [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<`Omit`\<[`AppUpdateParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appupdateparams), ``"appId"`` \| ``"approvalProgram"`` \| ``"clearStateProgram"``\>\>

Params to specify an update transaction for an app deployment

#### Defined in

[src/types/app-deployer.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L30)