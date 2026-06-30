---
editUrl: false
next: false
prev: false
title: 'BlockRewards'
---

> **BlockRewards** = `object`

Defined in: [packages/indexer_client/src/models/block-rewards.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block-rewards.ts#L7)

Fields relating to rewards,

## Properties

### feeSink

> **feeSink**: `string`

Defined in: [packages/indexer_client/src/models/block-rewards.ts:11](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block-rewards.ts#L11)

\[fees\] accepts transaction fees, it can only spend to the incentive pool.

---

### rewardsCalculationRound

> **rewardsCalculationRound**: `bigint`

Defined in: [packages/indexer_client/src/models/block-rewards.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block-rewards.ts#L16)

\[rwcalr\] number of leftover MicroAlgos after the distribution of rewards-rate MicroAlgos for every reward unit in the next round.

---

### rewardsLevel

> **rewardsLevel**: `bigint`

Defined in: [packages/indexer_client/src/models/block-rewards.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block-rewards.ts#L21)

\[earn\] How many rewards, in MicroAlgos, have been distributed to each RewardUnit of MicroAlgos since genesis.

---

### rewardsPool

> **rewardsPool**: `string`

Defined in: [packages/indexer_client/src/models/block-rewards.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block-rewards.ts#L26)

\[rwd\] accepts periodic injections from the fee-sink and continually redistributes them as rewards.

---

### rewardsRate

> **rewardsRate**: `bigint`

Defined in: [packages/indexer_client/src/models/block-rewards.ts:31](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block-rewards.ts#L31)

\[rate\] Number of new MicroAlgos added to the participation stake from rewards at the next round.

---

### rewardsResidue

> **rewardsResidue**: `bigint`

Defined in: [packages/indexer_client/src/models/block-rewards.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/block-rewards.ts#L36)

\[frac\] Number of leftover MicroAlgos after the distribution of RewardsRate/rewardUnits MicroAlgos for every reward unit in the next round.
