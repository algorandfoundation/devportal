---
editUrl: false
next: false
prev: false
title: "transferAlgos"
---

> **transferAlgos**(`transfer`, `algod`): `Promise`\<`SendTransactionResult`\>

Defined in: [src/transfer/transfer-algos.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/transfer/transfer-algos.ts#L22)

:::caution[Deprecated]
Use `algorand.send.payment()` / `algorand.createTransaction.payment()` instead

Transfer Algo between two accounts.
:::

## Parameters

### transfer

`AlgoTransferParams`

The transfer definition

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`SendTransactionResult`\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

## Example

```typescript
await algokit.transferAlgos({ from, to, amount: algokit.algo(1) }, algod)
```
