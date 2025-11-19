---
title: AsyncEventEmitter
---

[**@algorandfoundation/algokit-subscriber**](../../../README.md)

---

# Class: AsyncEventEmitter

Defined in: [src/types/async-event-emitter.ts:10](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/async-event-emitter.ts#L10)

Simple asynchronous event emitter class.

**Note:** This class is not thread-safe.

## Constructors

### Constructor

> **new AsyncEventEmitter**(): `AsyncEventEmitter`

#### Returns

`AsyncEventEmitter`

## Properties

### off()

> **off**: (`eventName`, `listener`) => `AsyncEventEmitter`

Defined in: [src/types/async-event-emitter.ts:82](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/async-event-emitter.ts#L82)

Alias for `removeListener`.

Removes an event listener from the given event.

#### Parameters

##### eventName

The name of the event

`string` | `symbol`

##### listener

[`AsyncEventListener`](../type-aliases/AsyncEventListener.md)

The listener to remove

#### Returns

`AsyncEventEmitter`

The `AsyncEventEmitter` so you can chain registrations

## Methods

### emitAsync()

> **emitAsync**(`eventName`, `event`): `Promise`\<`void`\>

Defined in: [src/types/async-event-emitter.ts:21](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/async-event-emitter.ts#L21)

Emit an event and wait for all registered listeners to be run one-by-one
in the order they were registered.

#### Parameters

##### eventName

The name of the event

`string` | `symbol`

##### event

`unknown`

The event payload

#### Returns

`Promise`\<`void`\>

---

### on()

> **on**(`eventName`, `listener`): `AsyncEventEmitter`

Defined in: [src/types/async-event-emitter.ts:33](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/async-event-emitter.ts#L33)

Register an event listener for the given event.

#### Parameters

##### eventName

The name of the event

`string` | `symbol`

##### listener

[`AsyncEventListener`](../type-aliases/AsyncEventListener.md)

The listener to trigger

#### Returns

`AsyncEventEmitter`

The `AsyncEventEmitter` so you can chain registrations

---

### once()

> **once**(`eventName`, `listener`): `AsyncEventEmitter`

Defined in: [src/types/async-event-emitter.ts:45](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/async-event-emitter.ts#L45)

Register an event listener for the given event that is only fired once.

#### Parameters

##### eventName

The name of the event

`string` | `symbol`

##### listener

[`AsyncEventListener`](../type-aliases/AsyncEventListener.md)

The listener to trigger

#### Returns

`AsyncEventEmitter`

The `AsyncEventEmitter` so you can chain registrations

---

### removeListener()

> **removeListener**(`eventName`, `listener`): `AsyncEventEmitter`

Defined in: [src/types/async-event-emitter.ts:63](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/async-event-emitter.ts#L63)

Removes an event listener from the given event.

#### Parameters

##### eventName

The name of the event

`string` | `symbol`

##### listener

[`AsyncEventListener`](../type-aliases/AsyncEventListener.md)

The listener to remove

#### Returns

`AsyncEventEmitter`

The `AsyncEventEmitter` so you can chain registrations
