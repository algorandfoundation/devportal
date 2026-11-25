---
editUrl: false
next: false
prev: false
title: "createAsset"
---

> **createAsset**(`create`, `algod`): `Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/) & `object`\>

Defined in: [src/asset.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/asset.ts#L23)

:::caution[Deprecated]
use `algorand.send.assetCreate()` / `algorand.createTransaction.assetCreate()` instead

Create an Algorand Standard Asset (ASA).
:::

## Parameters

### create

[`CreateAssetParams`](/docs/algokit-utils/typescript/latest/api/types/asset/interfaces/createassetparams/)

The asset creation definition

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/) & `object`\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

## Example

**Usage example**

```typescript
await algokit.createAsset({ creator: account, total: 1, decimals: 0, name: 'My asset' }, algod)
```
