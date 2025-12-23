---
title: Overview
sidebar:
  label: Overview
  order: 0
---

**@algorandfoundation/algokit-subscriber**

---

This library a simple, but flexible / configurable Algorand transaction subscription / indexing mechanism. It allows you to quickly create Node.js or JavaScript services that follow or subscribe to the Algorand Blockchain.

[Documentation](https://algorandfoundation.github.io/algokit-subscriber-ts/)

## Install

Before installing, you'll need to decide on which version you want to target. Version 2 and 3 have largerly the same feature set, however v2 leverages algosdk@>=2.9.0<3.0, whereas v3 leverages algosdk@>=3.0.0. It is recommended that you aim to target the latest version, however in some circumstances that might not be possible.

Once you've decided on the target version, this library can be installed from NPM using your favourite npm client, e.g.:

To target algosdk@2 and use version 2 of AlgoKit Subscriber, run the below:

```
npm install algosdk@^2.10.0 @algorandfoundation/algokit-utils@^7.1.0 @algorandfoundation/algokit-subscriber@^2.2.0
```

To target algosdk@3 and use the latest version of AlgoKit Subscriber, run the below:

```
npm install algosdk@^3.1.0 @algorandfoundation/algokit-utils @algorandfoundation/algokit-subscriber
```

## Migration

Whilst we aim to minimise breaking changes, there are situations where they are required.

If you're migrating from an older version to v3, please refer to the [v3 migration guide](./docs/v3-migration.md).

## Quick start

```typescript
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
    /* ... other options (use intellisense to explore) */
  },
  algod,
  optionalIndexer,
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

## Key features

- **Notification _and_ indexing** - You have fine-grained control over the syncing behaviour and can control the number of rounds to sync at a time, the pattern of syncing i.e. start from the beginning of the chain, or start from the tip; drop stale records if your service can't keep up or keep syncing from where you are up to; etc.
- **Low latency processing** - When your service has caught up to the tip of the chain it can optionally wait for new rounds so you have a low latency reaction to a new round occurring
- **Watermarking and resilience** - You can create reliable syncing / indexing services through a simple round watermarking capability that allows you to create resilient syncing services that can recover from an outage
- **Extensive subscription filtering** - You can filter by transaction type, sender, receiver, note prefix, apps (ID, creation, on complete, ARC-4 method signature, call arguments, ARC-28 events), assets (ID, creation, amount transferred range), transfers (amount transferred range) and balance changes (algo and assets)
- **ARC-28 event subscription support** - You can subscribe to ARC-28 events for a smart contract, similar to how you can [subscribe to events in Ethereum](https://docs.web3js.org/guides/events_subscriptions/)
- **Balance change support** - Subscribed transactions will have all algo and asset balance changes calculated for you and you can also subscribe to balance changes that meet certain criteria
- **First-class inner transaction support** - Your filter will find arbitrarily nested inner transactions and return that transaction (indexer can't do this!)
- **State-proof support** - You can subscribe to state proof transactions
- **Simple programming model** - It's really easy to use and consume through easy to use, type-safe TypeScript methods and objects and subscribed transactions have a comprehensive and familiar model type with all relevant/useful information about that transaction (including things like transaction id, round number, created asset/app id, app logs, etc.) modelled on the indexer data model (which is used regardless of whether the transactions come from indexer or algod so it's a consistent experience)
- **Easy to deploy** - You have full control over how you want to deploy and use the subscriber; it will work with whatever persistence (e.g. sql, no-sql, etc.), queuing/messaging (e.g. queues, topics, buses, web hooks, web sockets) and compute (e.g. serverless periodic lambdas, continually running containers, virtual machines, etc.) services you want to use
- **Fast initial index** - There is an indexer catch up mode that allows you to use indexer to catch up to the tip of the chain in seconds or minutes rather than days; alternatively, if you prefer to just use algod and not indexer that option is available too!

## Balance change notes

The balance change semantics work mostly as expected, however the sematics around asset creation and destruction warrants further clarification.

When an asset is created, the full asset supply is attributed to the asset creators account.

The balance change for an asset create transaction will be as below:

```json
{
  "address": "VIDHG4SYANCP2GUQXXSFSNBPJWS4TAQSI3GH4GYO54FSYPDIBYPMSF7HBY", // The asset creator
  "assetId": 2391n, // The created asset id
  "amount": 100000n, // Full asset supply of the created asset
  "roles": ["AssetCreator"]
}
```

When an asset is destroyed, the full asset supply must be in the asset creators account and the asset manager must send the destroy transaction.
Unfortunately we cannot determine the asset creator or full asset supply from the transaction data. As a result the balance change will always be attributed to the asset manager and will have a 0 amount.
If you need to account for the asset supply being destroyed from the creators account, you'll need to handle this separately.

The balance change for an asset destroy transaction will be as below:

```typescript
{
  "address": "PIDHG4SYANCP2GUQXXSFSNBPJWS4TAQSI3GH4GYO54FSYPDIBYPMSF7HBY", // The asset destroyer, which will always be the asset manager
  "assetId": 2391n, // The destroyed asset id
  "amount": 0n, // This value will always be 0
  "roles": ["AssetDestroyer"]
}
```

## Examples

### Data History Museum index

The following code, when algod is pointed to TestNet, will find all transactions emitted by the [Data History Museum](https://datahistory.org) since the beginning of time in _seconds_ and then find them in real-time as they emerge on the chain.

The watermark is stored in-memory so this particular example is not resilient to restarts. To change that you can implement proper persistence of the watermark. There is [an example that uses the file system](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/examples/data-history-museum/index.ts) to demonstrate this.

```typescript
const algorand = AlgorandClient.fromEnvironment();
let watermark = 0n;
const subscriber = new AlgorandSubscriber(
  {
    events: [
      {
        eventName: 'dhm-asset',
        filter: {
          type: TransactionType.acfg,
          // Data History Museum creator account on TestNet
          sender: 'ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU',
        },
      },
    ],
    frequencyInSeconds: 5,
    maxRoundsToSync: 100,
    syncBehaviour: 'catchup-with-indexer',
    watermarkPersistence: {
      get: async () => watermark,
      set: async newWatermark => {
        watermark = newWatermark;
      },
    },
  },
  algorand.client.algod,
  algorand.client.indexer,
);
subscriber.onBatch('dhm-asset', async events => {
  console.log(`Received ${events.length} asset changes`);
  // ... do stuff with the events
});

subscriber.onError(e => {
  // eslint-disable-next-line no-console
  console.error(e);
});

subscriber.start();
```

### USDC real-time monitoring

The following code, when algod is pointed to MainNet, will find all transfers of [USDC](https://www.circle.com/en/usdc-multichain/algorand) that are greater than $1 and it will poll every 1s for new transfers.

```typescript
const algorand = AlgorandClient.fromEnvironment();
let watermark = 0n;

const subscriber = new AlgorandSubscriber(
  {
    events: [
      {
        eventName: 'usdc',
        filter: {
          type: TransactionType.axfer,
          assetId: 31566704n, // MainNet: USDC
          minAmount: 1_000_000n, // $1
        },
      },
    ],
    waitForBlockWhenAtTip: true,
    syncBehaviour: 'skip-sync-newest',
    watermarkPersistence: {
      get: async () => watermark,
      set: async newWatermark => {
        watermark = newWatermark;
      },
    },
  },
  algorand.client.algod,
);
subscriber.on('usdc', transfer => {
  // eslint-disable-next-line no-console
  console.log(
    `${transfer.sender} sent ${transfer.assetTransferTransaction?.receiver} USDC$${Number(
      (transfer.assetTransferTransaction?.amount ?? 0n) / 1_000_000n,
    ).toFixed(2)} in transaction ${transfer.id}`,
  );
});

subscriber.onError(e => {
  // eslint-disable-next-line no-console
  console.error(e);
});

subscriber.start();
```

## Getting started

To try examples in this repository:

- `npm install`
- Copy `.env.sample` to `.env` and edit to point to the Algorand node you want
- `npm run dhm` or F5 in Visual Studio Code to get breakpoint debugging against one of the examples (or choose another)
