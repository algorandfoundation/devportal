---
editUrl: false
next: false
prev: false
title: "assetOptIn"
---

> **assetOptIn**(`optIn`, `algod`): `Promise`\<`SendTransactionResult`\>

Defined in: [src/asset.ts:67](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/asset.ts#L67)

:::caution[Deprecated]
use `algorand.send.assetOptIn()` / `algorand.createTransaction.assetOptIn()` instead

Opt-in an account to an asset.
:::

## Parameters

### optIn

`AssetOptInParams`

The opt-in definition

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`SendTransactionResult`\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

## Example

```typescript
await algokit.assetOptIn({ account, assetId }, algod)
```
