---
editUrl: false
next: false
prev: false
title: "BlockUpgradeState"
---

Defined in: [src/types/subscription.ts:96](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L96)

## Properties

### currentProtocol

> **currentProtocol**: `string`

Defined in: [src/types/subscription.ts:98](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L98)

Current protocol version

***

### nextProtocol?

> `optional` **nextProtocol?**: `string`

Defined in: [src/types/subscription.ts:100](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L100)

The next proposed protocol version.

***

### nextProtocolApprovals?

> `optional` **nextProtocolApprovals?**: `bigint`

Defined in: [src/types/subscription.ts:102](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L102)

Number of blocks which approved the protocol upgrade.

***

### nextProtocolSwitchOn?

> `optional` **nextProtocolSwitchOn?**: `bigint`

Defined in: [src/types/subscription.ts:106](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L106)

Round on which the protocol upgrade will take effect.

***

### nextProtocolVoteBefore?

> `optional` **nextProtocolVoteBefore?**: `bigint`

Defined in: [src/types/subscription.ts:104](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L104)

Deadline round for this protocol upgrade (No votes will be consider after this round).
