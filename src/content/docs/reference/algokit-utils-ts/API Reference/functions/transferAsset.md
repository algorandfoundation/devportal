---
editUrl: false
next: false
prev: false
title: "transferAsset"
---

> **transferAsset**(`transfer`, `algod`): `Promise`\<`SendTransactionResult`\>

Defined in: [src/transfer/transfer.ts:90](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/transfer/transfer.ts#L90)

:::caution[Deprecated]
Use `algorand.send.assetTransfer()` / `algorand.createTransaction.assetTransfer()` instead

Transfer asset between two accounts.
:::

## Parameters

### transfer

`TransferAssetParams`

The transfer definition

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`SendTransactionResult`\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

## Example

```typescript
await algokit.transferAsset({ from, to, assetId, amount }, algod)
```
