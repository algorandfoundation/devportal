---
title: Config
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/config](/docs/algokit-utils/typescript/latest/api/modules/types_config/) / Config



[types/config](/docs/algokit-utils/typescript/latest/api/modules/types_config/).Config

The AlgoKit configuration type

## Table of contents

### Properties

- [debug](/docs/algokit-utils/typescript/latest/api/interfaces/types_configconfig/#debug)
- [events](/docs/algokit-utils/typescript/latest/api/interfaces/types_configconfig/#events)
- [logger](/docs/algokit-utils/typescript/latest/api/interfaces/types_configconfig/#logger)
- [maxSearchDepth](/docs/algokit-utils/typescript/latest/api/interfaces/types_configconfig/#maxsearchdepth)
- [populateAppCallResources](/docs/algokit-utils/typescript/latest/api/interfaces/types_configconfig/#populateappcallresources)
- [projectRoot](/docs/algokit-utils/typescript/latest/api/interfaces/types_configconfig/#projectroot)
- [traceAll](/docs/algokit-utils/typescript/latest/api/interfaces/types_configconfig/#traceall)
- [traceBufferSizeMb](/docs/algokit-utils/typescript/latest/api/interfaces/types_configconfig/#tracebuffersizemb)

## Properties

### debug

• **debug**: `boolean`

Whether or not debug mode is enabled

#### Defined in

[src/types/config.ts:9](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L9)

___

### events

• **events**: [`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/)

#### Defined in

[src/types/config.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L24)

___

### logger

• **logger**: [`Logger`](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#logger)

Logger

#### Defined in

[src/types/config.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L7)

___

### maxSearchDepth

• **maxSearchDepth**: `number`

The maximum depth to search for a specific file

#### Defined in

[src/types/config.ts:17](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L17)

___

### populateAppCallResources

• **populateAppCallResources**: `boolean`

Whether to enable populateAppCallResources in sendParams by default.
Default value is false.

#### Defined in

[src/types/config.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L22)

___

### projectRoot

• **projectRoot**: ``null`` \| `string`

The path to the project root directory

#### Defined in

[src/types/config.ts:11](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L11)

___

### traceAll

• **traceAll**: `boolean`

Indicates whether to trace all operations

#### Defined in

[src/types/config.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L13)

___

### traceBufferSizeMb

• **traceBufferSizeMb**: `number`

The size of the trace buffer in megabytes

#### Defined in

[src/types/config.ts:15](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L15)