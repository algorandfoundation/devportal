---
editUrl: false
next: false
prev: false
title: "AppDeployer"
---

Defined in: [src/types/app-deployer.ts:112](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L112)

Allows management of deployment and deployment metadata of applications.

## Constructors

### Constructor

> **new AppDeployer**(`appManager`, `transactionSender`, `indexer?`): `AppDeployer`

Defined in: [src/types/app-deployer.ts:128](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L128)

Creates an `AppManager`

#### Parameters

##### appManager

[`AppManager`](/docs/algokit-utils/typescript/latest/api/types/app-manager/classes/appmanager/)

An `AppManager` instance

##### transactionSender

[`AlgorandClientTransactionSender`](/docs/algokit-utils/typescript/latest/api/types/algorand-client-transaction-sender/classes/algorandclienttransactionsender/)

An `AlgorandClientTransactionSender` instance

##### indexer?

`IndexerClient`

An optional indexer instance; supply if you want to indexer to look up app metadata

#### Returns

`AppDeployer`

#### Example

```ts
const deployer = new AppDeployer(appManager, transactionSender, indexer)
```

## Methods

### deploy()

> **deploy**(`deployment`): `Promise`\<[`AppDeployResult`](/docs/algokit-utils/typescript/latest/api/types/app-deployer/type-aliases/appdeployresult/)\>

Defined in: [src/types/app-deployer.ts:172](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L172)

Idempotently deploy (create if not exists, update if changed) an app against the given name for the given creator account, including deploy-time TEAL template placeholder substitutions (if specified).

To understand the architecture decisions behind this functionality please see https://github.com/algorandfoundation/algokit-cli/blob/main/docs/src/content/docs/architecture-decisions/2023-01-12_smart-contract-deployment.md

**Note:** When using the return from this function be sure to check `operationPerformed` to get access to various return properties like `transaction`, `confirmation` and `deleteResult`.

**Note:** if there is a breaking state schema change to an existing app (and `onSchemaBreak` is set to `'replace'`) the existing app will be deleted and re-created.

**Note:** if there is an update (different TEAL code) to an existing app (and `onUpdate` is set to `'replace'`) the existing app will be deleted and re-created.

#### Parameters

##### deployment

The arguments to control the app deployment

###### coverAppCallInnerTransactionFees?

`boolean`

Whether to use simulate to automatically calculate required app call inner transaction fees and cover them in the parent app call transaction fee

###### createParams

\{ `accessReferences?`: [`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]; `accountReferences?`: (`string` \| `Address`)[]; `appReferences?`: `bigint`[]; `approvalProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `args?`: `Uint8Array`\<`ArrayBufferLike`\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: ([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]; `clearStateProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `extraFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `extraProgramPages?`: `number`; `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC`; `rejectVersion?`: `number`; `rekeyTo?`: `string` \| `Address`; `schema?`: \{ `globalByteSlices`: `number`; `globalInts`: `number`; `localByteSlices`: `number`; `localInts`: `number`; \}; `sender`: `string` \| `Address`; `signer?`: [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`; `staticFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \} \| [`AppCreateMethodCall`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appcreatemethodcall/)

Create transaction parameters to use if a create needs to be issued as part of deployment

###### deleteParams

\{ `accessReferences?`: [`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]; `accountReferences?`: (`string` \| `Address`)[]; `appReferences?`: `bigint`[]; `args?`: `Uint8Array`\<`ArrayBufferLike`\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: ([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]; `extraFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: `DeleteApplicationOC`; `rejectVersion?`: `number`; `rekeyTo?`: `string` \| `Address`; `sender`: `string` \| `Address`; `signer?`: [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`; `staticFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \} \| \{ `accessReferences?`: [`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]; `accountReferences?`: (`string` \| `Address`)[]; `appReferences?`: `bigint`[]; `args?`: (`Transaction` \| `Promise`\<`Transaction`\> \| `ABIValue` \| `TransactionWithSigner` \| [`AppMethodCall`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appmethodcall/)\<\{ `accessReferences?`: [`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]; `accountReferences?`: (... \| ...)[]; `appReferences?`: `bigint`[]; `approvalProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `args?`: `Uint8Array`\<...\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: BoxReference \| BoxIdentifier[]; `clearStateProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `extraFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `extraProgramPages?`: `number`; `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC`; `rejectVersion?`: `number`; `rekeyTo?`: `string` \| `Address`; `schema?`: \{ `globalByteSlices`: `number`; `globalInts`: `number`; `localByteSlices`: `number`; `localInts`: `number`; \}; `sender`: `string` \| `Address`; `signer?`: [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`; `staticFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \}\> \| [`AppMethodCall`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appmethodcall/)\<\{ `accessReferences?`: [`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]; `accountReferences?`: (... \| ...)[]; `appId`: `bigint`; `appReferences?`: `bigint`[]; `approvalProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `args?`: `Uint8Array`\<...\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: BoxReference \| BoxIdentifier[]; `clearStateProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `extraFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: `UpdateApplicationOC`; `rejectVersion?`: `number`; `rekeyTo?`: `string` \| `Address`; `sender`: `string` \| `Address`; `signer?`: [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`; `staticFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \}\> \| [`AppMethodCall`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appmethodcall/)\<[`AppMethodCallParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appmethodcallparams/)\> \| `undefined`)[]; `assetReferences?`: `bigint`[]; `boxReferences?`: ([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]; `extraFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `method`: `ABIMethod`; `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: `DeleteApplicationOC`; `rejectVersion?`: `number`; `rekeyTo?`: `string` \| `Address`; `sender`: `string` \| `Address`; `signer?`: [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`; `staticFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \}

Delete transaction parameters to use if a delete needs to be issued as part of deployment

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

###### metadata

[`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/)

The deployment metadata

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

###### updateParams

\{ `accessReferences?`: [`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]; `accountReferences?`: (`string` \| `Address`)[]; `appReferences?`: `bigint`[]; `args?`: `Uint8Array`\<`ArrayBufferLike`\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: ([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]; `extraFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: `UpdateApplicationOC`; `rejectVersion?`: `number`; `rekeyTo?`: `string` \| `Address`; `sender`: `string` \| `Address`; `signer?`: [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`; `staticFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \} \| \{ `accessReferences?`: [`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]; `accountReferences?`: (`string` \| `Address`)[]; `appReferences?`: `bigint`[]; `args?`: (`Transaction` \| `Promise`\<`Transaction`\> \| `ABIValue` \| `TransactionWithSigner` \| [`AppMethodCall`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appmethodcall/)\<\{ `accessReferences?`: [`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]; `accountReferences?`: (... \| ...)[]; `appReferences?`: `bigint`[]; `approvalProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `args?`: `Uint8Array`\<...\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: BoxReference \| BoxIdentifier[]; `clearStateProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `extraFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `extraProgramPages?`: `number`; `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `UpdateApplicationOC` \| `DeleteApplicationOC`; `rejectVersion?`: `number`; `rekeyTo?`: `string` \| `Address`; `schema?`: \{ `globalByteSlices`: `number`; `globalInts`: `number`; `localByteSlices`: `number`; `localInts`: `number`; \}; `sender`: `string` \| `Address`; `signer?`: [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`; `staticFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \}\> \| [`AppMethodCall`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appmethodcall/)\<\{ `accessReferences?`: [`ResourceReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/resourcereference/)[]; `accountReferences?`: (... \| ...)[]; `appId`: `bigint`; `appReferences?`: `bigint`[]; `approvalProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `args?`: `Uint8Array`\<...\>[]; `assetReferences?`: `bigint`[]; `boxReferences?`: BoxReference \| BoxIdentifier[]; `clearStateProgram`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `extraFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: `UpdateApplicationOC`; `rejectVersion?`: `number`; `rekeyTo?`: `string` \| `Address`; `sender`: `string` \| `Address`; `signer?`: [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`; `staticFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \}\> \| [`AppMethodCall`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appmethodcall/)\<[`AppMethodCallParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/appmethodcallparams/)\> \| `undefined`)[]; `assetReferences?`: `bigint`[]; `boxReferences?`: ([`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app-manager/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app-manager/type-aliases/boxidentifier/))[]; `extraFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `firstValidRound?`: `bigint`; `lastValidRound?`: `bigint`; `lease?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `maxFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `method`: `ABIMethod`; `note?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `onComplete?`: `UpdateApplicationOC`; `rejectVersion?`: `number`; `rekeyTo?`: `string` \| `Address`; `sender`: `string` \| `Address`; `signer?`: [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `TransactionSigner`; `staticFee?`: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/); `validityWindow?`: `number` \| `bigint`; \}

Update transaction parameters to use if an update needs to be issued as part of deployment

#### Returns

`Promise`\<[`AppDeployResult`](/docs/algokit-utils/typescript/latest/api/types/app-deployer/type-aliases/appdeployresult/)\>

The result of the deployment

#### Example

```ts
const deployResult = await deployer.deploy({
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

### getCreatorAppsByName()

> **getCreatorAppsByName**(`creatorAddress`, `ignoreCache?`): `Promise`\<[`AppLookup`](/docs/algokit-utils/typescript/latest/api/types/app-deployer/interfaces/applookup/)\>

Defined in: [src/types/app-deployer.ts:495](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L495)

Returns a lookup of name => app metadata (id, address, ...metadata) for all apps created by the given account that have
an [ARC-2](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0002.md) `AppDeployNote` as the transaction
note of the app creation transaction.

This function caches the result for the given creator account so that subsequent calls will not require an indexer lookup.

If the `AppManager` instance wasn't created with an indexer client, this function will throw an error.

#### Parameters

##### creatorAddress

`string` \| `Address`

The address of the account that is the creator of the apps you want to search for

##### ignoreCache?

`boolean`

Whether or not to ignore the cache and force a lookup, default: use the cache

#### Returns

`Promise`\<[`AppLookup`](/docs/algokit-utils/typescript/latest/api/types/app-deployer/interfaces/applookup/)\>

A name-based lookup of the app metadata

#### Example

```ts
const result = await deployer.getCreatorAppsByName(creator)
