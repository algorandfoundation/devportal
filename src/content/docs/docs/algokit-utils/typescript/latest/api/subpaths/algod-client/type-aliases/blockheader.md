---
editUrl: false
next: false
prev: false
title: "BlockHeader"
---

> **BlockHeader** = `object`

Defined in: [packages/algod\_client/src/models/block.ts:310](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L310)

## Properties

### bonus?

> `optional` **bonus**: `bigint`

Defined in: [packages/algod\_client/src/models/block.ts:332](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L332)

[bi] Bonus incentive for block proposal.

***

### feesCollected?

> `optional` **feesCollected**: `bigint`

Defined in: [packages/algod\_client/src/models/block.ts:330](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L330)

[fc] Fees collected in this block.

***

### genesisHash

> **genesisHash**: `Uint8Array`

Defined in: [packages/algod\_client/src/models/block.ts:326](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L326)

[gh] Genesis hash.

***

### genesisId

> **genesisId**: `string`

Defined in: [packages/algod\_client/src/models/block.ts:324](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L324)

[gen] Genesis ID.

***

### participationUpdates

> **participationUpdates**: [`ParticipationUpdates`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/participationupdates/)

Defined in: [packages/algod\_client/src/models/block.ts:346](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L346)

Represents participation account data that needs to be checked/acted on by the network

***

### previousBlockHash

> **previousBlockHash**: `Uint8Array`

Defined in: [packages/algod\_client/src/models/block.ts:314](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L314)

[prev] Previous block hash.

***

### previousBlockHash512?

> `optional` **previousBlockHash512**: `Uint8Array`

Defined in: [packages/algod\_client/src/models/block.ts:316](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L316)

[prev512] Previous block hash using SHA-512.

***

### proposer?

> `optional` **proposer**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/algod\_client/src/models/block.ts:328](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L328)

[prp] Proposer address.

***

### proposerPayout?

> `optional` **proposerPayout**: `bigint`

Defined in: [packages/algod\_client/src/models/block.ts:334](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L334)

[pp] Proposer payout.

***

### rewardState

> **rewardState**: [`RewardState`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/rewardstate/)

Defined in: [packages/algod\_client/src/models/block.ts:336](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L336)

Reward distribution state.

***

### round

> **round**: `bigint`

Defined in: [packages/algod\_client/src/models/block.ts:312](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L312)

[rnd] Round number.

***

### seed

> **seed**: `Uint8Array`

Defined in: [packages/algod\_client/src/models/block.ts:318](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L318)

[seed] Sortition seed.

***

### stateProofTracking?

> `optional` **stateProofTracking**: `Map`\<`number`, [`BlockStateProofTrackingData`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/blockstateprooftrackingdata/)\>

Defined in: [packages/algod\_client/src/models/block.ts:344](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L344)

[spt] State proof tracking data keyed by state proof type.

***

### timestamp

> **timestamp**: `bigint`

Defined in: [packages/algod\_client/src/models/block.ts:322](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L322)

[ts] Block timestamp in seconds since epoch.

***

### txnCommitments

> **txnCommitments**: [`TxnCommitments`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/txncommitments/)

Defined in: [packages/algod\_client/src/models/block.ts:320](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L320)

Authenticates the set of transactions appearing in the block.

***

### txnCounter?

> `optional` **txnCounter**: `bigint`

Defined in: [packages/algod\_client/src/models/block.ts:342](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L342)

[tc] Transaction counter.

***

### upgradeState

> **upgradeState**: [`UpgradeState`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/upgradestate/)

Defined in: [packages/algod\_client/src/models/block.ts:338](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L338)

Protocol upgrade state.

***

### upgradeVote?

> `optional` **upgradeVote**: [`UpgradeVote`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/upgradevote/)

Defined in: [packages/algod\_client/src/models/block.ts:340](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L340)

Protocol upgrade vote parameters.
