---
editUrl: false
next: false
prev: false
title: "getAccountAssetInformation"
---

> **getAccountAssetInformation**(`sender`, `assetId`, `algod`): `Promise`\<`AccountAssetInformation`\>

Defined in: [src/account/account.ts:201](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/account/account.ts#L201)

:::caution[Deprecated]
Use `algorand.asset.getAccountInformation(sender, assetId)` or `new AssetManager(...).getAccountInformation(sender, assetId)` instead.

Returns the given sender account's asset holding for a given asset.
:::

## Parameters

### sender

The address of the sender/account to look up

`string` | `SendTransactionFrom`

### assetId

The ID of the asset to return a holding for

`number` | `bigint`

### algod

`AlgodClient`

The algod instance

## Returns

`Promise`\<`AccountAssetInformation`\>

The account asset holding information

## Example

```typescript
const address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA";
const assetId = 123345;
const accountInfo = await account.getAccountAssetInformation(address, assetId, algod);
```

[Response data schema details](https://developer.algorand.org/docs/rest-apis/algod/#get-v2accountsaddressassetsasset-id)
