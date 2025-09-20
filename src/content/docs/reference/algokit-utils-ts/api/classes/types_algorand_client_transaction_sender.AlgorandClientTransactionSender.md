---
title: AlgorandClientTransactionSender
slug: reference/algokit-utils-ts/api/classes/types_algorand_client_transaction_senderalgorandclienttransactionsender
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/algorand-client-transaction-sender](/reference/algokit-utils-ts/api/modules/types_algorand_client_transaction_sender/) / AlgorandClientTransactionSender

[types/algorand-client-transaction-sender](/reference/algokit-utils-ts/api/modules/types_algorand_client_transaction_sender/).AlgorandClientTransactionSender

Orchestrates sending transactions for `AlgorandClient`.

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [\_appManager](#_appmanager)
- [\_assetManager](#_assetmanager)
- [\_newGroup](#_newgroup)
- [appCall](#appcall)
- [appCallMethodCall](#appcallmethodcall)
- [appCreate](#appcreate)
- [appCreateMethodCall](#appcreatemethodcall)
- [appDelete](#appdelete)
- [appDeleteMethodCall](#appdeletemethodcall)
- [appUpdate](#appupdate)
- [appUpdateMethodCall](#appupdatemethodcall)
- [assetConfig](#assetconfig)
- [assetDestroy](#assetdestroy)
- [assetFreeze](#assetfreeze)
- [assetOptIn](#assetoptin)
- [assetTransfer](#assettransfer)
- [offlineKeyRegistration](#offlinekeyregistration)
- [onlineKeyRegistration](#onlinekeyregistration)
- [payment](#payment)

### Methods

- [\_send](#_send)
- [\_sendAppCall](#_sendappcall)
- [\_sendAppCreateCall](#_sendappcreatecall)
- [\_sendAppUpdateCall](#_sendappupdatecall)
- [assetCreate](#assetcreate)
- [assetOptOut](#assetoptout)
- [newGroup](#newgroup)

## Constructors

### constructor

• **new AlgorandClientTransactionSender**(`newGroup`, `assetManager`, `appManager`): [`AlgorandClientTransactionSender`](/reference/algokit-utils-ts/api/classes/types_algorand_client_transaction_senderalgorandclienttransactionsender/)

Creates a new `AlgorandClientSender`

#### Parameters

| Name           | Type                                                                                                      | Description                                                        |
| :------------- | :-------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| `newGroup`     | () => [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/) | A lambda that starts a new `TransactionComposer` transaction group |
| `assetManager` | [`AssetManager`](/reference/algokit-utils-ts/api/classes/types_asset_managerassetmanager/)                | An `AssetManager` instance                                         |
| `appManager`   | [`AppManager`](/reference/algokit-utils-ts/api/classes/types_app_managerappmanager/)                      | An `AppManager` instance                                           |

#### Returns

[`AlgorandClientTransactionSender`](/reference/algokit-utils-ts/api/classes/types_algorand_client_transaction_senderalgorandclienttransactionsender/)

**`Example`**

```typescript
const transactionSender = new AlgorandClientTransactionSender(
  () => new TransactionComposer(),
  assetManager,
  appManager,
);
```

#### Defined in

[src/types/algorand-client-transaction-sender.ts:51](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L51)

## Properties

### \_appManager

• `Private` **\_appManager**: [`AppManager`](/reference/algokit-utils-ts/api/classes/types_app_managerappmanager/)

#### Defined in

[src/types/algorand-client-transaction-sender.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L39)

---

### \_assetManager

• `Private` **\_assetManager**: [`AssetManager`](/reference/algokit-utils-ts/api/classes/types_asset_managerassetmanager/)

#### Defined in

[src/types/algorand-client-transaction-sender.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L38)

---

### \_newGroup

• `Private` **\_newGroup**: () => [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

#### Type declaration

▸ (): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

##### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

#### Defined in

[src/types/algorand-client-transaction-sender.ts:37](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L37)

---

### appCall

• **appCall**: (`params`: [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `accountReferences?`: (`string` \| `Address`)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `onComplete?`: `OnApplicationComplete` } & \{ `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `ClearStateOC` \| `DeleteApplicationOC` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Call a smart contract.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

**`Example`**

```typescript
await algorand.send.appCall({ sender: 'CREATORADDRESS' });
```

**`Example`**

```typescript
await algorand.send.appCall({
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
 // Signer only needed if you want to provide one,
 //  generally you'd register it with AlgorandClient
 //  against the sender and not need to pass it in
 signer: transactionSigner,
 maxRoundsToWaitForConfirmation: 5,
 suppressLog: true,
})
```

#### Type declaration

▸ (`params`): `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Description                                 |
| :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------ |
| `params` | [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `accountReferences?`: (`string` \| `Address`)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `onComplete?`: `OnApplicationComplete` } & \{ `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `ClearStateOC` \| `DeleteApplicationOC` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the app call transaction |

##### Returns

`Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:731](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L731)

---

### appCallMethodCall

• **appCallMethodCall**: (`params`: \{ `accountReferences?`: (`string` \| `Address`)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` } & \{ `args?`: (`undefined` \| `Transaction` \| `ABIValue` \| `TransactionWithSigner` \| `Promise`\<`Transaction`\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<\{ `accountReferences?`: (... \| ...)[] ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: BoxIdentifier \| BoxReference[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `extraProgramPages?`: `number` ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `schema?`: \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number` } ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` }\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<\{ `accountReferences?`: (... \| ...)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: BoxIdentifier \| BoxReference[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `UpdateApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` }\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<[`AppMethodCallParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcallparams)\>)[] ; `method`: `ABIMethod` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Call a smart contract via an ABI method.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

**`Example`**

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
});
await algorand.send.appCallMethodCall({
  sender: 'CREATORADDRESS',
  method: method,
  args: ['arg1_value'],
});
```

**`Example`**

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
await algorand.send.appCallMethodCall({
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
 // Signer only needed if you want to provide one,
 //  generally you'd register it with AlgorandClient
 //  against the sender and not need to pass it in
 signer: transactionSigner,
 maxRoundsToWaitForConfirmation: 5,
 suppressLog: true,
})
```

#### Type declaration

▸ (`params`): `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Description                                 |
| :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------ |
| `params` | \{ `accountReferences?`: (`string` \| `Address`)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` } & \{ `args?`: (`undefined` \| `Transaction` \| `ABIValue` \| `TransactionWithSigner` \| `Promise`\<`Transaction`\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<\{ `accountReferences?`: (... \| ...)[] ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: BoxIdentifier \| BoxReference[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `extraProgramPages?`: `number` ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `schema?`: \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number` } ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` }\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<\{ `accountReferences?`: (... \| ...)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: BoxIdentifier \| BoxReference[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `UpdateApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` }\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<[`AppMethodCallParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcallparams)\>)[] ; `method`: `ABIMethod` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the app call transaction |

##### Returns

`Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:971](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L971)

---

### appCreate

• **appCreate**: (`params`: \{ `accountReferences?`: (`string` \| `Address`)[] ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `extraProgramPages?`: `number` ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `schema?`: \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number` } ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `appAddress`: `Address` ; `appId`: `bigint` ; `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Create a smart contract.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

**`Example`**

```typescript
const result = await algorand.send.appCreate({
  sender: 'CREATORADDRESS',
  approvalProgram: 'TEALCODE',
  clearStateProgram: 'TEALCODE',
});
const createdAppId = result.appId;
```

**`Example`**

```typescript
await algorand.send.appCreate({
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

#### Type declaration

▸ (`params`): `Promise`\<\{ `appAddress`: `Address` ; `appId`: `bigint` ; `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Description                                     |
| :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------- |
| `params` | \{ `accountReferences?`: (`string` \| `Address`)[] ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `extraProgramPages?`: `number` ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `schema?`: \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number` } ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the app creation transaction |

##### Returns

`Promise`\<\{ `appAddress`: `Address` ; `appId`: `bigint` ; `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:594](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L594)

---

### appCreateMethodCall

• **appCreateMethodCall**: (`params`: \{ `accountReferences?`: (`string` \| `Address`)[] ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `extraProgramPages?`: `number` ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `schema?`: \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number` } ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` } & \{ `args?`: (`undefined` \| `Transaction` \| `ABIValue` \| `TransactionWithSigner` \| `Promise`\<`Transaction`\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<\{ `accountReferences?`: (... \| ...)[] ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: BoxIdentifier \| BoxReference[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `extraProgramPages?`: `number` ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `schema?`: \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number` } ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` }\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<\{ `accountReferences?`: (... \| ...)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: BoxIdentifier \| BoxReference[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `UpdateApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` }\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<[`AppMethodCallParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcallparams)\>)[] ; `method`: `ABIMethod` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `appAddress`: `Address` ; `appId`: `bigint` ; `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Create a smart contract via an ABI method.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

**`Example`**

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
});
const result = await algorand.send.appCreateMethodCall({
  sender: 'CREATORADDRESS',
  approvalProgram: 'TEALCODE',
  clearStateProgram: 'TEALCODE',
  method: method,
  args: ['arg1_value'],
});
const createdAppId = result.appId;
```

**`Example`**

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
await algorand.send.appCreateMethodCall({
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
 // Signer only needed if you want to provide one,
 //  generally you'd register it with AlgorandClient
 //  against the sender and not need to pass it in
 signer: transactionSigner,
 maxRoundsToWaitForConfirmation: 5,
 suppressLog: true,
})
```

#### Type declaration

▸ (`params`): `Promise`\<\{ `appAddress`: `Address` ; `appId`: `bigint` ; `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Description                                     |
| :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------- |
| `params` | \{ `accountReferences?`: (`string` \| `Address`)[] ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `extraProgramPages?`: `number` ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `schema?`: \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number` } ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` } & \{ `args?`: (`undefined` \| `Transaction` \| `ABIValue` \| `TransactionWithSigner` \| `Promise`\<`Transaction`\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<\{ `accountReferences?`: (... \| ...)[] ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: BoxIdentifier \| BoxReference[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `extraProgramPages?`: `number` ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `schema?`: \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number` } ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` }\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<\{ `accountReferences?`: (... \| ...)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: BoxIdentifier \| BoxReference[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `UpdateApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` }\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<[`AppMethodCallParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcallparams)\>)[] ; `method`: `ABIMethod` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the app creation transaction |

##### Returns

`Promise`\<\{ `appAddress`: `Address` ; `appId`: `bigint` ; `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:798](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L798)

---

### appDelete

• **appDelete**: (`params`: [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `accountReferences?`: (`string` \| `Address`)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `onComplete?`: `OnApplicationComplete` } & \{ `onComplete?`: `DeleteApplicationOC` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Delete a smart contract.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

**`Example`**

```typescript
await algorand.send.appDelete({ sender: 'CREATORADDRESS' });
```

**`Example`**

```typescript
await algorand.send.appDelete({
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
 // Signer only needed if you want to provide one,
 //  generally you'd register it with AlgorandClient
 //  against the sender and not need to pass it in
 signer: transactionSigner,
 maxRoundsToWaitForConfirmation: 5,
 suppressLog: true,
})
```

#### Type declaration

▸ (`params`): `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Description                                     |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------- |
| `params` | [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `accountReferences?`: (`string` \| `Address`)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `onComplete?`: `OnApplicationComplete` } & \{ `onComplete?`: `DeleteApplicationOC` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the app deletion transaction |

##### Returns

`Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:686](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L686)

---

### appDeleteMethodCall

• **appDeleteMethodCall**: (`params`: \{ `accountReferences?`: (`string` \| `Address`)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` } & \{ `args?`: (`undefined` \| `Transaction` \| `ABIValue` \| `TransactionWithSigner` \| `Promise`\<`Transaction`\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<\{ `accountReferences?`: (... \| ...)[] ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: BoxIdentifier \| BoxReference[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `extraProgramPages?`: `number` ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `schema?`: \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number` } ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` }\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<\{ `accountReferences?`: (... \| ...)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: BoxIdentifier \| BoxReference[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `UpdateApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` }\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<[`AppMethodCallParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcallparams)\>)[] ; `method`: `ABIMethod` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Delete a smart contract via an ABI method.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

**`Example`**

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
});
await algorand.send.appDeleteMethodCall({
  sender: 'CREATORADDRESS',
  method: method,
  args: ['arg1_value'],
});
```

**`Example`**

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
await algorand.send.appDeleteMethodCall({
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
 // Signer only needed if you want to provide one,
 //  generally you'd register it with AlgorandClient
 //  against the sender and not need to pass it in
 signer: transactionSigner,
 maxRoundsToWaitForConfirmation: 5,
 suppressLog: true,
})
```

#### Type declaration

▸ (`params`): `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Description                                     |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------- |
| `params` | \{ `accountReferences?`: (`string` \| `Address`)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` } & \{ `args?`: (`undefined` \| `Transaction` \| `ABIValue` \| `TransactionWithSigner` \| `Promise`\<`Transaction`\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<\{ `accountReferences?`: (... \| ...)[] ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: BoxIdentifier \| BoxReference[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `extraProgramPages?`: `number` ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `schema?`: \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number` } ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` }\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<\{ `accountReferences?`: (... \| ...)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: BoxIdentifier \| BoxReference[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `UpdateApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` }\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<[`AppMethodCallParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcallparams)\>)[] ; `method`: `ABIMethod` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the app deletion transaction |

##### Returns

`Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:914](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L914)

---

### appUpdate

• **appUpdate**: (`params`: \{ `accountReferences?`: (`string` \| `Address`)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `UpdateApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Update a smart contract.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

**`Example`**

```typescript
await algorand.send.appUpdate({
  sender: 'CREATORADDRESS',
  approvalProgram: 'TEALCODE',
  clearStateProgram: 'TEALCODE',
});
```

**`Example`**

```typescript
await algorand.send.appUpdate({
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
 // Signer only needed if you want to provide one,
 //  generally you'd register it with AlgorandClient
 //  against the sender and not need to pass it in
 signer: transactionSigner,
 maxRoundsToWaitForConfirmation: 5,
 suppressLog: true,
})
```

#### Type declaration

▸ (`params`): `Promise`\<\{ `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Description                                   |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------- |
| `params` | \{ `accountReferences?`: (`string` \| `Address`)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `UpdateApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the app update transaction |

##### Returns

`Promise`\<\{ `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:641](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L641)

---

### appUpdateMethodCall

• **appUpdateMethodCall**: (`params`: \{ `accountReferences?`: (`string` \| `Address`)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `UpdateApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` } & \{ `args?`: (`undefined` \| `Transaction` \| `ABIValue` \| `TransactionWithSigner` \| `Promise`\<`Transaction`\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<\{ `accountReferences?`: (... \| ...)[] ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: BoxIdentifier \| BoxReference[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `extraProgramPages?`: `number` ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `schema?`: \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number` } ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` }\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<\{ `accountReferences?`: (... \| ...)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: BoxIdentifier \| BoxReference[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `UpdateApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` }\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<[`AppMethodCallParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcallparams)\>)[] ; `method`: `ABIMethod` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Update a smart contract via an ABI method.

Note: you may prefer to use `algorand.client` to get an app client for more advanced functionality.

**`Example`**

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
});
await algorand.send.appUpdateMethodCall({
  sender: 'CREATORADDRESS',
  approvalProgram: 'TEALCODE',
  clearStateProgram: 'TEALCODE',
  method: method,
  args: ['arg1_value'],
});
```

**`Example`**

```typescript
const method = new ABIMethod({
  name: 'method',
  args: [{ name: 'arg1', type: 'string' }],
  returns: { type: 'string' },
})
await algorand.send.appUpdateMethodCall({
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
 // Signer only needed if you want to provide one,
 //  generally you'd register it with AlgorandClient
 //  against the sender and not need to pass it in
 signer: transactionSigner,
 maxRoundsToWaitForConfirmation: 5,
 suppressLog: true,
})
```

#### Type declaration

▸ (`params`): `Promise`\<\{ `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Description                                   |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------- |
| `params` | \{ `accountReferences?`: (`string` \| `Address`)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `UpdateApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` } & \{ `args?`: (`undefined` \| `Transaction` \| `ABIValue` \| `TransactionWithSigner` \| `Promise`\<`Transaction`\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<\{ `accountReferences?`: (... \| ...)[] ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: BoxIdentifier \| BoxReference[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `extraProgramPages?`: `number` ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `schema?`: \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number` } ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` }\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<\{ `accountReferences?`: (... \| ...)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: BoxIdentifier \| BoxReference[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `UpdateApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` }\> \| [`AppMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcall)\<[`AppMethodCallParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appmethodcallparams)\>)[] ; `method`: `ABIMethod` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the app update transaction |

##### Returns

`Promise`\<\{ `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:857](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L857)

---

### assetConfig

• **assetConfig**: (`params`: [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `assetId`: `bigint` ; `clawback?`: `string` \| `Address` ; `freeze?`: `string` \| `Address` ; `manager`: `undefined` \| `string` \| `Address` ; `reserve?`: `string` \| `Address` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Configure an existing Algorand Standard Asset.

**Note:** The manager, reserve, freeze, and clawback addresses
are immutably empty if they are not set. If manager is not set then
all fields are immutable from that point forward.

**`Example`**

```typescript
await algorand.send.assetConfig({
  sender: 'MANAGERADDRESS',
  assetId: 123456n,
  manager: 'MANAGERADDRESS',
});
```

**`Example`**

```typescript
await algorand.send.assetConfig({
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
  // Signer only needed if you want to provide one,
  //  generally you'd register it with AlgorandClient
  //  against the sender and not need to pass it in
  signer: transactionSigner,
  maxRoundsToWaitForConfirmation: 5,
  suppressLog: true,
});
```

#### Type declaration

▸ (`params`): `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                                                                                                                            | Description                                     |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------- |
| `params` | [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `assetId`: `bigint` ; `clawback?`: `string` \| `Address` ; `freeze?`: `string` \| `Address` ; `manager`: `undefined` \| `string` \| `Address` ; `reserve?`: `string` \| `Address` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the asset config transaction |

##### Returns

`Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:304](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L304)

---

### assetDestroy

• **assetDestroy**: (`params`: [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `assetId`: `bigint` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Destroys an Algorand Standard Asset.

Created assets can be destroyed only by the asset manager account.
All of the assets must be owned by the creator of the asset before
the asset can be deleted.

**`Example`**

```typescript
await algorand.send.assetDestroy({ sender: 'MANAGERADDRESS', assetId: 123456n });
```

**`Example`**

```typescript
await algorand.send.assetDestroy({
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
  // Signer only needed if you want to provide one,
  //  generally you'd register it with AlgorandClient
  //  against the sender and not need to pass it in
  signer: transactionSigner,
  maxRoundsToWaitForConfirmation: 5,
  suppressLog: true,
});
```

#### Type declaration

▸ (`params`): `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                                                                                                                                                              | Description                                      |
| :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------- |
| `params` | [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `assetId`: `bigint` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the asset destroy transaction |

##### Returns

`Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:384](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L384)

---

### assetFreeze

• **assetFreeze**: (`params`: [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `account`: `string` \| `Address` ; `assetId`: `bigint` ; `frozen`: `boolean` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Freeze or unfreeze an Algorand Standard Asset for an account.

**`Example`**

```typescript
await algorand.send.assetFreeze({
  sender: 'MANAGERADDRESS',
  assetId: 123456n,
  account: 'ACCOUNTADDRESS',
  frozen: true,
});
```

**`Example`**

```typescript
await algorand.send.assetFreeze({
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
  // Signer only needed if you want to provide one,
  //  generally you'd register it with AlgorandClient
  //  against the sender and not need to pass it in
  signer: transactionSigner,
  maxRoundsToWaitForConfirmation: 5,
  suppressLog: true,
});
```

#### Type declaration

▸ (`params`): `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                       | Description                                     |
| :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------- |
| `params` | [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `account`: `string` \| `Address` ; `assetId`: `bigint` ; `frozen`: `boolean` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the asset freeze transaction |

##### Returns

`Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:343](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L343)

---

### assetOptIn

• **assetOptIn**: (`params`: [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `assetId`: `bigint` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Opt an account into an Algorand Standard Asset.

**`Example`**

```typescript
await algorand.send.assetOptIn({ sender: 'SENDERADDRESS', assetId: 123456n });
```

**`Example`**

```typescript
await algorand.send.assetOptIn({
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
  // Signer only needed if you want to provide one,
  //  generally you'd register it with AlgorandClient
  //  against the sender and not need to pass it in
  signer: transactionSigner,
  maxRoundsToWaitForConfirmation: 5,
  suppressLog: true,
});
```

#### Type declaration

▸ (`params`): `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                                                                                                                                                              | Description                                     |
| :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------- |
| `params` | [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `assetId`: `bigint` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the asset opt-in transaction |

##### Returns

`Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:464](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L464)

---

### assetTransfer

• **assetTransfer**: (`params`: [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `amount`: `bigint` ; `assetId`: `bigint` ; `clawbackTarget?`: `string` \| `Address` ; `closeAssetTo?`: `string` \| `Address` ; `receiver`: `string` \| `Address` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Transfer an Algorand Standard Asset.

**`Example`**

```typescript
await algorand.send.assetTransfer({
  sender: 'HOLDERADDRESS',
  assetId: 123456n,
  amount: 1n,
  receiver: 'RECEIVERADDRESS',
});
```

**`Example`**

```typescript
await algorand.send.assetTransfer({
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
  // Signer only needed if you want to provide one,
  //  generally you'd register it with AlgorandClient
  //  against the sender and not need to pass it in
  signer: transactionSigner,
  maxRoundsToWaitForConfirmation: 5,
  suppressLog: true,
})
```

#### Type declaration

▸ (`params`): `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                                                                                                           | Description                                       |
| :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------ |
| `params` | [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `amount`: `bigint` ; `assetId`: `bigint` ; `clawbackTarget?`: `string` \| `Address` ; `closeAssetTo?`: `string` \| `Address` ; `receiver`: `string` \| `Address` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the asset transfer transaction |

##### Returns

`Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:426](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L426)

---

### offlineKeyRegistration

• **offlineKeyRegistration**: (`params`: [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `preventAccountFromEverParticipatingAgain?`: `boolean` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Register an offline key.

**`Example`**

```typescript
const result = await algorand.send.offlineKeyRegistration({
  sender: 'SENDERADDRESS',
});
```

**`Example`**

```typescript
const result = await algorand.send.offlineKeyRegistration({
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
});
```

#### Type declaration

▸ (`params`): `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                                                                                                                                                                                                 | Description                                         |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| `params` | [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `preventAccountFromEverParticipatingAgain?`: `boolean` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the key registration transaction |

##### Returns

`Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:1050](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L1050)

---

### onlineKeyRegistration

• **onlineKeyRegistration**: (`params`: [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `selectionKey`: `Uint8Array` ; `stateProofKey?`: `Uint8Array` ; `voteFirst`: `bigint` ; `voteKey`: `Uint8Array` ; `voteKeyDilution`: `bigint` ; `voteLast`: `bigint` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Register an online key.

**`Example`**

```typescript
const result = await algorand.send.onlineKeyRegistration({
  sender: 'SENDERADDRESS',
  voteKey: Uint8Array.from(Buffer.from('voteKeyBase64', 'base64')),
  selectionKey: Uint8Array.from(Buffer.from('selectionKeyBase64', 'base64')),
  stateProofKey: Uint8Array.from(Buffer.from('stateProofKeyBase64', 'base64')),
  voteFirst: 1n,
  voteLast: 1000n,
  voteKeyDilution: 1n,
});
```

**`Example`**

```typescript
const result = await algorand.send.onlineKeyRegistration({
  sender: 'SENDERADDRESS',
  voteKey: Uint8Array.from(Buffer.from('voteKeyBase64', 'base64')),
  selectionKey: Uint8Array.from(Buffer.from('selectionKeyBase64', 'base64')),
  stateProofKey: Uint8Array.from(Buffer.from('stateProofKeyBase64', 'base64')),
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
});
```

#### Type declaration

▸ (`params`): `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                                                                                                               | Description                                         |
| :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| `params` | [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `selectionKey`: `Uint8Array` ; `stateProofKey?`: `Uint8Array` ; `voteFirst`: `bigint` ; `voteKey`: `Uint8Array` ; `voteKeyDilution`: `bigint` ; `voteLast`: `bigint` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the key registration transaction |

##### Returns

`Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:1017](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L1017)

---

### payment

• **payment**: (`params`: [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `amount`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `closeRemainderTo?`: `string` \| `Address` ; `receiver`: `string` \| `Address` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Send a payment transaction to transfer Algo between accounts.

**`Example`**

```typescript
const result = await algorand.send.payment({
  sender: 'SENDERADDRESS',
  receiver: 'RECEIVERADDRESS',
  amount: (4).algo(),
});
```

**`Example`**

```typescript
const result = await algorand.send.payment({
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
  // Signer only needed if you want to provide one,
  //  generally you'd register it with AlgorandClient
  //  against the sender and not need to pass it in
  signer: transactionSigner,
  maxRoundsToWaitForConfirmation: 5,
  suppressLog: true,
});
```

#### Type declaration

▸ (`params`): `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                                                                                                                     | Description                                |
| :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------- |
| `params` | [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `amount`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `closeRemainderTo?`: `string` \| `Address` ; `receiver`: `string` \| `Address` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the payment transaction |

##### Returns

`Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:204](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L204)

## Methods

### \_send

▸ **\_send**\<`T`\>(`c`, `log?`): (`params`: `T` & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name           | Type                                                                                                                                                                                                                                                                                                                                                |
| :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `c`            | (`c`: [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)) => (`params`: `T`) => [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)                                                                                                                |
| `log?`         | `Object`                                                                                                                                                                                                                                                                                                                                            |
| `log.postLog?` | (`params`: `T`, `result`: \{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }) => `string` |
| `log.preLog?`  | (`params`: `T`, `transaction`: `Transaction`) => `string`                                                                                                                                                                                                                                                                                           |

#### Returns

`fn`

▸ (`params`): `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                          |
| :------- | :-------------------------------------------------------------------------------------------- |
| `params` | `T` & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) |

##### Returns

`Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:68](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L68)

---

### \_sendAppCall

▸ **\_sendAppCall**\<`T`\>(`c`, `log?`): (`params`: `T` & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Type parameters

| Name | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :--- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `T`  | extends \{ `accountReferences?`: (`string` \| `Address`)[] ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `extraProgramPages?`: `number` ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `schema?`: \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number` } ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` } \| \{ `accountReferences?`: (`string` \| `Address`)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `UpdateApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` } \| [`AppCallParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appcallparams) \| [`AppDeleteParams`](/reference/algokit-utils-ts/api/modules/types_composer/#appdeleteparams) \| [`AppCreateMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appcreatemethodcall) \| [`AppUpdateMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appupdatemethodcall) \| [`AppDeleteMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appdeletemethodcall) \| [`AppCallMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appcallmethodcall) |

#### Parameters

| Name           | Type                                                                                                                                                                                                                                                                                                                                                |
| :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `c`            | (`c`: [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)) => (`params`: `T`) => [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)                                                                                                                |
| `log?`         | `Object`                                                                                                                                                                                                                                                                                                                                            |
| `log.postLog?` | (`params`: `T`, `result`: \{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }) => `string` |
| `log.preLog?`  | (`params`: `T`, `transaction`: `Transaction`) => `string`                                                                                                                                                                                                                                                                                           |

#### Returns

`fn`

▸ (`params`): `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                          |
| :------- | :-------------------------------------------------------------------------------------------- |
| `params` | `T` & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) |

##### Returns

`Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:103](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L103)

---

### \_sendAppCreateCall

▸ **\_sendAppCreateCall**\<`T`\>(`c`, `log?`): (`params`: `T` & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `appAddress`: `Address` ; `appId`: `bigint` ; `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Type parameters

| Name | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `T`  | extends \{ `accountReferences?`: (`string` \| `Address`)[] ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `extraProgramPages?`: `number` ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `schema?`: \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number` } ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` } \| [`AppCreateMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appcreatemethodcall) |

#### Parameters

| Name           | Type                                                                                                                                                                                                                                                                                                                                                |
| :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `c`            | (`c`: [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)) => (`params`: `T`) => [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)                                                                                                                |
| `log?`         | `Object`                                                                                                                                                                                                                                                                                                                                            |
| `log.postLog?` | (`params`: `T`, `result`: \{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }) => `string` |
| `log.preLog?`  | (`params`: `T`, `transaction`: `Transaction`) => `string`                                                                                                                                                                                                                                                                                           |

#### Returns

`fn`

▸ (`params`): `Promise`\<\{ `appAddress`: `Address` ; `appId`: `bigint` ; `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                          |
| :------- | :-------------------------------------------------------------------------------------------- |
| `params` | `T` & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) |

##### Returns

`Promise`\<\{ `appAddress`: `Address` ; `appId`: `bigint` ; `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:146](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L146)

---

### \_sendAppUpdateCall

▸ **\_sendAppUpdateCall**\<`T`\>(`c`, `log?`): (`params`: `T` & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)) => `Promise`\<\{ `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Type parameters

| Name | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :--- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `T`  | extends \{ `accountReferences?`: (`string` \| `Address`)[] ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `extraProgramPages?`: `number` ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `schema?`: \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number` } ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` } \| \{ `accountReferences?`: (`string` \| `Address`)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `approvalProgram`: `string` \| `Uint8Array` ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app_manager/#boxidentifier) \| [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/))[] ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `firstValidRound?`: `bigint` ; `lastValidRound?`: `bigint` ; `lease?`: `string` \| `Uint8Array` ; `maxFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `note?`: `string` \| `Uint8Array` ; `onComplete?`: `UpdateApplicationOC` ; `rekeyTo?`: `string` \| `Address` ; `sender`: `string` \| `Address` ; `signer?`: `TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) ; `staticFee?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `validityWindow?`: `number` \| `bigint` } \| [`AppCreateMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appcreatemethodcall) \| [`AppUpdateMethodCall`](/reference/algokit-utils-ts/api/modules/types_composer/#appupdatemethodcall) |

#### Parameters

| Name           | Type                                                                                                                                                                                                                                                                                                                                                |
| :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `c`            | (`c`: [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)) => (`params`: `T`) => [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)                                                                                                                |
| `log?`         | `Object`                                                                                                                                                                                                                                                                                                                                            |
| `log.postLog?` | (`params`: `T`, `result`: \{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }) => `string` |
| `log.preLog?`  | (`params`: `T`, `transaction`: `Transaction`) => `string`                                                                                                                                                                                                                                                                                           |

#### Returns

`fn`

▸ (`params`): `Promise`\<\{ `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

##### Parameters

| Name     | Type                                                                                          |
| :------- | :-------------------------------------------------------------------------------------------- |
| `params` | `T` & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) |

##### Returns

`Promise`\<\{ `compiledApproval?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear?`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

#### Defined in

[src/types/algorand-client-transaction-sender.ts:127](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L127)

---

### assetCreate

▸ **assetCreate**(`params`): `Promise`\<\{ `assetId`: `bigint` ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Create a new Algorand Standard Asset.

The account that sends this transaction will automatically be
opted in to the asset and will hold all units after creation.

#### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Description                                       |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------ |
| `params` | [`CommonTransactionParams`](/reference/algokit-utils-ts/api/modules/types_composer/#commontransactionparams) & \{ `assetName?`: `string` ; `clawback?`: `string` \| `Address` ; `decimals?`: `number` ; `defaultFrozen?`: `boolean` ; `freeze?`: `string` \| `Address` ; `manager?`: `string` \| `Address` ; `metadataHash?`: `string` \| `Uint8Array` ; `reserve?`: `string` \| `Address` ; `total`: `bigint` ; `unitName?`: `string` ; `url?`: `string` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the asset creation transaction |

#### Returns

`Promise`\<\{ `assetId`: `bigint` ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

The result of the asset create transaction and the transaction that was sent

**`Example`**

```typescript
await algorand.send.assetCreate({ sender: 'CREATORADDRESS', total: 100n });
```

**`Example`**

```typescript
await algorand.send.assetCreate({
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
  // Signer only needed if you want to provide one,
  //  generally you'd register it with AlgorandClient
  //  against the sender and not need to pass it in
  signer: transactionSigner,
  maxRoundsToWaitForConfirmation: 5,
  suppressLog: true,
});
```

#### Defined in

[src/types/algorand-client-transaction-sender.ts:255](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L255)

---

### assetOptOut

▸ **assetOptOut**(`params`): `Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

Opt an account out of an Algorand Standard Asset.

_Note:_ If the account has a balance of the asset,
it will not be able to opt-out unless `ensureZeroBalance`
is set to `false` (but then the account will lose the assets).

#### Parameters

| Name     | Type                                                                                                                                                                                                                                                                                        | Description                                      |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------- |
| `params` | `Omit`\<[`AssetOptOutParams`](/reference/algokit-utils-ts/api/modules/types_composer/#assetoptoutparams), `"creator"`\> & \{ `creator?`: `string` \| `Address` ; `ensureZeroBalance`: `boolean` } & [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/) | The parameters for the asset opt-out transaction |

#### Returns

`Promise`\<\{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] }\>

The result of the asset opt-out transaction and the transaction that was sent

**`Example`**

```typescript
await algorand.send.assetOptOut({
  sender: 'SENDERADDRESS',
  assetId: 123456n,
  ensureZeroBalance: true,
});
```

**`Example`**

```typescript
await algorand.send.assetOptOut({
  sender: 'SENDERADDRESS',
  creator: 'CREATORADDRESS',
  assetId: 123456n,
  ensureZeroBalance: true,
});
```

**`Example`**

```typescript
await algorand.send.assetOptOut({
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
  // Signer only needed if you want to provide one,
  //  generally you'd register it with AlgorandClient
  //  against the sender and not need to pass it in
  signer: transactionSigner,
  maxRoundsToWaitForConfirmation: 5,
  suppressLog: true,
});
```

#### Defined in

[src/types/algorand-client-transaction-sender.ts:511](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L511)

---

### newGroup

▸ **newGroup**(): [`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

Start a new `TransactionComposer` transaction group

#### Returns

[`TransactionComposer`](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

A new instance of `TransactionComposer`.

**`Example`**

```ts
const composer = AlgorandClient.mainNet().send.newGroup();
const result = await composer.addTransaction(payment).send();
```

#### Defined in

[src/types/algorand-client-transaction-sender.ts:64](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/algorand-client-transaction-sender.ts#L64)
