---
title: types/lifecycle-events
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / types/lifecycle-events

## Table of contents

### Enumerations

- [EventType](/docs/algokit-utils/typescript/latest/api/enums/types_lifecycle_eventseventtype/)

### Type Aliases

- [EventDataMap](/docs/algokit-utils/typescript/latest/api/modules/types_lifecycle_events/#eventdatamap)

## Type Aliases

### EventDataMap

Ƭ **EventDataMap**: `Object`

#### Index signature

▪ [key: `string`]: `unknown`

#### Type declaration

| Name                | Type                                                                                                                          |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| `AppCompiled`       | [`TealSourcesDebugEventData`](/docs/algokit-utils/typescript/latest/api/interfaces/types_debuggingtealsourcesdebugeventdata/) |
| `TxnGroupSimulated` | [`AVMTracesEventData`](/docs/algokit-utils/typescript/latest/api/interfaces/types_debuggingavmtraceseventdata/)               |

#### Defined in

[src/types/lifecycle-events.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/lifecycle-events.ts#L8)
