---
editUrl: false
next: false
prev: false
title: "rekeyAccount"
---

> **rekeyAccount**(`rekey`, `algod`): `Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/)\>

Defined in: [src/transfer/transfer.ts:125](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transfer/transfer.ts#L125)

:::caution[Deprecated]
Use `algorand.account.rekeyAccount()` instead

Rekey an account to a new address.

**Note:** Please be careful with this function and be sure to read the [official rekey guidance](https://dev.algorand.co/concepts/accounts/rekeying).
:::

## Parameters

### rekey

[`AlgoRekeyParams`](/docs/algokit-utils/typescript/latest/api/types/transfer/interfaces/algorekeyparams/)

The rekey definition

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/)\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

## Example

**Usage example**

```typescript
await algokit.rekeyAccount({ from, rekeyTo }, algod)
```
