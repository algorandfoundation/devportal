---
title: Config
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/config](/reference/algokit-utils-ts/api/modules/types_config/) / Config

[types/config](/reference/algokit-utils-ts/api/modules/types_config/).Config

The AlgoKit configuration type

## Table of contents

### Properties

- [debug](types_config.Config.md#debug)
- [events](types_config.Config.md#events)
- [logger](types_config.Config.md#logger)
- [maxSearchDepth](types_config.Config.md#maxsearchdepth)
- [populateAppCallResources](types_config.Config.md#populateappcallresources)
- [projectRoot](types_config.Config.md#projectroot)
- [traceAll](types_config.Config.md#traceall)
- [traceBufferSizeMb](types_config.Config.md#tracebuffersizemb)

## Properties

### debug

• **debug**: `boolean`

Whether or not debug mode is enabled

#### Defined in

[src/types/config.ts:9](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L9)

---

### events

• **events**: [`AsyncEventEmitter`](/reference/algokit-utils-ts/api/classes/types_async_event_emitterasynceventemitter/)

#### Defined in

[src/types/config.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L24)

---

### logger

• **logger**: [`Logger`](/reference/algokit-utils-ts/api/modules/types_logging/#logger)

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
