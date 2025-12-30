---
title: types/async-event-emitter
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / types/async-event-emitter

## Table of contents

### Classes

- [AsyncEventEmitter](/reference/algokit-utils-ts/api/classes/types_async_event_emitterasynceventemitter/)

### Type Aliases

- [AsyncEventListener](/reference/algokit-utils-ts/api/modules/types_async_event_emitter/#asynceventlistener)

## Type Aliases

### AsyncEventListener

Ƭ **AsyncEventListener**\<`T`\>: (`event`: `T`, `eventName`: `string` \| `symbol`) => `Promise`\<`void`\> \| `void`

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

#### Type declaration

▸ (`event`, `eventName`): `Promise`\<`void`\> \| `void`

##### Parameters

| Name        | Type                 |
| :---------- | :------------------- |
| `event`     | `T`                  |
| `eventName` | `string` \| `symbol` |

##### Returns

`Promise`\<`void`\> \| `void`

#### Defined in

[src/types/async-event-emitter.ts:3](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/async-event-emitter.ts#L3)
