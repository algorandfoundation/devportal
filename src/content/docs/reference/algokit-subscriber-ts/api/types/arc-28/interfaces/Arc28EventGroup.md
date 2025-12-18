---
title: 'Interface: Arc28EventGroup'
---

[**@algorandfoundation/algokit-subscriber**](../../../README.md)

---

[@algorandfoundation/algokit-subscriber](../../../modules.md) / [types/arc-28](../README.md) / Arc28EventGroup

Defined in: [src/types/arc-28.ts:47](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L47)

Specifies a group of ARC-28 event definitions along with instructions for when to attempt to process the events.

## Properties

### continueOnError?

> `optional` **continueOnError**: `boolean`

Defined in: [src/types/arc-28.ts:55](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L55)

Whether or not to silently (with warning log) continue if an error is encountered processing the ARC-28 event data; default = false

---

### events

> **events**: [`Arc28Event`](Arc28Event.md)[]

Defined in: [src/types/arc-28.ts:57](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L57)

The list of ARC-28 event definitions

---

### groupName

> **groupName**: `string`

Defined in: [src/types/arc-28.ts:49](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L49)

The name to designate for this group of events.

---

### processForAppIds?

> `optional` **processForAppIds**: `bigint`[]

Defined in: [src/types/arc-28.ts:51](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L51)

Optional list of app IDs that this event should apply to

---

### processTransaction()?

> `optional` **processTransaction**: (`transaction`) => `boolean`

Defined in: [src/types/arc-28.ts:53](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L53)

Optional predicate to indicate if these ARC-28 events should be processed for the given transaction

#### Parameters

##### transaction

[`SubscribedTransaction`](../../subscription/classes/SubscribedTransaction.md)

#### Returns

`boolean`
