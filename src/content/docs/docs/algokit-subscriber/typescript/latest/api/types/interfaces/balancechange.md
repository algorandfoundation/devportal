---
editUrl: false
next: false
prev: false
title: 'BalanceChange'
---

Defined in: [src/types/subscription.ts:181](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L181)

Represents a balance change effect for a transaction.

## Properties

### address

> **address**: `string`

Defined in: [src/types/subscription.ts:183](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L183)

The address that the balance change is for.

---

### amount

> **amount**: `bigint`

Defined in: [src/types/subscription.ts:187](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L187)

The amount of the balance change in smallest divisible unit or microAlgos.

---

### assetId

> **assetId**: `bigint`

Defined in: [src/types/subscription.ts:185](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L185)

The asset ID of the balance change, or 0 for Algos.

---

### roles

> **roles**: [`BalanceChangeRole`](/docs/algokit-subscriber/typescript/latest/api/types/enumerations/balancechangerole/)[]

Defined in: [src/types/subscription.ts:189](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L189)

The roles the account was playing that led to the balance change
