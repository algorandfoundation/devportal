---
editUrl: false
next: false
prev: false
title: "transferAsset"
---

> **transferAsset**(`transfer`, `algod`): `Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/)\>

Defined in: [src/transfer/transfer.ts:90](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transfer/transfer.ts#L90)

:::caution[Deprecated]
Use `algorand.send.assetTransfer()` / `algorand.createTransaction.assetTransfer()` instead

Transfer asset between two accounts.
:::

## Parameters

### transfer

[`TransferAssetParams`](/docs/algokit-utils/typescript/latest/api/types/transfer/interfaces/transferassetparams/)

The transfer definition

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/)\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

## Example

**Usage example**

```typescript
await algokit.transferAsset({ from, to, assetId, amount }, algod)
```
