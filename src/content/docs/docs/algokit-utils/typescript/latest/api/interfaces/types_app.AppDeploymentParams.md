---
title: AppDeploymentParams
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/) / AppDeploymentParams

[types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/).AppDeploymentParams

The parameters to deploy an app

## Hierarchy

- `Omit`\<[`CreateAppParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcreateappparams/), `"onCompleteAction"` \| `"args"` \| `"note"` \| `"skipSending"` \| `"skipWaiting"` \| `"atc"`\>

  ↳ **`AppDeploymentParams`**

## Table of contents

### Properties

- [approvalProgram](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#approvalprogram)
- [clearStateProgram](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#clearstateprogram)
- [createArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#createargs)
- [createOnCompleteAction](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#createoncompleteaction)
- [deleteArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#deleteargs)
- [deployTimeParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#deploytimeparams)
- [existingDeployments](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#existingdeployments)
- [fee](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#fee)
- [from](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#from)
- [maxFee](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#maxfee)
- [maxRoundsToWaitForConfirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#maxroundstowaitforconfirmation)
- [metadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#metadata)
- [onSchemaBreak](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#onschemabreak)
- [onUpdate](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#onupdate)
- [populateAppCallResources](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#populateappcallresources)
- [schema](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#schema)
- [suppressLog](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#suppresslog)
- [transactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#transactionparams)
- [updateArgs](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymentparams/#updateargs)

## Properties

### approvalProgram

• **approvalProgram**: `string` \| `Uint8Array`

The approval program as raw teal (string) or compiled teal, base 64 encoded as a byte array (Uint8Array)

#### Inherited from

Omit.approvalProgram

#### Defined in

[src/types/app.ts:135](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L135)

---

### clearStateProgram

• **clearStateProgram**: `string` \| `Uint8Array`

The clear state program as raw teal (string) or compiled teal, base 64 encoded as a byte array (Uint8Array)

#### Inherited from

Omit.clearStateProgram

#### Defined in

[src/types/app.ts:137](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L137)

---

### createArgs

• `Optional` **createArgs**: [`AppCallArgs`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#appcallargs)

Any args to pass to any create transaction that is issued as part of deployment

#### Defined in

[src/types/app.ts:323](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L323)

---

### createOnCompleteAction

• `Optional` **createOnCompleteAction**: `"no_op"` \| `"opt_in"` \| `"close_out"` \| `"update_application"` \| `"delete_application"` \| `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC`

Override the on-completion action for the create call; defaults to NoOp

#### Defined in

[src/types/app.ts:325](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L325)

---

### deleteArgs

• `Optional` **deleteArgs**: [`AppCallArgs`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#appcallargs)

Any args to pass to any delete transaction that is issued as part of deployment

#### Defined in

[src/types/app.ts:329](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L329)

---

### deployTimeParams

• `Optional` **deployTimeParams**: [`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_apptealtemplateparams/)

Any deploy-time parameters to replace in the TEAL code

#### Defined in

[src/types/app.ts:315](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L315)

---

### existingDeployments

• `Optional` **existingDeployments**: [`AppLookup`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appapplookup/)

Optional cached value of the existing apps for the given creator

#### Defined in

[src/types/app.ts:321](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L321)

---

### fee

• `Optional` **fee**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amountalgoamount/)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Inherited from

Omit.fee

#### Defined in

[src/types/transaction.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L40)

---

### from

• **from**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom)

The account (with private key loaded) that will send the transaction

#### Inherited from

Omit.from

#### Defined in

[src/types/app.ts:133](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L133)

---

### maxFee

• `Optional` **maxFee**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amountalgoamount/)

The maximum fee that you are happy to pay (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

#### Inherited from

Omit.maxFee

#### Defined in

[src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

---

### maxRoundsToWaitForConfirmation

• `Optional` **maxRoundsToWaitForConfirmation**: `number`

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

#### Inherited from

Omit.maxRoundsToWaitForConfirmation

#### Defined in

[src/types/transaction.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L44)

---

### metadata

• **metadata**: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/)

The deployment metadata

#### Defined in

[src/types/app.ts:313](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L313)

---

### onSchemaBreak

• `Optional` **onSchemaBreak**: [`OnSchemaBreak`](/docs/algokit-utils/typescript/latest/api/enums/types_apponschemabreak/) \| `"replace"` \| `"fail"` \| `"append"`

What action to perform if a schema break is detected

#### Defined in

[src/types/app.ts:317](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L317)

---

### onUpdate

• `Optional` **onUpdate**: `"replace"` \| `"fail"` \| `"append"` \| [`OnUpdate`](/docs/algokit-utils/typescript/latest/api/enums/types_apponupdate/) \| `"update"`

What action to perform if a TEAL update is detected

#### Defined in

[src/types/app.ts:319](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L319)

---

### populateAppCallResources

• `Optional` **populateAppCallResources**: `boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

#### Inherited from

Omit.populateAppCallResources

#### Defined in

[src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

---

### schema

• **schema**: [`AppStorageSchema`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappstorageschema/)

The storage schema to request for the created app

#### Inherited from

Omit.schema

#### Defined in

[src/types/app.ts:152](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L152)

---

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress

#### Inherited from

Omit.suppressLog

#### Defined in

[src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)

---

### transactionParams

• `Optional` **transactionParams**: `SuggestedParams`

Optional transaction parameters

#### Inherited from

Omit.transactionParams

#### Defined in

[src/types/app.ts:139](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L139)

---

### updateArgs

• `Optional` **updateArgs**: [`AppCallArgs`](/docs/algokit-utils/typescript/latest/api/modules/types_app/#appcallargs)

Any args to pass to any update transaction that is issued as part of deployment

#### Defined in

[src/types/app.ts:327](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L327)
