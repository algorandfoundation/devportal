---
editUrl: false
next: false
prev: false
title: "AdditionalAtomicTransactionComposerContext"
---

Defined in: [src/types/transaction.ts:146](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L146)

Additional context about the `AtomicTransactionComposer`.

## Properties

### maxFees

> **maxFees**: `Map`\<`number`, [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)\>

Defined in: [src/types/transaction.ts:148](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L148)

A map of transaction index in the `AtomicTransactionComposer` to the max fee that can be calculated for a transaction in the group

***

### suggestedParams

> **suggestedParams**: `Pick`\<`algosdk.SuggestedParams`, `"fee"` \| `"minFee"`\>

Defined in: [src/types/transaction.ts:151](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L151)
