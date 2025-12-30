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

- [AppDeployParams](/reference/algokit-utils-ts/api/modules/types_app_deployer/#appdeployparams)
- [AppDeployResult](/reference/algokit-utils-ts/api/modules/types_app_deployer/#appdeployresult)
- [DeployAppDeleteMethodCall](/reference/algokit-utils-ts/api/modules/types_app_deployer/#deployappdeletemethodcall)
- [DeployAppDeleteParams](/reference/algokit-utils-ts/api/modules/types_app_deployer/#deployappdeleteparams)
- [DeployAppUpdateMethodCall](/reference/algokit-utils-ts/api/modules/types_app_deployer/#deployappupdatemethodcall)
- [DeployAppUpdateParams](/reference/algokit-utils-ts/api/modules/types_app_deployer/#deployappupdateparams)

## Type Aliases

### AppDeployParams

Ƭ **AppDeployParams**: [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<[`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) & \{ `createParams`: [`AppCreateParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appcreateparams) \| [`AppCreateMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appcreatemethodcall) ; `deleteParams`: [`DeployAppDeleteParams`](/reference/algokit-utils-ts/api/modules/types_app_deployer/#deployappdeleteparams) \| [`DeployAppDeleteMethodCall`](/reference/algokit-utils-ts/api/modules/types_app_deployer/#deployappdeletemethodcall) ; `deployTimeParams?`: [`TealTemplateParams`](/reference/algokit-utils-ts/api/interfaces/types_apptealtemplateparams/) ; `existingDeployments?`: [`AppLookup`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerapplookup/) ; `ignoreCache?`: `boolean` ; `metadata`: [`AppDeployMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/) ; `onSchemaBreak?`: `"replace"` \| `"fail"` \| `"append"` \| [`OnSchemaBreak`](/reference/algokit-utils-ts/api/enums/types_apponschemabreak/) ; `onUpdate?`: `"update"` \| `"replace"` \| `"fail"` \| `"append"` \| [`OnUpdate`](/reference/algokit-utils-ts/api/enums/types_apponupdate/) ; `updateParams`: [`DeployAppUpdateParams`](/reference/algokit-utils-ts/api/modules/types_app_deployer/#deployappupdateparams) \| [`DeployAppUpdateMethodCall`](/reference/algokit-utils-ts/api/modules/types_app_deployer/#deployappupdatemethodcall) }\>

The parameters to idempotently deploy an app

#### Defined in

[src/types/app-deployer.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L39)

---

### AppDeployResult

Ƭ **AppDeployResult**: [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<\{ `operationPerformed`: `"create"` } & `Omit`\<[`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata/), `"appId"` \| `"appAddress"`\> & [`SendAppCreateTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#sendappcreatetransactionresult)\> \| [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<\{ `operationPerformed`: `"update"` } & [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata/) & [`SendAppUpdateTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#sendappupdatetransactionresult)\> \| [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<\{ `operationPerformed`: `"replace"` } & `Omit`\<[`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata/), `"appId"` \| `"appAddress"`\> & [`SendAppCreateTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#sendappcreatetransactionresult) & \{ `deleteResult`: [`ConfirmedTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresult/) ; `deleteReturn?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) }\> \| [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<\{ `operationPerformed`: `"nothing"` } & [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata/)\>

#### Defined in

[src/types/app-deployer.ts:99](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L99)

---

### DeployAppDeleteMethodCall

Ƭ **DeployAppDeleteMethodCall**: [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<`Omit`\<[`AppDeleteMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appdeletemethodcall), `"appId"`\>\>

Params to specify a delete method call for an app deployment

#### Defined in

[src/types/app-deployer.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L36)

---

### DeployAppDeleteParams

Ƭ **DeployAppDeleteParams**: [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<`Omit`\<[`AppDeleteParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appdeleteparams), `"appId"`\>\>

Params to specify a transaction for an app deployment

#### Defined in

[src/types/app-deployer.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L34)

---

### DeployAppUpdateMethodCall

Ƭ **DeployAppUpdateMethodCall**: [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<`Omit`\<[`AppUpdateMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appupdatemethodcall), `"appId"` \| `"approvalProgram"` \| `"clearStateProgram"`\>\>

Params to specify an update method call for an app deployment

#### Defined in

[src/types/app-deployer.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L32)

---

### DeployAppUpdateParams

Ƭ **DeployAppUpdateParams**: [`Expand`](/reference/algokit-utils-ts/api/modules/types_expand/#expand)\<`Omit`\<[`AppUpdateParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appupdateparams), `"appId"` \| `"approvalProgram"` \| `"clearStateProgram"`\>\>

Params to specify an update transaction for an app deployment

#### Defined in

[src/types/app-deployer.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L30)
