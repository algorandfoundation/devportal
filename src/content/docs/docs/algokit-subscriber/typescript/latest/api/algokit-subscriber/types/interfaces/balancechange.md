---
editUrl: false
next: false
prev: false
title: "BalanceChange"
---

Defined in: [src/types/subscription.ts:208](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L208)

Represents a balance change effect for a transaction.

## Properties

### address

> **address**: `string`

Defined in: [src/types/subscription.ts:210](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L210)

The address that the balance change is for.

***

### amount

> **amount**: `bigint`

Defined in: [src/types/subscription.ts:214](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L214)

The amount of the balance change in smallest divisible unit or microAlgos.

***

### assetId

> **assetId**: `bigint`

Defined in: [src/types/subscription.ts:212](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L212)

The asset ID of the balance change, or 0 for Algos.

***

### roles

> **roles**: [`BalanceChangeRole`](/docs/algokit-subscriber/typescript/latest/api/algokit-subscriber/types/enumerations/balancechangerole/)[]

Defined in: [src/types/subscription.ts:216](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L216)

The roles the account was playing that led to the balance change
