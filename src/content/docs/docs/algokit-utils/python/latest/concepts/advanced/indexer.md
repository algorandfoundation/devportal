---
title: "Indexer lookups / searching"
description: "Indexer lookups / searching is a higher-order use case capability provided by AlgoKit Utils that builds on top of the core capabilities. It provides access to the algosdk indexer client, which can be used to find historical transactions, accounts, assets and applications."
---

Indexer lookups / searching is a higher-order use case capability provided by AlgoKit Utils that builds on top of the core capabilities. It provides access to the `algosdk` [indexer client](https://py-algorand-sdk.readthedocs.io/en/latest/algosdk/v2client/indexer.html), which can be used to find historical transactions, accounts, assets and applications.

To access the indexer client you can get it from [`AlgorandClient`](/docs/algokit-utils/python/latest/concepts/core/algorand-client/) via `algorand.client.indexer`:

```python
indexer = algorand.client.indexer
```

The indexer calls are not made any easier to call by exposing them via `AlgorandClient`. This is because we want to add a tiny bit of friction to using indexer, given it's an expensive API to run for node providers, the data from it can sometimes be slow and stale, and there are alternatives [that](https://github.com/algorandfoundation/algokit-subscriber-ts) [allow](https://github.com/algorand/conduit) individual projects to index subsets of chain data specific to them as a preferred option. In saying that, it's a very useful API for doing ad hoc data retrieval, writing automated tests, and many other uses.

See [Client management](/docs/algokit-utils/python/latest/concepts/core/client/) for how the indexer client is configured and resolved from the environment.

## Indexer methods

The `algosdk.v2client.indexer.IndexerClient` exposes the full [indexer API](https://dev.algorand.co/reference/rest-apis/indexer). Commonly used methods include:

**Lookup methods:**

- `indexer.transaction(txid)` - Finds a transaction by ID
- `indexer.account_info(address)` - Finds an account by address
- `indexer.lookup_account_assets(address)` - Finds all asset holdings for an account
- `indexer.lookup_account_application_local_state(address)` - Finds all application local states for an account
- `indexer.application_info(application_id)` - Finds an application by ID
- `indexer.application_logs(application_id)` - Finds log messages for an application
- `indexer.application_box_by_name(application_id, box_name)` - Finds a specific application box by name
- `indexer.asset_info(asset_id)` - Finds an asset by ID
- `indexer.asset_balances(asset_id)` - Finds all asset holdings for the given asset
- `indexer.block_info(round_num)` - Finds a block by round number

**Search methods:**

- `indexer.search_transactions(...)` - Search for transactions with a given set of criteria
- `indexer.search_transactions_by_address(address, ...)` - Search for transactions for a given address
- `indexer.search_asset_transactions(asset_id, ...)` - Search for transactions involving a given asset
- `indexer.accounts(...)` - Search for accounts with a given set of criteria
- `indexer.search_applications(...)` - Search for applications with a given set of criteria
- `indexer.search_assets(...)` - Search for assets with a given set of criteria
- `indexer.application_boxes(application_id)` - Search for application boxes
- `indexer.search_block_headers(...)` - Search for block headers with a given set of criteria

### Search transactions example

To use the `indexer.search_transactions` method, you can follow this example as a starting point:

```python
from algokit_utils import AlgorandClient

algorand = AlgorandClient.testnet()
indexer = algorand.client.indexer

# Find all payment transactions sent by an address
result = indexer.search_transactions(
    address="SENDERADDRESS",
    address_role="sender",
    txn_type="pay",
    min_amount=1_000_000,  # microAlgo
)

for txn in result["transactions"]:
    print(txn["id"], txn["payment-transaction"]["amount"])
```

> [!NOTE]
> The algosdk indexer client returns plain `dict` responses that mirror the [indexer REST API](https://dev.algorand.co/reference/rest-apis/indexer) JSON payloads, so refer to the REST API documentation for the available response fields.

### Automatic retry

When the indexer client is resolved via [`ClientManager`](/docs/algokit-utils/python/latest/concepts/core/client/), it is configured against the target network from environment variables or explicit configuration. Note that indexer data can lag behind algod by a few rounds — when writing automated tests that issue transactions and immediately query indexer, you may need to allow for this delay.
