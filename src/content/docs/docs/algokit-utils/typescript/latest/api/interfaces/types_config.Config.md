---
title: Config
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/config](/docs/algokit-utils/typescript/latest/api/modules/types_config/) / Config

[types/config](/docs/algokit-utils/typescript/latest/api/modules/types_config/).Config

The AlgoKit configuration type

## Table of contents

### Properties

- [debug](/docs/algokit-utils/typescript/latest/api/interfaces/types_config.Config/#debug)
- [events](/docs/algokit-utils/typescript/latest/api/interfaces/types_config.Config/#events)
- [logger](/docs/algokit-utils/typescript/latest/api/interfaces/types_config.Config/#logger)
- [maxSearchDepth](/docs/algokit-utils/typescript/latest/api/interfaces/types_config.Config/#maxsearchdepth)
- [populateAppCallResources](/docs/algokit-utils/typescript/latest/api/interfaces/types_config.Config/#populateappcallresources)
- [projectRoot](/docs/algokit-utils/typescript/latest/api/interfaces/types_config.Config/#projectroot)
- [traceAll](/docs/algokit-utils/typescript/latest/api/interfaces/types_config.Config/#traceall)
- [traceBufferSizeMb](/docs/algokit-utils/typescript/latest/api/interfaces/types_config.Config/#tracebuffersizemb)

## Properties

### debug

• **debug**: `boolean`

Whether or not debug mode is enabled

#### Defined in

[src/types/config.ts:9](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L9)

---

### events

• **events**: [`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitter.AsyncEventEmitter/)

#### Defined in

[src/types/config.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L24)

---

### logger

• **logger**: [`Logger`](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#logger)

Logger

#### Defined in

[src/types/config.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L7)

---

### maxSearchDepth

• **maxSearchDepth**: `number`

The maximum depth to search for a specific file

#### Defined in

[src/types/config.ts:17](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L17)

---

### populateAppCallResources

• **populateAppCallResources**: `boolean`

Whether to enable populateAppCallResources in sendParams by default.
Default value is false.

#### Defined in

[src/types/config.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L22)

---

### projectRoot

• **projectRoot**: `null` \| `string`

The path to the project root directory

#### Defined in

[src/types/config.ts:11](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L11)

---

### traceAll

• **traceAll**: `boolean`

Indicates whether to trace all operations

#### Defined in

[src/types/config.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L13)

---

### traceBufferSizeMb

• **traceBufferSizeMb**: `number`

The size of the trace buffer in megabytes

#### Defined in

[src/types/config.ts:15](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L15)
