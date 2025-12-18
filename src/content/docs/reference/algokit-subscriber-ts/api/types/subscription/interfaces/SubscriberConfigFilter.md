---
title: 'Interface: SubscriberConfigFilter\<T\>'
---

[**@algorandfoundation/algokit-subscriber**](../../../README.md)

---

[@algorandfoundation/algokit-subscriber](../../../modules.md) / [types/subscription](../README.md) / SubscriberConfigFilter

Defined in: [src/types/subscription.ts:404](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L404)

A single event to subscribe to / emit.

## Hierarchy

[View Summary](../../../hierarchy.md)

### Extends

- [`NamedTransactionFilter`](NamedTransactionFilter.md)

## Type Parameters

### T

`T`

## Properties

### filter

> **filter**: [`TransactionFilter`](TransactionFilter.md)

Defined in: [src/types/subscription.ts:306](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L306)

The filter itself.

#### Inherited from

[`NamedTransactionFilter`](NamedTransactionFilter.md).[`filter`](NamedTransactionFilter.md#filter)

---

### mapper()?

> `optional` **mapper**: (`transaction`) => `Promise`\<`T`[]\>

Defined in: [src/types/subscription.ts:411](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L411)

An optional data mapper if you want the event data to take a certain shape when subscribing to events with this filter name.

If not specified, then the event will simply receive a `SubscribedTransaction`.

Note: if you provide multiple filters with the same name then only the mapper of the first matching filter will be used

#### Parameters

##### transaction

[`SubscribedTransaction`](../classes/SubscribedTransaction.md)[]

#### Returns

`Promise`\<`T`[]\>

---

### name

> **name**: `string`

Defined in: [src/types/subscription.ts:304](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L304)

The name to give the filter.

#### Inherited from

[`NamedTransactionFilter`](NamedTransactionFilter.md).[`name`](NamedTransactionFilter.md#name)
