---
editUrl: false
next: false
prev: false
title: "BalanceChangeRole"
---

Defined in: [src/types/subscription.ts:220](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L220)

The role that an account was playing for a given balance change.

## Enumeration Members

### AssetCreator

> **AssetCreator**: `"AssetCreator"`

Defined in: [src/types/subscription.ts:228](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L228)

Account was creating an asset and holds the full asset supply

***

### AssetDestroyer

> **AssetDestroyer**: `"AssetDestroyer"`

Defined in: [src/types/subscription.ts:232](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L232)

Account was destroying an asset and has removed the full asset supply from circulation.
A balance change with this role will always have a 0 amount and use the asset manager address.

***

### CloseTo

> **CloseTo**: `"CloseTo"`

Defined in: [src/types/subscription.ts:226](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L226)

Account was having an asset amount closed to it

***

### Receiver

> **Receiver**: `"Receiver"`

Defined in: [src/types/subscription.ts:224](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L224)

Account was receiving a transaction

***

### Sender

> **Sender**: `"Sender"`

Defined in: [src/types/subscription.ts:222](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L222)

Account was sending a transaction (sending asset and/or spending fee if asset `0`)
