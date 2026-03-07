---
title: v4 Migration Guide
description: Migration guide for upgrading from AlgoKit Subscriber v3 to v4.
---

This release updates the subscriber library to support `@algorandfoundation/algokit-utils@^10.0.0`, which decouples from algosdk. The subscriber API remains largely the same, but client types have changed.

## What Changed

1. **Client Types**: The constructor now expects `AlgodClient` and `IndexerClient` from `@algorandfoundation/algokit-utils` instead of `Algodv2` and `Indexer` from algosdk
2. **Import Paths**: Types like `TransactionType` and `ApplicationOnComplete` (renamed from `OnApplicationComplete`) now come from algokit-utils subpath imports
3. **No Configuration Changes**: All subscriber configuration options, filters, and event handling remain unchanged

## Migration Steps

### Step 1 - Update Client Instantiation

The `AlgorandSubscriber` constructor and `getSubscribedTransactions` function now expect `AlgodClient` and `IndexerClient` types from `@algorandfoundation/algokit-utils` instead of algosdk types.

```typescript
/**** Before (v3 with utils v9) ****/
import { AlgorandClient } from '@algorandfoundation/algokit-utils'
const algorand = AlgorandClient.testNet()

const subscriber = new AlgorandSubscriber(
  { filters: [...], watermarkPersistence: {...} },
  algorand.client.algod,  // This was Algodv2 type from algosdk
  algorand.client.indexer // This was Indexer type from algosdk
)

/**** After (v4 with utils v10) ****/
import { AlgorandClient } from '@algorandfoundation/algokit-utils'
const algorand = AlgorandClient.testNet()

const subscriber = new AlgorandSubscriber(
  { filters: [...], watermarkPersistence: {...} },
  algorand.client.algod,  // Now AlgodClient type from algokit-utils
  algorand.client.indexer // Now IndexerClient type from algokit-utils
)
```

**Note**: If you're already using `AlgorandClient` from algokit-utils v10, your code likely needs no changes - the client types are handled automatically when you access `algorand.client.algod` and `algorand.client.indexer`.

### Step 2 - Update Type Imports

Types that were previously imported from algosdk should now be imported from algokit-utils subpath modules.

```typescript
/**** Before ****/
import { TransactionType, OnApplicationComplete } from 'algosdk'

// Using in filters
const subscriber = new AlgorandSubscriber(
  {
    filters: [{
      name: 'payments',
      filter: { type: TransactionType.pay }
    }],
    // ...
  },
  algod,
  indexer
)

/**** After ****/
import { TransactionType } from '@algorandfoundation/algokit-utils/transact'
import type { ApplicationOnComplete } from '@algorandfoundation/algokit-utils/indexer'

// Using in filters (same as before)
const subscriber = new AlgorandSubscriber(
  {
    filters: [{
      name: 'payments',
      filter: { type: TransactionType.pay }
    }],
    // ...
  },
  algod,
  indexer
)
```

### Common Import Updates

| Before (algosdk) | After (algokit-utils) |
|------------------|----------------------|
| `import { TransactionType } from 'algosdk'` | `import { TransactionType } from '@algorandfoundation/algokit-utils/transact'` |
| `import { OnApplicationComplete } from 'algosdk'` | `import type { ApplicationOnComplete } from '@algorandfoundation/algokit-utils/indexer'` |
| `import algosdk from 'algosdk'; const algod = new algosdk.Algodv2(...)` | `import { AlgorandClient } from '@algorandfoundation/algokit-utils'; const algorand = AlgorandClient.testNet()` |

### Step 3 - No Other Changes Required

The following remain unchanged:
- Subscriber configuration (`AlgorandSubscriberConfig`)
- Filter definitions (`TransactionFilter`)
- Event handling methods (`on`, `onBatch`, `onPoll`, `onError`)
- Watermark persistence
- Sync behavior options
- ARC-28 event handling
- Balance change tracking

Your existing subscription logic, filters, and event handlers should work without modification.

## Example Migration

Here's a complete example showing the migration:

```typescript
/**** Before (v3 with utils v9) ****/
import { AlgorandClient } from '@algorandfoundation/algokit-utils'
import { AlgorandSubscriber } from '@algorandfoundation/algokit-subscriber'
import { TransactionType } from 'algosdk'

const algorand = AlgorandClient.testNet()

const subscriber = new AlgorandSubscriber(
  {
    filters: [{
      name: 'usdc-transfers',
      filter: {
        type: TransactionType.axfer,
        assetId: 31566704n,
        minAmount: 1_000_000n,
      }
    }],
    watermarkPersistence: {
      get: async () => 0n,
      set: async (watermark) => { /* save watermark */ }
    }
  },
  algorand.client.algod,
  algorand.client.indexer
)

subscriber.on('usdc-transfers', (transaction) => {
  console.log('USDC transfer:', transaction.id)
})

subscriber.start()

/**** After (v4 with utils v10) ****/
import { AlgorandClient } from '@algorandfoundation/algokit-utils'
import { AlgorandSubscriber } from '@algorandfoundation/algokit-subscriber'
import { TransactionType } from '@algorandfoundation/algokit-utils/transact'  // Changed import

const algorand = AlgorandClient.testNet()

const subscriber = new AlgorandSubscriber(
  {
    filters: [{
      name: 'usdc-transfers',
      filter: {
        type: TransactionType.axfer,
        assetId: 31566704n,
        minAmount: 1_000_000n,
      }
    }],
    watermarkPersistence: {
      get: async () => 0n,
      set: async (watermark) => { /* save watermark */ }
    }
  },
  algorand.client.algod,
  algorand.client.indexer
)

subscriber.on('usdc-transfers', (transaction) => {
  console.log('USDC transfer:', transaction.id)
})

subscriber.start()
```

**Key change**: Only the import statement for `TransactionType` changed. Everything else remains the same.

## For More Information

For more details on algokit-utils v10 changes, see the [algokit-utils v9 to v10 migration guide](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/docs/src/content/docs/migration/v9-to-v10-migration.md).
