---
title: AsyncEventEmitter
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/async-event-emitter](/docs/algokit-utils/typescript/latest/api/modules/types_async_event_emitter/) / AsyncEventEmitter



[types/async-event-emitter](/docs/algokit-utils/typescript/latest/api/modules/types_async_event_emitter/).AsyncEventEmitter

## Table of contents

### Constructors

- [constructor](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/#constructor)

### Properties

- [listenerMap](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/#listenermap)
- [listenerWrapperMap](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/#listenerwrappermap)
- [off](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/#off)

### Methods

- [emitAsync](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/#emitasync)
- [on](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/#on)
- [once](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/#once)
- [removeListener](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/#removelistener)

## Constructors

### constructor

• **new AsyncEventEmitter**(): [`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/)

#### Returns

[`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/)

## Properties

### listenerMap

• `Private` **listenerMap**: `Record`\<`string` \| `symbol`, [`AsyncEventListener`](/docs/algokit-utils/typescript/latest/api/modules/types_async_event_emitter/#asynceventlistener)\<`unknown`\>[]\> = `{}`

#### Defined in

[src/types/async-event-emitter.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L7)

___

### listenerWrapperMap

• `Private` **listenerWrapperMap**: `WeakMap`\<[`AsyncEventListener`](/docs/algokit-utils/typescript/latest/api/modules/types_async_event_emitter/#asynceventlistener)\<`unknown`\>, [`AsyncEventListener`](/docs/algokit-utils/typescript/latest/api/modules/types_async_event_emitter/#asynceventlistener)\<`unknown`\>\>

#### Defined in

[src/types/async-event-emitter.ts:6](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L6)

___

### off

• **off**: (`eventName`: `string` \| `symbol`, `listener`: [`AsyncEventListener`](/docs/algokit-utils/typescript/latest/api/modules/types_async_event_emitter/#asynceventlistener)\<`unknown`\>) => [`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/)

#### Type declaration

▸ (`eventName`, `listener`): [`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/)

##### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | [`AsyncEventListener`](/docs/algokit-utils/typescript/latest/api/modules/types_async_event_emitter/#asynceventlistener)\<`unknown`\> |

##### Returns

[`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/)

#### Defined in

[src/types/async-event-emitter.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L55)

## Methods

### emitAsync

▸ **emitAsync**\<`K`\>(`eventName`, `event`): `Promise`\<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventType`](/docs/algokit-utils/typescript/latest/api/enums/types_lifecycle_eventseventtype/) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `event` | [`EventDataMap`](/docs/algokit-utils/typescript/latest/api/modules/types_lifecycle_events/#eventdatamap)[`K`] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/types/async-event-emitter.ts:9](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L9)

▸ **emitAsync**(`eventName`, `event`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `event` | `unknown` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/types/async-event-emitter.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L10)

___

### on

▸ **on**\<`K`\>(`eventName`, `listener`): [`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventType`](/docs/algokit-utils/typescript/latest/api/enums/types_lifecycle_eventseventtype/) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | [`AsyncEventListener`](/docs/algokit-utils/typescript/latest/api/modules/types_async_event_emitter/#asynceventlistener)\<[`EventDataMap`](/docs/algokit-utils/typescript/latest/api/modules/types_lifecycle_events/#eventdatamap)[`K`]\> |

#### Returns

[`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/)

#### Defined in

[src/types/async-event-emitter.ts:17](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L17)

▸ **on**\<`T`\>(`eventName`, `listener`): [`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | [`AsyncEventListener`](/docs/algokit-utils/typescript/latest/api/modules/types_async_event_emitter/#asynceventlistener)\<`T`\> |

#### Returns

[`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/)

#### Defined in

[src/types/async-event-emitter.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L18)

___

### once

▸ **once**\<`K`\>(`eventName`, `listener`): [`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventType`](/docs/algokit-utils/typescript/latest/api/enums/types_lifecycle_eventseventtype/) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | [`AsyncEventListener`](/docs/algokit-utils/typescript/latest/api/modules/types_async_event_emitter/#asynceventlistener)\<[`EventDataMap`](/docs/algokit-utils/typescript/latest/api/modules/types_lifecycle_events/#eventdatamap)[`K`]\> |

#### Returns

[`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/)

#### Defined in

[src/types/async-event-emitter.ts:25](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L25)

▸ **once**\<`T`\>(`eventName`, `listener`): [`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | [`AsyncEventListener`](/docs/algokit-utils/typescript/latest/api/modules/types_async_event_emitter/#asynceventlistener)\<`T`\> |

#### Returns

[`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/)

#### Defined in

[src/types/async-event-emitter.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L26)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | [`AsyncEventListener`](/docs/algokit-utils/typescript/latest/api/modules/types_async_event_emitter/#asynceventlistener)\<`unknown`\> |

#### Returns

[`AsyncEventEmitter`](/docs/algokit-utils/typescript/latest/api/classes/types_async_event_emitterasynceventemitter/)

#### Defined in

[src/types/async-event-emitter.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L39)