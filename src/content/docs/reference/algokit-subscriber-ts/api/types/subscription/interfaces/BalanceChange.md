---
title: BalanceChange
---

[**@algorandfoundation/algokit-subscriber**](../../../README.md)

---

# Interface: BalanceChange

Defined in: [src/types/subscription.ts:200](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L200)

Represents a balance change effect for a transaction.

## Properties

### address

> **address**: `string`

Defined in: [src/types/subscription.ts:202](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L202)

The address that the balance change is for.

---

### amount

> **amount**: `bigint`

Defined in: [src/types/subscription.ts:206](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L206)

The amount of the balance change in smallest divisible unit or microAlgos.

---

### assetId

> **assetId**: `bigint`

Defined in: [src/types/subscription.ts:204](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L204)

The asset ID of the balance change, or 0 for Algos.

---

### roles

> **roles**: [`BalanceChangeRole`](../enumerations/BalanceChangeRole.md)[]

Defined in: [src/types/subscription.ts:208](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L208)

The roles the account was playing that led to the balance change
