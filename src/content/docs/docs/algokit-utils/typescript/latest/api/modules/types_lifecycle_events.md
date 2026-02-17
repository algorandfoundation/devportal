---
title: types/lifecycle-events
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / types/lifecycle-events

## Table of contents

### Enumerations

- [EventType](/docs/algokit-utils/typescript/latest/api/enums/types_lifecycle_events.EventType/)

### Type Aliases

- [EventDataMap](/docs/algokit-utils/typescript/latest/api/modules/types_lifecycle_events/#eventdatamap)

## Type Aliases

### EventDataMap

Ƭ **EventDataMap**: `Object`

#### Index signature

▪ [key: `string`]: `unknown`

#### Type declaration

| Name                | Type                                                                                                                           |
| :------------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| `AppCompiled`       | [`TealSourcesDebugEventData`](/docs/algokit-utils/typescript/latest/api/interfaces/types_debugging.TealSourcesDebugEventData/) |
| `TxnGroupSimulated` | [`AVMTracesEventData`](/docs/algokit-utils/typescript/latest/api/interfaces/types_debugging.AVMTracesEventData/)               |

#### Defined in

[src/types/lifecycle-events.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/lifecycle-events.ts#L8)
