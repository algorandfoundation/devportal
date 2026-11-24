---
editUrl: false
next: false
prev: false
title: "assetOptOut"
---

> **assetOptOut**(`optOut`, `algod`): `Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/)\>

Defined in: [src/asset.ts:98](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/asset.ts#L98)

:::caution[Deprecated]
use `algorand.send.assetOptOut()` / `algorand.createTransaction.assetOptOut()` instead

Opt-out an account from an asset.
:::

## Parameters

### optOut

[`AssetOptOutParams`](/docs/algokit-utils/typescript/latest/api/types/asset/interfaces/assetoptoutparams/)

The opt-in definition

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/)\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

## Example

**Usage example**

```typescript
await algokit.assetOptOut({ account, assetId, assetCreatorAddress }, algod)
```
