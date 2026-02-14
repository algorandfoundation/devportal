---
title: AdditionalAtomicTransactionComposerContext
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/) / AdditionalAtomicTransactionComposerContext

[types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/).AdditionalAtomicTransactionComposerContext

Additional context about the `AtomicTransactionComposer`.

## Table of contents

### Properties

- [maxFees](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionadditionalatomictransactioncomposercontext/#maxfees)
- [suggestedParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionadditionalatomictransactioncomposercontext/#suggestedparams)

## Properties

### maxFees

• **maxFees**: `Map`\<`number`, [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amountalgoamount/)\>

A map of transaction index in the `AtomicTransactionComposer` to the max fee that can be calculated for a transaction in the group

#### Defined in

[src/types/transaction.ts:148](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L148)

---

### suggestedParams

• **suggestedParams**: `Pick`\<`SuggestedParams`, `"fee"` \| `"minFee"`\>

#### Defined in

[src/types/transaction.ts:151](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L151)
