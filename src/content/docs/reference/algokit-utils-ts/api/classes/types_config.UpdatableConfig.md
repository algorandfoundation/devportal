---
title: UpdatableConfig
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/config](/reference/algokit-utils-ts/api/modules/types_config/) / UpdatableConfig

[types/config](/reference/algokit-utils-ts/api/modules/types_config/).UpdatableConfig

Updatable AlgoKit config

## Implements

- `Readonly`\<[`Config`](/reference/algokit-utils-ts/api/interfaces/types_configconfig/)\>

## Table of contents

### Constructors

- [constructor](types_config.UpdatableConfig.md#constructor)

### Properties

- [config](types_config.UpdatableConfig.md#config)

### Accessors

- [debug](types_config.UpdatableConfig.md#debug)
- [events](types_config.UpdatableConfig.md#events)
- [logger](types_config.UpdatableConfig.md#logger)
- [maxSearchDepth](types_config.UpdatableConfig.md#maxsearchdepth)
- [populateAppCallResources](types_config.UpdatableConfig.md#populateappcallresources)
- [projectRoot](types_config.UpdatableConfig.md#projectroot)
- [traceAll](types_config.UpdatableConfig.md#traceall)
- [traceBufferSizeMb](types_config.UpdatableConfig.md#tracebuffersizemb)

### Methods

- [configure](types_config.UpdatableConfig.md#configure)
- [getLogger](types_config.UpdatableConfig.md#getlogger)
- [withDebug](types_config.UpdatableConfig.md#withdebug)

## Constructors

### constructor

• **new UpdatableConfig**(): [`UpdatableConfig`](types_config.UpdatableConfig.md)

#### Returns

[`UpdatableConfig`](types_config.UpdatableConfig.md)

#### Defined in

[src/types/config.ts:90](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L90)

## Properties

### config

• `Private` **config**: [`Config`](/reference/algokit-utils-ts/api/interfaces/types_configconfig/)

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

• `get` **events**(): [`AsyncEventEmitter`](types_async_event_emitter.AsyncEventEmitter.md)

#### Returns

[`AsyncEventEmitter`](types_async_event_emitter.AsyncEventEmitter.md)

#### Implementation of

Readonly.events

#### Defined in

[src/types/config.ts:59](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L59)

---

### logger

• `get` **logger**(): [`Logger`](/reference/algokit-utils-ts/api/modules/types_logging/#logger)

#### Returns

[`Logger`](/reference/algokit-utils-ts/api/modules/types_logging/#logger)

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

| Name        | Type                                                                                    | Description                           |
| :---------- | :-------------------------------------------------------------------------------------- | :------------------------------------ |
| `newConfig` | `Partial`\<[`Config`](/reference/algokit-utils-ts/api/interfaces/types_configconfig/)\> | Partial or complete config to replace |

#### Returns

`void`

#### Defined in

[src/types/config.ts:107](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/config.ts#L107)

---

### getLogger

▸ **getLogger**(`returnNullLogger?`): [`Logger`](/reference/algokit-utils-ts/api/modules/types_logging/#logger)

Returns the current logger, or the null logger if true is passed in to `returnNullLogger`

#### Parameters

| Name                | Type      | Description                              |
| :------------------ | :-------- | :--------------------------------------- |
| `returnNullLogger?` | `boolean` | Whether or not to return the null logger |

#### Returns

[`Logger`](/reference/algokit-utils-ts/api/modules/types_logging/#logger)

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
