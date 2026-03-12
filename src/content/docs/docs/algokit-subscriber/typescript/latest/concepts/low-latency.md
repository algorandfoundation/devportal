---
title: Low Latency Processing
description: Configure polling semantics for minimal latency when processing new blocks.
---

You can control the polling semantics of the library when using the [`AlgorandSubscriber`](/docs/algokit-subscriber/typescript/latest/guide/subscriber/) by either specifying the `frequencyInSeconds` parameter to control the duration between polls or you can use the `waitForBlockWhenAtTip` parameter to indicate the subscriber should [call algod to ask it to inform the subscriber when a new round is available](https://dev.algorand.co/reference/rest-apis/algod/#waitforblock) so the subscriber can immediately process that round with a much lower-latency. When this mode is set, the subscriber intelligently uses this option only when it's caught up to the tip of the chain, but otherwise uses `frequencyInSeconds` while catching up to the tip of the chain.

e.g.

```typescript
// When catching up to tip of chain will poll every 1s for the next 1000 blocks, but when caught up will poll algod for a new block so it can be processed immediately with low latency
const subscriber = new AlgorandSubscriber({frequencyInSeconds: 1, waitForBlockWhenAtTip: true, maxRoundsToSync: 1000, ...}, ...)
...
subscriber.start()
```

If you are using [`getSubscribedTransactions`](/docs/algokit-subscriber/typescript/latest/guide/subscriptions/) or the `pollOnce` method on `AlgorandSubscriber` then you can use your infrastructure and/or surrounding orchestration code to take control of the polling duration.

If you want to manually run code that waits for a given round to become available you can execute the following code:

```typescript
await algod.statusAfterBlock(roundNumberToWaitFor)
```

It's worth noting special care has been placed in the subscriber library to properly handle abort signalling. All asynchronous operations including algod polls and polling waits have abort signal handling in place so if you call `subscriber.stop()` at any point in time it should almost immediately, cleanly, exit and if you want to wait for the stop to finish you can `await subscriber.stop()`.

If you want to hook this up to Node.js process signals you can include code like this in your service entrypoint:

```typescript
;['SIGINT', 'SIGTERM', 'SIGQUIT'].forEach((signal) =>
  process.on(signal, () => {
    // eslint-disable-next-line no-console
    console.log(`Received ${signal}; stopping subscriber...`)
    subscriber.stop(signal)
  }),
)
```