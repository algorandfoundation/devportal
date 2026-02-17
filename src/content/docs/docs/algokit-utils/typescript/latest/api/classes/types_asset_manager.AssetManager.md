---
title: AssetManager
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/asset-manager](/docs/algokit-utils/typescript/latest/api/modules/types_asset_manager/) / AssetManager

[types/asset-manager](/docs/algokit-utils/typescript/latest/api/modules/types_asset_manager/).AssetManager

Allows management of asset information.

## Table of contents

### Constructors

- [constructor](/docs/algokit-utils/typescript/latest/api/classes/types_asset_manager.AssetManager/#constructor)

### Properties

- [\_algod](/docs/algokit-utils/typescript/latest/api/classes/types_asset_manager.AssetManager/#_algod)
- [\_newGroup](/docs/algokit-utils/typescript/latest/api/classes/types_asset_manager.AssetManager/#_newgroup)

### Methods

- [bulkOptIn](/docs/algokit-utils/typescript/latest/api/classes/types_asset_manager.AssetManager/#bulkoptin)
- [bulkOptOut](/docs/algokit-utils/typescript/latest/api/classes/types_asset_manager.AssetManager/#bulkoptout)
- [getAccountInformation](/docs/algokit-utils/typescript/latest/api/classes/types_asset_manager.AssetManager/#getaccountinformation)
- [getById](/docs/algokit-utils/typescript/latest/api/classes/types_asset_manager.AssetManager/#getbyid)

## Constructors

### constructor

• **new AssetManager**(`algod`, `newGroup`): [`AssetManager`](/docs/algokit-utils/typescript/latest/api/classes/types_asset_manager.AssetManager/)

Create a new asset manager.

#### Parameters

| Name       | Type                                                                                                                 | Description                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| `algod`    | `AlgodClient`                                                                                                        | An algod client                                                       |
| `newGroup` | () => [`TransactionComposer`](/docs/algokit-utils/typescript/latest/api/classes/types_composer.TransactionComposer/) | A function that creates a new `TransactionComposer` transaction group |

#### Returns

[`AssetManager`](/docs/algokit-utils/typescript/latest/api/classes/types_asset_manager.AssetManager/)

**`Example`**

```typescript
const assetManager = new AssetManager(algod, () => new TransactionComposer({algod, () => signer, () => suggestedParams}))
```

#### Defined in

[src/types/asset-manager.ts:151](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L151)

## Properties

### \_algod

• `Private` **\_algod**: `AlgodClient`

#### Defined in

[src/types/asset-manager.ts:139](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L139)

---

### \_newGroup

• `Private` **\_newGroup**: () => [`TransactionComposer`](/docs/algokit-utils/typescript/latest/api/classes/types_composer.TransactionComposer/)

#### Type declaration

▸ (): [`TransactionComposer`](/docs/algokit-utils/typescript/latest/api/classes/types_composer.TransactionComposer/)

##### Returns

[`TransactionComposer`](/docs/algokit-utils/typescript/latest/api/classes/types_composer.TransactionComposer/)

#### Defined in

[src/types/asset-manager.ts:140](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L140)

## Methods

### bulkOptIn

▸ **bulkOptIn**(`account`, `assetIds`, `options?`): `Promise`\<[`BulkAssetOptInOutResult`](/docs/algokit-utils/typescript/latest/api/interfaces/types_asset_manager.BulkAssetOptInOutResult/)[]\>

Opt an account in to a list of Algorand Standard Assets.

Transactions will be sent in batches of 16 as transaction groups.

#### Parameters

| Name       | Type                                                                                                                                                                                                                                              | Description                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------ |
| `account`  | `string` \| `Address`                                                                                                                                                                                                                             | The account to opt-in                                                     |
| `assetIds` | `bigint`[]                                                                                                                                                                                                                                        | The list of asset IDs to opt-in to                                        |
| `options?` | `Omit`\<[`CommonTransactionParams`](/docs/algokit-utils/typescript/latest/api/modules/types_composer/#commontransactionparams), `"sender"`\> & [`SendParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendParams/) | Any parameters to control the transaction or execution of the transaction |

#### Returns

`Promise`\<[`BulkAssetOptInOutResult`](/docs/algokit-utils/typescript/latest/api/interfaces/types_asset_manager.BulkAssetOptInOutResult/)[]\>

An array of records matching asset ID to transaction ID of the opt in

**`Example`**

```typescript
// Basic example
assetManager.bulkOptIn('ACCOUNTADDRESS', [12345n, 67890n]);
// With configuration
assetManager.bulkOptIn('ACCOUNTADDRESS', [12345n, 67890n], {
  maxFee: (1000).microAlgo(),
  suppressLog: true,
});
```

#### Defined in

[src/types/asset-manager.ts:233](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L233)

---

### bulkOptOut

▸ **bulkOptOut**(`account`, `assetIds`, `options?`): `Promise`\<[`BulkAssetOptInOutResult`](/docs/algokit-utils/typescript/latest/api/interfaces/types_asset_manager.BulkAssetOptInOutResult/)[]\>

Opt an account out of a list of Algorand Standard Assets.

Transactions will be sent in batches of 16 as transaction groups.

#### Parameters

| Name       | Type                                                                                                                                                                                                                                                                                     | Description                                                               |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| `account`  | `string` \| `Address`                                                                                                                                                                                                                                                                    | The account to opt-in                                                     |
| `assetIds` | `bigint`[]                                                                                                                                                                                                                                                                               | The list of asset IDs to opt-out of                                       |
| `options?` | `Omit`\<[`CommonTransactionParams`](/docs/algokit-utils/typescript/latest/api/modules/types_composer/#commontransactionparams), `"sender"`\> & [`SendParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendParams/) & \{ `ensureZeroBalance?`: `boolean` } | Any parameters to control the transaction or execution of the transaction |

#### Returns

`Promise`\<[`BulkAssetOptInOutResult`](/docs/algokit-utils/typescript/latest/api/interfaces/types_asset_manager.BulkAssetOptInOutResult/)[]\>

An array of records matching asset ID to transaction ID of the opt in

**`Example`**

```typescript
// Basic example
assetManager.bulkOptOut('ACCOUNTADDRESS', [12345n, 67890n]);
// With configuration
assetManager.bulkOptOut('ACCOUNTADDRESS', [12345n, 67890n], {
  ensureZeroBalance: true,
  maxFee: (1000).microAlgo(),
  suppressLog: true,
});
```

#### Defined in

[src/types/asset-manager.ts:283](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L283)

---

### getAccountInformation

▸ **getAccountInformation**(`sender`, `assetId`): `Promise`\<[`AccountAssetInformation`](/docs/algokit-utils/typescript/latest/api/modules/types_account/#accountassetinformation)\>

Returns the given sender account's asset holding for a given asset.

#### Parameters

| Name      | Type                  | Description                                  |
| :-------- | :-------------------- | :------------------------------------------- |
| `sender`  | `string` \| `Address` | The address of the sender/account to look up |
| `assetId` | `bigint`              | The ID of the asset to return a holding for  |

#### Returns

`Promise`\<[`AccountAssetInformation`](/docs/algokit-utils/typescript/latest/api/modules/types_account/#accountassetinformation)\>

The account asset holding information

**`Example`**

```typescript
const address = 'XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA';
const assetId = 123345n;
const accountInfo = await assetManager.getAccountInformation(address, assetId);
```

[Response data schema details](https://dev.algorand.co/reference/rest-apis/algod/#accountassetinformation)

#### Defined in

[src/types/asset-manager.ts:205](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L205)

---

### getById

▸ **getById**(`assetId`): `Promise`\<[`AssetInformation`](/docs/algokit-utils/typescript/latest/api/interfaces/types_asset_manager.AssetInformation/)\>

Returns the current asset information for the asset with the given ID.

#### Parameters

| Name      | Type     | Description         |
| :-------- | :------- | :------------------ |
| `assetId` | `bigint` | The ID of the asset |

#### Returns

`Promise`\<[`AssetInformation`](/docs/algokit-utils/typescript/latest/api/interfaces/types_asset_manager.AssetInformation/)\>

The asset information

**`Example`**

```typescript
const assetInfo = await assetManager.getById(12353n);
```

#### Defined in

[src/types/asset-manager.ts:167](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset-manager.ts#L167)
