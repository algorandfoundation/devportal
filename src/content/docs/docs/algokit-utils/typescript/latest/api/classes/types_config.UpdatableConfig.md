---
title: UpdatableConfig
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/config](/docs/algokit-utils/typescript/latest/api/modules/types_config/) / UpdatableConfig

[types/config](/docs/algokit-utils/typescript/latest/api/modules/types_config/).UpdatableConfig

Updatable AlgoKit config

## Implements

- `Readonly`\<[`Config`](/docs/algokit-utils/typescript/latest/api/interfaces/types_config.Config/)\>

## Table of contents

### Constructors

- [constructor](/docs/algokit-utils/typescript/latest/api/classes/types_config.UpdatableConfig/#constructor)

### Properties

- [config](/docs/algokit-utils/typescript/latest/api/classes/types_config.UpdatableConfig/#config)

### Accessors

- [debug](/docs/algokit-utils/typescript/latest/api/classes/types_config.UpdatableConfig/#debug)
- [events](/docs/algokit-utils/typescript/latest/api/classes/types_config.UpdatableConfig/#events)
- [logger](/docs/algokit-utils/typescript/latest/api/classes/types_config.UpdatableConfig/#logger)
- [maxSearchDepth](/docs/algokit-utils/typescript/latest/api/classes/types_config.UpdatableConfig/#maxsearchdepth)
- [populateAppCallResources](/docs/algokit-utils/typescript/latest/api/classes/types_config.UpdatableConfig/#populateappcallresources)
- [projectRoot](/docs/algokit-utils/typescript/latest/api/classes/types_config.UpdatableConfig/#projectroot)
- [traceAll](/docs/algokit-utils/typescript/latest/api/classes/types_config.UpdatableConfig/#traceall)
- [traceBufferSizeMb](/docs/algokit-utils/typescript/latest/api/classes/types_config.UpdatableConfig/#tracebuffersizemb)

### Methods

- [configure](/docs/algokit-utils/typescript/latest/api/classes/types_config.UpdatableConfig/#configure)
- [getLogger](/docs/algokit-utils/typescript/latest/api/classes/types_config.UpdatableConfig/#getlogger)
- [withDebug](/docs/algokit-utils/typescript/latest/api/classes/types_config.UpdatableConfig/#withdebug)

## Constructors

### constructor

• **new UpdatableConfig**(): [`UpdatableConfig`](/docs/algokit-utils/typescript/latest/api/classes/types_config.UpdatableConfig/)

#### Returns

[`UpdatableConfig`](/docs/algokit-utils/typescript/latest/api/classes/types_config.UpdatableConfig/)

#### Defined in

[src/types/config.ts:90](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L90)

## Properties

### config

• `Private` **config**: [`Config`](/docs/algokit-utils/typescript/latest/api/interfaces/types_config.Config/)

#### Defined in

[src/types/config.ts:29](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L29)

## Accessors

### debug

• `get` **debug**(): `boolean`

#### Returns

`boolean`

#### Implementation of

Readonly.debug

#### Defined in

[src/types/config.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L39)

---

### events

• `get` **events**(): [`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitter.AsyncEventEmitter/)

#### Returns

[`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitter.AsyncEventEmitter/)

#### Implementation of

Readonly.events

#### Defined in

[src/types/config.ts:59](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L59)

---

### logger

• `get` **logger**(): [`Logger`](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#logger)

#### Returns

[`Logger`](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#logger)

#### Implementation of

Readonly.logger

#### Defined in

[src/types/config.ts:35](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L35)

---

### maxSearchDepth

• `get` **maxSearchDepth**(): `number`

#### Returns

`number`

#### Implementation of

Readonly.maxSearchDepth

#### Defined in

[src/types/config.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L55)

---

### populateAppCallResources

• `get` **populateAppCallResources**(): `boolean`

#### Returns

`boolean`

#### Implementation of

Readonly.populateAppCallResources

#### Defined in

[src/types/config.ts:31](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L31)

---

### projectRoot

• `get` **projectRoot**(): `null` \| `string`

#### Returns

`null` \| `string`

#### Implementation of

Readonly.projectRoot

#### Defined in

[src/types/config.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L43)

---

### traceAll

• `get` **traceAll**(): `boolean`

#### Returns

`boolean`

#### Implementation of

Readonly.traceAll

#### Defined in

[src/types/config.ts:47](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L47)

---

### traceBufferSizeMb

• `get` **traceBufferSizeMb**(): `number`

#### Returns

`number`

#### Implementation of

Readonly.traceBufferSizeMb

#### Defined in

[src/types/config.ts:51](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L51)

## Methods

### configure

▸ **configure**(`newConfig`): `void`

Update the AlgoKit configuration with your own configuration settings

#### Parameters

| Name        | Type                                                                                               | Description                           |
| :---------- | :------------------------------------------------------------------------------------------------- | :------------------------------------ |
| `newConfig` | `Partial`\<[`Config`](/docs/algokit-utils/typescript/latest/api/interfaces/types_config.Config/)\> | Partial or complete config to replace |

#### Returns

`void`

#### Defined in

[src/types/config.ts:107](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L107)

---

### getLogger

▸ **getLogger**(`returnNullLogger?`): [`Logger`](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#logger)

Returns the current logger, or the null logger if true is passed in to `returnNullLogger`

#### Parameters

| Name                | Type      | Description                              |
| :------------------ | :-------- | :--------------------------------------- |
| `returnNullLogger?` | `boolean` | Whether or not to return the null logger |

#### Returns

[`Logger`](/docs/algokit-utils/typescript/latest/api/modules/types_logging/#logger)

The requested logger

#### Defined in

[src/types/config.ts:68](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L68)

---

### withDebug

▸ **withDebug**(`lambda`): `void`

Temporarily run with debug set to true.

#### Parameters

| Name     | Type            | Description                                                        |
| :------- | :-------------- | :----------------------------------------------------------------- |
| `lambda` | () => `unknown` | A lambda expression with code to run with debug config set to true |

#### Returns

`void`

#### Defined in

[src/types/config.ts:80](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L80)
