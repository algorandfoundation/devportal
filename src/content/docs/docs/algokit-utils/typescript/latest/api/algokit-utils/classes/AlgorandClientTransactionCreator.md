---
editUrl: false
next: false
prev: false
title: "AlgorandClientTransactionCreator"
---

Defined in: [src/algorand-client-transaction-creator.ts:6](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L6)

Orchestrates creating transactions for `AlgorandClient`.

## Constructors

### Constructor

> **new AlgorandClientTransactionCreator**(`newGroup`): `AlgorandClientTransactionCreator`

Defined in: [src/algorand-client-transaction-creator.ts:17](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L17)

Creates a new `AlgorandClientTransactionCreator`

#### Parameters

##### newGroup

(`config?`) => [`TransactionComposer`](/algokit-utils-ts/api/algokit-utils/classes/transactioncomposer/)

A lambda that starts a new `TransactionComposer` transaction group

#### Returns

`AlgorandClientTransactionCreator`

#### Example

```typescript
const transactionCreator = new AlgorandClientTransactionCreator(() => new TransactionComposer())
```

## Properties

### appCall()

> **appCall**: (`params`) => `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

Defined in: [src/algorand-client-transaction-creator.ts:464](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L464)

Create an application call transaction.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

#### Parameters

##### params

`AppCallParams`

The parameters for the app call transaction

#### Returns

`Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

The application call transaction

#### Examples

```typescript
await algorand.createTransaction.appCall({ sender: 'CREATORADDRESS' })
```

```typescript
await algorand.createTransaction.appCall({
 sender: 'CREATORADDRESS',
 onComplete: OnApplicationComplete.OptIn,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
 accessReferences: [{ appId: 1234n }]
 lease: 'lease',
 note: 'note',
 // You wouldn't normally set this field
 firstValidRound: 1000n,
 validityWindow: 10,
 extraFee: (1000).microAlgo(),
 staticFee: (1000).microAlgo(),
 // Max fee doesn't make sense with extraFee AND staticFee
 //  already specified, but here for completeness
 maxFee: (3000).microAlgo(),
 rejectVersion: 1,
})
```

***

### appCallMethodCall()

> **appCallMethodCall**: (`params`) => `Promise`\<\{ `methodCalls`: `Map`\<`number`, [`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)\>; `signers`: `Map`\<`number`, [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)\>; `transactions`: [`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)[]; \}\>

Defined in: [src/algorand-client-transaction-creator.ts:667](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L667)

Create an application call with ABI method call transaction.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

#### Parameters

##### params

The parameters for the app call transaction

###### accessReferences?

[`ResourceReference`](/algokit-utils-ts/api/subpaths/transact/type-aliases/resourcereference/)[]

Access references unifies `accountReferences`, `appReferences`, `assetReferences`, and `boxReferences` under a single list. If non-empty, these other reference lists must be empty. If access is empty, those other reference lists may be non-empty.

###### accountReferences?

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)[]

Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### appId

`bigint`

ID of the application; 0 if the application is being created.

###### appReferences?

`bigint`[]

The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### args?

([`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/) \| [`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/) \| `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\> \| [`TransactionWithSigner`](/algokit-utils-ts/api/algokit-utils/interfaces/transactionwithsigner/) \| `AppMethodCall`\<\{ `accessReferences?`: [`ResourceReference`](/algokit-utils-ts/api/subpaths/transact/type-aliases/resourcereference/)[]; `accountReferences?`: [`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)[]; `appId?`: `0`; `appReferences?`: `bigint`[]; `approvalProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `args?`: `Uint8Array`\<`ArrayBufferLike`\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: BoxIdentifier \| BoxReference[]; `clearStateProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `extraFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `extraProgramPages?`: `number`; `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: [`NoOp`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#noop) \| [`OptIn`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#optin) \| [`CloseOut`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#closeout) \| [`UpdateApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#updateapplication) \| [`DeleteApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#deleteapplication); `rejectVersion?`: `number`; `rekeyTo?`: ReadableAddress \| undefined; `schema?`: \{ `globalByteSlices`: `number`; `globalInts`: `number`; `localByteSlices`: `number`; `localInts`: `number`; \}; `sender`: [`SendingAddress`](/algokit-utils-ts/api/subpaths/transact/type-aliases/sendingaddress/); `signer?`: [`AddressWithTransactionSigner`](/algokit-utils-ts/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/); `staticFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \}\> \| `AppMethodCall`\<\{ `accessReferences?`: [`ResourceReference`](/algokit-utils-ts/api/subpaths/transact/type-aliases/resourcereference/)[]; `accountReferences?`: [`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)[]; `appId`: `bigint`; `appReferences?`: `bigint`[]; `approvalProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `args?`: `Uint8Array`\<`ArrayBufferLike`\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: BoxIdentifier \| BoxReference[]; `clearStateProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `extraFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: [`UpdateApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#updateapplication); `rejectVersion?`: `number`; `rekeyTo?`: ReadableAddress \| undefined; `sender`: [`SendingAddress`](/algokit-utils-ts/api/subpaths/transact/type-aliases/sendingaddress/); `signer?`: [`AddressWithTransactionSigner`](/algokit-utils-ts/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/); `staticFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \}\> \| `AppMethodCall`\<`AppMethodCallParams`\> \| `undefined`)[]

Arguments to the ABI method, either:
* An ABI value
* A transaction with explicit signer
* A transaction (where the signer will be automatically assigned)
* An unawaited transaction (e.g. from algorand.createTransaction.{transactionType}())
* Another method call (via method call params object)
* undefined (this represents a placeholder transaction argument that is fulfilled by another method call argument)

###### assetReferences?

`bigint`[]

The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### boxReferences?

([`BoxIdentifier`](/algokit-utils-ts/api/algokit-utils/type-aliases/boxidentifier/) \| [`BoxReference`](/algokit-utils-ts/api/algokit-utils/interfaces/boxreference/))[]

Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

Either the name identifier (which will be set against app ID of `0` i.e.
 the current app), or a box identifier with the name identifier and app ID.

###### extraFee?

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

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

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.

###### method

[`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)

The ABI method to call

###### note?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Note to attach to the transaction. Max of 1000 bytes.

###### onComplete?

[`NoOp`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#noop) \| [`OptIn`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#optin) \| [`CloseOut`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#closeout) \| [`DeleteApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#deleteapplication)

The [on-complete](https://dev.algorand.co/concepts/smart-contracts/avm#oncomplete) action of the call; defaults to no-op.

###### rejectVersion?

`number`

If set, the transaction will be rejected when the app's version is greater than or equal to this value. This can be used to prevent calling an app after it has been updated. Set to 0 or leave undefined to skip the version check.

###### rekeyTo?

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

Change the signing key of the sender to the given address.

**Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

###### sender

[`SendingAddress`](/algokit-utils-ts/api/subpaths/transact/type-aliases/sendingaddress/)

The address sending the transaction, optionally with an attached signer.

###### signer?

[`AddressWithTransactionSigner`](/algokit-utils-ts/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)

The function used to sign transaction(s); if not specified then
 an attempt will be made to find a registered signer for the
 given `sender` or use a default signer (if configured).

###### staticFee?

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction.

###### validityWindow?

`number` \| `bigint`

How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.

#### Returns

`Promise`\<\{ `methodCalls`: `Map`\<`number`, [`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)\>; `signers`: `Map`\<`number`, [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)\>; `transactions`: [`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)[]; \}\>

The application ABI method call transaction

#### Examples

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
await algorand.createTransaction.appCallMethodCall({ sender: 'CREATORADDRESS', method: method, args: ["arg1_value"] })
```

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
await algorand.createTransaction.appCallMethodCall({
 sender: 'CREATORADDRESS',
 method: method,
 args: ["arg1_value"],
 onComplete: OnApplicationComplete.OptIn,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
 accessReferences: [{ appId: 1234n }]
 lease: 'lease',
 note: 'note',
 // You wouldn't normally set this field
 firstValidRound: 1000n,
 validityWindow: 10,
 extraFee: (1000).microAlgo(),
 staticFee: (1000).microAlgo(),
 // Max fee doesn't make sense with extraFee AND staticFee
 //  already specified, but here for completeness
 maxFee: (3000).microAlgo(),
 rejectVersion: 1,
})
```

***

### appCreate()

> **appCreate**: (`params`) => `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

Defined in: [src/algorand-client-transaction-creator.ts:354](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L354)

Create an application create transaction.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

#### Parameters

##### params

The parameters for the app creation transaction

###### accessReferences?

[`ResourceReference`](/algokit-utils-ts/api/subpaths/transact/type-aliases/resourcereference/)[]

Access references unifies `accountReferences`, `appReferences`, `assetReferences`, and `boxReferences` under a single list. If non-empty, these other reference lists must be empty. If access is empty, those other reference lists may be non-empty.

###### accountReferences?

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)[]

Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### appId?

`0`

###### appReferences?

`bigint`[]

The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### approvalProgram

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

The program to execute for all OnCompletes other than ClearState as raw teal that will be compiled (string) or compiled teal (encoded as a byte array (Uint8Array)).

###### args?

`Uint8Array`\<`ArrayBufferLike`\>[]

Any [arguments to pass to the smart contract call](/concepts/smart-contracts/languages/teal/#argument-passing).

###### assetReferences?

`bigint`[]

The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### boxReferences?

([`BoxIdentifier`](/algokit-utils-ts/api/algokit-utils/type-aliases/boxidentifier/) \| [`BoxReference`](/algokit-utils-ts/api/algokit-utils/interfaces/boxreference/))[]

Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

Either the name identifier (which will be set against app ID of `0` i.e.
 the current app), or a box identifier with the name identifier and app ID.

###### clearStateProgram

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

The program to execute for ClearState OnComplete as raw teal that will be compiled (string) or compiled teal (encoded as a byte array (Uint8Array)).

###### extraFee?

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

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

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.

###### note?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Note to attach to the transaction. Max of 1000 bytes.

###### onComplete?

[`NoOp`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#noop) \| [`OptIn`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#optin) \| [`CloseOut`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#closeout) \| [`UpdateApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#updateapplication) \| [`DeleteApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#deleteapplication)

The [on-complete](https://dev.algorand.co/concepts/smart-contracts/avm#oncomplete) action of the call; defaults to no-op.

###### rejectVersion?

`number`

If set, the transaction will be rejected when the app's version is greater than or equal to this value. This can be used to prevent calling an app after it has been updated. Set to 0 or leave undefined to skip the version check.

###### rekeyTo?

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

Change the signing key of the sender to the given address.

**Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

###### schema?

\{ `globalByteSlices`: `number`; `globalInts`: `number`; `localByteSlices`: `number`; `localInts`: `number`; \}

The state schema for the app. This is immutable once the app is created.

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

###### sender

[`SendingAddress`](/algokit-utils-ts/api/subpaths/transact/type-aliases/sendingaddress/)

The address sending the transaction, optionally with an attached signer.

###### signer?

[`AddressWithTransactionSigner`](/algokit-utils-ts/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)

The function used to sign transaction(s); if not specified then
 an attempt will be made to find a registered signer for the
 given `sender` or use a default signer (if configured).

###### staticFee?

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction.

###### validityWindow?

`number` \| `bigint`

How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.

#### Returns

`Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

The application create transaction

#### Examples

```typescript
await algorand.createTransaction.appCreate({ sender: 'CREATORADDRESS', approvalProgram: 'TEALCODE', clearStateProgram: 'TEALCODE' })
```

```typescript
await algorand.createTransaction.appCreate({
 sender: 'CREATORADDRESS',
 approvalProgram: "TEALCODE",
 clearStateProgram: "TEALCODE",
 schema: {
   globalInts: 1,
   globalByteSlices: 2,
   localInts: 3,
   localByteSlices: 4
 },
 extraProgramPages: 1,
 onComplete: OnApplicationComplete.OptIn,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
 accessReferences: [{ appId: 1234n }]
 lease: 'lease',
 note: 'note',
 // You wouldn't normally set this field
 firstValidRound: 1000n,
 validityWindow: 10,
 extraFee: (1000).microAlgo(),
 staticFee: (1000).microAlgo(),
 // Max fee doesn't make sense with extraFee AND staticFee
 //  already specified, but here for completeness
 maxFee: (3000).microAlgo(),
 rejectVersion: 1,
})
```

***

### appCreateMethodCall()

> **appCreateMethodCall**: (`params`) => `Promise`\<\{ `methodCalls`: `Map`\<`number`, [`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)\>; `signers`: `Map`\<`number`, [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)\>; `transactions`: [`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)[]; \}\>

Defined in: [src/algorand-client-transaction-creator.ts:521](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L521)

Create an application create call with ABI method call transaction.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

#### Parameters

##### params

The parameters for the app creation transaction

###### accessReferences?

[`ResourceReference`](/algokit-utils-ts/api/subpaths/transact/type-aliases/resourcereference/)[]

Access references unifies `accountReferences`, `appReferences`, `assetReferences`, and `boxReferences` under a single list. If non-empty, these other reference lists must be empty. If access is empty, those other reference lists may be non-empty.

###### accountReferences?

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)[]

Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### appId?

`0`

###### appReferences?

`bigint`[]

The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### approvalProgram

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

The program to execute for all OnCompletes other than ClearState as raw teal that will be compiled (string) or compiled teal (encoded as a byte array (Uint8Array)).

###### args?

([`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/) \| [`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/) \| `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\> \| [`TransactionWithSigner`](/algokit-utils-ts/api/algokit-utils/interfaces/transactionwithsigner/) \| `AppMethodCall`\<\{ `accessReferences?`: [`ResourceReference`](/algokit-utils-ts/api/subpaths/transact/type-aliases/resourcereference/)[]; `accountReferences?`: [`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)[]; `appId?`: `0`; `appReferences?`: `bigint`[]; `approvalProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `args?`: `Uint8Array`\<`ArrayBufferLike`\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: BoxIdentifier \| BoxReference[]; `clearStateProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `extraFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `extraProgramPages?`: `number`; `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: [`NoOp`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#noop) \| [`OptIn`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#optin) \| [`CloseOut`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#closeout) \| [`UpdateApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#updateapplication) \| [`DeleteApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#deleteapplication); `rejectVersion?`: `number`; `rekeyTo?`: ReadableAddress \| undefined; `schema?`: \{ `globalByteSlices`: `number`; `globalInts`: `number`; `localByteSlices`: `number`; `localInts`: `number`; \}; `sender`: [`SendingAddress`](/algokit-utils-ts/api/subpaths/transact/type-aliases/sendingaddress/); `signer?`: [`AddressWithTransactionSigner`](/algokit-utils-ts/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/); `staticFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \}\> \| `AppMethodCall`\<\{ `accessReferences?`: [`ResourceReference`](/algokit-utils-ts/api/subpaths/transact/type-aliases/resourcereference/)[]; `accountReferences?`: [`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)[]; `appId`: `bigint`; `appReferences?`: `bigint`[]; `approvalProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `args?`: `Uint8Array`\<`ArrayBufferLike`\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: BoxIdentifier \| BoxReference[]; `clearStateProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `extraFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: [`UpdateApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#updateapplication); `rejectVersion?`: `number`; `rekeyTo?`: ReadableAddress \| undefined; `sender`: [`SendingAddress`](/algokit-utils-ts/api/subpaths/transact/type-aliases/sendingaddress/); `signer?`: [`AddressWithTransactionSigner`](/algokit-utils-ts/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/); `staticFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \}\> \| `AppMethodCall`\<`AppMethodCallParams`\> \| `undefined`)[]

Arguments to the ABI method, either:
* An ABI value
* A transaction with explicit signer
* A transaction (where the signer will be automatically assigned)
* An unawaited transaction (e.g. from algorand.createTransaction.{transactionType}())
* Another method call (via method call params object)
* undefined (this represents a placeholder transaction argument that is fulfilled by another method call argument)

###### assetReferences?

`bigint`[]

The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### boxReferences?

([`BoxIdentifier`](/algokit-utils-ts/api/algokit-utils/type-aliases/boxidentifier/) \| [`BoxReference`](/algokit-utils-ts/api/algokit-utils/interfaces/boxreference/))[]

Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

Either the name identifier (which will be set against app ID of `0` i.e.
 the current app), or a box identifier with the name identifier and app ID.

###### clearStateProgram

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

The program to execute for ClearState OnComplete as raw teal that will be compiled (string) or compiled teal (encoded as a byte array (Uint8Array)).

###### extraFee?

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

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

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.

###### method

[`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)

The ABI method to call

###### note?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Note to attach to the transaction. Max of 1000 bytes.

###### onComplete?

[`NoOp`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#noop) \| [`OptIn`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#optin) \| [`CloseOut`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#closeout) \| [`UpdateApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#updateapplication) \| [`DeleteApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#deleteapplication)

The [on-complete](https://dev.algorand.co/concepts/smart-contracts/avm#oncomplete) action of the call; defaults to no-op.

###### rejectVersion?

`number`

If set, the transaction will be rejected when the app's version is greater than or equal to this value. This can be used to prevent calling an app after it has been updated. Set to 0 or leave undefined to skip the version check.

###### rekeyTo?

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

Change the signing key of the sender to the given address.

**Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

###### schema?

\{ `globalByteSlices`: `number`; `globalInts`: `number`; `localByteSlices`: `number`; `localInts`: `number`; \}

The state schema for the app. This is immutable once the app is created.

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

###### sender

[`SendingAddress`](/algokit-utils-ts/api/subpaths/transact/type-aliases/sendingaddress/)

The address sending the transaction, optionally with an attached signer.

###### signer?

[`AddressWithTransactionSigner`](/algokit-utils-ts/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)

The function used to sign transaction(s); if not specified then
 an attempt will be made to find a registered signer for the
 given `sender` or use a default signer (if configured).

###### staticFee?

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction.

###### validityWindow?

`number` \| `bigint`

How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.

#### Returns

`Promise`\<\{ `methodCalls`: `Map`\<`number`, [`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)\>; `signers`: `Map`\<`number`, [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)\>; `transactions`: [`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)[]; \}\>

The application ABI method create transaction

#### Examples

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
await algorand.createTransaction.appCreateMethodCall({ sender: 'CREATORADDRESS', approvalProgram: 'TEALCODE', clearStateProgram: 'TEALCODE', method: method, args: ["arg1_value"] })
```

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
await algorand.createTransaction.appCreateMethodCall({
 sender: 'CREATORADDRESS',
 method: method,
 args: ["arg1_value"],
 approvalProgram: "TEALCODE",
 clearStateProgram: "TEALCODE",
 schema: {
   globalInts: 1,
   globalByteSlices: 2,
   localInts: 3,
   localByteSlices: 4
 },
 extraProgramPages: 1,
 onComplete: OnApplicationComplete.OptIn,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
 accessReferences: [{ appId: 1234n }]
 lease: 'lease',
 note: 'note',
 // You wouldn't normally set this field
 firstValidRound: 1000n,
 validityWindow: 10,
 extraFee: (1000).microAlgo(),
 staticFee: (1000).microAlgo(),
 // Max fee doesn't make sense with extraFee AND staticFee
 //  already specified, but here for completeness
 maxFee: (3000).microAlgo(),
 rejectVersion: 1,
})
```

***

### appDelete()

> **appDelete**: (`params`) => `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

Defined in: [src/algorand-client-transaction-creator.ts:428](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L428)

Create an application delete transaction.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

#### Parameters

##### params

[`AppDeleteParams`](/algokit-utils-ts/api/algokit-utils/type-aliases/appdeleteparams/)

The parameters for the app deletion transaction

#### Returns

`Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

The application delete transaction

#### Examples

```typescript
await algorand.createTransaction.appDelete({ sender: 'CREATORADDRESS' })
```

```typescript
await algorand.createTransaction.appDelete({
 sender: 'CREATORADDRESS',
 onComplete: OnApplicationComplete.DeleteApplication,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
 accessReferences: [{ appId: 1234n }]
 lease: 'lease',
 note: 'note',
 // You wouldn't normally set this field
 firstValidRound: 1000n,
 validityWindow: 10,
 extraFee: (1000).microAlgo(),
 staticFee: (1000).microAlgo(),
 // Max fee doesn't make sense with extraFee AND staticFee
 //  already specified, but here for completeness
 maxFee: (3000).microAlgo(),
 rejectVersion: 1,
})
```

***

### appDeleteMethodCall()

> **appDeleteMethodCall**: (`params`) => `Promise`\<\{ `methodCalls`: `Map`\<`number`, [`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)\>; `signers`: `Map`\<`number`, [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)\>; `transactions`: [`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)[]; \}\>

Defined in: [src/algorand-client-transaction-creator.ts:619](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L619)

Create an application delete call with ABI method call transaction.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

#### Parameters

##### params

The parameters for the app deletion transaction

###### accessReferences?

[`ResourceReference`](/algokit-utils-ts/api/subpaths/transact/type-aliases/resourcereference/)[]

Access references unifies `accountReferences`, `appReferences`, `assetReferences`, and `boxReferences` under a single list. If non-empty, these other reference lists must be empty. If access is empty, those other reference lists may be non-empty.

###### accountReferences?

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)[]

Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### appId

`bigint`

ID of the application; 0 if the application is being created.

###### appReferences?

`bigint`[]

The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### args?

([`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/) \| [`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/) \| `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\> \| [`TransactionWithSigner`](/algokit-utils-ts/api/algokit-utils/interfaces/transactionwithsigner/) \| `AppMethodCall`\<\{ `accessReferences?`: [`ResourceReference`](/algokit-utils-ts/api/subpaths/transact/type-aliases/resourcereference/)[]; `accountReferences?`: [`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)[]; `appId?`: `0`; `appReferences?`: `bigint`[]; `approvalProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `args?`: `Uint8Array`\<`ArrayBufferLike`\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: BoxIdentifier \| BoxReference[]; `clearStateProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `extraFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `extraProgramPages?`: `number`; `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: [`NoOp`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#noop) \| [`OptIn`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#optin) \| [`CloseOut`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#closeout) \| [`UpdateApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#updateapplication) \| [`DeleteApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#deleteapplication); `rejectVersion?`: `number`; `rekeyTo?`: ReadableAddress \| undefined; `schema?`: \{ `globalByteSlices`: `number`; `globalInts`: `number`; `localByteSlices`: `number`; `localInts`: `number`; \}; `sender`: [`SendingAddress`](/algokit-utils-ts/api/subpaths/transact/type-aliases/sendingaddress/); `signer?`: [`AddressWithTransactionSigner`](/algokit-utils-ts/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/); `staticFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \}\> \| `AppMethodCall`\<\{ `accessReferences?`: [`ResourceReference`](/algokit-utils-ts/api/subpaths/transact/type-aliases/resourcereference/)[]; `accountReferences?`: [`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)[]; `appId`: `bigint`; `appReferences?`: `bigint`[]; `approvalProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `args?`: `Uint8Array`\<`ArrayBufferLike`\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: BoxIdentifier \| BoxReference[]; `clearStateProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `extraFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: [`UpdateApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#updateapplication); `rejectVersion?`: `number`; `rekeyTo?`: ReadableAddress \| undefined; `sender`: [`SendingAddress`](/algokit-utils-ts/api/subpaths/transact/type-aliases/sendingaddress/); `signer?`: [`AddressWithTransactionSigner`](/algokit-utils-ts/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/); `staticFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \}\> \| `AppMethodCall`\<`AppMethodCallParams`\> \| `undefined`)[]

Arguments to the ABI method, either:
* An ABI value
* A transaction with explicit signer
* A transaction (where the signer will be automatically assigned)
* An unawaited transaction (e.g. from algorand.createTransaction.{transactionType}())
* Another method call (via method call params object)
* undefined (this represents a placeholder transaction argument that is fulfilled by another method call argument)

###### assetReferences?

`bigint`[]

The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### boxReferences?

([`BoxIdentifier`](/algokit-utils-ts/api/algokit-utils/type-aliases/boxidentifier/) \| [`BoxReference`](/algokit-utils-ts/api/algokit-utils/interfaces/boxreference/))[]

Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

Either the name identifier (which will be set against app ID of `0` i.e.
 the current app), or a box identifier with the name identifier and app ID.

###### extraFee?

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

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

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.

###### method

[`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)

The ABI method to call

###### note?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Note to attach to the transaction. Max of 1000 bytes.

###### onComplete?

[`DeleteApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#deleteapplication)

The [on-complete](https://dev.algorand.co/concepts/smart-contracts/avm#oncomplete) action of the call; defaults to no-op.

###### rejectVersion?

`number`

If set, the transaction will be rejected when the app's version is greater than or equal to this value. This can be used to prevent calling an app after it has been updated. Set to 0 or leave undefined to skip the version check.

###### rekeyTo?

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

Change the signing key of the sender to the given address.

**Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

###### sender

[`SendingAddress`](/algokit-utils-ts/api/subpaths/transact/type-aliases/sendingaddress/)

The address sending the transaction, optionally with an attached signer.

###### signer?

[`AddressWithTransactionSigner`](/algokit-utils-ts/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)

The function used to sign transaction(s); if not specified then
 an attempt will be made to find a registered signer for the
 given `sender` or use a default signer (if configured).

###### staticFee?

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction.

###### validityWindow?

`number` \| `bigint`

How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.

#### Returns

`Promise`\<\{ `methodCalls`: `Map`\<`number`, [`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)\>; `signers`: `Map`\<`number`, [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)\>; `transactions`: [`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)[]; \}\>

The application ABI method delete transaction

#### Examples

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
await algorand.createTransaction.appDeleteMethodCall({ sender: 'CREATORADDRESS', method: method, args: ["arg1_value"] })
```

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
await algorand.createTransaction.appDeleteMethodCall({
 sender: 'CREATORADDRESS',
 method: method,
 args: ["arg1_value"],
 onComplete: OnApplicationComplete.DeleteApplication,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
 accessReferences: [{ appId: 1234n }]
 lease: 'lease',
 note: 'note',
 // You wouldn't normally set this field
 firstValidRound: 1000n,
 validityWindow: 10,
 extraFee: (1000).microAlgo(),
 staticFee: (1000).microAlgo(),
 // Max fee doesn't make sense with extraFee AND staticFee
 //  already specified, but here for completeness
 maxFee: (3000).microAlgo(),
 rejectVersion: 1,
})
```

***

### appUpdate()

> **appUpdate**: (`params`) => `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

Defined in: [src/algorand-client-transaction-creator.ts:392](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L392)

Create an application update transaction.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

#### Parameters

##### params

The parameters for the app update transaction

###### accessReferences?

[`ResourceReference`](/algokit-utils-ts/api/subpaths/transact/type-aliases/resourcereference/)[]

Access references unifies `accountReferences`, `appReferences`, `assetReferences`, and `boxReferences` under a single list. If non-empty, these other reference lists must be empty. If access is empty, those other reference lists may be non-empty.

###### accountReferences?

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)[]

Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### appId

`bigint`

ID of the application; 0 if the application is being created.

###### appReferences?

`bigint`[]

The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### approvalProgram

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

The program to execute for all OnCompletes other than ClearState as raw teal (string) or compiled teal (base 64 encoded as a byte array (Uint8Array))

###### args?

`Uint8Array`\<`ArrayBufferLike`\>[]

Any [arguments to pass to the smart contract call](/concepts/smart-contracts/languages/teal/#argument-passing).

###### assetReferences?

`bigint`[]

The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### boxReferences?

([`BoxIdentifier`](/algokit-utils-ts/api/algokit-utils/type-aliases/boxidentifier/) \| [`BoxReference`](/algokit-utils-ts/api/algokit-utils/interfaces/boxreference/))[]

Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

Either the name identifier (which will be set against app ID of `0` i.e.
 the current app), or a box identifier with the name identifier and app ID.

###### clearStateProgram

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

The program to execute for ClearState OnComplete as raw teal (string) or compiled teal (base 64 encoded as a byte array (Uint8Array))

###### extraFee?

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

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

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.

###### note?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Note to attach to the transaction. Max of 1000 bytes.

###### onComplete?

[`UpdateApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#updateapplication)

The [on-complete](https://dev.algorand.co/concepts/smart-contracts/avm#oncomplete) action of the call; defaults to no-op.

###### rejectVersion?

`number`

If set, the transaction will be rejected when the app's version is greater than or equal to this value. This can be used to prevent calling an app after it has been updated. Set to 0 or leave undefined to skip the version check.

###### rekeyTo?

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

Change the signing key of the sender to the given address.

**Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

###### sender

[`SendingAddress`](/algokit-utils-ts/api/subpaths/transact/type-aliases/sendingaddress/)

The address sending the transaction, optionally with an attached signer.

###### signer?

[`AddressWithTransactionSigner`](/algokit-utils-ts/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)

The function used to sign transaction(s); if not specified then
 an attempt will be made to find a registered signer for the
 given `sender` or use a default signer (if configured).

###### staticFee?

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction.

###### validityWindow?

`number` \| `bigint`

How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.

#### Returns

`Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

The application update transaction

#### Examples

```typescript
await algorand.createTransaction.appUpdate({ sender: 'CREATORADDRESS', approvalProgram: 'TEALCODE', clearStateProgram: 'TEALCODE' })
```

```typescript
await algorand.createTransaction.appUpdate({
 sender: 'CREATORADDRESS',
 approvalProgram: "TEALCODE",
 clearStateProgram: "TEALCODE",
 onComplete: OnApplicationComplete.UpdateApplication,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
 accessReferences: [{ appId: 1234n }]
 lease: 'lease',
 note: 'note',
 // You wouldn't normally set this field
 firstValidRound: 1000n,
 validityWindow: 10,
 extraFee: (1000).microAlgo(),
 staticFee: (1000).microAlgo(),
 // Max fee doesn't make sense with extraFee AND staticFee
 //  already specified, but here for completeness
 maxFee: (3000).microAlgo(),
 rejectVersion: 1,
})
```

***

### appUpdateMethodCall()

> **appUpdateMethodCall**: (`params`) => `Promise`\<\{ `methodCalls`: `Map`\<`number`, [`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)\>; `signers`: `Map`\<`number`, [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)\>; `transactions`: [`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)[]; \}\>

Defined in: [src/algorand-client-transaction-creator.ts:571](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L571)

Create an application update call with ABI method call transaction.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

#### Parameters

##### params

The parameters for the app update transaction

###### accessReferences?

[`ResourceReference`](/algokit-utils-ts/api/subpaths/transact/type-aliases/resourcereference/)[]

Access references unifies `accountReferences`, `appReferences`, `assetReferences`, and `boxReferences` under a single list. If non-empty, these other reference lists must be empty. If access is empty, those other reference lists may be non-empty.

###### accountReferences?

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)[]

Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### appId

`bigint`

ID of the application; 0 if the application is being created.

###### appReferences?

`bigint`[]

The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### approvalProgram

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

The program to execute for all OnCompletes other than ClearState as raw teal (string) or compiled teal (base 64 encoded as a byte array (Uint8Array))

###### args?

([`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/) \| [`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/) \| `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\> \| [`TransactionWithSigner`](/algokit-utils-ts/api/algokit-utils/interfaces/transactionwithsigner/) \| `AppMethodCall`\<\{ `accessReferences?`: [`ResourceReference`](/algokit-utils-ts/api/subpaths/transact/type-aliases/resourcereference/)[]; `accountReferences?`: [`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)[]; `appId?`: `0`; `appReferences?`: `bigint`[]; `approvalProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `args?`: `Uint8Array`\<`ArrayBufferLike`\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: BoxIdentifier \| BoxReference[]; `clearStateProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `extraFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `extraProgramPages?`: `number`; `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: [`NoOp`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#noop) \| [`OptIn`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#optin) \| [`CloseOut`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#closeout) \| [`UpdateApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#updateapplication) \| [`DeleteApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#deleteapplication); `rejectVersion?`: `number`; `rekeyTo?`: ReadableAddress \| undefined; `schema?`: \{ `globalByteSlices`: `number`; `globalInts`: `number`; `localByteSlices`: `number`; `localInts`: `number`; \}; `sender`: [`SendingAddress`](/algokit-utils-ts/api/subpaths/transact/type-aliases/sendingaddress/); `signer?`: [`AddressWithTransactionSigner`](/algokit-utils-ts/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/); `staticFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \}\> \| `AppMethodCall`\<\{ `accessReferences?`: [`ResourceReference`](/algokit-utils-ts/api/subpaths/transact/type-aliases/resourcereference/)[]; `accountReferences?`: [`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)[]; `appId`: `bigint`; `appReferences?`: `bigint`[]; `approvalProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `args?`: `Uint8Array`\<`ArrayBufferLike`\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: BoxIdentifier \| BoxReference[]; `clearStateProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `extraFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: [`UpdateApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#updateapplication); `rejectVersion?`: `number`; `rekeyTo?`: ReadableAddress \| undefined; `sender`: [`SendingAddress`](/algokit-utils-ts/api/subpaths/transact/type-aliases/sendingaddress/); `signer?`: [`AddressWithTransactionSigner`](/algokit-utils-ts/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/); `staticFee?`: [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \}\> \| `AppMethodCall`\<`AppMethodCallParams`\> \| `undefined`)[]

Arguments to the ABI method, either:
* An ABI value
* A transaction with explicit signer
* A transaction (where the signer will be automatically assigned)
* An unawaited transaction (e.g. from algorand.createTransaction.{transactionType}())
* Another method call (via method call params object)
* undefined (this represents a placeholder transaction argument that is fulfilled by another method call argument)

###### assetReferences?

`bigint`[]

The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### boxReferences?

([`BoxIdentifier`](/algokit-utils-ts/api/algokit-utils/type-aliases/boxidentifier/) \| [`BoxReference`](/algokit-utils-ts/api/algokit-utils/interfaces/boxreference/))[]

Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

Either the name identifier (which will be set against app ID of `0` i.e.
 the current app), or a box identifier with the name identifier and app ID.

###### clearStateProgram

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

The program to execute for ClearState OnComplete as raw teal (string) or compiled teal (base 64 encoded as a byte array (Uint8Array))

###### extraFee?

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

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

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods.

###### method

[`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)

The ABI method to call

###### note?

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

Note to attach to the transaction. Max of 1000 bytes.

###### onComplete?

[`UpdateApplication`](/algokit-utils-ts/api/subpaths/transact/enumerations/onapplicationcomplete/#updateapplication)

The [on-complete](https://dev.algorand.co/concepts/smart-contracts/avm#oncomplete) action of the call; defaults to no-op.

###### rejectVersion?

`number`

If set, the transaction will be rejected when the app's version is greater than or equal to this value. This can be used to prevent calling an app after it has been updated. Set to 0 or leave undefined to skip the version check.

###### rekeyTo?

[`ReadableAddress`](/algokit-utils-ts/api/algokit-utils/type-aliases/readableaddress/)

Change the signing key of the sender to the given address.

**Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

###### sender

[`SendingAddress`](/algokit-utils-ts/api/subpaths/transact/type-aliases/sendingaddress/)

The address sending the transaction, optionally with an attached signer.

###### signer?

[`AddressWithTransactionSigner`](/algokit-utils-ts/api/subpaths/transact/interfaces/addresswithtransactionsigner/) \| [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)

The function used to sign transaction(s); if not specified then
 an attempt will be made to find a registered signer for the
 given `sender` or use a default signer (if configured).

###### staticFee?

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction.

###### validityWindow?

`number` \| `bigint`

How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used.

#### Returns

`Promise`\<\{ `methodCalls`: `Map`\<`number`, [`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)\>; `signers`: `Map`\<`number`, [`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)\>; `transactions`: [`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)[]; \}\>

The application ABI method update transaction

#### Examples

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
await algorand.createTransaction.appUpdateMethodCall({ sender: 'CREATORADDRESS', approvalProgram: 'TEALCODE', clearStateProgram: 'TEALCODE', method: method, args: ["arg1_value"] })
```

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
await algorand.createTransaction.appUpdateMethodCall({
 sender: 'CREATORADDRESS',
 method: method,
 args: ["arg1_value"],
 approvalProgram: "TEALCODE",
 clearStateProgram: "TEALCODE",
 onComplete: OnApplicationComplete.UpdateApplication,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
 accessReferences: [{ appId: 1234n }]
 lease: 'lease',
 note: 'note',
 // You wouldn't normally set this field
 firstValidRound: 1000n,
 validityWindow: 10,
 extraFee: (1000).microAlgo(),
 staticFee: (1000).microAlgo(),
 // Max fee doesn't make sense with extraFee AND staticFee
 //  already specified, but here for completeness
 maxFee: (3000).microAlgo(),
 rejectVersion: 1,
})
```

***

### assetConfig()

> **assetConfig**: (`params`) => `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

Defined in: [src/algorand-client-transaction-creator.ts:149](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L149)

Create an asset config transaction to reconfigure an existing Algorand Standard Asset.

**Note:** The manager, reserve, freeze, and clawback addresses
are immutably empty if they are not set. If manager is not set then
all fields are immutable from that point forward.

#### Parameters

##### params

`AssetConfigParams`

The parameters for the asset config transaction

#### Returns

`Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

The asset config transaction

#### Examples

```typescript
await algorand.createTransaction.assetConfig({ sender: "MANAGERADDRESS", assetId: 123456n, manager: "MANAGERADDRESS" })
```

```typescript
await algorand.createTransaction.assetConfig({
  sender: 'MANAGERADDRESS',
  assetId: 123456n,
  manager: 'MANAGERADDRESS',
  reserve: 'RESERVEADDRESS',
  freeze: 'FREEZEADDRESS',
  clawback: 'CLAWBACKADDRESS',
  lease: 'lease',
  note: 'note',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
})
```

***

### assetCreate()

> **assetCreate**: (`params`) => `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

Defined in: [src/algorand-client-transaction-creator.ts:113](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L113)

Create a create Algorand Standard Asset transaction.

The account that sends this transaction will automatically be
opted in to the asset and will hold all units after creation.

#### Parameters

##### params

`AssetCreateParams`

The parameters for the asset creation transaction

#### Returns

`Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

The asset create transaction

#### Examples

```typescript
await algorand.createTransaction.assetCreate({ sender: "CREATORADDRESS", total: 100n})
```

```typescript
await algorand.createTransaction.assetCreate({
  sender: 'CREATORADDRESS',
  total: 100n,
  decimals: 2,
  assetName: 'asset',
  unitName: 'unit',
  url: 'url',
  metadataHash: 'metadataHash',
  defaultFrozen: false,
  manager: 'MANAGERADDRESS',
  reserve: 'RESERVEADDRESS',
  freeze: 'FREEZEADDRESS',
  clawback: 'CLAWBACKADDRESS',
  lease: 'lease',
  note: 'note',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
})
```

***

### assetDestroy()

> **assetDestroy**: (`params`) => `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

Defined in: [src/algorand-client-transaction-creator.ts:211](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L211)

Create an Algorand Standard Asset destroy transaction.

Created assets can be destroyed only by the asset manager account.
All of the assets must be owned by the creator of the asset before
the asset can be deleted.

#### Parameters

##### params

`AssetDestroyParams`

The parameters for the asset destroy transaction

#### Returns

`Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

The asset destroy transaction

#### Examples

```typescript
await algorand.createTransaction.assetDestroy({ sender: "MANAGERADDRESS", assetId: 123456n })
```

```typescript
await algorand.createTransaction.assetDestroy({
  sender: 'MANAGERADDRESS',
  assetId: 123456n,
  lease: 'lease',
  note: 'note',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
})
```

***

### assetFreeze()

> **assetFreeze**: (`params`) => `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

Defined in: [src/algorand-client-transaction-creator.ts:179](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L179)

Create an Algorand Standard Asset freeze transaction.

#### Parameters

##### params

`AssetFreezeParams`

The parameters for the asset freeze transaction

#### Returns

`Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

The asset freeze transaction

#### Examples

```typescript
await algorand.createTransaction.assetFreeze({ sender: "MANAGERADDRESS", assetId: 123456n, account: "ACCOUNTADDRESS", frozen: true })
```

```typescript
await algorand.createTransaction.assetFreeze({
  sender: 'MANAGERADDRESS',
  assetId: 123456n,
  account: 'ACCOUNTADDRESS',
  frozen: true,
  lease: 'lease',
  note: 'note',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
})
```

***

### assetOptIn()

> **assetOptIn**: (`params`) => `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

Defined in: [src/algorand-client-transaction-creator.ts:272](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L272)

Create an Algorand Standard Asset opt-in transaction.

#### Parameters

##### params

`AssetOptInParams`

The parameters for the asset opt-in transaction

#### Returns

`Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

The asset opt-in transaction

#### Examples

```typescript
await algorand.createTransaction.assetOptIn({ sender: "SENDERADDRESS", assetId: 123456n })
```

```typescript
await algorand.createTransaction.assetOptIn({
  sender: 'SENDERADDRESS',
  assetId: 123456n,
  lease: 'lease',
  note: 'note',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
})
```

***

### assetOptOut()

> **assetOptOut**: (`params`) => `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

Defined in: [src/algorand-client-transaction-creator.ts:309](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L309)

Create an asset opt-out transaction.

*Note:* If the account has a balance of the asset,
it will lose those assets

#### Parameters

##### params

`AssetOptOutParams`

The parameters for the asset opt-out transaction

#### Returns

`Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

The asset opt-out transaction

#### Examples

```typescript
await algorand.createTransaction.assetOptOut({ sender: "SENDERADDRESS", assetId: 123456n, ensureZeroBalance: true })
```

```typescript
await algorand.createTransaction.assetOptOut({ sender: "SENDERADDRESS", creator: "CREATORADDRESS", assetId: 123456n, ensureZeroBalance: true })
```

```typescript
await algorand.createTransaction.assetOptOut({
  sender: 'SENDERADDRESS',
  assetId: 123456n,
  creator: 'CREATORADDRESS',
  ensureZeroBalance: true,
  lease: 'lease',
  note: 'note',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
})
```

***

### assetTransfer()

> **assetTransfer**: (`params`) => `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

Defined in: [src/algorand-client-transaction-creator.ts:244](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L244)

Create an Algorand Standard Asset transfer transaction.

#### Parameters

##### params

`AssetTransferParams`

The parameters for the asset transfer transaction

#### Returns

`Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

The result of the asset transfer transaction

#### Examples

```typescript
await algorand.createTransaction.assetTransfer({ sender: "HOLDERADDRESS", assetId: 123456n, amount: 1n, receiver: "RECEIVERADDRESS" })
```

```typescript
await algorand.createTransaction.assetTransfer({
  sender: 'CLAWBACKADDRESS',
  assetId: 123456n,
  amount: 1n,
  receiver: 'RECEIVERADDRESS',
  clawbackTarget: 'HOLDERADDRESS',
  // This field needs to be used with caution
  closeAssetTo: 'ADDRESSTOCLOSETO'
  lease: 'lease',
  note: 'note',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
})
```

***

### offlineKeyRegistration()

> **offlineKeyRegistration**: (`params`) => `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

Defined in: [src/algorand-client-transaction-creator.ts:739](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L739)

Create an offline key registration transaction.

#### Parameters

##### params

`OfflineKeyRegistrationParams`

The parameters for the key registration transaction

#### Returns

`Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

The offline key registration transaction

#### Examples

```typescript
await algorand.createTransaction.offlineKeyRegistration({
  sender: 'SENDERADDRESS',
})
```

```typescript
await algorand.createTransaction.offlineKeyRegistration({
  sender: 'SENDERADDRESS',
  lease: 'lease',
  note: 'note',
  // Use this with caution, it's generally better to use algorand.account.rekeyAccount
  rekeyTo: 'REKEYTOADDRESS',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
})
```

***

### onlineKeyRegistration()

> **onlineKeyRegistration**: (`params`) => `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

Defined in: [src/algorand-client-transaction-creator.ts:709](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L709)

Create an online key registration transaction.

#### Parameters

##### params

`OnlineKeyRegistrationParams`

The parameters for the key registration transaction

#### Returns

`Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

The online key registration transaction

#### Examples

```typescript
await algorand.createTransaction.onlineKeyRegistration({
  sender: 'SENDERADDRESS',
  voteKey: Uint8Array.from(Buffer.from("voteKeyBase64", 'base64')),
  selectionKey: Uint8Array.from(Buffer.from("selectionKeyBase64", 'base64')),
  stateProofKey: Uint8Array.from(Buffer.from("stateProofKeyBase64", 'base64')),
  voteFirst: 1n,
  voteLast: 1000n,
  voteKeyDilution: 1n,
})
```

```typescript
await algorand.createTransaction.onlineKeyRegistration({
  sender: 'SENDERADDRESS',
  voteKey: Uint8Array.from(Buffer.from("voteKeyBase64", 'base64')),
  selectionKey: Uint8Array.from(Buffer.from("selectionKeyBase64", 'base64')),
  stateProofKey: Uint8Array.from(Buffer.from("stateProofKeyBase64", 'base64')),
  voteFirst: 1n,
  voteLast: 1000n,
  voteKeyDilution: 1n,
  lease: 'lease',
  note: 'note',
  // Use this with caution, it's generally better to use algorand.account.rekeyAccount
  rekeyTo: 'REKEYTOADDRESS',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
})
```

***

### payment()

> **payment**: (`params`) => `Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

Defined in: [src/algorand-client-transaction-creator.ts:72](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/algorand-client-transaction-creator.ts#L72)

Create a payment transaction to transfer Algo between accounts.

#### Parameters

##### params

`PaymentParams`

The parameters for the payment transaction

#### Returns

`Promise`\<[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)\>

The payment transaction

#### Examples

```typescript
await algorand.createTransaction.payment({
  sender: 'SENDERADDRESS',
  receiver: 'RECEIVERADDRESS',
  amount: (4).algo(),
})
```

```typescript
await algorand.createTransaction.payment({
  amount: (4).algo(),
  receiver: 'RECEIVERADDRESS',
  sender: 'SENDERADDRESS',
  closeRemainderTo: 'CLOSEREMAINDERTOADDRESS',
  lease: 'lease',
  note: 'note',
  // Use this with caution, it's generally better to use algorand.account.rekeyAccount
  rekeyTo: 'REKEYTOADDRESS',
  // You wouldn't normally set this field
  firstValidRound: 1000n,
  validityWindow: 10,
  extraFee: (1000).microAlgo(),
  staticFee: (1000).microAlgo(),
  // Max fee doesn't make sense with extraFee AND staticFee
  //  already specified, but here for completeness
  maxFee: (3000).microAlgo(),
})
```
