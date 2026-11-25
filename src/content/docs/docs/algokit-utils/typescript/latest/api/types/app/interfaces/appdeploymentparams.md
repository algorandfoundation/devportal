---
editUrl: false
next: false
prev: false
title: "AppDeploymentParams"
---

Defined in: [src/types/app.ts:310](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L310)

The parameters to deploy an app

## Extends

- `Omit`\<[`CreateAppParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/createappparams/), `"onCompleteAction"` \| `"args"` \| `"note"` \| `"skipSending"` \| `"skipWaiting"` \| `"atc"`\>

## Properties

### approvalProgram

> **approvalProgram**: `string` \| `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/types/app.ts:135](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L135)

The approval program as raw teal (string) or compiled teal, base 64 encoded as a byte array (Uint8Array)

#### Inherited from

[`CreateAppParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/createappparams/).[`approvalProgram`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/createappparams/#approvalprogram)

***

### clearStateProgram

> **clearStateProgram**: `string` \| `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/types/app.ts:137](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L137)

The clear state program as raw teal (string) or compiled teal, base 64 encoded as a byte array (Uint8Array)

#### Inherited from

[`CreateAppParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/createappparams/).[`clearStateProgram`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/createappparams/#clearstateprogram)

***

### createArgs?

> `optional` **createArgs?**: [`AppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcallargs/)

Defined in: [src/types/app.ts:323](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L323)

Any args to pass to any create transaction that is issued as part of deployment

***

### createOnCompleteAction?

> `optional` **createOnCompleteAction?**: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` \| `"no_op"` \| `"opt_in"` \| `"close_out"` \| `"update_application"` \| `"delete_application"`

Defined in: [src/types/app.ts:325](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L325)

Override the on-completion action for the create call; defaults to NoOp

***

### deleteArgs?

> `optional` **deleteArgs?**: [`AppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcallargs/)

Defined in: [src/types/app.ts:329](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L329)

Any args to pass to any delete transaction that is issued as part of deployment

***

### deployTimeParams?

> `optional` **deployTimeParams?**: [`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/tealtemplateparams/)

Defined in: [src/types/app.ts:315](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L315)

Any deploy-time parameters to replace in the TEAL code

***

### existingDeployments?

> `optional` **existingDeployments?**: [`AppLookup`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/applookup/)

Defined in: [src/types/app.ts:321](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L321)

Optional cached value of the existing apps for the given creator

***

### fee?

> `optional` **fee?**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/transaction.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L40)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Inherited from

[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/).[`fee`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/#fee)

***

### from

> **from**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/app.ts:133](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L133)

The account (with private key loaded) that will send the transaction

#### Inherited from

[`CreateAppParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/createappparams/).[`from`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/createappparams/#from)

***

### maxFee?

> `optional` **maxFee?**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

The maximum fee that you are happy to pay (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

#### Inherited from

[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/).[`maxFee`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/#maxfee)

***

### maxRoundsToWaitForConfirmation?

> `optional` **maxRoundsToWaitForConfirmation?**: `number`

Defined in: [src/types/transaction.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L44)

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

#### Inherited from

[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/).[`maxRoundsToWaitForConfirmation`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/#maxroundstowaitforconfirmation)

***

### metadata

> **metadata**: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/)

Defined in: [src/types/app.ts:313](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L313)

The deployment metadata

***

### onSchemaBreak?

> `optional` **onSchemaBreak?**: `"replace"` \| `"fail"` \| `"append"` \| [`OnSchemaBreak`](/docs/algokit-utils/typescript/latest/api/types/app/enumerations/onschemabreak/)

Defined in: [src/types/app.ts:317](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L317)

What action to perform if a schema break is detected

***

### onUpdate?

> `optional` **onUpdate?**: `"replace"` \| `"fail"` \| `"append"` \| `"update"` \| [`OnUpdate`](/docs/algokit-utils/typescript/latest/api/types/app/enumerations/onupdate/)

Defined in: [src/types/app.ts:319](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L319)

What action to perform if a TEAL update is detected

***

### populateAppCallResources?

> `optional` **populateAppCallResources?**: `boolean`

Defined in: [src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

#### Inherited from

[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/).[`populateAppCallResources`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/#populateappcallresources)

***

### schema

> **schema**: [`AppStorageSchema`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appstorageschema/)

Defined in: [src/types/app.ts:152](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L152)

The storage schema to request for the created app

#### Inherited from

[`CreateAppParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/createappparams/).[`schema`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/createappparams/#schema)

***

### suppressLog?

> `optional` **suppressLog?**: `boolean`

Defined in: [src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)

Whether to suppress log messages from transaction send, default: do not suppress

#### Inherited from

[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/).[`suppressLog`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/#suppresslog)

***

### transactionParams?

> `optional` **transactionParams?**: `SuggestedParams`

Defined in: [src/types/app.ts:139](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L139)

Optional transaction parameters

#### Inherited from

[`CreateAppParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/createappparams/).[`transactionParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/createappparams/#transactionparams)

***

### updateArgs?

> `optional` **updateArgs?**: [`AppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcallargs/)

Defined in: [src/types/app.ts:327](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L327)

Any args to pass to any update transaction that is issued as part of deployment
