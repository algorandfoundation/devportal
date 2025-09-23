---
title: types/composer
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / types/composer



## Table of contents

### Classes

- [TransactionComposer](/reference/algokit-utils-ts/api/classes/types_composertransactioncomposer/)

### Interfaces

- [BuiltTransactions](/reference/algokit-utils-ts/api/interfaces/types_composerbuilttransactions/)

### Type Aliases

- [AppCallMethodCall](#appcallmethodcall)
- [AppCallParams](#appcallparams)
- [AppCreateMethodCall](#appcreatemethodcall)
- [AppCreateParams](#appcreateparams)
- [AppDeleteMethodCall](#appdeletemethodcall)
- [AppDeleteParams](#appdeleteparams)
- [AppMethodCall](#appmethodcall)
- [AppMethodCallParams](#appmethodcallparams)
- [AppMethodCallTransactionArgument](#appmethodcalltransactionargument)
- [AppUpdateMethodCall](#appupdatemethodcall)
- [AppUpdateParams](#appupdateparams)
- [AssetConfigParams](#assetconfigparams)
- [AssetCreateParams](#assetcreateparams)
- [AssetDestroyParams](#assetdestroyparams)
- [AssetFreezeParams](#assetfreezeparams)
- [AssetOptInParams](#assetoptinparams)
- [AssetOptOutParams](#assetoptoutparams)
- [AssetTransferParams](#assettransferparams)
- [CommonAppCallParams](#commonappcallparams)
- [CommonTransactionParams](#commontransactionparams)
- [ErrorTransformer](#errortransformer)
- [OfflineKeyRegistrationParams](#offlinekeyregistrationparams)
- [OnlineKeyRegistrationParams](#onlinekeyregistrationparams)
- [PaymentParams](#paymentparams)
- [RawSimulateOptions](#rawsimulateoptions)
- [SimulateOptions](#simulateoptions)
- [SkipSignaturesSimulateOptions](#skipsignaturessimulateoptions)
- [TransactionComposerParams](#transactioncomposerparams)
- [Txn](#txn)

### Variables

- [MAX\_TRANSACTION\_GROUP\_SIZE](#max_transaction_group_size)

## Type Aliases

### AppCallMethodCall

Ƭ **AppCallMethodCall**: [`AppMethodCall`](#appmethodcall)\<[`AppMethodCallParams`](#appmethodcallparams)\>

Parameters to define an ABI method call transaction.

#### Defined in

[src/types/composer.ts:426](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L426)

___

### AppCallParams

Ƭ **AppCallParams**: [`CommonAppCallParams`](#commonappcallparams) & \{ `onComplete?`: `Exclude`\<`algosdk.OnApplicationComplete`, `algosdk.OnApplicationComplete.UpdateApplicationOC`\>  }

Parameters to define an application call transaction.

#### Defined in

[src/types/composer.ts:402](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L402)

___

### AppCreateMethodCall

Ƭ **AppCreateMethodCall**: [`AppMethodCall`](#appmethodcall)\<[`AppCreateParams`](#appcreateparams)\>

Parameters to define an ABI method call create transaction.

#### Defined in

[src/types/composer.ts:420](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L420)

___

### AppCreateParams

Ƭ **AppCreateParams**: [`Expand`](#expand)\<`Omit`\<[`CommonAppCallParams`](#commonappcallparams), ``"appId"``\> & \{ `approvalProgram`: `string` \| `Uint8Array` ; `clearStateProgram`: `string` \| `Uint8Array` ; `extraProgramPages?`: `number` ; `onComplete?`: `Exclude`\<`algosdk.OnApplicationComplete`, `algosdk.OnApplicationComplete.ClearStateOC`\> ; `schema?`: \{ `globalByteSlices`: `number` ; `globalInts`: `number` ; `localByteSlices`: `number` ; `localInts`: `number`  }  }\>

Parameters to define an app create transaction

#### Defined in

[src/types/composer.ts:365](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L365)

___

### AppDeleteMethodCall

Ƭ **AppDeleteMethodCall**: [`AppMethodCall`](#appmethodcall)\<[`AppDeleteParams`](#appdeleteparams)\>

Parameters to define an ABI method call delete transaction.

#### Defined in

[src/types/composer.ts:424](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L424)

___

### AppDeleteParams

Ƭ **AppDeleteParams**: [`CommonAppCallParams`](#commonappcallparams) & \{ `onComplete?`: `algosdk.OnApplicationComplete.DeleteApplicationOC`  }

Parameters to define an application delete call transaction.

#### Defined in

[src/types/composer.ts:415](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L415)

___

### AppMethodCall

Ƭ **AppMethodCall**\<`T`\>: [`Expand`](#expand)\<`Omit`\<`T`, ``"args"``\>\> & \{ `args?`: (`algosdk.ABIValue` \| `TransactionWithSigner` \| `Transaction` \| `Promise`\<`Transaction`\> \| [`AppMethodCall`](#appmethodcall)\<[`AppCreateParams`](#appcreateparams)\> \| [`AppMethodCall`](#appmethodcall)\<[`AppUpdateParams`](#appupdateparams)\> \| [`AppMethodCall`](#appmethodcall)\<[`AppMethodCallParams`](#appmethodcallparams)\> \| `undefined`)[] ; `method`: `algosdk.ABIMethod`  }

Parameters to define an ABI method call.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/composer.ts:439](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L439)

___

### AppMethodCallParams

Ƭ **AppMethodCallParams**: [`CommonAppCallParams`](#commonappcallparams) & \{ `onComplete?`: `Exclude`\<`algosdk.OnApplicationComplete`, `algosdk.OnApplicationComplete.UpdateApplicationOC` \| `algosdk.OnApplicationComplete.ClearStateOC`\>  }

Common parameters to define an ABI method call transaction.

#### Defined in

[src/types/composer.ts:407](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L407)

___

### AppMethodCallTransactionArgument

Ƭ **AppMethodCallTransactionArgument**: `TransactionWithSigner` \| `Transaction` \| `Promise`\<`Transaction`\> \| [`AppMethodCall`](#appmethodcall)\<[`AppCreateParams`](#appcreateparams)\> \| [`AppMethodCall`](#appmethodcall)\<[`AppUpdateParams`](#appupdateparams)\> \| [`AppMethodCall`](#appmethodcall)\<[`AppMethodCallParams`](#appmethodcallparams)\>

Types that can be used to define a transaction argument for an ABI call transaction.

#### Defined in

[src/types/composer.ts:429](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L429)

___

### AppUpdateMethodCall

Ƭ **AppUpdateMethodCall**: [`AppMethodCall`](#appmethodcall)\<[`AppUpdateParams`](#appupdateparams)\>

Parameters to define an ABI method call update transaction.

#### Defined in

[src/types/composer.ts:422](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L422)

___

### AppUpdateParams

Ƭ **AppUpdateParams**: [`Expand`](#expand)\<[`CommonAppCallParams`](#commonappcallparams) & \{ `approvalProgram`: `string` \| `Uint8Array` ; `clearStateProgram`: `string` \| `Uint8Array` ; `onComplete?`: `algosdk.OnApplicationComplete.UpdateApplicationOC`  }\>

Parameters to define an app update transaction

#### Defined in

[src/types/composer.ts:391](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L391)

___

### AssetConfigParams

Ƭ **AssetConfigParams**: [`CommonTransactionParams`](#commontransactionparams) & \{ `assetId`: `bigint` ; `clawback?`: `string` \| `Address` ; `freeze?`: `string` \| `Address` ; `manager`: `string` \| `Address` \| `undefined` ; `reserve?`: `string` \| `Address`  }

Parameters to define an asset reconfiguration transaction.

**Note:** The manager, reserve, freeze, and clawback addresses
are immutably empty if they are not set. If manager is not set then
all fields are immutable from that point forward.

#### Defined in

[src/types/composer.ts:218](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L218)

___

### AssetCreateParams

Ƭ **AssetCreateParams**: [`CommonTransactionParams`](#commontransactionparams) & \{ `assetName?`: `string` ; `clawback?`: `string` \| `Address` ; `decimals?`: `number` ; `defaultFrozen?`: `boolean` ; `freeze?`: `string` \| `Address` ; `manager?`: `string` \| `Address` ; `metadataHash?`: `string` \| `Uint8Array` ; `reserve?`: `string` \| `Address` ; `total`: `bigint` ; `unitName?`: `string` ; `url?`: `string`  }

Parameters to define an asset create transaction.

The account that sends this transaction will automatically be opted in to the asset and will hold all units after creation.

#### Defined in

[src/types/composer.ts:102](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L102)

___

### AssetDestroyParams

Ƭ **AssetDestroyParams**: [`CommonTransactionParams`](#commontransactionparams) & \{ `assetId`: `bigint`  }

Parameters to define an asset destroy transaction.

Created assets can be destroyed only by the asset manager account. All of the assets must be owned by the creator of the asset before the asset can be deleted.

#### Defined in

[src/types/composer.ts:276](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L276)

___

### AssetFreezeParams

Ƭ **AssetFreezeParams**: [`CommonTransactionParams`](#commontransactionparams) & \{ `account`: `string` \| `Address` ; `assetId`: `bigint` ; `frozen`: `boolean`  }

Parameters to define an asset freeze transaction.

#### Defined in

[src/types/composer.ts:263](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L263)

___

### AssetOptInParams

Ƭ **AssetOptInParams**: [`CommonTransactionParams`](#commontransactionparams) & \{ `assetId`: `bigint`  }

Parameters to define an asset opt-in transaction.

#### Defined in

[src/types/composer.ts:304](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L304)

___

### AssetOptOutParams

Ƭ **AssetOptOutParams**: [`CommonTransactionParams`](#commontransactionparams) & \{ `assetId`: `bigint` ; `creator`: `string` \| `Address`  }

Parameters to define an asset opt-out transaction.

#### Defined in

[src/types/composer.ts:310](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L310)

___

### AssetTransferParams

Ƭ **AssetTransferParams**: [`CommonTransactionParams`](#commontransactionparams) & \{ `amount`: `bigint` ; `assetId`: `bigint` ; `clawbackTarget?`: `string` \| `Address` ; `closeAssetTo?`: `string` \| `Address` ; `receiver`: `string` \| `Address`  }

Parameters to define an asset transfer transaction.

#### Defined in

[src/types/composer.ts:282](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L282)

___

### CommonAppCallParams

Ƭ **CommonAppCallParams**: [`CommonTransactionParams`](#commontransactionparams) & \{ `accountReferences?`: (`string` \| `Address`)[] ; `appId`: `bigint` ; `appReferences?`: `bigint`[] ; `args?`: `Uint8Array`[] ; `assetReferences?`: `bigint`[] ; `boxReferences?`: ([`BoxReference`](/reference/algokit-utils-ts/api/interfaces/types_app_managerboxreference/) \| [`BoxIdentifier`](#boxidentifier))[] ; `onComplete?`: `algosdk.OnApplicationComplete`  }

Common parameters for defining an application call transaction.

#### Defined in

[src/types/composer.ts:343](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L343)

___

### CommonTransactionParams

Ƭ **CommonTransactionParams**: `Object`

Common parameters for defining a transaction.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `extraFee?` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | The fee to pay IN ADDITION to the suggested fee. Useful for manually covering inner transaction fees. |
| `firstValidRound?` | `bigint` | Set the first round this transaction is valid. If left undefined, the value from algod will be used. We recommend you only set this when you intentionally want this to be some time in the future. |
| `lastValidRound?` | `bigint` | The last round this transaction is valid. It is recommended to use `validityWindow` instead. |
| `lease?` | `Uint8Array` \| `string` | Prevent multiple transactions with the same lease being included within the validity window. A [lease](https://dev.algorand.co/concepts/transactions/leases) enforces a mutually exclusive transaction (useful to prevent double-posting and other scenarios). |
| `maxFee?` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | Throw an error if the fee for the transaction is more than this amount; prevents overspending on fees during high congestion periods. |
| `note?` | `Uint8Array` \| `string` | Note to attach to the transaction. Max of 1000 bytes. |
| `rekeyTo?` | `string` \| `Address` | Change the signing key of the sender to the given address. **Warning:** Please be careful with this parameter and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying). |
| `sender` | `string` \| `Address` | The address of the account sending the transaction. |
| `signer?` | `algosdk.TransactionSigner` \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) | The function used to sign transaction(s); if not specified then an attempt will be made to find a registered signer for the given `sender` or use a default signer (if configured). |
| `staticFee?` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) | The static transaction fee. In most cases you want to use `extraFee` unless setting the fee to 0 to be covered by another transaction. |
| `validityWindow?` | `number` \| `bigint` | How many rounds the transaction should be valid for, if not specified then the registered default validity window will be used. |

#### Defined in

[src/types/composer.ts:45](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L45)

___

### ErrorTransformer

Ƭ **ErrorTransformer**: (`error`: `Error`) => `Promise`\<`Error`\>

A function that transforms an error into a new error.

In most cases, an ErrorTransformer should first check if it can or should transform the error
and return the input error if it cannot or should not transform it.

#### Type declaration

▸ (`error`): `Promise`\<`Error`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

##### Returns

`Promise`\<`Error`\>

#### Defined in

[src/types/composer.ts:484](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L484)

___

### OfflineKeyRegistrationParams

Ƭ **OfflineKeyRegistrationParams**: [`CommonTransactionParams`](#commontransactionparams) & \{ `preventAccountFromEverParticipatingAgain?`: `boolean`  }

Parameters to define an offline key registration transaction.

#### Defined in

[src/types/composer.ts:337](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L337)

___

### OnlineKeyRegistrationParams

Ƭ **OnlineKeyRegistrationParams**: [`CommonTransactionParams`](#commontransactionparams) & \{ `selectionKey`: `Uint8Array` ; `stateProofKey?`: `Uint8Array` ; `voteFirst`: `bigint` ; `voteKey`: `Uint8Array` ; `voteKeyDilution`: `bigint` ; `voteLast`: `bigint`  }

Parameters to define an online key registration transaction.

#### Defined in

[src/types/composer.ts:321](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L321)

___

### PaymentParams

Ƭ **PaymentParams**: [`CommonTransactionParams`](#commontransactionparams) & \{ `amount`: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) ; `closeRemainderTo?`: `string` \| `Address` ; `receiver`: `string` \| `Address`  }

Parameters to define a payment transaction.

#### Defined in

[src/types/composer.ts:86](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L86)

___

### RawSimulateOptions

Ƭ **RawSimulateOptions**: [`Expand`](#expand)\<`Omit`\<`ConstructorParameters`\<typeof `modelsv2.SimulateRequest`\>[``0``], ``"txnGroups"``\>\>

The raw API options to control a simulate request.
See algod API docs for more information: https://dev.algorand.co/reference/rest-apis/algod/#simulatetransaction

#### Defined in

[src/types/composer.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L39)

___

### SimulateOptions

Ƭ **SimulateOptions**: [`Expand`](#expand)\<`Partial`\<[`SkipSignaturesSimulateOptions`](#skipsignaturessimulateoptions)\> & [`RawSimulateOptions`](#rawsimulateoptions)\>

All options to control a simulate request

#### Defined in

[src/types/composer.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L42)

___

### SkipSignaturesSimulateOptions

Ƭ **SkipSignaturesSimulateOptions**: [`Expand`](#expand)\<`Omit`\<[`RawSimulateOptions`](#rawsimulateoptions), ``"fixSigners"`` \| ``"allowEmptySignatures"``\> & \{ `skipSignatures`: `boolean`  }\>

Options to control a simulate request, that does not require transaction signing

#### Defined in

[src/types/composer.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L27)

___

### TransactionComposerParams

Ƭ **TransactionComposerParams**: `Object`

Parameters to create an `TransactionComposer`.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `algod` | `algosdk.Algodv2` | The algod client to use to get suggestedParams and send the transaction group |
| `appManager?` | [`AppManager`](/reference/algokit-utils-ts/api/classes/types_app_managerappmanager/) | An existing `AppManager` to use to manage app compilation and cache compilation results. If not specified then an ephemeral one will be created. |
| `defaultValidityWindow?` | `bigint` | How many rounds a transaction should be valid for by default; if not specified then will be 10 rounds (or 1000 rounds if issuing transactions to LocalNet). |
| `errorTransformers?` | [`ErrorTransformer`](#errortransformer)[] | An array of error transformers to use when an error is caught in simulate or execute callbacks can later be registered with `registerErrorTransformer` |
| `getSigner` | (`address`: `string` \| `Address`) => `algosdk.TransactionSigner` | - |
| `getSuggestedParams?` | () => `Promise`\<`algosdk.SuggestedParams`\> | - |

#### Defined in

[src/types/composer.ts:499](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L499)

___

### Txn

Ƭ **Txn**: [`PaymentParams`](#paymentparams) & \{ `type`: ``"pay"``  } \| [`AssetCreateParams`](#assetcreateparams) & \{ `type`: ``"assetCreate"``  } \| [`AssetConfigParams`](#assetconfigparams) & \{ `type`: ``"assetConfig"``  } \| [`AssetFreezeParams`](#assetfreezeparams) & \{ `type`: ``"assetFreeze"``  } \| [`AssetDestroyParams`](#assetdestroyparams) & \{ `type`: ``"assetDestroy"``  } \| [`AssetTransferParams`](#assettransferparams) & \{ `type`: ``"assetTransfer"``  } \| [`AssetOptInParams`](#assetoptinparams) & \{ `type`: ``"assetOptIn"``  } \| [`AssetOptOutParams`](#assetoptoutparams) & \{ `type`: ``"assetOptOut"``  } \| [`AppCallParams`](#appcallparams) \| [`AppCreateParams`](#appcreateparams) \| [`AppUpdateParams`](#appupdateparams) & \{ `type`: ``"appCall"``  } \| [`OnlineKeyRegistrationParams`](#onlinekeyregistrationparams) \| [`OfflineKeyRegistrationParams`](#offlinekeyregistrationparams) & \{ `type`: ``"keyReg"``  } \| `algosdk.TransactionWithSigner` & \{ `type`: ``"txnWithSigner"``  } \| \{ `atc`: `algosdk.AtomicTransactionComposer` ; `type`: ``"atc"``  } \| [`AppCallMethodCall`](#appcallmethodcall) \| [`AppCreateMethodCall`](#appcreatemethodcall) \| [`AppUpdateMethodCall`](#appupdatemethodcall) & \{ `type`: ``"methodCall"``  }

#### Defined in

[src/types/composer.ts:463](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L463)

## Variables

### MAX\_TRANSACTION\_GROUP\_SIZE

• `Const` **MAX\_TRANSACTION\_GROUP\_SIZE**: ``16``

#### Defined in

[src/types/composer.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/composer.ts#L24)