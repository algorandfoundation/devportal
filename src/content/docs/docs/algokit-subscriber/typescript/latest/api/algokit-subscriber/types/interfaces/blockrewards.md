---
editUrl: false
next: false
prev: false
title: "BlockRewards"
---

Defined in: [src/types/subscription.ts:81](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L81)

## Properties

### feeSink

> **feeSink**: `string`

Defined in: [src/types/subscription.ts:83](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L83)

FeeSink is an address that accepts transaction fees, it can only spend to the incentive pool.

***

### rewardsCalculationRound

> **rewardsCalculationRound**: `bigint`

Defined in: [src/types/subscription.ts:85](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L85)

The number of leftover MicroAlgos after the distribution of rewards-rate MicroAlgos for every reward unit in the next round.

***

### rewardsLevel

> **rewardsLevel**: `bigint`

Defined in: [src/types/subscription.ts:87](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L87)

How many rewards, in MicroAlgos, have been distributed to each RewardUnit of MicroAlgos since genesis.

***

### rewardsPool

> **rewardsPool**: `string`

Defined in: [src/types/subscription.ts:89](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L89)

RewardsPool is an address that accepts periodic injections from the fee-sink and continually redistributes them as rewards.

***

### rewardsRate

> **rewardsRate**: `bigint`

Defined in: [src/types/subscription.ts:91](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L91)

Number of new MicroAlgos added to the participation stake from rewards at the next round.

***

### rewardsResidue

> **rewardsResidue**: `bigint`

Defined in: [src/types/subscription.ts:93](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L93)

Number of leftover MicroAlgos after the distribution of RewardsRate/rewardUnits MicroAlgos for every reward unit in the next round.
