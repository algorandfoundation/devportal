---
editUrl: false
next: false
prev: false
title: "rekeyAccount"
---

> **rekeyAccount**(`rekey`, `algod`): `Promise`\<`SendTransactionResult`\>

Defined in: [src/transfer/transfer.ts:125](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/transfer/transfer.ts#L125)

:::caution[Deprecated]
Use `algorand.account.rekeyAccount()` instead

Rekey an account to a new address.

**Note:** Please be careful with this function and be sure to read the [official rekey guidance](https://developer.algorand.org/docs/get-details/accounts/rekey/).
:::

## Parameters

### rekey

`AlgoRekeyParams`

The rekey definition

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`SendTransactionResult`\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

## Example

```typescript
await algokit.rekeyAccount({ from, rekeyTo }, algod)
```
