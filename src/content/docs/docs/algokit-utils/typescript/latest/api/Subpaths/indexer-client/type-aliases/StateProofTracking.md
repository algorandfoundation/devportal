---
editUrl: false
next: false
prev: false
title: "StateProofTracking"
---

> **StateProofTracking** = `object`

Defined in: [packages/indexer\_client/src/models/state-proof-tracking.ts:4](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/state-proof-tracking.ts#L4)

## Properties

### nextRound?

> `optional` **nextRound**: `number`

Defined in: [packages/indexer\_client/src/models/state-proof-tracking.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/state-proof-tracking.ts#L23)

\[n\] Next round for which we will accept a state proof transaction.

***

### onlineTotalWeight?

> `optional` **onlineTotalWeight**: `bigint`

Defined in: [packages/indexer\_client/src/models/state-proof-tracking.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/state-proof-tracking.ts#L18)

\[t\] The total number of microalgos held by the online accounts during the StateProof round.

***

### type?

> `optional` **type**: `bigint`

Defined in: [packages/indexer\_client/src/models/state-proof-tracking.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/state-proof-tracking.ts#L8)

State Proof Type. Note the raw object uses map with this as key.

***

### votersCommitment?

> `optional` **votersCommitment**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/state-proof-tracking.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/state-proof-tracking.ts#L13)

\[v\] Root of a vector commitment containing online accounts that will help sign the proof.
