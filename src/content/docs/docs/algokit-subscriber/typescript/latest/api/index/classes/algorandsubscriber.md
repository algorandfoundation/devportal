---
editUrl: false
next: false
prev: false
title: 'AlgorandSubscriber'
---

Defined in: [src/subscriber.ts:19](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/subscriber.ts#L19)

Handles the logic for subscribing to the Algorand blockchain and emitting events.

## Constructors

### Constructor

> **new AlgorandSubscriber**(`config`, `algod`, `indexer?`): `AlgorandSubscriber`

Defined in: [src/subscriber.ts:40](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/subscriber.ts#L40)

Create a new `AlgorandSubscriber`.

#### Parameters

##### config

[`AlgorandSubscriberConfig`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/algorandsubscriberconfig/)

The subscriber configuration

##### algod

`AlgodClient`

An algod client

##### indexer?

`IndexerClient`

An (optional) indexer client; only needed if `subscription.syncBehaviour` is `catchup-with-indexer`

#### Returns

`AlgorandSubscriber`

## Methods

### on()

> **on**\<`T`\>(`filterName`, `listener`): `AlgorandSubscriber`

Defined in: [src/subscriber.ts:190](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/subscriber.ts#L190)

Register an event handler to run on every subscribed transaction matching the given filter name.

The listener can be async and it will be awaited if so.

#### Type Parameters

##### T

`T` = [`SubscribedTransaction`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/subscribedtransaction/)

#### Parameters

##### filterName

`string`

The name of the filter to subscribe to

##### listener

[`TypedAsyncEventListener`](/docs/algokit-subscriber/typescript/latest/api/types/type-aliases/typedasynceventlistener/)\<`T`\>

The listener function to invoke with the subscribed event

#### Returns

`AlgorandSubscriber`

The subscriber so `on*` calls can be chained

#### Examples

```typescript
subscriber.on('my-filter', async transaction => {
  console.log(transaction.id);
});
```

```typescript
new AlgorandSubscriber({filters: [{name: 'my-filter', filter: {...}, mapper: (t) => t.id}], ...}, algod)
 .on<string>('my-filter', async (transactionId) => { console.log(transactionId) })
```

---

### onBatch()

> **onBatch**\<`T`\>(`filterName`, `listener`): `AlgorandSubscriber`

Defined in: [src/subscriber.ts:219](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/subscriber.ts#L219)

Register an event handler to run on all subscribed transactions matching the given filter name
for each subscription poll.

This is useful when you want to efficiently process / persist events
in bulk rather than one-by-one.

The listener can be async and it will be awaited if so.

#### Type Parameters

##### T

`T` = [`SubscribedTransaction`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/subscribedtransaction/)

#### Parameters

##### filterName

`string`

The name of the filter to subscribe to

##### listener

[`TypedAsyncEventListener`](/docs/algokit-subscriber/typescript/latest/api/types/type-aliases/typedasynceventlistener/)\<`T`[]\>

The listener function to invoke with the subscribed events

#### Returns

`AlgorandSubscriber`

The subscriber so `on*` calls can be chained

#### Examples

```typescript
subscriber.onBatch('my-filter', async transactions => {
  console.log(transactions.length);
});
```

```typescript
new AlgorandSubscriber({filters: [{name: 'my-filter', filter: {...}, mapper: (t) => t.id}], ...}, algod)
 .onBatch<string>('my-filter', async (transactionIds) => { console.log(transactionIds) })
```

---

### onBeforePoll()

> **onBeforePoll**(`listener`): `AlgorandSubscriber`

Defined in: [src/subscriber.ts:237](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/subscriber.ts#L237)

Register an event handler to run before every subscription poll.

This is useful when you want to do pre-poll logging or start a transaction etc.

The listener can be async and it will be awaited if so.

#### Parameters

##### listener

[`TypedAsyncEventListener`](/docs/algokit-subscriber/typescript/latest/api/types/type-aliases/typedasynceventlistener/)\<[`BeforePollMetadata`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/beforepollmetadata/)\>

The listener function to invoke with the pre-poll metadata

#### Returns

`AlgorandSubscriber`

The subscriber so `on*` calls can be chained

#### Example

```typescript
subscriber.onBeforePoll(async metadata => {
  console.log(metadata.watermark);
});
```

---

### onError()

> **onError**(`listener`): `AlgorandSubscriber`

Defined in: [src/subscriber.ts:291](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/subscriber.ts#L291)

Register an error handler to run if an error is thrown during processing or event handling.

This is useful to handle any errors that occur and can be used to perform retries, logging or cleanup activities.

The listener can be async and it will be awaited if so.

#### Parameters

##### listener

[`ErrorListener`](/docs/algokit-subscriber/typescript/latest/api/types/type-aliases/errorlistener/)

The listener function to invoke with the error that was thrown

#### Returns

`AlgorandSubscriber`

The subscriber so `on*` calls can be chained

#### Examples

```typescript
subscriber.onError(error => {
  console.error(error);
});
```

```typescript
const maxRetries = 3;
let retryCount = 0;
subscriber.onError(async error => {
  retryCount++;
  if (retryCount > maxRetries) {
    console.error(error);
    return;
  }
  console.log(`Error occurred, retrying in 2 seconds (${retryCount}/${maxRetries})`);
  await new Promise(r => setTimeout(r, 2_000));
  subscriber.start();
});
```

---

### onPoll()

> **onPoll**(`listener`): `AlgorandSubscriber`

Defined in: [src/subscriber.ts:258](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/subscriber.ts#L258)

Register an event handler to run after every subscription poll.

This is useful when you want to process all subscribed transactions
in a transactionally consistent manner rather than piecemeal for each
filter, or to have a hook that occurs at the end of each poll to commit
transactions etc.

The listener can be async and it will be awaited if so.

#### Parameters

##### listener

[`TypedAsyncEventListener`](/docs/algokit-subscriber/typescript/latest/api/types/type-aliases/typedasynceventlistener/)\<[`TransactionSubscriptionResult`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/transactionsubscriptionresult/)\>

The listener function to invoke with the poll result

#### Returns

`AlgorandSubscriber`

The subscriber so `on*` calls can be chained

#### Example

```typescript
subscriber.onPoll(async pollResult => {
  console.log(pollResult.subscribedTransactions.length, pollResult.syncedRoundRange);
});
```

---

### pollOnce()

> **pollOnce**(): `Promise`\<[`TransactionSubscriptionResult`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/transactionsubscriptionresult/)\>

Defined in: [src/subscriber.ts:66](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/subscriber.ts#L66)

Execute a single subscription poll.

This is useful when executing in the context of a process
triggered by a recurring schedule / cron.

#### Returns

`Promise`\<[`TransactionSubscriptionResult`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/transactionsubscriptionresult/)\>

The poll result

---

### start()

> **start**(`inspect?`, `suppressLog?`): `void`

Defined in: [src/subscriber.ts:112](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/subscriber.ts#L112)

Start the subscriber in a loop until `stop` is called.

This is useful when running in the context of a long-running process / container.

#### Parameters

##### inspect?

(`pollResult`) => `void`

A function that is called for each poll so the inner workings can be inspected / logged / etc.

##### suppressLog?

`boolean`

#### Returns

`void`

An object that contains a promise you can wait for after calling stop

---

### stop()

> **stop**(`reason`): `Promise`\<`void`\>

Defined in: [src/subscriber.ts:163](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/subscriber.ts#L163)

Stops the subscriber if previously started via `start`.

#### Parameters

##### reason

`unknown`

The reason the subscriber is being stopped

#### Returns

`Promise`\<`void`\>

A promise that can be awaited to ensure the subscriber has finished stopping
