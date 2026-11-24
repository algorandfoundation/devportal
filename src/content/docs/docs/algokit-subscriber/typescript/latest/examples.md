---
title: Code Examples
description: Runnable example subscribers included in the algokit-subscriber-ts repository.
sidebar:
  order: 4
---

The [repository](https://github.com/algorandfoundation/algokit-subscriber-ts) contains three runnable example
subscribers under `examples/`. Each one is a complete service that demonstrates a different combination of
filters, sync behaviour and watermark persistence.

## Running the examples

```bash
git clone https://github.com/algorandfoundation/algokit-subscriber-ts.git
cd algokit-subscriber-ts
npm install

# Point the examples at the node you want to use
cp .env.sample .env
```

Each example is launched via an npm script. The scripts that are prefixed with `watch-` set `RUN_LOOP=true`, which
makes the example call `subscriber.start()` and keep polling; without it the example does a single `subscriber.pollOnce()`
and exits.

| Example                                                                                                                  | Run once                    | Run continuously     |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------- | -------------------- |
| [Data History Museum](https://github.com/algorandfoundation/algokit-subscriber-ts/tree/main/examples/data-history-museum) | `npm run dhm`               | `npm run watch-dhm`  |
| [USDC transfers](https://github.com/algorandfoundation/algokit-subscriber-ts/tree/main/examples/usdc)                     | n/a — always runs in a loop | `npm run usdc`       |
| [xGov voting](https://github.com/algorandfoundation/algokit-subscriber-ts/tree/main/examples/xgov-voting)                 | `npm run xgov`              | `npm run watch-xgov` |

You can also press F5 in Visual Studio Code to get breakpoint debugging against one of the examples.

## Data History Museum

`examples/data-history-museum/index.ts` builds an index of every [Data History Museum](https://datahistory.org)
"Verifiably Authentic Digital Historical Artifact" from the beginning of the chain, and then keeps it up to date in
real-time. Because it uses [`catchup-with-indexer`](/docs/algokit-subscriber/typescript/latest/concepts/fast-catchup/), the initial index of millions of rounds
completes in seconds rather than days.

It demonstrates:

- An asset config (`acfg`) filter scoped to the Data History Museum creator account, resolved per-network
- [Indexer fast catchup](/docs/algokit-subscriber/typescript/latest/concepts/fast-catchup/) followed by algod polling every 5 seconds
- [Watermark persistence](/docs/algokit-subscriber/typescript/latest/concepts/watermarking/) to the file system (`watermark.txt`), so restarts resume where
  they left off
- `onBatch` for efficient bulk processing of each poll
- Reading ARC-69 metadata out of the transaction `note` field
- Retry-on-error via `onError`, plus clean shutdown on `SIGINT`/`SIGTERM`/`SIGQUIT`

```typescript
import { AlgorandClient } from '@algorandfoundation/algokit-utils'
import { TransactionType } from 'algosdk'
import { AlgorandSubscriber } from '@algorandfoundation/algokit-subscriber'

const algorand = AlgorandClient.testNet()

const subscriber = new AlgorandSubscriber(
  {
    filters: [
      {
        name: 'dhm-asset',
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
      get: getLastWatermark,
      set: saveWatermark,
    },
  },
  algorand.client.algod,
  algorand.client.indexer,
)

subscriber.onBatch('dhm-asset', async (transactions) => {
  // eslint-disable-next-line no-console
  console.log(`Received ${transactions.length} asset changes`)
  await saveDHMTransactions(transactions)
})

subscriber.start()
```

## USDC transfers

`examples/usdc/index.ts` is a minimal real-time notification service. It watches for
[USDC](https://www.circle.com/en/usdc-multichain/algorand) transfers greater than $1 and logs them as they appear.
It is pinned to MainNet because that's where the USDC asset (`31566704`) lives.

It demonstrates:

- An asset transfer (`axfer`) filter with `assetId` and `minAmount` (both `bigint` in v3)
- [`waitForBlockWhenAtTip`](/docs/algokit-subscriber/typescript/latest/concepts/low-latency/) for low-latency processing at the tip of the chain
- `skip-sync-newest` [sync behaviour](/docs/algokit-subscriber/typescript/latest/concepts/sync-behaviour/), so a restart never replays stale transfers
- An in-memory watermark, since this subscriber doesn't need to be resilient across restarts

```typescript
import { AlgorandClient } from '@algorandfoundation/algokit-utils'
import algosdk from 'algosdk'
import { AlgorandSubscriber } from '@algorandfoundation/algokit-subscriber'
import TransactionType = algosdk.TransactionType

const algorand = AlgorandClient.mainNet()
let watermark = 0n

const subscriber = new AlgorandSubscriber(
  {
    filters: [
      {
        name: 'usdc',
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
      set: async (newWatermark) => {
        watermark = newWatermark
      },
    },
  },
  algorand.client.algod,
)

subscriber.on('usdc', (transfer) => {
  // eslint-disable-next-line no-console
  console.log(
    `${transfer.sender} sent ${transfer.assetTransferTransaction?.receiver} USDC$${(
      Number(transfer.assetTransferTransaction?.amount ?? 0n) / 1_000_000
    ).toFixed(2)} in transaction ${transfer.id}`,
  )
})

subscriber.start()
```

## xGov voting

`examples/xgov-voting/index.ts` is the most involved example. It indexes the votes cast in an
Algorand xGov voting round into a SQL database via
[Prisma](https://www.prisma.io/), decoding the ARC-4 vote arguments out of each app call. Note that the
[xGov programme](https://xgov.algorand.co/) has since moved on-chain, so this example targets a
[historical voting round](https://lora.algokit.io/mainnet/application/1821334702).

It demonstrates:

- An app call (`appl`) filter combining `appId` with an ARC-4 `methodSignature`
- Decoding app call arguments with `algosdk` ABI types (`ABIArrayDynamicType`, `ABIUintType`)
- `onPoll` combined with a database transaction so subscribed transactions and the new watermark are persisted
  atomically — the [transactional outbox](/docs/algokit-subscriber/typescript/latest/concepts/watermarking/) pattern
- Using a typed app client to read the voting round's global state and metadata before subscribing

Before running it you need to apply the Prisma migrations, which `npm run xgov` does for you:

```bash
npm run xgov
```