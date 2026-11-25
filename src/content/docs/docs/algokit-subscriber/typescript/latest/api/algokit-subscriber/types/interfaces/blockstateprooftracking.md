---
editUrl: false
next: false
prev: false
title: "BlockStateProofTracking"
---

Defined in: [src/types/subscription.ts:109](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L109)

## Properties

### nextRound?

> `optional` **nextRound?**: `bigint`

Defined in: [src/types/subscription.ts:113](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L113)

(n) Next round for which we will accept a state proof transaction.

***

### onlineTotalWeight?

> `optional` **onlineTotalWeight?**: `bigint`

Defined in: [src/types/subscription.ts:119](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L119)

(t) The total number of microalgos held by the online accounts during the
StateProof round.

***

### type?

> `optional` **type?**: `number`

Defined in: [src/types/subscription.ts:124](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L124)

State Proof Type. Note the raw object uses map with this as key.

***

### votersCommitment?

> `optional` **votersCommitment?**: `string`

Defined in: [src/types/subscription.ts:130](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L130)

(v) Root of a vector commitment containing online accounts that will help sign
the proof.
