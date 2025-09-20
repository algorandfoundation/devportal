---
title: TransactionComposer
slug: reference/algokit-utils-ts/api/classes/types_composertransactioncomposer
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/composer](/reference/algokit-utils-ts/api/modules/types_composer/) / TransactionComposer



[types/composer](/reference/algokit-utils-ts/api/modules/types_composer/).TransactionComposer

TransactionComposer helps you compose and execute transactions as a transaction group.

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [algod](#algod)
- [appManager](#appmanager)
- [atc](#atc)
- [defaultValidityWindow](#defaultvaliditywindow)
- [defaultValidityWindowIsExplicit](#defaultvaliditywindowisexplicit)
- [errorTransformers](#errortransformers)
- [getSigner](#getsigner)
- [getSuggestedParams](#getsuggestedparams)
- [txnMaxFees](#txnmaxfees)
- [txns](#txns)
- [NULL\_SIGNER](#null_signer)

### Methods

- [addAppCall](#addappcall)
- [addAppCallMethodCall](#addappcallmethodcall)
- [addAppCreate](#addappcreate)
- [addAppCreateMethodCall](#addappcreatemethodcall)
- [addAppDelete](#addappdelete)
- [addAppDeleteMethodCall](#addappdeletemethodcall)
- [addAppUpdate](#addappupdate)
- [addAppUpdateMethodCall](#addappupdatemethodcall)
- [addAssetConfig](#addassetconfig)
- [addAssetCreate](#addassetcreate)
- [addAssetDestroy](#addassetdestroy)
- [addAssetFreeze](#addassetfreeze)
- [addAssetOptIn](#addassetoptin)
- [addAssetOptOut](#addassetoptout)
- [addAssetTransfer](#addassettransfer)
- [addAtc](#addatc)
- [addOfflineKeyRegistration](#addofflinekeyregistration)
- [addOnlineKeyRegistration](#addonlinekeyregistration)
- [addPayment](#addpayment)
- [addTransaction](#addtransaction)
- [build](#build)
- [buildAppCall](#buildappcall)
- [buildAssetConfig](#buildassetconfig)
- [buildAssetCreate](#buildassetcreate)
- [buildAssetDestroy](#buildassetdestroy)
- [buildAssetFreeze](#buildassetfreeze)
- [buildAssetTransfer](#buildassettransfer)
- [buildAtc](#buildatc)
- [buildKeyReg](#buildkeyreg)
- [buildMethodCall](#buildmethodcall)
- [buildPayment](#buildpayment)
- [buildTransactions](#buildtransactions)
- [buildTxn](#buildtxn)
- [buildTxnWithSigner](#buildtxnwithsigner)
- [commonTxnBuildStep](#commontxnbuildstep)
- [count](#count)
- [execute](#execute)
- [rebuild](#rebuild)
- [registerErrorTransformer](#registererrortransformer)
- [send](#send)
- [simulate](#simulate)
- [transformError](#transformerror)
- [arc2Note](#arc2note)

## Constructors

### constructor

• **new TransactionComposer**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Create a `TransactionComposer`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`TransactionComposerParams`](/reference/algokit-utils-ts/api/modules/types_composer/#transactioncomposerparams) | The configuration for this composer |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The `TransactionComposer` instance

#### Defined in

[src/types/composer.ts:608](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L608)

## Properties

### algod

• `Private` **algod**: `AlgodClient`

The algod client used by the composer.

#### Defined in

[src/types/composer.ts:563](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L563)

___

### appManager

• `Private` **appManager**: [`AppManager`](/reference/algokit-utils-ts/api/classes/types_app_managerappmanager/)

#### Defined in

[src/types/composer.ts:577](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L577)

___

### atc

• `Private` **atc**: `AtomicTransactionComposer`

The ATC used to compose the group

#### Defined in

[src/types/composer.ts:552](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L552)

___

### defaultValidityWindow

• `Private` **defaultValidityWindow**: `bigint`

The default transaction validity window

#### Defined in

[src/types/composer.ts:572](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L572)

___

### defaultValidityWindowIsExplicit

• `Private` **defaultValidityWindowIsExplicit**: `boolean` = `false`

Whether the validity window was explicitly set on construction

#### Defined in

[src/types/composer.ts:575](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L575)

___

### errorTransformers

• `Private` **errorTransformers**: [`ErrorTransformer`](/reference/algokit-utils-ts/api/modules/types_composer/#errortransformer)[]

#### Defined in

[src/types/composer.ts:579](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L579)

___

### getSigner

• `Private` **getSigner**: (`address`: `string` \| `Address`) => `TransactionSigner`

A function that takes in an address and return a signer function for that address.

#### Type declaration

▸ (`address`): `TransactionSigner`

##### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| `Address` |

##### Returns

`TransactionSigner`

#### Defined in

[src/types/composer.ts:569](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L569)

___

### getSuggestedParams

• `Private` **getSuggestedParams**: () => `Promise`\<`SuggestedParams`\>

An async function that will return suggested params for the transaction.

#### Type declaration

▸ (): `Promise`\<`SuggestedParams`\>

##### Returns

`Promise`\<`SuggestedParams`\>

#### Defined in

[src/types/composer.ts:566](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L566)

___

### txnMaxFees

• `Private` **txnMaxFees**: `Map`\<`number`, [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)\>

Map of transaction index in the atc to a max logical fee.
This is set using the value of either maxFee or staticFee.

#### Defined in

[src/types/composer.ts:557](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L557)

___

### txns

• `Private` **txns**: [`Txn`](/reference/algokit-utils-ts/api/modules/types_composer/#txn)[] = `[]`

Transactions that have not yet been composed

#### Defined in

[src/types/composer.ts:560](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L560)

___

### NULL\_SIGNER

▪ `Static` `Private` **NULL\_SIGNER**: `TransactionSigner`

Signer used to represent a lack of signer

#### Defined in

[src/types/composer.ts:549](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L549)

## Methods

### addAppCall

▸ **addAppCall**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add an application call transaction to the transaction group.

If you want to create or update an app use `addAppCreate` or `addAppUpdate`.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AppCallParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appcallparams) | The application call transaction parameters |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
composer.addAppCall({ sender: 'CREATORADDRESS' })
```

**`Example`**

```typescript
composer.addAppCall({
 sender: 'CREATORADDRESS',
 onComplete: algosdk.OnApplicationComplete.OptInOC,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
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

#### Defined in

[src/types/composer.ts:1106](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1106)

___

### addAppCallMethodCall

▸ **addAppCallMethodCall**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add a non-create/non-update ABI method application call transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AppCallMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appcallmethodcall) | The ABI method application call transaction parameters |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
composer.addAppCallMethodCall({ sender: 'CREATORADDRESS', method: method, args: ["arg1_value"] })
```

**`Example`**

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

#### Defined in

[src/types/composer.ts:1318](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1318)

___

### addAppCreate

▸ **addAppCreate**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add an application create transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The application create transaction parameters |
| `params.accountReferences?` | (`string` \| `Address`)[] | Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays). |
| `params.appReferences?` | `bigint`[] | The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays). |
| `params.approvalProgram` | `string` \| `Uint8Array` | The program to execute for all OnCompletes other than ClearState as raw teal that will be compiled (string) or compiled teal (encoded as a byte array (Uint8Array)). |
| `params.args?` | `Uint8Array`[] | Any [arguments to pass to the smart contract call](/reference/algokit-utils-ts/api/concepts/smart-contracts/languages/teal/argument-passing/#argument-passing). |
| `params.assetReferences?` | `bigint`[] | The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays). |
| `params.boxReferences?` | ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] | Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays). Either the name identifier (which will be set against app ID of `0` i.e. the current app), or a box identifier with the name identifier and app ID. |
| `params.clearStateProgram` | `string` \| `Uint8Array` | The program to execute for ClearState OnComplete as raw teal that will be compiled (string) or compiled teal (encoded as a byte array (Uint8Array)). |
| `params.extraFee?` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | The fee to pay IN ADDITION to the suggested fee. Useful for manually covering inner transaction fees. |
| `params.extraProgramPages?` | `number` | Number of extra pages required for the programs. Defaults to the number needed for the programs in this call if not specified. This is immutable once the app is created. |
| `params.firstValidRound?` | `bigint` | Set the first round this transaction is valid. If left undefined, the value from algod will be used. We recommend you only set this when you intentionally want this to be some time in the future. |
| `params.lastValidRound?` | `bigint` | The last round this transaction is valid. It is recommended to use `validityWindow` instead. |
| `params.lease?` | `string` \| `Uint8Array` | Prevent multiple transactions with the same lease being included within the validity window. A [lease](https://dev.algorand.co/concepts/transactions/leases) enforces a mutually exclusive transaction (useful to prevent double-posting and other scenarios). |
| `params.maxFee?` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods. |
| `params.note?` | `string` \| `Uint8Array` | Note to attach to the transaction. Max of 1000 bytes. |
| `params.onComplete?` | `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` | The [on-complete](https://dev.algorand.co/concepts/smart-contracts/avm#oncomplete) action of the call; defaults to no-op. |
| `params.rekeyTo?` | `string` \| `Address` | Change the signing key of the sender to the given address. **Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying). |
| `params.schema?` | `Object` | The state schema for the app. This is immutable once the app is created. |
| `params.schema.globalByteSlices` | `number` | The number of byte slices saved in global state. |
| `params.schema.globalInts` | `number` | The number of integers saved in global state. |
| `params.schema.localByteSlices` | `number` | The number of byte slices saved in local state. |
| `params.schema.localInts` | `number` | The number of integers saved in local state. |
| `params.sender` | `string` \| `Address` | The address of the account sending the transaction. |
| `params.signer?` | `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) | The function used to sign transaction(s); if not specified then an attempt will be made to find a registered signer for the given `sender` or use a default signer (if configured). |
| `params.staticFee?` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction. |
| `params.validityWindow?` | `number` \| `bigint` | How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used. |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
composer.addAppCreate({ sender: 'CREATORADDRESS', approvalProgram: 'TEALCODE', clearStateProgram: 'TEALCODE' })
```

**`Example`**

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
 // Signer only needed if you want to provide one,
 //  generally you'd register it with AlgorandClient
 //  against the sender and not need to pass it in
 signer: transactionSigner,
 maxRoundsToWaitForConfirmation: 5,
 suppressLog: true,
})
```

#### Defined in

[src/types/composer.ts:985](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L985)

___

### addAppCreateMethodCall

▸ **addAppCreateMethodCall**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add an ABI method create application call transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AppCreateMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appcreatemethodcall) | The ABI create method application call transaction parameters |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
composer.addAppCreateMethodCall({ sender: 'CREATORADDRESS', approvalProgram: 'TEALCODE', clearStateProgram: 'TEALCODE', method: method, args: ["arg1_value"] })
```

**`Example`**

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

#### Defined in

[src/types/composer.ts:1166](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1166)

___

### addAppDelete

▸ **addAppDelete**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add an application delete transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AppDeleteParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appdeleteparams) | The application delete transaction parameters |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
composer.addAppDelete({ sender: 'CREATORADDRESS' })
```

**`Example`**

```typescript
composer.addAppDelete({
 sender: 'CREATORADDRESS',
 onComplete: algosdk.OnApplicationComplete.DeleteApplicationOC,
 args: [new Uint8Array(1, 2, 3, 4)]
 accountReferences: ["ACCOUNT_1"]
 appReferences: [123n, 1234n]
 assetReferences: [12345n]
 boxReferences: ["box1", {appId: 1234n, name: "box2"}]
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

#### Defined in

[src/types/composer.ts:1065](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1065)

___

### addAppDeleteMethodCall

▸ **addAppDeleteMethodCall**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add an ABI method delete application call transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AppDeleteMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appdeletemethodcall) | The ABI delete method application call transaction parameters |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
composer.addAppDeleteMethodCall({ sender: 'CREATORADDRESS', method: method, args: ["arg1_value"] })
```

**`Example`**

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

#### Defined in

[src/types/composer.ts:1268](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1268)

___

### addAppUpdate

▸ **addAppUpdate**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add an application update transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The application update transaction parameters |
| `params.accountReferences?` | (`string` \| `Address`)[] | Any account addresses to add to the [accounts array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays). |
| `params.appId` | `bigint` | ID of the application; 0 if the application is being created. |
| `params.appReferences?` | `bigint`[] | The ID of any apps to load to the [foreign apps array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays). |
| `params.approvalProgram` | `string` \| `Uint8Array` | The program to execute for all OnCompletes other than ClearState as raw teal (string) or compiled teal (base 64 encoded as a byte array (Uint8Array)) |
| `params.args?` | `Uint8Array`[] | Any [arguments to pass to the smart contract call](/reference/algokit-utils-ts/api/concepts/smart-contracts/languages/teal/argument-passing/#argument-passing). |
| `params.assetReferences?` | `bigint`[] | The ID of any assets to load to the [foreign assets array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays). |
| `params.boxReferences?` | ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] | Any boxes to load to the [boxes array](https://dev.algorand.co/concepts/smart-contracts/resource-usage#what-are-reference-arrays). Either the name identifier (which will be set against app ID of `0` i.e. the current app), or a box identifier with the name identifier and app ID. |
| `params.clearStateProgram` | `string` \| `Uint8Array` | The program to execute for ClearState OnComplete as raw teal (string) or compiled teal (base 64 encoded as a byte array (Uint8Array)) |
| `params.extraFee?` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | The fee to pay IN ADDITION to the suggested fee. Useful for manually covering inner transaction fees. |
| `params.firstValidRound?` | `bigint` | Set the first round this transaction is valid. If left undefined, the value from algod will be used. We recommend you only set this when you intentionally want this to be some time in the future. |
| `params.lastValidRound?` | `bigint` | The last round this transaction is valid. It is recommended to use `validityWindow` instead. |
| `params.lease?` | `string` \| `Uint8Array` | Prevent multiple transactions with the same lease being included within the validity window. A [lease](https://dev.algorand.co/concepts/transactions/leases) enforces a mutually exclusive transaction (useful to prevent double-posting and other scenarios). |
| `params.maxFee?` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods. |
| `params.note?` | `string` \| `Uint8Array` | Note to attach to the transaction. Max of 1000 bytes. |
| `params.onComplete?` | `UpdateApplicationOC` | The [on-complete](https://dev.algorand.co/concepts/smart-contracts/avm#oncomplete) action of the call; defaults to no-op. |
| `params.rekeyTo?` | `string` \| `Address` | Change the signing key of the sender to the given address. **Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying). |
| `params.sender` | `string` \| `Address` | The address of the account sending the transaction. |
| `params.signer?` | `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) | The function used to sign transaction(s); if not specified then an attempt will be made to find a registered signer for the given `sender` or use a default signer (if configured). |
| `params.staticFee?` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction. |
| `params.validityWindow?` | `number` \| `bigint` | How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used. |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
composer.addAppUpdate({ sender: 'CREATORADDRESS', approvalProgram: 'TEALCODE', clearStateProgram: 'TEALCODE' })
```

**`Example`**

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

#### Defined in

[src/types/composer.ts:1026](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1026)

___

### addAppUpdateMethodCall

▸ **addAppUpdateMethodCall**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add an ABI method update application call transaction to the transaction group.

Note: we recommend using app clients to make it easier to make app calls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AppUpdateMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appupdatemethodcall) | The ABI update method application call transaction parameters |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
composer.addAppUpdateMethodCall({ sender: 'CREATORADDRESS', approvalProgram: 'TEALCODE', clearStateProgram: 'TEALCODE', method: method, args: ["arg1_value"] })
```

**`Example`**

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

#### Defined in

[src/types/composer.ts:1218](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1218)

___

### addAssetConfig

▸ **addAssetConfig**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add an asset config transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AssetConfigParams`](/reference/algokit-utils-ts/api/modules/types_composer/#assetconfigparams) | The asset config transaction parameters |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
composer.addAssetConfig({ sender: "MANAGERADDRESS", assetId: 123456n, manager: "MANAGERADDRESS" })
```

**`Example`**

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

#### Defined in

[src/types/composer.ts:758](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L758)

___

### addAssetCreate

▸ **addAssetCreate**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add an asset create transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AssetCreateParams`](/reference/algokit-utils-ts/api/modules/types_composer/#assetcreateparams) | The asset create transaction parameters |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
composer.addAssetCreate({ sender: "CREATORADDRESS", total: 100n})
```

**`Example`**

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

#### Defined in

[src/types/composer.ts:723](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L723)

___

### addAssetDestroy

▸ **addAssetDestroy**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add an asset destroy transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AssetDestroyParams`](/reference/algokit-utils-ts/api/modules/types_composer/#assetdestroyparams) | The asset destroy transaction parameters |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
composer.addAssetDestroy({ sender: "MANAGERADDRESS", assetId: 123456n })
```

**`Example`**

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

#### Defined in

[src/types/composer.ts:824](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L824)

___

### addAssetFreeze

▸ **addAssetFreeze**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add an asset freeze transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AssetFreezeParams`](/reference/algokit-utils-ts/api/modules/types_composer/#assetfreezeparams) | The asset freeze transaction parameters |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
composer.addAssetFreeze({ sender: "MANAGERADDRESS", assetId: 123456n, account: "ACCOUNTADDRESS", frozen: true })
```

**`Example`**

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

#### Defined in

[src/types/composer.ts:792](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L792)

___

### addAssetOptIn

▸ **addAssetOptIn**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add an asset opt-in transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AssetOptInParams`](/reference/algokit-utils-ts/api/modules/types_composer/#assetoptinparams) | The asset opt-in transaction parameters |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
composer.addAssetOptIn({ sender: "SENDERADDRESS", assetId: 123456n })
```

**`Example`**

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

#### Defined in

[src/types/composer.ts:893](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L893)

___

### addAssetOptOut

▸ **addAssetOptOut**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add an asset opt-out transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AssetOptOutParams`](/reference/algokit-utils-ts/api/modules/types_composer/#assetoptoutparams) | The asset opt-out transaction parameters |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
composer.addAssetOptOut({ sender: "SENDERADDRESS", assetId: 123456n, ensureZeroBalance: true })
```

**`Example`**

```typescript
composer.addAssetOptOut({ sender: "SENDERADDRESS", creator: "CREATORADDRESS", assetId: 123456n, ensureZeroBalance: true })
```

**`Example`**

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

#### Defined in

[src/types/composer.ts:931](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L931)

___

### addAssetTransfer

▸ **addAssetTransfer**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add an asset transfer transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AssetTransferParams`](/reference/algokit-utils-ts/api/modules/types_composer/#assettransferparams) | The asset transfer transaction parameters |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
composer.addAssetTransfer({ sender: "HOLDERADDRESS", assetId: 123456n, amount: 1n, receiver: "RECEIVERADDRESS" })
```

**`Example`**

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

#### Defined in

[src/types/composer.ts:861](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L861)

___

### addAtc

▸ **addAtc**(`atc`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add the transactions within an `AtomicTransactionComposer` to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `atc` | `AtomicTransactionComposer` | The `AtomicTransactionComposer` to build transactions from and add to the group |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
const atc = new AtomicTransactionComposer()
  .addPayment({ sender: 'SENDERADDRESS', receiver: 'RECEIVERADDRESS', amount: 1000n })
composer.addAtc(atc)
```

#### Defined in

[src/types/composer.ts:1416](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1416)

___

### addOfflineKeyRegistration

▸ **addOfflineKeyRegistration**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add an offline key registration transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`OfflineKeyRegistrationParams`](/reference/algokit-utils-ts/api/modules/types_composer/#offlinekeyregistrationparams) | The offline key registration transaction parameters |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
composer.addOfflineKeyRegistration({
  sender: 'SENDERADDRESS',
})
```

**`Example`**

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

#### Defined in

[src/types/composer.ts:1399](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1399)

___

### addOnlineKeyRegistration

▸ **addOnlineKeyRegistration**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add an online key registration transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`OnlineKeyRegistrationParams`](/reference/algokit-utils-ts/api/modules/types_composer/#onlinekeyregistrationparams) | The online key registration transaction parameters |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

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

**`Example`**

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

#### Defined in

[src/types/composer.ts:1364](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1364)

___

### addPayment

▸ **addPayment**(`params`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add a payment transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`PaymentParams`](/reference/algokit-utils-ts/api/modules/types_composer/#paymentparams) | The payment transaction parameters |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
composer.addPayment({
  sender: 'SENDERADDRESS',
  receiver: 'RECEIVERADDRESS',
  amount: (4).algo(),
})
```

**`Example`**

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

#### Defined in

[src/types/composer.ts:682](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L682)

___

### addTransaction

▸ **addTransaction**(`transaction`, `signer?`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Add a pre-built transaction to the transaction group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | `Transaction` | The pre-built transaction |
| `signer?` | `TransactionSigner` | Optional signer override for the transaction |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

**`Example`**

```typescript
composer.addTransaction(txn)
```

#### Defined in

[src/types/composer.ts:639](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L639)

___

### build

▸ **build**(): `Promise`\<\{ `atc`: `AtomicTransactionComposer` ; `methodCalls`: `any` ; `transactions`: `TransactionWithSigner`[]  }\>

Compose all of the transactions in a single atomic transaction group and an atomic transaction composer.

You can then use the transactions standalone, or use the composer to execute or simulate the transactions.

Once this method is called, no further transactions will be able to be added.
You can safely call this method multiple times to get the same result.

#### Returns

`Promise`\<\{ `atc`: `AtomicTransactionComposer` ; `methodCalls`: `any` ; `transactions`: `TransactionWithSigner`[]  }\>

The built atomic transaction composer, the transactions and any corresponding method calls

**`Example`**

```typescript
const { atc, transactions, methodCalls } = await composer.build()
```

#### Defined in

[src/types/composer.ts:1946](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1946)

___

### buildAppCall

▸ **buildAppCall**(`params`, `suggestedParams`): `Promise`\<`TransactionWithContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | \{ `accountReferences?`: (`string` \| `Address`)[] ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `extraProgramPages?`: `number` ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `schema?`: \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number`  } ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint`  } \| \{ `accountReferences?`: (`string` \| `Address`)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `UpdateApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint`  } \| [`AppCallParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appcallparams) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`Promise`\<`TransactionWithContext`\>

#### Defined in

[src/types/composer.ts:1755](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1755)

___

### buildAssetConfig

▸ **buildAssetConfig**(`params`, `suggestedParams`): `TransactionWithContext`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AssetConfigParams`](/reference/algokit-utils-ts/api/modules/types_composer/#assetconfigparams) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`TransactionWithContext`

#### Defined in

[src/types/composer.ts:1712](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1712)

___

### buildAssetCreate

▸ **buildAssetCreate**(`params`, `suggestedParams`): `TransactionWithContext`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AssetCreateParams`](/reference/algokit-utils-ts/api/modules/types_composer/#assetcreateparams) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`TransactionWithContext`

#### Defined in

[src/types/composer.ts:1694](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1694)

___

### buildAssetDestroy

▸ **buildAssetDestroy**(`params`, `suggestedParams`): `TransactionWithContext`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AssetDestroyParams`](/reference/algokit-utils-ts/api/modules/types_composer/#assetdestroyparams) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`TransactionWithContext`

#### Defined in

[src/types/composer.ts:1725](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1725)

___

### buildAssetFreeze

▸ **buildAssetFreeze**(`params`, `suggestedParams`): `TransactionWithContext`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AssetFreezeParams`](/reference/algokit-utils-ts/api/modules/types_composer/#assetfreezeparams) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`TransactionWithContext`

#### Defined in

[src/types/composer.ts:1733](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1733)

___

### buildAssetTransfer

▸ **buildAssetTransfer**(`params`, `suggestedParams`): `TransactionWithContext`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AssetTransferParams`](/reference/algokit-utils-ts/api/modules/types_composer/#assettransferparams) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`TransactionWithContext`

#### Defined in

[src/types/composer.ts:1743](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1743)

___

### buildAtc

▸ **buildAtc**(`atc`): `TransactionWithSignerAndContext`[]

Build an ATC and return transactions ready to be incorporated into a broader set of transactions this composer is composing

#### Parameters

| Name | Type |
| :------ | :------ |
| `atc` | `AtomicTransactionComposer` |

#### Returns

`TransactionWithSignerAndContext`[]

#### Defined in

[src/types/composer.ts:1422](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1422)

___

### buildKeyReg

▸ **buildKeyReg**(`params`, `suggestedParams`): `TransactionWithContext`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`OnlineKeyRegistrationParams`](/reference/algokit-utils-ts/api/modules/types_composer/#onlinekeyregistrationparams) \| [`OfflineKeyRegistrationParams`](/reference/algokit-utils-ts/api/modules/types_composer/#offlinekeyregistrationparams) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`TransactionWithContext`

#### Defined in

[src/types/composer.ts:1806](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1806)

___

### buildMethodCall

▸ **buildMethodCall**(`params`, `suggestedParams`, `includeSigner`): `Promise`\<`TransactionWithSignerAndContext`[]\>

Builds an ABI method call transaction and any other associated transactions represented in the ABI args.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AppCreateMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appcreatemethodcall) \| [`AppUpdateMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appupdatemethodcall) \| [`AppCallMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appcallmethodcall) | - |
| `suggestedParams` | `SuggestedParams` | - |
| `includeSigner` | `boolean` | Whether to include the actual signer for the transactions. If you are just building transactions without signers yet then set this to `false`. |

#### Returns

`Promise`\<`TransactionWithSignerAndContext`[]\>

#### Defined in

[src/types/composer.ts:1502](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1502)

___

### buildPayment

▸ **buildPayment**(`params`, `suggestedParams`): `TransactionWithContext`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`PaymentParams`](/reference/algokit-utils-ts/api/modules/types_composer/#paymentparams) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`TransactionWithContext`

#### Defined in

[src/types/composer.ts:1684](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1684)

___

### buildTransactions

▸ **buildTransactions**(): `Promise`\<[`BuiltTransactions`](/reference/algokit-utils-ts/api/interfaces/types_composerbuilttransactions/)\>

Compose all of the transactions without signers and return the transaction objects directly along with any ABI method calls.

#### Returns

`Promise`\<[`BuiltTransactions`](/reference/algokit-utils-ts/api/interfaces/types_composerbuilttransactions/)\>

The array of built transactions and any corresponding method calls

**`Example`**

```typescript
const { transactions, methodCalls, signers } = await composer.buildTransactions()
```

#### Defined in

[src/types/composer.ts:1888](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1888)

___

### buildTxn

▸ **buildTxn**(`txn`, `suggestedParams`): `Promise`\<`TransactionWithContext`[]\>

Builds all transaction types apart from `txnWithSigner`, `atc` and `methodCall` since those ones can have custom signers that need to be retrieved.

#### Parameters

| Name | Type |
| :------ | :------ |
| `txn` | [`Txn`](/reference/algokit-utils-ts/api/modules/types_composer/#txn) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`Promise`\<`TransactionWithContext`[]\>

#### Defined in

[src/types/composer.ts:1829](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1829)

___

### buildTxnWithSigner

▸ **buildTxnWithSigner**(`txn`, `suggestedParams`): `Promise`\<`TransactionWithSignerAndContext`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txn` | [`Txn`](/reference/algokit-utils-ts/api/modules/types_composer/#txn) |
| `suggestedParams` | `SuggestedParams` |

#### Returns

`Promise`\<`TransactionWithSignerAndContext`[]\>

#### Defined in

[src/types/composer.ts:1856](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1856)

___

### commonTxnBuildStep

▸ **commonTxnBuildStep**\<`TParams`\>(`buildTxn`, `params`, `txnParams`): `TransactionWithContext`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends `CommonTransactionParams` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `buildTxn` | (`params`: `TParams`) => `Transaction` |
| `params` | [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) |
| `txnParams` | `TParams` |

#### Returns

`TransactionWithContext`

#### Defined in

[src/types/composer.ts:1444](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1444)

___

### count

▸ **count**(): `Promise`\<`number`\>

Get the number of transactions currently added to this composer.

#### Returns

`Promise`\<`number`\>

The number of transactions currently added to this composer

#### Defined in

[src/types/composer.ts:1929](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1929)

___

### execute

▸ **execute**(`params?`): `Promise`\<[`SendAtomicTransactionComposerResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters to control execution with |

#### Returns

`Promise`\<[`SendAtomicTransactionComposerResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/)\>

The execution result

**`Deprecated`**

Use `send` instead.

Compose the atomic transaction group and send it to the network

An alias for `composer.send(params)`.

#### Defined in

[src/types/composer.ts:2044](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L2044)

___

### rebuild

▸ **rebuild**(): `Promise`\<\{ `atc`: `AtomicTransactionComposer` ; `methodCalls`: `any` ; `transactions`: `TransactionWithSigner`[]  }\>

Rebuild the group, discarding any previously built transactions.
This will potentially cause new signers and suggested params to be used if the callbacks return a new value compared to the first build.

#### Returns

`Promise`\<\{ `atc`: `AtomicTransactionComposer` ; `methodCalls`: `any` ; `transactions`: `TransactionWithSigner`[]  }\>

The newly built atomic transaction composer and the transactions

**`Example`**

```typescript
const { atc, transactions, methodCalls } = await composer.rebuild()
```

#### Defined in

[src/types/composer.ts:1985](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1985)

___

### registerErrorTransformer

▸ **registerErrorTransformer**(`transformer`): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Register a function that will be used to transform an error caught when simulating or executing

#### Parameters

| Name | Type |
| :------ | :------ |
| `transformer` | [`ErrorTransformer`](/reference/algokit-utils-ts/api/modules/types_composer/#errortransformer) |

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

The composer so you can chain method calls

#### Defined in

[src/types/composer.ts:624](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L624)

___

### send

▸ **send**(`params?`): `Promise`\<[`SendAtomicTransactionComposerResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/)\>

Compose the atomic transaction group and send it to the network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters to control execution with |

#### Returns

`Promise`\<[`SendAtomicTransactionComposerResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/)\>

The execution result

**`Example`**

```typescript
const result = await composer.send()
```

#### Defined in

[src/types/composer.ts:1999](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L1999)

___

### simulate

▸ **simulate**(): `Promise`\<[`SendAtomicTransactionComposerResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/) & \{ `simulateResponse`: `SimulateResponse`  }\>

Compose the atomic transaction group and simulate sending it to the network

#### Returns

`Promise`\<[`SendAtomicTransactionComposerResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/) & \{ `simulateResponse`: `SimulateResponse`  }\>

The simulation result

**`Example`**

```typescript
const result = await composer.simulate()
```

#### Defined in

[src/types/composer.ts:2056](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L2056)

▸ **simulate**(`options`): `Promise`\<[`SendAtomicTransactionComposerResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/) & \{ `simulateResponse`: `SimulateResponse`  }\>

Compose the atomic transaction group and simulate sending it to the network

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.allowMoreLogging?` | `boolean` | - |
| `options.allowUnnamedResources?` | `boolean` | - |
| `options.execTraceConfig?` | `SimulateTraceConfig` | - |
| `options.extraOpcodeBudget?` | `number` \| `bigint` | - |
| `options.round?` | `number` \| `bigint` | - |
| `options.skipSignatures` | `boolean` | Whether or not to skip signatures for all built transactions and use an empty signer instead. This will set `fixSigners` and `allowEmptySignatures` when sending the request to the algod API. |

#### Returns

`Promise`\<[`SendAtomicTransactionComposerResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/) & \{ `simulateResponse`: `SimulateResponse`  }\>

The simulation result

**`Example`**

```typescript
const result = await composer.simulate({
  skipSignatures: true,
})
```

#### Defined in

[src/types/composer.ts:2067](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L2067)

▸ **simulate**(`options`): `Promise`\<[`SendAtomicTransactionComposerResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/) & \{ `simulateResponse`: `SimulateResponse`  }\>

Compose the atomic transaction group and simulate sending it to the network

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.allowEmptySignatures?` | `boolean` |
| `options.allowMoreLogging?` | `boolean` |
| `options.allowUnnamedResources?` | `boolean` |
| `options.execTraceConfig?` | `SimulateTraceConfig` |
| `options.extraOpcodeBudget?` | `number` \| `bigint` |
| `options.fixSigners?` | `boolean` |
| `options.round?` | `number` \| `bigint` |

#### Returns

`Promise`\<[`SendAtomicTransactionComposerResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/) & \{ `simulateResponse`: `SimulateResponse`  }\>

The simulation result

**`Example`**

```typescript
const result = await composer.simulate({
  extraOpcodeBudget: 1000,
})
```

#### Defined in

[src/types/composer.ts:2080](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L2080)

___

### transformError

▸ **transformError**(`originalError`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `originalError` | `unknown` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/types/composer.ts:581](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L581)

___

### arc2Note

▸ **arc2Note**(`note`): `Uint8Array`

Create an encoded transaction note that follows the ARC-2 spec.

https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0002.md

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `note` | [`Arc2TransactionNote`](/reference/algokit-utils-ts/api/modules/types_transaction/#arc2transactionnote) | The ARC-2 transaction note data |

#### Returns

`Uint8Array`

The binary encoded transaction note

#### Defined in

[src/types/composer.ts:2156](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L2156)