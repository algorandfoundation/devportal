---
editUrl: false
next: false
prev: false
title: "getAccountAssetInformation"
---

> **getAccountAssetInformation**(`sender`, `assetId`, `algod`): `Promise`\<[`AccountAssetInformation`](/docs/algokit-utils/typescript/latest/api/types/account/type-aliases/accountassetinformation/)\>

Defined in: [src/account/account.ts:201](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/account.ts#L201)

:::caution[Deprecated]
Use `algorand.asset.getAccountInformation(sender, assetId)` or `new AssetManager(...).getAccountInformation(sender, assetId)` instead.

Returns the given sender account's asset holding for a given asset.
:::

## Parameters

### sender

`string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

The address of the sender/account to look up

### assetId

`number` \| `bigint`

The ID of the asset to return a holding for

### algod

`AlgodClient`

The algod instance

## Returns

`Promise`\<[`AccountAssetInformation`](/docs/algokit-utils/typescript/latest/api/types/account/type-aliases/accountassetinformation/)\>

The account asset holding information

## Example

```typescript
const address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA";
const assetId = 123345;
const accountInfo = await account.getAccountAssetInformation(address, assetId, algod);
```

[Response data schema details](https://dev.algorand.co/reference/rest-api/algod/operations/accountassetinformation/)
