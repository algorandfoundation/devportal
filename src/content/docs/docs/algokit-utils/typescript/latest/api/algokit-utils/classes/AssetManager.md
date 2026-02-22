---
editUrl: false
next: false
prev: false
title: "AssetManager"
---

Defined in: [src/asset-manager.ts:142](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/asset-manager.ts#L142)

Allows management of asset information.

## See

[AlgorandClient](/algokit-utils-ts/api/algokit-utils/classes/algorandclient/) for the main entry point that provides access to this manager

## Constructors

### Constructor

> **new AssetManager**(`algod`, `newGroup`): `AssetManager`

Defined in: [src/asset-manager.ts:155](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/asset-manager.ts#L155)

Create a new asset manager.

#### Parameters

##### algod

[`AlgodClient`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodclient/)

An algod client

##### newGroup

(`config?`) => [`TransactionComposer`](/algokit-utils-ts/api/algokit-utils/classes/transactioncomposer/)

A function that creates a new `TransactionComposer` transaction group

#### Returns

`AssetManager`

#### Example

```typescript
const assetManager = new AssetManager(algod, () => new TransactionComposer({algod, () => signer, () => suggestedParams}))
```

## Methods

### bulkOptIn()

> **bulkOptIn**(`account`, `assetIds`, `options?`): `Promise`\<[`BulkAssetOptInOutResult`](/algokit-utils-ts/api/algokit-utils/interfaces/bulkassetoptinoutresult/)[]\>

Defined in: [src/asset-manager.ts:237](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/asset-manager.ts#L237)

Opt an account in to a list of Algorand Standard Assets.

Transactions will be sent in batches of 16 as transaction groups.

#### Parameters

##### account

The account to opt-in

`string` | [`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/)

##### assetIds

`bigint`[]

The list of asset IDs to opt-in to

##### options?

`Omit`\<`CommonTransactionParams`, `"sender"`\> & [`SendParams`](/algokit-utils-ts/api/algokit-utils/interfaces/sendparams/)

Any parameters to control the transaction or execution of the transaction

#### Returns

`Promise`\<[`BulkAssetOptInOutResult`](/algokit-utils-ts/api/algokit-utils/interfaces/bulkassetoptinoutresult/)[]\>

An array of records matching asset ID to transaction ID of the opt in

#### Example

```typescript
// Basic example
assetManager.bulkOptIn("ACCOUNTADDRESS", [12345n, 67890n])
// With configuration
assetManager.bulkOptIn("ACCOUNTADDRESS", [12345n, 67890n], { maxFee: (1000).microAlgo(), suppressLog: true })
```

***

### bulkOptOut()

> **bulkOptOut**(`account`, `assetIds`, `options?`): `Promise`\<[`BulkAssetOptInOutResult`](/algokit-utils-ts/api/algokit-utils/interfaces/bulkassetoptinoutresult/)[]\>

Defined in: [src/asset-manager.ts:287](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/asset-manager.ts#L287)

Opt an account out of a list of Algorand Standard Assets.

Transactions will be sent in batches of 16 as transaction groups.

#### Parameters

##### account

The account to opt-in

`string` | [`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/)

##### assetIds

`bigint`[]

The list of asset IDs to opt-out of

##### options?

`Omit`\<`CommonTransactionParams`, `"sender"`\> & [`SendParams`](/algokit-utils-ts/api/algokit-utils/interfaces/sendparams/) & `object`

Any parameters to control the transaction or execution of the transaction

#### Returns

`Promise`\<[`BulkAssetOptInOutResult`](/algokit-utils-ts/api/algokit-utils/interfaces/bulkassetoptinoutresult/)[]\>

An array of records matching asset ID to transaction ID of the opt in

#### Example

```typescript
// Basic example
assetManager.bulkOptOut("ACCOUNTADDRESS", [12345n, 67890n])
// With configuration
assetManager.bulkOptOut("ACCOUNTADDRESS", [12345n, 67890n], { ensureZeroBalance: true, maxFee: (1000).microAlgo(), suppressLog: true })
```

***

### getAccountInformation()

> **getAccountInformation**(`sender`, `assetId`): `Promise`\<[`AccountAssetInformation`](/algokit-utils-ts/api/algokit-utils/type-aliases/accountassetinformation/)\>

Defined in: [src/asset-manager.ts:209](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/asset-manager.ts#L209)

Returns the given sender account's asset holding for a given asset.

#### Parameters

##### sender

The address of the sender/account to look up

`string` | [`Address`](/algokit-utils-ts/api/algokit-utils/classes/address/)

##### assetId

`bigint`

The ID of the asset to return a holding for

#### Returns

`Promise`\<[`AccountAssetInformation`](/algokit-utils-ts/api/algokit-utils/type-aliases/accountassetinformation/)\>

The account asset holding information

#### Example

```typescript
const address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA";
const assetId = 123345n;
const accountInfo = await assetManager.getAccountInformation(address, assetId);
```

[Response data schema details](https://dev.algorand.co/reference/rest-apis/algod/#accountassetinformation)

***

### getById()

> **getById**(`assetId`): `Promise`\<[`AssetInformation`](/algokit-utils-ts/api/algokit-utils/interfaces/assetinformation/)\>

Defined in: [src/asset-manager.ts:171](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/asset-manager.ts#L171)

Returns the current asset information for the asset with the given ID.

#### Parameters

##### assetId

`bigint`

The ID of the asset

#### Returns

`Promise`\<[`AssetInformation`](/algokit-utils-ts/api/algokit-utils/interfaces/assetinformation/)\>

The asset information

#### Example

```typescript
const assetInfo = await assetManager.getById(12353n);
```
