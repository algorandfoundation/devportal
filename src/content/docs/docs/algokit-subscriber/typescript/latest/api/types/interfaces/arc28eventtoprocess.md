---
editUrl: false
next: false
prev: false
title: "Arc28EventToProcess"
---

Defined in: [src/types/arc-28.ts:24](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L24)

An ARC-28 event to be processed

## Extended by

- [`EmittedArc28Event`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/emittedarc28event/)

## Properties

### eventDefinition

> **eventDefinition**: [`Arc28Event`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/arc28event/)

Defined in: [src/types/arc-28.ts:34](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L34)

The ARC-28 definition of the event

***

### eventName

> **eventName**: `string`

Defined in: [src/types/arc-28.ts:28](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L28)

The name of the ARC-28 event that was triggered

***

### eventPrefix

> **eventPrefix**: `string`

Defined in: [src/types/arc-28.ts:32](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L32)

The 4-byte hex prefix for the event

***

### eventSignature

> **eventSignature**: `string`

Defined in: [src/types/arc-28.ts:30](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L30)

The signature of the event e.g. `EventName(type1,type2)`

***

### groupName

> **groupName**: `string`

Defined in: [src/types/arc-28.ts:26](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/arc-28.ts#L26)

The name of the ARC-28 event group the event belongs to
