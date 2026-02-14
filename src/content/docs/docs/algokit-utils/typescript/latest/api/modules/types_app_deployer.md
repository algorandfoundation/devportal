---
title: types/app-deployer
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / types/app-deployer



## Table of contents

### Classes

- [AppDeployer](/docs/algokit-utils/typescript/latest/api/classes/types_app_deployerappdeployer/)

### Interfaces

- [AppLookup](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerapplookup/)
- [AppMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerappmetadata/)

### Type Aliases

- [AppDeployParams](/docs/algokit-utils/typescript/latest/api/modules/types_app_deployer/#appdeployparams)
- [AppDeployResult](/docs/algokit-utils/typescript/latest/api/modules/types_app_deployer/#appdeployresult)
- [DeployAppDeleteMethodCall](/docs/algokit-utils/typescript/latest/api/modules/types_app_deployer/#deployappdeletemethodcall)
- [DeployAppDeleteParams](/docs/algokit-utils/typescript/latest/api/modules/types_app_deployer/#deployappdeleteparams)
- [DeployAppUpdateMethodCall](/docs/algokit-utils/typescript/latest/api/modules/types_app_deployer/#deployappupdatemethodcall)
- [DeployAppUpdateParams](/docs/algokit-utils/typescript/latest/api/modules/types_app_deployer/#deployappupdateparams)

## Type Aliases

### AppDeployParams

Ƭ **AppDeployParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<[`SendParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendparams/) & \{ `createParams`: [`AppCreateParams`](/docs/algokit-utils/typescript/latest/api/modules/types_composer/#appcreateparams) \| [`AppCreateMethodCall`](/docs/algokit-utils/typescript/latest/api/modules/types_composer/#appcreatemethodcall) ; `deleteParams`: [`DeployAppDeleteParams`](/docs/algokit-utils/typescript/latest/api/modules/types_app_deployer/#deployappdeleteparams) \| [`DeployAppDeleteMethodCall`](/docs/algokit-utils/typescript/latest/api/modules/types_app_deployer/#deployappdeletemethodcall) ; `deployTimeParams?`: [`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_apptealtemplateparams/) ; `existingDeployments?`: [`AppLookup`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerapplookup/) ; `ignoreCache?`: `boolean` ; `metadata`: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/) ; `onSchemaBreak?`: ``"replace"`` \| ``"fail"`` \| ``"append"`` \| [`OnSchemaBreak`](/docs/algokit-utils/typescript/latest/api/enums/types_apponschemabreak/) ; `onUpdate?`: ``"update"`` \| ``"replace"`` \| ``"fail"`` \| ``"append"`` \| [`OnUpdate`](/docs/algokit-utils/typescript/latest/api/enums/types_apponupdate/) ; `updateParams`: [`DeployAppUpdateParams`](/docs/algokit-utils/typescript/latest/api/modules/types_app_deployer/#deployappupdateparams) \| [`DeployAppUpdateMethodCall`](/docs/algokit-utils/typescript/latest/api/modules/types_app_deployer/#deployappupdatemethodcall)  }\>

The parameters to idempotently deploy an app

#### Defined in

[src/types/app-deployer.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L39)

___

### AppDeployResult

Ƭ **AppDeployResult**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<\{ `operationPerformed`: ``"create"``  } & `Omit`\<[`AppMetadata`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerappmetadata/), ``"appId"`` \| ``"appAddress"``\> & [`SendAppCreateTransactionResult`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#sendappcreatetransactionresult)\> \| [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<\{ `operationPerformed`: ``"update"``  } & [`AppMetadata`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerappmetadata/) & [`SendAppUpdateTransactionResult`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#sendappupdatetransactionresult)\> \| [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<\{ `operationPerformed`: ``"replace"``  } & `Omit`\<[`AppMetadata`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerappmetadata/), ``"appId"`` \| ``"appAddress"``\> & [`SendAppCreateTransactionResult`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#sendappcreatetransactionresult) & \{ `deleteResult`: [`ConfirmedTransactionResult`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionconfirmedtransactionresult/) ; `deleteReturn?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#abireturn)  }\> \| [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<\{ `operationPerformed`: ``"nothing"``  } & [`AppMetadata`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerappmetadata/)\>

#### Defined in

[src/types/app-deployer.ts:99](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L99)

___

### DeployAppDeleteMethodCall

Ƭ **DeployAppDeleteMethodCall**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`AppDeleteMethodCall`](/docs/algokit-utils/typescript/latest/api/modules/types_composer/#appdeletemethodcall), ``"appId"``\>\>

Params to specify a delete method call for an app deployment

#### Defined in

[src/types/app-deployer.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L36)

___

### DeployAppDeleteParams

Ƭ **DeployAppDeleteParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`AppDeleteParams`](/docs/algokit-utils/typescript/latest/api/modules/types_composer/#appdeleteparams), ``"appId"``\>\>

Params to specify a transaction for an app deployment

#### Defined in

[src/types/app-deployer.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L34)

___

### DeployAppUpdateMethodCall

Ƭ **DeployAppUpdateMethodCall**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`AppUpdateMethodCall`](/docs/algokit-utils/typescript/latest/api/modules/types_composer/#appupdatemethodcall), ``"appId"`` \| ``"approvalProgram"`` \| ``"clearStateProgram"``\>\>

Params to specify an update method call for an app deployment

#### Defined in

[src/types/app-deployer.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L32)

___

### DeployAppUpdateParams

Ƭ **DeployAppUpdateParams**: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`Omit`\<[`AppUpdateParams`](/docs/algokit-utils/typescript/latest/api/modules/types_composer/#appupdateparams), ``"appId"`` \| ``"approvalProgram"`` \| ``"clearStateProgram"``\>\>

Params to specify an update transaction for an app deployment

#### Defined in

[src/types/app-deployer.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L30)