---
title: AppClientDeployParams
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/) / AppClientDeployParams

[types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/).AppClientDeployParams

Parameters to pass into ApplicationClient.deploy

## Hierarchy

- [`AppClientDeployCoreParams`](types_app_client.AppClientDeployCoreParams.md)

- [`AppClientDeployCallInterfaceParams`](types_app_client.AppClientDeployCallInterfaceParams.md)

  ↳ **`AppClientDeployParams`**

## Table of contents

### Properties

- [allowDelete](types_app_client.AppClientDeployParams.md#allowdelete)
- [allowUpdate](types_app_client.AppClientDeployParams.md#allowupdate)
- [createArgs](types_app_client.AppClientDeployParams.md#createargs)
- [createOnCompleteAction](types_app_client.AppClientDeployParams.md#createoncompleteaction)
- [deleteArgs](types_app_client.AppClientDeployParams.md#deleteargs)
- [deployTimeParams](types_app_client.AppClientDeployParams.md#deploytimeparams)
- [onSchemaBreak](types_app_client.AppClientDeployParams.md#onschemabreak)
- [onUpdate](types_app_client.AppClientDeployParams.md#onupdate)
- [schema](types_app_client.AppClientDeployParams.md#schema)
- [sendParams](types_app_client.AppClientDeployParams.md#sendparams)
- [sender](types_app_client.AppClientDeployParams.md#sender)
- [updateArgs](types_app_client.AppClientDeployParams.md#updateargs)
- [version](types_app_client.AppClientDeployParams.md#version)

## Properties

### allowDelete

• `Optional` **allowDelete**: `boolean`

Whether or not to allow deletes in the contract using the deploy-time deletability control if present in your contract.
If this is not specified then it will automatically be determined based on the AppSpec definition

#### Inherited from

[AppClientDeployCoreParams](types_app_client.AppClientDeployCoreParams.md).[allowDelete](types_app_client.AppClientDeployCoreParams.md#allowdelete)

#### Defined in

[src/types/app-client.ts:173](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L173)

---

### allowUpdate

• `Optional` **allowUpdate**: `boolean`

Whether or not to allow updates in the contract using the deploy-time updatability control if present in your contract.
If this is not specified then it will automatically be determined based on the AppSpec definition

#### Inherited from

[AppClientDeployCoreParams](types_app_client.AppClientDeployCoreParams.md).[allowUpdate](types_app_client.AppClientDeployCoreParams.md#allowupdate)

#### Defined in

[src/types/app-client.ts:169](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L169)

---

### createArgs

• `Optional` **createArgs**: [`AppClientCallArgs`](/reference/algokit-utils-ts/api/modules/types_app_client/#appclientcallargs)

Any args to pass to any create transaction that is issued as part of deployment

#### Inherited from

[AppClientDeployCallInterfaceParams](types_app_client.AppClientDeployCallInterfaceParams.md).[createArgs](types_app_client.AppClientDeployCallInterfaceParams.md#createargs)

#### Defined in

[src/types/app-client.ts:185](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L185)

---

### createOnCompleteAction

• `Optional` **createOnCompleteAction**: `"no_op"` \| `"opt_in"` \| `"close_out"` \| `"update_application"` \| `"delete_application"` \| `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC`

Override the on-completion action for the create call; defaults to NoOp

#### Inherited from

[AppClientDeployCallInterfaceParams](types_app_client.AppClientDeployCallInterfaceParams.md).[createOnCompleteAction](types_app_client.AppClientDeployCallInterfaceParams.md#createoncompleteaction)

#### Defined in

[src/types/app-client.ts:187](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L187)

---

### deleteArgs

• `Optional` **deleteArgs**: [`AppClientCallArgs`](/reference/algokit-utils-ts/api/modules/types_app_client/#appclientcallargs)

Any args to pass to any delete transaction that is issued as part of deployment

#### Inherited from

[AppClientDeployCallInterfaceParams](types_app_client.AppClientDeployCallInterfaceParams.md).[deleteArgs](types_app_client.AppClientDeployCallInterfaceParams.md#deleteargs)

#### Defined in

[src/types/app-client.ts:191](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L191)

---

### deployTimeParams

• `Optional` **deployTimeParams**: [`TealTemplateParams`](types_app.TealTemplateParams.md)

Any deploy-time parameters to replace in the TEAL code

#### Inherited from

[AppClientDeployCallInterfaceParams](types_app_client.AppClientDeployCallInterfaceParams.md).[deployTimeParams](types_app_client.AppClientDeployCallInterfaceParams.md#deploytimeparams)

#### Defined in

[src/types/app-client.ts:183](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L183)

---

### onSchemaBreak

• `Optional` **onSchemaBreak**: [`OnSchemaBreak`](/reference/algokit-utils-ts/api/enums/types_apponschemabreak/) \| `"replace"` \| `"fail"` \| `"append"`

What action to perform if a schema break is detected

#### Inherited from

[AppClientDeployCoreParams](types_app_client.AppClientDeployCoreParams.md).[onSchemaBreak](types_app_client.AppClientDeployCoreParams.md#onschemabreak)

#### Defined in

[src/types/app-client.ts:175](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L175)

---

### onUpdate

• `Optional` **onUpdate**: `"replace"` \| `"fail"` \| `"append"` \| [`OnUpdate`](/reference/algokit-utils-ts/api/enums/types_apponupdate/) \| `"update"`

What action to perform if a TEAL update is detected

#### Inherited from

[AppClientDeployCoreParams](types_app_client.AppClientDeployCoreParams.md).[onUpdate](types_app_client.AppClientDeployCoreParams.md#onupdate)

#### Defined in

[src/types/app-client.ts:177](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L177)

---

### schema

• `Optional` **schema**: `Partial`\<[`AppStorageSchema`](types_app.AppStorageSchema.md)\>

Any overrides for the storage schema to request for the created app; by default the schema indicated by the app spec is used.

#### Defined in

[src/types/app-client.ts:197](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L197)

---

### sendParams

• `Optional` **sendParams**: `Omit`\<[`SendTransactionParams`](types_transaction.SendTransactionParams.md), `"skipSending"` \| `"skipWaiting"`\>

Parameters to control transaction sending

#### Inherited from

[AppClientDeployCoreParams](types_app_client.AppClientDeployCoreParams.md).[sendParams](types_app_client.AppClientDeployCoreParams.md#sendparams)

#### Defined in

[src/types/app-client.ts:165](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L165)

---

### sender

• `Optional` **sender**: [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The optional sender to send the transaction from, will use the application client's default sender by default if specified

#### Inherited from

[AppClientDeployCoreParams](types_app_client.AppClientDeployCoreParams.md).[sender](types_app_client.AppClientDeployCoreParams.md#sender)

#### Defined in

[src/types/app-client.ts:163](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L163)

---

### updateArgs

• `Optional` **updateArgs**: [`AppClientCallArgs`](/reference/algokit-utils-ts/api/modules/types_app_client/#appclientcallargs)

Any args to pass to any update transaction that is issued as part of deployment

#### Inherited from

[AppClientDeployCallInterfaceParams](types_app_client.AppClientDeployCallInterfaceParams.md).[updateArgs](types_app_client.AppClientDeployCallInterfaceParams.md#updateargs)

#### Defined in

[src/types/app-client.ts:189](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L189)

---

### version

• `Optional` **version**: `string`

The version of the contract, uses "1.0" by default

#### Inherited from

[AppClientDeployCoreParams](types_app_client.AppClientDeployCoreParams.md).[version](types_app_client.AppClientDeployCoreParams.md#version)

#### Defined in

[src/types/app-client.ts:161](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L161)
