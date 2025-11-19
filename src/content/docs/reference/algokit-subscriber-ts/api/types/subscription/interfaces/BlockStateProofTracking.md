---
title: BlockStateProofTracking
---

[**@algorandfoundation/algokit-subscriber**](../../../README.md)

---

# Interface: BlockStateProofTracking

Defined in: [src/types/subscription.ts:101](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L101)

## Properties

### nextRound?

> `optional` **nextRound**: `bigint`

Defined in: [src/types/subscription.ts:105](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L105)

(n) Next round for which we will accept a state proof transaction.

---

### onlineTotalWeight?

> `optional` **onlineTotalWeight**: `bigint`

Defined in: [src/types/subscription.ts:111](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L111)

(t) The total number of microalgos held by the online accounts during the
StateProof round.

---

### type?

> `optional` **type**: `number`

Defined in: [src/types/subscription.ts:116](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L116)

State Proof Type. Note the raw object uses map with this as key.

---

### votersCommitment?

> `optional` **votersCommitment**: `string`

Defined in: [src/types/subscription.ts:122](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L122)

(v) Root of a vector commitment containing online accounts that will help sign
the proof.
