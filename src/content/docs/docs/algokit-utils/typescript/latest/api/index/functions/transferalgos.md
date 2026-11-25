---
editUrl: false
next: false
prev: false
title: "transferAlgos"
---

> **transferAlgos**(`transfer`, `algod`): `Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/)\>

Defined in: [src/transfer/transfer-algos.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transfer/transfer-algos.ts#L22)

:::caution[Deprecated]
Use `algorand.send.payment()` / `algorand.createTransaction.payment()` instead

Transfer Algo between two accounts.
:::

## Parameters

### transfer

[`AlgoTransferParams`](/docs/algokit-utils/typescript/latest/api/types/transfer/interfaces/algotransferparams/)

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
await algokit.transferAlgos({ from, to, amount: algokit.algo(1) }, algod)
```
