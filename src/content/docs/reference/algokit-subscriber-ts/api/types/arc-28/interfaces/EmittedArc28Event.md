---
title: EmittedArc28Event
---

[**@algorandfoundation/algokit-subscriber**](../../../README.md)

---

# Interface: EmittedArc28Event

Defined in: [src/types/arc-28.ts:39](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L39)

An emitted ARC-28 event extracted from an app call log.

## Extends

- [`Arc28EventToProcess`](Arc28EventToProcess.md)

## Properties

### args

> **args**: `ABIValue`[]

Defined in: [src/types/arc-28.ts:41](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L41)

The ordered arguments extracted from the event that was emitted

---

### argsByName

> **argsByName**: `Record`\<`string`, `ABIValue`\>

Defined in: [src/types/arc-28.ts:43](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L43)

The named arguments extracted from the event that was emitted (where the arguments had a name defined)

---

### eventDefinition

> **eventDefinition**: [`Arc28Event`](Arc28Event.md)

Defined in: [src/types/arc-28.ts:35](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L35)

The ARC-28 definition of the event

#### Inherited from

[`Arc28EventToProcess`](Arc28EventToProcess.md).[`eventDefinition`](Arc28EventToProcess.md#eventdefinition)

---

### eventName

> **eventName**: `string`

Defined in: [src/types/arc-28.ts:29](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L29)

The name of the ARC-28 event that was triggered

#### Inherited from

[`Arc28EventToProcess`](Arc28EventToProcess.md).[`eventName`](Arc28EventToProcess.md#eventname)

---

### eventPrefix

> **eventPrefix**: `string`

Defined in: [src/types/arc-28.ts:33](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L33)

The 4-byte hex prefix for the event

#### Inherited from

[`Arc28EventToProcess`](Arc28EventToProcess.md).[`eventPrefix`](Arc28EventToProcess.md#eventprefix)

---

### eventSignature

> **eventSignature**: `string`

Defined in: [src/types/arc-28.ts:31](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L31)

The signature of the event e.g. `EventName(type1,type2)`

#### Inherited from

[`Arc28EventToProcess`](Arc28EventToProcess.md).[`eventSignature`](Arc28EventToProcess.md#eventsignature)

---

### groupName

> **groupName**: `string`

Defined in: [src/types/arc-28.ts:27](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L27)

The name of the ARC-28 event group the event belongs to

#### Inherited from

[`Arc28EventToProcess`](Arc28EventToProcess.md).[`groupName`](Arc28EventToProcess.md#groupname)
