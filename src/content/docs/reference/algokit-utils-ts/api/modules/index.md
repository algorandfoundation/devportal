---
title: index
slug: reference/algokit-utils-ts/api/modules/index
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / index

## Table of contents

### References

- [ALGOKIT_DIR](#algokit_dir)
- [AVMTracesEventData](#avmtraceseventdata)
- [AlgorandClient](#algorandclient)
- [DEFAULT_MAX_SEARCH_DEPTH](#default_max_search_depth)
- [EventDataMap](#eventdatamap)
- [EventType](#eventtype)
- [SOURCES_DIR](#sources_dir)
- [SearchForTransactions](#searchfortransactions)
- [TEAL_FILE_EXT](#teal_file_ext)
- [TEAL_SOURCEMAP_EXT](#teal_sourcemap_ext)
- [TealSourceDebugEventData](#tealsourcedebugeventdata)
- [TealSourcesDebugEventData](#tealsourcesdebugeventdata)
- [executePaginatedRequest](#executepaginatedrequest)
- [lookupAccountByAddress](#lookupaccountbyaddress)
- [lookupAccountCreatedApplicationByAddress](#lookupaccountcreatedapplicationbyaddress)
- [lookupAssetHoldings](#lookupassetholdings)
- [lookupTransactionById](#lookuptransactionbyid)
- [searchTransactions](#searchtransactions)

### Namespaces

- [indexer](/reference/algokit-utils-ts/api/modules/indexindexer/)

### Type Aliases

- [AccountInformation](#accountinformation)
- [NumberConverter](#numberconverter)

### Variables

- [ALGORAND_MIN_TX_FEE](#algorand_min_tx_fee)
- [Config](#config)
- [MAX_APP_CALL_ACCOUNT_REFERENCES](#max_app_call_account_references)
- [MAX_APP_CALL_FOREIGN_REFERENCES](#max_app_call_foreign_references)
- [MAX_TRANSACTION_GROUP_SIZE](#max_transaction_group_size)

### Functions

- [algo](#algo)
- [algos](#algos)
- [assetBulkOptIn](#assetbulkoptin)
- [assetBulkOptOut](#assetbulkoptout)
- [assetOptIn](#assetoptin)
- [assetOptOut](#assetoptout)
- [callApp](#callapp)
- [capTransactionFee](#captransactionfee)
- [compileTeal](#compileteal)
- [controlFees](#controlfees)
- [createApp](#createapp)
- [createAsset](#createasset)
- [decodeAppState](#decodeappstate)
- [deployApp](#deployapp)
- [encodeLease](#encodelease)
- [encodeTransactionNote](#encodetransactionnote)
- [ensureFunded](#ensurefunded)
- [getABIMethodSignature](#getabimethodsignature)
- [getABIReturn](#getabireturn)
- [getABIReturnValue](#getabireturnvalue)
- [getAccount](#getaccount)
- [getAccountAddressAsString](#getaccountaddressasstring)
- [getAccountAddressAsUint8Array](#getaccountaddressasuint8array)
- [getAccountAssetInformation](#getaccountassetinformation)
- [getAccountConfigFromEnvironment](#getaccountconfigfromenvironment)
- [getAccountInformation](#getaccountinformation)
- [getAlgoClient](#getalgoclient)
- [getAlgoIndexerClient](#getalgoindexerclient)
- [getAlgoKmdClient](#getalgokmdclient)
- [getAlgoNodeConfig](#getalgonodeconfig)
- [getAlgodConfigFromEnvironment](#getalgodconfigfromenvironment)
- [getAppArgsForABICall](#getappargsforabicall)
- [getAppArgsForTransaction](#getappargsfortransaction)
- [getAppBoxNames](#getappboxnames)
- [getAppBoxValue](#getappboxvalue)
- [getAppBoxValueFromABIType](#getappboxvaluefromabitype)
- [getAppBoxValues](#getappboxvalues)
- [getAppBoxValuesFromABIType](#getappboxvaluesfromabitype)
- [getAppById](#getappbyid)
- [getAppClient](#getappclient)
- [getAppClientByCreatorAndName](#getappclientbycreatorandname)
- [getAppClientById](#getappclientbyid)
- [getAppDeploymentTransactionNote](#getappdeploymenttransactionnote)
- [getAppGlobalState](#getappglobalstate)
- [getAppLocalState](#getapplocalstate)
- [getAppOnCompleteAction](#getapponcompleteaction)
- [getAtomicTransactionComposerTransactions](#getatomictransactioncomposertransactions)
- [getBoxReference](#getboxreference)
- [getConfigFromEnvOrDefaults](#getconfigfromenvordefaults)
- [getCreatorAppsByName](#getcreatorappsbyname)
- [getDefaultLocalNetConfig](#getdefaultlocalnetconfig)
- [getDispenserAccount](#getdispenseraccount)
- [getIndexerConfigFromEnvironment](#getindexerconfigfromenvironment)
- [getKmdWalletAccount](#getkmdwalletaccount)
- [getLocalNetDispenserAccount](#getlocalnetdispenseraccount)
- [getOrCreateKmdWalletAccount](#getorcreatekmdwalletaccount)
- [getSenderAddress](#getsenderaddress)
- [getSenderTransactionSigner](#getsendertransactionsigner)
- [getTestNetDispenserApiClient](#gettestnetdispenserapiclient)
- [getTransactionParams](#gettransactionparams)
- [getTransactionWithSigner](#gettransactionwithsigner)
- [isLocalNet](#islocalnet)
- [isMainNet](#ismainnet)
- [isSchemaIsBroken](#isschemaisbroken)
- [isTestNet](#istestnet)
- [microAlgo](#microalgo)
- [microAlgos](#microalgos)
- [mnemonicAccount](#mnemonicaccount)
- [mnemonicAccountFromEnvironment](#mnemonicaccountfromenvironment)
- [multisigAccount](#multisigaccount)
- [performAtomicTransactionComposerSimulate](#performatomictransactioncomposersimulate)
- [performTemplateSubstitution](#performtemplatesubstitution)
- [performTemplateSubstitutionAndCompile](#performtemplatesubstitutionandcompile)
- [persistSourceMaps](#persistsourcemaps)
- [populateAppCallResources](#populateappcallresources)
- [prepareGroupForSending](#preparegroupforsending)
- [randomAccount](#randomaccount)
- [rekeyAccount](#rekeyaccount)
- [rekeyedAccount](#rekeyedaccount)
- [replaceDeployTimeControlParams](#replacedeploytimecontrolparams)
- [sendAtomicTransactionComposer](#sendatomictransactioncomposer)
- [sendGroupOfTransactions](#sendgroupoftransactions)
- [sendTransaction](#sendtransaction)
- [signTransaction](#signtransaction)
- [stripTealComments](#striptealcomments)
- [transactionFees](#transactionfees)
- [transactionSignerAccount](#transactionsigneraccount)
- [transferAlgos](#transferalgos)
- [transferAsset](#transferasset)
- [updateApp](#updateapp)
- [waitForConfirmation](#waitforconfirmation)

## References

### ALGOKIT_DIR

Re-exports [ALGOKIT_DIR](/reference/algokit-utils-ts/api/modules/types_debugging/#algokit_dir)

---

### AVMTracesEventData

Re-exports [AVMTracesEventData](/reference/algokit-utils-ts/api/interfaces/types_debuggingavmtraceseventdata/)

---

### AlgorandClient

Re-exports [AlgorandClient](/reference/algokit-utils-ts/api/classes/types_algorand_clientalgorandclient/)

---

### DEFAULT_MAX_SEARCH_DEPTH

Re-exports [DEFAULT_MAX_SEARCH_DEPTH](/reference/algokit-utils-ts/api/modules/types_debugging/#default_max_search_depth)

---

### EventDataMap

Re-exports [EventDataMap](/reference/algokit-utils-ts/api/modules/types_lifecycle_events/#eventdatamap)

---

### EventType

Re-exports [EventType](/reference/algokit-utils-ts/api/enums/types_lifecycle_eventseventtype/)

---

### SOURCES_DIR

Re-exports [SOURCES_DIR](/reference/algokit-utils-ts/api/modules/types_debugging/#sources_dir)

---

### SearchForTransactions

Re-exports [SearchForTransactions](/reference/algokit-utils-ts/api/modules/indexindexer/#searchfortransactions)

---

### TEAL_FILE_EXT

Re-exports [TEAL_FILE_EXT](/reference/algokit-utils-ts/api/modules/types_debugging/#teal_file_ext)

---

### TEAL_SOURCEMAP_EXT

Re-exports [TEAL_SOURCEMAP_EXT](/reference/algokit-utils-ts/api/modules/types_debugging/#teal_sourcemap_ext)

---

### TealSourceDebugEventData

Re-exports [TealSourceDebugEventData](/reference/algokit-utils-ts/api/interfaces/types_debuggingtealsourcedebugeventdata/)

---

### TealSourcesDebugEventData

Re-exports [TealSourcesDebugEventData](/reference/algokit-utils-ts/api/interfaces/types_debuggingtealsourcesdebugeventdata/)

---

### executePaginatedRequest

Re-exports [executePaginatedRequest](/reference/algokit-utils-ts/api/modules/indexindexer/#executepaginatedrequest)

---

### lookupAccountByAddress

Re-exports [lookupAccountByAddress](/reference/algokit-utils-ts/api/modules/indexindexer/#lookupaccountbyaddress)

---

### lookupAccountCreatedApplicationByAddress

Re-exports [lookupAccountCreatedApplicationByAddress](/reference/algokit-utils-ts/api/modules/indexindexer/#lookupaccountcreatedapplicationbyaddress)

---

### lookupAssetHoldings

Re-exports [lookupAssetHoldings](/reference/algokit-utils-ts/api/modules/indexindexer/#lookupassetholdings)

---

### lookupTransactionById

Re-exports [lookupTransactionById](/reference/algokit-utils-ts/api/modules/indexindexer/#lookuptransactionbyid)

---

### searchTransactions

Re-exports [searchTransactions](/reference/algokit-utils-ts/api/modules/indexindexer/#searchtransactions)

## Type Aliases

### AccountInformation

Ƭ **AccountInformation**: `Omit`\<[`NumberConverter`](#numberconverter)\<`AccountInformationModel`\>, `"getEncodingSchema"` \| `"toEncodingData"` \| `"authAddr"`\> & \{ `authAddr?`: `string` }

**`Deprecated`**

Account information at a given round.

#### Defined in

[src/account/account.ts:135](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/account.ts#L135)

---

### NumberConverter

Ƭ **NumberConverter**\<`T`\>: \{ [key in keyof T]: ToNumberIfExtends\<T[key], number \| bigint\> }

#### Type parameters

| Name | Type                              |
| :--- | :-------------------------------- |
| `T`  | extends `AccountInformationModel` |

#### Defined in

[src/account/account.ts:132](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/account.ts#L132)

## Variables

### ALGORAND_MIN_TX_FEE

• `Const` **ALGORAND_MIN_TX_FEE**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

#### Defined in

[src/amount.ts:93](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L93)

---

### Config

• `Const` **Config**: [`UpdatableConfig`](/reference/algokit-utils-ts/api/classes/types_configupdatableconfig/)

The AlgoKit config. To update it use the configure method.

#### Defined in

[src/config.ts:4](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/config.ts#L4)

---

### MAX_APP_CALL_ACCOUNT_REFERENCES

• `Const` **MAX_APP_CALL_ACCOUNT_REFERENCES**: `4`

#### Defined in

[src/transaction/transaction.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L39)

---

### MAX_APP_CALL_FOREIGN_REFERENCES

• `Const` **MAX_APP_CALL_FOREIGN_REFERENCES**: `8`

#### Defined in

[src/transaction/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L38)

---

### MAX_TRANSACTION_GROUP_SIZE

• `Const` **MAX_TRANSACTION_GROUP_SIZE**: `16`

#### Defined in

[src/transaction/transaction.ts:37](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L37)

## Functions

### algo

▸ **algo**(`algos`): [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

Returns an amount of Algo using AlgoAmount

#### Parameters

| Name    | Type                 | Description        |
| :------ | :------------------- | :----------------- |
| `algos` | `number` \| `bigint` | The amount of Algo |

#### Returns

[`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

#### Defined in

[src/amount.ts:68](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L68)

---

### algos

▸ **algos**(`algos`): [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

Returns an amount of Algo using AlgoAmount

#### Parameters

| Name    | Type                 | Description        |
| :------ | :------------------- | :----------------- |
| `algos` | `number` \| `bigint` | The amount of Algo |

#### Returns

[`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

#### Defined in

[src/amount.ts:61](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L61)

---

### assetBulkOptIn

▸ **assetBulkOptIn**(`optIn`, `algod`): `Promise`\<`Record`\<`number`, `string`\>\>

#### Parameters

| Name    | Type                                                                                                        | Description                                                  |
| :------ | :---------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| `optIn` | [`AssetBulkOptInOutParams`](/reference/algokit-utils-ts/api/interfaces/types_assetassetbulkoptinoutparams/) | The bulk opt-in request.                                     |
| `algod` | `AlgodClient`                                                                                               | An instance of the Algodv2 class from the `algosdk` library. |

#### Returns

`Promise`\<`Record`\<`number`, `string`\>\>

A record object where the keys are the asset IDs and the values are the corresponding transaction IDs for successful opt-ins.

**`Deprecated`**

use `algorand.asset.bulkOptIn()` instead

Opt in to a list of assets on the Algorand blockchain.

**`Throws`**

If there is an error during the opt-in process.

**`Example`**

```ts
algokit.bulkOptIn({ account: account, assetIds: [12345, 67890] }, algod);
```

#### Defined in

[src/asset.ts:130](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/asset.ts#L130)

---

### assetBulkOptOut

▸ **assetBulkOptOut**(`optOut`, `algod`): `Promise`\<`Record`\<`number`, `string`\>\>

#### Parameters

| Name     | Type                                                                                                        | Description                                                                      |
| :------- | :---------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| `optOut` | [`AssetBulkOptInOutParams`](/reference/algokit-utils-ts/api/interfaces/types_assetassetbulkoptinoutparams/) | The bulk opt-out request.                                                        |
| `algod`  | `AlgodClient`                                                                                               | An instance of the Algodv2 client used to interact with the Algorand blockchain. |

#### Returns

`Promise`\<`Record`\<`number`, `string`\>\>

A record object containing asset IDs as keys and their corresponding transaction IDs as values.

**`Deprecated`**

use `algorand.asset.bulkOptOut()` instead

Opt out of multiple assets in Algorand blockchain.

**`Throws`**

If there is an error during the opt-out process.

**`Example`**

```ts
algokit.bulkOptOut({ account: account, assetIds: [12345, 67890] }, algod);
```

#### Defined in

[src/asset.ts:157](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/asset.ts#L157)

---

### assetOptIn

▸ **assetOptIn**(`optIn`, `algod`): `Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)\>

#### Parameters

| Name    | Type                                                                                          | Description           |
| :------ | :-------------------------------------------------------------------------------------------- | :-------------------- |
| `optIn` | [`AssetOptInParams`](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptinparams/) | The opt-in definition |
| `algod` | `AlgodClient`                                                                                 | An algod client       |

#### Returns

`Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

**`Deprecated`**

use `algorand.send.assetOptIn()` / `algorand.createTransaction.assetOptIn()` instead

Opt-in an account to an asset.

**`Example`**

```typescript
await algokit.assetOptIn({ account, assetId }, algod);
```

#### Defined in

[src/asset.ts:67](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/asset.ts#L67)

---

### assetOptOut

▸ **assetOptOut**(`optOut`, `algod`): `Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)\>

#### Parameters

| Name     | Type                                                                                            | Description           |
| :------- | :---------------------------------------------------------------------------------------------- | :-------------------- |
| `optOut` | [`AssetOptOutParams`](/reference/algokit-utils-ts/api/interfaces/types_assetassetoptoutparams/) | The opt-in definition |
| `algod`  | `AlgodClient`                                                                                   | An algod client       |

#### Returns

`Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

**`Deprecated`**

use `algorand.send.assetOptOut()` / `algorand.createTransaction.assetOptOut()` instead

Opt-out an account from an asset.

**`Example`**

```typescript
await algokit.assetOptOut({ account, assetId, assetCreatorAddress }, algod);
```

#### Defined in

[src/asset.ts:98](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/asset.ts#L98)

---

### callApp

▸ **callApp**(`call`, `algod`): `Promise`\<[`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult)\>

#### Parameters

| Name    | Type                                                                                  | Description       |
| :------ | :------------------------------------------------------------------------------------ | :---------------- |
| `call`  | [`AppCallParams`](/reference/algokit-utils-ts/api/interfaces/types_appappcallparams/) | The call details. |
| `algod` | `AlgodClient`                                                                         | An algod client   |

#### Returns

`Promise`\<[`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult)\>

The result of the call

**`Deprecated`**

Use `algorand.send.appUpdate()` / `algorand.createTransaction.appUpdate()` / `algorand.send.appUpdateMethodCall()`
/ `algorand.createTransaction.appUpdateMethodCall()` instead

Issues a call to a given app.

#### Defined in

[src/app.ts:187](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L187)

---

### capTransactionFee

▸ **capTransactionFee**(`transaction`, `maxAcceptableFee`): `void`

#### Parameters

| Name               | Type                                                                            | Description                                                                                |
| :----------------- | :------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------- |
| `transaction`      | `Transaction` \| `SuggestedParams`                                              | The transaction to cap or suggested params object about to be used to create a transaction |
| `maxAcceptableFee` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | The maximum acceptable fee to pay                                                          |

#### Returns

`void`

**`Deprecated`**

Use `TransactionComposer` and the `maxFee` field in the transaction params instead.

Limit the acceptable fee to a defined amount of µAlgo.
This also sets the transaction to be flatFee to ensure the transaction only succeeds at
the estimated rate.

#### Defined in

[src/transaction/transaction.ts:1056](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L1056)

---

### compileTeal

▸ **compileTeal**(`tealCode`, `algod`): `Promise`\<[`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/)\>

#### Parameters

| Name       | Type          | Description     |
| :--------- | :------------ | :-------------- |
| `tealCode` | `string`      | The TEAL code   |
| `algod`    | `AlgodClient` | An algod client |

#### Returns

`Promise`\<[`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/)\>

The information about the compiled file

**`Deprecated`**

Use `algorand.app.compileTeal` instead.

Compiles the given TEAL using algod and returns the result, including source map.

#### Defined in

[src/app.ts:419](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L419)

---

### controlFees

▸ **controlFees**\<`T`\>(`transaction`, `feeControl`): `T`

#### Type parameters

| Name | Type                                       |
| :--- | :----------------------------------------- |
| `T`  | extends `Transaction` \| `SuggestedParams` |

#### Parameters

| Name                 | Type                                                                            | Description                         |
| :------------------- | :------------------------------------------------------------------------------ | :---------------------------------- |
| `transaction`        | `T`                                                                             | The transaction or suggested params |
| `feeControl`         | `Object`                                                                        | The fee control parameters          |
| `feeControl.fee?`    | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | -                                   |
| `feeControl.maxFee?` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | -                                   |

#### Returns

`T`

**`Deprecated`**

Use `TransactionComposer` and the `maxFee` and `staticFee` fields in the transaction params instead.

Allows for control of fees on a `Transaction` or `SuggestedParams` object

#### Defined in

[src/transaction/transaction.ts:1083](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L1083)

---

### createApp

▸ **createApp**(`create`, `algod`): `Promise`\<`Partial`\<[`AppCompilationResult`](/reference/algokit-utils-ts/api/interfaces/types_appappcompilationresult/)\> & [`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult) & [`AppReference`](/reference/algokit-utils-ts/api/interfaces/types_appappreference/)\>

#### Parameters

| Name     | Type                                                                                      | Description                           |
| :------- | :---------------------------------------------------------------------------------------- | :------------------------------------ |
| `create` | [`CreateAppParams`](/reference/algokit-utils-ts/api/interfaces/types_appcreateappparams/) | The parameters to create the app with |
| `algod`  | `AlgodClient`                                                                             | An algod client                       |

#### Returns

`Promise`\<`Partial`\<[`AppCompilationResult`](/reference/algokit-utils-ts/api/interfaces/types_appappcompilationresult/)\> & [`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult) & [`AppReference`](/reference/algokit-utils-ts/api/interfaces/types_appappreference/)\>

The details of the created app, or the transaction to create it if `skipSending` and the compilation result

**`Deprecated`**

Use `algorand.send.appCreate()` / `algorand.createTransaction.appCreate()` / `algorand.send.appCreateMethodCall()`
/ `algorand.createTransaction.appCreateMethodCall()` instead

Creates a smart contract app, returns the details of the created app.

#### Defined in

[src/app.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L44)

---

### createAsset

▸ **createAsset**(`create`, `algod`): `Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/) & \{ `confirmation?`: \{ `assetIndex`: `number` \| `bigint` } }\>

#### Parameters

| Name     | Type                                                                                            | Description                   |
| :------- | :---------------------------------------------------------------------------------------------- | :---------------------------- |
| `create` | [`CreateAssetParams`](/reference/algokit-utils-ts/api/interfaces/types_assetcreateassetparams/) | The asset creation definition |
| `algod`  | `AlgodClient`                                                                                   | An algod client               |

#### Returns

`Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/) & \{ `confirmation?`: \{ `assetIndex`: `number` \| `bigint` } }\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

**`Deprecated`**

use `algorand.send.assetCreate()` / `algorand.createTransaction.assetCreate()` instead

Create an Algorand Standard Asset (ASA).

**`Example`**

```typescript
await algokit.createAsset({ creator: account, total: 1, decimals: 0, name: 'My asset' }, algod);
```

#### Defined in

[src/asset.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/asset.ts#L23)

---

### decodeAppState

▸ **decodeAppState**(`state`): [`AppState`](/reference/algokit-utils-ts/api/interfaces/types_appappstate/)

#### Parameters

| Name    | Type                                                         | Description                                                                    |
| :------ | :----------------------------------------------------------- | :----------------------------------------------------------------------------- |
| `state` | \{ `key`: `string` ; `value`: `TealValue` \| `EvalDelta` }[] | A `global-state`, `local-state`, `global-state-deltas` or `local-state-deltas` |

#### Returns

[`AppState`](/reference/algokit-utils-ts/api/interfaces/types_appappstate/)

An object keyeed by the UTF-8 representation of the key with various parsings of the values

**`Deprecated`**

Use `AppManager.decodeAppState` instead.

Converts an array of global/local state values from the algod api to a more friendly
generic object keyed by the UTF-8 value of the key.

#### Defined in

[src/app.ts:345](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L345)

---

### deployApp

▸ **deployApp**(`deployment`, `algod`, `indexer?`): `Promise`\<`Partial`\<[`AppCompilationResult`](/reference/algokit-utils-ts/api/interfaces/types_appappcompilationresult/)\> & [`ConfirmedTransactionResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresults/) & [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappmetadata/) & \{ `operationPerformed`: `"create"` \| `"update"` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) } \| [`ConfirmedTransactionResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresults/) & [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappmetadata/) & \{ `deleteResult`: [`ConfirmedTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresult/) ; `deleteReturn?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `operationPerformed`: `"replace"` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) } \| [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappmetadata/) & \{ `operationPerformed`: `"nothing"` }\>

#### Parameters

| Name         | Type                                                                                              | Description                                                      |
| :----------- | :------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------- |
| `deployment` | [`AppDeploymentParams`](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymentparams/) | The arguments to control the app deployment                      |
| `algod`      | `AlgodClient`                                                                                     | An algod client                                                  |
| `indexer?`   | `IndexerClient`                                                                                   | An indexer client, needed if `existingDeployments` not passed in |

#### Returns

`Promise`\<`Partial`\<[`AppCompilationResult`](/reference/algokit-utils-ts/api/interfaces/types_appappcompilationresult/)\> & [`ConfirmedTransactionResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresults/) & [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappmetadata/) & \{ `operationPerformed`: `"create"` \| `"update"` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) } \| [`ConfirmedTransactionResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresults/) & [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappmetadata/) & \{ `deleteResult`: [`ConfirmedTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresult/) ; `deleteReturn?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `operationPerformed`: `"replace"` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) } \| [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappmetadata/) & \{ `operationPerformed`: `"nothing"` }\>

The app reference of the new/existing app

**`Deprecated`**

Use `algorand.appDeployer.deploy` instead.

Idempotently deploy (create, update/delete if changed) an app against the given name via the given creator account, including deploy-time template placeholder substitutions.

To understand the architecture decisions behind this functionality please see https://github.com/algorandfoundation/algokit-cli/blob/main/docs/architecture-decisions/2023-01-12_smart-contract-deployment.md

**Note:** When using the return from this function be sure to check `operationPerformed` to get access to various return properties like `transaction`, `confirmation` and `deleteResult`.

**Note:** if there is a breaking state schema change to an existing app (and `onSchemaBreak` is set to `'replace'`) the existing app will be deleted and re-created.

**Note:** if there is an update (different TEAL code) to an existing app (and `onUpdate` is set to `'replace'`) the existing app will be deleted and re-created.

#### Defined in

[src/app-deploy.ts:51](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-deploy.ts#L51)

---

### encodeLease

▸ **encodeLease**(`lease?`): `Uint8Array` \| `undefined`

Encodes a transaction lease into a 32-byte array ready to be included in an Algorand transaction.

#### Parameters

| Name     | Type                     | Description                                                                              |
| :------- | :----------------------- | :--------------------------------------------------------------------------------------- |
| `lease?` | `string` \| `Uint8Array` | The transaction lease as a string or binary array or null/undefined if there is no lease |

#### Returns

`Uint8Array` \| `undefined`

the transaction lease ready for inclusion in a transaction or `undefined` if there is no lease

**`Throws`**

if the length of the data is > 32 bytes or empty

**`Example`**

```ts
algokit.encodeLease('UNIQUE_ID');
```

**`Example`**

```ts
algokit.encodeLease(new Uint8Array([1, 2, 3]));
```

#### Defined in

[src/transaction/transaction.ts:80](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L80)

---

### encodeTransactionNote

▸ **encodeTransactionNote**(`note?`): `Uint8Array` \| `undefined`

#### Parameters

| Name    | Type                                                                                            | Description          |
| :------ | :---------------------------------------------------------------------------------------------- | :------------------- |
| `note?` | [`TransactionNote`](/reference/algokit-utils-ts/api/modules/types_transaction/#transactionnote) | The transaction note |

#### Returns

`Uint8Array` \| `undefined`

the transaction note ready for inclusion in a transaction

Case on the value of `data` this either be:

- `null` | `undefined`: `undefined`
- `string`: The string value
- Uint8Array: passthrough
- Arc2TransactionNote object: ARC-0002 compatible transaction note
- Else: The object/value converted into a JSON string representation

**`Deprecated`**

Convert your data to a `string` or `Uint8Array`, if using ARC-2 use `TransactionComposer.arc2Note`.

Encodes a transaction note into a byte array ready to be included in an Algorand transaction.

#### Defined in

[src/transaction/transaction.ts:56](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L56)

---

### ensureFunded

▸ **ensureFunded**\<`T`\>(`funding`, `algod`, `kmd?`): `Promise`\<[`EnsureFundedReturnType`](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedreturntype/) \| `undefined`\>

#### Type parameters

| Name | Type                                                                                                         |
| :--- | :----------------------------------------------------------------------------------------------------------- |
| `T`  | extends [`EnsureFundedParams`](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedparams/) |

#### Parameters

| Name      | Type          | Description                                                                                                                                                                                                                                                       |
| :-------- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `funding` | `T`           | The funding configuration of type `EnsureFundedParams`, including the account to fund, minimum spending balance, and optional parameters. If you set `useDispenserApi` to true, you must also set `ALGOKIT_DISPENSER_ACCESS_TOKEN` in your environment variables. |
| `algod`   | `AlgodClient` | An instance of the Algodv2 client.                                                                                                                                                                                                                                |
| `kmd?`    | `KmdClient`   | An optional instance of the Kmd client.                                                                                                                                                                                                                           |

#### Returns

`Promise`\<[`EnsureFundedReturnType`](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedreturntype/) \| `undefined`\>

- `EnsureFundedReturnType` if funds were transferred.
- `undefined` if no funds were needed.

**`Deprecated`**

Use `algorand.account.ensureFunded()` / `algorand.account.ensureFundedFromEnvironment()`
/ `algorand.account.ensureFundedFromTestNetDispenserApi()` instead

Funds a given account using a funding source such that it has a certain amount of Algo free to spend (accounting for Algo locked in minimum balance requirement).

https://dev.algorand.co/concepts/smart-contracts/costs-constraints#mbr

#### Defined in

[src/transfer/transfer.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transfer/transfer.ts#L26)

---

### getABIMethodSignature

▸ **getABIMethodSignature**(`method`): `string`

#### Parameters

| Name     | Type                             | Description                          |
| :------- | :------------------------------- | :----------------------------------- |
| `method` | `ABIMethodParams` \| `ABIMethod` | The method to return a signature for |

#### Returns

`string`

The encoded ABI method spec e.g. `method_name(uint64,string)string`

**`Deprecated`**

Use `abiMethod.getSignature()` or `new ABIMethod(abiMethodParams).getSignature()` instead.

Returns the encoded ABI spec for a given ABI Method

#### Defined in

[src/app.ts:430](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L430)

---

### getABIReturn

▸ **getABIReturn**(`args?`, `confirmation?`): [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) \| `undefined`

#### Parameters

| Name            | Type                                                                            | Description                               |
| :-------------- | :------------------------------------------------------------------------------ | :---------------------------------------- |
| `args?`         | [`AppCallArgs`](/reference/algokit-utils-ts/api/modules/types_app/#appcallargs) | The arguments that were used for the call |
| `confirmation?` | `PendingTransactionResponse`                                                    | The transaction confirmation from algod   |

#### Returns

[`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) \| `undefined`

The return value for the method call

**`Deprecated`**

Use `AppManager.getABIReturn` instead.

Returns any ABI return values for the given app call arguments and transaction confirmation.

#### Defined in

[src/app.ts:235](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L235)

---

### getABIReturnValue

▸ **getABIReturnValue**(`result`, `type`): [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)

Takes an algosdk `ABIResult` and converts it to an `ABIReturn`.
Converts `bigint`'s for Uint's < 64 to `number` for easier use.

#### Parameters

| Name     | Type            | Description     |
| :------- | :-------------- | :-------------- |
| `result` | `ABIResult`     | The `ABIReturn` |
| `type`   | `ABIReturnType` | -               |

#### Returns

[`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)

#### Defined in

[src/transaction/transaction.ts:922](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L922)

---

### getAccount

▸ **getAccount**(`account`, `algod`, `kmdClient?`): `Promise`\<`Account` \| [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)\>

#### Parameters

| Name         | Type                                                                                                                             | Description                                                                                                                                                                                                                                                                                                        |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `account`    | `string` \| \{ `fundWith?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `name`: `string` } | The details of the account to get, either the name identifier (string) or an object with: _ `name`: The name identifier of the account _ `fundWith`: The amount to fund the account with when it gets created (when targeting LocalNet), if not specified then 1000 ALGO will be funded from the dispenser account |
| `algod`      | `AlgodClient`                                                                                                                    | An algod client                                                                                                                                                                                                                                                                                                    |
| `kmdClient?` | `KmdClient`                                                                                                                      | An optional KMD client to use to create an account (when targeting LocalNet), if not specified then a default KMD client will be loaded from environment variables                                                                                                                                                 |

#### Returns

`Promise`\<`Account` \| [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)\>

The requested account with private key loaded from the environment variables or when targeting LocalNet from KMD (idempotently creating and funding the account)

**`Deprecated`**

use `algorand.account.fromEnvironment()` instead

Returns an Algorand account with private key loaded by convention based on the given name identifier.

Note: This function expects to run in a Node.js environment.

## Convention:

- **Non-LocalNet:** will load process.env['{NAME}_MNEMONIC'] as a mnemonic secret; **Note: Be careful how the mnemonic is handled**,
  never commit it into source control and ideally load it via a secret storage service rather than the file system.
  If process.env['{NAME}_SENDER'] is defined then it will use that for the sender address (i.e. to support rekeyed accounts)
- **LocalNet:** will load the account from a KMD wallet called {NAME} and if that wallet doesn't exist it will create it and fund the account for you

This allows you to write code that will work seamlessly in production and local development (LocalNet) without manual config locally (including when you reset the LocalNet).

**`Example`**

If you have a mnemonic secret loaded into `process.env.ACCOUNT_MNEMONIC` then you can call the following to get that private key loaded into an account object:

```typescript
const account = await getAccount('ACCOUNT', algod);
```

If that code runs against LocalNet then a wallet called `ACCOUNT` will automatically be created with an account that is automatically funded with 1000 (default) ALGO from the default LocalNet dispenser.

#### Defined in

[src/account/get-account.ts:41](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/get-account.ts#L41)

▸ **getAccount**(`account`, `algod`, `kmdClient?`): `Promise`\<`Account` \| [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)\>

#### Parameters

| Name                | Type                                                                                      | Description                                                                                                                                                                                                                                                                                                                                |
| :------------------ | :---------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `account`           | `Object`                                                                                  | The details of the account to get, an object with: _ `config`: Account configuration. To get from environment use getAccountConfigFromEnvironment(accountName) _ `fundWith`: The amount to fund the account with when it gets created (when targeting LocalNet), if not specified then 1000 ALGO will be funded from the dispenser account |
| `account.config`    | [`AccountConfig`](/reference/algokit-utils-ts/api/interfaces/types_accountaccountconfig/) | -                                                                                                                                                                                                                                                                                                                                          |
| `account.fundWith?` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)           | -                                                                                                                                                                                                                                                                                                                                          |
| `algod`             | `AlgodClient`                                                                             | An algod client                                                                                                                                                                                                                                                                                                                            |
| `kmdClient?`        | `KmdClient`                                                                               | An optional KMD client to use to create an account (when targeting LocalNet), if not specified then a default KMD client will be loaded from environment variables                                                                                                                                                                         |

#### Returns

`Promise`\<`Account` \| [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)\>

The requested account with private key loaded from the environment variables or when targeting LocalNet from KMD (idempotently creating and funding the account)

**`Deprecated`**

use `algorand.account.fromEnvironment()` instead
Returns an Algorand account with private key loaded by convention based on the given name identifier.

Note: This function expects to run in a Node.js environment.

**`Example`**

If you have a mnemonic secret loaded into `process.env.ACCOUNT_MNEMONIC` then you can call the following to get that private key loaded into an account object:

```typescript
const account = await getAccount({ config: getAccountConfigFromEnvironment('ACCOUNT') }, algod);
```

If that code runs against LocalNet then a wallet called `ACCOUNT` will automatically be created with an account that is automatically funded with 1000 (default) ALGO from the default LocalNet dispenser.

#### Defined in

[src/account/get-account.ts:68](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/get-account.ts#L68)

---

### getAccountAddressAsString

▸ **getAccountAddressAsString**(`addressEncodedInB64`): `string`

#### Parameters

| Name                  | Type     | Description                                                                       |
| :-------------------- | :------- | :-------------------------------------------------------------------------------- |
| `addressEncodedInB64` | `string` | The base64 encoded version of the underlying byte array of the address public key |

#### Returns

`string`

**`Deprecated`**

Use `algosdk.encodeAddress` instead.

Returns the string address of an Algorand account from a base64 encoded version of the underlying byte array of the address public key

#### Defined in

[src/account/account.ts:128](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/account.ts#L128)

---

### getAccountAddressAsUint8Array

▸ **getAccountAddressAsUint8Array**(`account`): `Uint8Array`

#### Parameters

| Name      | Type                                                                                                                | Description                                                                     |
| :-------- | :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| `account` | `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom) | Either an account (with private key loaded) or the string address of an account |

#### Returns

`Uint8Array`

**`Deprecated`**

Use `algosdk.decodeAddress` instead.

Returns an account's address as a byte array

#### Defined in

[src/account/account.ts:117](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/account.ts#L117)

---

### getAccountAssetInformation

▸ **getAccountAssetInformation**(`sender`, `assetId`, `algod`): `Promise`\<[`AccountAssetInformation`](/reference/algokit-utils-ts/api/modules/types_account/#accountassetinformation)\>

#### Parameters

| Name      | Type                                                                                                                | Description                                  |
| :-------- | :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------- |
| `sender`  | `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom) | The address of the sender/account to look up |
| `assetId` | `number` \| `bigint`                                                                                                | The ID of the asset to return a holding for  |
| `algod`   | `AlgodClient`                                                                                                       | The algod instance                           |

#### Returns

`Promise`\<[`AccountAssetInformation`](/reference/algokit-utils-ts/api/modules/types_account/#accountassetinformation)\>

The account asset holding information

**`Deprecated`**

Use `algorand.asset.getAccountInformation(sender, assetId)` or `new AssetManager(...).getAccountInformation(sender, assetId)` instead.

Returns the given sender account's asset holding for a given asset.

**`Example`**

```typescript
const address = 'XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA';
const assetId = 123345;
const accountInfo = await account.getAccountAssetInformation(address, assetId, algod);
```

[Response data schema details](https://dev.algorand.co/reference/rest-apis/algod/#accountassetinformation)

#### Defined in

[src/account/account.ts:201](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/account.ts#L201)

---

### getAccountConfigFromEnvironment

▸ **getAccountConfigFromEnvironment**(`accountName`): [`AccountConfig`](/reference/algokit-utils-ts/api/interfaces/types_accountaccountconfig/)

#### Parameters

| Name          | Type     | Description  |
| :------------ | :------- | :----------- |
| `accountName` | `string` | account name |

#### Returns

[`AccountConfig`](/reference/algokit-utils-ts/api/interfaces/types_accountaccountconfig/)

**`Deprecated`**

Use algokit.mnemonicAccountFromEnvironment, which doesn't need this function
Returns the Account configuration from environment variables

**`Example`**

```ts
environment variables
{accountName}_MNEMONIC
{accountName}_SENDER
```

#### Defined in

[src/account/get-account-config-from-environment.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/get-account-config-from-environment.ts#L13)

---

### getAccountInformation

▸ **getAccountInformation**(`sender`, `algod`): `Promise`\<[`AccountInformation`](#accountinformation)\>

#### Parameters

| Name     | Type                                                                                                                | Description                                  |
| :------- | :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------- |
| `sender` | `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom) | The address of the sender/account to look up |
| `algod`  | `AlgodClient`                                                                                                       | The algod instance                           |

#### Returns

`Promise`\<[`AccountInformation`](#accountinformation)\>

The account information

**`Deprecated`**

Use `algorand.account.getInformation(sender)` or `new AccountManager(clientManager).getInformation(sender)` instead.

Returns the given sender account's current status, balance and spendable amounts.

**`Example`**

```typescript
const address = 'XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA';
const accountInfo = await account.getInformation(address, algod);
```

[Response data schema details](https://dev.algorand.co/reference/rest-apis/algod/#accountinformation)

#### Defined in

[src/account/account.ts:156](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/account.ts#L156)

---

### getAlgoClient

▸ **getAlgoClient**(`config?`): `Algodv2`

#### Parameters

| Name      | Type                                                                                                   | Description                                                                      |
| :-------- | :----------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| `config?` | [`AlgoClientConfig`](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoclientconfig/) | The config if you want to override the default (getting config from process.env) |

#### Returns

`Algodv2`

**`Deprecated`**

Use `ClientManager.getAlgodClient(config)` or `ClientManager.getAlgodClientFromEnvironment()` instead.

Returns an algod SDK client that automatically retries transient failures on idempotent calls

**`Example`**

```typescript
// Uses process.env.ALGOD_SERVER, process.env.ALGOD_PORT and process.env.ALGOD_TOKEN
// Automatically detects if you are using PureStake to switch in the right header name for ALGOD_TOKEN
const algod = getAlgoClient();
await algod.healthCheck().do();
```

**`Example`**

```typescript
const algod = getAlgoClient(getAlgoNodeConfig('testnet', 'algod'));
await algod.healthCheck().do();
```

**`Example`**

```typescript
const algod = getAlgoClient(getAlgoNodeConfig('mainnet', 'algod'));
await algod.healthCheck().do();
```

**`Example`**

```typescript
const algod = getAlgoClient({
  server: 'http://localhost',
  port: '4001',
  token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
});
await algod.healthCheck().do();
```

#### Defined in

[src/network-client.ts:88](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L88)

---

### getAlgoIndexerClient

▸ **getAlgoIndexerClient**(`config?`): `Indexer`

#### Parameters

| Name      | Type                                                                                                   | Description                                                                      |
| :-------- | :----------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| `config?` | [`AlgoClientConfig`](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoclientconfig/) | The config if you want to override the default (getting config from process.env) |

#### Returns

`Indexer`

**`Deprecated`**

Use `ClientManager.getIndexerClient(config, overrideIntDecoding)` or `ClientManager.getIndexerClientFromEnvironment(overrideIntDecoding)` instead.

Returns an indexer SDK client that automatically retries transient failures on idempotent calls

**`Example`**

```typescript
// Uses process.env.INDEXER_SERVER, process.env.INDEXER_PORT and process.env.INDEXER_TOKEN
const indexer = getAlgoIndexerClient();
await indexer.makeHealthCheck().do();
```

**`Example`**

```typescript
const indexer = getAlgoIndexerClient(getAlgoNodeConfig('testnet', 'indexer'));
await indexer.makeHealthCheck().do();
```

**`Example`**

```typescript
const indexer = getAlgoIndexerClient(getAlgoNodeConfig('mainnet', 'indexer'));
await indexer.makeHealthCheck().do();
```

**`Example`**

```typescript
const indexer = getAlgoIndexerClient({
  server: 'http://localhost',
  port: '8980',
  token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
});
await indexer.makeHealthCheck().do();
```

#### Defined in

[src/network-client.ts:121](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L121)

---

### getAlgoKmdClient

▸ **getAlgoKmdClient**(`config?`): `Kmd`

#### Parameters

| Name      | Type                                                                                                   | Description                                                                      |
| :-------- | :----------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| `config?` | [`AlgoClientConfig`](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoclientconfig/) | The config if you want to override the default (getting config from process.env) |

#### Returns

`Kmd`

**`Deprecated`**

Use `ClientManager.getKmdClient(config)` or `ClientManager.getKmdClientFromEnvironment()` instead.

Returns a KMD SDK client that automatically retries transient failures on idempotent calls.

KMD client allows you to export private keys, which is useful to get the default account in a LocalNet network.

**`Example`**

```typescript
// Uses process.env.ALGOD_SERVER, process.env.KMD_PORT (or if not specified: port 4002) and process.env.ALGOD_TOKEN
const kmd = getAlgoKmdClient();
```

**`Example`**

```typescript
const kmd = getAlgoKmdClient({
  server: 'http://localhost',
  port: '4002',
  token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
});
```

#### Defined in

[src/network-client.ts:144](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L144)

---

### getAlgoNodeConfig

▸ **getAlgoNodeConfig**(`network`, `config`): [`AlgoClientConfig`](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoclientconfig/)

#### Parameters

| Name      | Type                       | Description                                      |
| :-------- | :------------------------- | :----------------------------------------------- |
| `network` | `"testnet"` \| `"mainnet"` | Which network to connect to - TestNet or MainNet |
| `config`  | `"algod"` \| `"indexer"`   | Which algod config to return - Algod or Indexer  |

#### Returns

[`AlgoClientConfig`](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoclientconfig/)

**`Deprecated`**

Use `ClientManager.getAlgoNodeConfig(network, config)` instead.

Returns the Algorand configuration to point to the AlgoNode service

#### Defined in

[src/network-client.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L43)

---

### getAlgodConfigFromEnvironment

▸ **getAlgodConfigFromEnvironment**(): [`AlgoClientConfig`](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoclientconfig/)

#### Returns

[`AlgoClientConfig`](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoclientconfig/)

**`Deprecated`**

Use `ClientManager.getAlgodConfigFromEnvironment()` instead.

Retrieve the algod configuration from environment variables (expects to be called from a Node.js environment not algod-side)

#### Defined in

[src/network-client.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L22)

---

### getAppArgsForABICall

▸ **getAppArgsForABICall**(`args`, `from`): `Promise`\<\{ `appAccounts`: `undefined` \| `string`[] ; `appForeignApps`: `undefined` \| `number`[] = args.apps; `appForeignAssets`: `undefined` \| `number`[] = args.assets; `boxes`: `undefined` \| `BoxReference`[] ; `lease`: `undefined` \| `Uint8Array` ; `method`: `ABIMethod` ; `methodArgs`: (`string` \| `number` \| `bigint` \| `boolean` \| `Uint8Array` \| `ABIValue`[] \| `TransactionWithSigner`)[] = methodArgs; `rekeyTo`: `undefined` \| `string` ; `sender`: `string` ; `signer`: `TransactionSigner` = signer }\>

#### Parameters

| Name   | Type                                                                                                    | Description            |
| :----- | :------------------------------------------------------------------------------------------------------ | :--------------------- |
| `args` | [`ABIAppCallArgs`](/reference/algokit-utils-ts/api/modules/types_app/#abiappcallargs)                   | The ABI app call args  |
| `from` | [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom) | The transaction signer |

#### Returns

`Promise`\<\{ `appAccounts`: `undefined` \| `string`[] ; `appForeignApps`: `undefined` \| `number`[] = args.apps; `appForeignAssets`: `undefined` \| `number`[] = args.assets; `boxes`: `undefined` \| `BoxReference`[] ; `lease`: `undefined` \| `Uint8Array` ; `method`: `ABIMethod` ; `methodArgs`: (`string` \| `number` \| `bigint` \| `boolean` \| `Uint8Array` \| `ABIValue`[] \| `TransactionWithSigner`)[] = methodArgs; `rekeyTo`: `undefined` \| `string` ; `sender`: `string` ; `signer`: `TransactionSigner` = signer }\>

The parameters ready to pass into `addMethodCall` within AtomicTransactionComposer

**`Deprecated`**

Use `TransactionComposer` methods to construct transactions instead.

Returns the app args ready to load onto an ABI method call in `AtomicTransactionComposer`

#### Defined in

[src/app.ts:378](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L378)

---

### getAppArgsForTransaction

▸ **getAppArgsForTransaction**(`args?`): `undefined` \| \{ `accounts`: `undefined` \| `string`[] ; `appArgs`: `undefined` \| `Uint8Array`[] ; `boxes`: `undefined` \| `BoxReference`[] ; `foreignApps`: `undefined` \| `number`[] = args.apps; `foreignAssets`: `undefined` \| `number`[] = args.assets; `lease`: `undefined` \| `Uint8Array` }

#### Parameters

| Name    | Type                                                                                    | Description       |
| :------ | :-------------------------------------------------------------------------------------- | :---------------- |
| `args?` | [`RawAppCallArgs`](/reference/algokit-utils-ts/api/interfaces/types_apprawappcallargs/) | The app call args |

#### Returns

`undefined` \| \{ `accounts`: `undefined` \| `string`[] ; `appArgs`: `undefined` \| `Uint8Array`[] ; `boxes`: `undefined` \| `BoxReference`[] ; `foreignApps`: `undefined` \| `number`[] = args.apps; `foreignAssets`: `undefined` \| `number`[] = args.assets; `lease`: `undefined` \| `Uint8Array` }

The args ready to load into a `Transaction`

**`Deprecated`**

Use `TransactionComposer` methods to construct transactions instead.

Returns the app args ready to load onto an app `Transaction` object

#### Defined in

[src/app.ts:356](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L356)

---

### getAppBoxNames

▸ **getAppBoxNames**(`appId`, `algod`): `Promise`\<[`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/)[]\>

#### Parameters

| Name    | Type                 | Description                            |
| :------ | :------------------- | :------------------------------------- |
| `appId` | `number` \| `bigint` | The ID of the app return box names for |
| `algod` | `AlgodClient`        | An algod client instance               |

#### Returns

`Promise`\<[`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/)[]\>

The current box names

**`Deprecated`**

Use `algorand.app.getBoxNames` instead.
Returns the names of the boxes for the given app.

#### Defined in

[src/app.ts:276](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L276)

---

### getAppBoxValue

▸ **getAppBoxValue**(`appId`, `boxName`, `algod`): `Promise`\<`Uint8Array`\>

#### Parameters

| Name      | Type                                                                                                  | Description                                                                 |
| :-------- | :---------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| `appId`   | `number` \| `bigint`                                                                                  | The ID of the app return box names for                                      |
| `boxName` | `string` \| `Uint8Array` \| [`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/) | The name of the box to return either as a string, binary array or `BoxName` |
| `algod`   | `AlgodClient`                                                                                         | An algod client instance                                                    |

#### Returns

`Promise`\<`Uint8Array`\>

The current box value as a byte array

**`Deprecated`**

Use `algorand.app.getBoxValue` instead.
Returns the value of the given box name for the given app.

#### Defined in

[src/app.ts:288](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L288)

---

### getAppBoxValueFromABIType

▸ **getAppBoxValueFromABIType**(`request`, `algod`): `Promise`\<`ABIValue`\>

#### Parameters

| Name      | Type                                                                                                  | Description                              |
| :-------- | :---------------------------------------------------------------------------------------------------- | :--------------------------------------- |
| `request` | [`BoxValueRequestParams`](/reference/algokit-utils-ts/api/interfaces/types_appboxvaluerequestparams/) | The parameters for the box value request |
| `algod`   | `AlgodClient`                                                                                         | An algod client instance                 |

#### Returns

`Promise`\<`ABIValue`\>

The current box value as an ABI value

**`Deprecated`**

Use `algorand.app.getBoxValueFromABIType` instead.
Returns the value of the given box name for the given app decoded based on the given ABI type.

#### Defined in

[src/app.ts:314](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L314)

---

### getAppBoxValues

▸ **getAppBoxValues**(`appId`, `boxNames`, `algod`): `Promise`\<`Uint8Array`[]\>

#### Parameters

| Name       | Type                                                                                                      | Description                                                                    |
| :--------- | :-------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| `appId`    | `number`                                                                                                  | The ID of the app return box names for                                         |
| `boxNames` | (`string` \| `Uint8Array` \| [`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/))[] | The names of the boxes to return either as a string, binary array or `BoxName` |
| `algod`    | `AlgodClient`                                                                                             | An algod client instance                                                       |

#### Returns

`Promise`\<`Uint8Array`[]\>

The current box values as a byte array in the same order as the passed in box names

**`Deprecated`**

Use `algorand.app.getBoxValues` instead.
Returns the value of the given box names for the given app.

#### Defined in

[src/app.ts:300](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L300)

---

### getAppBoxValuesFromABIType

▸ **getAppBoxValuesFromABIType**(`request`, `algod`): `Promise`\<`ABIValue`[]\>

#### Parameters

| Name      | Type                                                                                                    | Description                              |
| :-------- | :------------------------------------------------------------------------------------------------------ | :--------------------------------------- |
| `request` | [`BoxValuesRequestParams`](/reference/algokit-utils-ts/api/interfaces/types_appboxvaluesrequestparams/) | The parameters for the box value request |
| `algod`   | `AlgodClient`                                                                                           | An algod client instance                 |

#### Returns

`Promise`\<`ABIValue`[]\>

The current box values as an ABI value in the same order as the passed in box names

**`Deprecated`**

Use `algorand.app.getBoxValuesFromABIType` instead.
Returns the value of the given box names for the given app decoded based on the given ABI type.

#### Defined in

[src/app.ts:329](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L329)

---

### getAppById

▸ **getAppById**(`appId`, `algod`): `Promise`\<`Application`\>

#### Parameters

| Name    | Type                 | Description       |
| :------ | :------------------- | :---------------- |
| `appId` | `number` \| `bigint` | The id of the app |
| `algod` | `AlgodClient`        | An algod client   |

#### Returns

`Promise`\<`Application`\>

The data about the app

**`Deprecated`**

Use `algorand.app.getById` instead.

Gets the current data for the given app from algod.

#### Defined in

[src/app.ts:406](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L406)

---

### getAppClient

▸ **getAppClient**(`appDetails`, `algod`): [`ApplicationClient`](/reference/algokit-utils-ts/api/classes/types_app_clientapplicationclient/)

#### Parameters

| Name         | Type                                                                                               | Description            |
| :----------- | :------------------------------------------------------------------------------------------------- | :--------------------- |
| `appDetails` | [`AppSpecAppDetails`](/reference/algokit-utils-ts/api/modules/types_app_client/#appspecappdetails) | The details of the app |
| `algod`      | `AlgodClient`                                                                                      | An algod instance      |

#### Returns

[`ApplicationClient`](/reference/algokit-utils-ts/api/classes/types_app_clientapplicationclient/)

The application client

**`Deprecated`**

Use `AppClient` instead e.g. via `algorand.client.getAppClientById` or
`algorand.client.getAppClientByCreatorAndName`.
If you want to `create` or `deploy` then use `AppFactory` e.g. via `algorand.client.getAppFactory`,
which will in turn give you an `AppClient` instance against the created/deployed app to make other calls.

Create a new ApplicationClient instance

**`Example`**

```ts
Resolve by creator and name
const client = algokit.getAppClient(
    {
      resolveBy: 'creatorAndName',
      app: {appSpec},
      sender: {account},
      creatorAddress: {creator},
      findExistingUsing: indexerClient,
    },
    algodClient,
  )
```

**`Example`**

```ts
Resolve by id:
const client = algokit.getAppClient(
    {
      resolveBy: 'id',
      app: {appSpec},
      sender: {account},
      id: {id},
    },
   algodClient,
)
```

#### Defined in

[src/app-client.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L40)

---

### getAppClientByCreatorAndName

▸ **getAppClientByCreatorAndName**(`appDetails`, `algod`): [`ApplicationClient`](/reference/algokit-utils-ts/api/classes/types_app_clientapplicationclient/)

#### Parameters

| Name         | Type                                                                                                                               | Description                                |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------- |
| `appDetails` | [`AppSpecAppDetailsByCreatorAndName`](/reference/algokit-utils-ts/api/modules/types_app_client/#appspecappdetailsbycreatorandname) | The details of the app by creator and name |
| `algod`      | `AlgodClient`                                                                                                                      | An algod instance                          |

#### Returns

[`ApplicationClient`](/reference/algokit-utils-ts/api/classes/types_app_clientapplicationclient/)

The application client

**`Deprecated`**

Use `AppClient` instead e.g. via `algorand.client.getAppClientByCreatorAndName`.
If you want to `create` or `deploy` then use `AppFactory` e.g. via `algorand.client.getAppFactory`,
which will in turn give you an `AppClient` instance against the created/deployed app to make other calls.

Create a new ApplicationClient instance by creator and name

**`Example`**

```ts
const client = algokit.getAppClientByCreatorAndName(
  {
    app: appSpec,
    sender: account,
    creatorAddress: account,
    findExistingUsing: indexerClient,
  },
  algodClient,
);
```

#### Defined in

[src/app-client.ts:93](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L93)

---

### getAppClientById

▸ **getAppClientById**(`appDetails`, `algod`): [`ApplicationClient`](/reference/algokit-utils-ts/api/classes/types_app_clientapplicationclient/)

#### Parameters

| Name         | Type                                                                                                       | Description            |
| :----------- | :--------------------------------------------------------------------------------------------------------- | :--------------------- |
| `appDetails` | [`AppSpecAppDetailsById`](/reference/algokit-utils-ts/api/modules/types_app_client/#appspecappdetailsbyid) | The details of the app |
| `algod`      | `AlgodClient`                                                                                              | An algod instance      |

#### Returns

[`ApplicationClient`](/reference/algokit-utils-ts/api/classes/types_app_clientapplicationclient/)

The application client

**`Deprecated`**

Use `AppClient` instead e.g. via `algorand.client.getAppClientById`.
If you want to `create` or `deploy` then use `AppFactory` e.g. via `algorand.client.getAppFactory`,
which will in turn give you an `AppClient` instance against the created/deployed app to make other calls.

Create a new ApplicationClient instance by id

**`Example`**

```ts
const client = algokit.getAppClientById(
  {
    app: { appSpec },
    sender: { account },
    id: { id },
  },
  algodClient,
);
```

#### Defined in

[src/app-client.ts:66](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-client.ts#L66)

---

### getAppDeploymentTransactionNote

▸ **getAppDeploymentTransactionNote**(`metadata`): [`Arc2TransactionNote`](/reference/algokit-utils-ts/api/modules/types_transaction/#arc2transactionnote)

#### Parameters

| Name       | Type                                                                                          | Description                    |
| :--------- | :-------------------------------------------------------------------------------------------- | :----------------------------- |
| `metadata` | [`AppDeployMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/) | The metadata of the deployment |

#### Returns

[`Arc2TransactionNote`](/reference/algokit-utils-ts/api/modules/types_transaction/#arc2transactionnote)

The transaction note as a utf-8 string

**`Deprecated`**

Use `{ dAppName: APP_DEPLOY_NOTE_DAPP, data: metadata, format: 'j' }` instead.

Return the transaction note for an app deployment.

#### Defined in

[src/app-deploy.ts:271](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-deploy.ts#L271)

---

### getAppGlobalState

▸ **getAppGlobalState**(`appId`, `algod`): `Promise`\<[`AppState`](/reference/algokit-utils-ts/api/interfaces/types_appappstate/)\>

#### Parameters

| Name    | Type                 | Description                               |
| :------ | :------------------- | :---------------------------------------- |
| `appId` | `number` \| `bigint` | The ID of the app return global state for |
| `algod` | `AlgodClient`        | An algod client instance                  |

#### Returns

`Promise`\<[`AppState`](/reference/algokit-utils-ts/api/interfaces/types_appappstate/)\>

The current global state

**`Deprecated`**

Use `algorand.app.getGlobalState` instead.

Returns the current global state values for the given app ID

#### Defined in

[src/app.ts:252](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L252)

---

### getAppLocalState

▸ **getAppLocalState**(`appId`, `account`, `algod`): `Promise`\<[`AppState`](/reference/algokit-utils-ts/api/interfaces/types_appappstate/)\>

#### Parameters

| Name      | Type                                                                                                                | Description                                                                                                       |
| :-------- | :------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------- |
| `appId`   | `number` \| `bigint`                                                                                                | The ID of the app return global state for                                                                         |
| `account` | `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom) | Either the string address of an account or an account object for the account to get local state for the given app |
| `algod`   | `AlgodClient`                                                                                                       | An algod client instance                                                                                          |

#### Returns

`Promise`\<[`AppState`](/reference/algokit-utils-ts/api/interfaces/types_appappstate/)\>

The current local state for the given (app, account) combination

**`Deprecated`**

Use `algorand.app.getLocalState` instead.

Returns the current global state values for the given app ID and account

#### Defined in

[src/app.ts:265](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L265)

---

### getAppOnCompleteAction

▸ **getAppOnCompleteAction**(`onCompletionAction?`): `OnApplicationComplete`

#### Parameters

| Name                  | Type                                                                                                       | Description              |
| :-------------------- | :--------------------------------------------------------------------------------------------------------- | :----------------------- |
| `onCompletionAction?` | [`AppCallType`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltype) \| `OnApplicationComplete` | The on completion action |

#### Returns

`OnApplicationComplete`

The `algosdk.OnApplicationComplete`

**`Deprecated`**

Use `algosdk.OnApplicationComplete` directly instead.

Returns a `algosdk.OnApplicationComplete` for the given onCompleteAction.

If given `undefined` will return `OnApplicationComplete.NoOpOC`.

If given an `AppCallType` will convert the string enum to the correct underlying `algosdk.OnApplicationComplete`.

#### Defined in

[src/app.ts:154](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L154)

---

### getAtomicTransactionComposerTransactions

▸ **getAtomicTransactionComposerTransactions**(`atc`): `TransactionWithSigner`[]

#### Parameters

| Name  | Type                        | Description                     |
| :---- | :-------------------------- | :------------------------------ |
| `atc` | `AtomicTransactionComposer` | The atomic transaction composer |

#### Returns

`TransactionWithSigner`[]

The array of transactions with signers

**`Deprecated`**

Use `atc.clone().buildGroup()` instead.

Returns the array of transactions currently present in the given `AtomicTransactionComposer`

#### Defined in

[src/transaction/transaction.ts:1132](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L1132)

---

### getBoxReference

▸ **getBoxReference**(`box`): `algosdk.BoxReference`

#### Parameters

| Name  | Type                                                                                                                                                                                         | Description                       |
| :---- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |
| `box` | [`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_appboxreference/) \| [`BoxIdentifier`](/reference/algokit-utils-ts/api/modules/types_app/#boxidentifier) \| `BoxReference` | The box to return a reference for |

#### Returns

`algosdk.BoxReference`

The box reference ready to pass into a `Transaction`

**`Deprecated`**

Use `AppManager.getBoxReference()` instead.

Returns a `algosdk.BoxReference` given a `BoxIdentifier` or `BoxReference`.

#### Defined in

[src/app.ts:389](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L389)

---

### getConfigFromEnvOrDefaults

▸ **getConfigFromEnvOrDefaults**(): [`AlgoConfig`](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoconfig/)

#### Returns

[`AlgoConfig`](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoconfig/)

**`Deprecated`**

Use `ClientManager.getConfigFromEnvironmentOrLocalNet()` instead.

Retrieve configurations from environment variables when defined or get defaults (expects to be called from a Node.js environment not algod-side)

#### Defined in

[src/network-client.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L13)

---

### getCreatorAppsByName

▸ **getCreatorAppsByName**(`creatorAccount`, `indexer`): `Promise`\<[`AppLookup`](/reference/algokit-utils-ts/api/interfaces/types_appapplookup/)\>

#### Parameters

| Name             | Type                                                                                                                | Description                                                                                                                  |
| :--------------- | :------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| `creatorAccount` | `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom) | The account (with private key loaded) or string address of an account that is the creator of the apps you want to search for |
| `indexer`        | `IndexerClient`                                                                                                     | An indexer client                                                                                                            |

#### Returns

`Promise`\<[`AppLookup`](/reference/algokit-utils-ts/api/interfaces/types_appapplookup/)\>

A name-based lookup of the app information (id, address)

**`Deprecated`**

Use `algorand.appDeployer.getCreatorAppsByName` instead.

Returns a lookup of name => app metadata (id, address, ...metadata) for all apps created by the given account that have an `AppDeployNote` in the transaction note of the creation transaction.

**Note:** It's recommended this is only called once and then stored since it's a somewhat expensive operation (multiple indexer calls).

#### Defined in

[src/app-deploy.ts:244](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-deploy.ts#L244)

---

### getDefaultLocalNetConfig

▸ **getDefaultLocalNetConfig**(`configOrPort`): [`AlgoClientConfig`](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoclientconfig/)

#### Parameters

| Name           | Type                                            | Description                                                            |
| :------------- | :---------------------------------------------- | :--------------------------------------------------------------------- |
| `configOrPort` | `number` \| `"algod"` \| `"indexer"` \| `"kmd"` | Which algod config to return - algod, kmd, or indexer OR a port number |

#### Returns

[`AlgoClientConfig`](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoclientconfig/)

**`Deprecated`**

Use `ClientManager.getDefaultLocalNetConfig(configOrPort)` instead.

Returns the Algorand configuration to point to the default LocalNet

#### Defined in

[src/network-client.ts:54](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L54)

---

### getDispenserAccount

▸ **getDispenserAccount**(`algod`, `kmd?`): `Promise`\<`Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/) }\>

#### Parameters

| Name    | Type          | Description                                                                                        |
| :------ | :------------ | :------------------------------------------------------------------------------------------------- |
| `algod` | `AlgodClient` | An algod client                                                                                    |
| `kmd?`  | `KmdClient`   | A KMD client, if not specified then a default KMD client will be loaded from environment variables |

#### Returns

`Promise`\<`Address` & [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) & \{ `account`: [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/) }\>

**`Deprecated`**

Use `algorand.account.dispenserFromEnvironment()` or `new AccountManager(clientManager).dispenserFromEnvironment()` instead

Returns an account (with private key loaded) that can act as a dispenser

If running on LocalNet then it will return the default dispenser account automatically,
otherwise it will load the account mnemonic stored in process.env.DISPENSER_MNEMONIC

#### Defined in

[src/account/get-dispenser-account.ts:19](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/get-dispenser-account.ts#L19)

---

### getIndexerConfigFromEnvironment

▸ **getIndexerConfigFromEnvironment**(): [`AlgoClientConfig`](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoclientconfig/)

#### Returns

[`AlgoClientConfig`](/reference/algokit-utils-ts/api/interfaces/types_network_clientalgoclientconfig/)

**`Deprecated`**

Use `ClientManager.getIndexerConfigFromEnvironment()` instead.

Retrieve the indexer configuration from environment variables (expects to be called from a Node.js environment not algod-side)

#### Defined in

[src/network-client.ts:31](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L31)

---

### getKmdWalletAccount

▸ **getKmdWalletAccount**(`walletAccount`, `algod`, `kmdClient?`): `Promise`\<`Account` \| `undefined`\>

#### Parameters

| Name                       | Type                                                  | Description                                                                                                                                                                                                            |
| :------------------------- | :---------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `walletAccount`            | `Object`                                              | The details of the wallet, with: _ `name`: The name of the wallet to retrieve an account from _ `predicate`: An optional filter to use to find the account (otherwise it will return a random account from the wallet) |
| `walletAccount.name`       | `string`                                              | -                                                                                                                                                                                                                      |
| `walletAccount.predicate?` | (`account`: `Record`\<`string`, `any`\>) => `boolean` | -                                                                                                                                                                                                                      |
| `algod`                    | `AlgodClient`                                         | An algod client                                                                                                                                                                                                        |
| `kmdClient?`               | `KmdClient`                                           | A KMD client, if not specified then a default KMD client will be loaded from environment variables                                                                                                                     |

#### Returns

`Promise`\<`Account` \| `undefined`\>

**`Deprecated`**

use `algorand.account.kmd.getWalletAccount(name, predicate)` or `new KMDAccountManager(clientManager).getWalletAccount(name, predicate)` instead.

Returns an Algorand account with private key loaded from the given KMD wallet (identified by name).

**`Example`**

```typescript
const defaultDispenserAccount = await getKmdWalletAccount(
  algod,
  'unencrypted-default-wallet',
  a => a.status !== 'Offline' && a.amount > 1_000_000_000,
);
```

#### Defined in

[src/localnet/get-kmd-wallet-account.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/localnet/get-kmd-wallet-account.ts#L27)

---

### getLocalNetDispenserAccount

▸ **getLocalNetDispenserAccount**(`algod`, `kmd?`): `Promise`\<`Account`\>

#### Parameters

| Name    | Type          | Description                                                                                        |
| :------ | :------------ | :------------------------------------------------------------------------------------------------- |
| `algod` | `AlgodClient` | An algod client                                                                                    |
| `kmd?`  | `KmdClient`   | A KMD client, if not specified then a default KMD client will be loaded from environment variables |

#### Returns

`Promise`\<`Account`\>

**`Deprecated`**

Use `algorand.account.kmd.getLocalNetDispenserAccount()` instead.

Returns an Algorand account with private key loaded for the default LocalNet dispenser account (that can be used to fund other accounts)

#### Defined in

[src/localnet/get-localnet-dispenser-account.ts:15](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/localnet/get-localnet-dispenser-account.ts#L15)

---

### getOrCreateKmdWalletAccount

▸ **getOrCreateKmdWalletAccount**(`walletAccount`, `algod`, `kmdClient?`): `Promise`\<`Account`\>

#### Parameters

| Name                      | Type                                                                            | Description                                                                                                                                                                                                                              |
| :------------------------ | :------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `walletAccount`           | `Object`                                                                        | The wallet details with: _ `name`: The name of the wallet to retrieve / create _ `fundWith`: The number of Algo to fund the account with when it gets created, if not specified then 1000 ALGO will be funded from the dispenser account |
| `walletAccount.fundWith?` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | -                                                                                                                                                                                                                                        |
| `walletAccount.name`      | `string`                                                                        | -                                                                                                                                                                                                                                        |
| `algod`                   | `AlgodClient`                                                                   | An algod client                                                                                                                                                                                                                          |
| `kmdClient?`              | `KmdClient`                                                                     | A KMD client, if not specified then a default KMD client will be loaded from environment variables                                                                                                                                       |

#### Returns

`Promise`\<`Account`\>

An Algorand account with private key loaded - either one that already existed in the given KMD wallet, or a new one that is funded for you

**`Deprecated`**

use `algorand.account.kmd.getOrCreateWalletAccount(name, fundWith)` or `new KMDAccountManager(clientManager).getOrCreateWalletAccount(name, fundWith)` instead.

Gets an account with private key loaded from a KMD wallet of the given name, or alternatively creates one with funds in it via a KMD wallet of the given name.

This is useful to get idempotent accounts from LocalNet without having to specify the private key (which will change when resetting the LocalNet).

This significantly speeds up local dev time and improves experience since you can write code that _just works_ first go without manual config in a fresh LocalNet.

If this is used via `mnemonicAccountFromEnvironment`, then you can even use the same code that runs on production without changes for local development!

#### Defined in

[src/localnet/get-or-create-kmd-wallet-account.ts:28](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/localnet/get-or-create-kmd-wallet-account.ts#L28)

---

### getSenderAddress

▸ **getSenderAddress**(`sender`): `string`

#### Parameters

| Name     | Type                                                                                                                | Description          |
| :------- | :------------------------------------------------------------------------------------------------------------------ | :------------------- |
| `sender` | `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom) | A transaction sender |

#### Returns

`string`

The public address

**`Deprecated`**

Use `algorand.client` to interact with accounts, and use `.addr` to get the address
and/or move from using `SendTransactionFrom` to `TransactionSignerAccount` and use `.addr` instead.

Returns the public address of the given transaction sender.

#### Defined in

[src/transaction/transaction.ts:116](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L116)

---

### getSenderTransactionSigner

▸ **getSenderTransactionSigner**(`val`): `TransactionSigner`

#### Parameters

| Name  | Type                                                                                                    |
| :---- | :------------------------------------------------------------------------------------------------------ |
| `val` | [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom) |

#### Returns

`TransactionSigner`

A transaction signer

**`Deprecated`**

Use `TransactionSignerAccount` instead of `SendTransactionFrom` or use
`algosdk.makeBasicAccountTransactionSigner` / `algosdk.makeLogicSigAccountTransactionSigner`.

Returns a `TransactionSigner` for the given transaction sender.
This function has memoization, so will return the same transaction signer for a given sender.

#### Defined in

[src/transaction/transaction.ts:174](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L174)

---

### getTestNetDispenserApiClient

▸ **getTestNetDispenserApiClient**(`params?`): [`TestNetDispenserApiClient`](/reference/algokit-utils-ts/api/classes/types_dispenser_clienttestnetdispenserapiclient/)

#### Parameters

| Name     | Type                                                                                                                                             | Default value | Description                                                                                                                                                                                      |
| :------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `params` | `null` \| [`TestNetDispenserApiClientParams`](/reference/algokit-utils-ts/api/interfaces/types_dispenser_clienttestnetdispenserapiclientparams/) | `null`        | An object containing parameters for the TestNetDispenserApiClient class. Or null if you want the client to load the access token from the environment variable `ALGOKIT_DISPENSER_ACCESS_TOKEN`. |

#### Returns

[`TestNetDispenserApiClient`](/reference/algokit-utils-ts/api/classes/types_dispenser_clienttestnetdispenserapiclient/)

An instance of the TestNetDispenserApiClient class.

**`Deprecated`**

Use `clientManager.getTestNetDispenser` or `clientManager.getTestNetDispenserFromEnvironment` instead

Create a new TestNetDispenserApiClient instance.
Refer to [docs](https://github.com/algorandfoundation/algokit/blob/main/docs/testnet_api.md) on guidance to obtain an access token.

**`Example`**

```ts
const client = algokit.getTestNetDispenserApiClient({
  authToken: 'your_auth_token',
  requestTimeout: 15,
});
```

#### Defined in

[src/dispenser-client.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/dispenser-client.ts#L21)

---

### getTransactionParams

▸ **getTransactionParams**(`params`, `algod`): `Promise`\<`SuggestedParams`\>

#### Parameters

| Name     | Type                             | Description                          |
| :------- | :------------------------------- | :----------------------------------- |
| `params` | `undefined` \| `SuggestedParams` | Optionally provide parameters to use |
| `algod`  | `AlgodClient`                    | Algod algod                          |

#### Returns

`Promise`\<`SuggestedParams`\>

The suggested transaction parameters

**`Deprecated`**

Use `suggestedParams ? { ...suggestedParams } : await algod.getTransactionParams().do()` instead

Returns suggested transaction parameters from algod unless some are already provided.

#### Defined in

[src/transaction/transaction.ts:1110](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L1110)

---

### getTransactionWithSigner

▸ **getTransactionWithSigner**(`transaction`, `defaultSender?`): `Promise`\<`TransactionWithSigner`\>

#### Parameters

| Name             | Type                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                                    |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `transaction`    | `Transaction` \| [`TransactionToSign`](/reference/algokit-utils-ts/api/interfaces/types_transactiontransactiontosign/) \| `Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)\> \| `TransactionWithSigner` | One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils' helpers (signer is obtained from the defaultSender parameter) |
| `defaultSender?` | [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)                                                                                                                                                                         | The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.                                                                                                                                                                                                             |

#### Returns

`Promise`\<`TransactionWithSigner`\>

A TransactionWithSigner object.

**`Deprecated`**

Use `AlgorandClient` / `TransactionComposer` to construct transactions instead or
construct an `algosdk.TransactionWithSigner` manually instead.

Given a transaction in a variety of supported formats, returns a TransactionWithSigner object ready to be passed to an
AtomicTransactionComposer's addTransaction method.

#### Defined in

[src/transaction/transaction.ts:133](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L133)

---

### isLocalNet

▸ **isLocalNet**(`algod`): `Promise`\<`boolean`\>

#### Parameters

| Name    | Type          |
| :------ | :------------ |
| `algod` | `AlgodClient` |

#### Returns

`Promise`\<`boolean`\>

**`Deprecated`**

Use `await algorand.client.isLocalNet()` or `await new ClientManager({ algod }).isLocalNet()` instead.

Returns true if the algod client is pointing to a LocalNet Algorand network

#### Defined in

[src/localnet/is-localnet.ts:9](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/localnet/is-localnet.ts#L9)

---

### isMainNet

▸ **isMainNet**(`algod`): `Promise`\<`boolean`\>

#### Parameters

| Name    | Type          |
| :------ | :------------ |
| `algod` | `AlgodClient` |

#### Returns

`Promise`\<`boolean`\>

**`Deprecated`**

Use `await algorand.client.isMainNet()` or `await new ClientManager({ algod }).isMainNet()` instead.

#### Defined in

[src/network-client.ts:154](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L154)

---

### isSchemaIsBroken

▸ **isSchemaIsBroken**(`before`, `after`): `boolean`

#### Parameters

| Name     | Type                     | Description         |
| :------- | :----------------------- | :------------------ |
| `before` | `ApplicationStateSchema` | The existing schema |
| `after`  | `ApplicationStateSchema` | The new schema      |

#### Returns

`boolean`

Whether or not there is a breaking change

**`Deprecated`**

Use `before.numByteSlice < after.numByteSlice || before.numUint < after.numUint` instead.

Returns true is there is a breaking change in the application state schema from before to after.
i.e. if the schema becomes larger, since applications can't ask for more schema after creation.
Otherwise, there is no error, the app just doesn't store data in the extra schema :(

#### Defined in

[src/app-deploy.ts:229](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-deploy.ts#L229)

---

### isTestNet

▸ **isTestNet**(`algod`): `Promise`\<`boolean`\>

#### Parameters

| Name    | Type          |
| :------ | :------------ |
| `algod` | `AlgodClient` |

#### Returns

`Promise`\<`boolean`\>

**`Deprecated`**

Use `await algorand.client.isTestNet()` or `await new ClientManager({ algod }).isTestNet()` instead.

#### Defined in

[src/network-client.ts:149](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/network-client.ts#L149)

---

### microAlgo

▸ **microAlgo**(`microAlgos`): [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

Returns an amount of µAlgo using AlgoAmount

#### Parameters

| Name         | Type                 | Description         |
| :----------- | :------------------- | :------------------ |
| `microAlgos` | `number` \| `bigint` | The amount of µAlgo |

#### Returns

[`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

#### Defined in

[src/amount.ts:82](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L82)

---

### microAlgos

▸ **microAlgos**(`microAlgos`): [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

Returns an amount of µAlgo using AlgoAmount

#### Parameters

| Name         | Type                 | Description         |
| :----------- | :------------------- | :------------------ |
| `microAlgos` | `number` \| `bigint` | The amount of µAlgo |

#### Returns

[`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

#### Defined in

[src/amount.ts:75](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L75)

---

### mnemonicAccount

▸ **mnemonicAccount**(`mnemonicSecret`): `Account`

#### Parameters

| Name             | Type     | Description                                                                                                                                                                                                                                                        |
| :--------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mnemonicSecret` | `string` | The mnemonic secret representing the private key of an account; **Note: Be careful how the mnemonic is handled**, never commit it into source control and ideally load it from the environment (ideally via a secret storage service) rather than the file system. |

#### Returns

`Account`

**`Deprecated`**

Use `algorand.account.fromMnemonic(mnemonicSecret)` or `algosdk.mnemonicToSecretKey(mnemonicSecret)` instead.

Returns an Algorand account with secret key loaded (i.e. that can sign transactions) by taking the mnemonic secret.

This is a wrapper around algosdk.mnemonicToSecretKey to provide a more friendly/obvious name.

#### Defined in

[src/account/mnemonic-account.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/mnemonic-account.ts#L14)

---

### mnemonicAccountFromEnvironment

▸ **mnemonicAccountFromEnvironment**(`account`, `algod`, `kmdClient?`): `Promise`\<`Account` \| [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)\>

#### Parameters

| Name         | Type                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `account`    | `string` \| \{ `fundWith?`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `name`: `string` } | The details of the account to get, either the name identifier (string) or an object with: _ `name`: string: The name identifier of the account _ `fundWith`: The amount to fund the account with when it gets created (when targeting LocalNet), if not specified then 1000 ALGO will be funded from the dispenser account |
| `algod`      | `AlgodClient`                                                                                                                    | An algod client                                                                                                                                                                                                                                                                                                            |
| `kmdClient?` | `KmdClient`                                                                                                                      | An optional KMD client to use to create an account (when targeting LocalNet), if not specified then a default KMD client will be loaded from environment variables                                                                                                                                                         |

#### Returns

`Promise`\<`Account` \| [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)\>

The requested account with private key loaded from the environment variables or when targeting LocalNet from KMD (idempotently creating and funding the account)

**`Deprecated`**

Use `algorand.account.fromEnvironment(name, fundWith)` or `new AccountManager(clientManager).fromEnvironment()` instead.

Returns an Algorand account with private key loaded by convention from environment variables based on the given name identifier.

Note: This function expects to run in a Node.js environment.

## Convention:

- **Non-LocalNet:** will load process.env['{NAME}_MNEMONIC'] as a mnemonic secret; **Note: Be careful how the mnemonic is handled**,
  never commit it into source control and ideally load it via a secret storage service rather than the file system.
  If process.env['{NAME}_SENDER'] is defined then it will use that for the sender address (i.e. to support rekeyed accounts)
- **LocalNet:** will load the account from a KMD wallet called {NAME} and if that wallet doesn't exist it will create it and fund the account for you

This allows you to write code that will work seamlessly in production and local development (LocalNet) without manual config locally (including when you reset the LocalNet).

**`Example`**

If you have a mnemonic secret loaded into `process.env.MY_ACCOUNT_MNEMONIC` then you can call the following to get that private key loaded into an account object:

```typescript
const account = await mnemonicAccountFromEnvironment('MY_ACCOUNT', algod);
```

If that code runs against LocalNet then a wallet called `MY_ACCOUNT` will automatically be created with an account that is automatically funded with 1000 (default) ALGO from the default LocalNet dispenser.
If not running against LocalNet then it will use proces.env.MY_ACCOUNT_MNEMONIC as the private key and (if present) process.env.MY_ACCOUNT_SENDER as the sender address.

#### Defined in

[src/account/account.ts:97](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/account.ts#L97)

---

### multisigAccount

▸ **multisigAccount**(`multisigParams`, `signingAccounts`): [`MultisigAccount`](/reference/algokit-utils-ts/api/classes/types_accountmultisigaccount/)

#### Parameters

| Name              | Type                                                                                                      | Description                                     |
| :---------------- | :-------------------------------------------------------------------------------------------------------- | :---------------------------------------------- |
| `multisigParams`  | `MultisigMetadata`                                                                                        | The parameters that define the multisig account |
| `signingAccounts` | (`default` \| [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/))[] | The signers that are currently present          |

#### Returns

[`MultisigAccount`](/reference/algokit-utils-ts/api/classes/types_accountmultisigaccount/)

A multisig account wrapper

**`Deprecated`**

Use `algorand.account.multisig(multisigParams, signingAccounts)` or `new MultisigAccount(multisigParams, signingAccounts)` instead.

Returns an account wrapper that supports partial or full multisig signing.

#### Defined in

[src/account/account.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/account.ts#L24)

---

### performAtomicTransactionComposerSimulate

▸ **performAtomicTransactionComposerSimulate**(`atc`, `algod`, `options?`): `Promise`\<`SimulateResponse`\>

Performs a simulation of the transactions loaded into the given AtomicTransactionComposer.
Uses empty transaction signers for all transactions.

#### Parameters

| Name       | Type                                                                                                                                                                                                                                                                                                                                            | Description                                               |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| `atc`      | `AtomicTransactionComposer`                                                                                                                                                                                                                                                                                                                     | The AtomicTransactionComposer with transaction(s) loaded. |
| `algod`    | `AlgodClient`                                                                                                                                                                                                                                                                                                                                   | An Algod client to perform the simulation.                |
| `options?` | `Omit`\<\{ `allowEmptySignatures?`: `boolean` ; `allowMoreLogging?`: `boolean` ; `allowUnnamedResources?`: `boolean` ; `execTraceConfig?`: `SimulateTraceConfig` ; `extraOpcodeBudget?`: `number` \| `bigint` ; `fixSigners?`: `boolean` ; `round?`: `number` \| `bigint` ; `txnGroups`: `SimulateRequestTransactionGroup`[] }, `"txnGroups"`\> | -                                                         |

#### Returns

`Promise`\<`SimulateResponse`\>

The simulation result, which includes various details about how the transactions would be processed.

#### Defined in

[src/transaction/perform-atomic-transaction-composer-simulate.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/perform-atomic-transaction-composer-simulate.ts#L14)

---

### performTemplateSubstitution

▸ **performTemplateSubstitution**(`tealCode`, `templateParams?`): `string`

#### Parameters

| Name              | Type                                                                                            | Description                                                  |
| :---------------- | :---------------------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| `tealCode`        | `string`                                                                                        | The TEAL logic to compile                                    |
| `templateParams?` | [`TealTemplateParams`](/reference/algokit-utils-ts/api/interfaces/types_apptealtemplateparams/) | Any parameters to replace in the .teal file before compiling |

#### Returns

`string`

The TEAL code with replacements

**`Deprecated`**

Use `AppManager.replaceTealTemplateParams` instead

Performs template substitution of a teal file.

Looks for `TMPL_{parameter}` for template replacements.

#### Defined in

[src/app-deploy.ts:309](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-deploy.ts#L309)

---

### performTemplateSubstitutionAndCompile

▸ **performTemplateSubstitutionAndCompile**(`tealCode`, `algod`, `templateParams?`, `deploymentMetadata?`): `Promise`\<[`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/)\>

#### Parameters

| Name                  | Type                                                                                            | Description                                                  |
| :-------------------- | :---------------------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| `tealCode`            | `string`                                                                                        | The TEAL logic to compile                                    |
| `algod`               | `AlgodClient`                                                                                   | An algod client                                              |
| `templateParams?`     | [`TealTemplateParams`](/reference/algokit-utils-ts/api/interfaces/types_apptealtemplateparams/) | Any parameters to replace in the .teal file before compiling |
| `deploymentMetadata?` | [`AppDeployMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/)   | The deployment metadata the app will be deployed with        |

#### Returns

`Promise`\<[`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/)\>

The information about the compiled code

**`Deprecated`**

Use `algorand.appManager.compileTealTemplate` instead.

Performs template substitution of a teal file and compiles it, returning the compiled result.

Looks for `TMPL_{parameter}` for template replacements.

#### Defined in

[src/app-deploy.ts:326](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-deploy.ts#L326)

---

### persistSourceMaps

▸ **persistSourceMaps**(`_params`): `Promise`\<`void`\>

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `_params` | `unknown` |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the source maps have been persisted.

**`Deprecated`**

Use latest version of `AlgoKit AVM Debugger` VSCode extension instead. It will automatically manage your sourcemaps.

This function persists the source maps for the given sources.

#### Defined in

[src/debugging/debugging.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/debugging/debugging.ts#L8)

---

### populateAppCallResources

▸ **populateAppCallResources**(`atc`, `algod`): `Promise`\<`AtomicTransactionComposer`\>

Take an existing Atomic Transaction Composer and return a new one with the required
app call resources populated into it

#### Parameters

| Name    | Type                        | Description                                |
| :------ | :-------------------------- | :----------------------------------------- |
| `atc`   | `AtomicTransactionComposer` | The ATC containing the txn group           |
| `algod` | `AlgodClient`               | The algod client to use for the simulation |

#### Returns

`Promise`\<`AtomicTransactionComposer`\>

A new ATC with the resources populated into the transactions

#### Defined in

[src/transaction/transaction.ts:388](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L388)

---

### prepareGroupForSending

▸ **prepareGroupForSending**(`atc`, `algod`, `sendParams`, `additionalAtcContext?`): `Promise`\<`AtomicTransactionComposer`\>

Take an existing Atomic Transaction Composer and return a new one with changes applied to the transactions
based on the supplied sendParams to prepare it for sending.
Please note, that before calling `.execute()` on the returned ATC, you must call `.buildGroup()`.

#### Parameters

| Name                    | Type                                                                                                                                                    | Description                                                                               |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------- |
| `atc`                   | `AtomicTransactionComposer`                                                                                                                             | The ATC containing the txn group                                                          |
| `algod`                 | `AlgodClient`                                                                                                                                           | The algod client to use for the simulation                                                |
| `sendParams`            | [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)                                                                 | The send params for the transaction group                                                 |
| `additionalAtcContext?` | [`AdditionalAtomicTransactionComposerContext`](/reference/algokit-utils-ts/api/interfaces/types_transactionadditionalatomictransactioncomposercontext/) | Additional ATC context used to determine how best to change the transactions in the group |

#### Returns

`Promise`\<`AtomicTransactionComposer`\>

A new ATC with the changes applied

#### Defined in

[src/transaction/transaction.ts:407](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L407)

---

### randomAccount

▸ **randomAccount**(): `Account`

#### Returns

`Account`

**`Deprecated`**

Use `algorand.account.random()` or `algosdk.generateAccount()` instead.

Returns a new, random Algorand account with secret key loaded.

This is a wrapper around algosdk.generateAccount to provide a more friendly/obvious name.

#### Defined in

[src/account/account.ts:60](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/account.ts#L60)

---

### rekeyAccount

▸ **rekeyAccount**(`rekey`, `algod`): `Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)\>

#### Parameters

| Name    | Type                                                                                           | Description          |
| :------ | :--------------------------------------------------------------------------------------------- | :------------------- |
| `rekey` | [`AlgoRekeyParams`](/reference/algokit-utils-ts/api/interfaces/types_transferalgorekeyparams/) | The rekey definition |
| `algod` | `AlgodClient`                                                                                  | An algod client      |

#### Returns

`Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

**`Deprecated`**

Use `algorand.account.rekeyAccount()` instead

Rekey an account to a new address.

**Note:** Please be careful with this function and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).

**`Example`**

```typescript
await algokit.rekeyAccount({ from, rekeyTo }, algod);
```

#### Defined in

[src/transfer/transfer.ts:125](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transfer/transfer.ts#L125)

---

### rekeyedAccount

▸ **rekeyedAccount**(`signer`, `sender`): [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)

#### Parameters

| Name     | Type      | Description                                                  |
| :------- | :-------- | :----------------------------------------------------------- |
| `signer` | `default` | The account, with private key loaded, that is signing        |
| `sender` | `string`  | The address of the rekeyed account that will act as a sender |

#### Returns

[`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/)

The SigningAccount wrapper

**`Deprecated`**

Use `algorand.account.rekeyed(sender, account)` or `new SigningAccount(account, sender)` instead.

Returns an account wrapper that supports a rekeyed account.

#### Defined in

[src/account/account.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/account.ts#L36)

---

### replaceDeployTimeControlParams

▸ **replaceDeployTimeControlParams**(`tealCode`, `params`): `string`

#### Parameters

| Name                | Type      | Description                                                   |
| :------------------ | :-------- | :------------------------------------------------------------ |
| `tealCode`          | `string`  | The TEAL code to substitute                                   |
| `params`            | `Object`  | The deploy-time deployment control parameter value to replace |
| `params.deletable?` | `boolean` | -                                                             |
| `params.updatable?` | `boolean` | -                                                             |

#### Returns

`string`

The replaced TEAL code

**`Deprecated`**

Use `AppManager.replaceTealTemplateDeployTimeControlParams` instead

Replaces deploy-time deployment control parameters within the given teal code.

- `TMPL_UPDATABLE` for updatability / immutability control
- `TMPL_DELETABLE` for deletability / permanence control

Note: If these values are not undefined, but the corresponding `TMPL_*` value
isn't in the teal code it will throw an exception.

#### Defined in

[src/app-deploy.ts:294](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-deploy.ts#L294)

---

### sendAtomicTransactionComposer

▸ **sendAtomicTransactionComposer**(`atcSend`, `algod`): `Promise`\<[`SendAtomicTransactionComposerResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/)\>

Signs and sends transactions that have been collected by an `AtomicTransactionComposer`.

#### Parameters

| Name      | Type                                                                                                                              | Description                                                                                                               |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| `atcSend` | [`AtomicTransactionComposerToSend`](/reference/algokit-utils-ts/api/interfaces/types_transactionatomictransactioncomposertosend/) | The parameters controlling the send, including `atc` The `AtomicTransactionComposer` and params to control send behaviour |
| `algod`   | `AlgodClient`                                                                                                                     | An algod client                                                                                                           |

#### Returns

`Promise`\<[`SendAtomicTransactionComposerResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/)\>

An object with transaction IDs, transactions, group transaction ID (`groupTransactionId`) if more than 1 transaction sent, and (if `skipWaiting` is `false` or unset) confirmation (`confirmation`)

#### Defined in

[src/transaction/transaction.ts:782](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L782)

---

### sendGroupOfTransactions

▸ **sendGroupOfTransactions**(`groupSend`, `algod`): `Promise`\<`Omit`\<[`SendAtomicTransactionComposerResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/), `"returns"`\>\>

#### Parameters

| Name        | Type                                                                                                            | Description                                                                                                                                                                           |
| :---------- | :-------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `groupSend` | [`TransactionGroupToSend`](/reference/algokit-utils-ts/api/interfaces/types_transactiontransactiongrouptosend/) | The group details to send, with: _ `transactions`: The array of transactions to send along with their signing account _ `sendParams`: The parameters to dictate how the group is sent |
| `algod`     | `AlgodClient`                                                                                                   | An algod client                                                                                                                                                                       |

#### Returns

`Promise`\<`Omit`\<[`SendAtomicTransactionComposerResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/), `"returns"`\>\>

An object with transaction IDs, transactions, group transaction ID (`groupTransactionId`) if more than 1 transaction sent, and (if `skipWaiting` is `false` or unset) confirmation (`confirmation`)

**`Deprecated`**

Use `TransactionComposer` (`algorand.newGroup()`) or `AtomicTransactionComposer` to construct and send group transactions instead.

Signs and sends a group of [up to 16](https://dev.algorand.co/concepts/transactions/atomic-txn-groups/#create-transactions) transactions to the chain

#### Defined in

[src/transaction/transaction.ts:955](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L955)

---

### sendTransaction

▸ **sendTransaction**(`send`, `algod`): `Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)\>

#### Parameters

| Name               | Type                                                                                                          | Description                                                                                                                                                                                                                                                                                  |
| :----------------- | :------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `send`             | `Object`                                                                                                      | The details for the transaction to prepare/send, including: _ `transaction`: The unsigned transaction _ `from`: The account to sign the transaction with: either an account with private key loaded or a logic signature account \* `config`: The sending configuration for this transaction |
| `send.from`        | [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)       | -                                                                                                                                                                                                                                                                                            |
| `send.sendParams?` | [`SendTransactionParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/) | -                                                                                                                                                                                                                                                                                            |
| `send.transaction` | `Transaction`                                                                                                 | -                                                                                                                                                                                                                                                                                            |
| `algod`            | `AlgodClient`                                                                                                 | An algod client                                                                                                                                                                                                                                                                              |

#### Returns

`Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)\>

An object with transaction (`transaction`) and (if `skipWaiting` is `false` or `undefined`) confirmation (`confirmation`)

**`Deprecated`**

Use `AlgorandClient` / `TransactionComposer` to send transactions.

Prepares a transaction for sending and then (if instructed) signs and sends the given transaction to the chain.

#### Defined in

[src/transaction/transaction.ts:215](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L215)

---

### signTransaction

▸ **signTransaction**(`transaction`, `signer`): `Promise`\<`Uint8Array`\>

#### Parameters

| Name          | Type                                                                                                    | Description             |
| :------------ | :------------------------------------------------------------------------------------------------------ | :---------------------- |
| `transaction` | `Transaction`                                                                                           | The transaction to sign |
| `signer`      | [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom) | The signer to sign      |

#### Returns

`Promise`\<`Uint8Array`\>

The signed transaction as a `Uint8Array`

**`Deprecated`**

Use `AlgorandClient` / `TransactionComposer` to sign transactions
or use the relevant underlying `account.signTxn` / `algosdk.signLogicSigTransactionObject`
/ `multiSigAccount.sign` / `TransactionSigner` methods directly.

Signs a single transaction by the given signer.

#### Defined in

[src/transaction/transaction.ts:192](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L192)

---

### stripTealComments

▸ **stripTealComments**(`tealCode`): `string`

#### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `tealCode` | `string` | The TEAL logic to compile |

#### Returns

`string`

The TEAL without comments

**`Deprecated`**

Use `AppManager.stripTealComments` instead.

Remove comments from TEAL Code

#### Defined in

[src/app-deploy.ts:351](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app-deploy.ts#L351)

---

### transactionFees

▸ **transactionFees**(`numberOfTransactions`): [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

Returns an amount of µAlgo to cover standard fees for the given number of transactions using AlgoAmount

#### Parameters

| Name                   | Type     | Description                                                   |
| :--------------------- | :------- | :------------------------------------------------------------ |
| `numberOfTransactions` | `number` | The of standard transaction fees to return the amount of Algo |

#### Returns

[`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

#### Defined in

[src/amount.ts:89](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L89)

---

### transactionSignerAccount

▸ **transactionSignerAccount**(`signer`, `sender`): [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/)

#### Parameters

| Name     | Type                | Description                   |
| :------- | :------------------ | :---------------------------- |
| `signer` | `TransactionSigner` | The transaction signer        |
| `sender` | `string`            | The address of sender account |

#### Returns

[`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/)

The SigningAccount wrapper

**`Deprecated`**

Use `algorand.account.getSigner(sender)` (after previously registering the signer with `setSigner`) or `{ addr: sender, signer }` instead.

Returns an account wrapper that supports a transaction signer with associated sender address.

#### Defined in

[src/account/account.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/account.ts#L48)

---

### transferAlgos

▸ **transferAlgos**(`transfer`, `algod`): `Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)\>

#### Parameters

| Name       | Type                                                                                                 | Description             |
| :--------- | :--------------------------------------------------------------------------------------------------- | :---------------------- |
| `transfer` | [`AlgoTransferParams`](/reference/algokit-utils-ts/api/interfaces/types_transferalgotransferparams/) | The transfer definition |
| `algod`    | `AlgodClient`                                                                                        | An algod client         |

#### Returns

`Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

**`Deprecated`**

Use `algorand.send.payment()` / `algorand.createTransaction.payment()` instead

Transfer Algo between two accounts.

**`Example`**

```typescript
await algokit.transferAlgos({ from, to, amount: algokit.algo(1) }, algod);
```

#### Defined in

[src/transfer/transfer-algos.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transfer/transfer-algos.ts#L22)

---

### transferAsset

▸ **transferAsset**(`transfer`, `algod`): `Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)\>

#### Parameters

| Name       | Type                                                                                                   | Description             |
| :--------- | :----------------------------------------------------------------------------------------------------- | :---------------------- |
| `transfer` | [`TransferAssetParams`](/reference/algokit-utils-ts/api/interfaces/types_transfertransferassetparams/) | The transfer definition |
| `algod`    | `AlgodClient`                                                                                          | An algod client         |

#### Returns

`Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

**`Deprecated`**

Use `algorand.send.assetTransfer()` / `algorand.createTransaction.assetTransfer()` instead

Transfer asset between two accounts.

**`Example`**

```typescript
await algokit.transferAsset({ from, to, assetId, amount }, algod);
```

#### Defined in

[src/transfer/transfer.ts:90](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transfer/transfer.ts#L90)

---

### updateApp

▸ **updateApp**(`update`, `algod`): `Promise`\<`Partial`\<[`AppCompilationResult`](/reference/algokit-utils-ts/api/interfaces/types_appappcompilationresult/)\> & [`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult)\>

#### Parameters

| Name     | Type                                                                                      | Description                           |
| :------- | :---------------------------------------------------------------------------------------- | :------------------------------------ |
| `update` | [`UpdateAppParams`](/reference/algokit-utils-ts/api/interfaces/types_appupdateappparams/) | The parameters to update the app with |
| `algod`  | `AlgodClient`                                                                             | An algod client                       |

#### Returns

`Promise`\<`Partial`\<[`AppCompilationResult`](/reference/algokit-utils-ts/api/interfaces/types_appappcompilationresult/)\> & [`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult)\>

The transaction send result and the compilation result

**`Deprecated`**

Use `algorand.send.appUpdate()` / `algorand.createTransaction.appUpdate()` / `algorand.send.appUpdateMethodCall()`
/ `algorand.createTransaction.appUpdateMethodCall()` instead

Updates a smart contract app.

#### Defined in

[src/app.ts:104](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L104)

---

### waitForConfirmation

▸ **waitForConfirmation**(`transactionId`, `maxRoundsToWait`, `algod`): `Promise`\<`PendingTransactionResponse`\>

Wait until the transaction is confirmed or rejected, or until `timeout`
number of rounds have passed.

#### Parameters

| Name              | Type                 | Description                      |
| :---------------- | :------------------- | :------------------------------- |
| `transactionId`   | `string`             | The transaction ID to wait for   |
| `maxRoundsToWait` | `number` \| `bigint` | Maximum number of rounds to wait |
| `algod`           | `AlgodClient`        | An algod client                  |

#### Returns

`Promise`\<`PendingTransactionResponse`\>

Pending transaction information

**`Throws`**

Throws an error if the transaction is not confirmed or rejected in the next `timeout` rounds

#### Defined in

[src/transaction/transaction.ts:999](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L999)
