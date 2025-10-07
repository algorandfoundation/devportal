---
title: AdditionalAtomicTransactionComposerContext
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/) / AdditionalAtomicTransactionComposerContext

[types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/).AdditionalAtomicTransactionComposerContext

Additional context about the `AtomicTransactionComposer`.

## Table of contents

### Properties

- [maxFees](types_transaction.AdditionalAtomicTransactionComposerContext.md#maxfees)
- [suggestedParams](types_transaction.AdditionalAtomicTransactionComposerContext.md#suggestedparams)

## Properties

### maxFees

• **maxFees**: `Map`\<`number`, [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)\>

A map of transaction index in the `AtomicTransactionComposer` to the max fee that can be calculated for a transaction in the group

#### Defined in

[src/types/transaction.ts:148](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L148)

---

### suggestedParams

• **suggestedParams**: `Pick`\<`SuggestedParams`, `"fee"` \| `"minFee"`\>

#### Defined in

[src/types/transaction.ts:151](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L151)
