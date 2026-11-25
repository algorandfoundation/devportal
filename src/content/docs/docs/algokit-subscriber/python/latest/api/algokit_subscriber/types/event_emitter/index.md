---
title: "algokit_subscriber.types.event_emitter"
---

<div class="api-ref">

## Attributes

| [`EventListener`](#eventlistener)   | A function that takes a SubscribedTransaction and the event name.   |
|----------------------------------------------------------------------------|---------------------------------------------------------------------|

## Classes

| [`EventEmitter`](#class-eventemitter)   | A simple event emitter that allows for the registration of event listeners and the   |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------|

## Module Contents

### EventListener

A function that takes a SubscribedTransaction and the event name.

### *class* EventEmitter

A simple event emitter that allows for the registration of event listeners and the
emission of events to those listeners.

#### emit(event_name: str, event: Any) → None

Emits an event to all listeners registered for the event name.

#### on(event_name: str, listener: EventListener) → [EventEmitter](#class-eventemitter)

Registers a listener for the given event name.

#### once(event_name: str, listener: EventListener) → [EventEmitter](#class-eventemitter)

Registers a listener for the given event name that will only be called once.

#### remove_listener(event_name: str, listener: EventListener) → [EventEmitter](#class-eventemitter)

Removes a listener for the given event name.

#### off


</div>
