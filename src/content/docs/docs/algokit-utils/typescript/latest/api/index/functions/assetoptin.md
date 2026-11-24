---
editUrl: false
next: false
prev: false
title: "assetOptIn"
---

> **assetOptIn**(`optIn`, `algod`): `Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/)\>

Defined in: [src/asset.ts:67](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/asset.ts#L67)

:::caution[Deprecated]
use `algorand.send.assetOptIn()` / `algorand.createTransaction.assetOptIn()` instead

Opt-in an account to an asset.
:::

## Parameters

### optIn

[`AssetOptInParams`](/docs/algokit-utils/typescript/latest/api/types/asset/interfaces/assetoptinparams/)

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
await algokit.assetOptIn({ account, assetId }, algod)
```
