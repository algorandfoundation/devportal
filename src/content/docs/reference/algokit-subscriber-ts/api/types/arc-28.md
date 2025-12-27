---
title: types/arc-28
---

[**@algorandfoundation/algokit-subscriber**](../README.md)

---

[@algorandfoundation/algokit-subscriber](../modules.md) / types/arc-28

# types/arc-28

## Interfaces

### Arc28Event

Defined in: [src/types/arc-28.ts:8](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L8)

The definition of metadata for an ARC-28 event per https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0028.md#event.

#### Properties

##### args

> **args**: `object`[]

Defined in: [src/types/arc-28.ts:14](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L14)

The arguments of the event, in order

###### desc?

> `optional` **desc**: `string`

Optional, user-friendly description for the argument

###### name?

> `optional` **name**: `string`

Optional, user-friendly name for the argument

###### type

> **type**: `string`

The type of the argument

##### desc?

> `optional` **desc**: `string`

Defined in: [src/types/arc-28.ts:12](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L12)

Optional, user-friendly description for the event

##### name

> **name**: `string`

Defined in: [src/types/arc-28.ts:10](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L10)

The name of the event

---

### Arc28EventGroup

Defined in: [src/types/arc-28.ts:47](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L47)

Specifies a group of ARC-28 event definitions along with instructions for when to attempt to process the events.

#### Properties

##### continueOnError?

> `optional` **continueOnError**: `boolean`

Defined in: [src/types/arc-28.ts:55](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L55)

Whether or not to silently (with warning log) continue if an error is encountered processing the ARC-28 event data; default = false

##### events

> **events**: [`Arc28Event`](#arc28event)[]

Defined in: [src/types/arc-28.ts:57](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L57)

The list of ARC-28 event definitions

##### groupName

> **groupName**: `string`

Defined in: [src/types/arc-28.ts:49](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L49)

The name to designate for this group of events.

##### processForAppIds?

> `optional` **processForAppIds**: `bigint`[]

Defined in: [src/types/arc-28.ts:51](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L51)

Optional list of app IDs that this event should apply to

##### processTransaction()?

> `optional` **processTransaction**: (`transaction`) => `boolean`

Defined in: [src/types/arc-28.ts:53](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L53)

Optional predicate to indicate if these ARC-28 events should be processed for the given transaction

###### Parameters

###### transaction

[`SubscribedTransaction`](subscription.md#subscribedtransaction)

###### Returns

`boolean`

---

### Arc28EventToProcess

Defined in: [src/types/arc-28.ts:25](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L25)

An ARC-28 event to be processed

#### Extended by

- [`EmittedArc28Event`](#emittedarc28event)

#### Properties

##### eventDefinition

> **eventDefinition**: [`Arc28Event`](#arc28event)

Defined in: [src/types/arc-28.ts:35](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L35)

The ARC-28 definition of the event

##### eventName

> **eventName**: `string`

Defined in: [src/types/arc-28.ts:29](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L29)

The name of the ARC-28 event that was triggered

##### eventPrefix

> **eventPrefix**: `string`

Defined in: [src/types/arc-28.ts:33](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L33)

The 4-byte hex prefix for the event

##### eventSignature

> **eventSignature**: `string`

Defined in: [src/types/arc-28.ts:31](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L31)

The signature of the event e.g. `EventName(type1,type2)`

##### groupName

> **groupName**: `string`

Defined in: [src/types/arc-28.ts:27](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L27)

The name of the ARC-28 event group the event belongs to

---

### EmittedArc28Event

Defined in: [src/types/arc-28.ts:39](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L39)

An emitted ARC-28 event extracted from an app call log.

#### Extends

- [`Arc28EventToProcess`](#arc28eventtoprocess)

#### Properties

##### args

> **args**: `ABIValue`[]

Defined in: [src/types/arc-28.ts:41](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L41)

The ordered arguments extracted from the event that was emitted

##### argsByName

> **argsByName**: `Record`\<`string`, `ABIValue`\>

Defined in: [src/types/arc-28.ts:43](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L43)

The named arguments extracted from the event that was emitted (where the arguments had a name defined)

##### eventDefinition

> **eventDefinition**: [`Arc28Event`](#arc28event)

Defined in: [src/types/arc-28.ts:35](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L35)

The ARC-28 definition of the event

###### Inherited from

[`Arc28EventToProcess`](#arc28eventtoprocess).[`eventDefinition`](#eventdefinition)

##### eventName

> **eventName**: `string`

Defined in: [src/types/arc-28.ts:29](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L29)

The name of the ARC-28 event that was triggered

###### Inherited from

[`Arc28EventToProcess`](#arc28eventtoprocess).[`eventName`](#eventname)

##### eventPrefix

> **eventPrefix**: `string`

Defined in: [src/types/arc-28.ts:33](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L33)

The 4-byte hex prefix for the event

###### Inherited from

[`Arc28EventToProcess`](#arc28eventtoprocess).[`eventPrefix`](#eventprefix)

##### eventSignature

> **eventSignature**: `string`

Defined in: [src/types/arc-28.ts:31](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L31)

The signature of the event e.g. `EventName(type1,type2)`

###### Inherited from

[`Arc28EventToProcess`](#arc28eventtoprocess).[`eventSignature`](#eventsignature)

##### groupName

> **groupName**: `string`

Defined in: [src/types/arc-28.ts:27](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L27)

The name of the ARC-28 event group the event belongs to

###### Inherited from

[`Arc28EventToProcess`](#arc28eventtoprocess).[`groupName`](#groupname-1)
