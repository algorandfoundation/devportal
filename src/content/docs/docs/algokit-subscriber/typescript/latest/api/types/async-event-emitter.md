---
title: types/async-event-emitter
---

# types/async-event-emitter

## Classes

### AsyncEventEmitter

Defined in: [src/types/async-event-emitter.ts:10](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/async-event-emitter.ts#L10)

Simple asynchronous event emitter class.

**Note:** This class is not thread-safe.

#### Constructors

##### Constructor

> **new AsyncEventEmitter**(): [`AsyncEventEmitter`](#asynceventemitter)

###### Returns

[`AsyncEventEmitter`](#asynceventemitter)

#### Properties

| Property               | Type                                                                   | Description                 | Defined in                                                                                                                             |
| ---------------------- | ---------------------------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="off"></a> `off` | (`eventName`, `listener`) => [`AsyncEventEmitter`](#asynceventemitter) | Alias for `removeListener`. | [src/types/async-event-emitter.ts:82](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/async-event-emitter.ts#L82) |

#### Methods

##### emitAsync()

> **emitAsync**(`eventName`, `event`): `Promise`\<`void`\>

Defined in: [src/types/async-event-emitter.ts:21](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/async-event-emitter.ts#L21)

Emit an event and wait for all registered listeners to be run one-by-one
in the order they were registered.

###### Parameters

| Parameter   | Type                 | Description           |
| ----------- | -------------------- | --------------------- |
| `eventName` | `string` \| `symbol` | The name of the event |
| `event`     | `unknown`            | The event payload     |

###### Returns

`Promise`\<`void`\>

##### on()

> **on**(`eventName`, `listener`): [`AsyncEventEmitter`](#asynceventemitter)

Defined in: [src/types/async-event-emitter.ts:33](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/async-event-emitter.ts#L33)

Register an event listener for the given event.

###### Parameters

| Parameter   | Type                                        | Description             |
| ----------- | ------------------------------------------- | ----------------------- |
| `eventName` | `string` \| `symbol`                        | The name of the event   |
| `listener`  | [`AsyncEventListener`](#asynceventlistener) | The listener to trigger |

###### Returns

[`AsyncEventEmitter`](#asynceventemitter)

The `AsyncEventEmitter` so you can chain registrations

##### once()

> **once**(`eventName`, `listener`): [`AsyncEventEmitter`](#asynceventemitter)

Defined in: [src/types/async-event-emitter.ts:45](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/async-event-emitter.ts#L45)

Register an event listener for the given event that is only fired once.

###### Parameters

| Parameter   | Type                                        | Description             |
| ----------- | ------------------------------------------- | ----------------------- |
| `eventName` | `string` \| `symbol`                        | The name of the event   |
| `listener`  | [`AsyncEventListener`](#asynceventlistener) | The listener to trigger |

###### Returns

[`AsyncEventEmitter`](#asynceventemitter)

The `AsyncEventEmitter` so you can chain registrations

##### removeListener()

> **removeListener**(`eventName`, `listener`): [`AsyncEventEmitter`](#asynceventemitter)

Defined in: [src/types/async-event-emitter.ts:63](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/async-event-emitter.ts#L63)

Removes an event listener from the given event.

###### Parameters

| Parameter   | Type                                        | Description            |
| ----------- | ------------------------------------------- | ---------------------- |
| `eventName` | `string` \| `symbol`                        | The name of the event  |
| `listener`  | [`AsyncEventListener`](#asynceventlistener) | The listener to remove |

###### Returns

[`AsyncEventEmitter`](#asynceventemitter)

The `AsyncEventEmitter` so you can chain registrations

## Type Aliases

### AsyncEventListener()

> **AsyncEventListener** = (`event`, `eventName`) => `Promise`\<`void`\> \| `void`

Defined in: [src/types/async-event-emitter.ts:4](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/async-event-emitter.ts#L4)

An asynchronous event listener

#### Parameters

| Parameter   | Type                 |
| ----------- | -------------------- |
| `event`     | `unknown`            |
| `eventName` | `string` \| `symbol` |

#### Returns

`Promise`\<`void`\> \| `void`
