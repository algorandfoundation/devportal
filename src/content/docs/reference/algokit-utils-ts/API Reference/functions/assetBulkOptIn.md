---
editUrl: false
next: false
prev: false
title: "assetBulkOptIn"
---

> **assetBulkOptIn**(`optIn`, `algod`): `Promise`\<`Record`\<`number`, `string`\>\>

Defined in: [src/asset.ts:130](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/asset.ts#L130)

:::caution[Deprecated]
use `algorand.asset.bulkOptIn()` instead

Opt in to a list of assets on the Algorand blockchain.
:::

## Parameters

### optIn

`AssetBulkOptInOutParams`

The bulk opt-in request.

### algod

`AlgodClient`

An instance of the Algodv2 class from the `algosdk` library.

## Returns

`Promise`\<`Record`\<`number`, `string`\>\>

A record object where the keys are the asset IDs and the values are the corresponding transaction IDs for successful opt-ins.

## Throws

If there is an error during the opt-in process.

## Example

```ts
algokit.bulkOptIn({ account: account, assetIds: [12345, 67890] }, algod)
```
