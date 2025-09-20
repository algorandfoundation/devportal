---
title: AppClientDeployCallInterfaceParams
slug: reference/algokit-utils-ts/api/interfaces/types_app_clientappclientdeploycallinterfaceparams
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/) / AppClientDeployCallInterfaceParams



[types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/).AppClientDeployCallInterfaceParams

Call interface parameters to pass into ApplicationClient.deploy

## Hierarchy

- **`AppClientDeployCallInterfaceParams`**

  ↳ [`AppClientDeployParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientdeployparams/)

## Table of contents

### Properties

- [createArgs](#createargs)
- [createOnCompleteAction](#createoncompleteaction)
- [deleteArgs](#deleteargs)
- [deployTimeParams](#deploytimeparams)
- [updateArgs](#updateargs)

## Properties

### createArgs

• `Optional` **createArgs**: [`AppClientCallArgs`](/reference/algokit-utils-ts/api/modules/types_app_client/#appclientcallargs)

Any args to pass to any create transaction that is issued as part of deployment

#### Defined in

[src/types/app-client.ts:185](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L185)

___

### createOnCompleteAction

• `Optional` **createOnCompleteAction**: ``"no_op"`` \| ``"opt_in"`` \| ``"close_out"`` \| ``"update_application"`` \| ``"delete_application"`` \| `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC`

Override the on-completion action for the create call; defaults to NoOp

#### Defined in

[src/types/app-client.ts:187](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L187)

___

### deleteArgs

• `Optional` **deleteArgs**: [`AppClientCallArgs`](/reference/algokit-utils-ts/api/modules/types_app_client/#appclientcallargs)

Any args to pass to any delete transaction that is issued as part of deployment

#### Defined in

[src/types/app-client.ts:191](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L191)

___

### deployTimeParams

• `Optional` **deployTimeParams**: [`TealTemplateParams`](/reference/algokit-utils-ts/api/interfaces/types_apptealtemplateparams/)

Any deploy-time parameters to replace in the TEAL code

#### Defined in

[src/types/app-client.ts:183](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L183)

___

### updateArgs

• `Optional` **updateArgs**: [`AppClientCallArgs`](/reference/algokit-utils-ts/api/modules/types_app_client/#appclientcallargs)

Any args to pass to any update transaction that is issued as part of deployment

#### Defined in

[src/types/app-client.ts:189](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L189)