---
editUrl: false
next: false
prev: false
title: "AssetManager"
---

Defined in: [src/types/asset-manager.ts:138](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L138)

Allows management of asset information.

## Constructors

### Constructor

> **new AssetManager**(`algod`, `newGroup`): `AssetManager`

Defined in: [src/types/asset-manager.ts:151](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L151)

Create a new asset manager.

#### Parameters

##### algod

`AlgodClient`

An algod client

##### newGroup

() => [`TransactionComposer`](/docs/algokit-utils/typescript/latest/api/types/composer/classes/transactioncomposer/)

A function that creates a new `TransactionComposer` transaction group

#### Returns

`AssetManager`

#### Example

**Create a new asset manager**

```typescript
const assetManager = new AssetManager(algod, () => new TransactionComposer({algod, () => signer, () => suggestedParams}))
```

## Methods

### bulkOptIn()

> **bulkOptIn**(`account`, `assetIds`, `options?`): `Promise`\<[`BulkAssetOptInOutResult`](/docs/algokit-utils/typescript/latest/api/types/asset-manager/interfaces/bulkassetoptinoutresult/)[]\>

Defined in: [src/types/asset-manager.ts:234](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L234)

Opt an account in to a list of Algorand Standard Assets.

Transactions will be sent in batches of 16 as transaction groups.

#### Parameters

##### account

`string` \| `Address`

The account to opt-in

##### assetIds

`bigint`[]

The list of asset IDs to opt-in to

##### options?

`Omit`\<[`CommonTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/commontransactionparams/), `"sender"`\> & [`SendParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendparams/)

Any parameters to control the transaction or execution of the transaction

#### Returns

`Promise`\<[`BulkAssetOptInOutResult`](/docs/algokit-utils/typescript/latest/api/types/asset-manager/interfaces/bulkassetoptinoutresult/)[]\>

An array of records matching asset ID to transaction ID of the opt in

#### Example

**Example using AlgorandClient**

```typescript
// Basic example
assetManager.bulkOptIn("ACCOUNTADDRESS", [12345n, 67890n])
// With configuration
assetManager.bulkOptIn("ACCOUNTADDRESS", [12345n, 67890n], { maxFee: (1000).microAlgo(), suppressLog: true })
```

***

### bulkOptOut()

> **bulkOptOut**(`account`, `assetIds`, `options?`): `Promise`\<[`BulkAssetOptInOutResult`](/docs/algokit-utils/typescript/latest/api/types/asset-manager/interfaces/bulkassetoptinoutresult/)[]\>

Defined in: [src/types/asset-manager.ts:284](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L284)

Opt an account out of a list of Algorand Standard Assets.

Transactions will be sent in batches of 16 as transaction groups.

#### Parameters

##### account

`string` \| `Address`

The account to opt-in

##### assetIds

`bigint`[]

The list of asset IDs to opt-out of

##### options?

`Omit`\<[`CommonTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/composer/type-aliases/commontransactionparams/), `"sender"`\> & [`SendParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendparams/) & `object`

Any parameters to control the transaction or execution of the transaction

#### Returns

`Promise`\<[`BulkAssetOptInOutResult`](/docs/algokit-utils/typescript/latest/api/types/asset-manager/interfaces/bulkassetoptinoutresult/)[]\>

An array of records matching asset ID to transaction ID of the opt in

#### Example

**Example using AlgorandClient**

```typescript
// Basic example
assetManager.bulkOptOut("ACCOUNTADDRESS", [12345n, 67890n])
// With configuration
assetManager.bulkOptOut("ACCOUNTADDRESS", [12345n, 67890n], { ensureZeroBalance: true, maxFee: (1000).microAlgo(), suppressLog: true })
```

***

### getAccountInformation()

> **getAccountInformation**(`sender`, `assetId`): `Promise`\<[`AccountAssetInformation`](/docs/algokit-utils/typescript/latest/api/types/account/type-aliases/accountassetinformation/)\>

Defined in: [src/types/asset-manager.ts:206](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L206)

Returns the given sender account's asset holding for a given asset.

#### Parameters

##### sender

`string` \| `Address`

The address of the sender/account to look up

##### assetId

`bigint`

The ID of the asset to return a holding for

#### Returns

`Promise`\<[`AccountAssetInformation`](/docs/algokit-utils/typescript/latest/api/types/account/type-aliases/accountassetinformation/)\>

The account asset holding information

#### Example

```typescript
const address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA";
const assetId = 123345n;
const accountInfo = await assetManager.getAccountInformation(address, assetId);
```

[Response data schema details](https://dev.algorand.co/reference/rest-api/algod/operations/accountassetinformation/)

***

### getById()

> **getById**(`assetId`): `Promise`\<[`AssetInformation`](/docs/algokit-utils/typescript/latest/api/types/asset-manager/interfaces/assetinformation/)\>

Defined in: [src/types/asset-manager.ts:167](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L167)

Returns the current asset information for the asset with the given ID.

#### Parameters

##### assetId

`bigint`

The ID of the asset

#### Returns

`Promise`\<[`AssetInformation`](/docs/algokit-utils/typescript/latest/api/types/asset-manager/interfaces/assetinformation/)\>

The asset information

#### Example

```typescript
const assetInfo = await assetManager.getById(12353n);
```
