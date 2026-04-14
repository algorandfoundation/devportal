---
title: Quick Start
description: Get up and running with AlgoKit Subscriber in minutes.
---

## Install

This library can be installed from NPM using your favourite npm client, e.g.:

```bash
npm install @algorandfoundation/algokit-subscriber
```

## Quick start

```typescript
import { AlgorandClient } from '@algorandfoundation/algokit-utils';
import { AlgorandSubscriber } from '@algorandfoundation/algokit-subscriber';
import { TransactionType } from '@algorandfoundation/algokit-utils/transact';

const algorand = AlgorandClient.testNet();

// Create subscriber
const subscriber = new AlgorandSubscriber(
  {
    filters: [
      {
        name: 'filter1',
        filter: {
          type: TransactionType.pay,
          sender: 'ABC...',
        },
      },
    ],
    watermarkPersistence: {
      get: async () => 0n,
      set: async watermark => {
        /* save watermark */
      },
    },
  },
  algorand.client.algod,
  algorand.client.indexer,
);

// Set up subscription(s)
subscriber.on('filter1', async transaction => {
  // ...
});
//...

// Set up error handling
subscriber.onError(e => {
  // ...
});

// Either: Start the subscriber (if in long-running process)
subscriber.start();

// OR: Poll the subscriber (if in cron job / periodic lambda)
subscriber.pollOnce();
```

## Entry points

There are two entry points into the subscriber functionality:

- The lower level [`getSubscribedTransactions`](/docs/algokit-subscriber/typescript/latest/guide/subscriptions/) method that contains the raw subscription logic for a single "poll"
- The [`AlgorandSubscriber`](/docs/algokit-subscriber/typescript/latest/guide/subscriber/) class that provides a higher level interface that is easier to use and takes care of a lot more orchestration logic for you (particularly around the ability to continuously poll)

Both are first-class supported ways of using this library, but we generally recommend starting with the `AlgorandSubscriber` since it's easier to use and will cover the majority of use cases.

## Simple programming model

This library is easy to use and consume through easy to use, type-safe TypeScript methods and objects and subscribed transactions have a comprehensive and familiar model type with all relevant/useful information about that transaction (including things like transaction id, round number, created asset/app id, app logs, etc.) modelled on the indexer data model (which is used regardless of whether the transactions come from indexer or algod so it's a consistent experience).

Furthermore, the `AlgorandSubscriber` class has a familiar programming model based on the [Node.js EventEmitter](https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter), but with async methods.

For more examples of how to use it see the [AlgorandSubscriber guide](/docs/algokit-subscriber/typescript/latest/guide/subscriber/).

## Easy to deploy

Because the entry points of this library are simple TypeScript methods to execute it you simply need to run it in a valid JavaScript execution environment. For instance, you could run it within a web browser if you want a user facing app to show real-time transaction notifications in-app, or in a Node.js process running in the myriad of ways Node.js can be run.

Because of that, you have full control over how you want to deploy and use the subscriber; it will work with whatever persistence (e.g. sql, no-sql, etc.), queuing/messaging (e.g. queues, topics, buses, web hooks, web sockets) and compute (e.g. serverless periodic lambdas, continually running containers, virtual machines, etc.) services you want to use.
