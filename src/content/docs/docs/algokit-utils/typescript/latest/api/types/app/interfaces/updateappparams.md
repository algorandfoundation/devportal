---
editUrl: false
next: false
prev: false
title: "UpdateAppParams"
---

Defined in: [src/types/app.ts:161](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L161)

:::caution[Deprecated]
Use `TransactionComposer` to construct update app transactions instead.

Parameters that are passed in when updating an app.
:::

## Extends

- `CreateOrUpdateAppParams`

## Properties

### ~~appId~~

> **appId**: `number` \| `bigint`

Defined in: [src/types/app.ts:163](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L163)

The id of the app to update

***

### ~~approvalProgram~~

> **approvalProgram**: `string` \| `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/types/app.ts:135](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L135)

The approval program as raw teal (string) or compiled teal, base 64 encoded as a byte array (Uint8Array)

#### Inherited from

`CreateOrUpdateAppParams.approvalProgram`

***

### ~~args?~~

> `optional` **args?**: [`AppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcallargs/)

Defined in: [src/types/app.ts:143](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L143)

The arguments passed in to the app call

#### Inherited from

`CreateOrUpdateAppParams.args`

***

### ~~atc?~~

> `optional` **atc?**: `AtomicTransactionComposer`

Defined in: [src/types/transaction.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L36)

An optional `AtomicTransactionComposer` to add the transaction to, if specified then `skipSending: undefined` has the same effect as `skipSending: true`

#### Inherited from

`CreateOrUpdateAppParams.atc`

***

### ~~clearStateProgram~~

> **clearStateProgram**: `string` \| `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/types/app.ts:137](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L137)

The clear state program as raw teal (string) or compiled teal, base 64 encoded as a byte array (Uint8Array)

#### Inherited from

`CreateOrUpdateAppParams.clearStateProgram`

***

### ~~fee?~~

> `optional` **fee?**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/transaction.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L40)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Inherited from

`CreateOrUpdateAppParams.fee`

***

### ~~from~~

> **from**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/app.ts:133](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L133)

The account (with private key loaded) that will send the transaction

#### Inherited from

`CreateOrUpdateAppParams.from`

***

### ~~maxFee?~~

> `optional` **maxFee?**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

The maximum fee that you are happy to pay (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

#### Inherited from

`CreateOrUpdateAppParams.maxFee`

***

### ~~maxRoundsToWaitForConfirmation?~~

> `optional` **maxRoundsToWaitForConfirmation?**: `number`

Defined in: [src/types/transaction.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L44)

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

#### Inherited from

`CreateOrUpdateAppParams.maxRoundsToWaitForConfirmation`

***

### ~~note?~~

> `optional` **note?**: [`TransactionNote`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/transactionnote/)

Defined in: [src/types/app.ts:141](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L141)

The (optional) transaction note

#### Inherited from

`CreateOrUpdateAppParams.note`

***

### ~~populateAppCallResources?~~

> `optional` **populateAppCallResources?**: `boolean`

Defined in: [src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

#### Inherited from

`CreateOrUpdateAppParams.populateAppCallResources`

***

### ~~skipSending?~~

> `optional` **skipSending?**: `boolean`

Defined in: [src/types/transaction.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L32)

Whether to skip signing and sending the transaction to the chain (default: transaction signed and sent to chain, unless `atc` specified)
and instead just return the raw transaction, e.g. so you can add it to a group of transactions

#### Inherited from

`CreateOrUpdateAppParams.skipSending`

***

### ~~skipWaiting?~~

> `optional` **skipWaiting?**: `boolean`

Defined in: [src/types/transaction.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L34)

Whether to skip waiting for the submitted transaction (only relevant if `skipSending` is `false` or unset)

#### Inherited from

`CreateOrUpdateAppParams.skipWaiting`

***

### ~~suppressLog?~~

> `optional` **suppressLog?**: `boolean`

Defined in: [src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)

Whether to suppress log messages from transaction send, default: do not suppress

#### Inherited from

`CreateOrUpdateAppParams.suppressLog`

***

### ~~transactionParams?~~

> `optional` **transactionParams?**: `SuggestedParams`

Defined in: [src/types/app.ts:139](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L139)

Optional transaction parameters

#### Inherited from

`CreateOrUpdateAppParams.transactionParams`
