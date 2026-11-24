---
editUrl: false
next: false
prev: false
title: "Arc28EventToProcess"
---

Defined in: [src/types/arc-28.ts:25](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L25)

An ARC-28 event to be processed

## Extended by

- [`EmittedArc28Event`](/docs/algokit-subscriber/typescript/latest/api/algokit-subscriber/types/interfaces/emittedarc28event/)

## Properties

### eventDefinition

> **eventDefinition**: [`Arc28Event`](/docs/algokit-subscriber/typescript/latest/api/algokit-subscriber/types/interfaces/arc28event/)

Defined in: [src/types/arc-28.ts:35](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L35)

The ARC-28 definition of the event

***

### eventName

> **eventName**: `string`

Defined in: [src/types/arc-28.ts:29](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L29)

The name of the ARC-28 event that was triggered

***

### eventPrefix

> **eventPrefix**: `string`

Defined in: [src/types/arc-28.ts:33](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L33)

The 4-byte hex prefix for the event

***

### eventSignature

> **eventSignature**: `string`

Defined in: [src/types/arc-28.ts:31](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L31)

The signature of the event e.g. `EventName(type1,type2)`

***

### groupName

> **groupName**: `string`

Defined in: [src/types/arc-28.ts:27](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L27)

The name of the ARC-28 event group the event belongs to
