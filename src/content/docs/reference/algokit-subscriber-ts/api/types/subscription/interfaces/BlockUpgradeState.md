---
title: 'Interface: BlockUpgradeState'
---

[**@algorandfoundation/algokit-subscriber**](../../../README.md)

---

[@algorandfoundation/algokit-subscriber](../../../modules.md) / [types/subscription](../README.md) / BlockUpgradeState

Defined in: [src/types/subscription.ts:88](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L88)

## Properties

### currentProtocol

> **currentProtocol**: `string`

Defined in: [src/types/subscription.ts:90](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L90)

Current protocol version

---

### nextProtocol?

> `optional` **nextProtocol**: `string`

Defined in: [src/types/subscription.ts:92](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L92)

The next proposed protocol version.

---

### nextProtocolApprovals?

> `optional` **nextProtocolApprovals**: `bigint`

Defined in: [src/types/subscription.ts:94](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L94)

Number of blocks which approved the protocol upgrade.

---

### nextProtocolSwitchOn?

> `optional` **nextProtocolSwitchOn**: `bigint`

Defined in: [src/types/subscription.ts:98](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L98)

Round on which the protocol upgrade will take effect.

---

### nextProtocolVoteBefore?

> `optional` **nextProtocolVoteBefore**: `bigint`

Defined in: [src/types/subscription.ts:96](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L96)

Deadline round for this protocol upgrade (No votes will be consider after this round).
