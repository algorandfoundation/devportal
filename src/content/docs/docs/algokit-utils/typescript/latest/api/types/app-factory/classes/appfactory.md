---
editUrl: false
next: false
prev: false
title: "AppFactory"
---

Defined in: [src/types/app-factory.ts:170](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L170)

ARC-56/ARC-32 app factory that, for a given app spec, allows you to create
and deploy one or more app instances and to create one or more app clients
to interact with those (or other) app instances.

## Constructors

### Constructor

> **new AppFactory**(`params`): `AppFactory`

Defined in: [src/types/app-factory.ts:197](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L197)

Create a new app factory.

#### Parameters

##### params

[`AppFactoryParams`](/docs/algokit-utils/typescript/latest/api/types/app-factory/interfaces/appfactoryparams/)

The parameters to create the app factory

#### Returns

`AppFactory`

The `AppFactory` instance

#### Example

```typescript
const appFactory = new AppFactory({
  appSpec: appSpec,
  algorand: AlgorandClient.mainNet(),
})

## Properties

### createTransaction

> `readonly` **createTransaction**: `object`

Defined in: [src/types/app-factory.ts:245](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L245)

Create transactions for the current app

#### bare

> **bare**: `object`

Create bare (raw) transactions for the current app

##### bare.create

> **create**: (`params?`) => `Promise`\<`Transaction`\>

Create a create app call transaction using a bare (raw) create call.

Performs deploy-time TEAL template placeholder substitutions (if specified).

###### Parameters

###### params?

The parameters to create the create call transaction

###### accessReferences?

[`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]

Access references unifies `accountReferences`, `appReferences`, `assetReferences`, and `boxReferences` under a single list. If non-empty, these other reference lists must be empty. If access is empty, those other reference lists may be non-empty.

###### accountReferences?

(`string` \| `Address`)[]

Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### appReferences?

`bigint`[]

The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### args?

`Uint8Array`\<`ArrayBufferLike`\>[]

Any [arguments to pass to the smart contract call](https://dev.algorand.co/concepts/smart-contracts/languages/teal/#argument-passing).

###### assetReferences?

`bigint`[]

The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### boxReferences?

([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]

Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

Either the name identifier (which will be set against app ID of `0` i.e.
 the current app), or a box identifier with the name identifier and app ID.

###### deletable?

`boolean`

Whether or not the contract should have deploy-time permanence control set, undefined = ignore

###### deployTimeParams?

[`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/tealtemplateparams/)

Any deploy-time parameters to replace in the TEAL code

###### extraFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

The fee to pay IN ADDITION to the suggested fee. Useful for manually covering inner transaction fees.

###### extraProgramPages?

`number`

Number of extra pages required for the programs.
Defaults to the number needed for the programs in this call if not specified.
This is immutable once the app is created.

###### firstValidRound?

`bigint`

Set the first round this transaction is valid.
If left undefined, the value from algod will be used.

We recommend you only set this when you intentionally want this to be some time in the future.

###### lastValidRound?

`bigint`

The last round this transaction is valid. It is recommended to use `validityWindow` instead.

###### lease?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Prevent multiple transactions with the same lease being included within the validity window.

A [lease](https://dev.algorand.co/concepts/transactions/leases)
 enforces a mutually exclusive transaction (useful to prevent double-posting and other scenarios).

###### maxFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.

###### note?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Note to attach to the transaction. Max of 1000 bytes.

###### onComplete?

`NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC`

###### rejectVersion?

`number`

If set, the transaction will be rejected when the app's version is greater than or equal to this value. This can be used to prevent calling an app after it has been updated. Set to 0 or leave undefined to skip the version check.

###### rekeyTo?

`string` \| `Address`

Change the signing key of the sender to the given address.

**Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

###### schema?

\{ `globalByteSlices`: `number`; `globalInts`: `number`; `localByteSlices`: `number`; `localInts`: `number`; \}

The state schema for the app. This is immutable once the app is created. By default uses the ARC32/ARC-56 spec.

###### schema.globalByteSlices

`number`

The number of byte slices saved in global state.

###### schema.globalInts

`number`

The number of integers saved in global state.

###### schema.localByteSlices

`number`

The number of byte slices saved in local state.

###### schema.localInts

`number`

The number of integers saved in local state.

###### sender?

`string` \| `Address`

The address of the account sending the transaction, if undefined then the app client's defaultSender is used.

###### signer?

[`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`

The function used to sign transaction(s); if not specified then
 an attempt will be made to find a registered signer for the
 given `sender` or use a default signer (if configured).

###### staticFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction.

###### updatable?

`boolean`

Whether or not the contract should have deploy-time immutability control set, undefined = ignore

###### validityWindow?

`number` \| `bigint`

How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.

###### Returns

`Promise`\<`Transaction`\>

The create call transaction

#### create

> **create**: (`params`) => `Promise`\<\{ `methodCalls`: `Map`\<`number`, `ABIMethod`\>; `signers`: `Map`\<`number`, `TransactionSigner`\>; `transactions`: `Transaction`[]; \}\>

Create a create app call transaction using an ABI create call.

Performs deploy-time TEAL template placeholder substitutions (if specified).

##### Parameters

###### params

The parameters to create the create call transaction

###### accessReferences?

[`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]

Access references unifies `accountReferences`, `appReferences`, `assetReferences`, and `boxReferences` under a single list. If non-empty, these other reference lists must be empty. If access is empty, those other reference lists may be non-empty.

###### accountReferences?

(`string` \| `Address`)[]

Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### appReferences?

`bigint`[]

The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### args?

(`ABIValue` \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| [`AppMethodCallTransactionArgument`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appmethodcalltransactionargument/) \| `undefined`)[]

Arguments to the ABI method, either:
* An ABI value
* An ARC-56 struct
* A transaction with explicit signer
* A transaction (where the signer will be automatically assigned)
* An unawaited transaction (e.g. from algorand.createTransaction.transactionType())
* Another method call (via method call params object)
* undefined (this represents a placeholder for either a default argument or a transaction argument that is fulfilled by another method call argument)

###### assetReferences?

`bigint`[]

The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### boxReferences?

([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]

Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

Either the name identifier (which will be set against app ID of `0` i.e.
 the current app), or a box identifier with the name identifier and app ID.

###### deletable?

`boolean`

Whether or not the contract should have deploy-time permanence control set, undefined = ignore

###### deployTimeParams?

[`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/tealtemplateparams/)

Any deploy-time parameters to replace in the TEAL code

###### extraFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

The fee to pay IN ADDITION to the suggested fee. Useful for manually covering inner transaction fees.

###### extraProgramPages?

`number`

Number of extra pages required for the programs.
Defaults to the number needed for the programs in this call if not specified.
This is immutable once the app is created.

###### firstValidRound?

`bigint`

Set the first round this transaction is valid.
If left undefined, the value from algod will be used.

We recommend you only set this when you intentionally want this to be some time in the future.

###### lastValidRound?

`bigint`

The last round this transaction is valid. It is recommended to use `validityWindow` instead.

###### lease?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Prevent multiple transactions with the same lease being included within the validity window.

A [lease](https://dev.algorand.co/concepts/transactions/leases)
 enforces a mutually exclusive transaction (useful to prevent double-posting and other scenarios).

###### maxFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.

###### method

`string`

The method name or method signature to call if an ABI call is being emitted

**Examples**

```ts
Method name
`my_method`
```

```ts
Method signature
`my_method(unit64,string)bytes`
```

###### note?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Note to attach to the transaction. Max of 1000 bytes.

###### onComplete?

`NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC`

The [on-complete](https://dev.algorand.co/concepts/smart-contracts/avm#oncomplete) action of the call; defaults to no-op.

###### rejectVersion?

`number`

If set, the transaction will be rejected when the app's version is greater than or equal to this value. This can be used to prevent calling an app after it has been updated. Set to 0 or leave undefined to skip the version check.

###### rekeyTo?

`string` \| `Address`

Change the signing key of the sender to the given address.

**Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

###### schema?

\{ `globalByteSlices`: `number`; `globalInts`: `number`; `localByteSlices`: `number`; `localInts`: `number`; \}

The state schema for the app. This is immutable once the app is created. By default uses the ARC32/ARC-56 spec.

###### schema.globalByteSlices

`number`

The number of byte slices saved in global state.

###### schema.globalInts

`number`

The number of integers saved in global state.

###### schema.localByteSlices

`number`

The number of byte slices saved in local state.

###### schema.localInts

`number`

The number of integers saved in local state.

###### sender?

`string` \| `Address`

The address of the account sending the transaction, if undefined then the app client's defaultSender is used.

###### signer?

[`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`

The function used to sign transaction(s); if not specified then
 an attempt will be made to find a registered signer for the
 given `sender` or use a default signer (if configured).

###### staticFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction.

###### updatable?

`boolean`

Whether or not the contract should have deploy-time immutability control set, undefined = ignore

###### validityWindow?

`number` \| `bigint`

How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.

##### Returns

`Promise`\<\{ `methodCalls`: `Map`\<`number`, `ABIMethod`\>; `signers`: `Map`\<`number`, `TransactionSigner`\>; `transactions`: `Transaction`[]; \}\>

The create call transaction

***

### send

> `readonly` **send**: `object`

Defined in: [src/types/app-factory.ts:273](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L273)

Send transactions to the current app

#### bare

> **bare**: `object`

Send bare (raw) transactions for the current app

##### bare.create

> **create**: (`params?`) => `Promise`\<\{ `appClient`: [`AppClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/appclient/); `result`: \{ `appAddress`: `Address`; `appId`: `bigint`; `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation`: `PendingTransactionResponse`; `confirmations`: `PendingTransactionResponse`[]; `groupId`: `string`; `return`: `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/)[]; `transaction`: `Transaction`; `transactions`: `Transaction`[]; `txIds`: `string`[]; \}; \}\>

Creates an instance of the app using a bare (raw) create call and returns the result
of the creation transaction and an app client to interact with that app instance.

Performs deploy-time TEAL template placeholder substitutions (if specified).

###### Parameters

###### params?

`object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendparams/)

The parameters to create the app

###### Returns

`Promise`\<\{ `appClient`: [`AppClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/appclient/); `result`: \{ `appAddress`: `Address`; `appId`: `bigint`; `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation`: `PendingTransactionResponse`; `confirmations`: `PendingTransactionResponse`[]; `groupId`: `string`; `return`: `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/)[]; `transaction`: `Transaction`; `transactions`: `Transaction`[]; `txIds`: `string`[]; \}; \}\>

The app client and the result of the creation transaction

#### create

> **create**: (`params`) => `Promise`\<\{ `appClient`: [`AppClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/appclient/); `result`: \{ `appAddress`: `Address`; `appId`: `bigint`; `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation`: `PendingTransactionResponse`; `confirmations`: `PendingTransactionResponse`[]; `groupId`: `string`; `return?`: `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue` \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/)[]; `transaction`: `Transaction`; `transactions`: `Transaction`[]; `txIds`: `string`[]; \}; \}\>

Creates an instance of the app and returns the result of the creation
transaction and an app client to interact with that app instance.

Performs deploy-time TEAL template placeholder substitutions (if specified).

##### Parameters

###### params

`object` & [`SendParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendparams/)

The parameters to create the app

##### Returns

`Promise`\<\{ `appClient`: [`AppClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/appclient/); `result`: \{ `appAddress`: `Address`; `appId`: `bigint`; `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation`: `PendingTransactionResponse`; `confirmations`: `PendingTransactionResponse`[]; `groupId`: `string`; `return?`: `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue` \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/)[]; `transaction`: `Transaction`; `transactions`: `Transaction`[]; `txIds`: `string`[]; \}; \}\>

The app client and the result of the creation transaction

## Accessors

### algorand

#### Get Signature

> **get** **algorand**(): [`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/types/algorand-client/classes/algorandclient/)

Defined in: [src/types/app-factory.ts:221](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L221)

Return the algorand client this factory is using.

##### Returns

[`AlgorandClient`](/docs/algokit-utils/typescript/latest/api/types/algorand-client/classes/algorandclient/)

***

### appName

#### Get Signature

> **get** **appName**(): `string`

Defined in: [src/types/app-factory.ts:211](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L211)

The name of the app (from the ARC-32 / ARC-56 app spec or override).

##### Returns

`string`

***

### appSpec

#### Get Signature

> **get** **appSpec**(): [`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/arc56contract/)

Defined in: [src/types/app-factory.ts:216](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L216)

The ARC-56 app spec being used

##### Returns

[`Arc56Contract`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/arc56contract/)

***

### params

#### Get Signature

> **get** **params**(): `object`

Defined in: [src/types/app-factory.ts:240](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L240)

Get parameters to create transactions (create and deploy related calls) for the current app.

A good mental model for this is that these parameters represent a deferred transaction creation.

##### Examples

**Create a transaction in the future using Algorand Client**

```typescript
const createAppParams = appFactory.params.create({method: 'create_method', args: [123, 'hello']})
// ...
await algorand.send.AppCreateMethodCall(createAppParams)
```

**Define a nested transaction as an ABI argument**

```typescript
const createAppParams = appFactory.params.create({method: 'create_method', args: [123, 'hello']})
await appClient.send.call({method: 'my_method', args: [createAppParams]})
```

##### Returns

###### bare

> **bare**: `object`

###### bare.create

> **create**: (`params?`) => `Promise`\<`object` & `object`\>

Return params for a create bare call, including deploy-time TEAL template replacements and compilation if provided

###### Parameters

###### params?

###### accessReferences?

[`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]

Access references unifies `accountReferences`, `appReferences`, `assetReferences`, and `boxReferences` under a single list. If non-empty, these other reference lists must be empty. If access is empty, those other reference lists may be non-empty.

###### accountReferences?

(`string` \| `Address`)[]

Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### appReferences?

`bigint`[]

The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### args?

`Uint8Array`\<`ArrayBufferLike`\>[]

Any [arguments to pass to the smart contract call](https://dev.algorand.co/concepts/smart-contracts/languages/teal/#argument-passing).

###### assetReferences?

`bigint`[]

The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### boxReferences?

([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]

Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

Either the name identifier (which will be set against app ID of `0` i.e.
 the current app), or a box identifier with the name identifier and app ID.

###### deletable?

`boolean`

Whether or not the contract should have deploy-time permanence control set, undefined = ignore

###### deployTimeParams?

[`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/tealtemplateparams/)

Any deploy-time parameters to replace in the TEAL code

###### extraFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

The fee to pay IN ADDITION to the suggested fee. Useful for manually covering inner transaction fees.

###### extraProgramPages?

`number`

Number of extra pages required for the programs.
Defaults to the number needed for the programs in this call if not specified.
This is immutable once the app is created.

###### firstValidRound?

`bigint`

Set the first round this transaction is valid.
If left undefined, the value from algod will be used.

We recommend you only set this when you intentionally want this to be some time in the future.

###### lastValidRound?

`bigint`

The last round this transaction is valid. It is recommended to use `validityWindow` instead.

###### lease?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Prevent multiple transactions with the same lease being included within the validity window.

A [lease](https://dev.algorand.co/concepts/transactions/leases)
 enforces a mutually exclusive transaction (useful to prevent double-posting and other scenarios).

###### maxFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.

###### note?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Note to attach to the transaction. Max of 1000 bytes.

###### onComplete?

`NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC`

###### rejectVersion?

`number`

If set, the transaction will be rejected when the app's version is greater than or equal to this value. This can be used to prevent calling an app after it has been updated. Set to 0 or leave undefined to skip the version check.

###### rekeyTo?

`string` \| `Address`

Change the signing key of the sender to the given address.

**Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

###### schema?

\{ `globalByteSlices`: `number`; `globalInts`: `number`; `localByteSlices`: `number`; `localInts`: `number`; \}

The state schema for the app. This is immutable once the app is created. By default uses the ARC32/ARC-56 spec.

###### schema.globalByteSlices

`number`

The number of byte slices saved in global state.

###### schema.globalInts

`number`

The number of integers saved in global state.

###### schema.localByteSlices

`number`

The number of byte slices saved in local state.

###### schema.localInts

`number`

The number of integers saved in local state.

###### sender?

`string` \| `Address`

The address of the account sending the transaction, if undefined then the app client's defaultSender is used.

###### signer?

[`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`

The function used to sign transaction(s); if not specified then
 an attempt will be made to find a registered signer for the
 given `sender` or use a default signer (if configured).

###### staticFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction.

###### updatable?

`boolean`

Whether or not the contract should have deploy-time immutability control set, undefined = ignore

###### validityWindow?

`number` \| `bigint`

How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.

###### Returns

`Promise`\<`object` & `object`\>

###### bare.deployDelete

> **deployDelete**: (`params?`) => `object` & `object`

Return params for a deployment delete bare call

###### Parameters

###### params?

###### accessReferences?

[`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]

Access references unifies `accountReferences`, `appReferences`, `assetReferences`, and `boxReferences` under a single list. If non-empty, these other reference lists must be empty. If access is empty, those other reference lists may be non-empty.

###### accountReferences?

(`string` \| `Address`)[]

Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### appReferences?

`bigint`[]

The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### args?

`Uint8Array`\<`ArrayBufferLike`\>[]

Any [arguments to pass to the smart contract call](https://dev.algorand.co/concepts/smart-contracts/languages/teal/#argument-passing).

###### assetReferences?

`bigint`[]

The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### boxReferences?

([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]

Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

Either the name identifier (which will be set against app ID of `0` i.e.
 the current app), or a box identifier with the name identifier and app ID.

###### extraFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

The fee to pay IN ADDITION to the suggested fee. Useful for manually covering inner transaction fees.

###### firstValidRound?

`bigint`

Set the first round this transaction is valid.
If left undefined, the value from algod will be used.

We recommend you only set this when you intentionally want this to be some time in the future.

###### lastValidRound?

`bigint`

The last round this transaction is valid. It is recommended to use `validityWindow` instead.

###### lease?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Prevent multiple transactions with the same lease being included within the validity window.

A [lease](https://dev.algorand.co/concepts/transactions/leases)
 enforces a mutually exclusive transaction (useful to prevent double-posting and other scenarios).

###### maxFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.

###### note?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Note to attach to the transaction. Max of 1000 bytes.

###### rejectVersion?

`number`

If set, the transaction will be rejected when the app's version is greater than or equal to this value. This can be used to prevent calling an app after it has been updated. Set to 0 or leave undefined to skip the version check.

###### rekeyTo?

`string` \| `Address`

Change the signing key of the sender to the given address.

**Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

###### sender?

`string` \| `Address`

The address of the account sending the transaction, if undefined then the app client's defaultSender is used.

###### signer?

[`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`

The function used to sign transaction(s); if not specified then
 an attempt will be made to find a registered signer for the
 given `sender` or use a default signer (if configured).

###### staticFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction.

###### validityWindow?

`number` \| `bigint`

How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.

###### Returns

###### bare.deployUpdate

> **deployUpdate**: (`params?`) => `object` & `object`

Return params for a deployment update bare call

###### Parameters

###### params?

###### accessReferences?

[`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]

Access references unifies `accountReferences`, `appReferences`, `assetReferences`, and `boxReferences` under a single list. If non-empty, these other reference lists must be empty. If access is empty, those other reference lists may be non-empty.

###### accountReferences?

(`string` \| `Address`)[]

Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### appReferences?

`bigint`[]

The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### args?

`Uint8Array`\<`ArrayBufferLike`\>[]

Any [arguments to pass to the smart contract call](https://dev.algorand.co/concepts/smart-contracts/languages/teal/#argument-passing).

###### assetReferences?

`bigint`[]

The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### boxReferences?

([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]

Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

Either the name identifier (which will be set against app ID of `0` i.e.
 the current app), or a box identifier with the name identifier and app ID.

###### extraFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

The fee to pay IN ADDITION to the suggested fee. Useful for manually covering inner transaction fees.

###### firstValidRound?

`bigint`

Set the first round this transaction is valid.
If left undefined, the value from algod will be used.

We recommend you only set this when you intentionally want this to be some time in the future.

###### lastValidRound?

`bigint`

The last round this transaction is valid. It is recommended to use `validityWindow` instead.

###### lease?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Prevent multiple transactions with the same lease being included within the validity window.

A [lease](https://dev.algorand.co/concepts/transactions/leases)
 enforces a mutually exclusive transaction (useful to prevent double-posting and other scenarios).

###### maxFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.

###### note?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Note to attach to the transaction. Max of 1000 bytes.

###### rejectVersion?

`number`

If set, the transaction will be rejected when the app's version is greater than or equal to this value. This can be used to prevent calling an app after it has been updated. Set to 0 or leave undefined to skip the version check.

###### rekeyTo?

`string` \| `Address`

Change the signing key of the sender to the given address.

**Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

###### sender?

`string` \| `Address`

The address of the account sending the transaction, if undefined then the app client's defaultSender is used.

###### signer?

[`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`

The function used to sign transaction(s); if not specified then
 an attempt will be made to find a registered signer for the
 given `sender` or use a default signer (if configured).

###### staticFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction.

###### validityWindow?

`number` \| `bigint`

How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.

###### Returns

###### create

> **create**: (`params`) => `Promise`\<`object` & `object`\>

Return params for a create ABI call, including deploy-time TEAL template replacements and compilation if provided

###### Parameters

###### params

###### accessReferences?

[`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]

Access references unifies `accountReferences`, `appReferences`, `assetReferences`, and `boxReferences` under a single list. If non-empty, these other reference lists must be empty. If access is empty, those other reference lists may be non-empty.

###### accountReferences?

(`string` \| `Address`)[]

Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### appReferences?

`bigint`[]

The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### args?

(`ABIValue` \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| [`AppMethodCallTransactionArgument`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appmethodcalltransactionargument/) \| `undefined`)[]

Arguments to the ABI method, either:
* An ABI value
* An ARC-56 struct
* A transaction with explicit signer
* A transaction (where the signer will be automatically assigned)
* An unawaited transaction (e.g. from algorand.createTransaction.transactionType())
* Another method call (via method call params object)
* undefined (this represents a placeholder for either a default argument or a transaction argument that is fulfilled by another method call argument)

###### assetReferences?

`bigint`[]

The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### boxReferences?

([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]

Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

Either the name identifier (which will be set against app ID of `0` i.e.
 the current app), or a box identifier with the name identifier and app ID.

###### deletable?

`boolean`

Whether or not the contract should have deploy-time permanence control set, undefined = ignore

###### deployTimeParams?

[`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/tealtemplateparams/)

Any deploy-time parameters to replace in the TEAL code

###### extraFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

The fee to pay IN ADDITION to the suggested fee. Useful for manually covering inner transaction fees.

###### extraProgramPages?

`number`

Number of extra pages required for the programs.
Defaults to the number needed for the programs in this call if not specified.
This is immutable once the app is created.

###### firstValidRound?

`bigint`

Set the first round this transaction is valid.
If left undefined, the value from algod will be used.

We recommend you only set this when you intentionally want this to be some time in the future.

###### lastValidRound?

`bigint`

The last round this transaction is valid. It is recommended to use `validityWindow` instead.

###### lease?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Prevent multiple transactions with the same lease being included within the validity window.

A [lease](https://dev.algorand.co/concepts/transactions/leases)
 enforces a mutually exclusive transaction (useful to prevent double-posting and other scenarios).

###### maxFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.

###### method

`string`

The method name or method signature to call if an ABI call is being emitted

**Examples**

```ts
Method name
`my_method`
```

```ts
Method signature
`my_method(unit64,string)bytes`
```

###### note?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Note to attach to the transaction. Max of 1000 bytes.

###### onComplete?

`NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC`

The [on-complete](https://dev.algorand.co/concepts/smart-contracts/avm#oncomplete) action of the call; defaults to no-op.

###### rejectVersion?

`number`

If set, the transaction will be rejected when the app's version is greater than or equal to this value. This can be used to prevent calling an app after it has been updated. Set to 0 or leave undefined to skip the version check.

###### rekeyTo?

`string` \| `Address`

Change the signing key of the sender to the given address.

**Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

###### schema?

\{ `globalByteSlices`: `number`; `globalInts`: `number`; `localByteSlices`: `number`; `localInts`: `number`; \}

The state schema for the app. This is immutable once the app is created. By default uses the ARC32/ARC-56 spec.

###### schema.globalByteSlices

`number`

The number of byte slices saved in global state.

###### schema.globalInts

`number`

The number of integers saved in global state.

###### schema.localByteSlices

`number`

The number of byte slices saved in local state.

###### schema.localInts

`number`

The number of integers saved in local state.

###### sender?

`string` \| `Address`

The address of the account sending the transaction, if undefined then the app client's defaultSender is used.

###### signer?

[`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`

The function used to sign transaction(s); if not specified then
 an attempt will be made to find a registered signer for the
 given `sender` or use a default signer (if configured).

###### staticFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction.

###### updatable?

`boolean`

Whether or not the contract should have deploy-time immutability control set, undefined = ignore

###### validityWindow?

`number` \| `bigint`

How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.

###### Returns

`Promise`\<`object` & `object`\>

###### deployDelete

> **deployDelete**: (`params`) => `object` & `object`

Return params for a deployment delete ABI call

###### Parameters

###### params

###### accessReferences?

[`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]

Access references unifies `accountReferences`, `appReferences`, `assetReferences`, and `boxReferences` under a single list. If non-empty, these other reference lists must be empty. If access is empty, those other reference lists may be non-empty.

###### accountReferences?

(`string` \| `Address`)[]

Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### appReferences?

`bigint`[]

The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### args?

(`ABIValue` \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| [`AppMethodCallTransactionArgument`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appmethodcalltransactionargument/) \| `undefined`)[]

Arguments to the ABI method, either:
* An ABI value
* An ARC-56 struct
* A transaction with explicit signer
* A transaction (where the signer will be automatically assigned)
* An unawaited transaction (e.g. from algorand.createTransaction.transactionType())
* Another method call (via method call params object)
* undefined (this represents a placeholder for either a default argument or a transaction argument that is fulfilled by another method call argument)

###### assetReferences?

`bigint`[]

The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### boxReferences?

([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]

Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

Either the name identifier (which will be set against app ID of `0` i.e.
 the current app), or a box identifier with the name identifier and app ID.

###### extraFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

The fee to pay IN ADDITION to the suggested fee. Useful for manually covering inner transaction fees.

###### firstValidRound?

`bigint`

Set the first round this transaction is valid.
If left undefined, the value from algod will be used.

We recommend you only set this when you intentionally want this to be some time in the future.

###### lastValidRound?

`bigint`

The last round this transaction is valid. It is recommended to use `validityWindow` instead.

###### lease?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Prevent multiple transactions with the same lease being included within the validity window.

A [lease](https://dev.algorand.co/concepts/transactions/leases)
 enforces a mutually exclusive transaction (useful to prevent double-posting and other scenarios).

###### maxFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.

###### method

`string`

The method name or method signature to call if an ABI call is being emitted

**Examples**

```ts
Method name
`my_method`
```

```ts
Method signature
`my_method(unit64,string)bytes`
```

###### note?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Note to attach to the transaction. Max of 1000 bytes.

###### onComplete?

`OnApplicationComplete`

The [on-complete](https://dev.algorand.co/concepts/smart-contracts/avm#oncomplete) action of the call; defaults to no-op.

###### rejectVersion?

`number`

If set, the transaction will be rejected when the app's version is greater than or equal to this value. This can be used to prevent calling an app after it has been updated. Set to 0 or leave undefined to skip the version check.

###### rekeyTo?

`string` \| `Address`

Change the signing key of the sender to the given address.

**Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

###### sender?

`string` \| `Address`

The address of the account sending the transaction, if undefined then the app client's defaultSender is used.

###### signer?

[`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`

The function used to sign transaction(s); if not specified then
 an attempt will be made to find a registered signer for the
 given `sender` or use a default signer (if configured).

###### staticFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction.

###### validityWindow?

`number` \| `bigint`

How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.

###### Returns

###### deployUpdate

> **deployUpdate**: (`params`) => `object` & `object`

Return params for a deployment update ABI call

###### Parameters

###### params

###### accessReferences?

[`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]

Access references unifies `accountReferences`, `appReferences`, `assetReferences`, and `boxReferences` under a single list. If non-empty, these other reference lists must be empty. If access is empty, those other reference lists may be non-empty.

###### accountReferences?

(`string` \| `Address`)[]

Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### appReferences?

`bigint`[]

The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### args?

(`ABIValue` \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| [`AppMethodCallTransactionArgument`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appmethodcalltransactionargument/) \| `undefined`)[]

Arguments to the ABI method, either:
* An ABI value
* An ARC-56 struct
* A transaction with explicit signer
* A transaction (where the signer will be automatically assigned)
* An unawaited transaction (e.g. from algorand.createTransaction.transactionType())
* Another method call (via method call params object)
* undefined (this represents a placeholder for either a default argument or a transaction argument that is fulfilled by another method call argument)

###### assetReferences?

`bigint`[]

The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### boxReferences?

([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]

Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

Either the name identifier (which will be set against app ID of `0` i.e.
 the current app), or a box identifier with the name identifier and app ID.

###### extraFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

The fee to pay IN ADDITION to the suggested fee. Useful for manually covering inner transaction fees.

###### firstValidRound?

`bigint`

Set the first round this transaction is valid.
If left undefined, the value from algod will be used.

We recommend you only set this when you intentionally want this to be some time in the future.

###### lastValidRound?

`bigint`

The last round this transaction is valid. It is recommended to use `validityWindow` instead.

###### lease?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Prevent multiple transactions with the same lease being included within the validity window.

A [lease](https://dev.algorand.co/concepts/transactions/leases)
 enforces a mutually exclusive transaction (useful to prevent double-posting and other scenarios).

###### maxFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.

###### method

`string`

The method name or method signature to call if an ABI call is being emitted

**Examples**

```ts
Method name
`my_method`
```

```ts
Method signature
`my_method(unit64,string)bytes`
```

###### note?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Note to attach to the transaction. Max of 1000 bytes.

###### onComplete?

`OnApplicationComplete`

The [on-complete](https://dev.algorand.co/concepts/smart-contracts/avm#oncomplete) action of the call; defaults to no-op.

###### rejectVersion?

`number`

If set, the transaction will be rejected when the app's version is greater than or equal to this value. This can be used to prevent calling an app after it has been updated. Set to 0 or leave undefined to skip the version check.

###### rekeyTo?

`string` \| `Address`

Change the signing key of the sender to the given address.

**Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

###### sender?

`string` \| `Address`

The address of the account sending the transaction, if undefined then the app client's defaultSender is used.

###### signer?

[`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`

The function used to sign transaction(s); if not specified then
 an attempt will be made to find a registered signer for the
 given `sender` or use a default signer (if configured).

###### staticFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction.

###### validityWindow?

`number` \| `bigint`

How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.

###### Returns

## Methods

### compile()

> **compile**(`compilation?`): `Promise`\<[`AppClientCompilationResult`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/appclientcompilationresult/)\>

Defined in: [src/types/app-factory.ts:620](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L620)

Compiles the approval and clear state programs (if TEAL templates provided),
performing any provided deploy-time parameter replacement and stores
the source maps.

If no TEAL templates provided it will use any byte code provided in the app spec.

Will store any generated source maps for later use in debugging.

#### Parameters

##### compilation?

[`AppClientCompilationParams`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/appclientcompilationparams/)

Optional compilation parameters to use for the compilation

#### Returns

`Promise`\<[`AppClientCompilationResult`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/appclientcompilationresult/)\>

The compilation result

#### Example

```typescript
const result = await factory.compile()
```

***

### deploy()

> **deploy**(`params`): `Promise`\<\{ `appClient`: [`AppClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/appclient/); `result`: \{ `appAddress`: `Address`; `appId`: `bigint`; `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation`: `PendingTransactionResponse`; `confirmations`: `PendingTransactionResponse`[]; `createdMetadata`: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/); `createdRound`: `bigint`; `deletable?`: `boolean`; `deleted`: `boolean`; `deleteReturn`: `string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`; `groupId`: `string`; `name`: `string`; `operationPerformed`: `"create"`; `return`: `string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/)[]; `transaction`: `Transaction`; `transactions`: `Transaction`[]; `txIds`: `string`[]; `updatable?`: `boolean`; `updatedRound`: `bigint`; `version`: `string`; \} \| \{ `appAddress`: `Address`; `appId`: `bigint`; `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation`: `PendingTransactionResponse`; `confirmations`: `PendingTransactionResponse`[]; `createdMetadata`: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/); `createdRound`: `bigint`; `deletable?`: `boolean`; `deleted`: `boolean`; `deleteReturn`: `string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`; `groupId`: `string`; `name`: `string`; `operationPerformed`: `"update"`; `return`: `string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/)[]; `transaction`: `Transaction`; `transactions`: `Transaction`[]; `txIds`: `string`[]; `updatable?`: `boolean`; `updatedRound`: `bigint`; `version`: `string`; \} \| \{ `appAddress`: `Address`; `appId`: `bigint`; `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation`: `PendingTransactionResponse`; `confirmations`: `PendingTransactionResponse`[]; `createdMetadata`: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/); `createdRound`: `bigint`; `deletable?`: `boolean`; `deleted`: `boolean`; `deleteResult`: [`ConfirmedTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/confirmedtransactionresult/); `deleteReturn`: `string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`; `groupId`: `string`; `name`: `string`; `operationPerformed`: `"replace"`; `return`: `string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/)[]; `transaction`: `Transaction`; `transactions`: `Transaction`[]; `txIds`: `string`[]; `updatable?`: `boolean`; `updatedRound`: `bigint`; `version`: `string`; \} \| \{ `appAddress`: `Address`; `appId`: `bigint`; `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `createdMetadata`: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/); `createdRound`: `bigint`; `deletable?`: `boolean`; `deleted`: `boolean`; `deleteReturn`: `string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`; `name`: `string`; `operationPerformed`: `"nothing"`; `return`: `string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`; `updatable?`: `boolean`; `updatedRound`: `bigint`; `version`: `string`; \}; \}\>

Defined in: [src/types/app-factory.ts:372](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L372)

Idempotently deploy (create if not exists, update if changed) an app against the given name for the given creator account, including deploy-time TEAL template placeholder substitutions (if specified).

**Note:** When using the return from this function be sure to check `operationPerformed` to get access to various return properties like `transaction`, `confirmation` and `deleteResult`.

**Note:** if there is a breaking state schema change to an existing app (and `onSchemaBreak` is set to `'replace'`) the existing app will be deleted and re-created.

**Note:** if there is an update (different TEAL code) to an existing app (and `onUpdate` is set to `'replace'`) the existing app will be deleted and re-created.

#### Parameters

##### params

The arguments to control the app deployment

###### appName?

`string`

Override the app name for this deployment

###### coverAppCallInnerTransactionFees?

`boolean`

Whether to use simulate to automatically calculate required app call inner transaction fees and cover them in the parent app call transaction fee

###### createParams?

\{ `accessReferences?`: [`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]; `accountReferences?`: (`string` \| `Address`)[]; `appReferences?`: `bigint`[]; `args?`: (`ABIValue` \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| [`AppMethodCallTransactionArgument`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appmethodcalltransactionargument/) \| `undefined`)[]; `assetReferences?`: `bigint`[]; `boxReferences?`: ([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]; `extraFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `extraProgramPages?`: `number`; `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `method`: `string`; `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC`; `rejectVersion?`: `number`; `rekeyTo?`: `string` \| `Address`; `schema?`: \{ `globalByteSlices`: `number`; `globalInts`: `number`; `localByteSlices`: `number`; `localInts`: `number`; \}; `sender?`: `string` \| `Address`; `signer?`: [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`; `staticFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \} \| \{ `accessReferences?`: [`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]; `accountReferences?`: (`string` \| `Address`)[]; `appReferences?`: `bigint`[]; `args?`: `Uint8Array`\<`ArrayBufferLike`\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: ([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]; `extraFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `extraProgramPages?`: `number`; `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC`; `rejectVersion?`: `number`; `rekeyTo?`: `string` \| `Address`; `schema?`: \{ `globalByteSlices`: `number`; `globalInts`: `number`; `localByteSlices`: `number`; `localInts`: `number`; \}; `sender?`: `string` \| `Address`; `signer?`: [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`; `staticFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \}

Create transaction parameters to use if a create needs to be issued as part of deployment

###### deletable?

`boolean`

Whether or not the contract should have deploy-time permanence control set.
`undefined` = use AppFactory constructor value if set or base it on the app spec.

###### deleteParams?

\{ `accessReferences?`: [`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]; `accountReferences?`: (`string` \| `Address`)[]; `appReferences?`: `bigint`[]; `args?`: (`ABIValue` \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| [`AppMethodCallTransactionArgument`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appmethodcalltransactionargument/) \| `undefined`)[]; `assetReferences?`: `bigint`[]; `boxReferences?`: ([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]; `extraFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `method`: `string`; `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: `OnApplicationComplete`; `rejectVersion?`: `number`; `rekeyTo?`: `string` \| `Address`; `sender?`: `string` \| `Address`; `signer?`: [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`; `staticFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \} \| \{ `accessReferences?`: [`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]; `accountReferences?`: (`string` \| `Address`)[]; `appReferences?`: `bigint`[]; `args?`: `Uint8Array`\<`ArrayBufferLike`\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: ([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]; `extraFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `rejectVersion?`: `number`; `rekeyTo?`: `string` \| `Address`; `sender?`: `string` \| `Address`; `signer?`: [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`; `staticFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \}

Delete transaction parameters to use if a create needs to be issued as part of deployment

###### deployTimeParams?

[`TealTemplateParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/tealtemplateparams/)

Any deploy-time parameters to replace in the TEAL code before compiling it (used if teal code is passed in as a string)

###### existingDeployments?

[`AppLookup`](/docs/algokit-utils/typescript/latest/api/types/app-deployer/interfaces/applookup/)

Optional cached value of the existing apps for the given creator; use this to avoid an indexer lookup

###### ignoreCache?

`boolean`

Whether or not to ignore the app metadata cache and force a lookup, default: use the cache *

###### maxRoundsToWaitForConfirmation?

`number`

The number of rounds to wait for confirmation. By default until the latest lastValid has past.

###### onSchemaBreak?

`"replace"` \| `"fail"` \| `"append"` \| [`OnSchemaBreak`](/docs/algokit-utils/typescript/latest/api/types/app/enumerations/onschemabreak/)

What action to perform if a schema break (storage schema or extra pages change) is detected:

* `fail` - Fail the deployment (throw an error, **default**)
* `replace` - Delete the old app and create a new one
* `append` - Deploy a new app and leave the old one as is

###### onUpdate?

`"replace"` \| `"fail"` \| `"append"` \| `"update"` \| [`OnUpdate`](/docs/algokit-utils/typescript/latest/api/types/app/enumerations/onupdate/)

What action to perform if a TEAL code update is detected:

* `fail` - Fail the deployment (throw an error, **default**)
* `update` - Update the app with the new TEAL code
* `replace` - Delete the old app and create a new one
* `append` - Deploy a new app and leave the old one as is

###### populateAppCallResources?

`boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to `Config.populateAppCallResources`.

###### suppressLog?

`boolean`

Whether to suppress log messages from transaction send, default: do not suppress.

###### updatable?

`boolean`

Whether or not the contract should have deploy-time immutability control set.
`undefined` = use AppFactory constructor value if set or base it on the app spec.

###### updateParams?

\{ `accessReferences?`: [`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]; `accountReferences?`: (`string` \| `Address`)[]; `appReferences?`: `bigint`[]; `args?`: (`ABIValue` \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| [`AppMethodCallTransactionArgument`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appmethodcalltransactionargument/) \| `undefined`)[]; `assetReferences?`: `bigint`[]; `boxReferences?`: ([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]; `extraFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `method`: `string`; `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: `OnApplicationComplete`; `rejectVersion?`: `number`; `rekeyTo?`: `string` \| `Address`; `sender?`: `string` \| `Address`; `signer?`: [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`; `staticFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \} \| \{ `accessReferences?`: [`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]; `accountReferences?`: (`string` \| `Address`)[]; `appReferences?`: `bigint`[]; `args?`: `Uint8Array`\<`ArrayBufferLike`\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: ([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]; `extraFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `rejectVersion?`: `number`; `rekeyTo?`: `string` \| `Address`; `sender?`: `string` \| `Address`; `signer?`: [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`; `staticFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \}

Update transaction parameters to use if a create needs to be issued as part of deployment

#### Returns

`Promise`\<\{ `appClient`: [`AppClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/appclient/); `result`: \{ `appAddress`: `Address`; `appId`: `bigint`; `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation`: `PendingTransactionResponse`; `confirmations`: `PendingTransactionResponse`[]; `createdMetadata`: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/); `createdRound`: `bigint`; `deletable?`: `boolean`; `deleted`: `boolean`; `deleteReturn`: `string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`; `groupId`: `string`; `name`: `string`; `operationPerformed`: `"create"`; `return`: `string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/)[]; `transaction`: `Transaction`; `transactions`: `Transaction`[]; `txIds`: `string`[]; `updatable?`: `boolean`; `updatedRound`: `bigint`; `version`: `string`; \} \| \{ `appAddress`: `Address`; `appId`: `bigint`; `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation`: `PendingTransactionResponse`; `confirmations`: `PendingTransactionResponse`[]; `createdMetadata`: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/); `createdRound`: `bigint`; `deletable?`: `boolean`; `deleted`: `boolean`; `deleteReturn`: `string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`; `groupId`: `string`; `name`: `string`; `operationPerformed`: `"update"`; `return`: `string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/)[]; `transaction`: `Transaction`; `transactions`: `Transaction`[]; `txIds`: `string`[]; `updatable?`: `boolean`; `updatedRound`: `bigint`; `version`: `string`; \} \| \{ `appAddress`: `Address`; `appId`: `bigint`; `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation`: `PendingTransactionResponse`; `confirmations`: `PendingTransactionResponse`[]; `createdMetadata`: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/); `createdRound`: `bigint`; `deletable?`: `boolean`; `deleted`: `boolean`; `deleteResult`: [`ConfirmedTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/confirmedtransactionresult/); `deleteReturn`: `string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`; `groupId`: `string`; `name`: `string`; `operationPerformed`: `"replace"`; `return`: `string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/)[]; `transaction`: `Transaction`; `transactions`: `Transaction`[]; `txIds`: `string`[]; `updatable?`: `boolean`; `updatedRound`: `bigint`; `version`: `string`; \} \| \{ `appAddress`: `Address`; `appId`: `bigint`; `compiledApproval?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear?`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `createdMetadata`: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/); `createdRound`: `bigint`; `deletable?`: `boolean`; `deleted`: `boolean`; `deleteReturn`: `string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`; `name`: `string`; `operationPerformed`: `"nothing"`; `return`: `string` \| `number` \| `bigint` \| `boolean` \| `Address` \| `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue`[] \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`; `updatable?`: `boolean`; `updatedRound`: `bigint`; `version`: `string`; \}; \}\>

The app client and the result of the deployment

#### Example

```ts
const { appClient, result } = await factory.deploy({
  createParams: {
    sender: 'SENDER_ADDRESS',
    approvalProgram: 'APPROVAL PROGRAM',
    clearStateProgram: 'CLEAR PROGRAM',
    schema: {
      globalByteSlices: 0,
      globalInts: 0,
      localByteSlices: 0,
      localInts: 0
    }
  },
  updateParams: {
    sender: 'SENDER_ADDRESS'
  },
  deleteParams: {
    sender: 'SENDER_ADDRESS'
  },
  metadata: { name: 'my_app', version: '2.0', updatable: false, deletable: false },
  onSchemaBreak: 'append',
  onUpdate: 'append'
 })
```

***

### exportSourceMaps()

> **exportSourceMaps**(): [`AppSourceMaps`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/appsourcemaps/)

Defined in: [src/types/app-factory.ts:501](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L501)

Export the current source maps for the app.

#### Returns

[`AppSourceMaps`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/appsourcemaps/)

The source maps

***

### exposeLogicError()

> **exposeLogicError**(`e`, `isClearStateProgram?`): `Error`

Defined in: [src/types/app-factory.ts:489](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L489)

Takes an error that may include a logic error from a call to the current app and re-exposes the
error to include source code information via the source map and ARC-56 spec.

#### Parameters

##### e

`Error`

The error to parse

##### isClearStateProgram?

`boolean`

Whether or not the code was running the clear state program (defaults to approval program)

#### Returns

`Error`

The new error, or if there was no logic error or source map then the wrapped error with source details

***

### getAppClientByCreatorAndName()

> **getAppClientByCreatorAndName**(`params`): `Promise`\<[`AppClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/appclient/)\>

Defined in: [src/types/app-factory.ts:470](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L470)

Returns a new `AppClient` client, resolving the app by creator address and name
using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).

Automatically populates appName, defaultSender and source maps from the factory
if not specified in the params.

#### Parameters

##### params

The parameters to create the app client

###### appLookupCache?

[`AppLookup`](/docs/algokit-utils/typescript/latest/api/types/app-deployer/interfaces/applookup/)

An optional cached app lookup that matches a name to on-chain details;
either this is needed or indexer is required to be passed in to this `ClientManager` on construction.

###### appName?

`string`

Optional override for the app name; used for on-chain metadata and lookups.
Defaults to the ARC-32/ARC-56 app spec name

###### approvalSourceMap?

`ProgramSourceMap`

Optional source map for the approval program

###### clearSourceMap?

`ProgramSourceMap`

Optional source map for the clear state program

###### creatorAddress

`string` \| `Address`

The address of the creator account for the app

###### defaultSender?

`string` \| `Address`

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

`TransactionSigner`

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

###### ignoreCache?

`boolean`

Whether or not to ignore the `AppDeployer` lookup cache and force an on-chain lookup, default: use any cached value

#### Returns

`Promise`\<[`AppClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/appclient/)\>

The `AppClient` instance

#### Example

```typescript
const appClient = factory.getAppClientByCreatorAndName({ creatorAddress: 'CREATOR_ADDRESS', appName: 'my_app' })
```

***

### getAppClientById()

> **getAppClientById**(`params`): [`AppClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/appclient/)

Defined in: [src/types/app-factory.ts:444](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L444)

Returns a new `AppClient` client for an app instance of the given ID.

Automatically populates appName, defaultSender and source maps from the factory
if not specified in the params.

#### Parameters

##### params

The parameters to create the app client

###### appId

`bigint`

The ID of the app instance this client should make calls against.

###### appName?

`string`

Optional override for the app name; used for on-chain metadata and lookups.
Defaults to the ARC-32/ARC-56 app spec name

###### approvalSourceMap?

`ProgramSourceMap`

Optional source map for the approval program

###### clearSourceMap?

`ProgramSourceMap`

Optional source map for the clear state program

###### defaultSender?

`string` \| `Address`

Optional address to use for the account to use as the default sender for calls.

###### defaultSigner?

`TransactionSigner`

Optional signer to use as the default signer for default sender calls (if not specified then the signer will be resolved from `AlgorandClient`).

#### Returns

[`AppClient`](/docs/algokit-utils/typescript/latest/api/types/app-client/classes/appclient/)

The `AppClient` instance

#### Example

```typescript
const appClient = factory.getAppClientById({ appId: 12345n })
```

***

### importSourceMaps()

> **importSourceMaps**(`sourceMaps`): `void`

Defined in: [src/types/app-factory.ts:518](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L518)

Import source maps for the app.

#### Parameters

##### sourceMaps

[`AppSourceMaps`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/appsourcemaps/)

The source maps to import

#### Returns

`void`

***

### parseMethodCallReturn()

> **parseMethodCallReturn**\<`TReturn`, `TResult`\>(`result`, `method`): `Promise`\<`Omit`\<`TResult`, `"return"`\> & [`AppReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appreturn/)\<`TReturn`\>\>

Defined in: [src/types/app-factory.ts:719](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-factory.ts#L719)

Checks for decode errors on the SendAppTransactionResult and maps the return value to the specified type
on the ARC-56 method.

If the return type is a struct then the struct will be returned.

#### Type Parameters

##### TReturn

`TReturn` *extends* `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue` \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`

##### TResult

`TResult` *extends* `object` = \{ `confirmation`: `PendingTransactionResponse`; `confirmations`: `PendingTransactionResponse`[]; `groupId`: `string`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/); `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/)[]; `transaction`: `Transaction`; `transactions`: `Transaction`[]; `txIds`: `string`[]; \}

#### Parameters

##### result

`TResult` \| `Promise`\<`TResult`\>

The SendAppTransactionResult to be mapped

##### method

[`Arc56Method`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/classes/arc56method/)

The method that was called

#### Returns

`Promise`\<`Omit`\<`TResult`, `"return"`\> & [`AppReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appreturn/)\<`TReturn`\>\>

The smart contract response with an updated return value
