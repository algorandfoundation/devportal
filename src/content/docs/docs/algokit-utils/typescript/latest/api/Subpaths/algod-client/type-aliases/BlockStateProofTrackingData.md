---
editUrl: false
next: false
prev: false
title: "BlockStateProofTrackingData"
---

> **BlockStateProofTrackingData** = `object`

Defined in: [packages/algod\_client/src/models/block.ts:91](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L91)

Tracking metadata for a specific StateProofType.

## Properties

### stateProofNextRound?

> `optional` **stateProofNextRound**: `bigint`

Defined in: [packages/algod\_client/src/models/block.ts:97](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L97)

[n] Next round for which state proofs are accepted.

***

### stateProofOnlineTotalWeight?

> `optional` **stateProofOnlineTotalWeight**: `bigint`

Defined in: [packages/algod\_client/src/models/block.ts:95](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L95)

[t] Online total weight during state proof round.

***

### stateProofVotersCommitment?

> `optional` **stateProofVotersCommitment**: `Uint8Array`

Defined in: [packages/algod\_client/src/models/block.ts:93](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L93)

[v] Vector commitment root of state proof voters.
