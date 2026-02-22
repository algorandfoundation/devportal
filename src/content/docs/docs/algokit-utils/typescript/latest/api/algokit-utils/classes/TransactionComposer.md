---
editUrl: false
next: false
prev: false
title: "TransactionComposer"
---

Defined in: [src/composer.ts:224](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L224)

TransactionComposer helps you compose and execute transactions as a transaction group.

## Constructors

### Constructor

> **new TransactionComposer**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:297](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L297)

Create a `TransactionComposer`.

#### Parameters

##### params

[`TransactionComposerParams`](/algokit-utils-ts/api/algokit-utils/type-aliases/transactioncomposerparams/)

The configuration for this composer

#### Returns

`TransactionComposer`

The `TransactionComposer` instance

## Methods

### addAppCall()

> **addAppCall**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:968](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L968)

Add an application call transaction to the transaction group.

If you want to create or update an app use `addAppCreate` or `addAppUpdate`.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

##### params

`AppCallParams`

The application call transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
composer.addAppCall({ sender: 'CREATORADDRESS' })
```

```typescript
composer.addAppCall({
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

### addAppCallMethodCall()

> **addAppCallMethodCall**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:1213](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L1213)

Add a non-create/non-update ABI method application call transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

##### params

The ABI method application call transaction parameters

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

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
composer.addAppCallMethodCall({ sender: 'CREATORADDRESS', method: method, args: ["arg1_value"] })
```

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
composer.addAppCallMethodCall({
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

### addAppCreate()

> **addAppCreate**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:838](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L838)

Add an application create transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

##### params

The application create transaction parameters

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

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
composer.addAppCreate({ sender: 'CREATORADDRESS', approvalProgram: 'TEALCODE', clearStateProgram: 'TEALCODE' })
```

```typescript
composer.addAppCreate({
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
 // Signer only needed if you want to provide one,
 //  generally you'd register it with AlgorandClient
 //  against the sender and not need to pass it in
 signer: transactionSigner,
 maxRoundsToWaitForConfirmation: 5,
 suppressLog: true,
})
```

***

### addAppCreateMethodCall()

> **addAppCreateMethodCall**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:1031](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L1031)

Add an ABI method create application call transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

##### params

The ABI create method application call transaction parameters

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

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
composer.addAppCreateMethodCall({ sender: 'CREATORADDRESS', approvalProgram: 'TEALCODE', clearStateProgram: 'TEALCODE', method: method, args: ["arg1_value"] })
```

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
composer.addAppCreateMethodCall({
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

### addAppDelete()

> **addAppDelete**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:924](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L924)

Add an application delete transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

##### params

[`AppDeleteParams`](/algokit-utils-ts/api/algokit-utils/type-aliases/appdeleteparams/)

The application delete transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
composer.addAppDelete({ sender: 'CREATORADDRESS' })
```

```typescript
composer.addAppDelete({
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

### addAppDeleteMethodCall()

> **addAppDeleteMethodCall**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:1153](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L1153)

Add an ABI method delete application call transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

##### params

The ABI delete method application call transaction parameters

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

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
composer.addAppDeleteMethodCall({ sender: 'CREATORADDRESS', method: method, args: ["arg1_value"] })
```

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
composer.addAppDeleteMethodCall({
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

### addAppUpdate()

> **addAppUpdate**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:882](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L882)

Add an application update transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

##### params

The application update transaction parameters

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

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
composer.addAppUpdate({ sender: 'CREATORADDRESS', approvalProgram: 'TEALCODE', clearStateProgram: 'TEALCODE' })
```

```typescript
composer.addAppUpdate({
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

### addAppUpdateMethodCall()

> **addAppUpdateMethodCall**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:1093](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L1093)

Add an ABI method update application call transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

##### params

The ABI update method application call transaction parameters

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

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
composer.addAppUpdateMethodCall({ sender: 'CREATORADDRESS', approvalProgram: 'TEALCODE', clearStateProgram: 'TEALCODE', method: method, args: ["arg1_value"] })
```

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
composer.addAppUpdateMethodCall({
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

### addAssetConfig()

> **addAssetConfig**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:609](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L609)

Add an asset config transaction to the transaction group.

#### Parameters

##### params

`AssetConfigParams`

The asset config transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
composer.addAssetConfig({ sender: "MANAGERADDRESS", assetId: 123456n, manager: "MANAGERADDRESS" })
```

```typescript
composer.addAssetConfig({
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

***

### addAssetCreate()

> **addAssetCreate**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:574](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L574)

Add an asset create transaction to the transaction group.

#### Parameters

##### params

`AssetCreateParams`

The asset create transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
composer.addAssetCreate({ sender: "CREATORADDRESS", total: 100n})
```

```typescript
composer.addAssetCreate({
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

***

### addAssetDestroy()

> **addAssetDestroy**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:675](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L675)

Add an asset destroy transaction to the transaction group.

#### Parameters

##### params

`AssetDestroyParams`

The asset destroy transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
composer.addAssetDestroy({ sender: "MANAGERADDRESS", assetId: 123456n })
```

```typescript
composer.addAssetDestroy({
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

### addAssetFreeze()

> **addAssetFreeze**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:643](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L643)

Add an asset freeze transaction to the transaction group.

#### Parameters

##### params

`AssetFreezeParams`

The asset freeze transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
composer.addAssetFreeze({ sender: "MANAGERADDRESS", assetId: 123456n, account: "ACCOUNTADDRESS", frozen: true })
```

```typescript
composer.addAssetFreeze({
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

### addAssetOptIn()

> **addAssetOptIn**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:744](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L744)

Add an asset opt-in transaction to the transaction group.

#### Parameters

##### params

`AssetOptInParams`

The asset opt-in transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
composer.addAssetOptIn({ sender: "SENDERADDRESS", assetId: 123456n })
```

```typescript
composer.addAssetOptIn({
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

### addAssetOptOut()

> **addAssetOptOut**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:782](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L782)

Add an asset opt-out transaction to the transaction group.

#### Parameters

##### params

`AssetOptOutParams`

The asset opt-out transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
composer.addAssetOptOut({ sender: "SENDERADDRESS", assetId: 123456n, ensureZeroBalance: true })
```

```typescript
composer.addAssetOptOut({ sender: "SENDERADDRESS", creator: "CREATORADDRESS", assetId: 123456n, ensureZeroBalance: true })
```

```typescript
composer.addAssetOptOut({
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

### addAssetTransfer()

> **addAssetTransfer**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:712](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L712)

Add an asset transfer transaction to the transaction group.

#### Parameters

##### params

`AssetTransferParams`

The asset transfer transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
composer.addAssetTransfer({ sender: "HOLDERADDRESS", assetId: 123456n, amount: 1n, receiver: "RECEIVERADDRESS" })
```

```typescript
composer.addAssetTransfer({
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

### addOfflineKeyRegistration()

> **addOfflineKeyRegistration**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:1302](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L1302)

Add an offline key registration transaction to the transaction group.

#### Parameters

##### params

`OfflineKeyRegistrationParams`

The offline key registration transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
composer.addOfflineKeyRegistration({
  sender: 'SENDERADDRESS',
})
```

```typescript
composer.addOfflineKeyRegistration({
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

### addOnlineKeyRegistration()

> **addOnlineKeyRegistration**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:1267](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L1267)

Add an online key registration transaction to the transaction group.

#### Parameters

##### params

`OnlineKeyRegistrationParams`

The online key registration transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
composer.addOnlineKeyRegistration({
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
composer.addOnlineKeyRegistration({
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

### addPayment()

> **addPayment**(`params`): `TransactionComposer`

Defined in: [src/composer.ts:533](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L533)

Add a payment transaction to the transaction group.

#### Parameters

##### params

`PaymentParams`

The payment transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

```typescript
composer.addPayment({
  sender: 'SENDERADDRESS',
  receiver: 'RECEIVERADDRESS',
  amount: (4).algo(),
})
```

```typescript
composer.addPayment({
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

***

### addTransaction()

> **addTransaction**(`transaction`, `signer?`): `TransactionComposer`

Defined in: [src/composer.ts:462](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L462)

Add a pre-built transaction to the transaction group.

#### Parameters

##### transaction

[`Transaction`](/algokit-utils-ts/api/subpaths/transact/classes/transaction/)

The pre-built transaction

##### signer?

[`TransactionSigner`](/algokit-utils-ts/api/subpaths/transact/type-aliases/transactionsigner/)

Optional signer override for the transaction

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Example

```typescript
composer.addTransaction(txn)
```

***

### addTransactionComposer()

> **addTransactionComposer**(`composer`): `TransactionComposer`

Defined in: [src/composer.ts:493](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L493)

Add another transaction composer to the current transaction composer.
The transaction params of the input transaction composer will be added.
If the input transaction composer is updated, it won't affect the current transaction composer.

#### Parameters

##### composer

`TransactionComposer`

The transaction composer to add

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Example

```typescript
const innerComposer = algorand.newGroup()
  .addPayment({ sender: 'SENDER', receiver: 'RECEIVER', amount: (1).algo() })
  .addPayment({ sender: 'SENDER', receiver: 'RECEIVER', amount: (2).algo() })

composer.addTransactionComposer(innerComposer)
```

***

### build()

> **build**(): `Promise`\<\{ `methodCalls`: `Map`\<`number`, [`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)\>; `transactions`: [`TransactionWithSigner`](/algokit-utils-ts/api/algokit-utils/interfaces/transactionwithsigner/)[]; \}\>

Defined in: [src/composer.ts:1329](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L1329)

Build the transaction composer.

This method performs resource population and inner transaction fee coverage if these options are set in the composer.

Once this method is called, no further transactions will be able to be added.
You can safely call this method multiple times to get the same result.

#### Returns

`Promise`\<\{ `methodCalls`: `Map`\<`number`, [`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)\>; `transactions`: [`TransactionWithSigner`](/algokit-utils-ts/api/algokit-utils/interfaces/transactionwithsigner/)[]; \}\>

The built transaction composer, the transactions and any corresponding method calls

#### Example

```typescript
const { transactions, methodCalls } = await composer.build()
```

***

### buildTransactions()

> **buildTransactions**(): `Promise`\<[`BuiltTransactions`](/algokit-utils-ts/api/algokit-utils/interfaces/builttransactions/)\>

Defined in: [src/composer.ts:1502](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L1502)

Builds all transactions in the composer and returns them along with method calls and signers.

Note: This method only builds the transactions as-is without resource population or automatic grouping.
Use this when you need the raw transactions.

#### Returns

`Promise`\<[`BuiltTransactions`](/algokit-utils-ts/api/algokit-utils/interfaces/builttransactions/)\>

An object containing the array of built transactions, method calls, and signers

#### Example

```typescript
const { transactions, methodCalls, signers } = await composer.buildTransactions()
```

***

### clone()

> **clone**(`composerConfig?`): `TransactionComposer`

Defined in: [src/composer.ts:419](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L419)

#### Parameters

##### composerConfig?

[`TransactionComposerConfig`](/algokit-utils-ts/api/algokit-utils/type-aliases/transactioncomposerconfig/)

#### Returns

`TransactionComposer`

***

### count()

> **count**(): `number`

Defined in: [src/composer.ts:1312](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L1312)

Get the number of transactions currently added to this composer.

#### Returns

`number`

The number of transactions currently added to this composer

***

### gatherSignatures()

> **gatherSignatures**(): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>[]\>

Defined in: [src/composer.ts:2100](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L2100)

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>[]\>

***

### rebuild()

> **rebuild**(): `Promise`\<\{ `methodCalls`: `Map`\<`number`, [`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)\>; `transactions`: [`TransactionWithSigner`](/algokit-utils-ts/api/algokit-utils/interfaces/transactionwithsigner/)[]; \}\>

Defined in: [src/composer.ts:1784](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L1784)

Rebuild the group, discarding any previously built transactions.
This will potentially cause new signers and suggested params to be used if the callbacks return a new value compared to the first build.

#### Returns

`Promise`\<\{ `methodCalls`: `Map`\<`number`, [`ABIMethod`](/algokit-utils-ts/api/subpaths/abi/classes/abimethod/)\>; `transactions`: [`TransactionWithSigner`](/algokit-utils-ts/api/algokit-utils/interfaces/transactionwithsigner/)[]; \}\>

The newly built transaction composer and the transactions

#### Example

```typescript
const { atc, transactions, methodCalls } = await composer.rebuild()
```

***

### registerErrorTransformer()

> **registerErrorTransformer**(`transformer`): `TransactionComposer`

Defined in: [src/composer.ts:447](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L447)

Register a function that will be used to transform an error caught when simulating or executing

#### Parameters

##### transformer

[`ErrorTransformer`](/algokit-utils-ts/api/algokit-utils/type-aliases/errortransformer/)

#### Returns

`TransactionComposer`

The composer so you can chain method calls

***

### send()

> **send**(`params?`): `Promise`\<[`SendTransactionComposerResults`](/algokit-utils-ts/api/algokit-utils/interfaces/sendtransactioncomposerresults/)\>

Defined in: [src/composer.ts:1803](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L1803)

Compose the transaction group and send it to the network.

#### Parameters

##### params?

[`SendParams`](/algokit-utils-ts/api/algokit-utils/interfaces/sendparams/)

The parameters to control execution with

#### Returns

`Promise`\<[`SendTransactionComposerResults`](/algokit-utils-ts/api/algokit-utils/interfaces/sendtransactioncomposerresults/)\>

The execution result

#### Example

```typescript
const result = await composer.send()
```

***

### setMaxFees()

> **setMaxFees**(`maxFees`): `void`

Defined in: [src/composer.ts:2173](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L2173)

#### Parameters

##### maxFees

`Map`\<`number`, [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)\>

#### Returns

`void`

***

### simulate()

#### Call Signature

> **simulate**(): `Promise`\<[`SendTransactionComposerResults`](/algokit-utils-ts/api/algokit-utils/interfaces/sendtransactioncomposerresults/) & `object`\>

Defined in: [src/composer.ts:1983](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L1983)

Compose the transaction group and simulate sending it to the network

##### Returns

`Promise`\<[`SendTransactionComposerResults`](/algokit-utils-ts/api/algokit-utils/interfaces/sendtransactioncomposerresults/) & `object`\>

The simulation result

##### Example

```typescript
const result = await composer.simulate()
```

#### Call Signature

> **simulate**(`options`): `Promise`\<[`SendTransactionComposerResults`](/algokit-utils-ts/api/algokit-utils/interfaces/sendtransactioncomposerresults/) & `object`\>

Defined in: [src/composer.ts:1994](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L1994)

Compose the transaction group and simulate sending it to the network

##### Parameters

###### options

###### allowMoreLogging?

`boolean`

Lifts limits on log opcode usage during simulation.

###### allowUnnamedResources?

`boolean`

Allows access to unnamed resources during simulation.

###### execTraceConfig?

[`SimulateTraceConfig`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/simulatetraceconfig/)

###### extraOpcodeBudget?

`number`

Applies extra opcode budget during simulation for each transaction group.

###### resultOnFailure?

`boolean`

Whether or not to return the result on simulation failure instead of throwing an error

###### round?

`bigint`

If provided, specifies the round preceding the simulation. State changes through this round will be used to run this simulation. Usually only the 4 most recent rounds will be available (controlled by the node config value MaxAcctLookback). If not specified, defaults to the latest available round.

###### skipSignatures

`boolean`

Whether or not to skip signatures for all built transactions and use an empty signer instead.
This will set `fixSigners` and `allowEmptySignatures` when sending the request to the algod API.

##### Returns

`Promise`\<[`SendTransactionComposerResults`](/algokit-utils-ts/api/algokit-utils/interfaces/sendtransactioncomposerresults/) & `object`\>

The simulation result

##### Example

```typescript
const result = await composer.simulate({
  skipSignatures: true,
})
```

#### Call Signature

> **simulate**(`options`): `Promise`\<[`SendTransactionComposerResults`](/algokit-utils-ts/api/algokit-utils/interfaces/sendtransactioncomposerresults/) & `object`\>

Defined in: [src/composer.ts:2005](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L2005)

Compose the transaction group and simulate sending it to the network

##### Parameters

###### options

[`RawSimulateOptions`](/algokit-utils-ts/api/algokit-utils/type-aliases/rawsimulateoptions/)

##### Returns

`Promise`\<[`SendTransactionComposerResults`](/algokit-utils-ts/api/algokit-utils/interfaces/sendtransactioncomposerresults/) & `object`\>

The simulation result

##### Example

```typescript
const result = await composer.simulate({
  extraOpcodeBudget: 1000,
})
```

***

### arc2Note()

> `static` **arc2Note**(`note`): `Uint8Array`

Defined in: [src/composer.ts:2094](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/composer.ts#L2094)

Create an encoded transaction note that follows the ARC-2 spec.

https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0002.md

#### Parameters

##### note

[`Arc2TransactionNote`](/algokit-utils-ts/api/algokit-utils/type-aliases/arc2transactionnote/)

The ARC-2 transaction note data

#### Returns

`Uint8Array`

The binary encoded transaction note
