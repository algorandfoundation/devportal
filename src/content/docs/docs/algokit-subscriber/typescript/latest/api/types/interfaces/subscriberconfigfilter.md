---
editUrl: false
next: false
prev: false
title: 'SubscriberConfigFilter'
---

Defined in: [src/types/subscription.ts:385](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L385)

A single event to subscribe to / emit.

## Extends

- [`NamedTransactionFilter`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/namedtransactionfilter/)

## Type Parameters

### T

`T`

## Properties

### filter

> **filter**: [`TransactionFilter`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/transactionfilter/)

Defined in: [src/types/subscription.ts:287](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L287)

The filter itself.

#### Inherited from

[`NamedTransactionFilter`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/namedtransactionfilter/).[`filter`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/namedtransactionfilter/#filter)

---

### mapper()?

> `optional` **mapper**: (`transaction`) => `Promise`\<`T`[]\>

Defined in: [src/types/subscription.ts:392](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L392)

An optional data mapper if you want the event data to take a certain shape when subscribing to events with this filter name.

If not specified, then the event will simply receive a `SubscribedTransaction`.

Note: if you provide multiple filters with the same name then only the mapper of the first matching filter will be used

#### Parameters

##### transaction

[`SubscribedTransaction`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/subscribedtransaction/)[]

#### Returns

`Promise`\<`T`[]\>

---

### name

> **name**: `string`

Defined in: [src/types/subscription.ts:285](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L285)

The name to give the filter.

#### Inherited from

[`NamedTransactionFilter`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/namedtransactionfilter/).[`name`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/namedtransactionfilter/#name)
