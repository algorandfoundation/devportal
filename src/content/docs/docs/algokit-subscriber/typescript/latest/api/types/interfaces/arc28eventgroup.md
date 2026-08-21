---
editUrl: false
next: false
prev: false
title: 'Arc28EventGroup'
---

Defined in: [src/types/arc-28.ts:46](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L46)

Specifies a group of ARC-28 event definitions along with instructions for when to attempt to process the events.

## Properties

### continueOnError?

> `optional` **continueOnError**: `boolean`

Defined in: [src/types/arc-28.ts:54](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L54)

Whether or not to silently (with warning log) continue if an error is encountered processing the ARC-28 event data; default = false

---

### events

> **events**: [`Arc28Event`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/arc28event/)[]

Defined in: [src/types/arc-28.ts:56](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L56)

The list of ARC-28 event definitions

---

### groupName

> **groupName**: `string`

Defined in: [src/types/arc-28.ts:48](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L48)

The name to designate for this group of events.

---

### processForAppIds?

> `optional` **processForAppIds**: `bigint`[]

Defined in: [src/types/arc-28.ts:50](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L50)

Optional list of app IDs that this event should apply to

---

### processTransaction()?

> `optional` **processTransaction**: (`transaction`) => `boolean`

Defined in: [src/types/arc-28.ts:52](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L52)

Optional predicate to indicate if these ARC-28 events should be processed for the given transaction

#### Parameters

##### transaction

[`SubscribedTransaction`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/subscribedtransaction/)

#### Returns

`boolean`
