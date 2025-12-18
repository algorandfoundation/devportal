---
title: 'Interface: BlockRewards'
---

[**@algorandfoundation/algokit-subscriber**](../../../README.md)

---

[@algorandfoundation/algokit-subscriber](../../../modules.md) / [types/subscription](../README.md) / BlockRewards

Defined in: [src/types/subscription.ts:73](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L73)

## Properties

### feeSink

> **feeSink**: `string`

Defined in: [src/types/subscription.ts:75](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L75)

FeeSink is an address that accepts transaction fees, it can only spend to the incentive pool.

---

### rewardsCalculationRound

> **rewardsCalculationRound**: `bigint`

Defined in: [src/types/subscription.ts:77](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L77)

The number of leftover MicroAlgos after the distribution of rewards-rate MicroAlgos for every reward unit in the next round.

---

### rewardsLevel

> **rewardsLevel**: `bigint`

Defined in: [src/types/subscription.ts:79](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L79)

How many rewards, in MicroAlgos, have been distributed to each RewardUnit of MicroAlgos since genesis.

---

### rewardsPool

> **rewardsPool**: `string`

Defined in: [src/types/subscription.ts:81](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L81)

RewardsPool is an address that accepts periodic injections from the fee-sink and continually redistributes them as rewards.

---

### rewardsRate

> **rewardsRate**: `bigint`

Defined in: [src/types/subscription.ts:83](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L83)

Number of new MicroAlgos added to the participation stake from rewards at the next round.

---

### rewardsResidue

> **rewardsResidue**: `bigint`

Defined in: [src/types/subscription.ts:85](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L85)

Number of leftover MicroAlgos after the distribution of RewardsRate/rewardUnits MicroAlgos for every reward unit in the next round.
