---
title: AsyncEventEmitter
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/async-event-emitter](/reference/algokit-utils-ts/api/modules/types_async_event_emitter/) / AsyncEventEmitter

[types/async-event-emitter](/reference/algokit-utils-ts/api/modules/types_async_event_emitter/).AsyncEventEmitter

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [listenerMap](#listenermap)
- [listenerWrapperMap](#listenerwrappermap)
- [off](#off)

### Methods

- [emitAsync](#emitasync)
- [on](#on)
- [once](#once)
- [removeListener](#removelistener)

## Constructors

### constructor

• **new AsyncEventEmitter**(): [`AsyncEventEmitter`]()

#### Returns

[`AsyncEventEmitter`]()

## Properties

### listenerMap

• `Private` **listenerMap**: `Record`\<`string` \| `symbol`, [`AsyncEventListener`](/reference/algokit-utils-ts/api/modules/types_async_event_emitter/#asynceventlistener)\<`unknown`\>[]\> = `{}`

#### Defined in

[src/types/async-event-emitter.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L7)

---

### listenerWrapperMap

• `Private` **listenerWrapperMap**: `WeakMap`\<[`AsyncEventListener`](/reference/algokit-utils-ts/api/modules/types_async_event_emitter/#asynceventlistener)\<`unknown`\>, [`AsyncEventListener`](/reference/algokit-utils-ts/api/modules/types_async_event_emitter/#asynceventlistener)\<`unknown`\>\>

#### Defined in

[src/types/async-event-emitter.ts:6](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L6)

---

### off

• **off**: (`eventName`: `string` \| `symbol`, `listener`: [`AsyncEventListener`](/reference/algokit-utils-ts/api/modules/types_async_event_emitter/#asynceventlistener)\<`unknown`\>) => [`AsyncEventEmitter`]()

#### Type declaration

▸ (`eventName`, `listener`): [`AsyncEventEmitter`]()

##### Parameters

| Name        | Type                                                                                                                       |
| :---------- | :------------------------------------------------------------------------------------------------------------------------- |
| `eventName` | `string` \| `symbol`                                                                                                       |
| `listener`  | [`AsyncEventListener`](/reference/algokit-utils-ts/api/modules/types_async_event_emitter/#asynceventlistener)\<`unknown`\> |

##### Returns

[`AsyncEventEmitter`]()

#### Defined in

[src/types/async-event-emitter.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L55)

## Methods

### emitAsync

▸ **emitAsync**\<`K`\>(`eventName`, `event`): `Promise`\<`void`\>

#### Type parameters

| Name | Type                                                                                          |
| :--- | :-------------------------------------------------------------------------------------------- |
| `K`  | extends [`EventType`](/reference/algokit-utils-ts/api/enums/types_lifecycle_eventseventtype/) |

#### Parameters

| Name        | Type                                                                                                |
| :---------- | :-------------------------------------------------------------------------------------------------- |
| `eventName` | `K`                                                                                                 |
| `event`     | [`EventDataMap`](/reference/algokit-utils-ts/api/modules/types_lifecycle_events/#eventdatamap)[`K`] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/types/async-event-emitter.ts:9](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L9)

▸ **emitAsync**(`eventName`, `event`): `Promise`\<`void`\>

#### Parameters

| Name        | Type                 |
| :---------- | :------------------- |
| `eventName` | `string` \| `symbol` |
| `event`     | `unknown`            |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/types/async-event-emitter.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L10)

---

### on

▸ **on**\<`K`\>(`eventName`, `listener`): [`AsyncEventEmitter`]()

#### Type parameters

| Name | Type                                                                                          |
| :--- | :-------------------------------------------------------------------------------------------- |
| `K`  | extends [`EventType`](/reference/algokit-utils-ts/api/enums/types_lifecycle_eventseventtype/) |

#### Parameters

| Name        | Type                                                                                                                                                                                                                 |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `eventName` | `K`                                                                                                                                                                                                                  |
| `listener`  | [`AsyncEventListener`](/reference/algokit-utils-ts/api/modules/types_async_event_emitter/#asynceventlistener)\<[`EventDataMap`](/reference/algokit-utils-ts/api/modules/types_lifecycle_events/#eventdatamap)[`K`]\> |

#### Returns

[`AsyncEventEmitter`]()

#### Defined in

[src/types/async-event-emitter.ts:17](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L17)

▸ **on**\<`T`\>(`eventName`, `listener`): [`AsyncEventEmitter`]()

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

#### Parameters

| Name        | Type                                                                                                                 |
| :---------- | :------------------------------------------------------------------------------------------------------------------- |
| `eventName` | `string` \| `symbol`                                                                                                 |
| `listener`  | [`AsyncEventListener`](/reference/algokit-utils-ts/api/modules/types_async_event_emitter/#asynceventlistener)\<`T`\> |

#### Returns

[`AsyncEventEmitter`]()

#### Defined in

[src/types/async-event-emitter.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L18)

---

### once

▸ **once**\<`K`\>(`eventName`, `listener`): [`AsyncEventEmitter`]()

#### Type parameters

| Name | Type                                                                                          |
| :--- | :-------------------------------------------------------------------------------------------- |
| `K`  | extends [`EventType`](/reference/algokit-utils-ts/api/enums/types_lifecycle_eventseventtype/) |

#### Parameters

| Name        | Type                                                                                                                                                                                                                 |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `eventName` | `K`                                                                                                                                                                                                                  |
| `listener`  | [`AsyncEventListener`](/reference/algokit-utils-ts/api/modules/types_async_event_emitter/#asynceventlistener)\<[`EventDataMap`](/reference/algokit-utils-ts/api/modules/types_lifecycle_events/#eventdatamap)[`K`]\> |

#### Returns

[`AsyncEventEmitter`]()

#### Defined in

[src/types/async-event-emitter.ts:25](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L25)

▸ **once**\<`T`\>(`eventName`, `listener`): [`AsyncEventEmitter`]()

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

#### Parameters

| Name        | Type                                                                                                                 |
| :---------- | :------------------------------------------------------------------------------------------------------------------- |
| `eventName` | `string` \| `symbol`                                                                                                 |
| `listener`  | [`AsyncEventListener`](/reference/algokit-utils-ts/api/modules/types_async_event_emitter/#asynceventlistener)\<`T`\> |

#### Returns

[`AsyncEventEmitter`]()

#### Defined in

[src/types/async-event-emitter.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L26)

---

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`AsyncEventEmitter`]()

#### Parameters

| Name        | Type                                                                                                                       |
| :---------- | :------------------------------------------------------------------------------------------------------------------------- |
| `eventName` | `string` \| `symbol`                                                                                                       |
| `listener`  | [`AsyncEventListener`](/reference/algokit-utils-ts/api/modules/types_async_event_emitter/#asynceventlistener)\<`unknown`\> |

#### Returns

[`AsyncEventEmitter`]()

#### Defined in

[src/types/async-event-emitter.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L39)
