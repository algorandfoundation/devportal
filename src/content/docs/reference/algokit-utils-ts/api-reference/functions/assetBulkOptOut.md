---
editUrl: false
next: false
prev: false
title: "assetBulkOptOut"
---

> **assetBulkOptOut**(`optOut`, `algod`): `Promise`\<`Record`\<`number`, `string`\>\>

Defined in: [src/asset.ts:157](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/asset.ts#L157)

:::caution[Deprecated]
use `algorand.asset.bulkOptOut()` instead

Opt out of multiple assets in Algorand blockchain.
:::

## Parameters

### optOut

`AssetBulkOptInOutParams`

The bulk opt-out request.

### algod

`AlgodClient`

An instance of the Algodv2 client used to interact with the Algorand blockchain.

## Returns

`Promise`\<`Record`\<`number`, `string`\>\>

A record object containing asset IDs as keys and their corresponding transaction IDs as values.

## Throws

If there is an error during the opt-out process.

## Example

```ts
algokit.bulkOptOut({ account: account, assetIds: [12345, 67890] }, algod)
```
