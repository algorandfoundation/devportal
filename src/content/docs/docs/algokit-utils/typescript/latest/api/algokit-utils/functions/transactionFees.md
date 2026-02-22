---
editUrl: false
next: false
prev: false
title: "transactionFees"
---

> **transactionFees**(`numberOfTransactions`): [`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

Defined in: [src/amount.ts:204](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/amount.ts#L204)

Returns an amount of µAlgo to cover standard fees for the given number of transactions using AlgoAmount

## Parameters

### numberOfTransactions

`number`

The of standard transaction fees to return the amount of Algo

## Returns

[`AlgoAmount`](/algokit-utils-ts/api/algokit-utils/classes/algoamount/)

## Example

```ts
{@includeCode ./amount.spec.ts#example-transactionFees}
```
