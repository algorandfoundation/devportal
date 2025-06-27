---
editUrl: false
next: false
prev: false
title: "assetOptOut"
---

> **assetOptOut**(`optOut`, `algod`): `Promise`\<`SendTransactionResult`\>

Defined in: [src/asset.ts:98](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/asset.ts#L98)

:::caution[Deprecated]
use `algorand.send.assetOptOut()` / `algorand.createTransaction.assetOptOut()` instead

Opt-out an account from an asset.
:::

## Parameters

### optOut

`AssetOptOutParams`

The opt-in definition

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`SendTransactionResult`\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

## Example

```typescript
await algokit.assetOptOut({ account, assetId, assetCreatorAddress }, algod)
```
