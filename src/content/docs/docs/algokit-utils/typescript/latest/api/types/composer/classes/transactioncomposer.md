---
editUrl: false
next: false
prev: false
title: "TransactionComposer"
---

Defined in: [src/types/composer.ts:552](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L552)

TransactionComposer helps you compose and execute transactions as a transaction group.

## Constructors

### Constructor

> **new TransactionComposer**(`params`): `TransactionComposer`

Defined in: [src/types/composer.ts:613](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L613)

Create a `TransactionComposer`.

#### Parameters

##### params

[`TransactionComposerParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/transactioncomposerparams/)

The configuration for this composer

#### Returns

`TransactionComposer`

The `TransactionComposer` instance

## Methods

### addAppCall()

> **addAppCall**(`params`): `TransactionComposer`

Defined in: [src/types/composer.ts:1119](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1119)

Add an application call transaction to the transaction group.

If you want to create or update an app use `addAppCreate` or `addAppUpdate`.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

##### params

[`AppCallParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appcallparams/)

The application call transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example**

```typescript
composer.addAppCall({ sender: 'CREATORADDRESS' })
```

**Advanced example**

```typescript
composer.addAppCall({
 sender: 'CREATORADDRESS',
 onComplete: algosdk.OnApplicationComplete.OptInOC,
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

Defined in: [src/types/composer.ts:1339](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1339)

Add a non-create/non-update ABI method application call transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

##### params

[`AppCallMethodCall`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appcallmethodcall/)

The ABI method application call transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example**

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
composer.addAppCallMethodCall({ sender: 'CREATORADDRESS', method: method, args: ["arg1_value"] })
```

**Advanced example**

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
 onComplete: algosdk.OnApplicationComplete.OptInOC,
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

Defined in: [src/types/composer.ts:992](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L992)

Add an application create transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

##### params

The application create transaction parameters

###### accessReferences?

[`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]

Access references unifies `accountReferences`, `appReferences`, `assetReferences`, and `boxReferences` under a single list. If non-empty, these other reference lists must be empty. If access is empty, those other reference lists may be non-empty.

###### accountReferences?

(`string` \| `Address`)[]

Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### appReferences?

`bigint`[]

The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### approvalProgram

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

The program to execute for all OnCompletes other than ClearState as raw teal that will be compiled (string) or compiled teal (encoded as a byte array (Uint8Array)).

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

###### clearStateProgram

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

The program to execute for ClearState OnComplete as raw teal that will be compiled (string) or compiled teal (encoded as a byte array (Uint8Array)).

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

`string` \| `Address`

The address of the account sending the transaction.

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

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example**

```typescript
composer.addAppCreate({ sender: 'CREATORADDRESS', approvalProgram: 'TEALCODE', clearStateProgram: 'TEALCODE' })
```

**Advanced example**

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
 onComplete: algosdk.OnApplicationComplete.OptInOC,
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

Defined in: [src/types/composer.ts:1181](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1181)

Add an ABI method create application call transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

##### params

[`AppCreateMethodCall`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appcreatemethodcall/)

The ABI create method application call transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example**

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
composer.addAppCreateMethodCall({ sender: 'CREATORADDRESS', approvalProgram: 'TEALCODE', clearStateProgram: 'TEALCODE', method: method, args: ["arg1_value"] })
```

**Advanced example**

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
 onComplete: algosdk.OnApplicationComplete.OptInOC,
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

Defined in: [src/types/composer.ts:1076](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1076)

Add an application delete transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

##### params

[`AppDeleteParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appdeleteparams/)

The application delete transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example**

```typescript
composer.addAppDelete({ sender: 'CREATORADDRESS' })
```

**Advanced example**

```typescript
composer.addAppDelete({
 sender: 'CREATORADDRESS',
 onComplete: algosdk.OnApplicationComplete.DeleteApplicationOC,
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

Defined in: [src/types/composer.ts:1287](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1287)

Add an ABI method delete application call transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

##### params

[`AppDeleteMethodCall`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appdeletemethodcall/)

The ABI delete method application call transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example**

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
composer.addAppDeleteMethodCall({ sender: 'CREATORADDRESS', method: method, args: ["arg1_value"] })
```

**Advanced example**

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
 onComplete: algosdk.OnApplicationComplete.DeleteApplicationOC,
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

Defined in: [src/types/composer.ts:1035](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1035)

Add an application update transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

##### params

The application update transaction parameters

###### accessReferences?

[`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]

Access references unifies `accountReferences`, `appReferences`, `assetReferences`, and `boxReferences` under a single list. If non-empty, these other reference lists must be empty. If access is empty, those other reference lists may be non-empty.

###### accountReferences?

(`string` \| `Address`)[]

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

Any [arguments to pass to the smart contract call](https://dev.algorand.co/concepts/smart-contracts/languages/teal/#argument-passing).

###### assetReferences?

`bigint`[]

The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

###### boxReferences?

([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]

Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays).

Either the name identifier (which will be set against app ID of `0` i.e.
 the current app), or a box identifier with the name identifier and app ID.

###### clearStateProgram

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

The program to execute for ClearState OnComplete as raw teal (string) or compiled teal (base 64 encoded as a byte array (Uint8Array))

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

###### onComplete?

`UpdateApplicationOC`

The [on-complete](https://dev.algorand.co/concepts/smart-contracts/avm#oncomplete) action of the call; defaults to no-op.

###### rejectVersion?

`number`

If set, the transaction will be rejected when the app's version is greater than or equal to this value. This can be used to prevent calling an app after it has been updated. Set to 0 or leave undefined to skip the version check.

###### rekeyTo?

`string` \| `Address`

Change the signing key of the sender to the given address.

**Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

###### sender

`string` \| `Address`

The address of the account sending the transaction.

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

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example**

```typescript
composer.addAppUpdate({ sender: 'CREATORADDRESS', approvalProgram: 'TEALCODE', clearStateProgram: 'TEALCODE' })
```

**Advanced example**

```typescript
composer.addAppUpdate({
 sender: 'CREATORADDRESS',
 approvalProgram: "TEALCODE",
 clearStateProgram: "TEALCODE",
 onComplete: algosdk.OnApplicationComplete.UpdateApplicationOC,
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

Defined in: [src/types/composer.ts:1235](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1235)

Add an ABI method update application call transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

##### params

[`AppUpdateMethodCall`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appupdatemethodcall/)

The ABI update method application call transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example**

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
composer.addAppUpdateMethodCall({ sender: 'CREATORADDRESS', approvalProgram: 'TEALCODE', clearStateProgram: 'TEALCODE', method: method, args: ["arg1_value"] })
```

**Advanced example**

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
 onComplete: algosdk.OnApplicationComplete.UpdateApplicationOC,
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

Defined in: [src/types/composer.ts:763](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L763)

Add an asset config transaction to the transaction group.

#### Parameters

##### params

[`AssetConfigParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/assetconfigparams/)

The asset config transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example**

```typescript
composer.addAssetConfig({ sender: "MANAGERADDRESS", assetId: 123456n, manager: "MANAGERADDRESS" })
```

**Advanced example**

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

Defined in: [src/types/composer.ts:728](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L728)

Add an asset create transaction to the transaction group.

#### Parameters

##### params

[`AssetCreateParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/assetcreateparams/)

The asset create transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example**

```typescript
composer.addAssetCreate({ sender: "CREATORADDRESS", total: 100n})
```

**Advanced example**

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

Defined in: [src/types/composer.ts:829](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L829)

Add an asset destroy transaction to the transaction group.

#### Parameters

##### params

[`AssetDestroyParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/assetdestroyparams/)

The asset destroy transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example**

```typescript
composer.addAssetDestroy({ sender: "MANAGERADDRESS", assetId: 123456n })
```

**Advanced example**

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

Defined in: [src/types/composer.ts:797](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L797)

Add an asset freeze transaction to the transaction group.

#### Parameters

##### params

[`AssetFreezeParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/assetfreezeparams/)

The asset freeze transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example**

```typescript
composer.addAssetFreeze({ sender: "MANAGERADDRESS", assetId: 123456n, account: "ACCOUNTADDRESS", frozen: true })
```

**Advanced example**

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

Defined in: [src/types/composer.ts:898](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L898)

Add an asset opt-in transaction to the transaction group.

#### Parameters

##### params

[`AssetOptInParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/assetoptinparams/)

The asset opt-in transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example**

```typescript
composer.addAssetOptIn({ sender: "SENDERADDRESS", assetId: 123456n })
```

**Advanced example**

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

Defined in: [src/types/composer.ts:936](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L936)

Add an asset opt-out transaction to the transaction group.

#### Parameters

##### params

[`AssetOptOutParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/assetoptoutparams/)

The asset opt-out transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example (without creator, will be retrieved from algod)**

```typescript
composer.addAssetOptOut({ sender: "SENDERADDRESS", assetId: 123456n, ensureZeroBalance: true })
```

**Basic example (with creator)**

```typescript
composer.addAssetOptOut({ sender: "SENDERADDRESS", creator: "CREATORADDRESS", assetId: 123456n, ensureZeroBalance: true })
```

**Advanced example**

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

Defined in: [src/types/composer.ts:866](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L866)

Add an asset transfer transaction to the transaction group.

#### Parameters

##### params

[`AssetTransferParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/assettransferparams/)

The asset transfer transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example**

```typescript
composer.addAssetTransfer({ sender: "HOLDERADDRESS", assetId: 123456n, amount: 1n, receiver: "RECEIVERADDRESS" })
```

**Advanced example (with clawback)**

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

### addAtc()

> **addAtc**(`atc`): `TransactionComposer`

Defined in: [src/types/composer.ts:1437](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1437)

Add the transactions within an `AtomicTransactionComposer` to the transaction group.

#### Parameters

##### atc

`AtomicTransactionComposer`

The `AtomicTransactionComposer` to build transactions from and add to the group

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Example

```typescript
const atc = new AtomicTransactionComposer()
  .addPayment({ sender: 'SENDERADDRESS', receiver: 'RECEIVERADDRESS', amount: 1000n })
composer.addAtc(atc)
```

***

### addOfflineKeyRegistration()

> **addOfflineKeyRegistration**(`params`): `TransactionComposer`

Defined in: [src/types/composer.ts:1420](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1420)

Add an offline key registration transaction to the transaction group.

#### Parameters

##### params

[`OfflineKeyRegistrationParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/offlinekeyregistrationparams/)

The offline key registration transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example**

```typescript
composer.addOfflineKeyRegistration({
  sender: 'SENDERADDRESS',
})
```

**Advanced example**

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

Defined in: [src/types/composer.ts:1385](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1385)

Add an online key registration transaction to the transaction group.

#### Parameters

##### params

[`OnlineKeyRegistrationParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/onlinekeyregistrationparams/)

The online key registration transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example**

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

**Advanced example**

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

Defined in: [src/types/composer.ts:687](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L687)

Add a payment transaction to the transaction group.

#### Parameters

##### params

[`PaymentParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/paymentparams/)

The payment transaction parameters

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Examples

**Basic example**

```typescript
composer.addPayment({
  sender: 'SENDERADDRESS',
  receiver: 'RECEIVERADDRESS',
  amount: (4).algo(),
})
```

**Advanced example**

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

Defined in: [src/types/composer.ts:644](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L644)

Add a pre-built transaction to the transaction group.

#### Parameters

##### transaction

`Transaction`

The pre-built transaction

##### signer?

`TransactionSigner`

Optional signer override for the transaction

#### Returns

`TransactionComposer`

The composer so you can chain method calls

#### Example

```typescript
composer.addTransaction(txn)
```

***

### build()

> **build**(): `Promise`\<\{ `atc`: `AtomicTransactionComposer`; `methodCalls`: `any`; `transactions`: `TransactionWithSigner`[]; \}\>

Defined in: [src/types/composer.ts:1978](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1978)

Compose all of the transactions in a single atomic transaction group and an atomic transaction composer.

You can then use the transactions standalone, or use the composer to execute or simulate the transactions.

Once this method is called, no further transactions will be able to be added.
You can safely call this method multiple times to get the same result.

#### Returns

`Promise`\<\{ `atc`: `AtomicTransactionComposer`; `methodCalls`: `any`; `transactions`: `TransactionWithSigner`[]; \}\>

The built atomic transaction composer, the transactions and any corresponding method calls

#### Example

```typescript
const { atc, transactions, methodCalls } = await composer.build()
```

***

### buildTransactions()

> **buildTransactions**(): `Promise`\<[`BuiltTransactions`](/docs/algokit-utils/typescript/latest/api/types/composer/interfaces/builttransactions/)\>

Defined in: [src/types/composer.ts:1920](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1920)

Compose all of the transactions without signers and return the transaction objects directly along with any ABI method calls.

#### Returns

`Promise`\<[`BuiltTransactions`](/docs/algokit-utils/typescript/latest/api/types/composer/interfaces/builttransactions/)\>

The array of built transactions and any corresponding method calls

#### Example

```typescript
const { transactions, methodCalls, signers } = await composer.buildTransactions()
```

***

### count()

> **count**(): `Promise`\<`number`\>

Defined in: [src/types/composer.ts:1961](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1961)

Get the number of transactions currently added to this composer.

#### Returns

`Promise`\<`number`\>

The number of transactions currently added to this composer

***

### ~~execute()~~

> **execute**(`params?`): `Promise`\<[`SendAtomicTransactionComposerResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendatomictransactioncomposerresults/)\>

Defined in: [src/types/composer.ts:2077](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L2077)

:::caution[Deprecated]
Use `send` instead.

Compose the atomic transaction group and send it to the network

An alias for `composer.send(params)`.
:::

#### Parameters

##### params?

[`SendParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendparams/)

The parameters to control execution with

#### Returns

`Promise`\<[`SendAtomicTransactionComposerResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendatomictransactioncomposerresults/)\>

The execution result

***

### rebuild()

> **rebuild**(): `Promise`\<\{ `atc`: `AtomicTransactionComposer`; `methodCalls`: `any`; `transactions`: `TransactionWithSigner`[]; \}\>

Defined in: [src/types/composer.ts:2018](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L2018)

Rebuild the group, discarding any previously built transactions.
This will potentially cause new signers and suggested params to be used if the callbacks return a new value compared to the first build.

#### Returns

`Promise`\<\{ `atc`: `AtomicTransactionComposer`; `methodCalls`: `any`; `transactions`: `TransactionWithSigner`[]; \}\>

The newly built atomic transaction composer and the transactions

#### Example

```typescript
const { atc, transactions, methodCalls } = await composer.rebuild()
```

***

### registerErrorTransformer()

> **registerErrorTransformer**(`transformer`): `TransactionComposer`

Defined in: [src/types/composer.ts:629](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L629)

Register a function that will be used to transform an error caught when simulating or executing

#### Parameters

##### transformer

[`ErrorTransformer`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/errortransformer/)

#### Returns

`TransactionComposer`

The composer so you can chain method calls

***

### send()

> **send**(`params?`): `Promise`\<[`SendAtomicTransactionComposerResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendatomictransactioncomposerresults/)\>

Defined in: [src/types/composer.ts:2032](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L2032)

Compose the atomic transaction group and send it to the network.

#### Parameters

##### params?

[`SendParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendparams/)

The parameters to control execution with

#### Returns

`Promise`\<[`SendAtomicTransactionComposerResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendatomictransactioncomposerresults/)\>

The execution result

#### Example

```typescript
const result = await composer.send()
```

***

### simulate()

#### Call Signature

> **simulate**(): `Promise`\<[`SendAtomicTransactionComposerResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendatomictransactioncomposerresults/) & `object`\>

Defined in: [src/types/composer.ts:2089](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L2089)

Compose the atomic transaction group and simulate sending it to the network

##### Returns

`Promise`\<[`SendAtomicTransactionComposerResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendatomictransactioncomposerresults/) & `object`\>

The simulation result

##### Example

```typescript
const result = await composer.simulate()
```

#### Call Signature

> **simulate**(`options`): `Promise`\<[`SendAtomicTransactionComposerResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendatomictransactioncomposerresults/) & `object`\>

Defined in: [src/types/composer.ts:2100](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L2100)

Compose the atomic transaction group and simulate sending it to the network

##### Parameters

###### options

###### allowMoreLogging?

`boolean`

###### allowUnnamedResources?

`boolean`

###### execTraceConfig?

`SimulateTraceConfig`

###### extraOpcodeBudget?

`number` \| `bigint`

###### round?

`number` \| `bigint`

###### skipSignatures

`boolean`

Whether or not to skip signatures for all built transactions and use an empty signer instead.
This will set `fixSigners` and `allowEmptySignatures` when sending the request to the algod API.

##### Returns

`Promise`\<[`SendAtomicTransactionComposerResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendatomictransactioncomposerresults/) & `object`\>

The simulation result

##### Example

```typescript
const result = await composer.simulate({
  skipSignatures: true,
})
```

#### Call Signature

> **simulate**(`options`): `Promise`\<[`SendAtomicTransactionComposerResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendatomictransactioncomposerresults/) & `object`\>

Defined in: [src/types/composer.ts:2113](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L2113)

Compose the atomic transaction group and simulate sending it to the network

##### Parameters

###### options

###### allowEmptySignatures?

`boolean`

###### allowMoreLogging?

`boolean`

###### allowUnnamedResources?

`boolean`

###### execTraceConfig?

`SimulateTraceConfig`

###### extraOpcodeBudget?

`number` \| `bigint`

###### fixSigners?

`boolean`

###### round?

`number` \| `bigint`

##### Returns

`Promise`\<[`SendAtomicTransactionComposerResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendatomictransactioncomposerresults/) & `object`\>

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

Defined in: [src/types/composer.ts:2195](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L2195)

Create an encoded transaction note that follows the ARC-2 spec.

https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0002.md

#### Parameters

##### note

[`Arc2TransactionNote`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/arc2transactionnote/)

The ARC-2 transaction note data

#### Returns

`Uint8Array`

The binary encoded transaction note
